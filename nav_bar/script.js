// let myFriends = [];

// function addmyFriends(theFriend){
//     //myFriends.push(theFriend)
//     myFriends.unshift(theFriend) //myFriends.unshift 反向push
//     console.log(myFriends)
// }
// addmyFriends("Wei")
// addmyFriends("is")
// addmyFriends("piggy")
/*
let str1 = `I am ${2025-2005} yaers old`; //很好用
let str2 = "I am " + (2025-2005) +" yaers old";
console.log(str1);
console.log(str2);

const sum2=(a,b)=>a+b;
console.log(sum2(2,3))
// const sum2=()=>{//和function 效果一樣
//}
*/
//object
/*
const james = {
    name:'James',
    phone:'09123456',
    email:'james@gmail.com',
    greet:()=>{//method
        console.log(`Hello,I am ${james.name}`)
    },
    greet2:function (){//function
        console.log(`Hello,I am ${this.name}`)
    }

};
console.log("Name",james.name+"\rPhone",james.phone);// \r換行
james.greet();
james.greet2();
*/
/*
const arr = [1,2,3,4];
arr.push(0);
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("haha")//插入最前面
console.log(arr)
console.log(arr.shift())//將最前面的值取出 return
console.log(arr.shift())
*/
//const arr = [1, 2, 3, 4, 5, 6, 7]
//for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// //for of
// console.log()
// for(const n of arr){
//     console.log(n)
// }
//for each
// arr.forEach((n)=>{
//     console.log(n)
// })

//array methods
const arr = [1, 2, 3, 104, 4, 5, 107, 6, 7]
//map
// const doubleNum = arr.map((n)=>n*2);
// const strArr = arr.map((n)=>n.toString());
// const Odd_double = arr.map((n) => {
//     if (n % 2 !== 0) {
//         return n * 2
//     }
//     else {
//         return n
//     }
// })
// // console.log(doubleNum)
// // console.log(strArr)
// console.log(Odd_double)

//filter
const remain_odd = arr.filter((n) => n % 2 !== 0)
console.log(remain_odd)
const morethan100 = arr.filter((n) => n > 100)
console.log(morethan100)