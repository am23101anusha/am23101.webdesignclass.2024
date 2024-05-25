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

  document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector(".animated-text-container");
    textContainer.style.animation = "typing 3s steps(20) forwards, blink 0.75s step-end infinite";
  });
  


  function sendEmail() {
    window.location.href = "mailto:your-email@example.com";
  }

  