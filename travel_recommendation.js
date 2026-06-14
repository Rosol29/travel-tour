const btnSearch = document.getElementById('btnSearch');

function searchCondition() {
    const input = document.getElementById('conditonInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries.find(item => item.name === input);
        console.log('country',country)

        if (country) {
          const name = country.name;
          const citiesName = country.cities[0].name;
          const imageUrl = country.cities[0].imageUrl;
          const citiesdescription = country.cities[0][""];


        console.log('country',citiesdescription)

        

          resultDiv.innerHTML += `<h2>${name}</h2>`;
          resultDiv.innerHTML += `<h2>${citiesName}</h2>`;
          resultDiv.innerHTML += `<img src="${country.cities[0].imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<h2>${citiesdescription}</h2>`;

         

         
        } else {
          resultDiv.innerHTML = 'country not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);