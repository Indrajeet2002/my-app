import "./index.css";

const Search = () => {
  return (
    <div>
        
        
            <input type="text" placeholder="Search for a Movie" className="input input-bordered w-full max-w-xs" />
            <button className="btn">Search</button>
        
        
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            Current Playlist
        </div>
        <div>
            Movie 1 <br></br>
            Movie 2 <br></br>
            Movie 3 <br></br>
            Movie 4 <br></br>
            Movie 5 <br></br>
            Movie 6 <br></br>
        </div>
    </div>
    
  );
};

export default Search;