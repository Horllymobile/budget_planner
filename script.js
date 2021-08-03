const reasonInput = document.getElementById('input-reason');
const amountInput = document.getElementById('input-amount');
const btnCancle = document.getElementById('btn-cancle');
const btnAdd = document.getElementById('btn-add');
const expensesList = document.getElementById('expenses-list');
const totalExpense = document.getElementById('total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalAmount = 0;
const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

async function handleButtonClick() {
  const alert = await alertController.create({
    header: 'Invalid Inputs',
    message: 'Please enter valid reason and amount!',
    buttons: ['Okay']
  });

  await alert.present();
}

btnAdd.addEventListener('click', e => {
  const enteredReason = reasonInput.value;
  const enterAmount = amountInput.value;
  if (
    enteredReason.trim().length <= 0 ||
    enterAmount <= 0 ||
    enterAmount.trim().length <= 0
  ) {
    handleButtonClick();
    return;
  }

  console.log(enteredReason, enterAmount);
  let newExpense = document.createElement('ion-item');
  newExpense.textContent = `${enteredReason} : \$${enterAmount}`;
  expensesList.appendChild(newExpense);
  totalAmount += +enterAmount;
  totalExpense.textContent = totalAmount;
  clear();
});

btnCancle.addEventListener('click', clear);
