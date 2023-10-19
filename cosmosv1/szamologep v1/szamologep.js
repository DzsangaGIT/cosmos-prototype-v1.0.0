let display = document.getElementById('display')
let currentInput = ('')

function appendToDisplay(value){
    currentInput += value;
    display.value = currentInput
}

function clearDisplay(){
    currentInput = '';
    display.value = ''
}  

function calculateResult(){
    try{
        currentInput = eval(currentInput);
        display.value = currentInput
    } catch (error) {
    display.value = 'Hiba'
}

}

function addExplosionEffect(button) {
    currentInput += button.textContent;
    display.value = currentInput;

    let explosionImage = document.getElementById('explosion');
    explosionImage.classList.remove('hidden');

    setTimeout(function () {
        explosionImage.classList.add('hidden');
    }, 1000); 
}
    
    