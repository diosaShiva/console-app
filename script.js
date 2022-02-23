'use strict';
const numberOfFilms = +prompt( "how much films films have you already seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt ("One of the last movies you watched?", '');
    const b = prompt ('How much would you rate it?', '');

    if (a != '' && b != '' && a != null  && b != null && a.length < 50  && b.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log ('done');
    } else {
        i--;
        console.log ('error');
    }
}    
    

    if (personalMovieDB.count < 10) {
        alert ('Too few');
    } else if (personalMovieDB.count >= 10 && personalMovieDB <= 50) {
        alert ('Classic');
    } else if ( personalMovieDB.count > 100 ) {
        alert ('Cinephile');
    } else {
        alert ('Something went wrong');
    }
      

console.log (personalMovieDB);  

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


