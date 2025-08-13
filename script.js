// Portfolio site with fancy effects
console.log("Enhanced portfolio site loaded with fancy effects!");

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2-8px
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    // Random opacity and color
    const opacity = Math.random() * 0.8 + 0.2;
    const hue = Math.random() * 360;
    particle.style.background = `hsla(${hue}, 70%, 60%, ${opacity})`;
    particle.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 70%, 60%, ${opacity * 0.5})`;
    
    // Random animation duration
    const duration = Math.random() * 3 + 4;
    particle.style.animationDuration = duration + 's';
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, duration * 1000);
}

// Create particles continuously
setInterval(createParticle, 300);

// Mouse trail effect
let mouseTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    // Limit trail length
    if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
    }
    
    // Create trail effect
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.width = '4px';
    trail.style.height = '4px';
    trail.style.borderRadius = '50%';
    trail.style.background = `radial-gradient(circle, rgba(255,255,255,0.8), transparent)`;
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '1000';
    trail.style.animation = 'fadeOut 1s ease-out forwards';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
});

// Add fade out keyframe for mouse trail
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('section');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.1 * (index + 1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Interactive section hover effects
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.15)';
        this.style.boxShadow = '0 25px 50px rgba(31, 38, 135, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
        this.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Dynamic gradient color change based on time
function updateGradientColors() {
    const time = Date.now() * 0.001;
    const r1 = Math.sin(time * 0.1) * 127 + 128;
    const g1 = Math.sin(time * 0.1 + 2) * 127 + 128;
    const b1 = Math.sin(time * 0.1 + 4) * 127 + 128;
    
    const r2 = Math.sin(time * 0.1 + 1) * 127 + 128;
    const g2 = Math.sin(time * 0.1 + 3) * 127 + 128;
    const b2 = Math.sin(time * 0.1 + 5) * 127 + 128;
    
    const r3 = Math.sin(time * 0.1 + 2) * 127 + 128;
    const g3 = Math.sin(time * 0.1 + 4) * 127 + 128;
    const b3 = Math.sin(time * 0.1 + 6) * 127 + 128;
    
    const r4 = Math.sin(time * 0.1 + 3) * 127 + 128;
    const g4 = Math.sin(time * 0.1 + 5) * 127 + 128;
    const b4 = Math.sin(time * 0.1 + 7) * 127 + 128;
    
    document.body.style.background = `linear-gradient(-45deg, 
        rgb(${r1}, ${g1}, ${b1}), 
        rgb(${r2}, ${g2}, ${b2}), 
        rgb(${r3}, ${g3}, ${b3}), 
        rgb(${r4}, ${g4}, ${b4}))`;
    
    requestAnimationFrame(updateGradientColors);
}

// Start dynamic gradient animation
updateGradientColors();

// Add floating elements animation
function createFloatingElement() {
    const element = document.createElement('div');
    element.style.position = 'fixed';
    element.style.width = Math.random() * 100 + 50 + 'px';
    element.style.height = element.style.width;
    element.style.borderRadius = '50%';
    element.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = window.innerHeight + 100 + 'px';
    element.style.pointerEvents = 'none';
    element.style.animation = `floatUp ${Math.random() * 10 + 15}s linear`;
    element.style.zIndex = '-1';
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, 25000);
}

// Add floating animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.1;
        }
        90% {
            opacity: 0.1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

// Create floating elements periodically
setInterval(createFloatingElement, 2000);

// Smooth scroll for any future navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});