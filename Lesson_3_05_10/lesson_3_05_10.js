//  \d\d\d\d ili \d{4} - najdiot vse 4 cifri

// [0-9]{4} - mozno i tak najti 4 cifri

// [A-Z-a-z]

// \s\d{4}\s - \s eto probel sleva i prava, takze \s eto perenos stroki

// \s\d{4}(\s|\.) - ili probel ili tocka. ili (|)

// (\s|^)\d{4}(\s|\.|$) - nacalo ili probel ili nacalo stroki, konec $ konec stroki

// \$ - ctob najti dollar znak

// \S - bolsaja bukva posle slesa poluciajem obratnij poisk ot malenkoj bukvi s

// {2,4} - diapozon dlinni bukv

// [A-Z][a-z]+ - togda najdiot vse slova kotorije nacinajutsia s bolsoj bukvi, plius oznaciajet vse malenkije bukvi posle bolsoj, esli * stavim, to mozet bit ot 0 do beskonecnosti, togda najdiom i slovo kotoroje sostojit iz odnoj bukvi, naprimer I

// const re = /[A-Z][a-z]{0,}/gm; // esli kirilica to dobaliajem [А-Я]
// const isEmailValid = /[a-z0-9\.\-]{1,}@[a-z0-9\.\-]{1,}\.[a-z]{1,}$/gi;
//

// const str =
//   'Following a darkly poetic narrative, the story centers around historical figure George Burroughs and fictional witch hysteria victim, Rachel Dyer. With about two-thirds of the story taking place in the courtroom, it follows the trials of multiple alleged witches. Themes include justice, sexual frustration, mistreatment of American Indians by Puritans, the myth of national American unity in the face of pluralist reality, and republican ideals as an antidote for Old World precedent.';

// console.log('match', str.match(re));
// console.log('test', isEmailValid.test(str)); // false
// console.log('test', isEmailValid.test('nikita.korovin@quantori.co.uk')); // false

// let res;
// while ((res = str.match(re))) {
//   console.log(res);  beskonecnij cikl
// }

// Функция getFullName принимает на вход строку, в которой
// обязательно есть "Имя Фамилия", например, Иван Иванов
// Петр Сидоров и т.д.
// возвращает строку "Привет, ${Имя Фамилия}"

// const getFullName = str => {
//   const re = /[A-ZА-Я][a-zа-я]{0,}\s[A-ZА-Я][a-zа-я]{0,}/;
//   const match = str.match(re);
//   return `Привет, ${match[0]}`;
// };

// console.log(getFullName('Иван Иванов'));
// console.log(getFullName('Ivan Ivanov'));
// console.log(getFullName("Where's Petr Petrov?"));

// **************************NEW THEME (Dates)****************************

// const start = new Date();
// console.log(new Date(1995, 1, 5, 22, 15, 30)); // janvar eto nulevoj mesiac

// console.log(+start); // skolko milisekund proslo s 1997 goda (+ perevodit vsio v cislo)

// for (let i = 0; i < Math.pow(10, 6); i++) {
//   console.log(i);
// }

// const end = new Date();
// console.log(+end);

// console.log('result ', end - start);

// const d = new Date();

// console.log(d.getFullYear()); // 2022
// console.log(d.getMonth()); // 9 potomu cto s 0 meseca
// console.log(d.getDate()); // 5
// console.log(d.getDay()); // 3 sreda
// console.log(d.getHours()); // 10h
// console.log(d.getMinutes()); // 58m

// d.setFullYear(2007);

// console.log(d);

// *********************NEW THEME (Objects, Arrays)*********************

// const obj = {
//   a: 1,
//   b1: 1,
//   b: '123',
//   k: 'date',
//   date: new Date(),
//   nested: {
//     child: {
//       f: -1,
//     },
//   },
// };

// console.log(obj.a); // 1
// console.log(obj['b']); // 123
// console.log(obj[obj.k]); // new Date()

