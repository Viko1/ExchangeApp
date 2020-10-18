import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Currency.css'
import TransferList from "./List";



function Currency() {
   const [currency, setCurency] = useState([]);

   useEffect(() => {
      // kiedy mamay na koncu [], to tylko 1 raz wykonuje
      async function fetchData() {
         const request = await axios.get('/')
         setCurency(request.data[0].rates)
      }

      fetchData()
   }, []);

   const currencyItem = currency.map(currency => (<li className='currency__items' key={currency.id}>{currency.currency}{currency.mid}zl</li>));

   return (
      <div className='currency'>
         <TransferList currency={currencyItem}/>
      </div>
   )

}

export default Currency;
