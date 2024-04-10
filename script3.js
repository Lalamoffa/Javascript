var countryCheckbox=document.getElementById("checkCountry");
var txtad =document.getElementById("txtad");
var txtSoyad =document.getElementById("txtSoyad");
var txtAtaAd =document.getElementById("txtAtaAd");
var seher =document.getElementById("seher");
var unvan =document.getElementById("unvan");
var tel =document.getElementById("tel");
var mail =document.getElementById("mail");
var yas =document.getElementById("yas");
var txtapply =document.getElementById("txtapply");
var genderMsg =document.getElementById("genderMsg");
var socialStatus =document.getElementById("socialStatus");
var count =document.getElementById("count");
var muracietMsg =document.getElementById("muracietMsg");
var secim2 =document.getElementById("secim2");
var submitBtn =document.getElementById("submitBtn");




countryCheckbox.addEventListener("change", function () {
    var noneElements = document.getElementsByClassName("dNoneCountry");
  
    if (countryCheckbox.checked) {
      console.log(noneElements)
      for (var i = 0; i < noneElements.length; i++) {
        noneElements[i].style.display = "none"
      }
      document.getElementById("cityVisible").style.display="block"
    } 
    else {
      for (var i = 0; i < noneElements.length; i++) {
        noneElements[i].style.display = "block"
      }
      document.getElementById("cityVisible").style.display="none"
    }
  })

  submitBtn.addEventListener("click",function(){
    checkNull(txtad);
    checkNull(txtSoyad);
    checkNull(txtAtaAd);
    checkNull(checkCountry);
    checkNull(seher);
    checkNull(unvan);
    checkNull(tel);
    checkNull(mail);
    checkNull(yas);
    checkNull(txtapply); 
    checkNull(socialStatus);
    checkNull(secim2);
    
  var gender = document.querySelectorAll('.gender')
  var check=false;
  for(var i=0;i<gender.length;i++)
  {
    if(gender[i].checked)
    {
      check = true;
      break;
    }
  }

  if(check)
  {
    genderMsg.style.display = "none";
  }
  else 
  {
    genderMsg.style.display = "block";
  }

  var muraciet =document.querySelectorAll('.muraciet')
  var check1=false;
  muraciet.forEach(element => {
    if(element.checked)
    {
    check1=true;
    }
  });

    if(check1)
    {
      muracietMsg.style.display = "none";
    }
    else
    {
      muracietMsg.style.display = "block";
    }
  
  })
txtapply.addEventListener("keyup",function(){
  count.innerHTML=500-txtapply.value.length
})

  function checkNull(htmlInput){
    if(htmlInput.value.trim()==""){
      htmlInput.nextElementSibling.style.display = "block"
    }
    else{
      htmlInput.nextElementSibling.style.display = "none"
    }
  }