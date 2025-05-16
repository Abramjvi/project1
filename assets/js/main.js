// Function to toggle section content
function toggleSection(contentId) {
    const contentElement = document.getElementById(contentId);
    const headerElement = contentElement.previousElementSibling;
    
    // Toggle the active class on the content
    contentElement.classList.toggle('active');
    
    // Toggle the chevron icon
    const icon = headerElement.querySelector('i');
    if (contentElement.classList.contains('active')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
    
    // If section is being opened, scroll to it
    if (contentElement.classList.contains('active')) {
        headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize all sections as open on page load
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.add('active');
        const icon = section.previousElementSibling.querySelector('i');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    });
    
    // Smooth scroll to top
    document.querySelector('.back-to-top a').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});