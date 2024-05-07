import React from 'react'
import Test from './components/component'
import image1 from './images/img1.jpeg';
import image2 from './images/img2.jpeg';
import image3 from './images/img3.jpeg';
import test from './App.module.scss';

function App() {
  const arr = [
    {
      id: 1,
      name:'Shawn Wang',
      country:'Singapur',
      image: image1,
      cargo:'Ingeniero de Software',
      enterprise:'Amazon',
      test:'Testimonio del ingeniero Shawn de Singapur'

    }
    ,
    {
      id: 2,
      name:'Max Romero',
      country:'México',
      image:image2,
      cargo:'Ingeniero en Informática',
      enterprise:'TESCHA',
      test:'Testimonio del estudiante dual del Tescha'
    },
    {
      id: 3,
      name:'Lidio Araiza',
      country:'España',
      image:image3,
      cargo:'Ingeniero de Sistemas',
      enterprise:'FASDATEC',
      test:'Testimonio de su experiencia en la empresa'
    }
  ]
  return (
    <>
    <div className={test.container__main}>
      <h1 className={test.tittle}>SOMOS FASDATEC!</h1>
      {arr.map((arr) => {
        return <Test key={arr.id} name={arr.name} country={arr.country} image={arr.image} cargo={arr.cargo} enterprise={arr.enterprise} test={arr.test} />
      })
    }
    </div>
    </>
  )
}

export default App