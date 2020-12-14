/* cach 1
function setName(name){
    return name;
}
function sayHello(name, fn){
    if (typeof fn ==='function'){
        console.log('hello ......'+ name);
        console.log('my name is '+ fn('anh cong'));
    }
    
}
sayHello('nam', setName);
*/
// vidu2  cach2
/*
const calc =(a,b,fn)=>{
    const sum=a+b;
    const malti=a*b;
    fn(sum, malti);
}
const cb=(a,b)=>{
    console.log('tong: '+a);
    console.log('tich: '+b);
}

calc(2,3,function(sum, malti ){
    console.log(sum+malti);
})
*/
//vidu3
/*
const map=(arr, fn)=>{
    const arrayy=[];
    for (const ele of arr){
        arrayy.push(fn(ele));
    }
    return arrayy;
}
const cb=(a)=>{
    return (a*2).toString();
}

const arr=[1,2,3,4,5];
console.log( map(arr,cb) );
*/
//vidu 4
/*
const listUser=[
    {name: "khanh", age: 20},
    {name: "anh", age: 10},
    {name: "nam", age: 50},
    {name: "dong", age: 40}    
]
const map=(list, fn)=>{
    const array=[];
    for (const ele of list){
        array.push(fn(ele));
    }
    return array;
}
const toHTML=(a)=>{
    return `<p> xin chao <b> ${a.name} </b> ${a.age} tuoi </p>`;
}
console.log( map(listUser,toHTML) );
*/
//  vidu 5      Phương thức biến đổi giá trị trong mảng, không cần khai báo mảng mới nữa
// const listUser=[
//     {name: "khanh", age: 20},
//     {name: "anh", age: 10},
//     {name: "nam", age: 50},
//     {name: "dong", age: 40}    
// ]
// const newArray=listUser.filter(function(value, index){
//     // console.log(index, value);
//     return (value.age>20) ;
// })
// console.log(newArray.map(function(value, index){
//     if (value.age>20) return  `xin chao ${value.name} ${value.age} tuoi`;
// }));
// ví dụ về reduece
const arr=[1,2,3];
const reducer=(acc, cur)=>acc+cur
console.log(arr.reduce(reducer, 0));
// const newArray =arr.reduce(function(a,b){
//     console.log('a',a);
//     console.log('b',b);
// }, noi)

