import React, { useState , useEffect} from "react";
import { Link } from 'react-router-dom'

const Moviedata = (props) => {

  const [data,setdata] = useState({
    collection : [                              
      { 
    MovieID:1,
    MovieName:"A",
    LeadActor:"B",
    LeadActrees:"C",
    YearOfRelease:1,
    Language:"D"
     },
     { 
      MovieID:2,
      MovieName:"A1",
      LeadActor:"B1",
      LeadActrees:"C1",
      YearOfRelease:2,
      Language:"D1"
       },
       { 
        MovieID:3,
        MovieName:"A2",
        LeadActor:"B2",
        LeadActrees:"C2",
        YearOfRelease:3,
        Language:"D2"
         }
    ] 
  })

  useEffect(() => {
    if(props.location.state!==undefined){
      var newdata=props.location.state.fromAddmovie;
      setdata({collection : [...data.collection , newdata]})
    }
  }, [])

  const removeMovie = (key) => {
    var copydata = [...data.collection];
    copydata.splice(key,1);  
    setdata({collection:copydata}); 
  }
   
return (  
      console.log((data)),
      <div>
    {
      Object.keys(props.match.params).length===0 ?  
        <div>
           <h1>Movie Details</h1>
       {
            <Link to={{pathname: '/addMovie'}}><button>Add Data</button></Link>
          } 
       {
         Object.keys(data.collection).map( (index) => {
           return (
             <div key={index}>
             <li > {data.collection[index].MovieID }</li>
             <li > {data.collection[index].MovieName }</li>
             <li > {data.collection[index].LeadActor }</li>
             <li > {data.collection[index].LeadActrees }</li>
             <li > {data.collection[index].YearOfRelease }</li>
             <li > {data.collection[index].Language }</li>
              <hr></hr>
             </div>
           )
         })
       }
       </div>  :  
       
       <div>
            <h1>Movie Details of MovieID : {props.match.params.id} </h1>
          {
          Object.keys(data.collection).map( (index) => {
            return (
              <div key={index}>
                {
                  parseInt(props.match.params.id) === data.collection[index].MovieID  ?
                  <div>
                      <li > {data.collection[index].MovieID }</li>
                      <li > {data.collection[index].MovieName }</li>
                      <li > {data.collection[index].LeadActor }</li>
                      <li > {data.collection[index].LeadActrees }</li>
                      <li > {data.collection[index].YearOfRelease }</li>
                      <li > {data.collection[index].Language }</li>
                     <Link to={{ pathname: '/'}}>
                      <button value={index} onClick={()=>removeMovie(index)}>Delete{index}</button>
                      </Link>
                  </div> : null
                }
              </div>
            )
          })    
        }     
 </div>     
    }
      </div>
    )
}
    export default Moviedata;