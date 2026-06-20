document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Open/Close Toggle Control
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-active");
        const icon = menuBtn.querySelector("i");
        if(navLinks.classList.contains("mobile-active")) {
            icon.className = "fas fa-xmark";
        } else {
            icon.className = "fas fa-bars";
        }
    });

    // Close mobile menu immediately upon any link redirection select event
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-active");
            menuBtn.querySelector("i").className = "fas fa-bars";
        });
    });

    // 2. Production Grade Intersection Observer for Scroll Fade-In Effects
    const revealSections = document.querySelectorAll(".scroll-reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Trigger execution loop once globally
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // 3. Robust High-End Clean Testimonial Carousel Mechanics
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".testimonial-card");
    const dotsContainer = document.querySelector(".carousel-dots");
    let currentIndex = 0;
    let autoPlayTimer;

    // Dynamically safely generate functional selector dot nodes
    cards.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if(idx === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            goToSlide(idx);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function goToSlide(index) {
        currentIndex = index;
        // Shift track using robust transform mechanics percentage boundaries safely
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Handle class sync transformations across nodes beautifully
        dots.forEach(d => d.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    function startAutoplay() {
        autoPlayTimer = setInterval(() => {
            let nextIndex = (currentIndex + 1) % cards.length;
            goToSlide(nextIndex);
        }, 5000); // Clean 5 second rotators
    }

    function resetAutoplay() {
        clearInterval(autoPlayTimer);
        startAutoplay();
    }

    // Launch slide operations safely if structure initialized cleanly
    if(cards.length > 0) {
        startAutoplay();
    }

    // 4. Shrink Navigation Bar Element Size Safely on Scroll Execution
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50) {
            navbar.style.background = "rgba(255, 253, 246, 0.98)";
            document.querySelector(".nav-container").style.height = "70px";
        } else {
            navbar.style.background = "rgba(255, 253, 246, 0.95)";
            document.querySelector(".nav-container").style.height = "80px";
        }
    });
});