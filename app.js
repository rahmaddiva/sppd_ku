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
const noSpdConfig = {
    bajuin:        { start: 1,   end: 37  },
    bati_bati:     { start: 38,  end: 88  },
    batu_ampar:    { start: 89,  end: 122 },
    bumi_makmur:   { start: 123, end: 167 },
    jorong:        { start: 168, end: 193 },
    kintap:        { start: 194, end: 245 },
    kurau:        { start: 246, end: 274 },
    panyipatan:    { start: 275, end: 295 },
    pelaihari:     { start: 296, end: 376 },
    takisung:      { start: 377, end: 440 },
    tambang_ulang: { start: 441, end: 471 }
};

// Bulan & tahun untuk format nomor SPPD
const BULAN_ROMAWI = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const currentDate = new Date();
const BULAN_SPPD = BULAN_ROMAWI[currentDate.getMonth()]; // Otomatis bulan sekarang dalam angka Romawi
const TAHUN_SPPD = String(currentDate.getFullYear());

// ===========================
// DATA MASTER - PEGAWAI
// ===========================
const pegawaiData = {
    bajuin: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Isnawiyah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Halimatus Sa'diah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sutikah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rima Anggraini",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Murdaningsih",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Puti Endah Wahyu Ningtyas",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Susi Susanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Aryanie Susilowati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Aminah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Herlinawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Fitriani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mursi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Jaleha",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Maria Ulfah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurul Huda",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rina Qurotul Aini",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Mulyanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Khadijah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Sumarida",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Junita Sari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Halisah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arbainah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jahratun Nupus",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yunita",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hartati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dewi Cris Natalia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Norpi Suharti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jamilah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dewi Mekarsari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ardhani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Fatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Salmiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Wahyuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Desi Ratnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Susanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sukrisnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Eka Anggraini",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bajuin",
            tempat_tujuan: "Kecamatan Bajuin",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    bati_bati: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bustaniah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lailatul Marhumah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bastiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sawiyah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mahrizah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dahlia",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Zubaidah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Enyk Sulistiyaningsih",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Muhammad Arbani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Aminah Sari",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Umi Hani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Norhasanah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bibit Wahyuningsih",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusmiati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Tarjibah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Saidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahayu Hanjarwani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Muji Astuti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Syamsiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Purnamasari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Elik Yufriah AS",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jannatul Ma\'Wa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dewi Kuraisin",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Saridah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Norjannah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rawiyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Muryani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hamimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arbayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mala",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahmawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Aisah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Khatimatul Husna",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Fatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mar\'Atus Sholihah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mahmudah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurmalisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noormila Santi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariyani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurul Qamariaturraja Biah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Pauriah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Amin Eka Wulandari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Widayati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Masmawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yuliana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sunarti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ratna Hidayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Erna Purwanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bati-Bati",
            tempat_tujuan: "Kecamatan Bati-Bati",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    batu_ampar: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misgiwanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Tri Hidayati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Lestari",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rizka Asmariyanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Puryati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Madi",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mutlikah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Tentrem",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Zubaidah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Khairul Alpisah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sugimah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lilik Hariyanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Nasihatul Kulaidah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sulistioningdiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Irlisna",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ngatinah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ika Puspita Sari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Leni Marliana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumirah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noor Hidayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Fatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yenni Anggraini",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Jubaidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurhalisah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noorisah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Raudhah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hamidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Zunaida",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arbainah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mujenah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Tutik Wahyu Ningsih",
            nip: "",
            jabatan: "Sub IMP Kecamatan Batu Ampar",
            tempat_tujuan: "Kecamatan Batu Ampar",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    bumi_makmur: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sarah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Maimunah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Khalifatunnisa",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Harmila Yanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Anisa",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jubaidah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hairiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ani Yulianti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Masniah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Bulkis",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusmini",
            nip: "",
            jabatan: "Kader IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Azizah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mira Iriyanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Aulia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rosita",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Marpuah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariatul",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurhayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Anita",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nor Latifah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Megawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Humairah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misbah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hamidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misrah Wati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arbainah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mustika",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kartinah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arbayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Syahidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahmida",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misbah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Martini",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jumatiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mahrina",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kamelia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Auliani Nurjannah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurhayatunnisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Raihanah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Agustinawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nasobah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nor Laila",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noor Laila",
            nip: "",
            jabatan: "Sub IMP Kecamatan Bumi Makmur",
            tempat_tujuan: "Kecamatan Bumi Makmur",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    jorong: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Taslimah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusmiati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Marniah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Maryani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurul Hikmah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Anna Iswatul B / Siti Sumandari",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Poniah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mirnawati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Masitah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Salamah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Raudatun Nisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Hafsah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kholilah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rohani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahmi Wahyuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hasnawiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahmah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hj. Aisyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rumaisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Patimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ramlah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suriana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusdiana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rosnah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Jorong",
            tempat_tujuan: "Kecamatan Jorong",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    kintap: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Atim Firanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Miskiyah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Inun",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hariyani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suparni",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jumarni",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nyami",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusmah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nunuk Suprihatin",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusdiana",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nur Mahfudho",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sujiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hasnah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiyati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hartati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Wahyuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusdiana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mujiyati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sukmawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Saptawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hj. Mardiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suyatmi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Wahyuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rosida",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misriani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lasmiyati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahmawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Fatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Lestari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusdiyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noor Afifah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siswati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumarni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Wardah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Hawa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noorhayati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mery Herawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Masliani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dina Supiana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Miskiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Anisa Oktaviani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Muliana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mukinem",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Eka Dewi Susilawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Annisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Haswatun Hasanah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Fenty Fajar Riyanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mursidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Gusliyanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurjannah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ahmad Hanfi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kintap",
            tempat_tujuan: "Kecamatan Kintap",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    kurau: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Risa Karina",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Megawati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ratna Sari",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misfuati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Herlina",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hatnah Fitrianita",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nor Pahida",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hairiyah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Patimah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yuli Nurmaya",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jumaidi",
            nip: "",
            jabatan: "Kader IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misna Rizqiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Padeli",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lisnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dewi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Marliani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Budianto",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nuril Hikmah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusita",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Fatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Naniarti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lisdawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sunarti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Norbayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Juhairiyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Aulia Rahmi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Fatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Merliani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Kurau",
            tempat_tujuan: "Kecamatan Kurau",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    panyipatan: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Isnani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Halijah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Maulidah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sujiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ropiatun",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yanah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusdiana",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hadijah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nuri Susanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Wisri Lestari",
            nip: "",
            jabatan: "Kader IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rohana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noorhanifah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Maimunah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sari Wahyuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yulianti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dewi Asmiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Wahyuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noorhayati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Erna Wati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nita Restiani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Panyipatan",
            tempat_tujuan: "Kecamatan Panyipatan",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    pelaihari: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bahratul Asiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Erna Megawati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hj. Mainawati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misliyani Febriyanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nopalia Betri",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Asyipah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Pahriah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arbayah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Nurlailiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jumiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Risnani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dahrina",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ngatini",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Zuhnah Amini",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Endang Susanti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sampurni",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Sairuroh",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suwaniti",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jumiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rabbinawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Henny Herawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Saniah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noor Sehan",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noormasitah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Pirdha Yanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Roro Siti Thofifah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Eni Julaela",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Shalleha",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Juartini",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ariani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ani Wijayanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Titi Welyati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dwi Ratna Wulan Ndari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Henny",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Eva Ismayanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariatul Hidayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rubainah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nina Rizky",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Martina",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Prapti Wupawi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Risda Ariani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sartika",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Binajiyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Purwanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ana Maria",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Khairida",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bulkiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yuliana Sartika",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Surati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurul Hikmah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Jaimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kiki Maria",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Patimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Marinah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sunariah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Farida Fadzilatul",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ulum",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Andri Irawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Sumarni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Hajar",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Murni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Titik Sudarsih",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dwi Sulistyo Rini",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Neneng Sutinah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Fitriani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Susanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusniah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kamsiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Waqidatut Toyibah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mada Musiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Aisyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nor Nafisah Fitria",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Marlinawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suprehatin",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Muji Handayani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hani / Nurlaila",
            nip: "",
            jabatan: "Sub IMP Kecamatan Pelaihari",
            tempat_tujuan: "Kecamatan Pelaihari",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    takisung: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Noorkamilah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Patmiani",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Muntamah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rusmini",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rumini",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariyati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Sundari",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Isna",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Saripah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Naili Rahmy",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ramdiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Irma",
            nip: "",
            jabatan: "Kader IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Maria Santi",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Resni Rifkahana A",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yatimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurhalimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Wontiyem",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Rahmah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Eka Maulinda",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Safrina",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bahrulina",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Alfia Hikmah, S.Pd.I",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Melda",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Dewi Sepprisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Riska Handayani, Se",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Verda Ulfia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Asmiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Surati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lia Indriyani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariyani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Linda",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ira Susanti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Lilis Mariyati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yulianti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Nur Halimah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yani Marliana",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Wahyu Ningsih",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Indri Mailawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mujiati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Tika Ayuningtias",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kholifatur Rodiyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mariah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Maria Ulfah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Istiqomah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Meina Azmalia Putri",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nor Latipah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Faridha",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hanah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Asmi Yuni Yati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Herniati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hairunnisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ramdiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nur Hasanah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Bustaniah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Norfah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Aminah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mursidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Hairunisa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rahmawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Kasnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Winda Amelia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nurhidayah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Takisung",
            tempat_tujuan: "Kecamatan Takisung",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ],
    tambang_ulang: [
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suprihatiningsih",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sri Sulastri",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mardiah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ririn Cahyaningtyas",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Patmawati",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Sumaidah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Elita Mulya Ningrum",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Misbah",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rosita",
            nip: "",
            jabatan: "Kader IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mirnawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Asma Septi Mursidah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Syalina",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mirahayu",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Arlina Liani",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mahkamah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nor Rizkiah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Tutut Pujianti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Ikewati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Mega Selvia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Devi Lestiawati Natalia",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rosyidatul Khoiriyah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Nanik Rahmawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Haninah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Yustina Arniti",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Rakantesa",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Norlaila",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Susi Ayuni",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Herlinawati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Riska Normalasari",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Siti Shalehah",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        },
        {
            no_spd: "..../DP3AP2KB/..../2026",
            nama: "Suharyati",
            nip: "",
            jabatan: "Sub IMP Kecamatan Tambang Ulang",
            tempat_tujuan: "Kecamatan Tambang Ulang",
            maksud: "Melaksanakan tugas masing-masing seperti terlampir di surat tugas"
        }
    ]
};

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
// INISIALISASI APLIKASI
// ===========================
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

document.addEventListener('DOMContentLoaded', function() {
    generateNoSpdForAllPegawai();

    // Deteksi halaman aktif
    if (document.getElementById('kie-nama')) {
        // Halaman cetak_kie.html
        initCetakKie();
    } else {
        // Halaman index.html
        renderKecamatan();
    }
});