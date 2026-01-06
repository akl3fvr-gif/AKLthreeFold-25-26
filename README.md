# Website Kelas Kami

Website komunitas kelas interaktif dengan fitur login, galeri foto, minigame, dan perkenalan siswa.

## Fitur Utama

### 1. Sistem Login
- Modal pop-up di tengah layar dengan sudut melengkung
- Validasi username dan password
- Role-based access control (Admin, Member, Guest)
- Session persistence dengan localStorage

### 2. Galeri Foto
- Filter foto berdasarkan bulan (Januari - Juni)
- Search functionality
- Lightbox preview untuk melihat foto lebih besar
- Grid layout responsive

### 3. Minigame Creator
- Sistem drag-and-drop seperti Scratch
- 4 jenis game: Kuis, Puzzle, Memory, Cari Perbedaan
- Block palette untuk membuat logika game
- Sprite selection
- Save/load game creations

### 4. Perkenalan Kelas
- Profile cards untuk setiap siswa
- Edit permissions berdasarkan role
- Search dan filter siswa
- Admin controls untuk export data

## Struktur File

```
/
├── index.html          # Halaman utama
├── gallery.html        # Halaman galeri lengkap
├── minigame.html       # Halaman pembuatan minigame
├── profile.html        # Halaman perkenalan kelas
├── style.css           # File CSS terpisah
├── script.js           # File JavaScript utama
├── README.md           # Dokumentasi
└── outline.md          # Outline project
```

## Cara Penggunaan

### Login
1. Klik tombol "Login" di kanan atas
2. Masukkan username dan password
3. Klik "Login" untuk masuk

**Akun Admin:**
- Username: admin
- Password: admin123

**Akun Member:**
- Username: (salah satu dari 35 siswa)
- Password: (password masing-masing siswa)

Contoh:
- Username: ahmad
- Password: af001

### Navigasi
- **Beranda**: Overview kelas dan preview galeri
- **Galeri**: Semua foto dengan filter bulan
- **Minigame**: Buat dan mainkan game
- **Perkenalan**: Profil setiap siswa

## Teknologi yang Digunakan

- **HTML5**: Struktur website
- **CSS3 + Tailwind CSS**: Styling dan responsive design
- **JavaScript (ES6+)**: Interaktivitas dan logic
- **LocalStorage**: Data persistence
- **Sortable.js**: Drag-and-drop functionality

## Desain Visual

- **Color Palette**: Biru tua (#4A6C8C), Biru muda (#A8DADC), Kuning (#F1C40F)
- **Typography**: Inter (heading), Source Sans Pro (body)
- **Style**: Modern, clean, dan user-friendly

## Role & Permissions

### Admin
- Full control semua fitur
- Edit semua profil siswa
- Export data siswa
- Manage content

### Member
- Edit profil sendiri
- Buat dan mainkan minigame
- Lihat galeri foto
- Lihat profil teman

### Guest
- Hanya dapat melihat (view only)
- Tidak dapat login
- Akses terbatas

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Cara Menjalankan

1. Download semua file
2. Buka file `index.html` di browser
3. Atau jalankan dengan local server:
   ```bash
   python -m http.server 8000
   ```
4. Buka `http://localhost:8000` di browser

## Pengembangan Selanjutnya

- Integrasi dengan database real
- Fitur upload foto
- Multiplayer untuk minigame
- Chat/messaging system
- Mobile app version

---

**Dibuat dengan ❤️ untuk komunitas belajar**