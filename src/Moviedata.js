import React, { useState , useEffect} from "react";
import { Link } from 'react-router-dom'

const Moviedata = (props) => {

  const [data,setdata] = useState({
    initialdata : [                              
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
    ],
     collection :[]  
  })

  useEffect(() => {
    if(props.location.state!==undefined){
      setdata({...data, collection : props.location.state.fromAddmovie})
    }
  }, [data.collection])

  const removeMovie = (key) => {
   console.log("removing",key);
    var copydata = [...data.initialdata];
    console.log(copydata);
    copydata.splice(key,1);
    console.log(copydata);
    setdata({...data.initialdata,copydata});
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
         Object.keys(data.initialdata).map( (index) => {
           return (
             <div key={index}>
             <li > {data.initialdata[index].MovieID }</li>
             <li > {data.initialdata[index].MovieName }</li>
             <li > {data.initialdata[index].LeadActor }</li>
             <li > {data.initialdata[index].LeadActrees }</li>
             <li > {data.initialdata[index].YearOfRelease }</li>
             <li > {data.initialdata[index].Language }</li>
              <hr></hr>
             </div>
           )
         })
       }
       {
         (data.collection).length!==0 ? 
          <div>
          <li > {data.collection.MovieID }</li>
          <li > {data.collection.MovieName }</li>
          <li > {data.collection.LeadActor }</li>
          <li > {data.collection.LeadActrees }</li>
          <li > {data.collection.YearOfRelease }</li>
          <li > {data.collection.Language }</li>   
          </div>  : null
       }
       </div>  :  
       
       <div>
            <h1>Movie Details of MovieID : {props.match.params.id} </h1>
          {
          Object.keys(data.initialdata).map( (index) => {
            return (
              <div key={index}>
                {
                  parseInt(props.match.params.id) === data.initialdata[index].MovieID  ?
                  <div>
                      <li > {data.initialdata[index].MovieID }</li>
                      <li > {data.initialdata[index].MovieName }</li>
                      <li > {data.initialdata[index].LeadActor }</li>
                      <li > {data.initialdata[index].LeadActrees }</li>
                      <li > {data.initialdata[index].YearOfRelease }</li>
                      <li > {data.initialdata[index].Language }</li>
                      <button value={index} onClick={()=>removeMovie(index)}>Delete{index}</button>
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