import $ from 'jquery';

const chatBox = (selector = '.chat') => {
    
    $(selector).click(function() {       
      $(this).addClass('chat--open');    
    });
    $(document).on('click', '.chat__close', function() {       
        $(selector).removeClass('chat--open');  
    });
    

};


export default chatBox;