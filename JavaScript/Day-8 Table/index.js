//Create Table Element
const table = document.createElement('table');

//Create Body Element
const body = document.querySelector ('body');
body.appendChild(table);

const tableHeaders = [{serialnumber :'Sr No.'},{name : 'Name'}, {birthdate : 'BirthDate'},{gender :'Gender'},{emailid : 'Email-id'}];

const user = [{serialnumber : '1.', name :'Jaitry Patel', birthdate: '11/02/2002', gender: 'Female', emailid :'pateljaitry@gmail.com'},  

{serialnumber : '2', name :'Om Patel', birthdate: '10/09/2009', gender: 'Male', emailid :'patelom@gmail.com'},

{serialnumber : '3.', name :'Jemi Patel', birthdate: '29/10/1998', gender: 'Female', emailid :'pateljemi@gmail.com'},

{serialnumber : '4.', name :'Khushi Patel', birthdate: '15/07/2005', gender: 'Female', emailid :'patelkhushi@gmail.com'},

{serialnumber : '5.', name :'Jeel Patel', birthdate: '05/03/2007', gender: 'Male', emailid :'pateljeel@gmail.com'},]

//Create a Header
const tHead = table.createTHead();

//Insert a Header row
const thRow = tHead.insertRow();

tableHeaders.forEach(element =>  {
    const td = thRow.insertCell();
    td.appendChild(document.createTextNode(Object.values(element)[0]));
});

//Create Body
const tableBody = table.createTBody();

user.forEach(element => {
    let tdRow = tableBody.insertRow();
    for (const values of tableHeaders) {
        let tableBodyRow = tdRow.insertCell();
        const key = Object.keys(values)[0];
        tableBodyRow.appendChild(document.createTextNode(element[key]));
    }
})

table.setAttribute("border", "2");