// ========= DATA SISWA DARI COMMAND =========
const siswaData = [
  {nama:"Ahmad Fauzan R.", pass:"af001", user:"ahmad", foto:"assets/siswa1.jpg"},
  {nama:"Anisa Aulia P.", pass:"aa002", user:"anisa", foto:"assets/siswa2.jpg"},
  {nama:"Ariza Syifa A.", pass:"as003", user:"ariza", foto:"assets/siswa3.jpg"},
  {nama:"Arjanti Nathania A.S.", pass:"an004", user:"arjanti", foto:"assets/siswa4.jpg"},
  {nama:"Aurelia Batrisya U.S.", pass:"ab005", user:"aurelia", foto:"assets/siswa5.jpg"},
  {nama:"Azka Bachtiar F.", pass:"6761", user:"azka", foto:"assets/siswa6.jpg"},
  {nama:"Davina Nasyifa", pass:"dn007", user:"davina", foto:"assets/siswa7.jpg"},
  {nama:"Dinda Sahfira P.", pass:"ds008", user:"dinda", foto:"assets/siswa8.jpg"},
  {nama:"Elica Senta A.", pass:"es009", user:"elica", foto:"assets/siswa9.jpg"},
  {nama:"Fatih Algis S.", pass:"fa010", user:"fatih", foto:"assets/siswa10.jpg"},
  {nama:"Hafiza Azha S.", pass:"ha011", user:"hafiza", foto:"assets/siswa11.jpg"},
  {nama:"Herliana", pass:"he012", user:"herliana", foto:"assets/siswa12.jpg"},
  {nama:"Ivanesya Aztana", pass:"ia013", user:"ivanesya", foto:"assets/siswa13.jpg"},
  {nama:"Jelita Sulistya N.", pass:"js014", user:"jelita", foto:"assets/siswa14.jpg"},
  {nama:"Kartika Syalom E.H.", pass:"ks015", user:"kartika", foto:"assets/siswa15.jpg"},
  {nama:"Levy Widya S.", pass:"lw016", user:"levy", foto:"assets/siswa16.jpg"},
  {nama:"Mahardika Febriansyah", pass:"mf017", user:"mahardika", foto:"assets/siswa17.jpg"},
  {nama:"Melda", pass:"me018", user:"melda", foto:"assets/siswa18.jpg"},
  {nama:"Millah Oktapiyah", pass:"mo019", user:"millah", foto:"assets/siswa19.jpg"},
  {nama:"M. Gilang A.", pass:"mg020", user:"gilang", foto:"assets/siswa20.jpg"},
  {nama:"Nazzellah Nur R.", pass:"nn021", user:"nazzellah", foto:"assets/siswa21.jpg"},
  {nama:"Novia Ardani", pass:"na022", user:"novia", foto:"assets/siswa22.jpg"},
  {nama:"Putri Inaya A.", pass:"pi023", user:"putri", foto:"assets/siswa23.jpg"},
  {nama:"Risma Musliyah", pass:"rm024", user:"risma", foto:"assets/siswa24.jpg"},
  {nama:"Safa Salsabila", pass:"ss025", user:"safa", foto:"assets/siswa25.jpg"},
  {nama:"Santri Yuliani", pass:"sy026", user:"santri", foto:"assets/siswa26.jpg"},
  {nama:"Shafa Nur F.", pass:"sn027", user:"shafa", foto:"assets/siswa27.jpg"},
  {nama:"Shafira Rahmadani", pass:"sr028", user:"shafira", foto:"assets/siswa28.jpg"},
  {nama:"Silva Rahma A.", pass:"sa029", user:"silva", foto:"assets/siswa29.jpg"},
  {nama:"Suci Rahmadiani A.", pass:"sr030", user:"suci", foto:"assets/siswa30.jpg"},
  {nama:"Tiara Wijaya", pass:"tw031", user:"tiara", foto:"assets/siswa31.jpg"},
  {nama:"Trissa Oktaviani", pass:"to032", user:"trissa", foto:"assets/siswa32.jpg"},
  {nama:"Vania Wulan O.", pass:"vw033", user:"vania", foto:"assets/siswa33.jpg"},
  {nama:"Zaki Abdussadad", pass:"za034", user:"zaki", foto:"assets/siswa34.jpg"},
  {nama:"Zivilia Nuurfatma", pass:"zn035", user:"zivilia", foto:"assets/siswa35.jpg"}
];

