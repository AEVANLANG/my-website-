// Prevent context menu (right‑click)
document.addEventListener('contextmenu', e => {
  e.preventDefault();
});

// Prevent copy via keyboard or menu
document.addEventListener('copy', e => {
  e.preventDefault();
});

// Prevent selection start (text drag)
document.addEventListener('selectstart', e => {
  e.preventDefault();
});
