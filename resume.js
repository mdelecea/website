// setup typewriter effect in the terminal demo
var demoEl = document.querySelector('.demo');
var aboutEl = document.getElementById('about-text');

if (demoEl && aboutEl) {
  var prompt = demoEl.textContent;
  var txt = aboutEl.textContent.trim();
  var i = 0;
  var speed = 10;

  function typeItOut () {
    if (i < txt.length) {
      demoEl.textContent += txt.charAt(i);
      i++;
      setTimeout(typeItOut, 100/speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// responsive navigation
var topNav = document.querySelector('.menu');
var icon = document.querySelector('.toggle');

if (topNav && icon) {
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
}