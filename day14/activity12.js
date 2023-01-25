console.log('Samia Munmun')
/*jQuery program */
$('document').ready(function(){
    //example 1
    $('.para2').css('border','ridge 5px green')
    /*JS
     let p2 = document.querySelector('.para2')
    p2.style.border = 'ridge 5px green'
    */
   $('.a').css({'color':'magenta', 'padding': '1em 2em', 'background-color':'lightgreen'})

   $('#pExamples').css('text-align','center')

    //EXAMPLE 2
    $('div > p:odd').css('color','red')
    $('#pExamples > p.para5').css('font-size','1.3 em')
    // select next adjacent element
    $('p + div').css('border','orange dotted 1em')

    //Example 5
    let p4 = $('.para4')
    p4.prev().css('background-color','pink')
    p4.next().css('background-color','gray')
    p4.parent().css('font-family','Arial Black')

    //example 6
    $('.p_append').append('NEW MESSAGE')
    $('.p_prepend').prepend('NEW LINE')
    $('.p_prepend').append('NEW LINE')

    //example 7
    $('<h3> NEW HEADING </h3>').insertAfter('.p_append').css('background-color','lightblue')

    //Example 10
    
    $('#btnProperties').click(function(){
        $('.square').css('background-color','pink')
    })
    $('#addClass').click(function(){
        $('.square').addClass('btnColor')
    })
    $('#removeClass').click(function(){
        $('.square').removeClass('btnColor')
    })
    $('#toggleClass').click(function(){
        $('.square').toggleClass('btnColor')
    })

    //example  12
    function hoverCircle(){
        $('.circle').addClass('btnColor')
        $('.circle').html('<p> Circle was hovered! </p>')
    }

    function resizeWindow(){
        $('.circle').html('<p> Window was resized! </p>')
    }
    function dblClick(){
        $('.circle').html('<p> Double Click! </p>')
    }
    $('.circle').hover(hoverCircle)
    $(window).resize(resizeWindow)
    $('.circle').dblclick(dblClick)
    
})

/* JS code  */