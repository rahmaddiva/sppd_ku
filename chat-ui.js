// =====================================================
// CHAT SYSTEM — chat-ui.js (Firebase Realtime Database)
// =====================================================

// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "AIzaSyD50LFHzj5Aa6TvqPx9dUHEeq5ccj9W9dc",
    authDomain: "sppd-7eb82.firebaseapp.com",
    // Karena kita tidak tahu persis region database-nya, kita gunakan URL Asia Tenggara sebagai default.
    // Jika tidak bisa terhubung, coba ganti menjadi: "https://sppd-7eb82-default-rtdb.firebaseio.com"
    databaseURL: "https://sppd-7eb82-default-rtdb.firebaseio.com",
    projectId: "sppd-7eb82",
    storageBucket: "sppd-7eb82.firebasestorage.app",
    messagingSenderId: "366864193202",
    appId: "1:366864193202:web:8043092238fe24b9879bab",
    measurementId: "G-JKWE2B46V5"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const messagesRef = db.ref('messages');

const CHAT_COLORS = ['#2563eb','#7c3aed','#db2777','#ea580c','#16a34a','#0891b2','#854d0e','#64748b'];

var chatNickname    = '';
var chatColor       = CHAT_COLORS[0];
var chatPanelOpen   = false;
var chatUnreadCount = 0;
var isChatLoaded    = false; // Mencegah listener ganda
var lastDateDivider = '';

// ===========================
// INIT
// ===========================
function initChatSystem() {
    chatNickname = localStorage.getItem('chat_nickname') || '';
    chatColor    = localStorage.getItem('chat_color')    || CHAT_COLORS[0];

    var mc = document.getElementById('modal-colors');
    if (mc) {
        mc.innerHTML = CHAT_COLORS.map(function(c) {
            var sel = (c === chatColor) ? ' selected' : '';
            return '<div class="modal-color-swatch' + sel + '" style="background:' + c + '" onclick="selectChatColor(\'' + c + '\')" title="' + c + '"></div>';
        }).join('');
    }

    // Enter key on nickname input
    var nickInput = document.getElementById('nickname-input');
    if (nickInput) {
        nickInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') saveNickname();
        });
    }

    updateNickDisplay();

    // Pantau status koneksi (Indikator Online)
    var connectedRef = firebase.database().ref('.info/connected');
    connectedRef.on('value', function(snap) {
        var onlineDot = document.querySelector('.online-dot');
        var onlineTxt = document.getElementById('online-text');
        var statusEl  = document.getElementById('chat-status-text');

        if (snap.val() === true) {
            if (onlineDot) onlineDot.classList.remove('offline');
            if (onlineTxt) onlineTxt.textContent = 'Online';
            if (statusEl)  statusEl.textContent = 'Terhubung (Real-time)';
        } else {
            if (onlineDot) onlineDot.classList.add('offline');
            if (onlineTxt) onlineTxt.textContent = 'Offline';
            if (statusEl)  statusEl.textContent = 'Menghubungkan...';
        }
    });
}

// ===========================
// NICKNAME
// ===========================
function updateNickDisplay() {
    var el = document.getElementById('chat-nick-display');
    if (!el) return;
    if (chatNickname) {
        el.innerHTML = 'Anda bergabung sebagai <strong style="color:' + chatColor + '">' + _esc(chatNickname) + '</strong>';
    } else {
        el.textContent = 'Belum ada nama — klik ikon pengguna untuk mengatur.';
    }
}

function selectChatColor(color) {
    chatColor = color;
    document.querySelectorAll('.modal-color-swatch').forEach(function(el) {
        el.classList.toggle('selected', el.style.backgroundColor === color || el.style.background === color);
    });
}

function saveNickname() {
    var input = document.getElementById('nickname-input');
    var val   = (input ? input.value : '').trim();
    if (!val) { if (input) input.focus(); return; }
    chatNickname = val.substring(0, 30);
    localStorage.setItem('chat_nickname', chatNickname);
    localStorage.setItem('chat_color',    chatColor);
    closeNicknameModal();
    updateNickDisplay();
    var ta = document.getElementById('chat-input');
    if (ta && chatPanelOpen) ta.focus();
}

function openChangeNickname() {
    var input = document.getElementById('nickname-input');
    if (input) input.value = chatNickname;
    document.querySelectorAll('.modal-color-swatch').forEach(function(el) {
        el.classList.toggle('selected', el.style.backgroundColor === chatColor || el.style.background === chatColor);
    });
    var overlay = document.getElementById('modal-nickname');
    if (overlay) {
        overlay.style.display = 'flex';
        if (input) setTimeout(function(){ input.focus(); }, 80);
    }
}

function closeNicknameModal() {
    var overlay = document.getElementById('modal-nickname');
    if (overlay) overlay.style.display = 'none';
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('modal-nickname');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closeNicknameModal();
        });
    }
});

// ===========================
// PANEL OPEN / CLOSE
// ===========================
function openChatPanel(e) {
    if (e) e.preventDefault();

    var mobileMenu = document.getElementById('navbar-mobile-menu');
    var hamburger  = document.getElementById('navbar-hamburger');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (hamburger)  hamburger.classList.remove('open');

    var panel   = document.getElementById('chat-panel');
    var overlay = document.getElementById('chat-overlay');
    if (!panel) return;

    panel.classList.add('open');
    if (overlay) overlay.style.display = 'block';
    chatPanelOpen = true;

    chatUnreadCount = 0;
    updateUnreadBadge();

    document.querySelectorAll('.nav-link').forEach(function(l){ l.classList.remove('active'); });
    var chatNav = document.getElementById('nav-chat');
    if (chatNav) chatNav.classList.add('active');

    if (!chatNickname) openChangeNickname();

    startFirebaseListener();
    
    var ta = document.getElementById('chat-input');
    if (ta) ta.focus();
}

