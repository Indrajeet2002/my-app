import React from 'react'

function Popup(props) {

  const handleOnClose = (e) => {
    if(e.target.id === 'container'){
      props.onClose();
    }
  }

  if(!props.trigger){
    return null;
  }

  const imgUrl = "https://image.tmdb.org/t/p/original" + props.info.poster_path;

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">     
      
      <div class="max-w-sm rounded overflow-hidden shadow-lg object-contain">
        <img class="w-full" src={imgUrl}  alt="Movie Poster"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.info.original_title}</div>
          <p class="text-gray-700 text-base">
            {props.info.overview}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.info.vote_average}/10</span>
        </div>
      </div>


    </div>
  );

}

export default Popup