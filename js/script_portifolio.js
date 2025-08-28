// Acessa a galeria modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var galleryItems = document.getElementsByClassName("portfolio-item");
var currentImageIndex = 0;

// Adiciona um evento de clique a cada miniatura da galeria
for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener('click', function(event) {
        event.preventDefault(); 
        
        var clickedItem = this;
        for (var j = 0; j < galleryItems.length; j++) {
            if (galleryItems[j] === clickedItem) {
                currentImageIndex = j;
                break;
            }
        }
        
        modal.style.display = "flex";
        var imgElement = this.querySelector('img');
        modalImg.src = imgElement.src;
    });
}

// Fecha a modal ao clicar no botão "x" ou na área escura
modal.addEventListener('click', function(event) {
    if (event.target.classList.contains('close') || event.target === modal) {
        modal.style.display = "none";
    }
});

// Navegação entre as imagens
function plusSlides(n) {
    currentImageIndex += n;
    if (currentImageIndex >= galleryItems.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = galleryItems.length - 1;
    }
    modalImg.src = galleryItems[currentImageIndex].querySelector('img').src;
}

// Adiciona os event listeners aos botões de navegação
document.querySelector(".prev").addEventListener('click', function(event) {
    event.stopPropagation(); // Impede o clique de fechar a modal
    plusSlides(-1);
});

document.querySelector(".next").addEventListener('click', function(event) {
    event.stopPropagation(); // Impede o clique de fechar a modal
    plusSlides(1);
});