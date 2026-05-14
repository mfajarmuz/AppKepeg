# PRD — Aplikasi Database Kepegawaian Kantor

## 1. Ringkasan Produk

Aplikasi ini adalah sistem database kepegawaian berbasis web online untuk membantu admin kepegawaian merapikan, mencari, memonitor, dan melaporkan data pegawai kantor.

Aplikasi difokuskan pada pengelolaan data pegawai, status pegawai, jabatan, unit kerja, atasan langsung, serta riwayat perubahan jabatan dan status pegawai.

Target pengguna utama adalah **admin kepegawaian**.

Jumlah awal pegawai yang dikelola sekitar **55 orang**, tetapi sistem sebaiknya tetap mampu menangani pertumbuhan data sampai beberapa ratus pegawai tanpa perubahan besar.

Karena aplikasi berbasis **web online**, login wajib ada. Aplikasi tidak boleh dapat diakses tanpa autentikasi.

---

## 2. Tujuan Produk

Tujuan utama aplikasi:

1. Merapikan data pegawai agar tidak tercecer di banyak file Excel.
2. Memudahkan admin mencari data pegawai berdasarkan nama, NIP, atau NIK.
3. Memantau status pegawai seperti aktif, tidak aktif, PNS, PPPK, honorer, kontrak, tetap, mutasi, pensiun, atau pindah.
4. Mencatat data jabatan, unit kerja, dan atasan langsung.
5. Menyimpan riwayat perubahan jabatan dan status pegawai.
6. Menyediakan dashboard ringkas berisi total pegawai dan jumlah pegawai berdasarkan status.
7. Menyediakan laporan daftar seluruh pegawai dalam format Excel dan PDF.
8. Mendukung input manual dan import data dari Excel dengan preview sebelum data disimpan.
9. Menyediakan backup otomatis harian.

---

## 3. Batasan MVP

### 3.1 Masuk MVP

MVP hanya mencakup:

1. Login admin.
2. Manajemen data pegawai.
3. Pencarian pegawai berdasarkan nama, NIP, dan NIK.
4. Tabel daftar pegawai.
5. Input manual data pegawai.
6. Edit data pegawai.
7. Arsip/nonaktifkan pegawai.
8. Log perubahan data.
9. Riwayat jabatan.
10. Riwayat status pegawai.
11. Import Excel dengan preview sebelum data disimpan.
12. Dashboard sederhana.
13. Export laporan daftar pegawai ke Excel dan PDF.
14. Backup otomatis harian.

### 3.2 Tidak Masuk MVP

Yang tidak masuk MVP:

1. Absensi.
2. Payroll/gaji.
3. Cuti.
4. Penilaian kinerja.
5. Upload dokumen pegawai.
6. Multi-role pegawai/pimpinan.
7. Approval berlapis.
8. Tanda tangan digital.
9. Mobile app native Android/iOS.
10. Fitur surat-menyurat.
11. Integrasi dengan sistem eksternal.

Catatan penting: jangan membangun fitur di luar MVP sebelum fitur utama stabil. Aplikasi ini harus menjadi database pegawai yang rapi terlebih dahulu, bukan HRIS besar.

---

## 4. Pengguna dan Hak Akses

### 4.1 Role MVP

Hanya ada satu role utama:

**Admin Kepegawaian**

Admin dapat:

1. Login ke aplikasi.
2. Melihat daftar pegawai.
3. Menambah data pegawai.
4. Mengedit data pegawai.
5. Mengarsipkan/nonaktifkan pegawai.
6. Melihat dashboard.
7. Melihat riwayat jabatan pegawai.
8. Melihat riwayat status pegawai.
9. Import data dari Excel.
10. Export laporan ke Excel dan PDF.
11. Melihat log perubahan data.

### 4.2 Catatan Hak Akses

Walaupun admin boleh melakukan aksi “hapus”, implementasi yang disarankan adalah **soft delete / arsip**, bukan hapus permanen.

Data pegawai tidak boleh hilang secara fisik dari database pada MVP. Tombol hapus sebaiknya diberi label yang lebih aman, misalnya:

- Arsipkan
- Nonaktifkan

Hapus permanen hanya boleh dipertimbangkan pada versi lanjutan dengan role superadmin.

---

## 5. Fitur Utama

## 5.1 Login Admin

Admin harus login sebelum mengakses aplikasi.

Metode login MVP:

- Username dan password.

Kebutuhan:

1. Halaman login.
2. Validasi username dan password.
3. Password disimpan dalam bentuk hash.
4. Session/token authentication.
5. Logout.
6. Proteksi halaman agar tidak bisa diakses tanpa login.

Belum perlu:

1. Google login.
2. OTP.
3. Multi-factor authentication.
4. Reset password via email.

---

## 5.2 Dashboard

Dashboard menampilkan ringkasan sederhana:

1. Total seluruh pegawai.
2. Jumlah pegawai aktif.
3. Jumlah pegawai tidak aktif.
4. Jumlah pegawai berdasarkan jenis pegawai:
   - PNS
   - PPPK
   - Honorer
   - Kontrak
5. Jumlah pegawai berdasarkan status pergerakan:
   - Tetap
   - Mutasi
   - Pensiun
   - Pindah

Untuk MVP, dashboard tidak perlu grafik kompleks. Kartu angka sudah cukup.

---

## 5.3 Daftar Pegawai

Halaman utama aplikasi adalah tabel daftar pegawai.

Kolom minimal:

1. Nama pegawai.
2. NIP.
3. NIK.
4. Kontak.
5. Jabatan.
6. Unit kerja.
7. Jenis pegawai.
8. Status aktif.
9. Status pergerakan.
10. Atasan langsung.
11. Aksi.

Aksi:

1. Lihat detail.
2. Edit.
3. Arsipkan/nonaktifkan.

Fitur tabel:

1. Search berdasarkan nama.
2. Search berdasarkan NIP.
3. Search berdasarkan NIK.
4. Pagination.
5. Sorting sederhana.
6. Empty state jika data kosong.
7. Loading state saat data diproses.

---

## 5.4 Detail Pegawai

Halaman detail pegawai menampilkan data lengkap seorang pegawai.

(Biodata + Kepegawaian + Riwayat)

---

## 5.10 Import Excel

Wajib ada **preview** sebelum simpan. Baris error **tidak boleh** ikut tersimpan.

---

## 5.11 Export Laporan

Format: Excel + PDF.

---

## 5.13 Backup Otomatis

Backup database otomatis harian, disimpan minimal 7–30 hari, restore terdokumentasi.
