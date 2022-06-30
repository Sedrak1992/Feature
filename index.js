const row = document.querySelector("#row");

let i = localStorage.getItem("from") || 0;

const arr = [
  ` <h1>Feature  1</h1>
<p>Lorem  consectetur adipisicing elit. Vitae impedit nihil sint
 quidem voluptas neque sequi quasi quos eaque voluptatum! </p>`,
  ` <h1>Feature  2</h1>
 <p>Lorem  consectetur adipisicing elit. Vitae impedit nihil sint 
 quidem voluptas neque sequi 
 quasi quos eaque voluptatum! </p>`,
  ` <h1>Feature  3</h1>
 <p>Lorem  consectetur adipisicing elit. Vitae impedit nihil
  sint quidem voluptas neque sequi quasi quos eaque voluptatum! </p>`,
];

row.innerHTML = `
<div>
        <ul>
          <li><a href="#" onclick="tab(0)">Tab 1</a></li>
          <li><a href="#"  onclick="tab(1)">Tab 2</a></li>
          <li><a href="#"  onclick="tab(2)">Tab 3</a></li>
        </ul>
        <div id="content">
         ${arr[i]}
        </div>
    </div>
 `;
const li = document.querySelectorAll("a");

function tab(e) {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("da");
  }
  li[e].classList.add("da");
  const content = document.querySelector("#content");
  content.innerHTML = arr[e];
  localStorage.setItem("from", e);
};

li[i].classList.add("da");
