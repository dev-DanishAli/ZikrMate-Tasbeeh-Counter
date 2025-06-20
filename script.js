const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const countDisplay = document.getElementById('count');
const themeBtn = document.getElementById('themeBtn');
const targetInput = document.getElementById('target');
const remainingDisplay = document.getElementById('remaining');

let count = 0;
let target = Infinity;

function updateCounter() {
  countDisplay.textContent = count;
  const remaining = target - count;
  remainingDisplay.textContent = isFinite(target)
    ? `Remaining: ${Math.max(remaining, 0)}`
    : 'Remaining: ∞';

  const successMsg = document.getElementById('successMsg');

  if (count >= target) {
    addBtn.disabled = true;
    addBtn.style.opacity = '0.6';
    successMsg.style.display = 'block';
  } else {
    successMsg.style.display = 'none';
  }
}


addBtn.addEventListener('click', () => {
  if (count < target) {
    count++;
    updateCounter();
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
  addBtn.disabled = false;
  addBtn.style.opacity = '1';
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

targetInput.addEventListener('input', () => {
  const val = parseInt(targetInput.value);
  target = isNaN(val) || val < 1 ? Infinity : val;
  count = 0;
  updateCounter();
  addBtn.disabled = false;
  addBtn.style.opacity = '1';
});

updateCounter();
