// ===========================
// DATA MASTER - KECAMATAN
// ===========================
const kecamatanList = [
    { id: 'bajuin', nama: 'Bajuin', jumlahPegawai: 37 },
    { id: 'bati_bati', nama: 'Bati-Bati', jumlahPegawai: 50 },
    { id: 'batu_ampar', nama: 'Batu Ampar', jumlahPegawai: 33 },
    { id: 'bumi_makmur', nama: 'Bumi Makmur', jumlahPegawai: 44 },
    { id: 'jorong', nama: 'Jorong', jumlahPegawai: 25 },
    { id: 'kintap', nama: 'Kintap', jumlahPegawai: 51 },
    { id: 'kurau', nama: 'Kurau', jumlahPegawai: 28 },
    { id: 'panyipatan', nama: 'Panyipatan', jumlahPegawai: 20 },
    { id: 'pelaihari', nama: 'Pelaihari', jumlahPegawai: 80 },
    { id: 'takisung', nama: 'Takisung', jumlahPegawai: 63 },
    { id: 'tambang_ulang', nama: 'Tambang Ulang', jumlahPegawai: 31 }
];

// ===========================
// KONFIGURASI NOMOR SPPD PER KECAMATAN (APRIL 2026)
// ===========================
let noSpdConfig = {};

// Bulan & tahun untuk format nomor SPPD
const BULAN_ROMAWI = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const currentDate = new Date();
const BULAN_SPPD = BULAN_ROMAWI[currentDate.getMonth()]; // Otomatis bulan sekarang dalam angka Romawi
const TAHUN_SPPD = String(currentDate.getFullYear());

// ===========================
// DATA MASTER - PEGAWAI
// ===========================
let pegawaiData = {};

function toTitleCase(str) {
    if(str.toUpperCase() === 'BATI-BATI') return 'Bati-Bati';
    return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

async function loadPegawaiData() {
    try {
        const response = await fetch('kader_imp_sub_imp.json');
        if (!response.ok) throw new Error('Gagal mengakses data JSON');
        const jsonData = await response.json();
        
        const kaderIMPData = jsonData.kader_IMP || [];
        const subIMPData = jsonData.sub_IMP || [];
        
        pegawaiData = {};
        
        const processData = (list, jabatanPrefix) => {
            list.forEach(k => {
                let kecNameRaw = k.kecamatan;
                let kecNameTitle = toTitleCase(kecNameRaw);
                let kecId = kecNameRaw.toUpperCase() === 'BATI-BATI' ? 'bati_bati' : kecNameRaw.toLowerCase().replace(/\s+/g, '_');
                
                if (!pegawaiData[kecId]) pegawaiData[kecId] = [];
                
                k.kader.forEach(kd => {
                    if (!kd || !kd.nama_kader) return;
                    pegawaiData[kecId].push({
                        no_spd: "..../DP3AP2KB/..../2026",
                        nama: kd.nama_kader,
                        desa_kelurahan: kd.desa_kelurahan || "-",
                        nip: "",
                        jabatan: `${jabatanPrefix} Kecamatan ${kecNameTitle}`,
                        tempat_tujuan: `Kecamatan ${kecNameTitle}`,
                        maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
                    });
                });
            });
        };
        
        processData(kaderIMPData, "Kader IMP");
        processData(subIMPData, "Sub IMP");
        
        // Buat config dinamis untuk no_spd secara berurutan dan update jumlah
        let currentStart = 1;
        kecamatanList.forEach(kec => {
            const count = pegawaiData[kec.id] ? pegawaiData[kec.id].length : 0;
            kec.jumlahPegawai = count; // update global list
            noSpdConfig[kec.id] = { start: currentStart, end: currentStart + count - 1 };
            currentStart += count;
        });

    } catch (e) {
        console.error("Gagal memuat data pegawai:", e);
    }
}

// ===========================
// VARIABEL GLOBAL
// ===========================
let selectedKecamatan = null;

// ===========================
// FUNGSI RENDER KECAMATAN
// ===========================
function renderKecamatan() {
    const grid = document.getElementById('kecamatan-grid');
    grid.innerHTML = '';

    kecamatanList.forEach(kec => {
        const card = document.createElement('div');
        card.className = 'kecamatan-card';
        card.innerHTML = `
            <h3>${kec.nama}</h3>
            <p>${kec.jumlahPegawai} pegawai terdaftar</p>
        `;
        card.onclick = () => showPegawaiPage(kec.id, kec.nama);
        grid.appendChild(card);
    });
}

// ===========================
// FUNGSI TAMPILKAN HALAMAN PEGAWAI
// ===========================
function showPegawaiPage(kecId, kecNama) {
    selectedKecamatan = kecId;
    document.getElementById('selected-kecamatan').textContent = `Kecamatan ${kecNama}`;
    document.getElementById('kecamatan-page').style.display = 'none';
    document.getElementById('pegawai-page').style.display = 'block';

    // Reset search
    const searchInput = document.getElementById('search-pegawai');
    if (searchInput) {
        searchInput.value = '';
    }
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) {
        clearBtn.style.display = 'none';
    }
    const resultCount = document.getElementById('search-result-count');
    if (resultCount) {
        resultCount.textContent = '';
        resultCount.classList.remove('no-result');
    }

    renderPegawaiList(kecId);
}

