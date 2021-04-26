do{
	alert("Введенные данные должны соответствовать этой логике a<(b-h)");
	a = prompt("Введите a");
	b = prompt("Введите b");
	h = prompt("Введите шаг цикла перебора");
}while(a>(b-h))
document.write("Сумма факториалов от a="+a+" до b="+b+" с шагом h="+h+" равняется ");
sum = 0;
while(a <= b){
	factorial = 1;
	num = b
	while(num > 1){
		factorial *= num;
		num -= 1;
	}
	sum += factorial;
	b -= h;
}
document.write(sum);