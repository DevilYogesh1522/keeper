import React from 'react'

export default function Note(props) {
  return (
   
        <div className='container mx-30'>
      <div className="card-body my-5" style={{width: "18rem"}}>
  <img src={props.src} className="img" alt="..."/>
  <div className="card-body1">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.number}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <button type="button" class="btn btn-primary">ADD</button>
  </div>
  </div>
</div>
  

  // function check(element) {
  //   return (
  //     <Entry
  //       name={element.name}
  //       emoji={element.emoji}
  //       meaning={element.meaning}
  //     />
  )
}
