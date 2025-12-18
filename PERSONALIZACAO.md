# 🎨 Guia de Personalização - Site Escritório de Advocacia

Este guia explica como personalizar o site com as informações do seu escritório.

## 📝 Informações Básicas do Escritório

### 1. Nome do Escritório e Logo

**Arquivo**: `index.html`

Procure por todas as ocorrências de:
```html
<div class="logo">
    <i class="fas fa-balance-scale"></i>
    <span>Advocacia & Direito</span>
</div>
```

Substitua "Advocacia & Direito" pelo nome do seu escritório.

### 2. Título da Página e Meta Tags

**Arquivo**: `index.html` (linhas 1-10)

```html
<title>Escritório de Advocacia - Excelência em Serviços Jurídicos</title>
<meta name="description" content="Escritório de Advocacia - Soluções jurídicas...">
<meta name="keywords" content="advocacia, advogado, direito, jurídico...">
```

Personalize com informações específicas do seu escritório.

## 📞 Informações de Contato

### 1. WhatsApp

**Arquivo**: `index.html` (linha final, antes do botão voltar ao topo)

```html
<a href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta" 
   class="whatsapp-btn">
```

Substitua `5511999999999` pelo seu número com:
- 55 (código do Brasil)
- 11 (DDD)
- 999999999 (número com 9 dígitos)

### 2. Telefones de Contato

**Arquivo**: `index.html`

Procure pela seção de contato:
```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h4>Telefone</h4>
        <p>(11) 3000-0000<br>(11) 99999-9999</p>
    </div>
</div>
```

### 3. E-mails

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>E-mail</h4>
        <p>contato@advocaciaedireito.com.br<br>atendimento@advocaciaedireito.com.br</p>
    </div>
</div>
```

### 4. Endereço

```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h4>Endereço</h4>
        <p>Av. Paulista, 1000 - 10º andar<br>São Paulo - SP, 01310-100</p>
    </div>
</div>
```

### 5. Horário de Atendimento

```html
<div class="contact-item">
    <i class="fas fa-clock"></i>
    <div>
        <h4>Horário de Atendimento</h4>
        <p>Segunda a Sexta: 9h às 18h<br>Sábado: 9h às 13h</p>
    </div>
</div>
```

## 👥 Equipe de Advogados

**Arquivo**: `index.html` (seção #team)

Para cada membro da equipe:

```html
<div class="team-member">
    <div class="member-photo">
        <i class="fas fa-user-tie"></i>
    </div>
    <h3>Dr. João Silva</h3>
    <p class="member-role">Sócio Fundador - Direito Empresarial</p>
    <p class="member-bio">OAB/SP 123.456 - Especialista em Direito Empresarial com 25 anos...</p>
    <div class="member-social">
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
    </div>
</div>
```

**Personalize**:
- Nome do advogado
- Área de especialização
- Número da OAB
- Biografia
- Links de redes sociais (LinkedIn, e-mail)

**Dica**: Para adicionar mais membros, copie todo o bloco `<div class="team-member">...</div>`

## 🏛️ Áreas de Atuação

**Arquivo**: `index.html` (seção #areas)

Você tem 9 áreas pré-configuradas. Para editar cada uma:

```html
<div class="area-card">
    <div class="area-icon">
        <i class="fas fa-briefcase"></i>
    </div>
    <h3>Direito Empresarial</h3>
    <p>Assessoria completa para empresas, contratos, fusões...</p>
    <a href="#contact" class="area-link">Saiba mais <i class="fas fa-arrow-right"></i></a>
</div>
```

**Para adicionar nova área**:
1. Copie um bloco de `area-card`
2. Escolha um ícone em [Font Awesome](https://fontawesome.com/icons)
3. Altere título e descrição

**Ícones sugeridos**:
- `fa-briefcase` - Empresarial
- `fa-home` - Imobiliário
- `fa-hand-holding-usd` - Trabalhista
- `fa-family` - Família
- `fa-shield-alt` - Penal
- `fa-user-shield` - Consumidor
- `fa-file-contract` - Civil
- `fa-calculator` - Tributário
- `fa-landmark` - Previdenciário

## 💬 Depoimentos

**Arquivo**: `index.html` (seção #testimonials)

```html
<div class="testimonial-card">
    <div class="testimonial-rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">"Excelente atendimento! A equipe me ajudou..."</p>
    <div class="testimonial-author">
        <div class="author-icon">
            <i class="fas fa-user"></i>
        </div>
        <div>
            <h4>Carlos Mendes</h4>
            <p>Empresário</p>
        </div>
    </div>
