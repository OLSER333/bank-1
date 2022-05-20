function btnClicked() {
  let Bewouwke = "Ипотека от ПСБ со ставкой 1,99%";

  document.getElementById("ipoteka-modal-form-span").innerHTML = Bewouwke;
  document.getElementById("mortgage-program").value = Bewouwke;
}

function btn2Clicked() {
  let Wewouwke = "Ипотека от ПСБ со ставкой 2,99%";

  document.getElementById("ipoteka-modal-form-span").innerHTML = Wewouwke;
  document.getElementById("mortgage-program").value = Wewouwke;
}

function btn3Clicked() {
  let Newouwke = "«Семейная военная ипотека» от ПСБ со ставкой 4,3%";

  document.getElementById("ipoteka-modal-form-span").innerHTML = Newouwke;
  document.getElementById("mortgage-program").value = Newouwke;
}

//округление
// var Roundedwe = function (number) {
//   return +number.toFixed(2);
// };

//вывод в денежный формат 
var Moneyfrmt = function (n) {
  return parseFloat(n)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")
    .replace(".", ",");
};

function cutSymbols(str) {
  // let dbsp = '/\s{2}/';
  str = str.replace(/\s{2,}/g, " ");
}

//убирает из строки все символы кроме цифр и первой точки или запятой (заменяет точку или запятую на точку)
function cleanString(str) {
  console.log("str beg", str);
  str = str.replace(
    /[a-z]|[A-Z]|[а-яА-ЯЁё]|\s|`|~|!|"|'|№|;|%|:|\?|\*|\(|\)|_|\-|\+|=|<|>|\/|@|#|\$|\^|&|\[|\]|\{|\}|\\|\||\.{2,}|\,{2,}/gm,
    ""
  );

  str = str.replace(".", " ");
  str = str.replace(",", " ");
  str = str.replace(/\.|\,/gm, "");
  str = str.replace(" ", ".");
  str = str.replace(/\s/gm, "");
  console.log("str end", str);
  return str;
}

function calcMoneyPay() {
  console.log("я calcMoney ");
  let Genwunwe = document.getElementById("object-price");
  let Runemoqe =
    Genwunwe.value - document.getElementById("first-payment").value;
  let Younowqe = document.getElementById("years").value * 12;

  let Nunnen_1 = 1.99 / 12 / 100;
  let Dunnen_1 =
    (Nunnen_1 * (1 + Nunnen_1) ** Younowqe) / ((1 + Nunnen_1) ** Younowqe - 1);
  let Bunnen_1 = Runemoqe * Dunnen_1;

  document.getElementById("month-pay").innerHTML = Moneyfrmt(Bunnen_1);

  if (Bunnen_1 <= 0) {
    document.getElementById("month-pay").innerHTML = "0,00";
  }

  let Nunnen_2 = 2.99 / 12 / 100;
  let Dunnen_2 =
    (Nunnen_2 * (1 + Nunnen_2) ** Younowqe) / ((1 + Nunnen_2) ** Younowqe - 1);
  let Bunnen_2 = Runemoqe * Dunnen_2;

  document.getElementById("month-pay1").innerHTML = Moneyfrmt(Bunnen_2);

  if (Bunnen_2 <= 0) {
    document.getElementById("month-pay1").innerHTML = "0,00";
  }

  let Nunnen_3 = 4.3 / 12 / 100;
  let Dunnen_3 =
    (Nunnen_3 * (1 + Nunnen_3) ** Younowqe) / ((1 + Nunnen_3) ** Younowqe - 1);
  let Bunnen_3 = Runemoqe * Dunnen_3;

  document.getElementById("month-pay2").innerHTML = Moneyfrmt(Bunnen_3);

  if (Bunnen_3 <= 0) {
    document.getElementById("month-pay2").innerHTML = "0,00";
  }
}

//Переменные вывода значений в правом столбце
// var creditSumm = document.getElementById("credit-summ");
// var credit;

// var monthPay = document.getElementById("month-pay");
// var monthly;

// var overPay;
// var overPayWithUs;
// var yourSafe = document.getElementById("your-safe");
// var monthPayWithUs = document.getElementById("month-pay-with-us");

//Переменные для расчета ежемесячного платежа
// var monthSumm;
// var monthPercent;
// var ann;
// var monthPaySumm;

//range стоимости объекта
var slider = document.getElementById("object-price");
var hidden = document.getElementById("object-price-hidden");
var output = document.getElementById("object-price-output");

output.value = Moneyfrmt(slider.value);

slider.oninput = function () {
  hidden.value = this.value;
  output.value = Moneyfrmt(hidden.value);

  //Подсчет суммы кредита
  // creditSumm.innerHTML = Moneyfrmt(this.value - firstPaymentSlider.value);
  // credit = this.value - firstPaymentSlider.value;
  //
  // if(credit <= 0){
  // 		creditSumm.innerHTML = "0,00";
  // }

  //Подсчет ежемесячного платежа
  // monthSumm = years.value * 12;
  // monthPercent =
  //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
  // ann =
  //   (monthPercent * (1 + monthPercent) ** monthSumm) /
  //   ((1 + monthPercent) ** monthSumm - 1);
  // monthPaySumm = credit * ann;

  // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
  // monthly = Roundedwe(monthPaySumm);

  // if (monthPaySumm <= 0) {
  //   monthPay.innerHTML = "0,00";
  // }

  // //Подсчет переплаты по кредиту
  // overPay = Roundedwe(monthly * monthSumm - credit);

  // //Подсчет переплаты по кредиту с нами
  // var monthPercentWithUs =
  //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
  // var annWithUs =
  //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
  //   ((1 + monthPercentWithUs) ** monthSumm - 1);
  // var monthPaySummWithUs = credit * annWithUs;
  // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

  
  //Подсчет сэкономленной суммы
  // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
  // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
  // if(monthPaySummWithUs <= 0){
  // 		monthPayWithUs.innerHTML = "0,00";
  // }
  //
  // if(overPay - overPayWithUs <= 0){
  // 		yourSafe.innerHTML = "0,00";
  // }
};

output.onchange = function () {
  // this.value = Moneyfrmt(this.value)

  if (cleanString(output.value.replace(/ /g, "").replace(",00", "")) === "") {
    // если пустая строка
    output.value = Moneyfrmt("5000000");
    hidden.value = "5000000";
    slider.value = hidden.value;
  } else {
    let a = parseInt(
      cleanString(output.value.replace(/ /g, "").replace(",00", "")),
      10
    );
    if (a < 500000) {
      output.value = Moneyfrmt("500000");
      hidden.value = "500000";
      slider.value = hidden.value;
    } else if (a > 10000000) {
      output.value = Moneyfrmt("10000000");
      hidden.value = "10000000";
      slider.value = hidden.value;
    } else {
      output.value = Moneyfrmt(a);
      hidden.value = a;
      slider.value = hidden.value;
    }
  }
  
  calcMoneyPay();
};

// output.oninput = function () {
//   // output.value = Moneyfrmt(cleanString(this.value));
//   // hidden.value = this.value.replace(/ /g, "").replace(",00", "");
//   // slider.value = hidden.value;

//   // hidden.value = cleanString(this.value).replace(/ /g, "").replace(",00", "");
//   // slider.value = hidden.value;
//   // output.value = Moneyfrmt(hidden.value);

//   //Подсчет суммы кредита
//   // creditSumm.innerHTML = Moneyfrmt(hidden.value - firstPaymentSlider.value);
//   // credit = hidden.value - firstPaymentSlider.value;
//   // if(credit <= 0) {
//   // 	creditSumm.innerHTML = "0,00";
//   // }

//   //Подсчет ежемесячного платежа
//   // monthSumm = years.value * 12;
//   // monthPercent =
//   //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
//   // ann =
//   //   (monthPercent * (1 + monthPercent) ** monthSumm) /
//   //   ((1 + monthPercent) ** monthSumm - 1);
//   // monthPaySumm = credit * ann;

//   // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
//   // monthly = Roundedwe(monthPaySumm);
//   // if (monthPaySumm <= 0) {
//   //   monthPay.innerHTML = "0,00";
//   // }
//   // //Подсчет переплаты по кредиту
//   // overPay = Roundedwe(monthly * monthSumm - credit);

//   // //Подсчет переплаты по кредиту с нами
//   // var monthPercentWithUs =
//   //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
//   // var annWithUs =
//   //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
//   //   ((1 + monthPercentWithUs) ** monthSumm - 1);
//   // var monthPaySummWithUs = credit * annWithUs;
//   // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

//   //Подсчет сэкономленной суммы
//   // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
//   // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
//   // if(monthPaySummWithUs <= 0) {
//   // 	monthPayWithUs.innerHTML = "0,00";
//   // }
//   //
//   // if(overPay - overPayWithUs <= 0) {
//   // 	yourSafe.innerHTML = "0,00";
//   // }
// };

// range первоначального взноса



var firstPaymentSlider = document.getElementById("first-payment");
var firstPaymentOutput = document.getElementById("first-payment-output");
var firstHidden = document.getElementById("first-payment-hidden");
firstPaymentOutput.value = Moneyfrmt(firstPaymentSlider.value);

firstPaymentOutput.onchange = function () {
  if (
    cleanString(
      firstPaymentOutput.value.replace(/ /g, "").replace(",00", "")
    ) === ""
  ) {
    // если пустая строка
    firstPaymentOutput.value = Moneyfrmt("2500000");
    firstHidden.value = "2500000";
    firstPaymentSlider.value = firstHidden.value;
  } else {
    let a = parseInt(
      cleanString(
        firstPaymentOutput.value.replace(/ /g, "").replace(",00", "")
      ),
      10
    );
    if (a < 500000) {
      firstPaymentOutput.value = Moneyfrmt("300000");
      firstHidden.value = "300000";
      firstPaymentSlider.value = firstHidden.value;
    } else if (a > 10000000) {
      firstPaymentOutput.value = Moneyfrmt("5000000");
      firstHidden.value = "5000000";
      firstPaymentSlider.value = firstHidden.value;
    } else {
      firstPaymentOutput.value = Moneyfrmt(a);
      firstHidden.value = a;
      firstPaymentSlider.value = firstHidden.value;
    }
  }

  calcMoneyPay();
};

firstPaymentSlider.oninput = function () {
  firstHidden.value = this.value;
  firstPaymentOutput.value = Moneyfrmt(firstHidden.value);

  //Подсчет суммы кредита
  // creditSumm.innerHTML = Moneyfrmt(slider.value - this.value);
  // credit = slider.value - this.value;
  // if(credit <= 0) {
  //  	creditSumm.innerHTML = "0,00";
  //  }

  //Подсчет ежемесячного платежа
  // monthSumm = years.value * 12;
  // monthPercent =
  //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
  // ann =
  //   (monthPercent * (1 + monthPercent) ** monthSumm) /
  //   ((1 + monthPercent) ** monthSumm - 1);
  // monthPaySumm = credit * ann;

  // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
  // monthly = Roundedwe(monthPaySumm);
  // if (monthPaySumm <= 0) {
  //   monthPay.innerHTML = "0,00";
  // }

  // //Подсчет переплаты по кредиту
  // overPay = Roundedwe(monthly * monthSumm - credit);

  // //Подсчет переплаты по кредиту с нами
  // var monthPercentWithUs =
  //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
  // var annWithUs =
  //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
  //   ((1 + monthPercentWithUs) ** monthSumm - 1);
  // var monthPaySummWithUs = credit * annWithUs;
  // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

  //Подсчет сэкономленной суммы
  // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
  // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
  // if(monthPaySummWithUs <= 0) {
  // 	monthPayWithUs.innerHTML = "0,00";
  // }
  //
  // if(overPay - overPayWithUs <= 0) {
  // 	yourSafe.innerHTML = "0,00";
  // }
};

firstPaymentOutput.oninput = function () {
  firstHidden.value = this.value.replace(/ /g, "").replace(",00", "");
  firstPaymentSlider.value = firstHidden.value;

  //Подсчет суммы кредита
  // creditSumm.innerHTML = Moneyfrmt(slider.value - firstHidden.value);
  // credit = slider.value - firstHidden.value;
  // if(credit <= 0) {
  //  	creditSumm.innerHTML = "0,00";
  //  }

  //Подсчет ежемесячного платежа
  // monthSumm = years.value * 12;
  // monthPercent =
  //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
  // ann =
  //   (monthPercent * (1 + monthPercent) ** monthSumm) /
  //   ((1 + monthPercent) ** monthSumm - 1);
  // monthPaySumm = credit * ann;

  // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
  // monthly = Roundedwe(monthPaySumm);
  // if (monthPaySumm <= 0) {
  //   monthPay.innerHTML = "0,00";
  // }

  // //Подсчет переплаты по кредиту
  // overPay = Roundedwe(monthly * monthSumm - credit);

  // //Подсчет переплаты по кредиту с нами
  // var monthPercentWithUs =
  //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
  // var annWithUs =
  //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
  //   ((1 + monthPercentWithUs) ** monthSumm - 1);
  // var monthPaySummWithUs = credit * annWithUs;
  // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

  //Подсчет сэкономленной суммы
  // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
  // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
  // if(monthPaySummWithUs <= 0) {
  // 	monthPayWithUs.innerHTML = "0,00";
  // }
  //
  // if(overPay - overPayWithUs <= 0) {
  // 	yourSafe.innerHTML = "0,00";
  // }
};

//range срока кредита



var years = document.getElementById("years"); // slider
var yearsOutput = document.getElementById("years-output");

yearsOutput.value = years.value;

yearsOutput.onchange = function () {
  if (
    cleanString(yearsOutput.value.replace(/ /g, "").replace(",00", "")) === ""
  ) {
    // если пустая строка
    yearsOutput.value = "15";
    years.value = "15";
  } else {
    let a = parseInt(
      cleanString(yearsOutput.value.replace(/ /g, "").replace(",00", "")),
      10
    );
    if (a < 1) {
      yearsOutput.value = "1";
      years.value = "1";
    } else if (a > 30) {
      yearsOutput.value = "30";
      years.value = "30";
    } else {
      yearsOutput.value = a;
      years.value = a;
    }
  }

  calcMoneyPay();
};

years.oninput = function () {
  yearsOutput.value = this.value;

  credit = slider.value - firstPaymentSlider.value;
  //Подсчет ежемесячного платежа
  // monthSumm = years.value * 12;
  // monthPercent =
  //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
  // ann =
  //   (monthPercent * (1 + monthPercent) ** monthSumm) /
  //   ((1 + monthPercent) ** monthSumm - 1);
  // monthPaySumm = credit * ann;

  // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
  // monthly = Roundedwe(monthPaySumm);
  // if (monthPaySumm <= 0) {
  //   monthPay.innerHTML = "0,00";
  // }

  // //Подсчет переплаты по кредиту
  // overPay = Roundedwe(monthly * monthSumm - credit);

  // //Подсчет переплаты по кредиту с нами
  // var monthPercentWithUs =
  //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
  // var annWithUs =
  //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
  //   ((1 + monthPercentWithUs) * monthSumm - 1);
  // var monthPaySummWithUs = credit * annWithUs;
  // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

  //Подсчет сэкономленной суммы
  // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
  // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
  // if(monthPaySummWithUs <= 0) {
  //   	monthPayWithUs.innerHTML = "0,00";
  //   }
  //
  //   if(overPay - overPayWithUs <= 0) {
  //   	yourSafe.innerHTML = "0,00";
  //   }
};

yearsOutput.oninput = function () {
  years.value = this.value;
  credit = slider.value - firstPaymentSlider.value;
  //Подсчет ежемесячного платежа
  // monthSumm = years.value * 12;
  // monthPercent =
  //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
  // ann =
  //   (monthPercent * (1 + monthPercent) ** monthSumm) /
  //   ((1 + monthPercent) ** monthSumm - 1);
  // monthPaySumm = credit * ann;

  // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
  // monthly = Roundedwe(monthPaySumm);
  // if (monthPaySumm <= 0) {
  //   monthPay.innerHTML = "0,00";
  // }

  // //Подсчет переплаты по кредиту
  // overPay = Roundedwe(monthly * monthSumm - credit);

  // //Подсчет переплаты по кредиту с нами
  // var monthPercentWithUs =
  //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
  // var annWithUs =
  //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
  //   ((1 + monthPercentWithUs) ** monthSumm - 1);
  // var monthPaySummWithUs = credit * annWithUs;
  // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

  //Подсчет сэкономленной суммы
  // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
  // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
  // if(monthPaySummWithUs <= 0) {
  // 	monthPayWithUs.innerHTML = "0,00";
  // }
  //
  // if(overPay - overPayWithUs <= 0) {
  // 	yourSafe.innerHTML = "0,00";
  // }
};
//Изменение процентной ставки

// var percentSelect = document.getElementById("bank-select");
// var bankPercent = document.getElementById("bank-percent-span");

// percentSelect.onchange = function () {
//   bankPercent.value = this.options[this.selectedIndex].value;

//   // credit = slider.value - firstPaymentSlider.value;
//   //Подсчет ежемесячного платежа
//   // monthSumm = years.value * 12;
//   // monthPercent =
//   //   percentSelect.options[percentSelect.selectedIndex].value / 12 / 100;
//   // ann =
//   //   (monthPercent * (1 + monthPercent) ** monthSumm) /
//   //   ((1 + monthPercent) ** monthSumm - 1);
//   // monthPaySumm = credit * ann;

//   // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
//   // monthly = Roundedwe(monthPaySumm);
//   // if (monthPaySumm <= 0) {
//   //   // monthPay.innerHTML = "0,00";
//   // }

//   //Подсчет переплаты по кредиту
//   // overPay = Roundedwe(monthly * monthSumm - credit);

//   //Подсчет переплаты по кредиту с нами
//   // var monthPercentWithUs =
//   //   (percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12 / 100;
//   // var annWithUs =
//   //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
//   //   ((1 + monthPercentWithUs) ** monthSumm - 1);
//   // var monthPaySummWithUs = credit * annWithUs;
//   // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

//   //Подсчет сэкономленной суммы
//   // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
//   // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
//   // if(monthPaySummWithUs <= 0) {
//   // 	monthPayWithUs.innerHTML = "0,00";
//   // }
//   //
//   // if(overPay - overPayWithUs <= 0) {
//   // 	yourSafe.innerHTML = "0,00";
//   // }
// };

// bankPercent.oninput = function () {
//   this.value = this.value.replace(",", ".");
//   credit = slider.value - firstPaymentSlider.value;
  // //Подсчет ежемесячного платежа
  // monthSumm = years.value * 12;
  // monthPercent = this.value / 12 / 100;
  // ann =
  //   (monthPercent * (1 + monthPercent) ** monthSumm) /
  //   ((1 + monthPercent) ** monthSumm - 1);
  // monthPaySumm = credit * ann;

  // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
  // monthly = Roundedwe(monthPaySumm);
  // if (monthPaySumm <= 0) {
  //   monthPay.innerHTML = "0,00";
  // } 

  // //Подсчет переплаты по кредиту
  // overPay = Roundedwe(monthly * monthSumm - credit);

  // //Подсчет переплаты по кредиту с нами
  // var monthPercentWithUs = (this.value - 0.7) / 12 / 100;
  // var annWithUs =
  //   (monthPercentWithUs * (1 + monthPercentWithUs) ** monthSumm) /
  //   ((1 + monthPercentWithUs) ** monthSumm - 1);
  // var monthPaySummWithUs = credit * annWithUs;
  // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);

  //Подсчет сэкономленной суммы
  // monthPayWithUs.innerHTML = Moneyfrmt(monthPaySummWithUs);
  // yourSafe.innerHTML = Moneyfrmt(overPay - overPayWithUs);
  // if(monthPaySummWithUs <= 0) {
  // 	monthPayWithUs.innerHTML = "0,00";
  // }
  //
  // if(overPay - overPayWithUs <= 0) {
  // 	yourSafe.innerHTML = "0,00";
  // }
// };

// document.body.addEventListener('mouseenter', Dewunje, true);
// document.body.addEventListener('mouseleave', Dewunje, true);
// document.body.addEventListener('click', Dewunje, true);
// document.body.addEventListener('touchstart', Dewunje, true);

document.body.addEventListener("change", Dewunje, true);

function Dewunje(e) {

  // if(e.target.classList.contains('Nuqenuwe')){
  //
  // 		if(e.type === 'click' || e.type === 'touchstart'){
  //
  // 		}
  // }

  if (e.target.parentElement.classList.contains("Bawqunue")) {
    if (e.type === "change") {


      // credit = slider.value - firstPaymentSlider.value;
      // //Подсчет ежемесячного платежа
      // monthSumm = years.value * 12;
      // monthPercent = (percentSelect.options[percentSelect.selectedIndex].value / 12) / 100;
      // ann = (monthPercent * ((1 + monthPercent)**monthSumm)) / (((1 + monthPercent)**monthSumm) - 1);
      // monthPaySumm = credit * ann;
      //
      // monthPay.innerHTML = Moneyfrmt(monthPaySumm);
      // // monthly = Roundedwe(monthPaySumm);
      // if(monthPaySumm <= 0) {
      //   	// monthPay.innerHTML = "0,00";
      //   	monthPay.innerHTML = '0,00';
      // }

      let Genwunwe = document.getElementById("object-price"); // знач слайдера 
      let Runemoqe =
        Genwunwe.value - document.getElementById("first-payment").value; //первого плат
      let Younowqe = document.getElementById("years").value * 12; // кол-во лет

      let Nunnen_1 = 1.99 / 12 / 100;
      let Dunnen_1 =
        (Nunnen_1 * (1 + Nunnen_1) ** Younowqe) /
        ((1 + Nunnen_1) ** Younowqe - 1);
      let Bunnen_1 = Runemoqe * Dunnen_1;

      document.getElementById("month-pay").innerHTML = Moneyfrmt(Bunnen_1);

      if (Bunnen_1 <= 0) {
        document.getElementById("month-pay").innerHTML = "0,00";
      }

      let Nunnen_2 = 2.99 / 12 / 100;
      let Dunnen_2 =
        (Nunnen_2 * (1 + Nunnen_2) ** Younowqe) /
        ((1 + Nunnen_2) ** Younowqe - 1);
      let Bunnen_2 = Runemoqe * Dunnen_2;

      document.getElementById("month-pay1").innerHTML = Moneyfrmt(Bunnen_2);

      if (Bunnen_2 <= 0) {
        document.getElementById("month-pay1").innerHTML = "0,00";
      }

      let Nunnen_3 = 4.3 / 12 / 100;
      let Dunnen_3 =
        (Nunnen_3 * (1 + Nunnen_3) ** Younowqe) /
        ((1 + Nunnen_3) ** Younowqe - 1);
      let Bunnen_3 = Runemoqe * Dunnen_3;

      document.getElementById("month-pay2").innerHTML = Moneyfrmt(Bunnen_3);

      if (Bunnen_3 <= 0) {
        document.getElementById("month-pay2").innerHTML = "0,00";
      }

      //
      // document.getElementById('month-pay').innerHTML = Moneyfrmt(Bunnen_1);
      //
      // if(Bunnen_1 <= 0){
      //   	document.getElementById('month-pay').innerHTML = '0,00';
      // }

      //
      // document.getElementById('month-pay') - 1,99
      // document.getElementById('month-pay1') - 2,99
      // document.getElementById('month-pay2') - 4,33

      //Подсчет переплаты по кредиту
      // overPay = Roundedwe(monthly * monthSumm - credit);

      //Подсчет переплаты по кредиту с нами
      // var monthPercentWithUs = ((percentSelect.options[percentSelect.selectedIndex].value - 0.7) / 12) / 100;
      // var annWithUs = (monthPercentWithUs * ((1 + monthPercentWithUs)**monthSumm)) / (((1 + monthPercentWithUs)**monthSumm) - 1);
      // var monthPaySummWithUs = credit * annWithUs;
      // overPayWithUs = Roundedwe(monthPaySummWithUs * monthSumm - credit);
    }
  }
}
