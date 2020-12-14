// const fs=require('fs');
// console.log("start");
// function readFile(path){
//     return new Promise(function(resolve, reject){
//         fs.readFile(path, { encoding: "utf-8"}, function(err, data){
//             if(err){
//                 reject(err);
//             }else {
//                 resolve(data);
//             }

//         });

//     });
// }
// readFile("./data.txt").then(function(data){  //.then bắt cái kết quả
//     console.log(data);
// })
// .catch(function (err){
//     console.log("lỗi rồi", err);
// })
// .finally(function(){
//     console.log("end");
// });
// // const data =fs.readFileSync("./data.txt", { encoding: "utf-8"});

console.log("trên");
setTimeout(()=>{
    console.log("settimeout callbaxk"); //vì nó bất đồng bộ(tốn time ) nên đẩy vào background để thực hiện sau
}, 0);
setTimeout(()=>{
    console.log("settimeout callbaxk 1000ms"); //vì nó bất đồng bộ(tốn time ) nên đẩy vào background để thực hiện sau
}, 100);
var n=1000;
while(n--){
    
    console.log("dưới");
}
