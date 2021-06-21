import React from 'react'

const ListItem = (props) => {
  return (
    <div className='item'>

      <img src={props.smallIconImageUrl} alt={props.name} />
      <h2>{props.name}</h2>
      {/* <p>{props.description}</p> */}

    </div>
  )
}
export default ListItem