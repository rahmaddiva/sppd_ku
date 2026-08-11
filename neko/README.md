# Neko Pet — Teman Kucing di SPPD

Pet kucing desktop klasik yang mengikuti kursor, ditanam sebagai fitur di aplikasi
Sistem Cetak SPPD Dinas P3AP2KB Kab. Tanah Laut.

## Cara Pakai

Sertakan satu file `neko.js` lalu panggil `createNeko()`:

```html
<script src="neko/neko.js"></script>
<script>
  window.neko = createNeko(); // kucing muncul & mengikuti kursor
  // window.neko.destroy();   // untuk menghilangkan kucing
</script>
```

Atau muat otomatis begitu halaman dibuka:

```html
<script src="neko/neko.js" data-autostart></script>
```

Di dalam app SPPD, kucing ini dipicu lewat tombol toggle (ikon kucing) di pojok
kanan bawah halaman utama (`index.html`). Kucing tidak ikut tercetak saat
mencetak SPPD (disembunyikan lewat `@media print`).

## Kredit & Lisensi

Kode `neko.js` adalah implementasi JavaScript dari proyek **GPL v3**
[`louisabraham/nekojs`](https://github.com/louisabraham/nekojs) oleh **Louis Abraham (2025)**.

Hormat & hak cipta kepada penulis asli:

- **Neko asli (X-Windows):** Masayuki Koba
- **Port Windows 95/98 (Neko98):** David Harvey (1998)
- **Implementasi Web JS:** Louis Abraham (2025)

Sprite kucing berasal dari file resource Neko98 asli (`nkosrc4/Neko98/Res/`)
dan disertakan di sini di bawah ketentuan lisensi asli yang mengizinkan
penggunaan bebas dengan kredit.

Sumber kode original diunduh dari:
https://web.archive.org/web/20050330224958fw_/http://www.angelfire.com/ct/neko/download.html

Lihat `LICENSE.md` untuk ketentuan lengkap (GNU GPL v3).