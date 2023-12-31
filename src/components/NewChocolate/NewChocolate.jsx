import React from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

const NewChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const country = form.country.value;
    const category = form.category.value;

    console.log(name, image, country, category);

    const newChocolate = {
      name,
      image,
      country,
      category,
    };
    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful!",
            text: "Great you are added new chocolate",
            icon: "success",
            confirmButtonText: "Good day!!!",
          });
        }
      });
  };

  return (
    <div className="container bg-light mt-5 p-5">
      <h4>Create New Chocolate</h4>
      <div className="mt-5">
        <Form onSubmit={handleAddChocolate}>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            className="mb-4"
            placeholder="Name"
          />
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="text"
            name="image"
            className="mb-4"
            placeholder="Image"
          />
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            name="country"
            className="mb-4"
            placeholder="Country Name"
          />
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Category Name"
          />
          <Form.Control className="btn btn-success mt-5" type="Submit" />
        </Form>
      </div>
    </div>
  );
};

export default NewChocolate;
