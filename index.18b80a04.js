function e({list_name:e}){return`\n         <li><a href="" class="categories-item">${e}</a></li>\n    `}function o({books:e}){console.log(e);for(let o=0;o<e.length;o+=1)return`\n    <ul class="ul-bestsellers"> \n  <li>Category: ${e[o].list_name}</li>\n  <li>Title: ${e[o].title}</li>\n  <li>Author: ${e[o].author}</li>\n  <li>Image: <img src="${e[o].book_image}" alt="books photo" /></li>\n</ul>\n \n    `}fetch("https://books-backend.p.goit.global/books/category-list",{method:"GET",headers:{accept:"application/json"}}).then((e=>(console.log({response:e}),e.json()))).then((o=>{console.log({resData:o});const t=document.querySelector(".categories-list"),n=o.map(e).join("");t.innerHTML=n})),fetch("https://books-backend.p.goit.global/books/top-books",{method:"GET",headers:{accept:"application/json"}}).then((e=>(console.log({response:e}),e.json()))).then((e=>{console.log({resData:e});let t=document.querySelector(".top-books"),n=e.map(o).join("");n+='<button type="button">affasfs</button>',t.innerHTML=n,console.log(n),console.log(t.innerHTML)}));document.querySelector(".div-categories").addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;const o=e.target.textContent;function t({list_name:e,title:o,author:t,book_image:n}){return`\n    <ul class="ul-chosen-categories"> \n  <li>Category: ${e}</li>\n  <li>Title: ${o}</li>\n  <li>Author: ${t}</li>\n  <li>Image: <img src="${n}" alt="books photo" /></li>\n</ul>\n    `}fetch(`https://books-backend.p.goit.global/books/category?category=${o}`,{method:"GET",headers:{accept:"application/json"}}).then((e=>e.json())).then((e=>{console.log(e),console.log({resData:e});const o=document.querySelector(".ul-bestsellers"),n=document.querySelector(".top-books");o&&(o.innerHTML=""),n&&(n.innerHtml="");const l=e.map(t).join("");n.innerHTML=l}))}));document.querySelector(".book-profile").addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;function o({list_name:e}){return`\n         <li>${e}</li>\n    `}fetch(`https://books-backend.p.goit.global/books/${_id}`,{method:"GET",headers:{accept:"application/json"}}).then((e=>(console.log({response:e}),e.json()))).then((e=>{console.log({resData:e});const[t]=document.getElementsByClassName("top-books"),n=e.map(o).join("");t.innerHTML=n}))}));
//# sourceMappingURL=index.18b80a04.js.map
