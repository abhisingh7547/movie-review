import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <>
     <div className="mt-3 col-3">
          <div className="card border-0">
            <img src="http://picsum.photos/400" className='w-100 rounded' alt="" />
            <div className="card-body">
              <h5 className='text-center'>{movie.original_title}</h5>
            </div>
          </div>
        </div>
    </>
  )
}

export default MovieCard