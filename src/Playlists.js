import Navbar from './Navbar.js'
import Footer from './Footer'

const Playlists = () => {
    let test = [1,2,3,5,6,7,8,9]
    return (
        <>
            <Navbar/>
            <div className='w-screen max-w-full h-[95vh] bg-gray-700'>
                <div className='h-[10vh]'>
                    <h1 className='text-white text-[5vh]'>Your Playlists</h1>
                </div>
                <div className='h-[85vh] grid grid-cols-3 justify-items-center grid-rows-5'>
                    {
                        test.map((t) => 
                            <Playlist test={t}/>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

const Playlist = (props) => {
    return (
        <div className='w-[85%] h-[70%] bg-slate-200 rounded-xl hover:bg-slate-300 hover:rounded-3xl transition-all duration-300 flex items-center'>
            <div className='w-1/5 p-[2%]'>
                <img className='rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png"/>
            </div>
            <div className='w-4/5 h-[80%] flex flex-col items-center'> 
                <h1 className='text-black font-bold text-[3vh]'>Playlist Name</h1>
            </div>
        </div>
    )
}

export default Playlists