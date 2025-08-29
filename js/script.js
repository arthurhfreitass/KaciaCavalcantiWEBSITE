document.addEventListener('DOMContentLoaded', () => {

    // 1. Dados das imagens da galeria
    const galleryData = {
        social: [
            'images/social/social1.jpg',
            'images/social/social2.jpg',
            'images/social/social3.jpg',
            // Adicione mais fotos sociais aqui
        ],
        noivas: [
            'images/noivas/noiva1.jpg',
            'images/noivas/noiva2.jpg',
            'images/noivas/noiva3.jpg',
            // Adicione mais fotos de noivas aqui
        ],
        artisticas: [
            'images/artisticas/artistica1.jpg',
            'images/artisticas/artistica2.jpg',
            'images/artisticas/artistica3.jpg',
            // Adicione mais fotos artísticas aqui
        ]
    };

    // 2. Elementos do HTML
    const galleryCategories = document.querySelectorAll('.category-card');
    const modal = document.getElementById('gallery-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');

    // 3. Função para abrir a modal
    function openModal(category) {
        // Limpa o conteúdo anterior
        modalContent.innerHTML = '';

        // Pega as imagens da categoria selecionada
        const images = galleryData[category];

        // Cria e adiciona as imagens na modal
        images.forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            modalContent.appendChild(imgElement);
        });

        // Exibe a modal
        modal.style.display = 'block';
    }

    // 4. Adiciona evento de clique a cada card de categoria
    galleryCategories.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            openModal(category);
        });
    });

    // 5. Adiciona evento de clique para fechar a modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha a modal se o usuário clicar fora dela
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    // Funcionalidade do botão de voltar ao topo
    window.addEventListener('scroll', () => {
        const scrollButton = document.getElementById('scrollToTopBtn');
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    document.getElementById('scrollToTopBtn').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Funcionalidade do formulário de contato para WhatsApp
    const contactForm = document.querySelector('.contact-form-container form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio tradicional do formulário (que recarregaria a página)

            // Pega os valores dos campos do formulário
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            // Formata a mensagem para o WhatsApp
            const whatsappMessage = `Olá, gostaria de agendar um horário.\n\nNome: ${name}\nE-mail: ${email}\n\nMensagem: ${message}`;

            // Codifica a mensagem para ser usada na URL do WhatsApp
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Substitua 'SEU_NUMERO_DE_TELEFONE' pelo número de telefone da maquiadora, incluindo o código do país (55) e o DDD (15).
            const phoneNumber = '558197484651';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Abre o WhatsApp em uma nova janela para o usuário enviar a mensagem
            window.open(whatsappUrl, '_blank');
        });
    }
    // Funcionalidade do menu hamburger
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Função para abrir/fechar o menu
    function toggleMenu() {
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-active');
    }

    // Adiciona o evento de clique ao botão hamburger
    mobileMenu.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu(); // Chama a função para fechar o menu
            }
        });
    });
});