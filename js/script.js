$('#carouselExampleControls').on('slid.bs.carousel', function (e) {
		
            let currentSlide = $('#carouselExampleControls').find('div.active').index() + 1;
            let totalItems = $('#carouselExampleControls').find('div.carousel-item').length;
            $('.slide-counts-event').html('' + currentSlide + '/' + totalItems + '');
         
                 
});


