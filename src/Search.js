import "./index.css";

const Search = () => {
  return (
    <div>
        
        
            <input type="text" placeholder="Search for a Movie" className="input input-bordered w-full max-w-xs" />
            <button className="btn bg-[#1DB954]">Search</button>
        
        
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            Current Playlist
        </div>
        <div>
            Movie 1 <button className="btn bg-[#1DB954]">+</button><br></br><br></br>
            Movie 2 <button className="btn bg-[#1DB954]">+</button><br></br><br></br>
            Movie 3 <button className="btn bg-[#1DB954]">+</button><br></br><br></br>
            Movie 4 <button className="btn bg-[#1DB954]">+</button><br></br><br></br>
            Movie 5 <button className="btn bg-[#1DB954]">+</button><br></br><br></br>
            Movie 6 <button className="btn bg-[#1DB954]">+</button><br></br><br></br>
        </div>
    </div>
    
  );
};

export default Search;