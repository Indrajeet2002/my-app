import "./index.css";
import { search } from "./APIFunctions";
import { useEffect, useRef } from "react";
import ListSearch from "./ListSearch";
import PlaylistItem from "./PlaylistItem";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlaylists, updatePlaylists } from "./firebase";
import { async } from "@firebase/util";

const Search = () => {

  const location = useLocation()
  const { playlist } = location.state

  const searchQuery = useRef();
  const [movieList, updateMovieList] = useState(playlist.movies);

  var count = 0;

  // editable playlist name
  const [playlistName, setPlaylistName] = useState(playlist.name);
   
  const onChange = (event) => setPlaylistName(event.target.value);
  
  let playlists = []


  function updateList(newMovieName, newMovieId) {
    updateMovieList((arr) => {
        return [{
          id: newMovieId,
          value: newMovieName
        }, ...arr];
    });
    
  }

  useEffect(() => {
    async function getPlay() {
      playlists = await getPlaylists()
    }
    getPlay()
  })

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  function removeMovie(movieToRemove){
      updateMovieList(prevMovie => {
        return prevMovie.filter((movie, movieId) => {
          return movie.value !== movieToRemove;
        });
      });

      var buttonName = "add-button-" + movieToRemove;

      // document.getElementById(buttonName).disabled = false;
  }

  async function updatePlay() {

      playlists.forEach(element => {
          if(element.name===playlist.name){
            element.movies = movieList
          }
      });

      updatePlaylists(playlists)
    
  }

  async function handleClick() {
    let arr = await search(searchQuery.current.value)
    let val = 0;

    var ul = document.getElementById("insertHere");

    var child = ul.lastElementChild;
    while (child) {
      ul.removeChild(child);
      child = ul.lastElementChild;
    }

    arr.map(function (movie) {
      console.log(movie);
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
          {/* <h1 contenteditable="true" className="text-black text-[3vh]">Current Playlist</h1> */}
          <input
            type="text"
            aria-label="Field name"
            value={playlistName}
            onChange={onChange}
          />

          <button type="button" onClick={updatePlay} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>


          <ul id="currentPlaylist" className="flex flex-col items-center">
            {
              
              movieList.map(function (movie) {
              if(document.getElementById("playlistItem-" + movie.value)==null){
                return (<PlaylistItem key={movie.id} info={movie.value} removeMovie={removeMovie} />);
              }              
            })}
          </ul>
        </div>
      </div>
    </div>

  );

};

export default Search;