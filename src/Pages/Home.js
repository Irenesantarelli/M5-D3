import React from 'react'
import MyBadge from '../Components/MyBadge'
import Mycarousel from '../Components/Mycarousel'
import Myfooter from '../Components/Myfooter'
import Mynav from '../Components/Mynav'
import { Last } from 'react-bootstrap/esm/PageItem'
import BookList from '../Components/BookList'
const Home = () => {
  return (
    <>
    <Mynav/>
    <MyBadge stringa={"Lorem ipsum"} colore={"secondary"}/>
    <MyBadge stringa={"Ciao"} colore={"primary"}/>
    <Mycarousel/>
    <BookList/>
    <Myfooter/>
    <Last/>
    </>
  )
}

export default Home