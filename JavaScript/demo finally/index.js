// const dog={
//     name: "Dogn",
//     age: 20,
//     color: "blue",
//     danhSachNguoiYeuCu: [1,2,3,"phung"],
// };
// /*
// const tenCho=dog.name;
// var d=dog.danhSachNguoiYeuCu;
// console.log(d);
// console.log(tenCho);
// */
// console.log();
// const {danhSachNguoiYeuCu, name}= dog; // kỹ thuật destructoring
// console.log(danhSachNguoiYeuCu, name);

// ví dụ 2
// khi key và value giống nhau ta chỉ cần viết 1 lần
// const name="cho";
// const age=10;
// const dog={
//     name,
//     age
// }
// console.log(dog);

// ví dụ 3: promise
// const { rejects } = require("assert");
const { rejects } = require("assert");
const fs = require("fs"); //fs và fetch đều trả về 1 promise, fs: file system 
function readFile(path) {
	return new Promise((resolve, rejects)=> {
		fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
			if (err) {
				rejects(err); //
			} else {
				resolve(data);
			}
		});
	});
}
/*
rejects: k thực hiện lời hứa
resolve: bắt đc kết quả khi nó đc thực hiện
*/
Promise.all([ readFile("text.txt"), readFile("text2.txt") ])
	.then((data) => console.log(data))
    .catch((err) => console.log("err:", err));
function a(){
    console.log("hello");
}    
const x={readFile, a};    
module.exports=x;