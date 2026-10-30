const apiKey = "625e7b75f136b6bbc17555378c947ab4";

const input = document.querySelector("input");
const button1 = document.getElementById("button");
let symbol1=document.querySelector(".symbol");
let symbol2=symbol1.innerText;


button1.onclick = async () => {
    let city = input.value;
    let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    );
      
    let data = await res.json();
    if(data.cod !=200) {
        
    alert("city not found")
return;
 }

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+symbol2;
document.querySelector(".description").innerHTML = data.weather[0].description;
};
