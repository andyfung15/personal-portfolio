// ==================== Copy to Clipboard Function ==================== 
function copyToClipboard(button, dataAttribute, message) {
    const data = button.getAttribute(dataAttribute);
    
    navigator.clipboard.writeText(data).then(() => {
        showToast(message);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ==================== Image Preview Modal ==================== 
const gowhereTrigger = document.querySelector('.gowhere-preview-trigger');
const gowherePreviw = document.querySelector('.gowhere-preview-modal');

if (gowhereTrigger && gowherePreviw) {
    gowhereTrigger.addEventListener('mouseenter', () => {
        gowherePreviw.classList.add('active');
    });
    
    gowhereTrigger.addEventListener('mouseleave', () => {
        gowherePreviw.classList.remove('active');
    });
}

// ==================== Open Link Function ==================== 
function openLink(url) {
    window.open(url, '_blank');
}

// ==================== Toast Notification ==================== 
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger fade in animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after 2 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.experience-card, .achievement-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ==================== Mobile Menu Toggle (if needed) ==================== 
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== Fade In Animation ==================== 
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .nav-link.active {
        color: var(--primary-color);
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// ==================== Typing Animation for Hero Title ==================== 
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}
