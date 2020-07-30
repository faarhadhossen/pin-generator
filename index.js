
//setting event listener

document.getElementById('pin-generate-btn').addEventListener('click',()=>{
    generateRandomPin(9999,1000);

})
document.getElementById('submit').addEventListener('click',()=>{
    matchPin();
    document.getElementById('pin-btn-output').value = '';
    document.getElementById('generated-pin').value = '';


})


//random PIN generate function

function generateRandomPin(max,min) {
       let pin= Math.floor(Math.random() * (max - min)) + min;
       document.getElementById('generated-pin').value = pin;
}

//digit output function

function digitOutput(digit){
    document.getElementById('pin-btn-output').value += digit;

}

//digit deleting function

function deleteDigit() {
    let userTyped = document.getElementById('pin-btn-output').value;
    document.getElementById('pin-btn-output').value = userTyped.substring(0, userTyped.length - 1);
}


//clean all output function

function clean(){
    document.getElementById('pin-btn-output').value = '';
}


//generated PIN and user typed PIN matching function

function matchPin(){
    let userTypedPin = document.getElementById('pin-btn-output');
    let generatedPin = document.getElementById('generated-pin');
    if( generatedPin.value == userTypedPin.value && generatedPin.value !=''){
        document.getElementById('access-success').style.display = 'block'; 
        document.getElementById('access-denied').style.display = 'none';
        document.getElementById('tryleft').style.display = 'none';   
    }
    if(userTypedPin.value =='' && generatedPin.value ==''){
        alert('ACCESS DENIED!!! Please Generate Your PIN First!');        

    }
    if(userTypedPin.value =='' && generatedPin.value !=''){
        alert('ACCESS DENIED!!! Please Input Your PIN!');        

    }
    if(generatedPin.value != userTypedPin.value && userTypedPin.value !=''){
        document.getElementById('access-denied').style.display = 'block';
        document.getElementById('access-success').style.display = 'none';   

        //calling wrong typed PIN alert function
        tryLeft();          
    }
}


//initial wrong typed PIN count
let wrongTypedPin = 0;

//wrong typed PIN alert function

function tryLeft(){

    wrongTypedPin++;

    let userTypedPin = document.getElementById('pin-btn-output');
    let generatedPin = document.getElementById('generated-pin');

    if(wrongTypedPin == 0 && userTypedPin.value != generatedPin.value){
        document.getElementById('tryleft').innerHTML = ''
    }
        else if(wrongTypedPin == 1 && userTypedPin.value != generatedPin.value){
            document.getElementById('tryleft').innerHTML = 'Wrong PIN!! 3 try left';

        }
        else if(wrongTypedPin == 2 && userTypedPin.value != generatedPin.value){
            document.getElementById('tryleft').innerHTML = 'Wrong PIN!! 2 try left';
        }
        else if(wrongTypedPin == 3 && userTypedPin.value != generatedPin.value){
            document.getElementById('tryleft').innerHTML = 'Wrong PIN!! 1 try left';
        }
        else if(wrongTypedPin == 4 && userTypedPin.value != generatedPin.value){
            document.getElementById('tryleft').innerHTML = 'Account has been blocked! Contact customer care.';
            document.getElementById('submit').disabled = true; 
            document.getElementById('submit').style.cursor = 'not-allowed'; 
        }
}





