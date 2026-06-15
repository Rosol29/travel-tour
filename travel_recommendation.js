const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('clearbtn');

const timeCountries=[
    {
        city:"Sydney, Australia",
        timeZone:"Australia/Sydney"
},
{
    city:"Melbourne, Australia",
    timeZone:"Australia/Melbourne"
},
{
    city:"Tokyo, Japan",
    timeZone:"Asia/Tokyo"
},
{
    city:"Kyoto, Japan",
    timeZone:"Asia/Tokyo"
},
{
    city:"Rio de Janeiro, Brazil",
    timeZone:"America/Sao_Paulo"
},
{
    city:"São Paulo, Brazil",
    timeZone:"America/Sao_Paulo"
},
];


function clearbutton() {
    document.getElementById("conditonInput").value = "";
   document.getElementById('result').innerHTML="";

  }
function searchCondition() {
    const input = document.getElementById('conditonInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';


    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries;
        const beach = data.beaches;
        const temple = data.temples;


        console.log('country',country);
        console.log('beach',beach);

        if(input === "country"){
           
            for(let i=0; i<= country.length-1; i++){
            
                const subcity=country[i].cities;
                for(let j=0; j<2 ;j++){
                    
               const city=subcity[j].name;
               const imageu=subcity[j].imageUrl;
               const descriptioncity=subcity[j].description || subcity[j][""];
               timeCountries.forEach(timeCountries=>{
                const currentTime=new Date().toLocaleTimeString("en-US",{
                    timeZone:timeCountries.timeZone,
                    hour:"2-digit",
                    minute:"2-digit",
                    second:"2-digit",
                    hour12:true
                });
                console.log(`${timeCountries.city}:${currentTime}`)
               })

               resultDiv.innerHTML +=`<div class="card">
               <img src="${imageu}" style="width:100%; height:200px" alt="hjh">
               <h3><b>${city}</b></h3>
               <p>${descriptioncity}</p>
               <p style="color:green"> Local Time: 
                ${new Date().toLocaleTimeString("en-US",{
                    timeZone:timeCountries.timeZone})
                }</p>
               </div>`;

               console.log('city name',city)
                }
            
                
            }
           
        }

        if(input.toLowerCase() === "beach"){
            console.log('BEACH',beach)
            for(let i=0; i<= beach.length-1; i++){
                const subcity=beach[i].name;
                const imageu=beach[i].imageUrl;
                const descriptioncity=beach[i].description;
      
             
               resultDiv.innerHTML +=`<div class="card">
               <img src="${imageu}" style="width:100%; height:100%" alt="hjh">
               <h3><b>${subcity}</b></h3>
               <p>${descriptioncity}</p>
               </div>`;

            
                
            
                
            }
        }
    
        if(input.toLowerCase() === "temple"){
            console.log('temple',temple)
            for(let i=0; i<= temple.length-1; i++){
                const subcity=temple[i].name;
                const imageu=temple[i].imageUrl;
                const descriptioncity=temple[i].description;
      
             
               resultDiv.innerHTML +=`<div class="card">
               <img src="${imageu}" style="width:100%; height:200px" alt="hjh">
               <h3><b>${subcity}</b></h3>
               <p>${descriptioncity}</p>
               </div>`;

            
                
            
                
            }
        }

      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }


    btnSearch.addEventListener('click', searchCondition);
    btnClear.addEventListener('click', clearbutton);


    const options = { timeZone: 'America/New_York', hour12: true,
     hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const newYorkTime = new Date().toLocaleTimeString('en-US', options);
	console.log("Current time in New York:", newYorkTime);
