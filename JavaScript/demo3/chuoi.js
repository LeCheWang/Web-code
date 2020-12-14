const str="CLB HIT";
// const arr=str.split("B");//tách từng kí tự thành phần tử theo B
// const newStr=str.replace(' ', '+');
function replaceAll(str, s, r){
    const newStr=str.replace(new RegExp(s, "g"), r);
    return newStr;
}
console.log(str.startsWith("C"));
console.log(replaceAll(str, " ", ","));
