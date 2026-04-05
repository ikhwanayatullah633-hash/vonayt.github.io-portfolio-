/**
 * Fungsi untuk membuka Pop-up
 * @param {string} src - Nama file video/gambar
 * @param {string} title - Judul yang akan tampil
 * @param {string} desc - Deskripsi yang akan tampil
 */
function openModal(src, title, desc) {
    const modal = document.getElementById('videoModal');
    const mediaContainer = document.getElementById('modalMedia');
    
    // Gunakan path lengkap jika file berada dalam folder
    // Contoh: 'dumpanimasi.mp4/TES TES.mp4'
    
    if (src.toLowerCase().endsWith('.mp4')) {
        mediaContainer.innerHTML = `
            <video controls autoplay>
                <source src="${src}" type="video/mp4">
                Browser tidak mendukung video.
            </video>`;
    } else {
        mediaContainer.innerHTML = `<img src="${src}" alt="${title}">`;
    }
    
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    modal.style.display = 'flex';
}

// Fungsi menutup Pop-up
function closeModal() {
    const modal = document.getElementById('videoModal');
    const mediaContainer = document.getElementById('modalMedia');
    modal.style.display = 'none';
    mediaContainer.innerHTML = ''; // Penting agar suara video mati saat ditutup
}

// Menutup modal jika klik di area hitam luar kotak
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}
