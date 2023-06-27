// Get table by ID
const table = document.getElementById('table');

// Create <thead>
const tHead = table.createTHead();

// Create <tr> in <thead>
const thRow = tHead.insertRow();

//Create <th>
const tableHeaders = [{ id: '#' }, { name: 'NAME' }, { discription: 'DISCRIPTION' }, { status: 'STATUS' }, { rate: 'RATE' }, { balance: 'BALANCE' }, { deposit: 'DEPOSIT' }, { action: 'ACTION' }];

tableHeaders.forEach(Headers => {
    const td = thRow.insertCell();
    const value = Object.values(Headers)[0];
    td.appendChild(document.createTextNode(value));
});

//Create <tbody>
let tBody = table.createTBody();

// Get submit Button by ID
var submitBtn = document.getElementById('pushBtn');

// Show data in table on page load
document.body.onload = getUsers();

//Get Data From Server (D.json)
async function getUsers() {
    let response;
    try {
        response = await fetch('http://localhost:3000/Users');
        const Identity = await response.json();
        createTableBody(Identity);
        // console.log(Identity);
    } catch (error) {
        console.error(error);
    }
    // console.log(response);
}

function createTableBody(Users) {
    table.removeChild(table.getElementsByTagName('tbody')[0]);
    tBody = table.createTBody();

    Users.forEach(element => {
        const tr = tBody.insertRow();

        tableHeaders.forEach(header => {
            const td = tr.insertCell();
            // console.log("1111");
            if (header.action !== 'ACTION') {
                // const key = Object.keys(header)[0];
                // td.appendChild(document.createTextNode(element[key]));

                if (header.status === 'STATUS') {
                    td.setAttribute('id','status');
                    let span = document.createElement('span');

                    if (element[Object.keys(header)] === 'Open') {
                        span.style.backgroundColor = "hsl(236.36deg 31.43% 79.41%)";
                        span.style.color = "purple";
                    }
                    else if (element[Object.keys(header)] === 'Error') {
                        span.style.backgroundColor = "rgb(250, 186, 186)";
                        span.style.color = "red";
                    }
                    else if (element[Object.keys(header)] === 'Success') {
                        span.style.backgroundColor = "rgb(126, 248, 130)";
                        span.style.color = "green";
                    }
                    else {
                        span.style.backgroundColor = "#d0f0f5";
                        span.style.color = "black";
                    }

                    let statusData = document.createTextNode(element[Object.keys(header)]);
                    td.appendChild(span);
                    span.appendChild(statusData);
                }
                else if (header.balance === 'BALANCE') {

                    if (element[Object.keys(header)] >= '0') {
                        td.style.color = "green";
                    }
                    else {
                        td.style.color = "red";
                    }
                    let val = "$" + element[Object.keys(header)]
                    td.appendChild(document.createTextNode(val));
                }
                else {
                    td.appendChild(document.createTextNode(element[Object.keys(header)]));
                }

            }
            else {
                td.setAttribute('id', 'action');
            // } else {
                const editBtn = document.createElement('button');
                editBtn.innerText = 'Edit';
                editBtn.setAttribute('id', 'edit-button');
                editBtn.onclick = function () {editUsers(element)};
                td.appendChild(document.innerHTML = editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'Delete';
                deleteBtn.setAttribute('id', 'delete-button');
                deleteBtn.onclick = function () {deleteUsers(element)};
                td.appendChild(document.innerHTML = deleteBtn);
            }
        })
    });
}


//Post Data - Add data to server (D.json)
function addData() {
    var name = document.getElementById('name').value;
    var discription = document.getElementById('discription').value;
    var status = document.getElementById('status').value;
    var rate = document.getElementById('rate').value;
    var balance = document.getElementById('balance').value;
    var deposit = document.getElementById('deposit').value;
    fetch('http://localhost:3000/Users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            discription: discription,
            status: status,
            rate: rate,
            balance: balance,
            deposit: deposit
        })
    })
        .then(
            getUsers(),
            formClear()
        )
}

//Update Data
var submitButton = document.getElementById('editUsers');
function editUsers(element) {

    document.getElementById('name').value = element.name;
    document.getElementById('discription').value = element.discription;
    document.getElementById('status').value = element.status;
    document.getElementById('rate').value = element.rate;
    document.getElementById('balance').value = element.balance;
    document.getElementById('deposit').value = element.deposit;

    let id = element.id

    submitBtn.onclick = async function () {
        const name = document.getElementById('name').value;
        const discription = document.getElementById('discription').value;
        const status = document.getElementById('status').value;
        const rate = document.getElementById('rate').value;
        const balance = document.getElementById('balance').value;
        const deposit = document.getElementById('deposit').value;
        fetch(`http://localhost:3000/Users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                discription: discription,
                status: status,
                rate: status,
                balance: balance,
                deposit: deposit
            })
        });
        await getUsers(),
            await formClear();
    }
}

//Delete Data
function deleteUsers(Identity) {
    let id = Identity.id;
    fetch(`http://localhost:3000/Users/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    getUsers();
}

// Reset form 
function formClear() {
    document.getElementById("name").value = null;
    document.getElementById("discription").value = null;
    document.getElementById("status").value = null;
    document.getElementById("rate").value = null;
    document.getElementById("balance").value = null;
    document.getElementById("deposit").value = null;
}

//Name regex
/*
const nameInput = document.getElementById('name')
const nameError = document.getElementById('name-error')

nameInput.addEventListener('input', () => {
    const nameRegex = /^[A-Za-z0-9]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
});

//Discription Regex
const discriptionInput = document.getElementById('discription')
const discriptionError = document.getElementById('discription-error')

discriptionInput.addEventListener('input', () => {
    const discriptionRegex = /[A-Z a-z]+/;

    if (!discriptionRegex.test(discriptionInput.value)) {
        discriptionError.style.display = 'block';
    } else {
        discriptionError.style.display = 'none';
    }
});

//Contact No Regex
const contactInput = document.getElementById('contact')
const contactError = document.getElementById('contact-error')

contactInput.addEventListener('input', () => {
    const contactRegex = /[ 9 8 7 6 ][0-9]{9}/;

    if (!contactRegex.test(contactInput.value)) {
        contactError.style.display = 'block';
    } else {
        contactError.style.display = 'none';
    }
});

//Email Regex
const emailInput = document.getElementById('email')
const emailError = document.getElementById('email-error')

emailInput.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@1rivet.com$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

//Password Regex
const passwordInput = document.getElementById('password')
const passwordError = document.getElementById('password-error')

passwordInput.addEventListener('input', () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});
*/
// Filter Records
const selectElement = document.getElementById('filter');
selectElement.addEventListener('change', () => {
    
    let statusValue = selectElement.value;
    filterRecords(statusValue);
})

function filterRecords(status)
{
    var tbl = document.getElementById('table');
    var rows = tbl.getElementsByTagName("tr");
    console.log(rows);
    for(var i = 0; i < rows.length; i++)
    {
        var row = rows[i];
        var statusCol = row.querySelector("#status");
        console.log("statusCol :",statusCol);
        console.log(status);
        if(statusCol)
        {
            var statusRow = statusCol.textContent;
            console.log(statusRow);
            if(statusRow !== status)
            {
                row.style.display = "none";
            }
            else
            {
                row.style.display = "table-row";
            }
        }
        else if(status === "0")
        {
            getUsers();
        }
    }
}