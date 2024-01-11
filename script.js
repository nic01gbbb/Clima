const key ="c2d2638bfaf0b5cdf8908e643a3db991"
const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn")
const img = document.querySelector(".nuvem")



function showvalores(valores){
document.querySelector("h1").innerHTML = " Tempo em " + valores.name
document.querySelector(".graus").innerHTML = parseInt(valores.main.temp)+"°C"
document.querySelector(".nuvem img").src=`https://openweathermap.org/img/wn/${valores.weather[0].icon}.png`
document.querySelector(".tempo").innerHTML =valores.weather[0].description
document.querySelector(".Umi").innerHTML = "Umidade: " + valores.main.humidity +"%"


}



async function mostrarcidade(cidade){

const valores =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(respose=> respose.json())
console.log(valores)
showvalores(valores)
img.style.opacity="1"
inp.value =""
inp.focus()


}



const lookcity=()=>{
const cidade  = inp.value 
 mostrarcidade(cidade)



 


}




btn.addEventListener("click",lookcity)
