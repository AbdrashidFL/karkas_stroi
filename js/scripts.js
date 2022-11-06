"use strict"
$(".result-popup__item-plus").hover(function (event) {
    var elem = $(event.target).parents('.result-popup__item');
    $(elem).find('.result-popup__item-wrap').toggleClass('result-popup__item-wrap-active');
});
// result hover


if ($(window).width() < 720) {
    let specialists = $('.specialists-slider');
    specialists.owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                loop: false,
                items: 1,
                margin: 0,
                dots: false
            },
            720: {
                loop: false,
                items: 1,
                margin: 0,
                dots: false
            }
        }
    });
    $('.specialists-arrow__prev').click(function() {
        specialists.trigger('prev.owl.carousel');
    });
    $('.specialists-arrow__next').click(function() {
        specialists.trigger('next.owl.carousel');
    });
}
// specialist

let steps = $('.steps-slider');
steps.owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    autoHeight:true,
    dots: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1,
            mouseDrag: false,
            dots: false,
            margin: 0
        },
        720: {
            items: 1,
            mouseDrag: false,
            dots: false,
            rewind: true
        }
    }
});
$('.steps-arrow__prev').click(function() {
    steps.trigger('prev.owl.carousel');
});
$('.steps-arrow__next').click(function() {
    steps.trigger('next.owl.carousel');
});


