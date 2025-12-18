// ==================== VARIÁVEIS GLOBAIS ====================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

// ==================== NAVEGAÇÃO ====================
// Menu Toggle Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header com scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active link na navegação
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
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
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
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

// ==================== DEPOIMENTOS ====================
function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    testimonials[currentTestimonial].classList.add('active');
}

// Controles do slider de depoimentos
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        showTestimonial(currentTestimonial - 1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        showTestimonial(currentTestimonial + 1);
    });
}

// Auto-play depoimentos
setInterval(() => {
    showTestimonial(currentTestimonial + 1);
}, 5000);

// ==================== FAQ ====================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Fechar todas as FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir a FAQ clicada se não estava ativa
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ==================== FORMULÁRIO DE CONTATO ====================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação básica
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !phone || !subject || !message) {
            showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
        
        // Validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }
        
        // Simular envio (em produção, enviar para servidor)
        showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        contactForm.reset();
        
        // Em produção, você pode usar fetch ou XMLHttpRequest para enviar ao servidor:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, email, phone, subject, message
            })
        })
        .then(response => response.json())
        .then(data => {
            showMessage('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
        });
        */
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ==================== MÁSCARA DE TELEFONE ====================
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

// ==================== BOTÃO VOLTAR AO TOPO ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== ANIMAÇÕES AO SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.area-card, .team-member, .case-card, .blog-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== CONTADOR ANIMADO (ESTATÍSTICAS) ====================
const counters = document.querySelectorAll('.stat-item h4');
const speed = 200; // Velocidade da animação

const countUp = (counter) => {
    const target = counter.textContent.replace(/\D/g, '');
    const increment = Math.ceil(target / speed);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = current + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
            setTimeout(updateCounter, 1);
        } else {
            counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
        }
    };
    
    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('h4');
            if (counter && !counter.classList.contains('counted')) {
                counter.classList.add('counted');
                countUp(counter);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ==================== PREVENÇÃO DE SPAM NO FORMULÁRIO ====================
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 3000; // 3 segundos

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastSubmitTime < SUBMIT_COOLDOWN) {
            e.preventDefault();
            showMessage('Por favor, aguarde alguns segundos antes de enviar novamente.', 'error');
            return;
        }
        lastSubmitTime = currentTime;
    });
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

// ==================== CONSOLE ====================
console.log('%c🎯 Site do Escritório de Advocacia ', 'background: #1a237e; color: #d4af37; font-size: 20px; padding: 10px;');
console.log('%c✨ Desenvolvido com excelência e atenção aos detalhes ', 'background: #d4af37; color: #1a237e; font-size: 14px; padding: 5px;');

// ==================== PERFORMANCE ====================
// Log de performance (apenas em desenvolvimento)
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Página carregada em ${loadTime}ms`);
});
