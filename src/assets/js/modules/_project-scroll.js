import $ from 'jquery';

const projectscroll = () => {

    
    $(document).ready(function () {
        var mobile = false;

        // Detect mobile
        function isMobile() {
            if (window.matchMedia("screen and (max-width: 900px)").matches) {
                mobile = true;
            } else {
                mobile = false;
            }
        }
    
        // calc scroll percentage of the document
        function calcScrollPerc() {
            var 
                posY = $(window).scrollTop(),
                posH = $(document).height(),
                scrollH = $(window).height(),
                // limit to only 2 number after comma 
                perc = Math.ceil(((posY) / (posH - scrollH)) * 1000) / 1000;
    
            return perc;
        }
        
        // animation home
        function parralaxAnimation() {
            var perc = calcScrollPerc(),
                colLH = $('#col-left').height(),
                colRH = $('#col-right').height(),
                diffH = perc * Math.abs(colLH - colRH) - 0;
            
            if (mobile === false) { // check for desktop
                // animate the smallest column
                if (colLH > colRH) { // right colum smaller
                    $('#col-right').css({ 'transform': 'translateY(+' + diffH + 'px)' });
                } else if (colRH > colLH) { // left colum smaller
                    $('#col-left').css({ 'transform': 'translateY(+' + diffH + 'px)' });
                }
            } else { // restore original position on mobile
                $('#col-right').css({ 'transform': 'translateY(0)' });
                $('#col-left').css({ 'transform': 'translateY(0)' });
            }
        }
    
        //on load
        isMobile();
        parralaxAnimation();
        
        // on scroll / resize
        $(window).on('resize scroll', function () {
            parralaxAnimation();
            // to the top icon
            // $('#tothetop').initCanvas();
        });
        
    
    
    });

    
    

};


export default projectscroll;

