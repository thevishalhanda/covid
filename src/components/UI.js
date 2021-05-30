import React, {useState} from  'react'
import './UX.css'
const api = {  
    key :"4d8fb5b93d4af21d66a2948710284366",
    base: "https://api.openweathermap.org/data/2.5/"
  }
function Userinterface (){

  
      const [query, setQuery]  = useState('')
      const [result,  setResult] = useState('')
      const kelvin  = 273
       
 
      const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setResult(result);
              setQuery('');
              console.log(result);
            });
        }
      }


        
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }




    return (
     
 
    <div  className={(typeof result.main != "undefined") ? ((result.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
 
           


           <div className = "main">
               
               <p> Weather forecast </p>
               <input placeholder = "Search" onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} >


               </input>
               

                  </div>

                  {(typeof result.main != "undefined") ? (
           
            <div className = "weather-content">
              
              <p className = "City">{result.name} , {result.sys.country}</p>
              
              

                    
              <p className = "date">{dateBuilder(new Date())}</p> 


                   <p className = "weather-gen"> {result.weather[0].description}</p>
                   <p className = "temp-c"> {result.main.temp} <span>°C</span></p>
                   <p className = "temp-k"> {result.main.temp + kelvin} <span> K</span></p>                  
                   
        </div> 


           ) : ('')}

        
        

        
        </div>
    

     

    );



}


export default  Userinterface;