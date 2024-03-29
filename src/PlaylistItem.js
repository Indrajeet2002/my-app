import React from 'react'

function PlaylistItem(props) {

  function handleClick(){
    props.removeMovie(props.info);
  }    

  return (
    <li className="w-4/5">
      <div classname= 'w-full flex justify-center'>
        <div className="py-3  flex w-full">
          <button className="btn w-[95%]">{props.info}</button>
          <button className="btn bg-[#1DB954] text-white w-[5%]" onClick={handleClick}>X</button>
        </div>
      </div>
    </li>
    
  )
}

export default PlaylistItem