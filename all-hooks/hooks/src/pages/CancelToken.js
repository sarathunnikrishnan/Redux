import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CancelToken = () => {
    const [product, setProduct] = useState(null)
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const productRequest = axios.CancelToken.source();

        axios.get(url,{ cancelToken :  productRequest.token})
        .then(response => setProduct(response.data))

        return () => {
            console.log("cleanup");
            productRequest.cancel();
        }
    },[])


  return (
    <div>
        <h1>Axios cancelToken</h1>
        {
        
            product && product.map((item, index) => {
                 return (
                    <div key={index}>  
                    <p>{item.title}</p>   
               </div>
                 )
              })
    
        }
    </div>
  )
}

export default CancelToken