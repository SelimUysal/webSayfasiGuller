// Gül Animasyonu
const rosesContainer = document.querySelector('.roses');

function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    
    // Gülün rastgele konumu ve hızı
    rose.style.left = Math.random() * 100 + 'vw';
    rose.style.animationDuration = Math.random() * 3 + 5 + 's';
    rosesContainer.appendChild(rose);

    // Gül ekran dışına çıkınca kaldır
    setTimeout(() => {
        rose.remove();
    }, 8000);
}

// Her 500ms'de bir yeni gül oluştur
window.addEventListener('load', () => {
    setInterval(createRose, 0);   // burayı 0yap 
});
