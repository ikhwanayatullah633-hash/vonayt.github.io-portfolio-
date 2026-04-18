// Navigasi
const btnAnim = document.getElementById('nav-animation');
const btnAbout = document.getElementById('nav-about');
const secAnim = document.getElementById('section-animation');
const secAbout = document.getElementById('section-about');

btnAnim.addEventListener('click', (e) => {
    e.preventDefault();
    secAnim.classList.remove('hidden');
    secAbout.classList.add('hidden');
    btnAnim.classList.add('active');
    btnAbout.classList.remove('active');
});

btnAbout.addEventListener('click', (e) => {
    e.preventDefault();
    secAbout.classList.remove('hidden');
    secAnim.classList.add('hidden');
    btnAbout.classList.add('active');
    btnAnim.classList.remove('active');
});

// Pop-up Logic
const overlay = document.getElementById('video-overlay');
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');
const videoDesc = document.getElementById('video-desc');
const closeBtn = document.getElementById('close-overlay');

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        videoTitle.innerText = item.getAttribute('data-title');
        videoDesc.innerText = item.getAttribute('data-desc');
        mainVideo.src = item.getAttribute('data-video');
        overlay.classList.add('show');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    mainVideo.pause();
    mainVideo.src = "";
});

// Klik di luar kotak untuk tutup
overlay.addEventListener('click', (e) => {
    if(e.target === overlay) closeBtn.click();
});
