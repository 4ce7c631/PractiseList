array_A = [];
array_B = [];
for(i=0; i<50; i++){
	array_A[i] = Math.floor(Math.random() * 10);
	array_B[i] = Math.floor(Math.random() * 10);
	if (array_A[i]==array_B[i]) {
		console.log(`В двух массивах в ряду ${i+1}; были замечены одиннаковые значения, а именно: массив_А[${i}] = массив_Б[${i}] = ${array_A[i]}`);
	}
}
console.log("End of #1 task");

array = [];
array_Stack = [];
mem = 0;
n = prompt(`Введите длину массива`, 100);
flag = true;
for(i=0; i<n; i++, flag = true){
	array[i] = Math.floor(Math.random() * 1000 + 1);
	if(array[i] > 2){
		for (min = 2; min < array[i]; min++) {
				if (array[i] % min == 0 || array[i] == 2) {
					flag = false;
					break;
				}
		}
	}else{
		flag = false;
	}
	
	if (flag == true) {
			array_Stack[mem] = array[i];
			mem += 1;
	}
}

min = array_Stack[(mem - 1)];
max = array_Stack[(mem - 1)];
do{
	mem -= 1;
	if (min > array_Stack[mem]) {
		min = array_Stack[mem];
	}
	if (max < array_Stack[mem]) {
		max = array_Stack[mem];
	}
}while(mem > 0)
console.log(array_Stack);
console.log(`Максимальное число в массиве ${min}`);
console.log(`Минимальное число в массиве ${max}`);
console.log("End of #2 task");

new_array = [];
n = prompt(`Введите длину массива`, 100);
for(i=0; i<n; i++){
	new_array[i] = Math.floor(Math.random() * 1000 + 1);
}
console.log(new_array);
min = new_array[i - 1];
max = new_array[i - 1];
minPos = i - 1;
maxPos = i - 1;
do{
	i -= 1;
	if (min > new_array[i]) {
		min = new_array[i];
		minPos = i;
	}
	if (max < new_array[i]) {
		max = new_array[i];
		maxPos = i;
	}
}while(i > 0)
if(minPos > maxPos){
	mem = minPos;
	minPos = maxPos;
	maxPos = mem;
}
second_Array = [];
i = 0;
while(minPos < maxPos){
	second_Array[i] = new_array[minPos];
	minPos += 1;
	i += 1;
}
console.log(second_Array);
console.log("End of #3 task");

third_array = [];
n = prompt(`Введите длину массива`, 100);
for(i=0; i<n; i++){
	third_array[i] = Math.floor(Math.random() * 1000 + 1);
}
console.log(third_array);
min = third_array[i - 1];
max = third_array[i - 1];
minPos = i - 1;
maxPos = i - 1;
do{
	i -= 1;
	if (min > third_array[i]) {
		min = third_array[i];
		minPos = i;
	}
	if (max < third_array[i]) {
		max = third_array[i];
		maxPos = i;
	}
}while(i > 0)
console.log(`В данном массиве минимальное значение ${min} поменялось местами в порядке с максимальным числом ${max}`);
mem = third_array[minPos];
third_array[minPos] = third_array[maxPos];
third_array[maxPos] = mem;
console.log(third_array);
console.log("End of #4 task");