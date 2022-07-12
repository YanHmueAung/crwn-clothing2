import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Route, Routes,Outlet } from 'react-router-dom';


const Shop = () => {
  return (<div>I am shop</div>)

}
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />}/>
     
        </Route>
    </Routes>
  );
}

export default App;
