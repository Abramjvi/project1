// Mobile nav active state
const initMobileNav = () => {
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
        let index = sections.length;
        
        // Find which section is currently in view
        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        // Remove active class from all links
        mobileLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to corresponding link
        if (mobileLinks[index]) {
            mobileLinks[index].classList.add('active');
        }
    }
    
    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Set initial active link
    setActiveLink();
    
    // Smooth scroll for mobile links
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initMobileNav);