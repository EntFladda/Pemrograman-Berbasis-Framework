Soal Praktikum 1
Kegunaan Git, VS Code, dan Node.js
Git: Sistem kontrol versi untuk melacak perubahan kode dan kolaborasi tim.
Cek Instalasi: Jalankan di CMD/PowerShell → git --version

VS Code: Editor kode untuk pengembangan perangkat lunak.
Cek Instalasi: Buka VS Code → Help → About

Node.js: Runtime JavaScript untuk menjalankan kode di luar browser.
Cek Instalasi: Jalankan di CMD/PowerShell → node -v dan npm -v

 ![Image Alt]([image_url](https://github.com/EntFladda/Pemrograman-Berbasis-Framework/blob/belajar-react/belajar-react/hello-world/Praktikum%201.png?raw=true))

Soal Praktikum 2
1. Penjelasan Istilah dalam Next.js
TypeScript: Superset dari JavaScript yang menambahkan tipe data statis untuk meningkatkan keamanan dan kejelasan kode.
ESLint: Alat untuk mendeteksi dan memperbaiki kesalahan sintaks serta menjaga konsistensi kode JavaScript/TypeScript.
Tailwind CSS: Framework CSS berbasis utility-first untuk mempercepat pengembangan antarmuka.
App Router: Sistem routing baru di Next.js (app/ directory) yang berbasis server components untuk performa lebih optimal.
Import Alias: Fitur yang memungkinkan pemanggilan file menggunakan jalur pendek yang lebih mudah dibaca, misalnya @/components/Navbar daripada ../../components/Navbar.
Turbopack: Bundler baru di Next.js yang menggantikan Webpack untuk kecepatan kompilasi yang lebih tinggi.

2. Kegunaan Folder dan File dalam Struktur Proyek React
Pada proyek React dengan Node.js, struktur utama biasanya mencakup:
node_modules/ → Berisi dependensi yang diinstal menggunakan npm atau yarn.
public/ → Folder untuk aset statis seperti gambar dan ikon.
src/ → Folder utama untuk kode aplikasi, biasanya berisi:
components/ → Komponen UI yang dapat digunakan kembali.
pages/ atau app/ (Next.js) → Berisi halaman utama aplikasi.
styles/ → File CSS atau Tailwind CSS untuk styling.
package.json → File konfigurasi proyek yang mencatat dependensi dan skrip yang tersedia.
.eslintrc.json → Konfigurasi ESLint untuk standar kode.
next.config.js → Pengaturan untuk proyek Next.js (jika menggunakan Next.js).

![Image Alt](https://github.com/EntFladda/Pemrograman-Berbasis-Framework/blob/belajar-react/belajar-react/hello-world/Screenshot%202025-02-17%20145928.png?raw=true)

Soal Praktikum 3
![Image Alt](https://github.com/EntFladda/Pemrograman-Berbasis-Framework/blob/belajar-react/belajar-react/hello-world/Screenshot%202025-02-17%20145928.png?raw=true)

Soal Praktikum 4
user.imageUrl digunakan untuk mengakses URL gambar dari objek user, lalu menampilkannya dalam elemen seperti <img>.
Misalkan kita memiliki objek berikut:
const user = {
  name: 'EntFladda',
  imageUrl: 'https://i.imgur.com/VmD4zZN.jpg',
  imageSize: 90
};
Contoh Penggunaan:
<img src={user.imageUrl} alt="User Image" />
Mengambil nilai imageUrl dari user agar gambar tampil.

![Image Alt](https://github.com/EntFladda/Pemrograman-Berbasis-Framework/blob/belajar-react/belajar-react/hello-world/Screenshot%202025-02-17%20151442.png?raw=true)

## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
