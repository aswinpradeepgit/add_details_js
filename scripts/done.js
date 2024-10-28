const detailsAddArray = [];
const detailsDummyArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 27 },
    { name: "Eve", age: 28 },
    { name: "person1", age: 22 },
    { name: "person2", age: 27 },
    { name: "person3", age: 23 },
    { name: "person4", age: 22 },
    { name: "person5", age: 23 },
];

function addToArray() {
    const nameInput = document.querySelector('.js-name-input');
    const ageInput = document.querySelector('.js-age-input');

    const name = nameInput.value;
    const age = ageInput.value;

    if (!name || !age || isNaN(age) || age <= 0) {
        alert('Please provide a valid name and a positive age');
        return;
    }

    const person = { name: name, age: Number(age) };
    detailsAddArray.push(person);
    updateTable(detailsAddArray, '#detailsTable'); // Update the user-added data table

    // Clear input fields after adding
    nameInput.value = '';
    ageInput.value = '';
}

function updateTable(dataArray, tableId) {
    const tableBody = document.querySelector(`${tableId} tbody`);
    tableBody.innerHTML = '';

    for (let i = 0; i < dataArray.length; i++) {
        const person = dataArray[i];
        const row = document.createElement('tr');

        const indexCell = document.createElement('td');
        indexCell.textContent = i + 1; 
        row.appendChild(indexCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        const ageCell = document.createElement('td');
        ageCell.textContent = person.age;
        row.appendChild(ageCell);

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            deleteRow(dataArray, i);
        };
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row); 
    }
}

function deleteRow(dataArray, index) {
    dataArray.splice(index, 1); 
    updateTable(dataArray, dataArray === detailsAddArray ? '#detailsTable' : '#dataTable'); 
}

function deleteRowHtml(button) {
  // Find the row containing the button and remove it
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function initDummyTable() {
    updateTable(detailsDummyArray, '#dataTable'); 
}

//initDummyTable();
