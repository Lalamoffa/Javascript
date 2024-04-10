var listdata = document.getElementById("list")
var countryselect = document.getElementById("countryselect")
var country = countryselect.value
var cityselect = document.getElementById("cityselect")
var city= cityselect.value
var button = document.getElementById("select")
button.addEventListener("click",function(){
    fetch("https://api.aladhan.com/v1/calendarByCity/2024/04?city="+city+"&country="+country+"&method=2").then(res => {
        if(res.ok){
            alert('success');
        }
        else{
            alert('not success');
        }
        return res.json();
    }).then(item =>{
        item.data.forEach(element => {
            console.log(element)
            listdata.innerHTML += `
            <ul>
            <li>${element.timings.Sunrise}</li>
            <li>${element.timings.Sunset}</li>
            </ul>
    
            `
        });
    })
})

