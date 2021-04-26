do{
	n = +prompt('Enter n (n>2)') - 2;
}while(n < 1)
fibanachi1 = 1;
fibanachi2 = 1;
document.write("<p>"+fibanachi1+"</p>");
document.write("<p>"+fibanachi2+"</p>");
while(n > 0){
	fibanachiSum = fibanachi1 + fibanachi2;
	fibanachi1 = fibanachi2;
	fibanachi2 = fibanachiSum;
	n -= 1;
	document.write("<p>"+fibanachi2+"</p>");
}