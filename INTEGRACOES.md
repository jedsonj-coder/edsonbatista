# 🔌 Guia de Integrações e Melhorias - Site Escritório de Advocacia

Este guia apresenta integrações úteis e melhorias que podem ser implementadas no site.

## 📧 Integração de E-mail

### 1. EmailJS (Gratuito - Recomendado para Início)

**Passos**:
1. Cadastre-se em [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de e-mail
3. Crie um template
4. Adicione no `index.html` antes do `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("SUA_PUBLIC_KEY");
</script>
```

5. No `script.js`, substitua o envio do formulário:

```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', contactForm)
        .then(() => {
            showMessage('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
        }, (error) => {
            showMessage('Erro ao enviar. Tente novamente.', 'error');
        });
});
```

### 2. Formspree (Alternativa Simples)

```html
<form action="https://formspree.io/f/SEU_FORM_ID" method="POST">
    <!-- seus campos -->
</form>
```

### 3. Backend Próprio (PHP)

Crie `send-email.php`:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = "seu-email@escritorio.com.br";
    $subject = "Novo contato do site - " . $data['subject'];
    
    $message = "
    Nome: {$data['name']}
    E-mail: {$data['email']}
    Telefone: {$data['phone']}
    Assunto: {$data['subject']}
    Mensagem: {$data['message']}
    ";
    
    $headers = "From: noreply@seusite.com.br\r\n";
    $headers .= "Reply-To: {$data['email']}\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

No `script.js`:
```javascript
fetch('send-email.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email, phone, subject, message})
})
.then(res => res.json())
.then(data => {
    if (data.success) {
        showMessage('Mensagem enviada!', 'success');
    }
});
```

## 💬 Chat Online

### 1. Tawk.to (Gratuito)

Adicione antes do `</body>` em `index.html`:

```html
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/SEU_WIDGET_ID/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

### 2. WhatsApp Business Widget

No `styles.css`, adicione:

```css
.whatsapp-widget {
    position: fixed;
    bottom: 100px;
    right: 30px;
    background: #25D366;
    padding: 15px 20px;
    border-radius: 30px;
    color: white;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    z-index: 998;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.whatsapp-widget:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0,0,0,0.3);
}
```

No `index.html`:

```html
<div class="whatsapp-widget" onclick="window.open('https://wa.me/5511999999999', '_blank')">
    <i class="fab fa-whatsapp" style="font-size: 24px;"></i>
    <span>Fale conosco</span>
</div>
```

## 📊 Analytics

### 1. Google Analytics 4

Adicione no `<head>` do `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Meta Pixel (Facebook)

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 📅 Agendamento Online

### 1. Calendly

```html
<!-- Link para agendamento -->
<a href="https://calendly.com/seu-usuario/30min" 
   class="btn btn-primary"
   target="_blank">
    Agendar Consulta
</a>

<!-- Ou widget inline -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/seu-usuario/30min" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### 2. Google Calendar

Crie botão personalizado:

```html
<a href="https://calendar.google.com/calendar/appointments/schedules/..." 
   class="btn btn-primary"
   target="_blank">
    Agendar Reunião
</a>
```

## 🔍 SEO Avançado

### 1. Rich Snippets (Schema.org)

Adicione no `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advocacia & Direito",
  "image": "https://seusite.com.br/logo.jpg",
  "description": "Escritório de advocacia especializado em...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "telephone": "+55-11-3000-0000",
  "email": "contato@seusite.com.br",
  "url": "https://seusite.com.br",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
</script>
```

### 2. Open Graph (Redes Sociais)

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://seusite.com.br">
<meta property="og:title" content="Advocacia & Direito - Excelência Jurídica">
<meta property="og:description" content="Escritório de advocacia com mais de 20 anos...">
<meta property="og:image" content="https://seusite.com.br/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://seusite.com.br">
<meta name="twitter:title" content="Advocacia & Direito">
<meta name="twitter:description" content="Escritório de advocacia com mais de 20 anos...">
<meta name="twitter:image" content="https://seusite.com.br/twitter-image.jpg">
```

## 🔐 Segurança

### 1. HTTPS

