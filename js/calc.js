"use strict"
let sliderPriceLine = document.getElementById('calc-item__priceline');
let sliderGiftLine = document.getElementById('calc-item__giftline');
let sliderCreditLine = document.getElementById('calc-item__creditline');
noUiSlider.create(sliderPriceLine, {
    start: [20000000],
    step: 10000,
    range: {
        'min': 200000,
        'max': 100000000
    },
    tooltips: [false],
    connect: 'lower',
    format: wNumb({
        decimals: 0
    })
});
noUiSlider.create(sliderGiftLine, {
    start: [1000000],
    step: 10000,
    range: {
        'min': 200000,
        'max': 10000000
    },
    tooltips: [false],
    connect: 'lower',
    format: wNumb({
        decimals: 0
    })
});
noUiSlider.create(sliderCreditLine, {
    start: [3],
    step: 1,
    range: {
        'min': 1,
        'max': 30
    },
    tooltips: [false],
    connect: 'lower',
    format: wNumb({
        decimals: 0
    })
});

$('.calc-item__price').change(function() {
    sliderPriceLine.noUiSlider.set(this.value);
});
$('.calc-item__gift').change(function() {
    sliderGiftLine.noUiSlider.set(this.value);
});
$('.calc-item__credit').change(function() {
    sliderCreditLine.noUiSlider.set(this.value);
});

let sliderCalcItemPrice = document.getElementById('calc-item__price');
sliderCalcItemPrice.addEventListener('change', function () {
    sliderPriceLine.noUiSlider.set(this.value);
});
let sliderCalcItemGift = document.getElementById('calc-item__gift');
sliderCalcItemGift.addEventListener('change', function () {
    sliderGiftLine.noUiSlider.set(this.value);
});
let sliderCalcItemCredit = document.getElementById('calc-item__credit');
sliderCalcItemCredit.addEventListener('change', function () {
    sliderCreditLine.noUiSlider.set(this.value);
});

let calcItemPrice = document.getElementById('calc-item__price');
let calcItemGift = document.getElementById('calc-item__gift');
let calcItemCredit = document.getElementById('calc-item__credit');

let calcItemPriceNum = document.getElementById('calc-item__priceNum');
let calcItemGiftNum = document.getElementById('calc-item__giftNum');
let calcItemCreditNum = document.getElementById('calc-item__creditNum');

let calcResultCreditItem = document.getElementById('calc-result__credit');

sliderPriceLine.noUiSlider.on('update', function (values, handle) {
    calcItemPriceNum.value = values[handle];
    calcMonth();
    calcItemPrice.value = ''+new Intl.NumberFormat('ru-RU').format(values[handle])+' ₽';
});
sliderGiftLine.noUiSlider.on('update', function (values, handle) {
    calcItemGiftNum.value = values[handle];
    calcMonth();
    calcItemGift.value = ''+new Intl.NumberFormat('ru-RU').format(values[handle])+' ₽';
});

sliderCreditLine.noUiSlider.on('update', function (values, handle) {
    calcItemCreditNum.value = values[handle];
    calcMonth();
    let calcCreditValue = values[handle];
    if(Number(calcCreditValue)===1 || Number(calcCreditValue)===21){
        calcItemCredit.value = ''+calcCreditValue+' год';
        calcResultCreditItem.innerHTML = ''+calcCreditValue+' год';
    }
    else if(Number(calcCreditValue)>=2 && Number(calcCreditValue)<=4){
        calcItemCredit.value = ''+calcCreditValue+' года';
        calcResultCreditItem.innerHTML = ''+calcCreditValue+' года';
    }
    else if(Number(calcCreditValue)>=5 && Number(calcCreditValue)<=20){
        calcItemCredit.value = ''+calcCreditValue+' лет';
        calcResultCreditItem.innerHTML = ''+calcCreditValue+' лет';
    }
    else if(Number(calcCreditValue)>=22 && Number(calcCreditValue)<=24){
        calcItemCredit.value = ''+calcCreditValue+' года';
        calcResultCreditItem.innerHTML = ''+calcCreditValue+' года';
    }
    else if(Number(calcCreditValue)>=25 && Number(calcCreditValue)<=30){
        calcItemCredit.value = ''+calcCreditValue+' лет';
        calcResultCreditItem.innerHTML = ''+calcCreditValue+' лет';
    }
});
calcMonth()
function calcMonth() {
    let calcResultMonthItem = document.getElementById('calc-result__month');
    let calcResultTotalCreditItem = document.getElementById('calc-result__total');
    let calcResultPrice;
    let calcResultGift;
    let calcResultYears;
    let calcResultMonth;
    let calcResultTotalCredit;
    calcResultPrice = $('#calc-item__priceNum').val();
    calcResultGift = $('#calc-item__giftNum').val();
    calcResultYears = $('#calc-item__creditNum').val();
    let calcPercent = 5.9 / 12 / 100;
    let calcTotalRate = Math.pow(( 1 + calcPercent ), ( calcResultYears * 12 ));
    calcResultMonth = (calcResultPrice - calcResultGift) * calcPercent * calcTotalRate / ( calcTotalRate - 1 )
    calcResultMonthItem.innerHTML = String(Math.round(calcResultMonth)).replace(/(\d)(?=(\d{3})+$)/g, "$1  ");
    calcResultTotalCredit = ( calcResultMonth * ( calcResultYears * 12 ) )
    calcResultTotalCreditItem.innerHTML = String(Math.round(calcResultTotalCredit)).replace(/(\d)(?=(\d{3})+$)/g, "$1  ");
    let calcResultGrafic = Number(calcResultTotalCredit)/(Number(calcResultYears)*12)
    document.getElementById('popupGrafic-table__tbody').innerHTML = ""
    for (let i = 1; i <= (calcResultYears*12); i++) { // выведет 0, затем 1, затем 2
        document.getElementById('popupGrafic-table__tbody').innerHTML += '<tr><td>'+i+'. '+String(Math.round(calcResultGrafic)).replace(/(\d)(?=(\d{3})+$)/g, "$1  ")+' ₽</td></tr>'
    }

}
// calc