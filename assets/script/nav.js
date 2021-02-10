const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    icon.addEventListener('click', () => {
        nav.classList.toggle('icon-active');
    });
  links.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.toggle('icon-active');
      })
  });
}

navSlide();