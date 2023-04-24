const restaurantBtn = document.querySelector(".randomRestaurant")
const restaurants = ["lunds", "urban skillet", "india Palace", "Doolittles", "Pizza Ranch"]


restaurantBtn.addEventListener("click", function(){
    const int = Math.floor(Math.random() * restaurants.length)
    console.log(int)
    alert(restaurants[int])
})