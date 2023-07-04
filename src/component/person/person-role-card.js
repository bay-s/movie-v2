import Image from "next/image"
import Link from "next/link"


const PersonRoleCard = ({data,type}) => {
    const images = `https://image.tmdb.org/t/p/w500/${data?.poster_path}`
    const noImg = '/img/no-image.png'
    return(
<div className="column p-2 fade is-one-third-mobile is-4-tablet is-3-desktop " key={data?.id}>

 <div className="is-flex flex-column gap-1">
 <figure className="poster-image ">
<Image
loader={() => !data?.poster_path ? noImg : images}
src={!data?.poster_path ? noImg : images}
width={400}
height={250}
alt="Image description"   
/>
</figure>
<h3 className="txt-small is-title text-wrap">
    <Link href={`/${type}/${data?.id}`} className="txt-white hover-blue">
    {
        type === 'movie' ? data?.title : data?.name
    }
    </Link>
</h3>
 </div>
 
</div>
    )
}

export default PersonRoleCard