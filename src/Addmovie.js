import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Addmovie = (props) => {
    const [addmovie, setAddmovie] = useState({})

    var handleChange = (e) => {
           setAddmovie({...addmovie, [e.target.name] : e.target.value});
        }      
    return(
      console.log(props),
        <div>
            <h1>In AddMovieDetails</h1>
           <form>
               <label>MovieID </label>
               <input type='number' placeholder='enter Movie ID' name="MovieID" onChange={(e)=>handleChange(e)}/> <br></br>
               <label>MovieName</label>
               <input type='text' placeholder='enter MovieName' name="MovieName" onChange={(e)=>handleChange(e)}/> <br></br>
               <label>LeadActor</label>
               <input type='text' placeholder='enter LeadActor' name="LeadActor" onChange={(e)=>handleChange(e)}/> <br></br>
               <label>LeadActrees</label>
               <input type='text' placeholder='enter LeadActrees' name="LeadActrees" onChange={(e)=>handleChange(e)}/> <br></br>
               <label>Year Of Release</label>
               <input type='text' placeholder='enter Year Of Release' name="YearOfRelease" onChange={(e)=>handleChange(e)}/> <br></br>
               <label>Language</label>
               <input type='text' placeholder='enter Language' name="Language" onChange={(e)=>handleChange(e)}/> <br></br>
           </form>
          {
            <Link to={{
              pathname: '/',
              state: {
              fromAddmovie: addmovie
                  }
            }}><button>Add Data</button></Link>
          } 
        </div>
    )
    }
    export default Addmovie;