// Casa Bonita Cannabis Consulting Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simple form validation
            const requiredFields = ['name', 'location', 'experience', 'space', 'message', 'contact-method'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    input.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    input.style.borderColor = '#9CAF88';
                }
            });
            
            if (isValid) {
                // Create email body
                const emailBody = `
New consultation request from Casa Bonita website:

Name: ${formObject.name}
Location: ${formObject.location}
Experience Level: ${formObject.experience}
Growing Space: ${formObject.space}
Message: ${formObject.message}
Preferred Contact Method: ${formObject['contact-method']}

Please respond within 24 hours.
                `.trim();
                
                // Create mailto link
                const mailtoLink = `mailto:info@casabonita.gr?subject=Consultation Request from ${formObject.name}&body=${encodeURIComponent(emailBody)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                showFormMessage('Thank you! Your consultation request has been prepared. Please send the email that just opened in your email client.', 'success');
                
                // Reset form
                this.reset();
            } else {
                showFormMessage('Please fill in all required fields.', 'error');
            }
        });
    }

    // Form message display function
    function showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            ${type === 'success' ? 
                'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
                'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;
        
        // Insert message after form
        contactForm.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Navbar background change on scroll
    const navbar = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#FFFFFF';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle (if needed for smaller screens)
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--primary-green);
        cursor: pointer;
    `;

    // Add mobile menu functionality for very small screens
    if (window.innerWidth <= 480) {
        const navContainer = document.querySelector('.nav-container');
        const navLinks = document.querySelector('.nav-links');
        
        navContainer.insertBefore(navToggle, navLinks);
        navToggle.style.display = 'block';
        
        navToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
        });
        
        // Hide menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 480) {
                    navLinks.style.display = 'none';
                }
            });
        });
    }

    // Pricing table responsive handling
    const pricingTable = document.querySelector('.pricing-table table');
    if (pricingTable && window.innerWidth <= 768) {
        const tableContainer = pricingTable.parentElement;
        tableContainer.style.overflowX = 'auto';
        tableContainer.style.webkitOverflowScrolling = 'touch';
    }

    // Add loading state to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') {
                const originalText = this.textContent;
                this.textContent = 'Sending...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 3000);
            }
        });
    });

    // Lazy loading for background images (if any are added later)
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');
    if (lazyBackgrounds.length > 0) {
        const bgObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bg = entry.target.getAttribute('data-bg');
                    entry.target.style.backgroundImage = `url(${bg})`;
                    bgObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(bg => bgObserver.observe(bg));
    }

    // Performance optimization: Debounced scroll handler
    let scrollTimeout;
    function debounceScroll() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Any scroll-based operations can go here
        }, 10);
    }

    window.addEventListener('scroll', debounceScroll, { passive: true });

    // Console message for developers
    console.log('🌱 Casa Bonita Cannabis Consulting Website Loaded Successfully');
    console.log('💚 Grow Like a Local Legend');
});

