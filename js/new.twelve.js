function potatoes(p0, w0, p1) {
    // your code
return Math.floor(w0 *(100 - p0) / (100 - p1))


}


console.log((potatoes(99, 100, 98))); //50
console.log((potatoes(82, 127, 80))); //114
console.log((potatoes(93, 129, 91))); //100
               // % воды  вес  конеч % воды

//exampel  potatoes(99, 100, 98) --> 50

// Мы едим только воду и сухие вещества.

// Джон купил картошку: их вес 100 килограмм. Картофель содержит воду и сухие вещества.

// Содержание воды составляет 99 процентов от общего веса. Он думает, что они слишком влажные, и ставит их в духовку при низкой температуре, чтобы они теряли немного воды.

// На выходе содержание воды всего 98%.

// Какой общий вес в килограммах (содержание воды плюс сухое вещество) выходит из печи?

// Он находит 50 килограммов и думает, что совершил ошибку: «Столько веса потеряно из-за такого небольшого изменения содержания воды!»

// Вы можете ему помочь?

// Функция записи potatoesс

// параметр int p0- начальный процент воды-
// параметр int w0- начальный вес -
// параметр int p1- конечный процент воды -
// potatoesдолжен возвращать окончательный вес, полученный из печи, w1усеченный как int.