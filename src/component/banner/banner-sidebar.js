 
import Network from "./banner-network"



const BannerSidebar = ({data,type}) => {
console.log(data);
console.log('sidebar');
    return(
        <div className="column is-3" id="banner-sidebar">

           <ul className="is-flex flex-column gap-2 mt-5">
           <li className="is-flex flex-column align-start">
               <p className="is-title">Original Title:</p>
               <p className="is-title">
               {
                type === 'tv' ? data?.original_name
                : data?.original_title
               }
               </p>
             </li>

             <li className="is-flex flex-column align-start">
               <p className="is-title">Spoken Language:  </p>
               <p className="is-title">{data?.spoken_languages[0]?.english_name}</p>
             </li>

             <li className="is-flex flex-column align-start">
             <p className="is-title">Status : </p>
             <p className="is-title">{data?.status}</p>
             </li>

             {
                type === 'movie' ? ''
                : <Network data={data} />
             }

            {
                type === 'tv' ?     <li className="is-flex flex-column align-start">
                <p className="is-title">Type : </p>
                <p className="is-title">{data?.type}</p>
                </li>
             : ""
            }

           </ul>
        </div>
    )
}
export default BannerSidebar