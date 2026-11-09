# 📚 BukuKu - Aplikasi Web Pemesanan Buku

Tugas UTS **Pemrograman Web 1**. Aplikasi web sederhana untuk pemesanan buku pada toko online, dibuat dengan **HTML, CSS, dan JavaScript** (front-end saja, tanpa server/database).

> Nama: Rahsya Alfrendika | NIM: 312510339 | Kelas: I253C

## ✨ Fitur

| Halaman | File | Deskripsi |
|---|---|---|
| Login | `index.html` | Validasi email/password, alert jika salah, modal **Lupa Password** dan **Daftar** |
| Dashboard | `dashboard.html` | Menu utama dan greeting pagi/siang/sore/malam sesuai jam lokal |
| Katalog Stok | `stok.html` | Tabel dinamis dari `dataKatalogBuku`, tambah/hapus baris lewat DOM, pencarian |
| Pemesanan | `checkout.html` | Keranjang (tambah/ubah/hapus), form pemesan dan pembayaran dengan validasi |
| Tracking | `tracking.html` | Cari nomor Delivery Order, tampil status (progress bar), ekspedisi, tanggal, paket, total |
| Laporan | `laporan.html` | Ringkasan pesanan, pendapatan, dan penjualan per buku |
| History | `history.html` | Riwayat seluruh transaksi |

## 🗂️ Struktur Folder

```
tugas-uts-web1/
├── index.html        (halaman login)
├── dashboard.html
├── stok.html
├── checkout.html
├── tracking.html
├── laporan.html
├── history.html
├── css/
│   └── style.css
├── js/
│   ├── script.js     (logika aplikasi)
│   └── data.js       (data dummy berformat array JSON)
├── assets/
│   └── logo.svg
└── img/
    └── buku1.svg ... buku6.svg
```

## 🚀 Cara Menjalankan

1. Clone atau unduh repositori ini.
   ```bash
   git clone https://github.com/<username>/tugas-uts-web1.git
   ```
2. Buka file `index.html` di browser (tidak perlu instalasi apa pun).
3. Login dengan akun demo:
   - Email: `admin@bukuku.com`
   - Password: `admin123`

Nomor DO contoh untuk fitur tracking: `DO2026001`, `DO2026002`, `DO2026003`.

## 🧠 Cara Kerja Singkat

- **Data**: `js/data.js` berisi `dataKatalogBuku`, `dataPengguna`, dan `dataTransaksi`.
- **Satu `script.js` untuk semua halaman**: atribut `data-page` pada `<body>` menentukan fungsi yang dijalankan.
- **`localStorage`** menyimpan keranjang, stok, pesanan, dan sesi login agar data tersambung antar halaman.
- **Validasi form** memakai JavaScript (regex email/telepon, panjang minimum, cek stok) dengan umpan balik berupa alert, modal, dan sorotan kolom.

## 🛠️ Teknologi

- HTML5 semantik (`header`, `nav`, `main`, `section`, `footer`)
- CSS3 (variabel CSS, Flexbox, Grid, responsif, animasi)
- JavaScript (DOM, event, `localStorage`)

## ⚠️ Catatan

Proyek ini untuk pembelajaran. Data tersimpan di browser dan password belum dienkripsi. Untuk pengembangan lanjut, aplikasi dapat dihubungkan ke backend dan database dengan autentikasi yang aman.
