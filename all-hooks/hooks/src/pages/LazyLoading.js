import React, { Suspense, lazy } from 'react';
import Lazy from '../components/lazy/Lazy.js';
const SampleLazy = lazy(()=> import('../components/lazy/SampleLazy.js'));

const LazyLoading = () => {
  return (
    <div>
        <h1>LazyLoading Example</h1>
        <div>
            <Suspense fallback={<Lazy/>}> 
            {/*<Suspense fallback={<h6> Loading... </h6>}>  */}
            <SampleLazy />
            </Suspense>
        </div> 
    </div> 
  )
}

export default LazyLoading