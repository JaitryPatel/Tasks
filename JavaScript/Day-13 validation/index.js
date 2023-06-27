// Get table by ID
const table = document.getElementById('table');

// Create <thead>
const tHead = table.createTHead();

// Create <tr> in <thead>
const thRow = tHead.insertRow();

//Create <th>
const tableHeaders = [{ id: 'Id' }, { fname: 'First Name' }, { lname: 'Last Name' }, { contact: 'Contact No' }, { email: 'Email-id' },{ password: 'Password' },  { action: 'Action' }];

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
document.body.onload = getStudents();

//Get Data From Server (Info.json)
async function getStudents() {
    let response;
    try {
        response = await fetch(' http://localhost:3000/Students');
        const Students = await response.json();
        createTableBody(Students, tBody);
        console.log(Students);
    } catch (error) {
        console.error(error);
    }
    console.log(response);
}

// function addStudent() {
//     fetch(' http://localhost:3000/Students', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'Jeel Patel',
//             birthdate: '05/03/2005',
//             age: 15,
//             gender: 'Male',
//             email: 'Jeel@gmail.com'

//         })
//     })
// }

function createTableBody(Students) {
    table.removeChild(table.getElementsByTagName('tbody')[0]);
    tBody = table.createTBody();
    Students.forEach(element => {
        const tr = tBody.insertRow();
        tableHeaders.forEach(header => {
            const td = tr.insertCell();
            if (header.action !== 'Action') {
                const key = Object.keys(header)[0];
                td.appendChild(document.createTextNode(element[key]));
            } else {
                const editButton = document.createElement('button');
                editButton.innerText = 'Edit';
                editButton.onclick = () => editStudents(element)
                // editButton.onclick = () => editStudent(element, element.id);
                td.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.onclick = () => deleteStudent(element.id);
                td.appendChild(deleteButton);
            }
        })
    });
}


//Post Data
function addData() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    fetch(' http://localhost:3000/Students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: fname, 
            lname: lname , 
            contact: contact, 
            email: email,
            password: password
        })
    })
}

//Update Data
var submitButton = document.getElementById('editStudents');
function editStudents(element) {
    let id = element.id
    document.getElementById('fname').value = element.fname;
    document.getElementById('lname').value = element.lname;
    document.getElementById('contact').value = element.contact;
    document.getElementById('email').value = element.email;
    document.getElementById('password').value = element.password;

    submitButton.onclick =async function update() {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
         fetch(`http://localhost:3000/Students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: fname, 
                lname: lname , 
                contact: contact, 
                email: email,
                password: password
            })
        })
        await getStudents();
    }
}

//Delete Data
function deleteStudent(userid) {
    fetch(`http://localhost:3000/Students/${userid}`, {
        method: "DELETE",
    });
    getStudents();
}

//First Name regex
const fnameInput = document.getElementById('fname')
const fnameError = document.getElementById('fname-error')

fnameInput.addEventListener('input', () => {
    const fnameRegex = /[A-Z a-z]+/;

    if (!fnameRegex.test(fnameInput.value)) {
        fnameError.style.display = 'block';
    } else {
        fnameError.style.display = 'none';
    }
});

//Last Name Regex
const lnameInput = document.getElementById('lname')
const lnameError = document.getElementById('lname-error')

lnameInput.addEventListener('input', () => {
    const lnameRegex = /[A-Z a-z]+/;

    if (!lnameRegex.test(lnameInput.value)) {
        lnameError.style.display = 'block';
    } else {
        lnameError.style.display = 'none';
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
    const  emailRegex = /^[a-zA-Z0-9._%+-]+@1rivet.com$/;

    if (! emailRegex.test( emailInput.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

//Password Regex
const passwordInput = document.getElementById('password')
const passwordError = document.getElementById('password-error')

passwordInput.addEventListener('input', () => {
    const  passwordRegex = /srdfghd/;

    if (! passwordRegex.test( passwordInput.value)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});


