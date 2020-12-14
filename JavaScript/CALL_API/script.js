const root = document.getElementById("root");
const API="http://demo.hoangduykhanh.com/api/products"
    // root.innerHTML="<h1>hello</h1>"
    // console.log(root);
const a= fetch(API);
// a.then((data)=>{
//     console.log(data);
// })
// console.log(a);
a.then((data)=>data.json()).then((val)=>{
    let e='';
    val.data.map((value)=>{
        e+=`<div class="row">
        <div class="card" style="width: 18rem;">
            <img src="${value.thumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${value.name}</h5>
              <p class="card-text">${value.description}</p>
              <a href="#" class="btn btn-primary">${value.price}</a>
            </div>
          </div>
    </div>`;
        
    })
    root.innerHTML=`<div class="row">${e}</div>`
    
})

async function fet(api){
    
}


// const name1="phong";
// const templateString =`my name is ${name1}`;
// console.log(templateString);