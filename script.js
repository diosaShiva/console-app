'use strict';

let numberOfFilms;

function start () {
     numberOfFilms = +prompt( "how much films films have you already seen?", "");

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt( "how much films films have you already seen?", "");
     }
}
start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ("One of the last movies you watched?", '');
        const b = prompt ('How much would you rate it?', '');
    
        if (a != '' && b != '' && a != null  && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}    
    
rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ('Too few');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 50) {
        console.log ('Classic');
    } else if ( personalMovieDB.count > 100 ) {
        console.log ('Cinephile');
    } else {
        console.log ('Something went wrong');
    }
}

detectPersonalLevel ();
      

function showMyDB(hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i ++) {
        const genre = prompt (`Your favorite genre is ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres ();


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


