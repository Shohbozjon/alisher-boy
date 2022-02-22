var a = 500;
var b = 250;
var c = 120;
var amount = Number(prompt("Sayohat uchun kerakli pul miqdori:" , 0));

// so'mga o'girish:
A = a * 10900;
B = b * 10900;
C = c * 12272.64;

var S = Number(A+B+C);

if (amount >= S){
  console.log("Oq yo'l, Alisher!");
}else if (amount < 0 ){
  console.log("Aka qarzga ketmoqchimisiz?")
}
else{
  console.log("Alisher, ozgina sabr qilish bo'lar ekan.");
}







