var count = 0;
var countsSpan = document.getElementById('counts');
var popup = document.getElementById('popup');
var overlay = document.getElementById('overlay');
var btnShow = document.getElementById('btn-show');
var btnClose = document.getElementById('btn-close');
var btnReset = document.getElementById('btn-reset');

// każde kliknięcie przycisku musi być zliczane
// w popupie wyświetlamy ile razy użytkownik klikną w buttona
btnShow.onclick = function(){
    count+=1;
    countsSpan.innerHTML = count;
// jeżeli ilość kliknięć przekroczy 5, w popupie powinien pokazać się przycisk
    if(count == 5){
        btnReset.style.display = 'block';
    }
    showPopup();
}

btnClose.onclick = function () {
    hidePopup();
}
// zresetowania licznika 
btnReset.onclick = function () {
    count = 0;
    countsSpan.innerHTML = count;
    this.style.display = 'none';
}

overlay.onclick = function () {
    hidePopup();
}

// po kliknięciu ma się otwierać popup
function showPopup() {
    overlay.classList.add('show');
    popup.style.display = 'block';
 }
// kliknięcie poza popupa, automatycznie go zamyka
 function hidePopup() {
    popup.style.display = 'none';
    overlay.classList.remove('show');
 }