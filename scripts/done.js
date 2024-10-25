const detailsArray = [];


function addToArray(){
  const nameInput= document.querySelector('.js-name-input');
  const name = nameInput.value;
  
  const ageInput= document.querySelector('.js-age-input');
  const age = ageInput.value;

  if (!nameInput.value || !ageInput.value || isNaN(ageInput.value) || ageInput.value <= 0) {
    alert('Please provide a valid name and a positive age');
    return;
  }

  const person = { name: name, age: Number(age) };
  detailsArray.push(person);

  console.log(detailsArray)

  updateTable();
  

}

function updateTable() {
  const tableBody = document.querySelector('#detailsTable tbody');
  tableBody.innerHTML = ''

  

  

 
  for (let i = 0; i < detailsArray.length; i++) {
    const person = detailsArray[i]; 

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


    

     //cell for delete button
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => deleteRow(i); 
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
 
    

    
    tableBody.appendChild(row);
   
  }

  
}


function deleteRow(index) {
    
  detailsArray.splice(index, 1);

  
  updateTable();

  console.log(detailsArray)
}
