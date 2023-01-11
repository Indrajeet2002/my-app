import "./index.css";

const Search = () => {
  return (
    <div>
        <input type="text" placeholder="Search for a Movie" className="input input-bordered w-full max-w-xs" />
        <button className="btn bg-[#1DB954] text-white">🔍</button>
        <div>
            <button className="btn">Movie 1</button> <button className="btn bg-[#1DB954] text-white">+</button><br></br><br></br>
            <button className="btn">Movie 2</button> <button className="btn bg-[#1DB954] text-white">+</button><br></br><br></br>
            <button className="btn">Movie 3</button> <button className="btn bg-[#1DB954] text-white">+</button><br></br><br></br>
            <button className="btn">Movie 4</button> <button className="btn bg-[#1DB954] text-white">+</button><br></br><br></br>
            <button className="btn">Movie 5</button> <button className="btn bg-[#1DB954] text-white">+</button><br></br><br></br>
            <button className="btn">Movie 6</button> <button className="btn bg-[#1DB954] text-white">+</button><br></br><br></br>
        </div>
        
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            Current Playlist
        </div>
        <div>
            Movie 1 <br></br><br></br>
            Movie 2 <br></br><br></br>
            Movie 3 <br></br><br></br>
            Movie 4 <br></br><br></br>
            Movie 5 <br></br><br></br>
            Movie 6 <br></br><br></br>
        </div>
    </div>
    
  );
};

export default Search;