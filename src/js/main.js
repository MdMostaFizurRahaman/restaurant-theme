window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');

require('bootstrap');


//Rotate Arrow
$(document).ready(function(){
    $('.card-link').click(function(){
        $(this).children('.arrow-down').toggleClass('rotate')
    })

    $('#menu-bar').click(function(){
        $(this).toggleClass('change');

        $('.sidebar').toggleClass('sidebar-show')
    })

});
