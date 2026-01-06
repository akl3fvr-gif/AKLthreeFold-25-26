// Data Siswa - Database User
const usersDatabase = [
    {nama: "Ahmad Fauzan R.", pass: "af001", user: "ahmad", role: "member"},
    {nama: "Anisa Aulia P.", pass: "aa002", user: "anisa", role: "member"},
    {nama: "Ariza Syifa A.", pass: "as003", user: "ariza", role: "member"},
    {nama: "Arjanti Nathania A.S.", pass: "an004", user: "arjanti", role: "member"},
    {nama: "Aurelia Batrisya U.S.", pass: "ab005", user: "aurelia", role: "member"},
    {nama: "Azka Bachtiar F.", pass: "6761", user: "azka", role: "member"},
    {nama: "Davina Nasyifa", pass: "dn007", user: "davina", role: "member"},
    {nama: "Dinda Sahfira P.", pass: "ds008", user: "dinda", role: "member"},
    {nama: "Elica Senta A.", pass: "es009", user: "elica", role: "member"},
    {nama: "Fatih Algis S.", pass: "fa010", user: "fatih", role: "member"},
    {nama: "Hafiza Azha S.", pass: "ha011", user: "hafiza", role: "member"},
    {nama: "Herliana", pass: "he012", user: "herliana", role: "member"},
    {nama: "Ivanesya Aztana", pass: "ia013", user: "ivanesya", role: "member"},
    {nama: "Jelita Sulistya N.", pass: "js014", user: "jelita", role: "member"},
    {nama: "Kartika Syalom E.H.", pass: "ks015", user: "kartika", role: "member"},
    {nama: "Levy Widya S.", pass: "lw016", user: "levy", role: "member"},
    {nama: "Mahardika Febriansyah", pass: "mf017", user: "mahardika", role: "member"},
    {nama: "Melda", pass: "me018", user: "melda", role: "member"},
    {nama: "Millah Oktapiyah", pass: "mo019", user: "millah", role: "member"},
    {nama: "M. Gilang A.", pass: "mg020", user: "gilang", role: "member"},
    {nama: "Nazzellah Nur R.", pass: "nn021", user: "nazzellah", role: "member"},
    {nama: "Novia Ardani", pass: "na022", user: "novia", role: "member"},
    {nama: "Putri Inaya A.", pass: "pi023", user: "putri", role: "member"},
    {nama: "Risma Musliyah", pass: "rm024", user: "risma", role: "member"},
    {nama: "Safa Salsabila", pass: "ss025", user: "safa", role: "member"},
    {nama: "Santri Yuliani", pass: "sy026", user: "santri", role: "member"},
    {nama: "Shafa Nur F.", pass: "sn027", user: "shafa", role: "member"},
    {nama: "Shafira Rahmadani", pass: "sr028", user: "shafira", role: "member"},
    {nama: "Silva Rahma A.", pass: "sa029", user: "silva", role: "member"},
    {nama: "Suci Rahmadiani A.", pass: "sr030", user: "suci", role: "member"},
    {nama: "Tiara Wijaya", pass: "tw031", user: "tiara", role: "member"},
    {nama: "Trissa Oktaviani", pass: "to032", user: "trissa", role: "member"},
    {nama: "Vania Wulan O.", pass: "vw033", user: "vania", role: "member"},
    {nama: "Zaki Abdussadad", pass: "za034", user: "zaki", role: "member"},
    {nama: "Zivilia Nuurfatma", pass: "zn035", user: "zivilia", role: "member"},
    // Admin user
    {nama: "Admin Kelas", pass: "admin123", user: "admin", role: "admin"}
];

