var botão = document.querySelector('.bt');
var  senha = document.querySelector('.ip');

botão.addEventListener('click', function() {
    if (senha.value === 'dendinhomuitolindo') {
        window.location.href = 'ep.html';
    } else {
        alert('senha errada mimadinha');
    }
});