"use strict"
let quizTotal = 0;
$('.quiz-step__item').each(function(indexInArray, valueOfElement) {
    let quizQuestionBlock = indexInArray + 1
    $(this).attr('data-quiz', quizQuestionBlock);
    quizTotal = quizTotal + 1;
});
let quizQuestionNumber = 1;
let quizTotalLoad = 16.66666666666667;
let quizTotalLoadQuest = 1;
let quizTotalLoadQuestItem = document.getElementById('quiz-total__num')
let quizTotalLoadQuestResult = document.getElementById('quiz-total__num-result')


$('.quiz-step input').click(function(e) {
    if ($('.quiz-step input[type="radio"]').is(':checked')) {
        $('.quiz-step__item-choose-img-check').removeClass('quiz-step__item-choose-img-check-active')
        $(this).parent('.quiz-step__item-choose-img-check').addClass('quiz-step__item-choose-img-check-active')
    }
});
$('.quiz-btns__next').addClass('quiz-btns__next-active');
$('.quiz-btns__next, .quiz-step input[type="radio"]').on("click", function(event) { 
    setTimeout(() => {
        $('.quiz-btns__prev').fadeIn();
        $('.quiz-btns__prev').addClass('quiz-btns__prev-active');
    }, 500);    
    if (quizQuestionNumber < quizTotal) {
        quizQuestionNumber++;
        if(quizQuestionNumber===7){
            setTimeout(() => {
                $('.quiz-btns').addClass('quiz-btns__dis');
                $('.quiz-total__num-dis').hide();
                $('.quiz-total__num-result').fadeIn();
                $('.quiz-wrap').addClass('quiz-wrap__result');
            }, 500);
        }else{
            quizTotalLoad = quizTotalLoad + 16.66666666666667;
            $('.quiz-total__percent-load').css('width', quizTotalLoad+"%")
            quizTotalLoadQuest = quizTotalLoadQuest + 1;
            quizTotalLoadQuestItem.innerHTML = quizTotalLoadQuest;
        }
        setTimeout(() => {
            $('.quiz-step__item.quiz-step__item-active').hide();
            $('.quiz-step__item.quiz-step__item-active').removeClass('quiz-step__item-active');
            $('.quiz-step__item[data-quiz=' + quizQuestionNumber + ']').fadeIn('slow')
            $('.quiz-step__item[data-quiz=' + quizQuestionNumber + ']').addClass('quiz-step__item-active');
        }, 500);
    }
});
$('.quiz-btns__prev').on("click", function() {
    quizTotalLoad = quizTotalLoad - 16.66666666666667;
    $('.quiz-total__percent-load').css('width', quizTotalLoad+"%")
    quizTotalLoadQuest = quizTotalLoadQuest - 1;
    quizTotalLoadQuestItem.innerHTML = quizTotalLoadQuest;
    if (quizQuestionNumber > 2) {
        quizQuestionNumber--;
        $('.quiz-step__item.quiz-step__item-active').hide();
        $('.quiz-step__item.quiz-step__item-active').removeClass('quiz-step__item-active');
        $('.quiz-step__item[data-quiz=' + quizQuestionNumber + ']').fadeIn('slow')
        $('.quiz-step__item[data-quiz=' + quizQuestionNumber + ']').addClass('quiz-step__item-active');
        if(quizQuestionNumber<5){
            $('.quiz-popup__quiz-btns-next').css('display', 'block');
        }
        if(quizQuestionNumber === 1){
            quizQuestionNumber--;
            $('.quiz-btns__prev').hide();
            $('.quiz-btns__prev').removeClass('quiz-btns__prev-active');
        }
    } 
    else if (quizQuestionNumber == 2) {
        quizQuestionNumber--;
        $('.quiz-step__item.quiz-step__item-active').hide();
        $('.quiz-step__item.quiz-step__item-active').removeClass('quiz-step__item-active');
        $('.quiz-step__item[data-quiz=' + quizQuestionNumber + ']').fadeIn('slow')
        $('.quiz-step__item[data-quiz=' + quizQuestionNumber + ']').addClass('quiz-step__item-active');
    }if(quizQuestionNumber === 1){
        $('.quiz-btns__prev').hide();
        $('.quiz-btns__prev').removeClass('quiz-btns__prev-active');
    }
});
// quiz