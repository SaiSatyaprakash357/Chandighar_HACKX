function openModal(id) {
  closeAllModals();
  document.getElementById(id).classList.add("active");
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
}

function goBackToRoleSelect() {
  closeAllModals();
  document.getElementById("selectRoleModal").classList.add("active");
}

function goBackToLogin() {
  closeAllModals();
  document.getElementById("loginModal").classList.add("active");
}
