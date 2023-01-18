var cityInput = document.getElementById("cityInput");
var addinpute = document.getElementById("add");
var cityoutput = document.getElementById("cityoutput");
var descoutput = document.getElementById("description");
var windoutput = document.getElementById("wind");
var tempoutput = document.getElementById("temp");
const alikey = "3045dd712ffe6e702e3245525ac7fa38";


async function Getweather()
{
var weatheresualt =await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${alikey}`)).json();
setinfo(weatheresualt);
}



function convertcel(value)
{
    return (value-273).toFixed(0);
}




function setinfo(data)
{
    var cityname = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    cityoutput.innerHTML=`City : ${cityname}`;
    descoutput.innerHTML=`Descraption Wind : ${description}`;
    tempoutput.innerHTML=`Temprature : ${convertcel(temp)}`;
    windoutput.innerHTML=`Wind : ${wind} km/h`;


}



addinpute.addEventListener("click",Getweather);