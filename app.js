// Enhanced Modern CV Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the enhanced modern CV application
    initializeEnhancedCV();
});

function initializeEnhancedCV() {
    // Core functionality
    handleDownloadButton();
    addModernScrollAnimations();
    addEnhancedInteractiveEffects();
    handleResponsiveFeatures();
    addKeyboardNavigation();
    initializePerformanceOptimizations();
    
    // Enhanced features
    addContactBoxAnimations();
    addCompetencyHoverEffects();
    addInterestCardInteractions();
    addParticleEffect();
    addTypewriterEffect();
    addProgressBars();
    addLoadingAnimations();
    
    console.log('Enhanced Modern CV Application initialized successfully');
}

// Enhanced Download Button with Modern UX
function handleDownloadButton() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Modern loading animation
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
            this.disabled = true;
            this.classList.add('loading');
            
            // Add ripple effect
            addRippleEffect(e, this);
            
            // Simulate modern download process
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Ready!';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.disabled = false;
                    this.classList.remove('loading');
                    
                    // Show modern notification
                    showModernNotification('PDF download feature will be available soon!', 'info');
                }, 1000);
            }, 2000);
        });
        
        // Add hover sound effect simulation
        downloadBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        downloadBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
}

// Enhanced Contact Box Animations
function addContactBoxAnimations() {
    const contactBoxes = document.querySelectorAll('.contact-box');
    
    contactBoxes.forEach((box, index) => {
        // Initial animation delay
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
        
        // Enhanced hover effects
        box.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = `0 10px 30px rgba(var(--color-primary-rgb, 33, 128, 141), 0.3)`;
            
            // Animate icon
            const iconWrapper = this.querySelector('.contact-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.animation = 'pulse 1.5s ease-in-out infinite';
            }
            
            // Add subtle background animation
            this.style.background = 'linear-gradient(135deg, var(--color-surface), var(--color-bg-1))';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'var(--shadow-sm)';
            
            const iconWrapper = this.querySelector('.contact-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.animation = 'none';
            }
            
            this.style.background = 'var(--color-surface)';
        });
        
        // Click animation
        box.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });
    
    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Competency Card Hover Effects
