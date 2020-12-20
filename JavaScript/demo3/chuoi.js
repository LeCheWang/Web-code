const str="CL I H i T";
// const arr=str.split("B");//tách từng kí tự thành phần tử theo B
// const newStr=str.replace(' ', '+');
// console.log(str.replace(' ', '+'));
// console.log(arr);

function replaceAll(str, s, r){
    const newStr=str.replace(new RegExp(s, "igm"), r);
    return newStr;
}
console.log(str.startsWith("C"));
console.log(str.endsWith("H"));
console.log(replaceAll(str, "i", ","));
