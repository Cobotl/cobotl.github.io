var token = null;
var username = null;

function saveSession() {
    try {
        localStorage.setItem('kb_token', token);
        localStorage.setItem('kb_user', username);
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
        token = localStorage.getItem('kb_token');
        username = localStorage.getItem('kb_user');
    } catch (e) {}
}
