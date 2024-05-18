document.addEventListener('mousemove', function(e) {
    const glow = document.querySelector('.glow');
    if (!glow) {
      const newGlow = document.createElement('div');
      newGlow.classList.add('glow');
      document.body.appendChild(newGlow);
    }
    glow.style.top = e.pageY + 'px';
    glow.style.left = e.pageX + 'px';
  });
  