function closeChatPanel() {
    var panel   = document.getElementById('chat-panel');
    var overlay = document.getElementById('chat-overlay');
    if (panel)   panel.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
    chatPanelOpen = false;
    document.querySelectorAll('.nav-link').forEach(function(l){ l.classList.remove('active'); });
    var berandaNav = document.getElementById('nav-beranda');
    if (berandaNav) berandaNav.classList.add('active');
    closeNicknameModal();
}

function navGoHome(e) {
    if (e) e.preventDefault();
    closeChatPanel();
    var mobileMenu = document.getElementById('navbar-mobile-menu');
    var hamburger  = document.getElementById('navbar-hamburger');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (hamburger)  hamburger.classList.remove('open');
}

function toggleMobileMenu() {
    var menu = document.getElementById('navbar-mobile-menu');
    var btn  = document.getElementById('navbar-hamburger');
    if (!menu) return;
    var isOpen = menu.classList.toggle('open');
    if (btn) btn.classList.toggle('open', isOpen);
}

// ===========================
// FIREBASE LISTENER (REAL-TIME)
// ===========================
function startFirebaseListener() {
    if (isChatLoaded) return; // Jangan pasang listener berkali-kali
    isChatLoaded = true;

    var container = document.getElementById('chat-messages');
    if (container) container.innerHTML = ''; // Kosongkan saat pertama kali
    
    // Ambil 200 pesan terakhir agar tidak berat
    messagesRef.limitToLast(200).on('child_added', function(snapshot) {
        var msg = snapshot.val();
        appendMessage(msg);
        
        // Tambah badge unread jika panel tertutup
        if (!chatPanelOpen) {
            chatUnreadCount++;
            updateUnreadBadge();
        }
    });
}

// ===========================
// RENDER MESSAGES
// ===========================
function appendMessage(msg) {
    var container = document.getElementById('chat-messages');
    if (!container) return;

    var empty = container.querySelector('.chat-empty');
    var loading = container.querySelector('.chat-loading');
    if (empty) empty.remove();
    if (loading) loading.remove();

    var msgDate  = formatChatDate(msg.timestamp);
    if (lastDateDivider !== msgDate) {
        var div = document.createElement('div');
        div.className = 'chat-date-divider';
        div.textContent = msgDate;
        container.appendChild(div);
        lastDateDivider = msgDate;
    }
    
    container.appendChild(buildBubble(msg));
    scrollChatBottom(true);
}

function buildBubble(msg) {
    var isMe = chatNickname && (msg.nickname === chatNickname);
    var wrap = document.createElement('div');
    wrap.className = 'chat-msg ' + (isMe ? 'me' : 'other');

    var time      = formatChatTime(msg.timestamp);
    var nickStyle = isMe ? '' : ('color:' + (msg.color || '#2563eb'));
    var nickSpan  = '<span class="chat-msg-nick" style="' + nickStyle + '">' + _esc(msg.nickname) + '</span>';
    var bubble    = '<div class="chat-msg-bubble">' + _esc(msg.message) + '</div>';
    var ts        = '<div class="chat-msg-time">' + time + '</div>';

    wrap.innerHTML = '<div class="chat-msg-meta">' + nickSpan + '</div>' + bubble + ts;
    return wrap;
}

function scrollChatBottom(smooth) {
    var c = document.getElementById('chat-messages');
    if (c) c.scrollTo({ top: c.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
}

// ===========================
// SEND MESSAGE
// ===========================
function sendChatMessage() {
    var ta = document.getElementById('chat-input');
    if (!ta) return;
    var msg = ta.value.trim();
    if (!msg) return;
    if (!chatNickname) { openChangeNickname(); return; }

    var btn = document.getElementById('chat-send-btn');
    if (btn) btn.disabled = true;
    ta.disabled = true;

    // Push ke Firebase
    messagesRef.push({
        nickname: chatNickname,
        message: msg,
        color: chatColor,
        timestamp: Math.floor(Date.now() / 1000)
    }).then(function() {
        ta.value = '';
        ta.style.height = '';
    }).catch(function(error) {
        console.error("Gagal mengirim pesan:", error);
        if (typeof showToast === 'function') showToast('Gagal mengirim pesan', 'danger', 3000);
    }).finally(function() {
        if (btn) btn.disabled = false;
        ta.disabled = false;
        ta.focus();
    });
}

// ===========================
// UI HELPERS
// ===========================
function handleChatKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
}

function autoresizeTextarea(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function updateUnreadBadge() {
    var badge = document.getElementById('chat-unread-badge');
    if (!badge) return;
    if (chatUnreadCount > 0) {
        badge.style.display = 'inline-block';
        badge.textContent   = chatUnreadCount > 99 ? '99+' : String(chatUnreadCount);
    } else {
        badge.style.display = 'none';
    }
}

// ===========================
// FORMAT HELPERS
// ===========================
function formatChatDate(ts) {
    var d     = new Date(ts * 1000);
    var today = new Date();
    var yday  = new Date(); yday.setDate(yday.getDate() - 1);
    if (d.toDateString() === today.toDateString()) return 'Hari ini';
    if (d.toDateString() === yday.toDateString())  return 'Kemarin';
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatChatTime(ts) {
    return new Date(ts * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

// Simple HTML escape helper
function _esc(str) {
    var d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
}
