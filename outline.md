# Website Kelas - Outline Project

## Struktur File

### 1. index.html - Halaman Utama
**Fungsi:** Landing page dengan login pop-up dan overview kelas
**Komponen:**
- Navigation bar dengan menu utama
- Hero section dengan welcome message
- Login pop-up modal (center, rounded corners)
- Overview galeri kelas (preview foto-foto terbaru)
- Quick access ke minigame dan perkenalan
- Footer sederhana

### 2. gallery.html - Halaman Galeri Lengkap
**Fungsi:** Menampilkan semua foto kelas dengan filter bulan
**Komponen:**
- Filter bulan (dropdown atau tabs)
- Grid layout untuk foto-foto kelas
- Lightbox untuk melihat foto lebih besar
- Search functionality untuk mencari foto berdasarkan nama/event

### 3. minigame.html - Halaman Minigame
**Fungsi:** Pembuatan dan permainan minigame sederhana
**Komponen:**
- Canvas area untuk game (seperti Scratch)
- Block palette (drag & drop)
- Sprite selection
- Game preview area
- Save/load game functionality

### 4. profile.html - Halaman Perkenalan Kelas
**Fungsi:** Menampilkan dan mengedit profil siswa
**Komponen:**
- Grid kartu siswa
- Form edit profil (untuk member sendiri)
- Admin control panel (untuk admin)
- Search dan filter siswa

### 5. main.js - JavaScript Utama
**Fungsi:** Semua logic JavaScript untuk website
**Komponen:**
- Authentication system
- Role-based access control
- Login/logout functionality
- Modal management
- CRUD operations untuk data kelas
- Game logic untuk minigame

### 6. resources/ - Folder Assets
- Foto-foto kelas (dummy images untuk demo)
- Icon dan logo
- Audio files (jika diperlukan untuk game)

## Fitur Utama

### Sistem Login
- Modal pop-up di tengah layar
- Validasi username dan password
- Role management (admin/member/guest)
- Session persistence

### Galeri Foto
- Filter berdasarkan bulan
- Grid responsive
- Lightbox preview
- Search functionality

### Minigame (Scratch-like)
- Drag & drop blocks
- Sprite management
- Simple game logic
- Save/load creations

### Perkenalan Kelas
- Profile cards
- Edit permissions berdasarkan role
- Rich text editor untuk deskripsi

## Data Structure

### User Data
```javascript
{
  nama: "Nama Lengkap",
  username: "username",
  password: "pass",
  role: "admin|member|guest",
  profile: {
    foto: "path/to/foto",
    deskripsi: "Deskripsi diri",
    hobi: ["hobi1", "hobi2"],
    motto: "Motto hidup"
  }
}
```

### Gallery Data
```javascript
{
  id: "unique_id",
  bulan: "Januari|Februari|...",
  tahun: "2024",
  kategori: "Kegiatan|Pesta|Belajar",
  foto: "path/to/foto",
  deskripsi: "Deskripsi foto",
  uploader: "username"
}
```

### Game Data
```javascript
{
  id: "unique_id",
  judul: "Nama Game",
  creator: "username",
  blocks: [...], // Array of game blocks
  sprites: [...], // Array of sprite data
  created: "timestamp",
  modified: "timestamp"
}
```

## Navigation Flow
1. **Guest/Unauthorized:** Login pop-up → Access limited pages
2. **Member:** Full access to all pages, edit own profile
3. **Admin:** Full access + edit all profiles + manage content

## Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interface untuk mobile
- Optimized images untuk berbagai ukuran layar