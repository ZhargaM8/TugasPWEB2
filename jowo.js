function reveal(button, divClass,num) {
    var div = document.querySelector('.' + divClass);
    div.style.display = 'block';
    setTimeout(function() {
        button.style.opacity = '0';
    }, 100);
    button.style.display = 'none';
    setTimeout(function() {
        div.style.opacity = '1';
    }, 100);
    if (num==3) {
        var nextbutton = document.querySelector('.revbut2');
        nextbutton.style.display='flex';
    } 
    else if(num==2){
        var nextbutton = document.querySelector('.revbut1');
        nextbutton.style.display='flex';
    } 
    else if(num==1){
        var nextbutton = document.querySelector('.closing');
        nextbutton.style.display='block';
    }
}
