import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    image: "https://www.toyotabuzz.com/img/upload/car/color/20210108163941_104645070.png",
    
  });
  const navigate = useNavigate();
  useEffect(()=>{
    fetch("http://localhost:8000/car/"+id)
    .then((res)=>res.json())
    .then((data)=>{
      setCar(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[id]);
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
    brand: car.brand,
    model: car.model,
    year: car.year,
    color: car.color,
    image: car.image,
    };
    fetch("http://localhost:8000/car/"+id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(carData),
    })
      .then((res) => {
        alert("Save sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Edit new Car</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">Brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={car.brand}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        required
                        name="model"
                        id="model"
                        value={car.model}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="year">Year</label>
                      <input
                        type="number"
                        required
                        name="year"
                        id="year"
                        value={car.year}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="color">Color</label>
                      <input
                        type="text"
                        required
                        name="color"
                        id="color"
                        value={car.color}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="image">Image</label>
                      <input
                        type="text"
                        required
                        name="image"
                        id="image"
                        value={car.image}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  
        
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCar;
