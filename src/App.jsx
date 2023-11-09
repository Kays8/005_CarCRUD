import { AddCar, EditCar, CarDetail, CarList } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
      <div className="container" >
        <h1>React.js CarCRUD Operation</h1><br/>
        <h2>005 Thirayut Boonin</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CarList></CarList>}></Route>
            <Route path="/car/create" element={<AddCar />}></Route>
            <Route path="/car/edit/:id" element={<EditCar />}></Route>
            <Route
              path="/car/detail/:id"
              element={<CarDetail />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
