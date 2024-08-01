var btnShow = document.getElementById("btnShow");
var calendarBody = document.getElementById("calendar");

btnShow.addEventListener("click", function () {
    var city = document.getElementById("city").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    calendar.innerHTML = "";
    var htmlBody = "";

    fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => {
            console.log(json.data)
            json.data.forEach(element => {
                htmlBody += `
                <tr>
                <td>${element.date.gregorian.date}</td>
                <td>${element.date.hijri.date}</td>
                <td>${element.date.gregorian.weekday}</td>
                <td>${element.timings.Imsak}</td>
                <td>${element.timings.Fajr}</td>
                <td>${element.timings.Sunrise}</td>
                <td>${element.timings.Dhuhr}</td>
                <td>${element.timings.Asr}</td>
                <td>${element.timings.Sunset}</td>
                <td>${element.timings.Maghrib}</td>
                <td>${element.timings.Isha}</td>
                <td>${element.timings.Midnight}</td>
                </tr>
            `
            })
            calendarBody.innerHTML = htmlBody
        })
})
