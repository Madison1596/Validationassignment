var nav =document.body.querySelector(".nav");

var display =document.body.querySelector(".display");

var items =document.body.querySelector(".items").style.visibility="hidden";

var xdisplay =document.body.querySelector(".xdisplay");

var howImportant =document.getElementById(".important");



var list=[];

var pages = [
  
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"View",
    content:"View Notes"
  }
];

document.body.querySelector(".nav").style.visibility="hidden";


function validate(){
  
  var messEle=document.body.querySelector(".valMess");
  
  var username=document.body.querySelector(".username").value;
  
   var password=document.body.querySelector(".password").value;
  
  if(username==="coolStudent123"){
    messEle.innerHTML=""
      for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}
    




document.body.querySelector(".username").style.visibility="hidden";
    
    document.body.querySelector(".password").style.visibility="hidden";
    
    document.body.querySelector(".validate").style.visibility="hidden";
  }else{
    messEle.innerHTML="Username is incorrect.";
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
});

function createPage(pg){
  var button =document.createElement("button");
  
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
 });
  button.innerHTML=pg.name;
  
  nav.appendChild(button);
  document.body.querySelector(".nav").style.visibility="visible";
  contentWrite(pages[0].content, "Home");
}

function contentWrite(wd,pg){
  display.innerHTML="";
  
  
  if (pg == "Home"){
    homePage();
  }
  
  if(pg == "About"){
    aboutPage();
  }
  if(pg == "View"){
    viewPage();
  }
}



function aboutPage(){
  var title =document.createElement("h1");
  
  var name = document.createElement("h2");
  title.innerHTML="About";
  
  name.innerHTML="Madison Radowski"
  
  display.appendChild(title);
  display.appendChild(name);
  
  document.body.querySelector(".xdisplay").innerHTML="";
  
  document.body.querySelector(".items").style.visibility="hidden";
  
  document.body.querySelector(".submit").style.visibility="hidden";
}

function homePage(){
  var title = document.createElement("h1");
  title.innerHTML="Home";
  display.appendChild(title);
  
  document.body.querySelector(".xdisplay").innerHTML="";
  
  document.body.querySelector(".items").style.visibility="hidden";
  
  document.body.querySelector(".submit").style.visibility="hidden";
}

function viewPage(){
  var title = document.createElement("h1");
  title.innerHTML="View Notes";
  display.appendChild(title);
  
  document.body.querySelector(".items").style.visibility="visible";
  
  document.body.querySelector(".submit").style.visibility="visible";
  renderItems();
}

function renderItems(){
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    
    document.body.querySelector(".xdisplay").appendChild(ele);
  }
}

function submit(){
  var text=document.body.querySelector(".text").value;
  if(text.length>1){
    
    document.body.querySelector(".submit").innerHTML="";
    
    document.body.querySelector(".xdisplay").innerHTML="";
     list.push(text);
    
  }else{
    document.body.querySelector(".submit").innerHTML="There is not enough letters. Please input more letters.";
    
    document.body.querySelector(".xdisplay").innerHTML="";
  }
  
  
  var importance=document.body.querySelector(".importance").value;
  if(importance.length>0){
    document.body.querySelector(".submit").innerHTML="";
    
    document.body.querySelector(".xdisplay").innerHTML="";
     list.push(importance);
    
  
  }
  
  if(importance.length>0 && text.length<=1){
    document.body.querySelector(".submit").innerHTML="There is not enough letters. Please input more letters.";
    document.body.querySelector(".xdisplay").innerHTML="";
    list.pop(importance);
  }
  
  renderItems();
}


document.body.querySelector(".note").addEventListener("click", function(){
  submit();
});