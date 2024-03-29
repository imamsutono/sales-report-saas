# Panduan Penggunaan dan Instalasi - Repotae Landing Page Template

Halo `devs`! Ini adalah panduan untuk membantu kamu menginstal dan menggunakan template website Repotae dengan mudah. Pastikan kamu membaca panduan ini dengan cermat sebelum memulai.

## Daftar Isi
1. **Instalasi**
   - [Langkah 1: Unduh Kode](#langkah-1-unduh-kode)
   - [Langkah 2: Ekstrak Kode](#langkah-2-ekstrak-kode)
   - [Langkah 3: Konfigurasi](#langkah-3-konfigurasi)

2. **Penggunaan**
   - [Tampilan Umum](#tampilan-umum)
   - [Mengedit Konten](#mengedit-konten)
   - [Mengubah atau Menambah Style](#mengubah-atau-menambah-style)
   - [Menambahkan Halaman Baru](#menambahkan-halaman-baru)
   - [Mendeploy Kode ke Production](#mendeploy-kode-ke-production)

3. **Lisensi**
   - [Lisensi Penggunaan](#lisensi-penggunaan)

4. **Update Kode**
   - [Repositori Github](#repositori-github)

5. **Kontak Kami**
   - [Dukungan](#dukungan)

## Instalasi

### Langkah 1: Unduh Kode
Kamu dapat mengunduh kode Repotae Landing Page Template dari [tautannya di sini](https://drive.google.com/file/d/1jiIxLFhzoYDqeYqsnvS33epyHaTjiU_L/view?usp=drive_link). Klik tombol "Download" untuk mengunduh kode dalam bentuk ZIP.

### Langkah 2: Ekstrak Kode
Ekstrak file ZIP yang baru saja kamu unduh ke direktori kerja kamu.

### Langkah 3: Konfigurasi
- Buka file `src/index.html` menggunakan editor teks atau kode.
- Sesuaikan pengaturan dan konten sesuai dengan kebutuhan kamu.
- Simpan perubahan yang kamu buat.

## Penggunaan

### Tampilan Umum
Repotae Landing Page Template dibangun dengan HTML5 dan menggunakan framework Tailwind CSS untuk tampilan yang responsif dan modern. kamu dapat menjelajahi tampilan umumnya dengan membuka file `src/index.html` di peramban web kamu.

### Mengedit Konten
Untuk mengedit konten pada halaman website, buka file `src/index.html` menggunakan editor teks atau kode, dan cari bagian yang ingin kamu ubah. Selanjutnya, simpan perubahan kamu.

### Mengubah atau Menambah Style
Untuk keperluan ini, kamu perlu menggunakan `npm` atau `yarn` agar file `dist/output.css` dapat diperbarui dengan style yang kamu gunakan. Caranya adalah dengan:
- Buka terminal, masuk ke direktori project ini
- Pastikan kamu sudah menginstal Nodejs di perangkat kamu. Jika belum, silakan download [disini](https://nodejs.org/en)
- Jalankan perintah `npm install` atau `yarn install`
- Kemudian jalankan `npm run dev`
- Buka file `src/index.html` pada browser. Setiap kamu melakukan perubahan pada class html yang kamu gunakan, maka `output.css` akan berubah juga. Refresh halaman untuk melihat perubahan.

### Menambahkan Halaman Baru
Jika kamu ingin menambahkan halaman baru, cukup salin file `src/index.html` dan beri nama baru sesuai dengan kebutuhan kamu. Pastikan untuk menghubungkan halaman baru tersebut dengan file `src/index.html` untuk navigasi yang lancar.

### Mendeploy Kode ke Production
Jika website sudah siap, dan kamu akan menguploadnya ke lingkungan production, lakukan langkah berikut:
- Jalankan perintah `npm run build` di terminal untuk mendapatkan file css dengan versi yang sudah dioptimasi
- Ubah pemanggilan file css di `src/index.html` dari `../dist/output.css` menjadi `../dist/build.css`

## Lisensi

### Lisensi Penggunaan
[Lisensi Penggunaan GNU GPL](https://www.gnu.org/licenses/gpl-3.0.en.html) untuk Repotae Landing Page Template adalah lisensi bebas untuk disunting dan dipakai untuk keperluan pribadi maupun komersial. Namun, kamu **dilarang keras** menjual kembali atau mendistribusikan kembali kode template website ini tanpa izin tertulis dari pemiliknya.

## Update Kode

### Repositori Github
Kamu bisa kunjungi dan clone atau download dari [repositori github ini](https://github.com/imamsutono/sales-report-saas) untuk mendapatkan update terbaru dari kode Repotae Landing Page Template.

## Kontak

### Dukungan
Jika kamu memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi saya [di sini](https://api.whatsapp.com/send/?phone=6285730430616).

Terima kasih telah memilih Repotae Landing Page Template! Saya berharap kamu dapat membuat website yang luar biasa dengan bantuan template ini.

Selamat berkarya! 😊