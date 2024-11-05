/* document.getElementById('expense-insert-btn').addEventListener('click', function(){
    const expenseInput = document.getElementById('expense-field').value;
    const amountFields = getInputNumberById('amount-field');

    const row = `
    <div class="flex justify-between">
    <p>${expenseInput}</p>
    <p>${amountFields}</p>
    </div>
    `
    const rowContainer = document.getElementById('row-container')
  
    rowContainer.innerHTML += row;

    let expenseAmount = parseFloat(document.getElementById('expense-amount').innerText);
    document.getElementById('expense-amount').innerText = expenseAmount + amountFields

    const expensea = document.getElementById('expense-field');
    console.log(expensea.getAttribute('id'))

})

function getInputNumberById(id){
    const element = document.getElementById(id).value;
    return Number(element);
} */