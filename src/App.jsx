import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-5 container">
        <button className="btn btn-outline text-white bg-success">
          Add New Chocolate
        </button>
        <div className="container table d-flex justify-content-between align-items-center bg-secondary mt-4 pt-1">
          <h6>Image</h6>
          <h6>Name</h6>
          <h6>Country/Factory</h6>
          <h6>Category</h6>
          <h6>Action</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <img src="" alt="picture" />
          <p>Dark Chocolate</p>
          <p>Australia</p>
          <p>Premium</p>
          <p>Premium</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <img src="" alt="picture" />
          <p>Dark Chocolate</p>
          <p>Australia</p>
          <p>Premium</p>
          <p>Premium</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <img src="" alt="picture" />
          <p>Dark Chocolate</p>
          <p>Australia</p>
          <p>Premium</p>
          <p>Premium</p>
        </div>
      </div>
    </div>
  );
}

export default App;
