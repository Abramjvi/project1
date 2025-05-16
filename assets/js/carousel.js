// Initialize achievement carousel
const initAchievementCarousel = () => {
    const mainCarousel = document.getElementById('main-carousel');
    if (!mainCarousel) return;
    
    const achievementsContainer = mainCarousel.querySelector('.achievements-container');
    const achievementSlides = mainCarousel.querySelectorAll('.achievement-slide');
    const achievementIndicators = mainCarousel.querySelectorAll('.indicator');
    
    let currentAchievementIndex = 0;
    const totalAchievements = achievementSlides.length;
    
    // Function to update achievement carousel display
    const updateAchievementCarousel = () => {
        achievementsContainer.style.transform = `translateX(-${currentAchievementIndex * 100}%)`;
        
        // Update active indicator
        achievementIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentAchievementIndex);
        });
    };
    
    // Function to move achievement slides
    window.moveAchievementSlide = (direction) => {
        currentAchievementIndex += direction;
        
        // Handle loop for first and last slides
        if (currentAchievementIndex >= totalAchievements) {
            currentAchievementIndex = 0;
        } else if (currentAchievementIndex < 0) {
            currentAchievementIndex = totalAchievements - 1;
        }
        
        updateAchievementCarousel();
    };
    
    // Function to go to specific achievement slide
    window.goToAchievementSlide = (index) => {
        currentAchievementIndex = index;
        updateAchievementCarousel();
    };
    
    // Function to show achievement detail
    window.showAchievementDetail = (achievementNumber) => {
        hideAllAchievementDetails();
        const detailElement = document.getElementById(`achievement-detail-${achievementNumber}`);
        if (detailElement) {
            detailElement.classList.add('active');
            detailElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Function to hide all achievement details
    window.hideAllAchievementDetails = () => {
        document.querySelectorAll('.achievement-card').forEach(card => {
            card.classList.remove('active');
        });
    };
    
    // Initialize organization carousel
    const orgCarousel = document.getElementById('org-carousel');
    if (!orgCarousel) return;
    
    const organizationsContainer = orgCarousel.querySelector('.organizations-container');
    const organizationSlides = orgCarousel.querySelectorAll('.organization-slide');
    const organizationIndicators = orgCarousel.querySelectorAll('.indicator');
    
    let currentOrganizationIndex = 0;
    const totalOrganizations = organizationSlides.length;
    
    // Function to update organization carousel display
    const updateOrganizationCarousel = () => {
        organizationsContainer.style.transform = `translateX(-${currentOrganizationIndex * 100}%)`;
        
        // Update active indicator
        organizationIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentOrganizationIndex);
        });
    };
    
    // Function to move organization slides
    window.moveOrganizationSlide = (direction) => {
        currentOrganizationIndex += direction;
        
        // Handle loop for first and last slides
        if (currentOrganizationIndex >= totalOrganizations) {
            currentOrganizationIndex = 0;
        } else if (currentOrganizationIndex < 0) {
            currentOrganizationIndex = totalOrganizations - 1;
        }
        
        updateOrganizationCarousel();
    };
    
    // Function to go to specific organization slide
    window.goToOrganizationSlide = (index) => {
        currentOrganizationIndex = index;
        updateOrganizationCarousel();
    };
    
    // Function to show organization detail
    window.showOrganizationDetail = (organizationNumber) => {
        hideAllOrganizationDetails();
        const detailElement = document.getElementById(`organization-detail-${organizationNumber}`);
        if (detailElement) {
            detailElement.classList.add('active');
            detailElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Function to hide all organization details
    window.hideAllOrganizationDetails = () => {
        document.querySelectorAll('.organization-card').forEach(card => {
            card.classList.remove('active');
        });
    };
    
    // Auto-scroll achievement carousel every 8 seconds
    setInterval(() => {
        moveAchievementSlide(1);
    }, 8000);
    
    // Auto-scroll organization carousel every 8 seconds
    setInterval(() => {
        moveOrganizationSlide(1);
    }, 8000);
    
    // Initialize carousels
    updateAchievementCarousel();
    updateOrganizationCarousel();
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initAchievementCarousel);