(function($){
    // Carrossel simples, acessível e responsivo
    $(function(){
        var $carousel = $('.carousel'),
            $track = $carousel.find('.carousel-track'),
            $slides = $track.find('.carousel-slide'),
            total = $slides.length,
            current = 0,
            interval = 4500,
            timer = null,
            $dots = $carousel.find('.carousel-dots');

        if(!$carousel.length || total === 0) return;

        // criar dots
        for(var i=0;i<total;i++){
            $dots.append('<button class="carousel-dot" role="tab" aria-controls="slide-'+i+'" aria-label="Slide '+(i+1)+'"></button>');
            $slides.eq(i).attr('id','slide-'+i);
        }
        $dots = $carousel.find('.carousel-dot');

        function show(idx){
            if(idx === current) return;
            $slides.eq(current).removeClass('is-visible').attr('aria-hidden','true').stop(true,true).fadeOut(500);
            $slides.eq(idx).addClass('is-visible').attr('aria-hidden','false').stop(true,true).fadeIn(500);
            $dots.removeClass('active').eq(idx).addClass('active').attr('aria-selected','true');
            current = idx;
        }

        function next(){
            show((current+1) % total);
        }
        function prev(){
            show((current-1+total) % total);
        }
        function start(){
            stop();
            timer = setInterval(next, interval);
        }
        function stop(){
            if(timer){ clearInterval(timer); timer = null; }
        }

        // init (esconde todos exceto o primeiro)
        $slides.attr('aria-hidden','true').hide().css({position:'absolute', top:0, left:0, width:'100%', height:'100%'});
        $slides.eq(0).addClass('is-visible').show().attr('aria-hidden','false');
        $dots.eq(0).addClass('active').attr('aria-selected','true');

        // events
        $carousel.on('mouseenter touchstart', stop).on('mouseleave touchend', start);
        $carousel.find('.carousel-next').on('click', function(e){ e.preventDefault(); stop(); next(); start(); });
        $carousel.find('.carousel-prev').on('click', function(e){ e.preventDefault(); stop(); prev(); start(); });
        $dots.on('click', function(){ var idx = $(this).index(); stop(); show(idx); start(); });

        // keyboard navigation
        $(document).on('keydown', function(e){
            if(!$carousel.is(':visible')) return;
            if(e.key === 'ArrowRight') { stop(); next(); start(); }
            if(e.key === 'ArrowLeft') { stop(); prev(); start(); }
        });

        // swipe (touch)
        var startX = null;
        $carousel.on('touchstart', function(e){ startX = e.originalEvent.touches[0].clientX; });
        $carousel.on('touchend', function(e){
            if(startX === null) return;
            var endX = e.originalEvent.changedTouches[0].clientX;
            var diff = startX - endX;
            if(Math.abs(diff) > 40){
                if(diff > 0) { stop(); next(); start(); }
                else { stop(); prev(); start(); }
            }
            startX = null;
        });

        start();
    });
})(jQuery);