window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = '#ffd763';
    } else {
        header.style.boxShadow = 'none';
        header.style.backgroundColor = 'transparent';
    }
});

function menuShow() {
    let ul = document.querySelector('#nav ul');

    if (ul.classList.contains("open")) {
        ul.classList.remove("open");
        document.querySelector('.menu-icon img').src = "./src/image/cardapio.png";
    } else {
        ul.classList.add("open");
        document.querySelector('.menu-icon img').src = "./src/image/marca-cruzada.png";
    }
}
