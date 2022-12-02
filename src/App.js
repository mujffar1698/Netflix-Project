import React from 'react'
import Appbar from './Components/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import './index.css';
import movie_data from './Resources/data';
import UncontrolledExample from './Components/Slides';
export default function App() {
  return (
    <>
      <Appbar />
      <h1 className='text-center text-danger'> Welcome to<img src='https://media.tenor.com/QJNoPeq9WmUAAAAC/netflix-intro-netflix.gif' height='100px' width='200px' alt=''/></h1>

      <UncontrolledExample />
      <div className='container grids'>
        {
          movie_data.map((val, i) => {
            return (
              <Card key={i} name={val.movie_name} img={val.img_link}
                desc={val.desc} />
            )
          })
        }
      </div>

    </>

  )
}
