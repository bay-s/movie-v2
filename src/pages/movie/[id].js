import BannerSidebar from "@/component/banner/banner-sidebar";
import BannerSinglePage from "@/component/banner/banner-single-page";
import RecomendMovieCard from "@/component/card/movie-recomend-card";
import CastCard from "@/component/cast/cast-card";
 

const SingleMoviePage = ({data}) => {
 
    return(
     <section className="is-flex flex-column gap-4">
        <BannerSinglePage movie={data} />

<section className="columns is-multiline gap-2">
  <div className="column is-flex flex-column gap-2">
     <h3 className="is-title is-size-3 is-bold">Cast</h3>
    <div className="columns is-clipped news is-flex-mobile" id="cast-container">
    <CastCard id={data?.id} type='movie'/>
    </div>
    <RecomendMovieCard movieId={data?.id} type='movie' />
  </div>

<BannerSidebar data={data} type='movie'/>
</section>

 
     </section>
    )
}

export default SingleMoviePage

export async function getServerSideProps(context){
    const { id }  = context.query
 
    const getMovieDetail = async () => {
      const api_key = process.env.NEXT_PUBLIC_API_KEY
        try {
    
           const movieDetail = await  fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
                )
         const dataMovie = await movieDetail .json()
           return  dataMovie
        } catch (error) {
          console.log("Error fetching anime series:", error);
          return [];
        }
     }
   
        const data = await getMovieDetail()
     return {
      props: {
         data
       }
    }
  
  }