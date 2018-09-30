import $ from 'jquery';

const headerbg = (selector = '.header--light') => {
    
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 300) {
          $(selector).addClass("header--dark");
      } else {
          $(selector).removeClass("header--dark");
      }
  });

};




export default headerbg;


