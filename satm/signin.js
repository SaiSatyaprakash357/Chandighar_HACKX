function openModal(id) {
document.getElementById('loginModal').classList.remove('active');
document.getElementById(id).classList.add('active');
}

function closeModal(id) {
document.getElementById(id).classList.remove('active');
if (id === 'registerModal') {
    document.getElementById('loginModal').classList.add('active');
}
}