// function <ten_ham> (<doiso2>, <doiso2>)
// function cong(a,b){
//     // return a+b;
//     console.log(a+b);
// }
// cong(4,5);
// console.log(cong(2,4));
// const fn = a =>{
//     return a*2;
// }
// console.log(fn(5));

// const ffnn =(a,b)=>a+b;
// console.log(ffnn(2,3));

// const Meo={
//     name: "Linh", age: 5, gen: 'nu', 
//     eat:function() {
//         console.log(`${this.name} dang an`);
//         console.log(`${Meo.name} dang cuc suc.`);
//     },
//     changeGender : function(gen){
//     this.gen=gen;
// }
// }
// Meo.eat();
// // Meo.gen="be dde";
// Meo.changeGender("meo meo meo");
// console.log(`${Meo.gen}`);
//  đây là đối tượng
function animal() {
    weight= 5, color= 'black'
}
animal.prototype.run = function(){  // la 1 phương thức của đối tượng animal
    console.log("running...");
}

const ga =new animal();
const meo=new animal();

ga.run=function(){
    console.log("swimming....");
}
ga.run();
meo.run();