function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


function compute(){
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear()+parseInt(years);
    
  if (principal === '' || principal <= 0) {
   alert('Please fill amount, and must be positive');
   return;
 }
 if (rate === null || rate === 0) {
   alert('Please fill Rate');
   return;
 }
 if (years === '' || years < 0) {
   alert('Please fill Year , and must be positive');
   return;
 }
  var res = "If you deposit, <span class = 'highlight'>" + principal+
            "</span> ,<br> at an interest rate of <span class = 'highlight'>" +rate+
            "</span>. <br> You will receive an amount of <span class = 'highlight'>" +interest+
            "</span>, <br> in the year <span class = 'highlight'>"+year;
  document.getElementById("result").innerHTML = res;
}

