import "./index.css";
import { search } from "./APIFunctions";
import { useEffect, useRef } from "react";
import ListSearch from "./ListSearch";
import PlaylistItem from "./PlaylistItem";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const Search = () => {

  const searchQuery = useRef();
  const [movieList, updateMovieList] = useState([]);

  var count = 0;

  function updateList(newMovie) {
    // updateMovieList([{
    //   id: count++,
    //   value: newMovie
    // }, ... movieList]);

    updateMovieList((arr) => {
        return [{
          id: count++,
          value: newMovie
        }, ...arr];
    });
    
  }

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  function removeMovie(movieToRemove){
      var index = 0;
      movieList.forEach((movie) => {
        if(movie.value===movieToRemove){
          return ;
        } else{
          index++;
        }
      });
      var temp = movieList;
      temp.splice(index, 1);
      updateMovieList(temp);
  }

  async function handleClick() {
    console.log(searchQuery.current.value);
    let arr = await search(searchQuery.current.value)
    let val = 0;

    var ul = document.getElementById("insertHere");

    var child = ul.lastElementChild;
    while (child) {
      ul.removeChild(child);
      child = ul.lastElementChild;
    }

    arr.map(function (movie) {
      val = val + 1;
      var li = document.createElement("li");
      li.classList.add('w-4/5'); 
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
    <div className='flex flex-col'>
      <div className="w-screen max-w-full h-[10vh] flex justify-center items-center bg-gray-500">
        <input ref={searchQuery} type="text" placeholder="Search for a Movie" className="input input-bordered w-full max-w-xs mr-5" />
        <button className="btn bg-[#1DB954] text-white" onClick={handleClick}>Search 🔍</button>
      </div>
      <div className="flex w-screen max-w-full h-[90vh] bg-slate-600">
        <div className="w-1/2 h-full bg-white">
          <ul id="insertHere" className="flex flex-col items-center">
          </ul>
        </div>
        <div className="w-1/2 h-full flex flex-col flex-grow card rounded-none bg-base-300 place-items-center">
          <h1 contenteditable="true" className="text-black text-[3vh]">Current Playlist</h1>
          <ul id="currentPlaylist" className="flex flex-col items-center">
            {
              
              movieList.map(function (movie) {
              {/* var ul = document.getElementById("currentPlaylist");
              var li = document.createElement("li");
              li.innerHTML = movie.value;
              ul.appendChild(li); */}
              console.log(movie)
              var ul = document.getElementById("currentPlaylist");
              var li = document.createElement("li");
              li.classList.add('w-4/5'); 
              li.setAttribute("id", "playlistItem-" + movie.id);
              ul.appendChild(li);
              var insertionPoint = document.getElementById("playlistItem-" + movie.id);
              var listSearchComp = <PlaylistItem key={movie} info={movie.value} removeMovie={removeMovie} />;
              const root = ReactDOM.createRoot(insertionPoint);
              root.render(listSearchComp);
            })}
          </ul>
        </div>
      </div>
    </div>

  );

};

export default Search;