
const SelectDataValue = ({setSelectValue}) => {

    const handlerSelectValue = (e) => {
        const value = e.target.value
        setSelectValue(value)
      }
     
    return(
<div class="select is-primary">
  <select className="no-bg" onChange={handlerSelectValue}>
    <option value='tv'>Today</option>
    <option value='movie'>This Week</option>
  </select>
</div>
    )
}

export default SelectDataValue