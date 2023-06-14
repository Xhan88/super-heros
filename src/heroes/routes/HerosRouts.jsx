import { Navigate, Route, Routes } from "react-router"
import { DCPages, MarvelPages, SearchPage, HeroPage } from ".."
import { Navbar } from "../../ui"



export const HerosRouts = () => {
  return (
    <>
      <Navbar />

<div className='container'>
    <Routes>
      <Route path="marvel" element={<MarvelPages />} />
      <Route path="dc" element={<DCPages />} />

      <Route path="search" element={<SearchPage />} />
      <Route path="hero" element={<HeroPage />} />


    
      <Route path="/" element={<Navigate to='/marvel ' />} />
    </Routes>
 </div>
    </>
  )
}
