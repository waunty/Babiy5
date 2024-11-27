const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function mySort(arr, direction) {
let swapped;
let lastSwapIndex = arr.length - 1;

do {
swapped = false;
let currentLastSwapIndex = 0;

for (let i = 0; i < lastSwapIndex; i++) {
if ((direction === "asc" && arr[i] > arr[i + 1]) || 
(direction === "desc" && arr[i] < arr[i + 1])) {
                
let temp = arr[i];
arr[i] = arr[i + 1];
arr[i + 1] = temp;

swapped = true;
currentLastSwapIndex = i;
}
}
lastSwapIndex = currentLastSwapIndex;

} while (swapped);

return arr;
}

// Функція для запиту масиву та напрямку сортування
function getUserInput() {
rl.question('Введіть масив чисел через кому (наприклад: 1, 2, 3, -2, -1): ', (inputArray) => {
const array = inputArray.split(',').map(item => parseInt(item.trim(), 10));

rl.question('Оберіть варіант: \n1. Сортувати за зростанням (asc) \n2. Сортувати за спаданням (desc) \n3. Сортувати обидва напрямки (asc і desc) \nВведіть число (1, 2, або 3): ', (option) => {
            
switch (option) {
case '1':
const sortedAsc = mySort([...array], 'asc');
console.log(`Масив відсортований за зростанням: ${sortedAsc}`);
break;

case '2':
const sortedDesc = mySort([...array], 'desc');
console.log(`Масив відсортований за спаданням: ${sortedDesc}`);
break;

case '3':
const sortedAscBoth = mySort([...array], 'asc');
const sortedDescBoth = mySort([...array], 'desc');
console.log(`Масив відсортований за зростанням: ${sortedAscBoth}`);
console.log(`Масив відсортований за спаданням: ${sortedDescBoth}`);
break;

default:
console.log('Невірний вибір. Будь ласка, виберіть 1, 2 або 3.');
break;
}

rl.close();
});
});
}

// Виклик функції для введення даних
getUserInput();
