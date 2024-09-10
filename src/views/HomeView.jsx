import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Business from '../components/Business'
import Introduce from '../components/Introduce'
import News from '../components/News'
import Recruit from '../components/Recruit'
import Footer from '../components/Footer'
import Main from '../components/Main'


const HomeView = () => {
  return (
    <>
        <Header />
        <Main>
          <Intro />
          <Business/>
          <Introduce/>
          <News/>
          <Recruit/>
        </Main>
        <Footer />
    </>
  )
}

export default HomeView