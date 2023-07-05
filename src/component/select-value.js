
const SelectDataValue = ({setSelectValue,type}) => {

    const handlerSelectValue = (e) => {
        const value = e.target.value
        setSelectValue(value)
      }
     
    return(
<div class="select is-primary select-menu">
  <select className="no-bg" onChange={handlerSelectValue}>
    <option value='tv'>{type === "" || type === 'anime' ? "On Tv" : "Today"}</option>
    <option value='movie'>{type === "" || type === 'anime' ? "Movie" : "This Week"}</option>
  </select>
</div>
    )
}

export default SelectDataValue