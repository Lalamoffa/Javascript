var categorySelectBox = document.getElementById("category")
fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(json =>{
        json.forEach(element => {
            var option=document.createElement("option");
            option.innerHTML = element;
            option.setAttribute("value",element);
            categorySelectBox.appendChild(option)
        });
      })


fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        var htmlElements="";
        json.forEach(element => {
            console.log(element)
            htmlElements +=` 
            <div class="col-md-3">
            <div class="card mt-5 mb-5" >
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description.substring(0,50)}</p>
              <p class="card-text">${element.category}</p>
              <p class="card-text">${element.price}</p>
              <p class="card-text">${element.rating.rate}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            </div>
       `
        });
        document.getElementById("cardsFiled").innerHTML=htmlElements

      })

    
      categorySelectBox.addEventListener("change",function(){
        
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        var htmlElements="";
        json.forEach(element => {
            if(element.category==this.value){
            htmlElements +=` 
            <div class="col-md-3">
            <div class="card mt-5 mb-5" >
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description.substring(0,50)}</p>
              <p class="card-text">${element.category}</p>
              <p class="card-text">${element.rating.rate}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            </div>
       `
            }
        });
        document.getElementById("cardsFiled").innerHTML=htmlElements

      })
    })
  