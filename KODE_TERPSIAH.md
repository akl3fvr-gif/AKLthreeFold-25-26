# Website Kelas - Kode Terpisah

Dokumen ini berisi semua kode HTML, CSS, dan JavaScript yang terpisah untuk website kelas.

---

## 📄 HTML - index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kelas Kami - Website Komunitas Kelas</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-50 min-h-screen">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <h1 class="text-2xl font-bold primary-color">Kelas Kami</h1>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="index.html" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
                        <a href="gallery.html" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Galeri</a>
                        <a href="minigame.html" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Minigame</a>
                        <a href="profile.html" class="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Perkenalan</a>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <span id="userWelcome" class="text-sm text-gray-700 hidden">Selamat datang, <span id="userName"></span></span>
                    <button id="loginBtn" class="btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Login</button>
                    <button id="logoutBtn" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hidden">Logout</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di Kelas Kami</h2>
            <p class="text-xl md:text-2xl mb-8 opacity-90">Komunitas belajar yang penuh kreativitas dan inspirasi</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="showComingSoon()" class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">Jelajahi Galeri</button>
                <button onclick="showComingSoon()" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Buat Minigame</button>
            </div>
        </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="p-6">
                    <div class="text-4xl font-bold text-blue-600 mb-2">35</div>
                    <div class="text-gray-600">Siswa Aktif</div>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold text-blue-600 mb-2">100+</div>
                    <div class="text-gray-600">Foto Kenangan</div>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold text-blue-600 mb-2">15+</div>
                    <div class="text-gray-600">Minigame Dibuat</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Preview -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Galeri Kelas</h3>
                <p class="text-gray-600 text-lg">Kenangan indah kita bersama</p>
            </div>
            
            <!-- Month Filter -->
            <div class="flex flex-wrap justify-center gap-2 mb-8">
                <button onclick="filterGallery('all')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-blue-600 text-white">Semua</button>
                <button onclick="filterGallery('januari')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white">Januari</button>
                <button onclick="filterGallery('februari')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white">Februari</button>
                <button onclick="filterGallery('maret')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white">Maret</button>
                <button onclick="filterGallery('april')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white">April</button>
                <button onclick="filterGallery('mei')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white">Mei</button>
                <button onclick="filterGallery('juni')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white">Juni</button>
            </div>

            <!-- Gallery Grid -->
            <div id="galleryGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- Gallery items will be populated by JavaScript -->
            </div>
            
            <div class="text-center mt-8">
                <a href="gallery.html" class="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-block">Lihat Semua Foto</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">Fitur Kami</h3>
                <p class="text-gray-600 text-lg">Berbagai fitur menarik untuk membuat kelas lebih hidup</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Galeri Foto</h4>
                    <p class="text-gray-600">Kumpulkan dan bagikan momen berharga kelas dengan mudah</p>
                </div>
                
                <div class="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Minigame</h4>
                    <p class="text-gray-600">Buat dan mainkan game edukatif dengan sistem drag-and-drop</p>
                </div>
                
                <div class="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Perkenalan</h4>
                    <p class="text-gray-600">Kenali lebih dekat setiap anggota kelas melalui profil interaktif</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p class="text-gray-400">&copy; 2024 Kelas Kami. Dibuat dengan ❤️ untuk komunitas belajar.</p>
        </div>
    </footer>

    <!-- Login Modal -->
    <div id="loginModal" class="login-modal fixed inset-0 z-50 hidden flex items-center justify-center p-4">
        <div class="modal-content bg-white p-8 max-w-md w-full mx-4">
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Login ke Kelas Kami</h3>
                <p class="text-gray-600">Masukkan username dan password Anda</p>
            </div>
            
            <form id="loginForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input type="text" id="username" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan username" required>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input type="password" id="password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan password" required>
                </div>
                
                <div id="loginError" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    <p class="text-sm">Username atau password salah!</p>
                </div>
                
                <button type="submit" class="w-full btn-primary text-white py-3 rounded-lg font-medium">
                    Login
                </button>
                
                <div class="text-center text-sm text-gray-600 mt-4">
                    <p>Belum punya akun? Hubungi admin kelas</p>
                </div>
            </form>
            
            <button id="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>

    <!-- Coming Soon Modal -->
    <div id="comingSoonModal" class="login-modal fixed inset-0 z-50 hidden flex items-center justify-center p-4">
        <div class="modal-content bg-white p-8 max-w-md w-full mx-4 text-center">
            <div class="mb-6">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
                <p class="text-gray-600">Fitur ini masih dalam pengembangan. Silakan login terlebih dahulu untuk mengakses fitur lainnya.</p>
            </div>
            
            <button onclick="closeComingSoon()" class="btn-primary text-white px-6 py-3 rounded-lg font-medium">
                Mengerti
            </button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 CSS - style.css

