import api_axios from "./axiosClient";

function applyAuthToken(token) {
    localStorage.setItem('authToken', token);
}

function destroyAuthToken() {
    localStorage.removeItem('authToken');
}

module.exports = {
    applyAuthToken,
    destroyAuthToken,
}
