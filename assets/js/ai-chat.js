// ==================== IA CHAT - SOFIA ====================
// Assistente virtual inteligente para Alves & Batista

class AIChatBot {
    constructor() {
        this.responses = {
            // Saudações
            'ola|oi|bom dia|boa tarde|boa noite': [
                'Olá! 👋 Seja bem-vindo(a) ao escritório Alves & Batista. Como posso ajudá-lo(a) hoje?',
                'Oi! 😊 É um prazer falar com você. Em que posso ser útil?'
            ],
            
            // Áreas de atuação
            'areas|especialidades|atua|servicos': [
                '🏛️ O escritório Alves & Batista atua em diversas áreas do Direito:\n\n' +
                '⚖️ Direito Empresarial\n' +
                '🏠 Direito Imobiliário\n' +
                '💼 Direito Trabalhista\n' +
                '👨‍👩‍👧 Direito de Família\n' +
                '🛡️ Direito Penal\n' +
                '💰 Direito Tributário\n\n' +
                'Sobre qual área você gostaria de saber mais?'
            ],
            
            // Direito Empresarial
            'empresarial|empresa|comercial|societario': [
                '💼 <strong>Direito Empresarial</strong>\n\n' +
                'Oferecemos assessoria completa para empresas:\n' +
                '• Contratos comerciais\n' +
                '• Fusões e aquisições (M&A)\n' +
                '• Compliance corporativo\n' +
                '• Recuperação judicial\n' +
                '• Due diligence\n\n' +
                'Gostaria de agendar uma consulta sobre este tema?'
            ],
            
            // Direito de Família
            'familia|divorcio|pensao|guarda|inventario': [
                '👨‍👩‍👧 <strong>Direito de Família</strong>\n\n' +
                'Atuamos com sensibilidade em:\n' +
                '• Divórcio consensual e litigioso\n' +
                '• Guarda de filhos\n' +
                '• Pensão alimentícia\n' +
                '• Inventário e partilha\n' +
                '• Planejamento sucessório\n\n' +
                'Podemos ajudá-lo(a) com uma consulta personalizada.'
            ],
            
            // Direito Trabalhista
            'trabalhista|trabalho|clt|rescisao': [
                '💼 <strong>Direito Trabalhista</strong>\n\n' +
                'Defendemos seus direitos:\n' +
                '• Ações trabalhistas\n' +
                '• Rescisões indevidas\n' +
                '• Horas extras\n' +
                '• Danos morais\n' +
                '• Consultoria preventiva\n\n' +
                'Vamos conversar sobre seu caso?'
            ],
            
            // Direito Penal
            'penal|criminal|defesa|processo': [
                '🛡️ <strong>Direito Penal</strong>\n\n' +
                'Defesa técnica de excelência:\n' +
                '• Defesa criminal\n' +
                '• Habeas corpus\n' +
                '• Recursos\n' +
                '• Tribunal do júri\n' +
                '• Crimes econômicos\n\n' +
                'Entre em contato urgentemente para analisarmos seu caso.'
            ],
            
            // Agendamento
            'agendar|consulta|marcar|horario|atendimento': [
                '📅 <strong>Agendar Consulta</strong>\n\n' +
                'Ótimo! Para agendar sua consulta, você pode:\n\n' +
                '1️⃣ Ligar: <a href="tel:1134567890">(11) 3456-7890</a>\n' +
                '2️⃣ WhatsApp: <a href="https://wa.me/5511987654321" target="_blank">(11) 98765-4321</a>\n' +
                '3️⃣ Preencher o formulário no site\n\n' +
                '⏰ Atendemos de Segunda a Sexta: 8h às 19h | Sábado: 9h às 13h\n\n' +
                'Qual opção prefere?'
            ],
            
            // Horário
            'horario|funciona|aberto|fecha': [
                '⏰ <strong>Horário de Atendimento</strong>\n\n' +
                '🗓️ Segunda a Sexta-feira: 8h às 19h\n' +
                '🗓️ Sábado: 9h às 13h\n' +
                '⛔ Domingo: Fechado\n\n' +
                'Estamos à sua disposição! 😊'
            ],
            
            // Localização
            'endereco|local|onde|fica': [
                '📍 <strong>Nosso Endereço</strong>\n\n' +
                '🏢 Av. Paulista, 1000 - 15º andar\n' +
                'Bela Vista, São Paulo - SP\n' +
                'CEP: 01310-100\n\n' +
                '🚇 Próximo ao metrô Brigadeiro\n' +
                '🅿️ Estacionamento no local\n\n' +
                '<a href="https://goo.gl/maps/exemplo" target="_blank">Ver no mapa 🗺️</a>'
            ],
            
            // Contato
            'telefone|email|contato|falar': [
                '📞 <strong>Fale Conosco</strong>\n\n' +
                '📱 Telefone: <a href="tel:1134567890">(11) 3456-7890</a>\n' +
                '💬 WhatsApp: <a href="https://wa.me/5511987654321" target="_blank">(11) 98765-4321</a>\n' +
                '📧 E-mail: <a href="mailto:contato@alvesbatista.adv.br">contato@alvesbatista.adv.br</a>\n\n' +
                'Estamos prontos para atendê-lo(a)! ✨'
            ],
            
            // Honorários
            'valor|preco|custo|honorario|pagar': [
                '💰 <strong>Sobre Honorários</strong>\n\n' +
                'Os honorários variam conforme a complexidade do caso. Oferecemos:\n\n' +
                '✅ Primeira consulta GRATUITA\n' +
                '✅ Análise detalhada do caso\n' +
                '✅ Orçamento transparente\n' +
                '✅ Diversas formas de pagamento\n\n' +
                'Agende uma consulta para recebermos um orçamento personalizado!'
            ],
            
            // Equipe
            'equipe|advogados|quem|profissionais': [
                '👥 <strong>Nossa Equipe</strong>\n\n' +
                'Contamos com advogados altamente qualificados:\n\n' +
                '⚖️ Dr. Ricardo Alves - Sócio Fundador\n' +
                '⚖️ Dra. Juliana Batista - Sócia Fundadora\n' +
                '⚖️ Dr. Carlos Mendes - Direito Penal\n' +
                '⚖️ Dra. Fernanda Costa - Direito Trabalhista\n\n' +
                'Todos com mestrado, especializações e vasta experiência!'
            ],
            
            // Sucesso
            'resultado|sucesso|ganhar|vencer': [
                '🏆 <strong>Resultados Comprovados</strong>\n\n' +
                '✅ Mais de 2.000 casos atendidos\n' +
                '✅ 95% de taxa de êxito\n' +
                '✅ 20 anos de experiência\n' +
                '✅ Atuação em todo Brasil\n\n' +
                'Seu sucesso é nossa missão! 💪'
            ],
            
            // Agradecimento
            'obrigado|obrigada|valeu|agradeco': [
                'Por nada! 😊 Foi um prazer ajudá-lo(a).\n\n' +
                'Se precisar de mais alguma coisa, estou aqui! O escritório Alves & Batista está à sua disposição. ⚖️✨'
            ]
        };
        
        this.defaultResponse = [
            'Desculpe, não entendi sua pergunta. 😅\n\n' +
            'Posso ajudá-lo(a) com:\n' +
            '• Áreas de atuação\n' +
            '• Agendar consulta\n' +
            '• Horários e localização\n' +
            '• Informações sobre honorários\n\n' +
            'Ou você pode falar diretamente com nossa equipe: <a href="https://wa.me/5511987654321" target="_blank">WhatsApp</a>'
        ];
        
        this.init();
    }
    
