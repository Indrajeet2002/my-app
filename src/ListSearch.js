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
    <div>
      <li className="py-3">
        <button className="btn" onClick={() => setShowModal(true)}>{props.info.original_title}</button>
        <button className="btn bg-[#1DB954] text-white" onClick={handleClick} disabled={disableButton}>+</button>
      </li>
      <Popup trigger={showModal} onClose={() => setShowModal(false)} info={props.info}/>
    </div>
  );
}

export default ListSearch