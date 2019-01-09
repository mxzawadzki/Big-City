const appreciate = document.getElementById('appreciate');
let appreciations = document.getElementById('appreciationsCounter');
let currentAppreciations = 101;

appreciate.addEventListener('click', function() {
  currentAppreciations++
  appreciations.textContent = currentAppreciations;
})

appreciate.addEventListener('click', showSomeLove);

function showSomeLove(e) {
  const showLove = document.createElement("span");
  showLove.innerHTML = `💖`;
  showLove.className = "appreciate";
  showLove.style.top = e.clientY + "px"; showLove.style.left = e.clientX + "px";
  document.body.appendChild(showLove);
  setTimeout(function() {
    document.querySelector('.appreciate').remove();
  }, 150);

}

document.getElementById('share').addEventListener('click', function () {
  document.querySelector('.social-media').classList.toggle('hidden');
});