// Data Galeri Foto (Dummy Data)
const galleryData = [
    {id: 1, bulan: "januari", tahun: "2024", kategori: "Kegiatan", foto: "https://picsum.photos/400/300?random=1", deskripsi: "Kegiatan belajar kelompok di perpustakaan", uploader: "ahmad"},
    {id: 2, bulan: "januari", tahun: "2024", kategori: "Pesta", foto: "https://picsum.photos/400/300?random=2", deskripsi: "Pesta ulang tahun Azka di kelas", uploader: "azka"},
    {id: 3, bulan: "februari", tahun: "2024", kategori: "Belajar", foto: "https://picsum.photos/400/300?random=3", deskripsi: "Presentasi proyek kelompok mata pelajaran IPA", uploader: "anisa"},
    {id: 4, bulan: "februari", tahun: "2024", kategori: "Kegiatan", foto: "https://picsum.photos/400/300?random=4", deskripsi: "Kunjungan industri ke pabrik elektronik", uploader: "ariza"},
    {id: 5, bulan: "maret", tahun: "2024", kategori: "Pesta", foto: "https://picsum.photos/400/300?random=5", deskripsi: "Perayaan Hari Guru di sekolah", uploader: "arjanti"},
    {id: 6, bulan: "maret", tahun: "2024", kategori: "Belajar", foto: "https://picsum.photos/400/300?random=6", deskripsi: "Lomba debat bahasa Inggris antar kelas", uploader: "aurelia"},
    {id: 7, bulan: "april", tahun: "2024", kategori: "Kegiatan", foto: "https://picsum.photos/400/300?random=7", deskripsi: "Study tour ke museum sejarah", uploader: "davina"},
    {id: 8, bulan: "april", tahun: "2024", kategori: "Pesta", foto: "https://picsum.photos/400/300?random=8", deskripsi: "Pesta akhir semester sebelum libur", uploader: "dinda"},
    {id: 9, bulan: "mei", tahun: "2024", kategori: "Belajar", foto: "https://picsum.photos/400/300?random=9", deskripsi: "Ujian praktik mata pelajaran komputer", uploader: "elica"},
    {id: 10, bulan: "mei", tahun: "2024", kategori: "Kegiatan", foto: "https://picsum.photos/400/300?random=10", deskripsi: "Kegiatan bakti sosial di lingkungan sekolah", uploader: "fatih"},
    {id: 11, bulan: "juni", tahun: "2024", kategori: "Pesta", foto: "https://picsum.photos/400/300?random=11", deskripsi: "Perayaan kelulusan siswa kelas 12", uploader: "hafiza"},
    {id: 12, bulan: "juni", tahun: "2024", kategori: "Belajar", foto: "https://picsum.photos/400/300?random=12", deskripsi: "Persiapan ujian nasional bersama", uploader: "herliana"}
];

// Data Minigame (Dummy Data)
const minigamesData = [
    {id: 1, judul: "Tebak Gambar Kelas", creator: "ahmad", type: "quiz", created: "2024-01-15", modified: "2024-01-20"},
    {id: 2, judul: "Puzzle Kenangan", creator: "anisa", type: "puzzle", created: "2024-02-01", modified: "2024-02-05"},
    {id: 3, judul: "Kuis Matematika", creator: "azka", type: "quiz", created: "2024-02-10", modified: "2024-02-12"},
    {id: 4, judul: "Cari Perbedaan", creator: "davina", type: "find_difference", created: "2024-03-01", modified: "2024-03-03"},
    {id: 5, judul: "Memory Game", creator: "fatih", type: "memory", created: "2024-03-15", modified: "2024-03-18"}
];

// Global Variables
let currentUser = null;
let currentFilter = 'all';

// DOM Elements
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const userWelcome = document.getElementById('userWelcome');
const userName = document.getElementById('userName');
const comingSoonModal = document.getElementById('comingSoonModal');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    checkSession();
    initializeGallery();
    setupEventListeners();
});

// Check if user is already logged in
function checkSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIAfterLogin();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Login button click
    loginBtn.addEventListener('click', showLoginModal);
    
    // Logout button click
    logoutBtn.addEventListener('click', logout);
    
    // Close modal
    closeModal.addEventListener('click', hideLoginModal);
    
    // Click outside modal to close
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            hideLoginModal();
        }
    });
    
    // Login form submit
    loginForm.addEventListener('submit', handleLogin);
    
    // Enter key in login form
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    });
    
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    });
}

// Show Login Modal
function showLoginModal() {
    loginModal.classList.remove('hidden');
    document.getElementById('username').focus();
}

// Hide Login Modal
function hideLoginModal() {
    loginModal.classList.add('hidden');
    loginForm.reset();
    loginError.classList.add('hidden');
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        showLoginError('Username dan password harus diisi!');
        return;
    }
    
    // Find user in database
    const user = usersDatabase.find(u => 
        (u.user.toLowerCase() === username.toLowerCase() || 
         u.nama.toLowerCase().includes(username.toLowerCase())) && 
        u.pass === password
    );
    
    if (user) {
        // Login successful
        currentUser = {
            nama: user.nama,
            username: user.user,
            role: user.role
        };
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Update UI
        updateUIAfterLogin();
        hideLoginModal();
        
        // Show welcome message
        showNotification(`Selamat datang, ${currentUser.nama}!`, 'success');
    } else {
        // Login failed
        showLoginError('Username atau password salah!');
    }
}

