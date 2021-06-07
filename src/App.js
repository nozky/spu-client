import React, { useEffect, useState, useRef } from 'react'

import Lmap from './components/Lmap'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav';
import './App.css';

import { fetchData } from './helpers/fetchData'
import Loading from './components/Loading';
import Btn from './components/Btn';

import {  FiSunrise } from 'react-icons/fi'


function App() {

  const app = useRef(app)

  const [ loading, setLoading ] = useState(true)
  const [ spu, setSpu ] = useState([])

 useEffect(()=>{
   if(app.current){
    app.current.querySelector('.menu').addEventListener('click',()=> app.current.querySelector('.nav').classList.add('show') )
   }
 })
 
  useEffect(()=>{
    fetchData().then( data => setSpu(data))
    setLoading( false )
  },[])

  useEffect(()=>{
    if( spu.length === 0 ){
      setLoading( true )
    }else{
      setLoading( false )
    }
  },[spu])

  if( loading === true ) return <Loading />

  return (
    <div className='app' ref={app}>
     <Header userCount={spu.length}/>

      <main>
        <Lmap spu={spu}/>
      </main>  

     <Footer />
      <Nav />
      <Btn  className={'menu'} icon={ <FiSunrise /> } />
    </div>
  );
}


export default App;
