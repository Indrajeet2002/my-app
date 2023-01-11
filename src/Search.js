import "./index.css";

const Search = () => {
    const movies = [];
    movies.push("Movie 1", "Movie 2", "Movie 3");
    
    
  return (
    <>
        <input type="text" placeholder="Search for a Movie" className="input input-bordered w-full max-w-xs" />
        <button className="btn bg-[#1DB954] text-white">🔍</button>
        <add className="add">
            <ul>
                <li className="py-3">
                    <button className="btn">Movie 1</button> <button className="btn bg-[#1DB954] text-white">+</button>
                </li>
                <li className="pb-3">
                    <button className="btn">Movie 2</button> <button className="btn bg-[#1DB954] text-white">+</button>
                </li>
                <li className="pb-3">
                    <button className="btn">Movie 3</button> <button className="btn bg-[#1DB954] text-white">+</button>
                </li>
                <li className="pb-3">
                    <button className="btn">Movie 4</button> <button className="btn bg-[#1DB954] text-white">+</button>
                </li>
                <li className="pb-3">
                    <button className="btn">Movie 5</button> <button className="btn bg-[#1DB954] text-white">+</button>
                </li>
                <li className="pb-3">
                    <button className="btn">Movie 6</button> <button className="btn bg-[#1DB954] text-white">+</button>
                </li>

            </ul>
        </add>
        
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            Current Playlist
        </div>
        <ul>
            <li className="py-3">Movie 1</li>
            <li className="pb-3">Movie 2</li>
            <li className="pb-3">Movie 3</li>
            <li className="pb-3">Movie 4</li>
            <li className="pb-3">Movie 5</li>
            <li className="pb-3">Movie 6</li>
        </ul>
    </>
    
  );
};

export default Search;