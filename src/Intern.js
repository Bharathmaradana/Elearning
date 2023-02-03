import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Intern() {
          

          const [data,setdata] = useState([]);
          const [filterdata,setfilterdata] = useState([{}]);

          const loaddata = async () => {
          await  axios.get("https://api.sampleapis.com/countries/countries").then((res) => {
             
              setdata(res.data);
              // console.log(res[0]["name"])
          
            console.log(filterdata);

            }).catch((err)=>{
              console.log(err)
            });
          }
    
  return (
    <div>
      <button onClick={loaddata}>click to load data</button>
      <div>
        {data.map((x) => {
          if (x.name[0] === "r" || x.name[0] == "R") {
            console.log(x.name);

            <div style={{color:'black'}}>{x.name}</div>
          }
        })}
      </div>
    </div>
  );
}

export default Intern