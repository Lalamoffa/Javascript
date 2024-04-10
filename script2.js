var input=document.getElementById("inputTxt");

var btn=document.querySelector(".box button");
var ul=document.querySelector(".list-group");
btn.addEventListener("click", function(){
    var inputValue=input.value;
    if(inputValue!="")
    {
        var li=document.createElement("li");
        li.innerHTML=inputValue;
        li.classList.add("list-group-item")
        ul.appendChild(li);
        input.value=" "
    }else
    {alert("Bos olmaz!")}
    })
   
// var buttons=document.querySelectorAll(".btn");
// var count=0;
// buttons.forEach(btn => {
//     //console.log(btn)
//     btn.addEventListener("click", function(){
//         //alert(btn.innerHTML);
//         count++;
//         if(count<=2){
//             btn.previousElementSibling.style.display="block";
//         btn.parentElement.previousElementSibling.style.filter="blur(0px)"
//         }
//         else{
//             alert("Siz sansinizi doldurmusunuz!");
//         }
        
//     })
// });