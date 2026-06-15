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