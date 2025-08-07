document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper.apt', { // Targeting the specific Swiper instance
        // Optional parameters
        direction: 'horizontal',
        loop: true, // If you want looping slides

        // Pagination (dots)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if you need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // --- NEW/MODIFIED OPTIONS FOR SLIDES PER VIEW AUTO ---
        slidesPerView: 'auto', // This is the key change!
        spaceBetween: 20,      // Adjust this value for desired spacing between slides
        centeredSlides: true,  // Recommended for 'auto' mode to center the active slide
        
        // Breakpoints for responsive design (optional, but good for 'auto')
        // This makes sure on smaller screens, it might show fewer slides or adjust spacing
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
                spaceBetween: 10
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 10
            }
        },

   
    });
});