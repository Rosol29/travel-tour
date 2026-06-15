const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditonInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';


    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries;
        console.log('country',country);
        if(input === "country"){
           
            for(let i=0; i<= country.length-1; i++){
                const subcity=country[i].cities;
                for(let j=0; j<2 ;j++){
               const city=subcity[j].name;
               const imageu=subcity[j].imageUrl;
               const descriptioncity=subcity[j].description || subcity[j][""];
               resultDiv.innerHTML +=`<div class="card">
               <img src="${imageu}" style="width:100%; height:100%" alt="hjh">
               <h3><b>${city}</b></h3>
               <p>${descriptioncity}</p>
               </div>`;
            //    resultDiv.innerHTML += `<img src="${imageu}" alt="hjh">`;

            //    resultDiv.innerHTML +=`<h1>${city}</h1>`;
               

               console.log('city name',city)
                }
            

                // console.log('name',subcity)
          
                // console.log('city2 name',city2)

                
            }
           
        }
    

      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);