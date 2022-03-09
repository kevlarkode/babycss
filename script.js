/******************* ACCORDION *******************/

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.accordion-content')
    const accordionHeader = item.querySelector('.accordion-header')

    if (item.classList.contains('accordion-open')) {
        accordionHeader.style.borderRadius = '0.5rem'
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionHeader.style.borderRadius = '0.5rem  0.5rem 0 0'
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/******************* Scoll  To Top *******************/
window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 500);
});
function scrollToTop(params) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/******************* Scroll to specific section *******************/
function scrollToSection(id) {
    document.querySelector(id).scrollIntoView();
}
function delayScrollToSection(id) {
    setTimeout(() => { document.querySelector(id).scrollIntoView(); }, 500);
    toggleMenu();
};

// Modifying navbar links action
document.querySelectorAll(".nav-links")
    .forEach(link => link.addEventListener("click", () => {
        event.preventDefault();

        let sectionId = (link.href).substring((link.href).indexOf("#"), (link.href).length);

        scrollToSection(sectionId);
    })
    );

document.querySelectorAll(".mobile-nav-links")
    .forEach(link => link.addEventListener("click", () => {
        event.preventDefault();

        let sectionId = (link.href).substring((link.href).indexOf("#"), (link.href).length);

        delayScrollToSection(sectionId);
    })
    );

/******************* NAVBAR & menu toggle *******************/
const menuToggle = document.querySelector('.menuToggle');
const navbarSmallScreen = document.querySelector('.navbar-small-screen');
const body = document.querySelector('body');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navbarSmallScreen.classList.toggle('active');
    body.classList.toggle('lock-scroll');
    document.querySelector('header').classList.toggle('active');
};

function toggleMenu() {
    menuToggle.classList.remove('active');
    navbarSmallScreen.classList.remove('active');
    body.classList.remove('lock-scroll');
    document.querySelector('header').classList.remove('active');
}

// delay action for navbar click
function delay(URL) {
    setTimeout(function () { window.location = URL }, 500);
}