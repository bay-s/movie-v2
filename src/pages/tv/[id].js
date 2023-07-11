import BannerSidebar from "@/component/banner/banner-sidebar";
import BannerSinglePage from "@/component/banner/banner-single-page";
import RecomendTvCard from "@/component/card/tv-recomend-card";
import CastCard from "@/component/cast/cast-card";
import MetaHead from "@/lib/meta-head";
import { useRouter } from "next/router";
import { Fragment } from "react";

 
const SingleTvPage = ({data}) => {
    const router = useRouter()
    const pageName = router?.asPath?.split("/") 
     
    return(
<Fragment>
<MetaHead title={data?.name} desc={data?.overview} />

<section className="is-flex flex-column gap-4" id="single-page">
 <BannerSinglePage movie={data} pageName={pageName[1]} />

<section className="columns is-multiline gap-2">
 <div className="column is-flex flex-column gap-2">
     <h3 className="is-title is-size-3 is-bold">Cast</h3>

    <div className="columns is-clipped news is-flex-mobile" id="cast-container">
    <CastCard id={data?.id} type='tv'/>
    </div>

    <RecomendTvCard tvId={data?.id} type='tv' />
    
  </div>


  <BannerSidebar data={data} type='tv'/>
</section>

 </section>

</Fragment>
    )
}

export default SingleTvPage

export async function getServerSideProps(context){
    const { id }  = context.query
 
    const getMovieDetail = async () => {
      const api_key = process.env.NEXT_PUBLIC_API_KEY
        try {
    
           const tvDetail = await  fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`
                )
              const dataTv = await tvDetail .json()
     
           return  dataTv
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