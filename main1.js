var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('input-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('submit-button');

function checkInput(){
     if(inputName.value !== ""){
        button.style.backgroundColor = '#fa923f';

} else{
    button.style.backgroundColor = '#979695';
}

}