// ===========================
// FUNGSI RENDER DAFTAR PEGAWAI
// ===========================
function renderPegawaiList(kecId, searchQuery) {
    const container = document.getElementById('pegawai-list-container');
    const pegawaiList = pegawaiData[kecId] || [];
    const resultCountEl = document.getElementById('search-result-count');

    container.innerHTML = '';

    const query = (searchQuery || '').trim().toLowerCase();
    const filtered = query
        ? pegawaiList.filter(p => p.nama.toLowerCase().includes(query))
        : pegawaiList;

    // Update result count
    if (resultCountEl) {
        if (query) {
            resultCountEl.textContent = `Ditemukan ${filtered.length} dari ${pegawaiList.length} pegawai`;
            if (filtered.length === 0) {
                resultCountEl.classList.add('no-result');
            } else {
                resultCountEl.classList.remove('no-result');
            }
        } else {
            resultCountEl.textContent = '';
            resultCountEl.classList.remove('no-result');
        }
    }

    if (filtered.length === 0 && query) {
        container.innerHTML = `
            <div class="pegawai-no-result">
                <div class="no-result-icon">😕</div>
                <p>Tidak ditemukan pegawai dengan nama "<strong>${escapeHtml(searchQuery)}</strong>"</p>
            </div>
        `;
        return;
    }

    filtered.forEach(pegawai => {
        const item = document.createElement('div');
        item.className = 'pegawai-item' + (query ? ' highlight' : '');

        const displayNama = query ? highlightText(pegawai.nama, searchQuery) : escapeHtml(pegawai.nama);

        item.innerHTML = `
            <h4>${displayNama}</h4>
            <p>No SPPD: <strong>${escapeHtml(pegawai.no_spd)}</strong></p>
            <p>NIP: ${escapeHtml(pegawai.nip)}</p>
            <p>Jabatan: ${escapeHtml(pegawai.jabatan)}</p>
            <p>Kelurahan/Desa: ${escapeHtml(pegawai.desa_kelurahan)}</p>
            <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;">
                <span style="color: #667eea; font-weight: bold; cursor:pointer;" class="btn-cetak-spd">📋 Cetak SPPD</span>
                <span style="color: #00b894; font-weight: bold; cursor:pointer;" class="btn-cetak-kie">📄 Cetak KIE</span>
            </div>
        `;

        // Tombol cetak SPPD
        item.querySelector('.btn-cetak-spd').addEventListener('click', (e) => {
            e.stopPropagation();
            showCetakPage(pegawai);
        });

        // Tombol cetak KIE langsung dari daftar
        item.querySelector('.btn-cetak-kie').addEventListener('click', (e) => {
            e.stopPropagation();
            localStorage.setItem('cetak_kie_data', JSON.stringify(pegawai));
            window.open('cetak_kie.html', '_blank');
        });

        // Klik area item = cetak SPPD
        item.onclick = () => showCetakPage(pegawai);

        container.appendChild(item);
    });
}

