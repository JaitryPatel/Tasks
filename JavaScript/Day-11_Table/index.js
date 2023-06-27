const table = document.getElementById('table');
let userid;

const tableHeaders = [{ id: 'Id' }, { username: 'Name' }, { userbirthdate: 'BirthDate' }, { userage: 'Age' }, { usergender: 'Gender' }, { useremail: 'Email-id' }, { action: 'Action' }];

const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHeaders.forEach(Headers => {
    const td = thRow.insertCell();
    const value = Object.values(Headers)[0];
    td.appendChild(document.createTextNode(value));
});

let tBody = table.createTBody();

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
function addData() {
    var username = document.getElementById('username').value;
    var userbirthdate = document.getElementById('userbirthdate').value;
    var userage = document.getElementById('userage').value;
    var usergender = document.getElementById('usergender').value;
    var useremail = document.getElementById('useremail').value;
    fetch(' http://localhost:3000/Students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            userbirthdate: userbirthdate,
            userage: userage,
            usergender: usergender,
            useremail: useremail
        })
    })
}
var submitButton = document.getElementById('editStudents');
function editStudents(element) {
    let id = element.id
    document.getElementById('username').value = element.username;
    document.getElementById('userbirthdate').value = element.userbirthdate;
    document.getElementById('userage').value = element.userage;
    document.getElementById('usergender').value = element.usergender;
    document.getElementById('useremail').value = element.useremail;

    submitButton.onclick =async function update() {
        const username = document.getElementById('username').value;
        const userbirthdate = document.getElementById('userbirthdate').value;
        const userage = document.getElementById('userage').value;
        const usergender = document.getElementById('usergender').value;
        const useremail = document.getElementById('useremail').value;
         fetch(`http://localhost:3000/Students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                userbirthdate: userbirthdate,
                userage: userage,
                usergender: usergender,
                useremail: useremail
            })
        })
        await getStudents();
    }
}
function deleteStudent(userid) {
    fetch(`http://localhost:3000/Students/${userid}`, {
        method: "DELETE",
    });
    getStudents();
}
// function validate() {
//     if (username.value.length == 0) {
//         alert("Please Enter your name!");
//         username.focus();
//         return false;
//     }
//     return false;
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

window.onload = (event) => {
    getStudents();
};



//  if( document.myForm.email.value == "" ) {
//     alert( "Please Enter your Email!" );
//     document.myForm.email.focus() ;
//     // return false;
//  }