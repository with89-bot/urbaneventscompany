document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinksList.classList.toggle('nav-active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinksList.classList.contains('nav-active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('nav-active');
            mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    const navbarElement = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbarElement.classList.add('sticky-active');
        } else {
            navbarElement.classList.remove('sticky-active');
        }
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBox = item.querySelector('.faq-question');
        questionBox.addEventListener('click', () => {
            const currentItemActive = item.classList.contains('active');
            faqItems.forEach(el => el.classList.remove('active'));
            if (!currentItemActive) {
                item.classList.add('active');
            }
        });
    });
});