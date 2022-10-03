   
    window.addEventListener('scroll', videoScroll);

    function videoScroll() {

        var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('#petVideoAutoPlay[autoplay]');
        for (var i = 0; i < videoEl.length; i++) {

        var thisVideoEl = videoEl[i],
            
            videoHeight = thisVideoEl.clientHeight,
            videoClientRect = thisVideoEl.getBoundingClientRect().top;
        if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
            thisVideoEl.play();
        } else {
            thisVideoEl.pause();
        }

        }

    }