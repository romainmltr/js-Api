let collectionCursor = null

function initCoktailTypes() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('#cocktailCollection')
                data.drinks.map(drink => {
                    container.innerHTML += `
                    <div class="card-cocktail">
                    <div class="card-meal">
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src="${drink.strDrinkThumb}" alt="" class="imgCollection">
                        </div>
                        <div class="flip-card-back">
                        <h2 class="random-cocktail">${drink.strDrink}</h2>
                        </div>

                    </div>
                    </div>
                    </div>
                    </div>
                    `
                    })
            })

            
        }

initCoktailTypes();


function AllBeers(){
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('#mealCollection')
                 data.meals.map(meals => {
                    
                        container.innerHTML += `
                        <div class="card-meal">
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="${meals.strMealThumb}" alt="" class="imgCollection" style="width:300px;height:300px;">
                            </div>
                            <div class="flip-card-back">
                            <p>${meals.strTags}</p> 
                            <p>Origine :${meals.strArea}</p> 
                            <a href="${meals.strYoutube}">Video</a>
                            </div>
                        </div>
                        </div>
                        </div>
                            `
                        })
            }       )
    }

 AllBeers();


function cocktailCollection(){
    const selectinput = document.querySelector('#typesCocktail')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    .then(response => response.json())
    .then(data => {
    data.drinks.map(i => {
        selectinput.innerHTML += `<option value="${i.strIngredient1}" style="color:black;">${i.strIngredient1}</option>`
    })
    // const selectIngredientns = container.target.value;
    // selectIngredientns.innerHTML = ''
    })
}
cocktailCollection()

function loadAssets(){
    const selectinput = document.querySelector('#typesCocktail')
    fetch(``)
    .then(response => response.json())
    .then(data => {
    data.drinks.map(i => {
        selectinput.innerHTML += `<option value="${i.strIngredient1}" style="color:black;">${i.strIngredient1}</option>`
    })
    // const selectIngredientns = container.target.value;
    // selectIngredientns.innerHTML = ''
    })
}

loadAssets()



    //find a cocktail by the type of the ingredient
function fetchCocktailByType(cocktailType) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + cocktailType)
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#cocktailRadom')
        data.drinks.map(drink => {
            container.innerHTML += `
            <div class="random-cocktail">
            <img src="${drink.strDrinkThumb}" alt="" class="imgCollection">
                <h2 class="random-cocktail">${drink.strDrink}</h2>
            </div>
            
            `
                }) 
        })
}


    //event listener to check change on Cocktail Select Input
document.querySelector('#typesCocktail').addEventListener('input', (e) => {
    let selectValue = e.currentTarget.value
    const container = document.querySelector('#cocktailRadom')
    container.innerHTML = ''
    fetchCocktailByType(selectValue)
})





function randomCocktail (){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#cocktailRadom')
        data.drinks.map(drink => {
            container.innerHTML += `
            <div class="random-cocktail">
            <img src="${drink.strDrinkThumb}" alt="" class="imgCollection">
                <h2 class="random-cocktail">${drink.strDrink}</h2>
            </div>
            `
                }) 
        })
}

randomCocktail()    





/*
function loadMoreCollections() {
    if (collectionCursor !== null) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php&cursor=${collectionCursor}`)
            .then(response => response.json())
            .then(response => {
                const container = document.querySelector('#mealCollection')
                data.meals.map(meals => {
                    container.innerHTML += `
                    <div class="card">
                    <img src="${meals.strMealThumb}" alt="" class="imgCollection">
                    </div>
                            `
                })

                if (response.remaining === 1) {
                    collectionCursor = response.cursor
                } else {
                    document.querySelector('#showMore').style.display = 'none'
                    collectionCursor = null
                }

                document.querySelectorAll('.collectionName').forEach(el => {
                    el.addEventListener('click', event => {
                        loadAssets(el.dataset.address)
                    })
                })
            })
    }
}*/