// ===== GALERI DUMMY =====
const galeri = [
  'assets/kegiatan1.jpg',
  'assets/kegiatan2.jpg',
  'assets/kegiatan3.jpg'
];

let currentUser = null;

// ===== NAVIGASI HALAMAN =====
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// ===== LOGIN SEBAGAI GUEST =====
function loginAsGuest() {
  currentUser = { role: 'guest' };
  localStorage.setItem('user', JSON.stringify(currentUser));
  updateUI();
  showPage('profil');
}

// ===== LOGIN UTAMA =====
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const user = siswaData.find(s => s.user === username);

  if (!user) {
    alert('Username tidak ditemukan');
    return;
  }

  // TOP ADMIN khusus Azka
  if (username === 'azka' && password === 'Ambabas') {
    currentUser = { role: 'topadmin' };
  } else if (password === 'Ambabas') {
    currentUser = { role: 'adminmember' };
  } else if (user.pass === password) {
    currentUser = { role: 'member' };
  } else {
    alert('Password salah');
    return;
  }

  localStorage.setItem('user', JSON.stringify(currentUser));
  updateUI();
  showPage('profil');
});

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem('user');
  currentUser = null;
  updateUI();
  showPage('login');
}

// ===== UPDATE UI BERDASARKAN ROLE =====
function updateUI() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navLogin = document.getElementById('nav-login');
  const navLogout = document.getElementById('nav-logout');
  const reminderForm = document.getElementById('reminder-form');

  if (user) {
    navLogin.classList.add('hidden');
    navLogout.classList.remove('hidden');
    if (user.role === 'topadmin' || user.role === 'adminmember') {
      reminderForm.style.display = 'block';
    } else {
      reminderForm.style.display = 'none';
    }
  } else {
    navLogin.classList.remove('hidden');
    navLogout.classList.add('hidden');
    reminderForm.style.display = 'none';
  }
}

// ===== LOAD SISWA DENGAN FOTO =====
function loadSiswa() {
  const container = document.getElementById('siswa-list');
  container.innerHTML = '';
  siswaData.forEach(s => {
    const card = document.createElement('div');
    card.className = 'siswa-card';
    card.innerHTML = `
      <img src="${s.foto}" alt="Foto Siswa" onerror="this.src='assets/default.jpg'"/>
      <p>${s.nama}</p>
    `;
    container.appendChild(card);
  });
}

// ===== LOAD GALERI =====
function loadGaleri() {
  const container = document.getElementById('galeri-list');
  container.innerHTML = '';
  galeri.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'galeri-item';
    img.alt = 'Kegiatan';
    img.onerror = () => { img.src = 'assets/default.jpg'; };
    container.appendChild(img);
  });
}

// ===== REMINDER DENGAN NOTIFIKASI =====
document.getElementById('reminder-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const mapel = document.getElementById('mapel').value;
  const deskripsi = document.getElementById('deskripsi').value;
  const menit = parseInt(document.getElementById('waktu-reminder').value);

  const msg = `Tugas ${mapel}: ${deskripsi}`;
  alert(`Reminder diatur: ${msg} (akan muncul dalam ${menit} menit)`);

  setTimeout(() => {
    if (Notification.permission === 'granted') {
      new Notification('Reminder Tugas', { body: msg });
    } else {
      alert('Reminder: ' + msg);
    }
  }, menit * 60 * 1000);

  document.getElementById('reminder-form').reset();
});

// ===== REQUEST NOTIFIKASI =====
if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
  Notification.requestPermission();
}

// ===== INIT =====
window.onload = () => {
  updateUI();
  loadSiswa();
  loadGaleri();
  showPage('login');
};
