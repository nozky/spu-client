import React, { useEffect, useState, useRef } from 'react'

import Lmap from './components/Lmap'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav';
import Loading from './components/Loading';
import Btn from './components/Btn';
import ErrorMsg from './components/ErrorMsg';
import { fetchData } from './helpers/fetchData'
import './App.css';

import {  BiCog } from 'react-icons/bi'

const  App = () => {

  const appDiv = useRef()
  const [ loading, setLoading ] = useState(true)
  const [ spu, setSpu ] = useState([])
  const [ isError, setIsError] = useState(false)

 useEffect(()=>{
   if(appDiv.current){
    appDiv.current.querySelector('.menu').addEventListener('click',()=> appDiv.current.querySelector('.nav').classList.add('show') )
   }
 })
 
  useEffect(()=>{
    async function getData() {
      const data = await fetchData()
      if ( data === undefined) {
        setIsError(true)
        return
      }else {
        setSpu(data)
        setIsError(false)
      }
      setLoading( false )
   }
    getData()
  },[])

  useEffect(()=>{
    if( spu.lenght === 0 ){
      setLoading( true )
    }else{
      setLoading( false )
    }
  },[spu])

  if( isError ) return <ErrorMsg msg='Something Went Wrong In The Server!' />
  if( loading ) return <Loading />

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
