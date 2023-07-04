import { calculateAge } from "@/lib/date-birth";
import Image from "next/image"


const PersonPageSidebar = ({person}) => {
    const profile = `https://image.tmdb.org/t/p/original/${person?.profile_path}`
    const gender = person?.gender === 1 ? "Female" : (person?.gender === 2 ? "Male" : "Other");


    return(
 <div className="column is-4 is-flex flex-column gap-2 pr-4">

<figure class="image is-4by5">
   <Image
loader={() => profile }
src={profile }
width={100}
height={100}
alt="Image description"   
/>
</figure>

<h3 className="is-title is-bold is-size-5 mt-2">About</h3>

<ul className="is-flex flex-column gap-2">

<li className="is-flex flex-column">
     <h3 className="is-title is-bold">Role: </h3>
      <p className="txt-small has-text-grey-lighter">{person?.known_for_department
}</p>
  </li>

  <li className="is-flex flex-column">
     <h3 className="is-title is-bold">Gender: </h3>
      <p className="txt-small has-text-grey-lighter">{gender}</p>
  </li>

  <li className="is-flex flex-column">
     <h3 className="is-title is-bold">Date of Birth: </h3>
      <p className="txt-small has-text-grey-lighter">{person?.birthday} ({`${calculateAge(person?.birthday)}years old`})</p>
  </li>


  <li className="is-flex flex-column">
     <h3 className="is-title is-bold">Place of Birth: </h3>
      <p className="txt-small has-text-grey-lighter">{person?.place_of_birth}</p>
  </li>

  <li className="is-flex flex-column">
     <h3 className="is-title is-bold">Also known as: </h3>
      {
         person?.also_known_as?.map(name => {
            return(
               <p className="txt-small has-text-grey-lighter py-1" key={name}>{name}</p>
            )
         })
      }
  </li>

</ul>

</div>
    )
}

export default PersonPageSidebar