import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Routes>
        {
          routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={
                    <route.layout {...props} title={route.title}>
                      <route.component {...props} />
                    </route.layout>
                  }
                /> 
              )
          })
       }
      </Routes>
    </div>
  );
}

export default App;