// ===========================
// FUNGSI PENCARIAN PEGAWAI
// ===========================
function filterPegawai(query) {
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) {
        clearBtn.style.display = query.trim() ? 'flex' : 'none';
    }
    renderPegawaiList(selectedKecamatan, query);
}

function clearSearch() {
    const searchInput = document.getElementById('search-pegawai');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) {
        clearBtn.style.display = 'none';
    }
    renderPegawaiList(selectedKecamatan);
}

// ===========================
// FUNGSI UTILITAS
// ===========================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
}

function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
}

// ===========================
// FUNGSI TAMPILKAN HALAMAN CETAK
// ===========================
// Variabel untuk menyimpan data pegawai yang sedang ditampilkan
let currentPegawai = null;
let currentLamaHari = 1; // Variabel global untuk lama perjalanan

// ===========================
// HELPER: Cek apakah hari kerja (Senin-Jumat)
// ===========================
function isHariKerja(date) {
    const day = date.getDay(); // 0=Minggu, 6=Sabtu
    return day !== 0 && day !== 6;
}

// ===========================
// HELPER: Tambah N hari kerja dari tanggal mulai
// Mengembalikan tanggal akhir (hari kerja ke-N)
// ===========================
function addHariKerja(startDate, jumlahHariKerja) {
    const result = new Date(startDate);
    let hariTerhitung = 1; // hari pertama = tanggal berangkat
    while (hariTerhitung < jumlahHariKerja) {
        result.setDate(result.getDate() + 1);
        if (isHariKerja(result)) {
            hariTerhitung++;
        }
    }
    return result;
}

// ===========================
// HELPER: Hitung jumlah hari kerja antara 2 tanggal (inklusif)
// ===========================
function hitungHariKerja(startDate, endDate) {
    let count = 0;
    const current = new Date(startDate);
    while (current <= endDate) {
        if (isHariKerja(current)) {
            count++;
        }
        current.setDate(current.getDate() + 1);
    }
    return count;
}

