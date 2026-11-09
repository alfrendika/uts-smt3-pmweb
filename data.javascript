// Data dummy (pengganti database)
const dataKatalogBuku = [
  { kode: "BK001", judul: "Pemrograman Web Dasar", kategori: "Teknologi", harga: 85000, stok: 24, cover: "img/buku1.svg" },
  { kode: "BK002", judul: "Belajar JavaScript Modern", kategori: "Teknologi", harga: 98000, stok: 8, cover: "img/buku2.svg" },
  { kode: "BK003", judul: "Desain UI/UX Praktis", kategori: "Desain", harga: 120000, stok: 15, cover: "img/buku3.svg" },
  { kode: "BK004", judul: "Basis Data untuk Pemula", kategori: "Teknologi", harga: 90000, stok: 5, cover: "img/buku4.svg" },
  { kode: "BK005", judul: "Algoritma dan Logika", kategori: "Sains", harga: 75000, stok: 30, cover: "img/buku5.svg" },
  { kode: "BK006", judul: "Bisnis Digital 101", kategori: "Bisnis", harga: 110000, stok: 12, cover: "img/buku6.svg" }
];

const dataPengguna = [
  { nama: "Admin Toko", email: "admin@bukuku.com", password: "admin123" },
  { nama: "Mahasiswa", email: "mhs@bukuku.com", password: "mhs12345" }
];

const statusPengiriman = ["Pesanan Diterima", "Dikemas", "Dalam Perjalanan", "Terkirim"];

const dataTransaksi = [
  { do: "DO2026001", nama: "Budi Santoso", tanggal: "2026-11-01", metode: "Transfer Bank", ekspedisi: "JNE", paket: "Reguler", status: 3, total: 183000,
    items: [{ judul: "Pemrograman Web Dasar", harga: 85000, qty: 1 }, { judul: "Belajar JavaScript Modern", harga: 98000, qty: 1 }] },
  { do: "DO2026002", nama: "Siti Aminah", tanggal: "2026-11-03", metode: "E-Wallet", ekspedisi: "J&T", paket: "Express", status: 2, total: 240000,
    items: [{ judul: "Desain UI/UX Praktis", harga: 120000, qty: 2 }] },
  { do: "DO2026003", nama: "Andi Wijaya", tanggal: "2026-11-05", metode: "COD", ekspedisi: "SiCepat", paket: "Reguler", status: 1, total: 165000,
    items: [{ judul: "Algoritma dan Logika", harga: 75000, qty: 1 }, { judul: "Basis Data untuk Pemula", harga: 90000, qty: 1 }] }
];
