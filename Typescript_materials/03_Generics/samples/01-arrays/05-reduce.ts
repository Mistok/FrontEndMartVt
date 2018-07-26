// Метод reduce(callback, initialValue) применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.

// callback
// Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
// ее аргументы
//      previousValue
//          Значение, возвращённое предыдущим выполнением функции callback, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
//      currentValue
//          Текущий обрабатываемый элемент массива.
//      currentIndex
//          Индекс текущего обрабатываемого элемента массива.
//      array
// 	        Массив, для которого была вызвана функция reduce.
//
// initialValue
// Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.

let values: number[] = [10, 2, 3, 4, 5, 6];

let total: number = values.reduce((prev, current) => {
    console.log(prev);
    return prev + current;
});

console.log(total);