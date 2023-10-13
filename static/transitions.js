function fadeOutAnimation() {
  var tl = gsap.timeline();
  tl.to(".animate-this", {duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2});
}


function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", {duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2});
}

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [{
    
    async leave(data) {
      const done = this.async();

      fadeOutAnimation(); // Llama a la función de animación de desvanecimiento aquí
      await delay(2000);
      done();
    },

    async enter(data) {
      contentAnimation();
    },

    async once(data) {
      contentAnimation();
    }
  }]
});





  