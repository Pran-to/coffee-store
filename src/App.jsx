

import { ToastContainer } from 'react-toastify'
import './App.css'
import {  useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  const Coffees = useLoaderData();

  return (
    <>
     <ToastContainer></ToastContainer>
      <Header></Header>
      <Banner></Banner>
       <section className='container grid md:grid-cols-2 lg:grid-cols-3 p-10 gap-5 '>
       {
        Coffees.map((coffee,i)=> <CoffeeCard key={i} coffee={coffee}></CoffeeCard>)
       }
       </section>
     
    </>
  )
}

export default App
