const weekDays = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const dateNewYear = new Date('01 January 2023');
const currentTime = new Date();

const daysRemaining = Math.floor((dateNewYear.getTime() - currentTime.getTime()) / 1000 / 60 / 60 / 24);
const lastNumber = Math.floor(daysRemaining % 10);
const newElement = document.createElement('span');

let text = '';

if (currentTime.getHours() < 6) {
  text += 'Доброй ночи';
} else if (currentTime.getHours() < 12) {
  text += 'Доброе утро';
} else if (currentTime.getHours() < 18) {
  text += 'Добрый день';
} else {
  text += 'Добрый вечер';
}

text += '!' + '<br>' + 'Сегодня: ' + weekDays[currentTime.getDay()];
text += '' + '<br>' + 'Текущее время: ' + currentTime.toLocaleTimeString('ru');
text += '' + '<br>' + 'До Нового года осталось: ' + daysRemaining;
text += lastNumber == 1 ? ' день' : ((lastNumber == 2 || lastNumber == 3 || lastNumber == 4) ? ' дня' : ' дней');

newElement.innerHTML = text;
document.body.append(newElement);