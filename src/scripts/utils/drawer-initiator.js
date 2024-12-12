const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      drawer.classList.toggle('open');
      drawer.setAttribute('aria-hidden', isExpanded);
    });

    content.addEventListener('click', () => {
      button.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    });
  },
};

export default DrawerInitiator;