```css
/* Website Kelas - Style CSS */

/* Font Configuration */
* {
    font-family: 'Source Sans Pro', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
}

/* Color Variables */
:root {
    --primary-color: #4A6C8C;
    --secondary-color: #A8DADC;
    --accent-color: #F1C40F;
    --text-primary: #2D3748;
    --text-secondary: #718096;
    --bg-primary: #F8F9FA;
    --bg-white: #FFFFFF;
}

/* Primary Button Style */
.btn-primary {
    background-color: var(--primary-color);
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: #3A5A7C;
    transform: translateY(-2px);
}

/* Secondary Button Style */
.btn-secondary {
    background-color: var(--secondary-color);
    color: var(--text-primary);
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background-color: #8BC4C4;
    transform: translateY(-2px);
}

/* Primary Text Color */
.primary-color {
    color: var(--primary-color);
}

/* Login Modal Style */
.login-modal {
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gallery Card Hover Effect */
.gallery-card {
    transition: all 0.3s ease;
}

.gallery-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Profile Card Hover Effect */
.profile-card {
    transition: all 0.3s ease;
}

.profile-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Helper Classes */
.hidden {
    display: none !important;
}

.edit-mode {
    border: 2px solid var(--primary-color);
    background-color: rgba(74, 108, 140, 0.05);
}

/* Search Box Focus Effect */
.search-box {
    transition: all 0.3s ease;
}

.search-box:focus {
    box-shadow: 0 0 0 3px rgba(74, 108, 140, 0.1);
}

/* Game Block Styles (Minigame) */
.game-block {
    cursor: grab;
    transition: all 0.3s ease;
}

.game-block:hover {
    transform: scale(1.05);
}

.game-block:active {
    cursor: grabbing;
}

.drop-zone {
    min-height: 100px;
    border: 2px dashed #d1d5db;
    transition: all 0.3s ease;
}

.drop-zone.drag-over {
    border-color: var(--primary-color);
    background-color: rgba(74, 108, 140, 0.1);
}

.game-canvas {
    background-color: var(--bg-primary);
    border: 2px solid #e5e7eb;
    border-radius: 12px;
}

.sprite-item {
    cursor: pointer;
    transition: all 0.3s ease;
}

.sprite-item:hover {
    transform: scale(1.1);
}

.sprite-item.selected {
    border: 3px solid var(--primary-color);
}

/* Game Type Card Hover */
.game-type-card {
    transition: all 0.3s ease;
}

.game-type-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .modal-content {
        margin: 1rem;
        border-radius: 15px;
    }
    
    .gallery-card:hover,
    .profile-card:hover {
        transform: none;
    }
    
    .btn-primary:hover,
    .btn-secondary:hover {
        transform: none;
    }
}

/* Animation for Notifications */
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

/* Lightbox Style */
.lightbox-overlay {
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(5px);
}

/* Loading Animation */
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3A5A7C;
}
```

---

## ⚡ JavaScript - script.js

