var isSayohat=prompt("jamg'armangizni kiriting",0);

var aviabiletUSD=500;
var muzeyEUR=120;
var hotelUSD=250;

var USD_TO_UZS=9433.34;
var EUR_TO_UZS=10354.03;

var checkValidation=isSayohat>=((aviabiletUSD+hotelUSD)*USD_TO_UZS+muzeyEUR*EUR_TO_UZS);

if (checkValidation){
    console.log("pulingiz yetarli",isSayohat);
}else{
    console.log("pul mablag'i yetarli emas",isSayohat);
}