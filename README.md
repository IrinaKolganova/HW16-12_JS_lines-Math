# HW16-12_JS_lines-Math

Home Work_week16 (12)

### Вопросы 💎

1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?
   //"", '', `. Разница в том, что с помощью обратных кавычек (``) можно создавать строки.
2. Какими методами можно найти подстроку в строке? Приведите пример.
   // .indexOf (отсчёт в данном случае будет начинаться с 0);
   .lastIndexOf (если посчитать необходимо с конца);
   .search - работает таким же образом как .indexOf.
   Пример: let test="Мне нравится Тула";
   console.log(test.search("Тула")); //13
3. Самостоятельно разберитесь, зачем нужен специальный символ \n?
//это спецсимвол, который используется для организации переноса строки в рамках двойных и одинарных кавычек.
4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`
   // let name="настя";
   let nameNo=name.substr(0);
   let nameNew=name[0].toUpperCase()+nameNo;
   concole.log(nameNew);
5. Какой из вариантов округления делает это по математическим правилам?
   //Math.round(9.51) - до ближайшего целого числа (10); и ((0.35627).toFixed(3)) - округлит дробное число по математическим правилам до 3х (в данном случае) цифр после запятой;
6. Как сгенерировать случайное число от 1 до 100?
   //console.log(Math.round(Math.random()\*100));
7. Что выведет в консоль?

```jsx
const x = "Солнце";

console.log("The string length is " + x.length);
```

//The string length is 6 ;

8. Каким будет результат в представленном ниже фрагменте кода?

```jsx
const upperText = "ВелоСипед";
document.write(upperText.toUpperCase());
```

// ВЕЛОСИПЕД ; 
9. Каким будет результат в приведенном ниже фрагменте кода?

```jsx
let str = "розы такие розы";
str.replace("розы", "красивые");
```

// красивые такие розы ; 

10. Что выведет в консоль?
const str = "abcdefghij";
console.log("(2,3): " + str.substr(2,3));
//(2,3): cde