</div>
```

**Personalize**: Depoimento, nome do cliente e profissão.

## 📰 Blog

**Arquivo**: `index.html` (seção #blog)

```html
<article class="blog-card">
    <div class="blog-image">
        <i class="fas fa-newspaper"></i>
    </div>
    <div class="blog-content">
        <span class="blog-date"><i class="far fa-calendar"></i> 15 de Dezembro, 2024</span>
        <h3>Nova Lei de Proteção de Dados: O que muda para as empresas</h3>
        <p>Entenda as principais mudanças da LGPD...</p>
        <a href="#" class="blog-read-more">Ler mais <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

## 📊 Estatísticas

**Arquivo**: `index.html` (seção .about-stats)

```html
<div class="stat-item">
    <i class="fas fa-trophy"></i>
    <h4>500+</h4>
    <p>Casos de Sucesso</p>
</div>
```

**Personalize**: Números e descrições conforme os dados reais do escritório.

## 🎨 Cores e Estilo

**Arquivo**: `styles.css` (início do arquivo)

```css
:root {
    --primary-color: #1a237e;      /* Azul principal */
    --secondary-color: #c9b037;    /* Dourado secundário */
    --accent-color: #d4af37;       /* Dourado accent */
    --dark-color: #0d1117;
    --light-color: #f8f9fa;
}
```

**Sugestões de paletas**:

### Clássico (atual)
- Primária: `#1a237e` (azul escuro)
- Accent: `#d4af37` (dourado)

### Moderno
- Primária: `#2c3e50` (azul acinzentado)
- Accent: `#e74c3c` (vermelho)

### Tradicional
- Primária: `#1e3a8a` (azul royal)
- Accent: `#92400e` (marrom)

### Corporativo
- Primária: `#1f2937` (cinza escuro)
- Accent: `#10b981` (verde)

## 🔗 Redes Sociais

**Arquivo**: `index.html` (várias seções)

Procure por:
```html
<div class="footer-social">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-youtube"></i></a>
</div>
```

Substitua `#` pelos links reais das redes sociais:
- Facebook: `https://facebook.com/seuperfil`
- Instagram: `https://instagram.com/seuperfil`
- LinkedIn: `https://linkedin.com/company/seuperfil`
- YouTube: `https://youtube.com/@seuperfil`

## ❓ FAQ (Perguntas Frequentes)

**Arquivo**: `index.html` (seção #faq)

```html
<div class="faq-item">
    <button class="faq-question">
        <span>Como funciona a primeira consulta?</span>
        <i class="fas fa-plus"></i>
    </button>
    <div class="faq-answer">
        <p>A primeira consulta é gratuita...</p>
    </div>
</div>
```

**Para adicionar nova pergunta**: Copie o bloco `faq-item` completo.

## 📧 Formulário de Contato

Para conectar o formulário a um backend real:

**Arquivo**: `script.js` (função do formulário)

Descomente e ajuste:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name, email, phone, subject, message
    })
})
```

Substitua `/api/contact` pelo endpoint do seu backend.

## 🖼️ Adicionar Imagens Reais

Atualmente o site usa ícones. Para adicionar imagens reais:

### 1. Logo

Substitua em `index.html`:
```html
<!-- De: -->
<div class="logo">
    <i class="fas fa-balance-scale"></i>
    <span>Advocacia & Direito</span>
</div>

<!-- Para: -->
<div class="logo">
    <img src="images/logo.png" alt="Logo do Escritório">
</div>
```

### 2. Fotos da Equipe

```html
<!-- De: -->
<div class="member-photo">
    <i class="fas fa-user-tie"></i>
</div>

<!-- Para: -->
<div class="member-photo">
    <img src="images/joao-silva.jpg" alt="Dr. João Silva">
</div>
```

### 3. Hero Background

Em `styles.css`:
```css
.hero {
    background-image: url('images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

## 📱 Google Maps

Para adicionar mapa do escritório:

**Arquivo**: `index.html` (seção #contact)

Adicione antes do formulário:
```html
<div class="map-container">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!..." 
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

Para obter o código:
1. Acesse Google Maps
2. Busque seu endereço
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código iframe

## 🚀 Dicas de Otimização

### SEO
1. Use títulos descritivos únicos
2. Adicione alt text em todas as imagens
3. Mantenha URLs amigáveis
4. Crie sitemap.xml
5. Configure robots.txt

### Performance
1. Otimize imagens (use WebP)
2. Minifique CSS e JavaScript
3. Use CDN para bibliotecas
4. Implemente cache
5. Comprima arquivos (gzip)

### Acessibilidade
1. Use HTML semântico
2. Adicione labels em formulários
3. Teste com leitores de tela
4. Garanta contraste adequado
5. Navegação por teclado

## 📞 Suporte

Para dúvidas sobre personalização, consulte:
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Boa sorte com seu novo site!** ⚖️✨
