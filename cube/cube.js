document.addEventListener('DOMContentLoaded', function() {
    var cuadro = document.getElementById('cuadro');
    cuadro.addEventListener('click', function() {
        cambiarColor();
    });
});

function cambiarColor() {
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";
    for (var i = 0; i < 6; i++) {
        color += simbolos[Math.floor(Math.random() * 16)];
    }
    document.getElementById('cuadro').style.backgroundColor = color;
}
