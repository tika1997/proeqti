//ვქმით ფუნქციას რეცეპტის წამოღების
function getRecipes() {
    let ingredient = document.getElementById("ingredientInput").value;
    // ENDPOINT API URL:https://www.themealdb.com/api/json/v1/1/filter.php?i= (GET)
    let apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                displayRecipes(data.meals);
            } else {
                alert("No recipes found for this ingredient.");
            }
        })
        .catch(error => {
            console.error(error);
        });
}
//ვქმნით ფუნქციას რეცეპრების გამოსატანად 
function displayRecipes(meals) {
     // console.log(meals);
    let recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";
//ფორიჩით გადავუვლით და მთლიანი საღმელებიდან მივწვდებით თითოეულ საჭმელს 
    meals.forEach(meal => {
        let listItem = document.createElement("li");
        listItem.classList.add("recipe-item");

        let mealName = meal.strMeal;
        let mealId = meal.idMeal;

        listItem.innerHTML = `<h3>${mealName}</h3>
        <h3>${mealId}</h3>
    
        <img src="${meal.strMealThumb}">`;

        recipeList.appendChild(listItem);
    });
}



