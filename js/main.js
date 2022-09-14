$(document).ready(function()
{     
    const onBurgerClick= () => $('.nav').toggleClass('show');

    $('.burger').click(onBurgerClick);
    $('.burger close').click(onBurgerClick);



    $('.games__carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        navText:[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>"
        ],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items: 4
            },
            1300:{
                items: 5
            }
        }
    });

    $('.reviews__carousel').owlCarousel({
        loop:true,
        nav:true,
        navText:[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>"
        ],
        responsive:{
            0:{
                items:1,
            },
        }
    });
});