// ===========================
// HELPER: Format tanggal ke YYYY-MM-DD
// ===========================
function toInputDateStr(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

// ===========================
// HELPER: Konversi angka ke teks lama perjalanan
// ===========================
function lamaPerjalananText(hari) {
    const angkaTeks = {
        1: 'satu', 2: 'dua', 3: 'tiga', 4: 'empat', 5: 'lima',
        6: 'enam', 7: 'tujuh', 8: 'delapan', 9: 'sembilan', 10: 'sepuluh'
    };
    return `${hari} (${angkaTeks[hari] || hari}) Hari`;
}

function showCetakPage(pegawai) {
    // Simpan pegawai yang sedang ditampilkan
    currentPegawai = pegawai;

    // Isi semua data menggunakan fungsi bersama (prefix 'v')
    const { lamaHari, tglBerangkat, tglKembali } = isiDataCetak(pegawai, 'v');

    // Simpan lama hari saat ini (untuk updateTanggalKembali)
    currentLamaHari = lamaHari;

    // Set nilai input tanggal (hanya ada di halaman SPD)
    const inputTglBrkt = document.getElementById('v-input-tgl-brkt');
    const inputTglKmbli = document.getElementById('v-input-tgl-kmbli');
    if (inputTglBrkt) inputTglBrkt.value = toInputDateStr(tglBerangkat);
    if (inputTglKmbli) inputTglKmbli.value = toInputDateStr(tglKembali);

    // Tampilkan halaman cetak
    document.getElementById('cetak-page').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ===========================
// FUNGSI UPDATE TANGGAL KEMBALI (saat user ubah tanggal berangkat)
// Otomatis hitung tanggal kembali berdasarkan hari kerja
// ===========================
function updateTanggalKembali() {
    const inputTglBrkt = document.getElementById('v-input-tgl-brkt');
    const inputTglKmbli = document.getElementById('v-input-tgl-kmbli');
    if (!inputTglBrkt.value) return;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Tanggal berangkat dari input kalender
    let tglBerangkat = new Date(inputTglBrkt.value + 'T00:00:00');

    // Jika user pilih hari weekend, geser ke Senin
    if (!isHariKerja(tglBerangkat)) {
        while (!isHariKerja(tglBerangkat)) {
            tglBerangkat.setDate(tglBerangkat.getDate() + 1);
        }
        inputTglBrkt.value = toInputDateStr(tglBerangkat);
    }

    const tglBerangkatStr = tglBerangkat.toLocaleDateString('id-ID', options);

    // Hitung tanggal kembali (skip weekend)
    const tglKembali = addHariKerja(tglBerangkat, currentLamaHari);
    const tglKembaliStr = tglKembali.toLocaleDateString('id-ID', options);

    // Update input dan tampilan
    inputTglKmbli.value = toInputDateStr(tglKembali);
    document.getElementById('v-tgl-brkt').textContent = tglBerangkatStr;
    document.getElementById('v-tgl-kmbli').textContent = tglKembaliStr;
    document.getElementById('v-lama-perjalanan').textContent = lamaPerjalananText(currentLamaHari);

    // Update tanggal cetak
    document.getElementById('v-tgl-cetak').textContent = tglBerangkatStr;
}

// ===========================
// FUNGSI UPDATE TANGGAL MANUAL (saat user ubah tanggal kembali)
// Hitung ulang lama perjalanan berdasarkan hari kerja
// ===========================
function updateTanggalManual() {
    const inputTglBrkt = document.getElementById('v-input-tgl-brkt');
    const inputTglKmbli = document.getElementById('v-input-tgl-kmbli');
    if (!inputTglBrkt.value || !inputTglKmbli.value) return;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    let tglBerangkat = new Date(inputTglBrkt.value + 'T00:00:00');
    let tglKembali = new Date(inputTglKmbli.value + 'T00:00:00');

    // Jika tanggal kembali weekend, geser ke Jumat sebelumnya
    if (!isHariKerja(tglKembali)) {
        while (!isHariKerja(tglKembali)) {
            tglKembali.setDate(tglKembali.getDate() - 1);
        }
        inputTglKmbli.value = toInputDateStr(tglKembali);
    }

    // Pastikan tanggal kembali tidak sebelum tanggal berangkat
    if (tglKembali < tglBerangkat) {
        tglKembali = new Date(tglBerangkat);
        inputTglKmbli.value = toInputDateStr(tglKembali);
    }

    // Hitung lama perjalanan dalam hari kerja
    currentLamaHari = hitungHariKerja(tglBerangkat, tglKembali);

    const tglKembaliStr = tglKembali.toLocaleDateString('id-ID', options);

    // Update tampilan
    document.getElementById('v-tgl-kmbli').textContent = tglKembaliStr;
    document.getElementById('v-lama-perjalanan').textContent = lamaPerjalananText(currentLamaHari);
}

// ===========================
// FUNGSI UPDATE TANGGAL KIE (saat user ubah tanggal berangkat)
// ===========================
function updateTglKembaliKIE() {
    const inputBrkt = document.getElementById('kie-input-tgl-brkt');
    const inputKmbli = document.getElementById('kie-input-tgl-kmbli');
    if (!inputBrkt.value) return;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    let tglBerangkat = new Date(inputBrkt.value + 'T00:00:00');

    // Jika weekend, geser ke Senin
    if (!isHariKerja(tglBerangkat)) {
        while (!isHariKerja(tglBerangkat)) {
            tglBerangkat.setDate(tglBerangkat.getDate() + 1);
        }
        inputBrkt.value = toInputDateStr(tglBerangkat);
    }

    // Hitung lama hari dari selisih input kembali (jika sudah diisi) atau dari jabatan
    let lamaHari = currentLamaHari || 1;
    const tglKembali = addHariKerja(tglBerangkat, lamaHari);

    inputKmbli.value = toInputDateStr(tglKembali);
    document.getElementById('kie-tgl-brkt').textContent = tglBerangkat.toLocaleDateString('id-ID', options);
    document.getElementById('kie-tgl-kmbli').textContent = tglKembali.toLocaleDateString('id-ID', options);
    document.getElementById('kie-lama-perjalanan').textContent = lamaPerjalananText(lamaHari);
}

// ===========================
// FUNGSI UPDATE TANGGAL MANUAL KIE (saat user ubah tanggal kembali)
// ===========================
function updateTglManualKIE() {
    const inputBrkt = document.getElementById('kie-input-tgl-brkt');
    const inputKmbli = document.getElementById('kie-input-tgl-kmbli');
    if (!inputBrkt.value || !inputKmbli.value) return;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    let tglBerangkat = new Date(inputBrkt.value + 'T00:00:00');
    let tglKembali = new Date(inputKmbli.value + 'T00:00:00');

    // Jika tgl kembali weekend, geser ke Jumat sebelumnya
    if (!isHariKerja(tglKembali)) {
        while (!isHariKerja(tglKembali)) {
            tglKembali.setDate(tglKembali.getDate() - 1);
        }
        inputKmbli.value = toInputDateStr(tglKembali);
    }

    // Pastikan tidak sebelum tanggal berangkat
    if (tglKembali < tglBerangkat) {
        tglKembali = new Date(tglBerangkat);
        inputKmbli.value = toInputDateStr(tglKembali);
    }

    const lamaHari = hitungHariKerja(tglBerangkat, tglKembali);
    currentLamaHari = lamaHari;

    // Update span teks tanggal berangkat dan kembali
    document.getElementById('kie-tgl-brkt').textContent = tglBerangkat.toLocaleDateString('id-ID', options);
    document.getElementById('kie-tgl-kmbli').textContent = tglKembali.toLocaleDateString('id-ID', options);
    document.getElementById('kie-lama-perjalanan').textContent = lamaPerjalananText(lamaHari);
}

// ===========================
// FUNGSI CETAK SPD KIE
// ===========================
function cetakKIE() {
    if (!currentPegawai) {
        alert('Data pegawai tidak ditemukan!');
        return;
    }

    // Simpan data pegawai ke localStorage untuk halaman cetak_kie.html
    localStorage.setItem('cetak_kie_data', JSON.stringify(currentPegawai));

    // Buka halaman cetak KIE di tab baru
    window.open('cetak_kie.html', '_blank');
}

// ===========================
// FUNGSI TUTUP HALAMAN CETAK
// ===========================
function closeCetak() {
    document.getElementById('cetak-page').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===========================
// FUNGSI KEMBALI KE HALAMAN KECAMATAN
// ===========================
function backToKecamatan() {
    document.getElementById('pegawai-page').style.display = 'none';
    document.getElementById('kecamatan-page').style.display = 'block';
}

// ===========================
// FUNGSI GENERATE NOMOR SPPD OTOMATIS
// ===========================
function generateNoSpdForAllPegawai() {
    for (const kecId in pegawaiData) {
        const config = noSpdConfig[kecId];
        if (!config) continue;

        const pegawaiList = pegawaiData[kecId];
        pegawaiList.forEach((pegawai, index) => {
            const nomorUrut = config.start + index;
            const nomorFormatted = String(nomorUrut).padStart(2, '0');
            pegawai.no_spd = `${nomorFormatted}/DP3AP2KB/${BULAN_SPPD}/${TAHUN_SPPD}`;
        });
    }
}

// ===========================
// HELPER: Hitung lama hari berdasarkan jabatan
// ===========================
function hitungLamaHariDariJabatan(jabatan) {
    const jabatanLower = (jabatan || '').toLowerCase();
    if (jabatanLower.includes('kader imp')) return 4;
    if (jabatanLower.includes('sub imp')) return 3;
    return 1; // default
}

// ===========================
// HELPER BERSAMA: Isi data pegawai ke elemen halaman cetak
// prefix: 'v' untuk SPD (index.html), 'kie' untuk KIE (cetak_kie.html)
// ===========================
function isiDataCetak(pegawai, prefix) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const tanggalCetak = today.toLocaleDateString('id-ID', options);

    // Hitung lama hari dari jabatan (berlaku untuk SPD & KIE)
    const lamaHari = hitungLamaHariDariJabatan(pegawai.jabatan);
    const lamaText = lamaPerjalananText(lamaHari);

    // Pastikan tanggal berangkat jatuh di hari kerja
    let tglBerangkat = new Date(today);
    while (!isHariKerja(tglBerangkat)) {
        tglBerangkat.setDate(tglBerangkat.getDate() + 1);
    }

    // Hitung tanggal kembali (skip Sabtu-Minggu)
    const tglKembali = addHariKerja(tglBerangkat, lamaHari);

    const tglBerangkatStr = tglBerangkat.toLocaleDateString('id-ID', options);
    const tglKembaliStr = tglKembali.toLocaleDateString('id-ID', options);

    // Isi elemen berdasarkan prefix
    const setEl = (id, val) => {
        const el = document.getElementById(`${prefix}-${id}`);
        if (el) el.textContent = val || '-';
    };

    setEl('nomor', pegawai.no_spd);
    setEl('nama', pegawai.nama);
    setEl('nip', pegawai.nip);
    setEl('jabatan', pegawai.jabatan);
    setEl('tujuan', pegawai.tempat_tujuan);
    setEl('lama-perjalanan', lamaText);
    setEl('tgl-brkt', tglBerangkatStr);
    setEl('tgl-kmbli', tglKembaliStr);
    setEl('tgl-cetak', tanggalCetak);

    // Maksud: bisa dari field 'maksud' (SPD) atau 'maksud_kie' (KIE) atau fallback ke 'maksud'
    const maksud = pegawai.maksud_kie || pegawai.maksud || '';
    setEl('maksud', maksud);

    // Set nilai input tanggal jika ada (SPD: v-input-*, KIE: kie-input-*)
    const inputBrkt = document.getElementById(`${prefix}-input-tgl-brkt`);
    const inputKmbli = document.getElementById(`${prefix}-input-tgl-kmbli`);
    if (inputBrkt) inputBrkt.value = toInputDateStr(tglBerangkat);
    if (inputKmbli) inputKmbli.value = toInputDateStr(tglKembali);

    return { lamaHari, tglBerangkat, tglKembali };
}

// ===========================
// INIT CETAK KIE (cetak_kie.html)
// ===========================
function initCetakKie() {
    const pegawaiDataStr = localStorage.getItem('cetak_kie_data');

    if (pegawaiDataStr) {
        const pegawai = JSON.parse(pegawaiDataStr);
        // Simpan lamaHari ke currentLamaHari agar fungsi update tanggal
        // bisa menggunakan aturan Kader=4, Sub=3 dengan benar
        const { lamaHari } = isiDataCetak(pegawai, 'kie');
        currentLamaHari = lamaHari;
    } else {
        document.body.innerHTML = '<div style="text-align:center;margin-top:100px;font-family:sans-serif;color:white;">' +
            '<h2>⚠️ Data tidak ditemukan</h2>' +
            '<p>Silakan buka halaman cetak KIE melalui tombol di halaman utama.</p>' +
            '<a href="index.html" style="color:#00b894;font-size:14pt;">← Kembali ke Halaman Utama</a></div>';
    }
}

// ===========================
// INISIALISASI APLIKASI
// ===========================
document.addEventListener('DOMContentLoaded', async function() {
    // Deteksi halaman aktif
    if (document.getElementById('kie-nama')) {
        // Halaman cetak_kie.html
        initCetakKie();
    } else {
        // Halaman index.html
        await loadPegawaiData();
        generateNoSpdForAllPegawai();
        renderKecamatan();
    }
});