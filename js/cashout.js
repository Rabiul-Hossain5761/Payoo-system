document.getElementById('cashout-btn').addEventListener("click",function(){
    const cashoutNumberInput = document.getElementById("agent-num");
    const cashoutNumber = cashoutNumberInput.value;
    if(cashoutNumber.length !==11){
        alert("Invalid number");
        return;
    }
    console.log(cashoutNumber);

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    const balanceElement = document.getElementById("balance");
    const balance= balanceElement.innerText;
    console.log(balance);

    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid amount");
        return;
    }
    console.log(newBalance);

    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;
    if(cashoutPin === '1234'){
        alert('Withdraw successful');
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
        return;
    }
    console.log(cashoutPin);
})