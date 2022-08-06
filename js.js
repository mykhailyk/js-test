const salary = prompt("введіть Вашу заробітну платню:");
let addSalary = salary * 1.15; //додаткові 15% премія
alert(`зарплата з премією = ${addSalary}`);
let vat = addSalary * 0.9; //податок 10%
alert(`зарплата з вирахуванням податків  = ${vat}`);
let spend = vat - 190; // витрати в маг
alert(`залишилося на дружину  = ${spend / 2}`);
alert(`залишилося на чоловіка  = ${spend / 2}`);
