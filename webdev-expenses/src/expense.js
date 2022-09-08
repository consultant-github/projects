const expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];
const tableBody = document.getElementById('expense-tbl');
const expenseDate = document.getElementById('date-input');
const expenseDescription = document.getElementById('descr-input');
const expenseAmount = document.getElementById('amount-input');
const expenseVendor = document.getElementById('vendor-input');
const addBtn = document.getElementById('add-btn');
let rowSum = 0;
let i = 0;

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (isValidateForm()) {
    alert('Please complete all fields before submitting.');
    return;
  }

  expenseItem = {
    id: Date.now(),
    date: expenseDate.value,
    description: expenseDescription.value,
    amount: expenseAmount.value,
    vendor: expenseVendor.value
  };

  addExpense(expenseItem);
  document.getElementById('form').reset();
});

function addExpense(expense) {
  renderRow(expense);
  expenseArray.push(expense);
  pushToLocalStorage(expense);
}

function pushToLocalStorage(expense) {
  localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
}

function renderRow(expense) {
  const tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);

  const dateCell = createCell(expense.date);
  tableRow.appendChild(dateCell);

  const descriptionCell = createCell(expense.description);
  tableRow.appendChild(descriptionCell);

  const amountCell = createCell(expense.amount);
  tableRow.appendChild(amountCell);

  const vendorCell = createCell(expense.vendor);
  tableRow.appendChild(vendorCell);

  const deleteCell = document.createElement('td');
  const deleteButton = createDeleteButton(expense);
  tableRow.appendChild(deleteCell);
  deleteCell.appendChild(deleteButton); 
  i++;
  getSum();
}

function getSum(){
  let table = document.getElementById("expense-tbl");
  rowSum += parseFloat(table.rows[i].cells[2].textContent);
  document.getElementById("row-sum").textContent = "Total Expenses: $" + rowSum.toFixed(2);
}

function createCell(expense) {
  const dateCell = document.createElement('td');
  dateCell.textContent = expense;
  return dateCell;
}

function createDeleteButton(expense) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('id', 'delete-btn');
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteExpenseRow(deleteButton, expense.id);
    reduceSum();
  });
  return deleteButton;
}

function deleteExpenseRow(deleteButton, id) {
   deleteButton.parentElement.parentElement.remove();
  for (let ii = 0; ii < expenseArray.length; ii++) {
    if (expenseArray[ii].id === id) { 
      expenseArray.splice(ii, 1);
      pushToLocalStorage(expenseArray);
      location.reload();
     }  
  } 
 }

function reduceSum(){
let table = document.getElementById("expense-tbl");
rowSum -= parseFloat(table.rows[i+1].cells[2].innerHTML);
document.getElementById("row-sum2").innerHTML = "Total Spent = $" + rowSum.toFixed(2);
}

function isValidateForm() {
  const isInputEmpty =
    !expenseDate.value ||
    !expenseDescription.value ||
    !expenseAmount.value ||
    !expenseVendor.value;
  return isInputEmpty ? true : false;
}

window.addEventListener('load', (e) => {
  e.preventDefault();
  expenseArray.forEach((expense) => {
  renderRow(expense);  
  });
});
