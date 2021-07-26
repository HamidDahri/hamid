  
  window.addEventListener("keydown" , (e) => {
        console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        console.log(key);
        if(!audio) return;
        audio.currentTime = 0;
        key.classList.add('playing');
        audio.play();
  });

  function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));