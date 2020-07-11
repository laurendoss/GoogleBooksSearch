import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <Router>
     <div>
       <Switch>
         <Route exact path={["/", "/books"]}>
           <Books/>
         </Route>
         <Route exact path="/books/:id">
        <Detail/>
         </Route>
         <Route>
            <NoMatch />
          </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
