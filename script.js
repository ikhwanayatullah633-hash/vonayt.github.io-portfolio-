/**
 * FUNGSI UTAMA UNTUK MEMBUKA POP-UP
 */
function openModal(src, title, desc) {
    const modal = document.getElementById('videoModal');
    const mediaContainer = document.getElementById('modalMedia');
    
    // 1. Bersihkan isi modal agar tidak menumpuk
    mediaContainer.innerHTML = '';

    // 2. Deteksi apakah ini Video Lokal, Gambar, atau YouTube
    const isVideo = src.toLowerCase().endsWith('.mp4');
    const isImage = src.toLowerCase().endsWith('.gif') || 
                    src.toLowerCase().endsWith('.jpg') || 
                    src.toLowerCase().endsWith('.png');

    if (isVideo) {
        // FORMAT VIDEO LOKAL (.mp4)
        mediaContainer.innerHTML = `
            <video controls autoplay muted loop playsinline style="width:100%; aspect-ratio: 16/9; object-fit: cover;">
                <source src="${src}" type="video/mp4">
            </video>`;
    } 
    else if (isImage) {
        // FORMAT GAMBAR / GIF
        mediaContainer.innerHTML = `
            <img src="${src}" style="width:100%; aspect-ratio: 16/9; object-fit: cover;">`;
    } 
    else {
        // FORMAT YOUTUBE (PENTING: playlist=${src} adalah syarat wajib agar YouTube bisa LOOP)
        mediaContainer.innerHTML = `
            <iframe 
                style="width:100%; aspect-ratio: 16 / 9; display: block;" 
                src="https://www.youtube.com/embed/${src}?autoplay=1&mute=1&loop=1&playlist=${src}&controls=1&rel=0" 
                frameborder="0" 
                allow="autoplay; encrypted-media; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
    }
    
    // 3. Update Teks
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    
    // 4. Munculkan Modal
    modal.style.display = 'flex';
}

/**
 * FUNGSI UNTUK MENUTUP POP-UP
 */
function closeModal() {
    const modal = document.getElementById('videoModal');
    const mediaContainer = document.getElementById('modalMedia');
    modal.style.display = 'none';
    mediaContainer.innerHTML = ''; // Penting agar suara video mati
}

// Menutup jika klik di area luar kotak
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
};
