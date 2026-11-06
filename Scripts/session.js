var authToken = null;
var currentUsername = null;

function saveSession() {
    try {
        localStorage.setItem('kb_token', authToken);
        localStorage.setItem('kb_user', currentUsername);
    } catch (e) {}
}

function clearSession() {
    try {
        localStorage.removeItem('kb_token');
        localStorage.removeItem('kb_user');
    } catch (e) {}
}

function loadSession() {
    try {
        var t = localStorage.getItem('kb_token');
        var u = localStorage.getItem('kb_user');
        authToken = t && t !== 'null' ? t : null;
        currentUsername = u && u !== 'null' ? u : null;
    } catch (e) {}
}
