//make rain clicakble
//assign eventlistener to circles

var triangle2 = document.getElementById('circle2');
var triangle = document.getElementById('circle');


function growTree(){
  for (i = 0; i <10; i++){
  var flame = document.createElement("div");
  flame.style.left = Math.random() * 800 + "px";
  flame.style.top = Math.random() * 1500 + "px";
  flame.classList.add("tree3");
  flame.id = i;
  var container = document.getElementById('container');
  container.appendChild(flame);
}
}
growTree();

function growTree2(){
  for (i = 0; i <10; i++){
  var flame2 = document.createElement("div");
  flame2.style.left = Math.random() * 800 + "px";
  flame2.style.top = Math.random() * 1500 + "px";
  flame2.classList.add("tree2");
  flame2.id = i;
  var container = document.getElementById('container');
  container.appendChild(flame2);
}
}
growTree2();

function growTree3(){
  for (i = 0; i <10; i++){
  var flame3 = document.createElement("div");
  flame3.classList.add("tree");
  flame3.style.left = Math.random() * 800 + "px";
  flame3.style.top = Math.random() * 1500 + "px";
  flame3.id = i;
  var container = document.getElementById('container');
  container.appendChild(flame3);
}
}
growTree3();

function addDrop()
{
  var newDrop=document.createElement('img');
  newDrop.src='drop.png';
  newDrop.style.top=1500*Math.random()+"px";
  newDrop.style.width=100*Math.random()+"px";
  newDrop.classList.add('idle');
  var screenSaver=document.getElementById('container');
  if(screenSaver.childElementCount<50)
  {
    screenSaver.appendChild(newDrop);
  }
}


setInterval(addDrop,1000);
