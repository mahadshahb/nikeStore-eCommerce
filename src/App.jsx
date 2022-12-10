import React from 'react'
import Hero from './components/Hero';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data';
import { Footer, Sales, FlexContent, Stories, NavBar } from './components';

const App = () => {
  return (
    <>
      <NavBar />
      <main className='gap-16 relative flex flex-col'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App;