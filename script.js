
const expandMenu = (event) => {
    // Close all menus
    const allMenus = document.querySelectorAll('.features-menu, .company-menu');
    allMenus.forEach(menu => {
        menu.classList.remove('show');
        menu.classList.add('hidden');
    });

    // Identify the submenu to be toggled based on the parent div's data-menu attribute
    const menuToToggle = document.querySelector(`.${event.currentTarget.dataset.menu}`);
    
    if (menuToToggle.classList.contains('hidden')) {
        menuToToggle.classList.remove('hidden');
        menuToToggle.classList.add('show');
    } else if (menuToToggle.classList.contains('show')) {
        menuToToggle.classList.remove('show');
        menuToToggle.classList.add('hidden');
    }

    // Stop the event from bubbling up
    event.stopPropagation();
}


// New function to handle clicks outside the menus
document.addEventListener('click', (event) => {
    const featuresMenu = document.querySelector('.features-menu');
    const companyMenu = document.querySelector('.company-menu');
    
    if (!featuresMenu.contains(event.target) && !companyMenu.contains(event.target)) {
        if (featuresMenu.classList.contains('show')) {
            featuresMenu.classList.remove('show');
            featuresMenu.classList.add('hidden');
        }
        if (companyMenu.classList.contains('show')) {
            companyMenu.classList.remove('show');
            companyMenu.classList.add('hidden');
        }
    }
});

// Prevent the document click event from being triggered when the menus themselves are clicked
document.querySelector('.features-menu').addEventListener('click', (event) => {
    event.stopPropagation();
});

document.querySelector('.company-menu').addEventListener('click', (event) => {
    event.stopPropagation();
});
