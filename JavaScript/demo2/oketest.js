const array=[1,2,33,4];
const reducer=(a,b)=>a+b;
console.log(array.reduce(reducer, 10));
const ar =array.map((value, index, ar)=>{
   return value*2;
});
console.log(ar);

const song =[
    {id: "1", name: "Vo Cung", singer: "Phan duy anh"},
    {id: "2", name: "Vo Cung", singer: "Phan duy anh"},
    {id: "3", name: "Vo Cung", singer: "Phan duy anh"},
    {id: "4", name: "Vo Cung", singer: "Phan duy anh"}
];


const allsong =song.map(item =>{
    return item.name.toUpperCase();
});
console.log(allsong);
var ten='Ten';
const nguoi={
    quocTich: "Viet Nam", GioiTinh: "Nam",
    [`Ho${ten}`]: "Phong đẹp trai"
}
console.log(nguoi);

const nguoiKhac={
    ...nguoi, //kế thừa
    GioiTinh:"Nu",
    [`Ho${ten}`]: "Phong VIP"
}
console.log(nguoiKhac);
// let fruits = ['🍈', '🍉', '🍋', '🍌'];
// console.log(...fruits); //🍈 🍉 🍋 🍌
// var arr=["looanhem nha","hello", "ahiii"];
// console.log(arr.filter(item=>{
//     return item.includes("lo");
// }));