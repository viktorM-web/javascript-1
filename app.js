/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Can I work? ' + (availableHours > projectHours));
console.log('Cost of work ' + projectHours * payRateUSD)
