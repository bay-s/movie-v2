
const PersonPages = ({ person}) => {
 console.log(person);
    return(
    <div className="container my-5">

        <section className="columns is-multiline">

<div className="column is-4 red">

</div>

<div className="column is-8 red">


</div>

        </section>
    </div>
    )
}

export default PersonPages

export async function getServerSideProps(context){
    const {id} = context.query
 
    const getSinglePerson = async () => {
        const person = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=0ccbee0a69447c2b1bd0090bf76b0358`)

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