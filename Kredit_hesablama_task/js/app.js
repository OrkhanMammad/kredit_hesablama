function calc(){
let mebleg=Number(document.getElementById('mebleg').value);
let faiz=Number(document.getElementById('faiz').value);
let muddet=Number(document.getElementById('muddet').value);
if(muddet>1){
    faiz=faiz+(muddet-1)*5;
}
let odenis=((mebleg+(mebleg*faiz/100))/(muddet*12)).toFixed(2);
document.getElementById('ayliq').innerHTML=odenis+" AZN";

}