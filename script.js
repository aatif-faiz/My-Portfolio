const icon = document.querySelector('.icon');
const nav2 = document.querySelector('#nav2');
const logo = document.querySelector('.logo');

        icon.addEventListener('click', () => {
            nav2.classList.toggle('active');
            icon.classList.toggle('active');
            logo.classList.toggle('active');
        });