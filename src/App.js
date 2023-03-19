import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Bener from './Bener';
import ProductList from './ProductList';
;


function App() {
  return (
    <div className="App">
     <Header></Header> 
     <Bener></Bener>  
       <ProductList id ="1"name="beauty products" ></ProductList>
       <ProductList id ="2"name="electrical products" ></ProductList>
       <ProductList id ="3"name=" dairy products" ></ProductList>
    </div>
  );
}

export default App;
