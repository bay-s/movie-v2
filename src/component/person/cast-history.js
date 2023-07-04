import { useEffect, useState } from "react";
import CastHistoryCard from "./cast-history-card";
import CrewHistoryCard from "./crew-history-card";

const CastHistory = ({data}) => {
console.log(data.movie);
console.log(data.tv);
const [groupedMovies, setGroupedMovies] = useState([]);

useEffect(() => {

  if(data.selectValue === 'movie'){
     displayRoleMovie()
  }else if(data.selectValue === 'tv'){
    displayRoleTv()
  }else if(data.selectValue === 'sound'){
    displayRoleMovieCrew()
    displayRoleTvCrew()
  }else{
    console.log('SOMETHING WENT WRONG');
  }
 
},[ data])

const displayRoleMovie = () => {

  const updateMovie = {}
  data.movie?.cast?.forEach((movie) => {
    const year = movie.release_date.split('-')[0];
    if (!updateMovie[year]) {
      updateMovie[year] = [];
    }
    // groupedMovies[year].push(movie);
    updateMovie[year].push(movie);
    setGroupedMovies(updateMovie)
  });
 
}


const displayRoleTv = () => {
  const updateMovie = {}

  data.tv?.cast?.forEach((movie) => {
    const year = movie.first_air_date.split('-')[0];
    if (!updateMovie[year]) {
      updateMovie[year] = [];
    }
    updateMovie[year].push(movie);
    setGroupedMovies(updateMovie)
  });
  
}

const displayRoleTvCrew = () => {
  const updateMovie = {}

  data.tv?.crew?.forEach((movie) => {
    const year = movie.first_air_date.split('-')[0];
    if (!updateMovie[year]) {
      updateMovie[year] = [];
    }
    updateMovie[year].push(movie);
    setGroupedMovies(updateMovie)
  });
  
}

const displayRoleMovieCrew = () => {
  const updateMovie = {}

  data.movie?.crew?.forEach((movie) => {
    const year = movie.release_date.split('-')[0];
    if (!updateMovie[year]) {
      updateMovie[year] = [];
    }
    updateMovie[year].push(movie);
    setGroupedMovies(updateMovie)
  });
  
}

const Casts =  Object.keys(groupedMovies).sort((a, b) => b - a).map((year) => (
  <div className="box m-0 has-background-black-bis shadow fade" key={year}>
    <CastHistoryCard movies={groupedMovies[year]} year={year} type={data.selectValue} />
  </div>
))   
const Crews  = Object.keys(groupedMovies).sort((a, b) => b - a).map((year) => (
  <div className="box m-0 has-background-black-bis shadow fade" key={year}>
    <CrewHistoryCard movies={groupedMovies[year]} year={year}  />
  </div>
))
    return(
 <div className="is-flex flex-column gap-2  w-100 ">

<div className="is-flex justify-between align-center">
<h4 className="is-title is-bold">Role History</h4>

        
<div class="select is-primary select-menu">
   <select className="no-bg" onChange={data.handlerSelectValue}>
            <option value='movie'>Movie</option>
            <option value='tv'>Tv Series</option>
            <option value='sound'>Sound</option>
    </select>
 </div>
        

</div>
 
    {
    data.selectValue === 'tv' || data.selectValue === 'movie' ? Casts : Crews
    }

 
    </div>
    )
}

export default CastHistory 



// useEffect(() => {
//     // Group the movies based on the year
//     const updatedGroupedMovies = {};
//     movie?.cast?.forEach((movie) => {
//       const year = movie.release_date.split('-')[0];
//       if (!updatedGroupedMovies[year]) {
//         updatedGroupedMovies[year] = [];
//       }
//       updatedGroupedMovies[year].push(movie);
//     });

//     setGroupedMovies(updatedGroupedMovies);
//   }, []);
