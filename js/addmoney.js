document.getElementById('add-money-btn').addEventListener("click",function(){

    const addBankName = document.getElementById("add-bank-name");
    const bankName = addBankName.value;
    if(bankName === 'Select a bank'){
        alert("Please select a bank");
        return;
    }
    const addMoneyNum = document.getElementById("add-money-num");
    const bankNum = addMoneyNum.value;
    if(bankNum.length !== 11){
        alert("Invalid account number");
    }

    const addMoneyAmonut = document.getElementById("add-money-amount");
    const addAmount = addMoneyAmonut.value;
    
    const balanceElement = document.getElementById("balance")
    const CureentBalance = balanceElement.innerText;

    const newBalance = Number(CureentBalance) + Number(addAmount);

    const addMoneyPinInput = document.getElementById("add-money-pin");
    const addMoneyPin = addMoneyPinInput.value;
    if(addMoneyPin === '1234'){
        alert(`Add money success from ${bankName} at ${new Date()}`);
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
        return;
    }
    console.log(cashoutPin);
    
})