import React from 'react'
import Navbar from '../componets/Navbar'
import CategorySelection from '../componets/CategorySelection'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import PetListing from '../componets/PetListing'
const HomePage = () => {
  return (
    <div>
      <>
      <Navbar />
      <Header/>
      <CategorySelection />
      <PetListing/>
      <Footer/>
      
      </>
    </div>
  )
}

export default HomePage