import React from 'react'
import Hero from "./Hero"
import Topicslider from './Topicslider'
import Ourfood from './Ourfood'

const Home = ({HandelAdd}) => {
  return (
    <>
    <div>
            <Hero/>
           <Topicslider HandelAdd={HandelAdd}/>
           <Ourfood HandelAdd={HandelAdd}/>
    </div>
      
    </>
  )
}

export default Home

