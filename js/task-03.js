/*
Задача 3-3
Поиск наибольшего значения среди свойств объекта

Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
и возвращает имя самого продуктивного (который выполнил больше всех задач). 
Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".
*/

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const employeesTaskStat = Object.entries(employees);

  let bestTaskStat = 0;
  let bestEmployee = '';

  // операція розпилення масиву
  // const bestTaskResult = Math.max(...taskCount);

  for (const employe of employeesTaskStat) {
    const key = employe[0];
    const value = employe[1];

    // console.log(`${key}: ${value}`);

    if (value > bestTaskStat) {
      bestTaskStat = value;
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
