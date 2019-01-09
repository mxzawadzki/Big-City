const appreciate = document.getElementById('appreciate'),
  share = document.getElementById('share');
let appreciations = document.getElementById('appreciationsCounter'),
  currentAppreciations = 101;

appreciate.addEventListener('click', addAppreciation)
appreciate.addEventListener('click', showSomeLove);
share.addEventListener('click', showSocial);

function addAppreciation() {
  currentAppreciations++
  appreciations.textContent = currentAppreciations;
}

function showSomeLove(e) {
  const showLove = document.createElement('span');
  showLove.innerHTML = `💖`;
  showLove.className = 'appreciate';
  showLove.style.top = e.clientY + 'px';
  showLove.style.left = e.clientX + 'px';
  document.body.appendChild(showLove);
  setTimeout(function () {
    document.querySelector('.appreciate').remove();
  }, 350);
}

function showSocial() {
  const socialMedia = document.querySelector('.social-media');
  if (socialMedia.style.width === '0rem') {
    socialMedia.style.width = '5rem';
  } else {
    socialMedia.style.width = '0rem';
  }
}
