// Main JavaScript file for general functionality

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.intro-content, .get-started, .tree-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.animation = 'fadeIn 1s ease forwards';
            }
        });
    };

    // Call on initial load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle if needed in the future
    // Currently no mobile nav menu, but leaving this here for potential expansion
    const setupMobileNav = () => {
        // Code for mobile nav would go here
    };

    // Handle responsive video resizing
    const handleVideoResize = () => {
        const videos = document.querySelectorAll('iframe');
        videos.forEach(video => {
            const parentWidth = video.parentElement.offsetWidth;
            video.style.height = (parentWidth * 9 / 16) + 'px';
        });
    };

    // Initial call and resize event
    handleVideoResize();
    window.addEventListener('resize', handleVideoResize);

    // Add animation classes to elements
    const addAnimationClasses = () => {
        const elements = document.querySelectorAll('h2, .node-content');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.add('animate-on-scroll');
        });
    };

    addAnimationClasses();
});