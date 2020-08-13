import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route  exact path="/" render={()=><div>hello </div>}/>
                <Route  exact path="/secondPage" render={()=><div>hello from '/secondPage' </div>}/>
            </BrowserRouter>
        </div>
        );
}

export default App;