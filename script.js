// Wait until the entire document is loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    
    // Cache (store) references to specific DOM elements for efficiency
    const allMenus = document.querySelectorAll('.features-menu, .company-menu');
    const header = document.getElementById('header');
    

    /**
     * A function to hide all menus and reset their arrow icons.
     * An exception can be made for a specific menu to not be hidden.
     * @param {HTMLElement|null} excludeMenu - The menu to exclude from hiding.
     */
    const resetMenus = (excludeMenu = null) => {
        allMenus.forEach(menu => {
            if (menu !== excludeMenu) {
                // Hide the menu
                menu.classList.add('hidden');
                // Reset the arrow icon for the menu
                menu.previousElementSibling.querySelector('.arrow-icon').classList.remove('flipped');
            }
        });
    };

    // Listen for click events on the header
    header.addEventListener('click', (event) => {
        const target = event.target;  // The actual clicked element

        // Check if the clicked element (or its ancestor) is a menu item or arrow icon
        const isMenuItemOrIcon = target.closest('.menu-item, .arrow-icon');
        if (!isMenuItemOrIcon) return;  // If not, exit early

        // Find the closest parent (or self) that has the 'data-menu' attribute
        const parentDropdown = isMenuItemOrIcon.closest('[data-menu]');
        // Get the menu corresponding to the 'data-menu' attribute value
        const currentMenu = document.querySelector(`.${parentDropdown.dataset.menu}`);
        // Get the arrow icon within that dropdown
        const arrowIcon = parentDropdown.querySelector('.arrow-icon');

        // Hide all menus except the current one
        resetMenus(currentMenu);

        // Toggle the visibility of the current menu
        const isMenuHidden = currentMenu.classList.toggle('hidden');
        // Adjust the arrow icon's appearance based on the menu's visibility
        arrowIcon.classList.toggle('flipped', !isMenuHidden);

        // Prevent this click event from propagating (bubbling) further up in the DOM
        event.stopPropagation();
    });

    // For each menu, listen for click events to prevent them from reaching the header
    // This ensures that clicking inside a menu won't close it
    allMenus.forEach(menu => menu.addEventListener('click', event => event.stopPropagation()));

    // Listen for clicks on the entire document
    document.addEventListener('click', (event) => {
        const target = event.target;  // The actual clicked element
        
        // Check if the click was outside any of the menus
        const isInsideMenu = Array.from(allMenus).some(menu => menu.contains(target));
        if (!isInsideMenu) {
            // If the click was outside, hide all menus
            resetMenus();
        }
    });

    // Change hero image based on screen width
    const heroImgSelect = () => {
        const heroImg = document.getElementById('hero-image');

        if (window.innerWidth <= 1100) {
            heroImg.src = '/images/image-hero-mobile.png'
        }
        else {
            heroImg.src = '/images/image-hero-desktop.png'
        }
    }

    heroImgSelect();

    window.addEventListener('resize', heroImgSelect);

    // Change nav to hamburger menu under 900px width
    const changeNav = () => {
        const menu = document.getElementById('menu-container');
        const mmmBurger = document.querySelector('.hamburger-icon')

        if (window.innerWidth <= 900) {
            menu.classList.add('hidden')
            // mmmBurger.classList.remove('hidden')
        }
        else {
            menu.classList.remove('hidden')
            // mmmBurger.classList.add('hidden')
        }
    }

    changeNav();

    window.addEventListener('resize', changeNav)
});