```javascript
// Website Kelas - JavaScript Utama

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

// Data Galeri Foto
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

// Data Minigame
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

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    checkSession();
    setupEventListeners();
    initializeGallery();
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
    if (loginBtn) loginBtn.addEventListener('click', showLoginModal);
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    if (closeModal) closeModal.addEventListener('click', hideLoginModal);
    
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) hideLoginModal();
        });
    }
    
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    if (usernameInput) {
        usernameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleLogin(e);
        });
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleLogin(e);
        });
    }
}

// Show Login Modal
function showLoginModal() {
    if (loginModal) {
        loginModal.classList.remove('hidden');
        const usernameInput = document.getElementById('username');
        if (usernameInput) usernameInput.focus();
    }
}

// Hide Login Modal
function hideLoginModal() {
    if (loginModal) {
        loginModal.classList.add('hidden');
        if (loginForm) loginForm.reset();
        if (loginError) loginError.classList.add('hidden');
    }
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
    
    const user = usersDatabase.find(u => 
        (u.user.toLowerCase() === username.toLowerCase() || 
         u.nama.toLowerCase().includes(username.toLowerCase())) && 
        u.pass === password
    );
    
    if (user) {
        currentUser = {
            nama: user.nama,
            username: user.user,
            role: user.role
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUIAfterLogin();
        hideLoginModal();
        showNotification(`Selamat datang, ${currentUser.nama}!`, 'success');
    } else {
        showLoginError('Username atau password salah!');
    }
}

// Show Login Error
function showLoginError(message) {
    if (loginError) {
        loginError.querySelector('p').textContent = message;
        loginError.classList.remove('hidden');
    }
}

// Update UI After Login
function updateUIAfterLogin() {
    if (currentUser && userWelcome && userName && loginBtn && logoutBtn) {
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
    
    if (loginBtn && logoutBtn && userWelcome) {
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        userWelcome.classList.add('hidden');
    }
    
    showNotification('Anda telah berhasil logout.', 'info');
}

// Initialize Gallery
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    displayGalleryItems(galleryData.slice(0, 8));
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
    
    card.addEventListener('click', () => openLightbox(item));
    return card;
}

// Filter Gallery
function filterGallery(bulan) {
    currentFilter = bulan;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-blue-600', 'text-white');
    
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
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) lightbox.remove();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.parentNode) lightbox.remove();
    });
}

// Show Coming Soon Modal
function showComingSoon() {
    if (!currentUser) {
        showNotification('Silakan login terlebih dahulu!', 'warning');
        showLoginModal();
        return;
    }
    
    const comingSoonModal = document.getElementById('comingSoonModal');
    if (comingSoonModal) comingSoonModal.classList.remove('hidden');
}

// Close Coming Soon Modal
function closeComingSoon() {
    const comingSoonModal = document.getElementById('comingSoonModal');
    if (comingSoonModal) comingSoonModal.classList.add('hidden');
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300`;
    
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
    
    setTimeout(() => notification.classList.remove('translate-x-full'), 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => { if (notification.parentNode) notification.remove(); }, 300);
    }, 5000);
}

// Check User Permission
function hasPermission(action) {
    if (!currentUser) return false;
    
    switch(currentUser.role) {
        case 'admin':
            return true;
        case 'member':
            return action === 'edit_own';
        case 'guest':
            return action === 'view';
        default:
            return false;
    }
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Export functions for global access
window.showLoginModal = showLoginModal;
window.hideLoginModal = hideLoginModal;
window.handleLogin = handleLogin;
window.logout = logout;
window.showNotification = showNotification;
window.hasPermission = hasPermission;
window.filterGallery = filterGallery;
window.openLightbox = openLightbox;
window.showComingSoon = showComingSoon;
window.closeComingSoon = closeComingSoon;
window.usersDatabase = usersDatabase;
window.galleryData = galleryData;
window.minigamesData = minigamesData;
window.currentUser = currentUser;
```

---

## 📚 Dokumentasi Lengkap

### File yang Dibuat:
1. **index.html** - Halaman utama dengan login pop-up
2. **gallery.html** - Halaman galeri lengkap dengan filter
3. **minigame.html** - Halaman pembuatan minigame
4. **profile.html** - Halaman perkenalan kelas
5. **style.css** - File CSS terpisah
6. **script.js** - File JavaScript utama
7. **README.md** - Dokumentasi penggunaan
8. **KODE_TERPSIAH.md** - Dokumen ini

### Fitur Lengkap:
✅ Login pop-up center dengan sudut melengkung  
✅ 35 akun siswa + 1 admin  
✅ Role-based access control  
✅ Galeri foto dengan filter bulan  
✅ Minigame creator (Scratch-like)  
✅ Perkenalan kelas dengan edit permissions  
✅ Responsive design  
✅ Local storage persistence  

### Cara Penggunaan:
1. Buka `index.html` di browser
2. Klik "Login" untuk masuk
3. Jelajahi fitur-fitur yang tersedia
4. File CSS dan JS sudah terpisah sesuai permintaan

---

**Website siap digunakan! 🎉**