function addCompetencyHoverEffects() {
    const competencyCards = document.querySelectorAll('.competency-card');
    
    competencyCards.forEach((card, cardIndex) => {
        // Mouse tracking for 3D effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        });
        
        // Enhanced list item animations
        const listItems = card.querySelectorAll('.competency-list li');
        listItems.forEach((item, itemIndex) => {
            item.addEventListener('mouseenter', function() {
                // Create ripple effect on hover
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    left: 0;
                    top: 50%;
                    width: 4px;
                    height: 4px;
                    background: var(--color-primary);
                    border-radius: 50%;
                    transform: translateY(-50%);
                    animation: rippleExpand 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.remove();
                    }
                }, 600);
            });
        });
        
        // Staggered animation on card hover
        card.addEventListener('mouseenter', function() {
            const items = this.querySelectorAll('.competency-list li');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateX(8px) scale(1.02)';
                    item.style.color = 'var(--color-primary)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const items = this.querySelectorAll('.competency-list li');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateX(0) scale(1)';
                    item.style.color = 'var(--color-text)';
                }, index * 25);
            });
        });
    });
    
    // Add ripple expansion animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleExpand {
            0% {
                width: 4px;
                height: 4px;
                opacity: 1;
            }
            100% {
                width: 20px;
                height: 20px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Enhanced Interest Card Interactions
function addInterestCardInteractions() {
    const interestCards = document.querySelectorAll('.interest-card');
    
    interestCards.forEach((card, index) => {
        // Staggered entrance animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) rotateX(20deg)';
        card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateX(0deg)';
        }, (index + 1) * 150);
        
        // Enhanced 3D hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transformStyle = 'preserve-3d';
            this.style.zIndex = '10';
            
            // Animate icon with bounce
            const iconWrapper = this.querySelector('.interest-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.animation = 'iconBounce 0.6s ease';
            }
            
            // Glowing border effect
            this.style.boxShadow = `
                0 20px 40px rgba(var(--color-primary-rgb, 33, 128, 141), 0.2),
                inset 0 0 0 2px var(--color-primary)
            `;
            
            // Animate title and description
            const title = this.querySelector('.interest-title');
            const description = this.querySelector('.interest-description');
            
            if (title) {
                title.style.transform = 'translateY(-2px)';
                title.style.textShadow = '0 2px 10px rgba(var(--color-primary-rgb, 33, 128, 141), 0.3)';
            }
            
            if (description) {
                description.style.transform = 'translateY(-1px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = 'auto';
            this.style.boxShadow = 'var(--shadow-sm)';
            
            const iconWrapper = this.querySelector('.interest-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.animation = 'none';
            }
            
            const title = this.querySelector('.interest-title');
            const description = this.querySelector('.interest-description');
            
            if (title) {
                title.style.transform = 'translateY(0)';
                title.style.textShadow = 'none';
            }
            
            if (description) {
                description.style.transform = 'translateY(0)';
            }
        });
        
        // Click animation with feedback
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-8px) scale(0.98)';
            
            // Create success feedback
            const feedback = document.createElement('div');
            feedback.innerHTML = '<i class="fas fa-check"></i>';
            feedback.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--color-success);
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                opacity: 0;
                z-index: 100;
                animation: successPop 0.8s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.appendChild(feedback);
            
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.03)';
                if (feedback.parentNode) {
                    feedback.remove();
                }
            }, 800);
        });
    });
    
    // Add icon bounce and success pop animations
    const interestAnimations = document.createElement('style');
    interestAnimations.textContent = `
        @keyframes iconBounce {
            0%, 20%, 50%, 80%, 100% { transform: scale(1.1) rotate(10deg) translateY(0); }
            40% { transform: scale(1.2) rotate(15deg) translateY(-5px); }
            60% { transform: scale(1.15) rotate(12deg) translateY(-3px); }
        }
        
        @keyframes successPop {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(interestAnimations);
}

// Add ripple effect to buttons and interactive elements
function addRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Enhanced Modern Scroll Animations with Intersection Observer
function addModernScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add specific animations for different elements
                if (entry.target.classList.contains('competency-card')) {
                    animateCompetencyCard(entry.target);
                } else if (entry.target.classList.contains('experience-item')) {
                    animateExperienceItem(entry.target);
                } else if (entry.target.classList.contains('skill-item')) {
                    animateSkillItem(entry.target);
                } else if (entry.target.classList.contains('interest-card')) {
                    animateInterestCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe different elements
    const elementsToObserve = [
        '.cv-section',
        '.competency-card',
        '.experience-item',
        '.skill-item',
        '.personal-item',
        '.interest-card',
        '.contact-box'
    ];
    
    elementsToObserve.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            observer.observe(element);
        });
    });
}

// Animate competency cards with staggered effect
function animateCompetencyCard(card) {
    const listItems = card.querySelectorAll('.competency-list li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });
}

// Animate experience items
function animateExperienceItem(item) {
    const responsibilities = item.querySelectorAll('.job-responsibilities li');
    responsibilities.forEach((resp, index) => {
        setTimeout(() => {
            resp.style.opacity = '0';
            resp.style.transform = 'translateX(-15px)';
            resp.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                resp.style.opacity = '1';
                resp.style.transform = 'translateX(0)';
            }, 100);
        }, index * 80);
    });
}

// Animate skill items
function animateSkillItem(item) {
    const details = item.querySelector('.skill-details');
    if (details) {
        details.style.opacity = '0';
        details.style.transform = 'translateY(10px)';
        details.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            details.style.opacity = '1';
            details.style.transform = 'translateY(0)';
        }, 200);
    }
}

// Animate interest cards
function animateInterestCard(card) {
    const icon = card.querySelector('.interest-icon-wrapper');
    const content = card.querySelector('.interest-content');
    
    if (icon) {
        icon.style.transform = 'scale(0) rotate(45deg)';
        icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        setTimeout(() => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
    
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 400);
    }
}

// Enhanced interactive effects
function addEnhancedInteractiveEffects() {
    // Parallax effect for header
    addParallaxEffect();
    
    // Magnetic buttons
    addMagneticEffect();
    
    // Smooth scrolling with easing
    addSmoothScrolling();
    
    // Advanced card hover effects
    addAdvancedCardEffects();
}

// Parallax scrolling effect
function addParallaxEffect() {
    const header = document.querySelector('.cv-header');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (header) {
            header.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Magnetic button effect
function addMagneticEffect() {
    const magneticElements = document.querySelectorAll('.btn, .contact-box, .interest-card');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Enhanced smooth scrolling
function addSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Advanced card hover effects
function addAdvancedCardEffects() {
    const cards = document.querySelectorAll('.competency-card, .skill-item, .personal-item, .interest-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transformStyle = 'preserve-3d';
            this.style.transform = 'translateZ(20px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateZ(0)';
        });
    });
}

// Add particle effect to header
function addParticleEffect() {
    const header = document.querySelector('.cv-header');
    if (!header) return;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
    `;
    
    header.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 15; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const x = Math.random() * container.offsetWidth;
    const animationDuration = Math.random() * 15 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        left: ${x}px;
        bottom: -10px;
        animation: float ${animationDuration}s infinite linear;
    `;
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
        createParticle(container); // Create new particle
    }, animationDuration * 1000);
}

// Typewriter effect for name
function addTypewriterEffect() {
    const nameElement = document.querySelector('.name');
    if (!nameElement) return;
    
    const textElement = nameElement.childNodes[2]; // Get text node
    if (!textElement || textElement.nodeType !== Node.TEXT_NODE) return;
    
    const text = textElement.textContent.trim();
    textElement.textContent = '';
    
    let i = 0;
    const speed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// Add progress bars to skills
function addProgressBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const progressBar = document.createElement('div');
        progressBar.className = 'skill-progress';
        progressBar.style.cssText = `
            height: 4px;
            background: var(--color-bg-1);
            border-radius: 2px;
            margin-top: var(--space-8);
            overflow: hidden;
        `;
        
        const progressFill = document.createElement('div');
        progressFill.className = 'skill-progress-fill';
        const randomProgress = Math.random() * 30 + 70; // 70-100%
        progressFill.style.cssText = `
            height: 100%;
            background: linear-gradient(90deg, var(--color-primary), var(--color-teal-400));
            width: 0%;
            transition: width 2s ease;
            border-radius: 2px;
        `;
        
        progressBar.appendChild(progressFill);
        item.appendChild(progressBar);
        
        // Animate progress bar when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        progressFill.style.width = randomProgress + '%';
                    }, 500);
                }
            });
        });
        
        observer.observe(item);
    });
}

// Loading animations
function addLoadingAnimations() {
    const sections = document.querySelectorAll('.cv-section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
}

// Modern notification system
function showModernNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `modern-notification modern-notification--${type}`;
    
    const icons = {
        info: 'fa-info-circle',
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icons[type]} notification-icon"></i>
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Modern notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: var(--color-surface);
        border: 1px solid var(--color-card-border);
        border-left: 4px solid var(--color-${type === 'info' ? 'primary' : type});
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        max-width: 400px;
        min-width: 300px;
        backdrop-filter: blur(10px);
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        padding: var(--space-16);
        gap: var(--space-12);
    `;
    
    const icon = notification.querySelector('.notification-icon');
    icon.style.cssText = `
        color: var(--color-${type === 'info' ? 'primary' : type});
        font-size: var(--font-size-lg);
    `;
    
    const message_el = notification.querySelector('.notification-message');
    message_el.style.cssText = `
        flex: 1;
        color: var(--color-text);
        font-size: var(--font-size-base);
        line-height: 1.4;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
        cursor: pointer;
        padding: var(--space-4);
        border-radius: var(--radius-base);
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'var(--color-bg-1)';
        this.style.color = 'var(--color-text)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
        this.style.color = 'var(--color-text-secondary)';
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Handle close
    closeBtn.addEventListener('click', () => {
        closeNotification(notification);
    });
    
    // Auto close
    setTimeout(() => {
        if (document.body.contains(notification)) {
            closeNotification(notification);
        }
    }, 5000);
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    notification.style.opacity = '0';
    
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 400);
}

// Enhanced keyboard navigation
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Escape key to close notifications
        if (e.key === 'Escape') {
            const notifications = document.querySelectorAll('.modern-notification');
            notifications.forEach(notification => {
                closeNotification(notification);
            });
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateSections(e.key === 'ArrowDown' ? 1 : -1);
        }
    });
}

// Section navigation with arrow keys
function navigateSections(direction) {
    const sections = Array.from(document.querySelectorAll('.cv-section'));
    const currentScroll = window.scrollY;
    let targetSection = null;
    
    if (direction === 1) {
        targetSection = sections.find(section => {
            return section.getBoundingClientRect().top > 100;
        });
    } else {
        const reversedSections = sections.reverse();
        targetSection = reversedSections.find(section => {
            return section.getBoundingClientRect().top < -100;
        });
    }
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Responsive features
function handleResponsiveFeatures() {
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            adjustLayoutForScreenSize();
        }, 250);
    });
    
    adjustLayoutForScreenSize();
}

function adjustLayoutForScreenSize() {
    const screenWidth = window.innerWidth;
    const header = document.querySelector('.cv-header');
    const main = document.querySelector('.cv-main');
    
    if (screenWidth <= 768) {
        header?.classList.add('mobile-layout');
        main?.classList.add('mobile-layout');
        
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
    } else {
        header?.classList.remove('mobile-layout');
        main?.classList.remove('mobile-layout');
        
        document.documentElement.style.setProperty('--animation-duration', '0.6s');
    }
}

// Performance optimizations
function initializePerformanceOptimizations() {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Export functions for global access
window.EnhancedCV = {
    showModernNotification,
    closeNotification,
    addRippleEffect,
    navigateSections,
    adjustLayoutForScreenSize
};