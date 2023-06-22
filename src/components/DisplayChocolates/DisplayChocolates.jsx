import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DisplayChocolates = () => {
  const [chocolates, setChocolates] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chocolates")
      .then((res) => res.json())
      .then((data) => setChocolates(data));
  }, []);

  const handleDeleteItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingChocolates = chocolates.filter(
                (chocolate) => chocolate._id !== id
              );
              setChocolates(remainingChocolates);
            }
          });
      }
    });
  };
  return (
    <div className="mt-5 container">
      <Link to="/newChocolate">
        <button className="btn btn-outline text-white bg-success">
          Add New Chocolate
        </button>
      </Link>
      <div className="container table d-flex justify-content-between align-items-center bg-success text-white mt-4 pt-1">
        <h6>Image</h6>
        <h6>Name</h6>
        <h6>Country/Factory</h6>
        <h6>Category</h6>
        <h6>Action</h6>
      </div>
      {/* load chocolates */}
      {chocolates.map((chocolate, index) => (
        <div
          key={chocolate._id}
          className="d-flex justify-content-between align-items-center border-bottom pb-2"
        >
          <p>{index+1}</p>
          <img
            width="120px"
            height="120px"
            src={chocolate.image}
            alt="picture"
          />
          <p>{chocolate.name}</p>
          <p>{chocolate.country}</p>
          <p>{chocolate.category}</p>
          <div className="d-flex gap-1">
            <Link to={`/updateChocolate/${chocolate._id}/edit`}>
              <button className="btn btn-success btn-sm">Edit</button>
            </Link>
            <button
              onClick={() => handleDeleteItem(chocolate._id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayChocolates;
