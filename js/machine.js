function showAddMoney(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");

    cashout.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
function showCashout(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");

    addMoney.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}