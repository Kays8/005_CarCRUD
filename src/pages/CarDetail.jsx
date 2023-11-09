import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();
  const [ carData, setCarData ] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/car/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Car Detail</h2>
            </div>
            {carData && (
              <div className="card-body">
                <img src={carData.image + "&" + carData.id} alt="car" />
                <div className="card-text">
                  <h3>
                    {carData.brand} - ({carData.id})
                  </h3>
                  <h4>Car Details:</h4>
                  <h4>brand:{carData.brand}</h4>
                  <h4>model:{carData.model}</h4>
                  <h4>year:{carData.year}</h4>
                  <h4>color:{carData.color}</h4>
                  
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
