
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let displaySection = document.getElementById('displaySection');
    displaySection.style.display='block';
 
    let displayDiv = document.getElementById('display');
    let searchInput= document.getElementById('searchInput').value;
    if(searchInput != ""){

  
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
fetch(url)
.then(response => response.json())
.then(data =>foundMeal(data.meals[0]));
   let foundMeal = (mealItem) =>{
    
  

        let showMealItem = document.createElement('div');
        showMealItem.className = 'col-md-3 ml-5 mb-5';
      
        let itemInfo = `
        <div class="card" id='itemCard'>
        <img src="${mealItem.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
             <p class="card-text">${mealItem.strMeal}</div>
           </div>   
                    
        `;
        showMealItem.innerHTML = itemInfo;
        displayDiv.appendChild(showMealItem);


        let itemCard = document.getElementById('itemCard');
        itemCard.addEventListener('click',()=>{
   
    let itemIngredients = [];
		for (let i = 1; i <= 20; i++) {
		if (mealItem[`strIngredient${i}`]) {
			itemIngredients.push(
				`${mealItem[`strMeasure${i}`]} ${mealItem[`strIngredient${i}`]}`
			);
		} else {
				break;
        };
    }


 let searchSection = document.getElementById('searchSection');
 searchSection.style.display='none';
 displayDiv.style.display='none';

                let itemDetailsDiv = document.getElementById('itemDetails');
                let showDetails = document.createElement('div');
                showDetails.className = 'col ml-5 mb-5';
                
                let itemInfoDetails = `
                <div class="card big-card">
                <img src="${mealItem.strMealThumb}" class="card-img-top" alt="...">
                   <div class="card-body">
                     <p class="card-text big-card-text">${mealItem.strMeal}</p>
                     <h5>Ingredients:</h5>
                     <ul>
                         ${itemIngredients.map(found=> `<li><i class="fas fa-check-square"></i>  ${found}</li>`).join('')}
                     </ul>
                   </div>

                   </div>   
                            
                `;
                showDetails.innerHTML = itemInfoDetails;
                itemDetailsDiv.appendChild(showDetails);
})
}

    }else{
        document.getElementById('message').innerText='No results Found!'
    }
})














//  const fetchDatas = foundMeals =>{
     
    
//     const displayDiv = document.getElementById('display');

//     displayDiv.innerText=foundMeals;

// var arr= foundMeals[0];
//     arr.forEach( meals=>{
//         const mealItem = document.createElement('div');
//         mealItem.className = 'mealItem';
//         const itemInfo = `
//             <h3 class="itemName">${meals.strMeal}</h3>
//             <p>${meals.strCategory}</p>
           
//         `;
//         mealItem.innerHTML = itemInfo;
//         displayDiv.appendChild(mealItem);
//     });
//}


// const displayCountries = countries =>{
//     const countriesDiv = document.getElementById('countries');
//     countries.forEach(country => {
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';
//         const countryInfo = `
//             <h3 class="country-name">${country.name}</h3>
//             <p>${country.capital}</p>
//             <button onclick="displayCountryDetail('${country.name}')">Details</button>
//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     });
// }