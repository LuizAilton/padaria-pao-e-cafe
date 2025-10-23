// Rolagem suave entre seções

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const destino = this.getAttribute('href');
        if (!destino || destino === '#') return;
        const el = document.querySelector(destino);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      });
    });