    init() {
        this.chatWidget = document.getElementById('aiChatWidget');
        this.chatBody = document.getElementById('aiChatBody');
        this.chatInput = document.getElementById('aiChatInput');
        this.chatForm = document.getElementById('aiChatForm');
        this.chatBtn = document.getElementById('aiChatBtn');
        this.openAIChat = document.getElementById('openAIChat');
        this.closeBtn = document.getElementById('aiChatClose');
        this.minimizeBtn = document.getElementById('aiChatMinimize');
        
        this.setupEventListeners();
        this.setupSuggestions();
    }
    
    setupEventListeners() {
        // Abrir chat
        if (this.chatBtn) {
            this.chatBtn.addEventListener('click', () => this.toggleChat());
        }
        
        if (this.openAIChat) {
            this.openAIChat.addEventListener('click', (e) => {
                e.preventDefault();
                this.openChat();
            });
        }
        
        // Fechar chat
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeChat());
        }
        
        // Minimizar chat
        if (this.minimizeBtn) {
            this.minimizeBtn.addEventListener('click', () => this.closeChat());
        }
        
        // Enviar mensagem
        if (this.chatForm) {
            this.chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.sendMessage();
            });
        }
    }
    
    setupSuggestions() {
        const suggestions = document.querySelectorAll('.ai-suggestion');
        suggestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                this.chatInput.value = message;
                this.sendMessage();
            });
        });
    }
    
    toggleChat() {
        this.chatWidget.classList.toggle('active');
        if (this.chatWidget.classList.contains('active')) {
            this.chatInput.focus();
        }
    }
    
    openChat() {
        this.chatWidget.classList.add('active');
        this.chatInput.focus();
    }
    
    closeChat() {
        this.chatWidget.classList.remove('active');
    }
    
    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        // Adicionar mensagem do usuário
        this.addMessage(message, 'user');
        
        // Limpar input
        this.chatInput.value = '';
        
        // Simular digitação
        this.showTyping();
        
        // Responder após 1 segundo
        setTimeout(() => {
            this.hideTyping();
            const response = this.getResponse(message);
            this.addMessage(response, 'bot');
        }, 1000);
    }
    
    addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message-${type}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'ai-message-avatar';
        avatar.innerHTML = type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'ai-message-content';
        content.innerHTML = `<p>${text}</p>`;
        
        if (type === 'bot') {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(content);
        } else {
            messageDiv.appendChild(content);
            messageDiv.appendChild(avatar);
        }
        
        this.chatBody.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    getResponse(message) {
        const normalizedMessage = message.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // Remove acentos
        
        for (const [pattern, responses] of Object.entries(this.responses)) {
            const regex = new RegExp(pattern, 'i');
            if (regex.test(normalizedMessage)) {
                return this.getRandomResponse(responses);
            }
        }
        
        return this.getRandomResponse(this.defaultResponse);
    }
    
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-message-bot typing-indicator';
        typingDiv.id = 'typingIndicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'ai-message-avatar';
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'ai-message-content';
        content.innerHTML = '<p><i class="fas fa-ellipsis-h"></i> Sofia está digitando...</p>';
        
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(content);
        
        this.chatBody.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) {
            typing.remove();
        }
    }
    
    scrollToBottom() {
        this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }
}

// Inicializar o chatbot quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new AIChatBot();
});

// WhatsApp Integration
function openWhatsApp(message = '') {
    const phone = '5511987654321';
    const defaultMessage = 'Olá! Gostaria de agendar uma consulta com Alves & Batista Advogados';
    const text = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AIChatBot, openWhatsApp };
}
