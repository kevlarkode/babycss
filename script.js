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