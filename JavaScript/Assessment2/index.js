// Get table by ID
const table = document.getElementById('table');

// Create <thead>
const tHead = table.createTHead();

// Create <tr> in <thead>
const thRow = tHead.insertRow();

//Create <th>
const tableHeaders = [{ id: '#' }, { name: 'NAME' }, { discription: 'DISCRIPTION' }, { status: 'STATUS' }, { rate: 'RATE' },{ balance: 'BALANCE' }, { deposit: 'DEPOSIT'}, { action: 'ACTION' }];

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
        createTableBody(Identity, tBody);
        console.log(Identity);
    } catch (error) {
        console.error(error);
    }
    console.log(response);
}

function createTableBody(Users) {
    table.removeChild(table.getElementsByTagName('tbody')[0]);
    tBody = table.createTBody();

    Users.forEach(element => {
        const tr = tBody.insertRow();

        tableHeaders.forEach(header => {
            const td = tr.insertCell();
            if (header.action !== 'ACTION') {
                const key = Object.keys(header)[0];
                td.appendChild(document.createTextNode(element[key]));
            } else {
                const editBtn = document.createElement('button');
                editBtn.innerText = 'Edit';
                editBtn.onclick = function () {editUsers(element)};
                td.appendChild(document.innerHTML = editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'Delete';
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
                rate:rate,
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
function checkname() {
    const nameRegex = /^([a-zA-Z]$){3,25}/;
    const nameInput = document.getElementById('name').value;
    const AddUserBtn = document.getElementById("");
    const nameError = document.getElementById('name-error');
    if (!nameRegex.test(nameInput.value)) {
        // AddUserBtn.disabled = true;
        nameError.style.display = 'block';
    } else {
        // AddUserBtn.disabled = false;
        nameError.style.display = 'none';
    }
}

//discription Regex
function checkdiscription() {
    const discriptionRegex = /^[a-zA-Z''-'\s]{3,150}$/;
    const discriptionInput = document.getElementById('discription').value;
    const AddUserBtn = document.getElementById("userbtn");
    const discriptionError = document.getElementById('discription-error');
    if (!discriptionRegex.test(discriptionInput.value)) {
        AddUserBtn.disabled = true;
        discriptionError.style.display = 'block';
    } else {
        // AddUserBtn.disabled = false;
        discriptionError.style.display = 'none';
    }
}

//Rate Regex
function checkrate() {
    const rateRegex = /^[0-9-]+$/;
    const rateInput = document.getElementById('rate').value;
    const AddUserBtn = document.getElementById("userbtn");
    const rateError = document.getElementById('rate-error');
    if (!rateRegex.test(rateInput.value)) {
        // AddUserBtn.disabled = true;
        rateError.style.display = 'block';
    } else {
        // AddUserBtn.disabled = false;
        rateError.style.display = 'none';
    }
}

//Balance Regex
function checkbalance() {
    const balanceRegex = /^[0-9-]+$/;
    const balanceInput = document.getElementById('balance').value;
    const AddUserBtn = document.getElementById("userbtn");
    const balanceError = document.getElementById('balance-error');
    if (!balanceRegex.test(balanceInput.value)) {
        // AddUserBtn.disabled = true;
        balanceError.style.display = 'block';
    } else {
        // AddUserBtn.disabled = false;
        balanceError.style.display = 'none';
    }
}

//Deposit Regex
function checkdeposit() {
    const depositRegex = /^[0-9-]+$/;
    const depositInput = document.getElementById('deposit').value;
    const AddUserBtn = document.getElementById("userbtn");
    const depositError = document.getElementById('deposit-error');
    if (!depositRegex.test(depositInput.value)) {
        // AddUserBtn.disabled = true;
        depositError.style.display = 'block';
    } else {
        // AddUserBtn.disabled = false;
        depositError.style.display = 'none';
    }
}