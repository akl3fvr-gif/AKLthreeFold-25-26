const siswa = [
  { nama: "Ahmad Fauzan R.", foto: "assets/siswa1.jpg" },
  { nama: "Anisa Aulia P.", foto: "assets/siswa2.jpg" },
  { nama: "Ariza Syifa A.", foto: "assets/siswa3.jpg" },
  { nama: "Arjanti Nathania A.S.", foto: "assets/siswa4.jpg" },
  { nama: "Aurelia Batrisya U.S.", foto: "assets/siswa5.jpg" },
  { nama: "Azka Bachtiar F.", foto: "assets/siswa6.jpg" },
  { nama: "Davina Nasyifa", foto: "assets/siswa7.jpg" },
  { nama: "Dinda Sahfira P.", foto: "assets/siswa8.jpg" },
  { nama: "Elica Senta A.", foto: "assets/siswa9.jpg" },
  { nama: "Fatih Algis S.", foto: "assets/siswa10.jpg" },
  { nama: "Hafiza Azha S.", foto: "assets/siswa11.jpg" },
  { nama: "Herliana", foto: "assets/siswa12.jpg" },
  { nama: "Ivanesya Aztana", foto: "assets/siswa13.jpg" },
  { nama: "Jelita Sulistya N.", foto: "assets/siswa14.jpg" },
  { nama: "Kartika Syalom E.H.", foto: "assets/siswa15.jpg" },
  { nama: "Levy Widya S.", foto: "assets/siswa16.jpg" },
  { nama: "Mahardika Febriansyah", foto: "assets/siswa17.jpg" },
  { nama: "Melda", foto: "assets/siswa18.jpg" },
  { nama: "Millah Oktapiyah", foto: "assets/siswa19.jpg" },
  { nama: "M. Gilang A.", foto: "assets/siswa20.jpg" },
  { nama: "Nazzellah Nur R.", foto: "assets/siswa21.jpg" },
  { nama: "Novia Ardani", foto: "assets/siswa22.jpg" },
  { nama: "Putri Inaya A.", foto: "assets/siswa23.jpg" },
  { nama: "Risma Musliyah", foto: "assets/siswa24.jpg" },
  { nama: "Safa Salsabila", foto: "assets/siswa25.jpg" },
  { nama: "Santri Yuliani", foto: "assets/siswa26.jpg" },
  { nama: "Shafa Nur F.", foto: "assets/siswa27.jpg" },
  { nama: "Shafira Rahmadani", foto: "assets/siswa28.jpg" },
  { nama: "Silva Rahma A.", foto: "assets/siswa29.jpg" },
  { nama: "Suci Rahmadiani A.", foto: "assets/siswa30.jpg" },
  { nama: "Tiara Wijaya", foto: "assets/siswa31.jpg" },
  { nama: "Trissa Oktaviani", foto: "assets/siswa32.jpg" },
  { nama: "Vania Wulan O.", foto: "assets/siswa33.jpg" },
  { nama: "Zaki Abdussadad", foto: "assets/siswa34.jpg" },
  { nama: "Zivilia Nuurfatma", foto: "assets/siswa35.jpg" }
];

const siswaData = [
  {nama:"Ahmad Fauzan R.", pass:"af001", user:"ahmad"},
  {nama:"Anisa Aulia P.", pass:"aa002", user:"anisa"},
  {nama:"Ariza Syifa A.", pass:"as003", user:"ariza"},
  {nama:"Arjanti Nathania A.S.", pass:"an004", user:"arjanti"},
  {nama:"Aurelia Batrisya U.S.", pass:"ab005", user:"aurelia"},
  {nama:"Azka Bachtiar F.", pass:"6761", user:"azka"},
  {nama:"Davina Nasyifa", pass:"dn007", user:"davina"},
  {nama:"Dinda Sahfira P.", pass:"ds008", user:"dinda"},
  {nama:"Elica Senta A.", pass:"es009", user:"elica"},
  {nama:"Fatih Algis S.", pass:"fa010", user:"fatih"},
  {nama:"Hafiza Azha S.", pass:"ha011", user:"hafiza"},
  {nama:"Herliana", pass:"he012", user:"herliana"},
  {nama:"Ivanesya Aztana", pass:"ia013", user:"ivanesya"},
  {nama:"Jelita Sulistya N.", pass:"js014", user:"jelita"},
  {nama:"Kartika Syalom E.H.", pass:"ks015", user:"kartika"},
  {nama:"Levy Widya S.", pass:"lw016", user:"levy"},
  {nama:"Mahardika Febriansyah", pass:"mf017", user:"mahardika"},
  {nama:"Melda", pass:"me018", user:"melda"},
  {nama:"Millah Oktapiyah", pass:"mo019", user:"millah"},
  {nama:"M. Gilang A.", pass:"mg020", user:"gilang"},
  {nama:"Nazzellah Nur R.", pass:"nn021", user:"nazzellah"},
  {nama:"Novia Ardani", pass:"na022", user:"novia"},
  {nama:"Putri Inaya A.", pass:"pi023", user:"putri"},
  {nama:"Risma Musliyah", pass:"rm024", user:"risma"},
  {nama:"Safa Salsabila", pass:"ss025", user:"safa"},
  {nama:"Santri Yuliani", pass:"sy026", user:"santri"},
  {nama:"Shafa Nur F.", pass:"sn027", user:"shafa"},
  {nama:"Shafira Rahmadani", pass:"sr028", user:"shafira"},
  {nama:"Silva Rahma A.", pass:"sa029", user:"silva"},
  {nama:"Suci Rahmadiani A.", pass:"sr030", user:"suci"},
  {nama:"Tiara Wijaya", pass:"tw031", user:"tiara"},
  {nama:"Trissa Oktaviani", pass:"to032", user:"trissa"},
  {nama:"Vania Wulan O.", pass:"vw033", user:"vania"},
  {nama:"Zaki Abdussadad", pass:"za034", user:"zaki"},
  {nama:"Zivilia Nuurfatma", pass:"zn035", user:"zivilia"}
];

const galeri = [
  'assets/kegiatan1.jpg',
  'assets/kegiatan2.jpg',
  'assets/kegiatan3.jpg'
];

let currentUser = null;

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function loginAsGuest() {
  currentUser = { role: 'guest' };
  localStorage.setItem('user', JSON.stringify(currentUser));
  updateUI();
  showPage('profil');
}

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = siswa.find(s => s.user === username);

  if (username === 'Fxdx' && password === 'Ambabas') {
    currentUser = { role: 'topadmin' };
  } else if (user) {
    if (password === 'Ambabas') {
      currentUser = { role: 'adminmember' };
    } else if (user.pass === password) {
      currentUser = { role: 'member' };
    } else {
      alert('Password salah');
      return;
    }
  } else {
    alert('Username tidak ditemukan');
    return;
  }

  localStorage.setItem('user', JSON.stringify(currentUser));
  updateUI();
  showPage('profil');
});

function logout() {
  localStorage.removeItem('user');
  currentUser = null;
  updateUI();
  showPage('login');
}

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

function loadSiswa() {
  const container = document.getElementById('siswa-list');
  container.innerHTML = '';
  siswa.forEach(s => {
    const card = document.createElement('div');
    card.className = 'siswa-card';
    card.innerHTML = `
      <img src="${s.foto}" alt="Foto Siswa" onerror="this.src='assets/default.jpg'" />
      <p>${s.nama}</p>
    `;
    container.appendChild(card);
  });
}

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

// Request notifikasi
if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
  Notification.requestPermission();
}

window.onload = () => {
  updateUI();
  loadSiswa();
  loadGaleri();
  showPage('login');
};

