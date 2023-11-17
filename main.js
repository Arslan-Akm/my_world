var images = document.querySelector('.images');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal(){
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}
function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none'
}

images.onclick = openModal;
backdrop.onclick = closeModal;