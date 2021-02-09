const navSlide = () => {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.links');

    icon.addEventListener('click', () => {
        nav.classList.toggle('icon-active');
    });
}

navSlide();