import React, { useState , useEffect} from "react";
import Moviedetails from './Moviedetails';
const Moviedata = (props) => {

  const [data,setdata] = useState({
    collection : [                              
      { 
    MovieID:1,
    MovieName:"A",
    LeadActor:"B",
    LeadActrees:"C",
    YearOfRelease:2,
    Language:"D"
     } ],
     newdata:'9'   
  })

  useEffect(() => {
    setdata({...newdata}),
  console.log("20",props.datafromadd)
  console.log(data.newdata)
  });

    

    
  
  
    return (
    
      <div>
     <Moviedetails dataprop={data}/>
      </div>
    )
}
    export default Moviedata;