// obj.a = 10;
// console.log(obj.a); // 10 perepisali

// obj.date.setFullYear(2000); // perepisali
// console.log(obj.date);

// console.log(obj.nested.child.f);

// obj.j = 8;
// console.log(obj.j); // 8 perepisali

// obj.nested = obj;
// console.log(obj);

// const objCopy = obj;

// objCopy.a = 150;
// console.log(objCopy.a, obj.a);

// const a = someObject => {
//   someObject.k = 10; // objekt meniajetsia
//   return true;
// };

// const obj = { k: 1 };
// a(obj); // const someObject
//a({...obj}) const someObject tak nado pisat
// console.log(obj.k);

// const b = someNumber => {
//   // cislo ne meniajetsia
//   Math.ceil(someNumber);
//   return true;
// };

// const f = 5.3;
// b(f);
// console.log(f);

// const c = someString => {
//   // stroka ne meniajetsia
//   someString = someString + '123';
//   return true;
// };
// const str = 'Hello';
// c(str);
// console.log(str);

// 1 Variant skopirovat objekt
// const obj = { a: 2 };
// const copyObj = { ...obj }; // kopirujem znacenije obj

// copyObj.a = 3;

// console.log(copyObj.a, obj.a);

// const obj2 = { a: 2, c: { d: 4 } }; // tak ne skopirujetsia vsio, kopirujet tolko pervoje znacenije, jesli jest objekt v objekte eto ne skopirujetsia
// const copyObj2 = { ...obj2 }; // kopirujem znacenije obj tolko pervoje

// copyObj2.c.d = 15;

// console.log(copyObj2.c.d, obj2.c.d);

// Object.keys(obj) metod, ctob perebrat vse kliuci, poluciajem massiv iz kliucej
// console.log(Object.keys({ a: 2, v: 4, b: 3 }));

// Object.values(obj) metod, ctob perebrat vse znacenija poluciajem massiv
// console.log(Object.values({ a: 2, v: 4, b: 3 }));

// Object.entries(obj) metod, ctob perebrat vse entries, poluciajem massiv iz vseh, cto bi potom mozno bilo projtis po massivu
// console.log(Object.entries({ a: 2, v: 4, b: 3 }));

// const temperature = {
//   '05.10.2022': 20,
//   '04.10.2022': 15,
//   '03.10.2022': 23,
// };

// const arr = Object.values(temperature);

// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   // arr[0] = 20, arr[1] = 15, arr[2] = 23
//   res += arr[i];
// }

// const medium = res / arr.length;

// const obj = {
//   a1: 1,
//   a2: 2,
//   b1: 3,
// };

// sozdali kopiju objekta uvelicili vse znacenija na 1
// const res = {};
// const arr = Object.entries(obj);

// arr[0] = ['a1', 1]
// arr[1] = ['a2', 2]
// arr[2] = ['b1', 3.5]

// for (let i = 0; i < arr.length; i++) {
//   res[arr[i][0]] = arr[i][1] + 1; // beriom iz massiva i = 0 element eto a1, a2, b1, = massiv i = 1 eto 1, 2, 3.5 i plius 1
// }

// console.log(res);

function copyObj(obj) {
  const res = {};

  const arr = Object.entries(obj);
  // arr[0] = ['a', 1]
  // arr[1] = ['b', 2]
  // arr[2] = ['d', {f:{c:new Date()}}]
  for (let i = 0; i < arr.length; i++) {
    const type = typeof arr[i][1]; //number, string, object
    if (type === 'number' || type === 'string') {
      res[arr[i][0]] = arr[i][1];
    } else if (type === 'object') {
      if (Object.keys(arr[i][1]).length !== 0) {
        res[arr[i][0]] = copyObj(arr[i][1]);
      } else {
        res[arr[i][0]] = arr[i][1];
      }
    }
  }

  return res;
}

console.log(copyObj({ a: 1, b: 2, d: { f: { c: new Date() } } }));
