function reveal(button, divClass) {
    button.style.display = 'none';
    var div = document.querySelector('.' + divClass);
    div.style.display = 'block';
    setTimeout(function() {
        div.style.opacity = '1';
    }, 100);
}
