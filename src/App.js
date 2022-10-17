 
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setsearchData] = useState("spider");
  const [movieList, setmovieList] = useState([]);
  const API_KEY="16c66b0f7fd3c3447e7067ff07db3197";

  const HandleSubmit = (e)=>{
    e.preventDefault();
    console.log(searchData);
  }
  useEffect(()=>{
   try {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchData}`)

    .then(Response=>Response.json())
    .then(Response=>setmovieList(Response,results))
   } 
   catch (error) {
    console.log(error)
   }

  },[searchData])
  return (
   <>
   <div className="container-fluid py-5">
    <div className="text-center">
      <h2 className="display-6 text-white">Movie <span className="text-danger">Finder</span></h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <form action="" onSubmit={(e)=>HandleSubmit(e)}>
            <input type="text" 
            className='form-control border-0 shadow-0' 
            value={searchData} 
            onChange={(e)=>setsearchData(e.target.value)} 
            placeholder='Type Movie name...' />
          </form>
        </div>
      </div>
       <MovieList/>
    </div>
   </div>
   </>
  );
}

export default App;