let stepsTotal = 0;
let stepsNumber = 1;
let stepAttrNum = 0;
$('.steps-items__block').each(function(indexInArray, valueOfElement) {
    let stepsItem = indexInArray + 1
    $(this).attr('data-steps', stepsItem);
    stepsTotal = stepsTotal + 1;
});
$('.steps-items__block').on("click", function(event) { 
    stepAttrNum = $(this).attr('data-steps');
    stepsNumber = Number(stepAttrNum);
    $('.steps-items__block.steps-items__block-active').removeClass('steps-items__block-active');
    $('.steps-items__block[data-steps=' + stepsNumber + ']').addClass('steps-items__block-active');
});
$('.steps-arrow__next').on("click", function(event) { 
    if(stepsNumber===11){
        stepsNumber = 0;
    }  
    if (stepsNumber < stepsTotal) {
        stepsNumber++;
        $('.steps-items__block.steps-items__block-active').removeClass('steps-items__block-active');
        $('.steps-items__block[data-steps=' + stepsNumber + ']').addClass('steps-items__block-active');
    }
});
$('.steps-arrow__prev').on("click", function() {
    if(stepsNumber>1){
        stepsNumber--;
        $('.steps-items__block.steps-items__block-active').removeClass('steps-items__block-active');
        $('.steps-items__block[data-steps=' + stepsNumber + ']').addClass('steps-items__block-active');
    }else {
        stepsNumber=11;
        $('.steps-items__block.steps-items__block-active').removeClass('steps-items__block-active');
        $('.steps-items__block[data-steps=' + stepsNumber + ']').addClass('steps-items__block-active');
    }
});
// steps slider
let gallery = $('.gallery-slider');
gallery.owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 14,
    responsive: {
        720: {
            loop: true,
            items: 4,
            dots: false
        }
    }
});
$('.gallery-arrow__prev').click(function() {
    gallery.trigger('prev.owl.carousel');
});
$('.gallery-arrow__next').click(function() {
    gallery.trigger('next.owl.carousel');
});
galleryFirst()
gallery.on('translated.owl.carousel', function(event) {
    galleryFirst()
});
function galleryFirst() {
    gallery.each(function() {
        let total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item').removeClass('gallery-slider__item-active');
        $(this).find('.owl-item.active').each(function(index) {
            if (index === 3) {
                $(this).addClass('gallery-slider__item-active')
            }
        })
        $(this).find('.owl-item.active.cloned').each(function(index) {
            if (index === 4) {
                $(this).addClass('gallery-slider__item-active')
            }
        })
    })
}
owlWidth();
function owlWidth(){
    let owlWidth = $('.gallery .owl-stage').width();
    $('.gallery .owl-stage').width(''+Number(owlWidth)+'rem')
}
// gallery-slider
$('.question-answer__item').on('click', function(event) {
    var elem = $(event.target).parents('.question-answer__item');
    $(elem).find('.question-answer__item-arrow').toggleClass('question-answer__item-arrow-active');
    $(elem).find('.question-answer__item-head').toggleClass('question-answer__item-head-active');
    $(elem).find('.question-answer__item-head-circle').toggleClass('question-answer__item-head-circle-active');
    $(elem).find('.question-answer__item-text').slideToggle();
});
// qusetion slider
$('.favorites-work__btn').on('click', function(event) {
    $('.favorites-work__text').toggleClass('favorites-work__text-active');
    let favoritesBtn = $('.favorites-work__btn');
    if(favoritesBtn.text() == 'Показать больше'){
        favoritesBtn.html('Скрыть');
    }else{
        favoritesBtn.html('Показать больше');
    }
});
// favorites
$('.btn-popup').on("click", function() {
    setTimeout(() => {
        $('.popup').fadeIn();
        $('.popup').css('display', 'flex');
        $('html, body').addClass('no-scroll');
    }, 100);
});
$('.popup-before,.popup-title__out').on("click", function() {
    setTimeout(() => {
        $('.popup').hide();
        $('.popup').css('display', 'none');
        $('html, body').removeClass('no-scroll');
    }, 100);
});
// popup
if ($(window).width() < 720) {
    projectItem()
    function projectItem(){
        let quanItem = $('.project-item').length;
        if(quanItem<=3){
            $('.project-item').addClass('project-item__active');
            $('.project-btn').addClass('project-btn__dis')
        }
        else{
            $('.project-item').slice(0,3).addClass('project-item__active');
            $('.project-item').addClass('btn-popupProject');
        }
        let projectBtn = $('.project-btn');
        projectBtn.on("click", function() {
            $('.project-item').toggleClass('project-item__active2');
            if(projectBtn.text() == 'Показать ещё проекты'){
                projectBtn.html('Скрыть');
            }else{
                projectBtn.html('Показать ещё проекты');
            }
        });
    }
}
$('.btn-popupProject').on("click", function() {
    setTimeout(() => {
        $('.popupProject').fadeIn();
        $('.popupProject').css('display', 'flex');
        $('html, body').addClass('no-scroll');
    }, 100);
});
$('.popupProject-before,.popupProject-info__title-out').on("click", function() {
    setTimeout(() => {
        $('.popupProject').hide();
        $('.popupProject').css('display', 'none');
        $('html, body').removeClass('no-scroll');
    }, 100);
});
// popupProject
$('.btn-popupGrafic').on("click", function() {
    setTimeout(() => {
        $('.popupGrafic').fadeIn();
        $('.popupGrafic').css('display', 'flex');
        $('html, body').addClass('no-scroll');
    }, 100);
});
$('.popupGrafic-before,.popupGrafic-title__out').on("click", function() {
    setTimeout(() => {
        $('.popupGrafic').hide();
        $('.popupGrafic').css('display', 'none');
        $('html, body').removeClass('no-scroll');
    }, 100);
});
// popupGrafic
$('.menu-btn').on("click", function() {
    $('.menu-popup').addClass('menu-popup__active');
    $('html, body').addClass('no-scroll');
});
$('.menu-popup__out').on("click", function() {
    $('.menu-popup').removeClass('menu-popup__active');
    $('html, body').removeClass('no-scroll');
});
// menu popup
if ($(window).width() < 720) {
    let quiz1 = $('.quiz-step__item-choose-slider');
    quiz1.owlCarousel({
        loop: true,
        items: 1,
        margin: 20,
        dots: false,
        responsive: {
            720: {
                items: 1,
                dots: false,
                margin: 20
            }
        }
    });
    $('.quiz-step__item-choose-arrow-prev').click(function() {
        quiz1.trigger('prev.owl.carousel');
    });
    $('.quiz-step__item-choose-arrow-next').click(function() {
        quiz1.trigger('next.owl.carousel');
    });

    let quiz2 = $('.quiz-step__item-choose-slider-2');
    quiz2.owlCarousel({
        loop: true,
        items: 1,
        margin: 20,
        dots: false,
        responsive: {
            720: {
                items: 1,
                dots: false,
                margin: 20
            }
        }
    });
    $('.quiz-step__item-choose-arrow-prev-2').click(function() {
        quiz2.trigger('prev.owl.carousel');
    });
    $('.quiz-step__item-choose-arrow-next-2').click(function() {
        quiz2.trigger('next.owl.carousel');
    });
}