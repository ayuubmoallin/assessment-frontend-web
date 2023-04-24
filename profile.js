const color = document.querySelector("#color")
const place = document.querySelector("#place")
const ritual = document.querySelector("#ritual") 

color.addEventListener("click", function(){
console.log(color.textContent)
})
place.addEventListener("click", function(){
console.log(place.textContent)
})
ritual.addEventListener("click", function(){
console.log(ritual.textContent)
})