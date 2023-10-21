var calcResYear = document.getElementById("resultYear")
var calcResMonth = document.getElementById("resultMonth")
var calcResDay = document.getElementById("resultDay")

function calcAge() {
    var inputYear = document.getElementById("year").value;
    var inputMonth = document.getElementById("month").value;
    var inputDay = document.getElementById("day").value;
        
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth()+1;
    var currentDay = new Date().getDate();

    var calcYear = currentYear - inputYear;
    var calcMonth = currentMonth - inputMonth;
    var calcDay = currentDay - inputDay;

    if(inputYear.value != '' && inputMonth.value != '' && inputDay.value != '') {

        if (calcMonth < 0 || (calcMonth === 0)) {
            calcYear--;
            calcMonth += 12;
        }

        if (calcDay < 0) {
            calcMonth--;
            calcDay += 30;
        }

        calcResYear.textContent = calcYear;
        calcResMonth.textContent = calcMonth;
        calcResDay.textContent = calcDay;
    }
}