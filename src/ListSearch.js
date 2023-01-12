import "./index.css";
import React from 'react'
import Popup from './Popup'
import { useState } from "react";

function ListSearch(props) {

  const [showModal, setShowModal] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  
  function handleClick(){
    setDisableButton(true);
    props.addMovie(props.info.original_title);
  }

  return (
    <div classname= 'w-full flex justify-center'>
      <div className="py-3  flex w-full">
        <button className="btn w-[95%]" onClick={() => setShowModal(true)}>{props.info.original_title}</button>
        <button className="btn bg-[#1DB954] text-white w-[5%]" onClick={handleClick} disabled={disableButton}>+</button>
      </div>
      <Popup trigger={showModal} onClose={() => setShowModal(false)} info={props.info}/>
    </div>
  );
}

export default ListSearch