// =====================================================
// ACCESS LOG SYSTEM — access-log.js
// Log IP dan metadata pengunjung ke Firebase RTDB
// =====================================================

const ACCESS_LOG_KEY = 'sppd_access_logged';
const ACCESS_LOG_FB = 'access_logs';

/**
 * Dapatkan IP publik user via ipapi.co
 */
async function getPublicIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('IP fetch failed');
        const data = await response.json();
        return {
            ip: data.ip || 'unknown',
            city: data.city || '',
            region: data.region || '',
            country: data.country_name || '',
            org: data.org || ''
        };
    } catch (error) {
        console.warn('Gagal mendapatkan IP:', error);
        // Fallback ke IP detection service lain
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return { ip: data.ip || 'unknown', city: '', region: '', country: '', org: '' };
        } catch (e) {
            return { ip: 'unknown', city: '', region: '', country: '', org: '' };
        }
    }
}

/**
 * Log akses pengunjung ke Firebase RTDB
 * Hanya log sekali per session (berdasarkan localStorage)
 * Fallback ke localStorage jika Firebase gagal
 */
async function logAccess() {
    // Cek apakah sudah log di session ini
    if (localStorage.getItem(ACCESS_LOG_KEY)) {
        return;
    }

    try {
        const ipData = await getPublicIP();
        const logEntry = {
            ip: ipData.ip,
            city: ipData.city,
            region: ipData.region,
            country: ipData.country,
            org: ipData.org,
            userAgent: navigator.userAgent,
            page: window.location.href,
            referrer: document.referrer || 'direct',
            timestamp: new Date().toISOString(),
            timestampLocal: new Date().toLocaleString('id-ID'),
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language
        };

        // Simpan ke Firebase RTDB
        if (typeof firebase !== 'undefined' && firebase.database) {
            try {
                const logsRef = firebase.database().ref(ACCESS_LOG_FB);
                const newLogRef = logsRef.push();
                await newLogRef.set(logEntry);
                console.log('Access logged to Firebase:', ipData.ip);
            } catch (fbError) {
                console.warn('Firebase write failed, using localStorage fallback:', fbError.message || fbError);
                // Fallback: simpan di localStorage
                saveLogToLocal(logEntry);
            }
        } else {
            // Firebase tidak tersedia, simpan di localStorage
            saveLogToLocal(logEntry);
        }
        
        // Tandai sudah log di session ini
        localStorage.setItem(ACCESS_LOG_KEY, '1');
    } catch (error) {
        console.warn('Gagal log access:', error);
    }
}

/**
 * Simpan log ke localStorage sebagai fallback
 */
function saveLogToLocal(logEntry) {
    try {
        const logs = JSON.parse(localStorage.getItem('sppd_access_logs_local') || '[]');
        logs.push(logEntry);
        // Batasi 100 logs terakhir
        if (logs.length > 100) logs.shift();
        localStorage.setItem('sppd_access_logs_local', JSON.stringify(logs));
        console.log('Access logged to localStorage:', logEntry.ip);
    } catch (e) {
        console.warn('Gagal simpan log ke localStorage:', e);
    }
}

/**
 * Reset log flag (untuk testing)
 */
function resetAccessLog() {
    localStorage.removeItem(ACCESS_LOG_KEY);
}

// Auto-log saat script dimuat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', logAccess);
} else {
    logAccess();
}
