/**
 * const、let等の変数宣言
 */
// var val1="var変数";
// console.log(val1);

// //var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

// let val2="let変数";
// console.log(val2);

//  let val2="let変数を上書き";
//  console.log(val2);

// //letは再宣言不可能
// let val2="let変数を再宣言";

//const変数は上書き・再宣言不可

//constで定義したオブジェクトはプロパティの変更可能
// const val4={
//   name:"名前",
//   age:3,
// };
// val4.name="みずほ"
// val4.address="大宮"
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("snake");
// console.log(val5);

/*
 *テンプレート文字列
 */
// const name = "みずほ";
// const age = 3;

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
 *アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
//console.log("func1です。");

// const func1 = function (str) {
//   return str;
// };
// console.log("func1です。");

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log("func2です。");

// const func3 = (num1,num2) => {
//   return num1+num2;
// };
// console.log(func3(10,20));

// const func4 = (num1,num2) => num1+num2;
// console.log(func4(10,20));

/*
 *分割代入
 */
// const myProfile = {
//   name: "みずほ",
//   age: 3
// };
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["みずほ", 3];
// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("みずほ");

// const arr4=[10,20];
// const arr5=[30,40];

// const arr6=[...arr4];
// arr6[0]=100;
// console.log(arr4);
// console.log(arr6);

// const arr7=arr5;
// arr7[0]=100;
// console.log(arr5);
// console.log(arr7);

/*
 *mapやfilterを使った配列の処理
 */
// const nameArr = ["みずほ", "ほずみ", "ずみ"];

// const nameArr2=nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name)=>console.log(name));

// const numArr=[1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 ===1;
// })
// console.log(newNumArr);

// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です。`));

/*
 *三項演算子
 */
// const val1=1 < 0 ? `trueです`:`falseです`
// console.log(val1);

// const num="1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString():'数値を入力してください';
// console.log(formattedNum);

//||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);

// //&&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました。";
// console.log(fee2);
