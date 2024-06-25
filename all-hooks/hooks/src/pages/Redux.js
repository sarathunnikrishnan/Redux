import React from 'react'
// import Color from '../components/redux/Color'
// import Count from '../components/redux/Count';
import { Store } from '../redux-store/Store';
import { Provider } from 'react-redux'
import DataFetch from '../components/redux/DataFetch';

const Redux = () => {
    
  return (
    <div>
        <Provider store={Store} >
        {/* <Color />
        <Count /> */}
        <DataFetch />
        </Provider>
    </div>
  )
}

export default Redux