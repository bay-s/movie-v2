import PersonPageCenter from "@/component/person/person-main-content";
import PersonPageSidebar from "@/component/person/person-sidebar";

const PersonPages = ({ person}) => {
 console.log(person);
    return(
 <div className="container p-3">

<section className="columns is-multiline" id="person-page">

 <PersonPageSidebar person={person} />
 <PersonPageCenter person={person} />
 
</section>

    </div>
    )
}

export default PersonPages

export async function getServerSideProps(context){
    const {id} = context.query
 
    const getSinglePerson = async () => {
        const api_key = process.env.NEXT_PUBLIC_API_KEY
        const person = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`)

        const personResult = await person.json()
        return personResult
    }
    const person = await getSinglePerson()
 
     return {
      props: {
        person
       }
    }
  
  }