const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuItems = document.getElementById('mobile-menu-items');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

if (mobileMenuButton && mobileMenuItems && openIcon && closeIcon) {
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

        if (mobileMenuItems.classList.contains('hidden')) {
            mobileMenuItems.classList.remove('hidden');
            mobileMenuItems.classList.add('open');
        } else {
            mobileMenuItems.classList.remove('open');
            mobileMenuItems.classList.add('hidden');
        }

        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('active');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuButton.getAttribute('aria-expanded') === 'true') {
                mobileMenuButton.click();
            }
        });
    });
}