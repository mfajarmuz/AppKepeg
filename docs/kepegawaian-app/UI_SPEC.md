# Desain Frontend — Aplikasi Database Kepegawaian Kantor

## Ringkasan
Gaya: semi-formal (biru/putih/abu), bersih, fokus keterbacaan data. Prioritas desktop, mobile tetap rapi (list card, bukan table horizontal scroll).

## Layout Utama
- Sidebar kiri (menu: Daftar Pegawai, Dashboard, Import Excel, Laporan, Log Aktivitas, Pengaturan)
- Header atas (judul halaman, tombol aksi utama, nama admin)
- Konten utama

Halaman pertama setelah login: **Daftar Pegawai**.

## Daftar Pegawai
- Search box besar (placeholder: "Cari nama, NIP, atau NIK...")
- Tabel medium-compact
- Kolom: Nama, NIP/NIK (tampilkan dua baris), Kontak, Jabatan, Unit, Atasan, Status (badge), Aksi
- Aksi: tombol **Lihat** + dropdown (Edit, Arsipkan/Nonaktifkan)
- Empty state + tombol Tambah Pegawai & Import Excel

## Detail Pegawai
Tabs: Profil, Kepegawaian, Riwayat, Log.

## Tambah/Edit Pegawai
- Halaman penuh (bukan modal)
- Section: Biodata, Kontak, Kepegawaian
- Sticky action bar (Batal, Simpan)
- Validasi inline
- Edit data penting: modal konfirmasi ringkas perubahan (Field, Lama, Baru)

## Import Excel
- Download template
- Upload -> Preview
- Preview: total baris, valid, error + tabel status valid/error per baris + detail error
- Jika ada error: opsi Simpan data valid / Batal

## Laporan
- Tombol Export Excel/PDF + preview tabel ringkas

## Log Aktivitas
- Tabel log + badge aksi (CREATE/UPDATE/ARCHIVE/IMPORT/EXPORT)

## Pengaturan
- Profil admin + ubah password

## Responsif
- Desktop: sidebar permanen, tabel penuh
- Mobile: sidebar drawer, daftar pegawai jadi card list
