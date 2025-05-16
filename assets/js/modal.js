// Modal functionality
let currentImageIndex = 0;
let currentImages = [];

// Open modal with clicked image
window.openModal = (images, index) => {
    currentImages = images;
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "flex";
    modalImg.src = currentImages[currentImageIndex].src;
    captionText.innerHTML = currentImages[currentImageIndex].alt || "";
};

// Close modal
window.closeModal = () => {
    document.getElementById("imageModal").style.display = "none";
};

// Navigate between images
window.changeImage = (n) => {
    currentImageIndex += n;
    
    // Wrap around if at beginning or end
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }
    
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    modalImg.src = currentImages[currentImageIndex].src;
    captionText.innerHTML = currentImages[currentImageIndex].alt || "";
};

// Initialize clickable images
const initClickableImages = () => {
    // Make all achievement and organization images clickable
    document.querySelectorAll('.achievement-images img, .organization-images img').forEach(img => {
        img.classList.add('clickable-image');
        img.onclick = function() {
            const container = this.closest('.achievement-images, .organization-images');
            const images = Array.from(container.querySelectorAll('img'));
            const index = images.indexOf(this);
            openModal(images, index);
        };
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById("imageModal");
        if (event.target == modal) {
            closeModal();
        }
    };
    
    // Close modal with ESC key
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.key === "Escape") {
            closeModal();
        }
    };
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initClickableImages);