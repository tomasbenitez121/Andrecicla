$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoHeight: true,
    items: 3,
    slideBy: 3,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
        0: { items: 1, slideBy: 1 },
        600: { items: 2, slideBy: 2 },
        992: { items: 3, slideBy: 3 }
    }
});

// 1. Obtener los elementos clave del DOM
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Comprobar si los elementos existen para evitar errores
if (carouselContainer && prevBtn && nextBtn) {
    // 2. Definir cuánto queremos desplazar
    // Podemos desplazar por el ancho de un solo producto
    // Esto asume que .card-item tiene un ancho fijo.
    const scrollAmount = 300; // Ajusta este valor al ancho real de tu producto + margen

    // 3. Función para el botón "Siguiente"
    nextBtn.addEventListener('click', () => {
        // Desplaza el contenedor hacia la derecha
        carouselContainer.scrollLeft += scrollAmount;
    });

    // 4. Función para el botón "Anterior"
    prevBtn.addEventListener('click', () => {
        // Desplaza el contenedor hacia la izquierda
        carouselContainer.scrollLeft -= scrollAmount;
    });
}

