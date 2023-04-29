import MainBar from "./Components/Mainbar";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Components/Home";
import MyPage from "./Components/MyPage";


const router=createBrowserRouter([
  {path:'/home', element:<Home />},
  {path:'/Page', element:<MyPage/>},
  {path:'/', element:<MainBar/>},
]);

function App(){
  return(<>
      <RouterProvider router={router}/>
      </>
  );
}

export default App;
