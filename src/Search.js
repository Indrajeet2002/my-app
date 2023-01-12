import "./index.css";
import { search } from "./APIFunctions";
import { useRef } from "react";
import ListSearch from "./ListSearch";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const Search = () => {

  const searchQuery = useRef();
  const [movieList, updateMovieList] = useState([]);

  var count = 0;

  function updateList(newMovie){
    updateMovieList([... movieList, {
      id: count++,
      value: newMovie
    }]);
  }


  async function handleClick(){
    console.log(searchQuery.current.value);
    let arr = await search(searchQuery.current.value)
    let val = 0;

    var ul = document.getElementById("insertHere");
        
    var child = ul.lastElementChild; 
    while (child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }

    arr.map(function(movie){
      val = val + 1;
      var li = document.createElement("li");
      li.setAttribute("id", "result-" + val);
      ul.appendChild(li);
      var insertionPoint = document.getElementById("result-" + val);
      var listSearchComp = <ListSearch key={val} info={movie} addMovie={updateList} />;
      const root = ReactDOM.createRoot(insertionPoint);
      root.render(listSearchComp);
    })

      console.log(arr);
  }

  return (
    <div>
    +        <input ref={searchQuery} type="text" placeholder="Search for a Movie" className="input input-bordered w-full max-w-xs" />
        <button className="btn bg-[#1DB954] text-white" onClick={handleClick}>Search 🔍</button>
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            Current Playlist
          <ul id="currentPlaylist">
            {movieList.map(function(movie){
              var ul = document.getElementById("currentPlaylist");
              var li = document.createElement("li");
              li.innerHTML = movie.value;
              ul.appendChild(li);
              {/* return <li>{movie.value}</li>; */}
            })}
          </ul>
        </div>

        <ul id="insertHere">
        </ul>
    </div>

);

};

export default Search;