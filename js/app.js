const appreciate = document.getElementById('appreciate'),
      share = document.getElementById('share'),
      comment = document.getElementById('comment');
let appreciations = document.getElementById('appreciationsCounter'),
    currentAppreciations = 101;

comment.addEventListener('click', addComment);
share.addEventListener('click', showSocial);
appreciate.addEventListener('click', addAppreciation)
appreciate.addEventListener('click', showSomeLove);

function addComment() {
  comment.textContent = 'Thank you!';
}

function showSocial() {
  const socialMedia = document.querySelector('.social-media');
  if (socialMedia.className == 'social-media hidden') {
    socialMedia.classList.remove('hidden');
  } else {
    socialMedia.classList.add('hidden');
  }
}

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