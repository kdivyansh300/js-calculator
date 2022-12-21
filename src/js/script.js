

buttons = document.getElementsByClassName('app-btn-item');
result = document.querySelector('.main-app__result');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function(e){
        if (buttons[i].classList.contains('solve')) {
            result.innerText = eval(result.innerText);
        } 
        else if(buttons[i].classList.contains('clear')){
            result.innerText = '';
        }
        else {
            result.innerText += e.target.innerText;
        }
    }

}