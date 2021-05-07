
import  {BrowserRouter} from 'react-router-dom';
import  {Switch} from 'react-router-dom';
import  {Route} from 'react-router-dom';
import Home from 'pages/Home/index';
import Dashboard from './pages/Dashboard/index';

const Routes = () => {

    return (
      
            <BrowserRouter>

            <Switch>
 
            <Route path="/" exact>

            <Home/>

            </Route>

            <Route path="/dashboard" >

            <Dashboard />

            </Route>

            </Switch>
        
            </BrowserRouter>
      
       );
     }
  
            export default Routes;


  