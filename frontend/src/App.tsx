import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from './components/DonutChart/index';

function App() {

  return (
    <>
       < NavBar />

      <div className = "container">       

      
      <span className = "blue"> Report page </span> 
      

      </div>

      <div className = "row px-3">

        <div className = "col-sm-6">

          <h5 className= "text-center secondary"> Percentage rate %</h5>

          < BarChart />

        </div>

        <div className = "col-sm-6">

        <h5 className = "tertiary"> Success rate %</h5>

          < DonutChart />

        </div>

    <div className = "py-3">

    <div className = "primary">All Sales</div>
    
    </div>

      < DataTable />
      
    </div>

     <Footer />

    </>
  );
}

export default App;
