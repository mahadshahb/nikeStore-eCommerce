import React from 'react'
import Hero from './components/Hero';
import { heroapi, popularsales, toprateslaes } from './data/data';
import { Sales } from './components';

const App = () => {
  return (
    <>
      <main className='gap-16 relative flex flex-col'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  )
}

export default App;