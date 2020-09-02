// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта 
// в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
  const keys = Object.keys(employees);
    let result = '';
    let maxValue = 0;
    for (const key of keys) {
      if (employees[key] > maxValue) {
        maxValue = employees[key];
        result = key;
      }
    }
    return result;
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
  }
  //console.log(findBestEmployee(sellers)); 
  // 'lux'  