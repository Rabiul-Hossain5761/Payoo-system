document.getElementById('login-btn').addEventListener('click',function(){
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber);

    const inputPin = document.getElementById('input-pin');
    const numberPin = inputPin.value;
    console.log(numberPin);

    if(contactNumber === '01708716283' && numberPin==='1234'){
        alert('Login successful');
        window.location.assign("home.html");

    }
    else{
        alert('Login Failed');
        return;
    }

})