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

    // Custom Select

    setDefaultOption();

    $(".select__default").click(function(){
            $(this).siblings('.select__option').toggleClass('show');
            $(this).children('.arrow-down').toggleClass('rotate');
      })
      
    $(".select__option li").click(function(){
        $(this).parents('.select__option').children('li').removeClass('selected');
        $(this).addClass('selected');
        setDefaultOption();
        $(this).parents('.select__option').removeClass('show');
    })

    function setDefaultOption(){
        $('.select__option li').each(function(){
            if($(this).hasClass('selected')){
                var value = $(this).attr('data-value');
                var html  = $(this).html();
                var arrow = `<img src="images/svgs/arrow-down.svg" class="arrow-down" alt=""height="10px">`;
                $(this).parents('.select').children('.select__default').html(`<li class="option" data-value=${value}>${html}</li> ${arrow}`)
            }
        })
    }


});



