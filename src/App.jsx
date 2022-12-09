import React from 'react'
import Hero from './components/Hero';
import { heroapi, popularsales, toprateslaes, highlight, sneaker } from './data/data';
import { Sales } from './components';
import { FlexContent } from './components';

const App = () => {
  return (
    <>
      <main className='gap-16 relative flex flex-col'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  )
}

export default App;