import CastHistoryCard from "./cast-history-card";
import CrewHistoryCard from "./crew-history-card";

const CrewHistory = ({movie,tv}) => {
  console.log(movie);
  const groupedMovies = { }
  // Group the movies based on the year
tv?.crew?.forEach((movie) => {
     const year = movie.first_air_date
     .split('-')[0];
     if (!groupedMovies[year]) {
       groupedMovies[year] = [];
     }
     groupedMovies[year].push(movie);
   });
   
    return(
        <div className="is-flex flex-column gap-2  w-100 ">

        <h4 className="is-title is-bold">Sound</h4>
  
            {
            Object.keys(groupedMovies).sort((a, b) => b - a).map((year) => (
              <div className="box m-0 has-background-black-bis shadow" key={year}>
                <CrewHistoryCard movies={groupedMovies[year]} year={year}/>
              </div>
            ))
            }
        
         
            </div>
    )
}

export default CrewHistory