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

    console.log(detailsAddArray)
}

function updateTable(dataArray, tableId) {
    const tableBody = document.querySelector(`${tableId} tbody`);
    tableBody.innerHTML = '';

    for (let i = 0; i < dataArray.length; i++) {
        const person = dataArray[i];
        const row = document.createElement('tr');

        // Index Cell
        const indexCell = document.createElement('td');
        indexCell.textContent = i + 1;
        row.appendChild(indexCell);

        // Name Cell
        const nameCell = document.createElement('td');
        nameCell.textContent = person.name;
        nameCell.className = 'name-cell';
        row.appendChild(nameCell);

        // Age Cell
        const ageCell = document.createElement('td');
        ageCell.textContent = person.age;
        ageCell.className = 'age-cell';
        row.appendChild(ageCell);

        // Action Cell
        const actionCell = document.createElement('td');

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.marginRight = '8px';
        editButton.className = 'edit-button';
        editButton.onclick = function() {
            toggleEditMode(dataArray, i, nameCell, ageCell, editButton);
        };
        actionCell.appendChild(editButton);

        // Delete Button
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

function editRowHtml(btn) {
  var row = btn.parentNode.parentNode; 
  var nameCell = row.cells[0];
  var ageCell = row.cells[1];

  // If cells are already editable, save the changes
  if (nameCell.isContentEditable) {
      // Save the changes and change button text to "Edit"
      nameCell.contentEditable = false;
      ageCell.contentEditable = false;
      btn.innerHTML = "Edit"; 
      nameCell.classList.remove('editable'); 
      ageCell.classList.remove('editable');
  } else {
      // Make cells editable
      nameCell.contentEditable = true;
      ageCell.contentEditable = true;
      nameCell.classList.add('editable'); 
      ageCell.classList.add('editable');
      btn.innerHTML = "Save"; 
      nameCell.focus(); // Focus on the Name cell
  }
}

function toggleEditMode(dataArray, index, nameCell, ageCell, editButton) {
    if (nameCell.isContentEditable && ageCell.isContentEditable) {
        // Save the edited data
        dataArray[index].name = nameCell.textContent;
        dataArray[index].age = Number(ageCell.textContent);

        // Make cells non-editable and update button text to "Edit"
        nameCell.contentEditable = false;
        ageCell.contentEditable = false;
        editButton.textContent = 'Edit';

        // Refresh the table to reflect saved changes
        updateTable(dataArray, '#detailsTable');
        console.log(detailsAddArray);
    } else {
        // Make cells editable
        nameCell.contentEditable = true;
        ageCell.contentEditable = true;
        nameCell.focus(); // Focus on the Name cell
        editButton.textContent = 'Save'; // Change button text to "Save"
        
    }
    
}

function initDummyTable() {
    updateTable(detailsDummyArray, '#dataTable'); 
}

//initDummyTable();
