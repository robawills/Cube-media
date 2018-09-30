import $ from 'jquery';

const menu = (selector = '.hamburger') => {
    
    $(selector).click(function() {       
      $(this).toggleClass('menu-open');    
    });

    $('.js-off-canvas-overlay').click(function() {       
      $(selector).removeClass('menu-open');    
    });

};


export default menu;