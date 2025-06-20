const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const countDisplay = document.getElementById('count');
const themeBtn = document.getElementById('themeBtn');

let count = 0;

addBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