Use certificado SSL gratuito via:
- [Let's Encrypt](https://letsencrypt.org/)
- Cloudflare (automático)
- Hosting provider

### 2. Headers de Segurança

No `.htaccess` (Apache):

```apache
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### 3. reCAPTCHA (Anti-spam)

1. Obtenha chaves em [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Adicione no formulário:

```html
<div class="g-recaptcha" data-sitekey="SUA_SITE_KEY"></div>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

## 📱 PWA (Progressive Web App)

### 1. Manifest

Crie `manifest.json`:

```json
{
  "name": "Advocacia & Direito",
  "short_name": "Advocacia",
  "description": "Escritório de Advocacia",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a237e",
  "theme_color": "#1a237e",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

No `<head>`:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#1a237e">
```

### 2. Service Worker

Crie `sw.js`:

```javascript
const CACHE_NAME = 'advocacia-v1';
const urlsToCache = ['/', '/styles.css', '/script.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

No `script.js`:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 💳 Pagamentos Online

### 1. Mercado Pago

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
const mp = new MercadoPago('SUA_PUBLIC_KEY');
// Implementar checkout
</script>
```

### 2. PagSeguro

```html
<script src="https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"></script>
```

## 📚 Blog Dinâmico

### Opção 1: WordPress Headless

Use WordPress apenas como backend via API REST:

```javascript
fetch('https://seu-wordpress.com/wp-json/wp/v2/posts')
  .then(res => res.json())
  .then(posts => {
    // Renderizar posts no site
  });
```

### Opção 2: Markdown + GitHub

1. Crie pasta `blog/` com arquivos `.md`
2. Use biblioteca como `marked.js` para converter
3. Automatize com GitHub Actions

## 🗺️ Localização

### Google Maps API

```html
<script src="https://maps.googleapis.com/maps/api/js?key=SUA_API_KEY"></script>
<div id="map" style="height: 400px;"></div>

<script>
function initMap() {
  const location = {lat: -23.561684, lng: -46.655981};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  new google.maps.Marker({
    position: location,
    map: map,
    title: 'Advocacia & Direito'
  });
}
initMap();
</script>
```

## 📊 CRM Integration

### 1. HubSpot

```html
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/SEU_PORTAL_ID.js"></script>
```

### 2. RD Station

```html
<script src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
<script>
  new RDStationForms('form-name', 'UA-000000-0').createForm();
</script>
```

## 🚀 Performance

### 1. CDN

Use Cloudflare:
1. Cadastre domínio
2. Altere nameservers
3. Configure cache e minificação

### 2. Lazy Loading

Já implementado no `script.js`, mas para imagens:

```html
<img src="placeholder.jpg" data-src="imagem-real.jpg" loading="lazy" alt="Descrição">
```

### 3. Minificação

Ferramentas:
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)
- [HTML Minifier](https://htmlcompressor.com/)

## 📱 Push Notifications

```javascript
if ('Notification' in window && 'serviceWorker' in navigator) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Bem-vindo!', {
        body: 'Obrigado por visitar nosso site.',
        icon: 'icon.png'
      });
    }
  });
}
```

## 🎨 Customização Avançada

### Modo Escuro

No `styles.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #3949ab;
    --dark-color: #ffffff;
    --light-color: #1a1a1a;
    --text-dark: #e0e0e0;
  }
  
  body {
    background: #121212;
  }
}
```

### Multilíngue

Use biblioteca i18next ou implemente manualmente:

```javascript
const translations = {
  pt: {
    title: 'Advocacia & Direito',
    subtitle: 'Excelência em Serviços Jurídicos'
  },
  en: {
    title: 'Law & Advocacy',
    subtitle: 'Excellence in Legal Services'
  }
};
```

## 📞 Suporte e Recursos

### Ferramentas Úteis
- [GTmetrix](https://gtmetrix.com/) - Teste de performance
- [PageSpeed Insights](https://pagespeed.web.dev/) - Otimização Google
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoria
- [Wave](https://wave.webaim.org/) - Acessibilidade
- [SSL Labs](https://www.ssllabs.com/) - Teste SSL

### Comunidades
- [Stack Overflow](https://stackoverflow.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)

---

**Boas implementações!** 🚀✨
