
function validateAmount(){
    var principal = document.getElementById("principal").value;
    var greaterthanzero=parseFloat(principal)>0;
    if(!greaterthanzero){
        alert("Enter a value greater than zero");
        document.getElementById("principal").focus();
    }
}
function getSliderValue(){
document.getElementById("ratevalue").innerHTML=document.getElementById("rate").value;
}
function SimpleInterest() {
    var principal=parseFloat(document.getElementById("principal").value);
    var rate=parseFloat(document.getElementById("rate").value);
    var time=parseInt(document.getElementById("time").value);
    var interest = (principal*time*rate)/100;
    var yearinfuture=new Date().getFullYear()+parseInt(time);  

document.getElementById("compute").innerHTML="If you deposit <mark>" + principal + "</mark>,<br/>" +
"at an interest rate of <mark>" + rate + "%"+"</mark>,<br/>" +
"You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
"in the year <mark>" + yearinfuture + "</mark>";
}
