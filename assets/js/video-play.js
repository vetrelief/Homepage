window.addEventListener('scroll', videoScroll);
function videoScroll() {

    var windowHeight = window.innerHeight,
    videoEl = document.querySelectorAll('#petVideoAutoPlay[autoplay]');
    var thisVideoEl = videoEl[0],
    videoHeight = thisVideoEl.clientHeight,
    videoClientRect = thisVideoEl.getBoundingClientRect().top;
    if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
    } else {
        thisVideoEl.pause();
    }

}