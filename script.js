// ==================== ALVES & BATISTA - MAIN SCRIPT ====================

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// ==================== NAVEGAÇÃO ====================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

// Toggle menu mobile
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Fechar menu ao clicar em link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Header com scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active link na navegação
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== CONTADORES ANIMADOS ====================
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('+') ? '+' : '');
        }
    };
    
    updateCounter();
};

// Observer para contadores
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ==================== AOS (Animate On Scroll) ====================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
        delay: 50
    });
}

// ==================== CASOS DE SUCESSO SLIDER ====================
let currentCase = 0;
const caseItems = document.querySelectorAll('.case-item');
const casePrev = document.querySelector('.case-prev');
const caseNext = document.querySelector('.case-next');
const casesDots = document.querySelector('.cases-dots');

// Criar dots
if (casesDots && caseItems.length > 0) {
    caseItems.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showCase(index));
        casesDots.appendChild(dot);
    });
}

function showCase(index) {
    caseItems.forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    
    if (index >= caseItems.length) {
        currentCase = 0;
    } else if (index < 0) {
        currentCase = caseItems.length - 1;
    } else {
        currentCase = index;
    }
    
    caseItems[currentCase].classList.add('active');
    const dots = document.querySelectorAll('.dot');
    if (dots[currentCase]) {
        dots[currentCase].classList.add('active');
    }
}

if (casePrev) {
    casePrev.addEventListener('click', () => showCase(currentCase - 1));
}

if (caseNext) {
    caseNext.addEventListener('click', () => showCase(currentCase + 1));
}

// Auto-play casos
setInterval(() => {
    if (caseItems.length > 0) {
        showCase(currentCase + 1);
    }
}, 6000);

// ==================== FORMULÁRIO DE CONTATO ====================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    // Máscara de telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
    
    // Validação e envio
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        // Validações
        if (!name || !email || !phone || !subject || !message) {
            showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }
        
        const phoneRegex = /\(\d{2}\)\s\d{4,5}-\d{4}/;
        if (!phoneRegex.test(phone)) {
            showFormMessage('Por favor, insira um telefone válido.', 'error');
            return;
        }
        
        // Desabilitar botão
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        // Simular envio (em produção, integrar com backend)
        setTimeout(() => {
            showFormMessage(
                '✅ Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.',
                'success'
            );
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Abrir WhatsApp automaticamente
            setTimeout(() => {
                const whatsappMessage = `Olá! Sou ${name}. ${message}`;
                if (typeof openWhatsApp === 'function') {
                    openWhatsApp(whatsappMessage);
                }
            }, 2000);
        }, 1500);
        
        // Em produção, usar:
        /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, subject, message })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showFormMessage('Mensagem enviada com sucesso!', 'success');
                contactForm.reset();
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
        */
    });
}

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 6000);
}

// ==================== BOTÃO VOLTAR AO TOPO ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== PARTICLES EFFECT (HERO) ====================
const particlesContainer = document.getElementById('particles');

if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(212, 175, 55, ${Math.random() * 0.5});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${10 + Math.random() * 20}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// ==================== LAZY LOADING DE IMAGENS ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== PERFORMANCE MONITORING ====================
window.addEventListener('load', () => {
    if ('performance' in window) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                        window.performance.timing.navigationStart;
        console.log(`⚡ Página carregada em ${loadTime}ms`);
    }
});

// ==================== ACCESSIBILITY ====================
// Trap focus dentro do menu mobile
if (navMenu) {
    const focusableElements = navMenu.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
        
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.focus();
        }
    });
}

// ==================== CONSOLE ====================
console.log('%c⚖️ ALVES & BATISTA ADVOGADOS ASSOCIADOS', 'background: #1a1a1a; color: #d4af37; font-size: 24px; padding: 16px; font-weight: bold;');
console.log('%c✨ Excelência Jurídica desde 2003', 'background: #d4af37; color: #1a1a1a; font-size: 14px; padding: 8px;');
console.log('%c🔒 Site desenvolvido com as melhores práticas de segurança e performance', 'color: #666; font-size: 12px; padding: 4px;');

// ==================== EXPORT ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showFormMessage,
        animateCounter
    };
}
