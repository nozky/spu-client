import React, { useEffect, useState, useRef } from 'react'

import Lmap from './components/Lmap'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav';
import { fetchData } from './helpers/fetchData'
import Loading from './components/Loading';
import Btn from './components/Btn';
import './App.css';

import {  BiCog } from 'react-icons/bi'

const  App = () => {

  const appDiv = useRef()
  const [ loading, setLoading ] = useState(true)
  const [ spu, setSpu ] = useState([])

 useEffect(()=>{
   if(appDiv.current){
    appDiv.current.querySelector('.menu').addEventListener('click',()=> appDiv.current.querySelector('.nav').classList.add('show') )
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
    <div className='app' ref={appDiv}>
     <Header userCount={spu.length}/>

      <main>
        <Lmap spu={spu}/>
      </main>  

     <Nav />
     <Btn title="Menu" className={'menu'} icon={ <BiCog /> } />
     <Footer />
    </div>
  );
}


export default App;
