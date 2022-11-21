import React from 'react'
function FullName(props) {

  return (
    <div style={{textalign:'center'}} >
        <h1> Name : {props.Name}  </h1>
        <img src ={props.MyImage} alt='Slouma'  class="center"/>
        <h1> Adress : {props.Adress} </h1>

    </div>
  )
}

export default FullName