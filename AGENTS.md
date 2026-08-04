# AGENTS.md — Sistem Cetak SPPD (sppd_ku)

## Overview
Web app statis (tanpa framework/bundler) untuk mencetak Surat Perintah Perjalanan Dinas (SPPD) Dinas P3AP2KB Kabupaten Tanah Laut. Vanilla HTML/CSS/JS. Chat real-time pakai Firebase Realtime Database. Animasi via anime.js (CDN).

## Menjalankan
Serve statis dari root folder (Laragon/Apache atau `python -m http.server`). Tidak ada build step. Buka `index.html`. Tidak ada lint/typecheck/tests — verifikasi manual di browser: alur kecamatan → pegawai → cetak PDF (Ctrl+P, @page legal).

## Struktur
- `index.html` — halaman utama: pilih kecamatan → daftar pegawai → preview cetak SPD (2 halaman). Elemen cetak ber-prefix `v-*`.
- `cetak_kie.html` — halaman cetak SPPD KIE berdiri sendiri (tab baru, data lewat localStorage `cetak_kie_data`). Prefix `kie-*`.
- `app.js` — logika utama: load data, render, logika tanggal, penomoran SPPD, admin settings, `isiDataCetak(pegawai, prefix)` fungsi bersama untuk kedua halaman.
- `chat-ui.js` — sistem chat Firebase (listener `messagesRef.limitToLast(200)`, edit/hapus pesan sendiri, badge unread, indikator online).
- `styles.css` — design tokens di `:root`, dark mode, print styles.
- `kader_imp_sub_imp.json` — data master pegawai (kader IMP & sub IMP per kecamatan). `pegawaiData` dibangun darinya saat load.
- `settings.json` — `nomorAwalSppd` (nomor awal SPPD global). Disalin ke `nomorAwalSppd` saat init.
- `.htaccess` — blokir akses ke file sensitif, nonaktifkan directory listing.

## Konvensi
- Bahasa Indonesia: UI, komentar, pesan commit.
- Commit style: `<type>: <desc>` — `feat`, `fix`, `refactor`, `style`, `chore`.
- Fungsi global camelCase, dipanggil via inline `onclick` di HTML (bukan modul/import).
- ID elemen ber-prefix: `v-*` (SPD), `kie-*` (KIE). Helper tanggal/format dipakai bersama lewat prefix.
- Format kode dengan Prettier (`.vscode/settings.json`).

## Logika kunci — jangan diubah tanpa paham
- Penomoran SPPD: `noSpdConfig` dihitung sekuensial per kecamatan dari `nomorAwalSppd`. Format: `NN/DP3AP2KB/BULAN_ROMAWI/TAHUN`.
- Tanggal perjalanan: hanya hari kerja (Senin–Jumat, skip Sabtu/Minggu). Lama hari dari jabatan: Kader IMP = 4, Sub IMP = 3.
- `updateTanggalKembali()` / `updateTanggalManual()` saling sync halaman 1 & 2 (`v-tgl-brkt2`, `v-tgl-kmbli2`, `formatTanggalRange`).
- Format cetak kaku: jangan ubah layout dokumen, ukuran legal (`@page size: legal`), atau kop surat.

## Layout SPD & KIE — JANGAN diubah
CSS berikut adalah format cetak resmi dokumen SPPD. Jangan edit, refactor,
atau "rapihkan" apapun tanpa instruksi eksplisit dari user:

- `styles.css` blok cetak (sekitar baris 1721–1880): `#cetak-page`,
  `.preview-panel`, `.page`, `.header-table`, `.kop-title/.kop-dinas/.kop-alamat`,
  `.main-table`, `.sppd-table-back`, `.col-num`.
- `@page size: legal; margin: 0` di `cetak_kie.html` (baris 62–86).
- Struktur tabel & inline style `index.html` (baris 356–970) dan
  `cetak_kie.html` (baris 99–570): kop surat, `header-table`, `main-table`,
  `sppd-table-back`, baris Roman I–VIII/X, blok tanda tangan Pengguna Anggaran.

Alasan: output PDF harus identik dengan format dinas. Perubahan kecil
(padding, font-size, border-collapse, width kolom) bisa menggeser halaman &
merusak kop surat. Jika butuh ubah, tanyakan dulu.

## Keamanan / konstrain
- `ADMIN_PIN` hardcoded di `app.js`, config Firebase (API key, dll.) sudah di commit — ini client-side Firebase, public by design. Jangan tambah secret baru ke repo.
- Data chat = data publik semua user (RTDB rules di Firebase console, bukan di repo).
- Tombol "Cetak KIE" di `index.html` sengaja `display:none` — jangan diaktifkan tanpa diminta.
- Simpan `no_spd` default & format sesuai data master; jangan hardcode nama pegawai baru di JS — tambah ke `kader_imp_sub_imp.json`.
