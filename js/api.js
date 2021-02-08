
const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
    let displaySection = document.getElementById('displaySection');
    let msg = document.getElementById('message');
    displaySection.style.display='block';
 
    let displayDiv = document.getElementById('display');
    displayDiv.innerHTML='';
    let searchInput= document.getElementById('searchInput').value;
    if(searchInput != ""){

    
       
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
fetch(url)
.then(response => response.json())
.then(data =>foundMeal(data.meals[0]))
.catch(err =>{
    console.log(err);
    msg.style.display='block';
    msg.innerText="No results Found !";
   
  });



  msg.style.display='none';
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
    
     msg.style.display='block';
     msg.innerText='Insert a meal name!';
    }
  
})


    