var accordeon = document.querySelectorAll('.accordeon-list__item'); //Массив элементов аккордеона
var title = document.querySelectorAll('.accordeon-list__item--title');//Массив заголовков аккордеона
var activeTitle = document.querySelector('.active-title'); //Активный заголовок
var content = document.querySelectorAll('.accordeon-innerlist');//Массив элементов контента
var contentActive = document.querySelector('.active-accordeon');//Активный контент

//Проходим циклом про всем заголовкам
    for (var i=0; i< title.length; i++) {
        //На каждый добавляем событие клика
        title[i].onclick = function () {
            //Если в массиве заголовков нет класса active-title
            if(!this.classList.contains('active-title')){
                //Проходимся циклом по всем заголовкам
                for (var i=0; i< title.length; i++) {
                //Удаляем все активные классы которые есть
                    title[i].classList.remove('active-title');
                }
                //Заголовку на который кликнули добавляем active-title
                this.classList.add('active-title');
                //Проходимся циклом по всему контенту
                for (var i=0; i< content.length; i++) {
                 //Везде где нету active-title удаляем активную часть контента
                    content[i].classList.remove('active-accordeon');
                }
            //Если в массиве заголовков есть класс active-title
            } else {
                this.classList.remove('active-title');
            }
            //Проходимся циклом по всему контенту
            for (var i=0; i< content.length; i++) {
                //Если в массиве контента есть класс active-accordeon
                if(this.nextElementSibling.classList.contains('active-accordeon')){
                 //Удаляем active-accordeon
                    this.nextElementSibling.classList.remove('active-accordeon');
                } else {
                 //В противном случае добавляем класс active-accordeon
                    this.nextElementSibling.classList.add('active-accordeon');
                }
            }
        }

    }
