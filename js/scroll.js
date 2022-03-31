// Scroll Layer1
var layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll', function function_name(e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll / 7) + '%';
});

// Scroll Layer2
var layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll', function function_name(e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll / 7) + '%';
    layer2.style.left = (scroll / 50) + '%';
});

// Scroll TEXT
var tetx = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll', function function_name(e) {
    var offset = window.pageYOffset;
    scroll = offset;
    text.style.top = (-scroll / 3) + '%';
});