// Show Login Error
function showLoginError(message) {
    loginError.querySelector('p').textContent = message;
    loginError.classList.remove('hidden');
}

// Update UI After Login
function updateUIAfterLogin() {
    if (currentUser) {
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        userWelcome.classList.remove('hidden');
        userName.textContent = currentUser.nama.split(' ')[0];
    }
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    userWelcome.classList.add('hidden');
    
    showNotification('Anda telah berhasil logout.', 'info');
}

// Initialize Gallery
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    displayGalleryItems(galleryData.slice(0, 8)); // Show first 8 items on homepage
}

// Display Gallery Items
function displayGalleryItems(items) {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    items.forEach(item => {
        const galleryCard = createGalleryCard(item);
        galleryGrid.appendChild(galleryCard);
    });
}

// Create Gallery Card
function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer';
    card.setAttribute('data-bulan', item.bulan);
    
    card.innerHTML = `
        <div class="aspect-w-4 aspect-h-3">
            <img src="${item.foto}" alt="${item.deskripsi}" class="w-full h-48 object-cover">
        </div>
        <div class="p-4">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">${item.kategori}</span>
                <span class="text-xs text-gray-500">${item.bulan} ${item.tahun}</span>
            </div>
            <p class="text-sm text-gray-700 line-clamp-2">${item.deskripsi}</p>
        </div>
    `;
    
    card.addEventListener('click', () => {
        openLightbox(item);
    });
    
    return card;
}

// Filter Gallery
function filterGallery(bulan) {
    currentFilter = bulan;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-blue-600', 'text-white');
    
    // Filter items
    let filteredItems;
    if (bulan === 'all') {
        filteredItems = galleryData.slice(0, 8);
    } else {
        filteredItems = galleryData.filter(item => item.bulan === bulan).slice(0, 8);
    }
    
    displayGalleryItems(filteredItems);
}

// Open Lightbox
function openLightbox(item) {
    if (!currentUser) {
        showNotification('Silakan login terlebih dahulu untuk melihat foto!', 'warning');
        showLoginModal();
        return;
    }
    
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4';
    
    lightbox.innerHTML = `
        <div class="max-w-4xl max-h-full">
            <div class="relative">
                <img src="${item.foto}" alt="${item.deskripsi}" class="max-w-full max-h-full object-contain rounded-lg">
                <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75" onclick="this.closest('.fixed').remove()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div class="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg">
                    <h3 class="font-semibold text-lg mb-2">${item.deskripsi}</h3>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-300">${item.bulan} ${item.tahun}</span>
                        <span class="text-gray-300">Diupload oleh: ${item.uploader}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close on click outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.parentNode) {
            lightbox.remove();
        }
    });
}

// Show Coming Soon Modal
function showComingSoon() {
    if (!currentUser) {
        showNotification('Silakan login terlebih dahulu!', 'warning');
        showLoginModal();
        return;
    }
    
    comingSoonModal.classList.remove('hidden');
}

// Close Coming Soon Modal
function closeComingSoon() {
    comingSoonModal.classList.add('hidden');
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300`;
    
    // Set color based on type
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-500', 'text-white');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-500', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        default:
            notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <p class="text-sm font-medium">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check User Permission
function hasPermission(action) {
    if (!currentUser) return false;
    
    switch(currentUser.role) {
        case 'admin':
            return true; // Admin can do everything
        case 'member':
            return action === 'edit_own'; // Members can only edit their own data
        case 'guest':
            return action === 'view'; // Guests can only view
        default:
            return false;
    }
}

// Export functions for global access
window.showLoginModal = showLoginModal;
window.hideLoginModal = hideLoginModal;
window.handleLogin = handleLogin;
window.logout = logout;
window.filterGallery = filterGallery;
window.openLightbox = openLightbox;
window.showComingSoon = showComingSoon;
window.closeComingSoon = closeComingSoon;
window.showNotification = showNotification;
window.hasPermission = hasPermission;

// Make data available globally for other pages
window.usersDatabase = usersDatabase;
window.galleryData = galleryData;
window.minigamesData = minigamesData;
window.currentUser = currentUser;