import React, {Component} from 'react';
import "./Currency.css"
import axios from "axios";


const api = axios.create({
});


class Currency extends Component {

   state = {
      currencies: []
   };



   constructor() {
      super();
      this.getCurrency()
   }

   getCurrency = async () => {
      let data = await api.get('http://api.nbp.pl/api/exchangerates/tables/a/').then(({data}) => data);
         this.setState({currencies: data[0].rates});
         console.log(data)
      };


   render() {
      return (
         <div>
            {this.state.currencies.map(currency => <div>{currency.currency}</div>)}
            {this.state.currencies.map(currency => <div>{currency.mid}</div>)}
            {this.state.currencies.map(currency => <div>{currency.code}</div>)}
         </div>

      );
   }
}

export default Currency;
