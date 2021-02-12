import React, { useState } from "react";
import Moviedata from './Moviedata';

const Addmovie = () => {
    const [addmovie, setAddmovie] = useState({})

    var handleChange = (e) => {
           setAddmovie({...addmovie, [e.target.name] : e.target.value});
        }

     var handleSubmit= (e) => {
            e.preventDefault();
     }       
    return(
        console.log(),
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

               <button type='submit' onClick={(e) => handleSubmit(e)}>Submit Details</button>
           </form>
          {
              (Object.keys(addmovie).length===6) ? <Moviedata datafromadd={addmovie}/> : null
          }
        </div>
    )
    }
    export default Addmovie;