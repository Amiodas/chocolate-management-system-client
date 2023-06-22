import React from "react";
import { Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const chocolates = useLoaderData();
  const { _id, name, image, country, category } = chocolates;
  console.log(_id);
  const handleUpdateChocolate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const country = form.country.value;
    const category = form.category.value;

    const updatedChocolate = {
      name,
      image,
      country,
      category,
    };

    console.log(updatedChocolate);

    fetch(`http://localhost:5000/chocolates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful!",
            text: "Great you updated the chocolate",
            icon: "success",
            confirmButtonText: "Good day!!!",
          });
        }
      });
  };
  return (
    <div className="container bg-light mt-5 p-5">
      <h4>Update Chocolate</h4>
      <div className="mt-5">
        <Form onSubmit={handleUpdateChocolate}>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={name}
            className="mb-4"
            placeholder="Name"
          />
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="text"
            name="image"
            defaultValue={image}
            className="mb-4"
            placeholder="Image"
          />
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            name="country"
            defaultValue={country}
            className="mb-4"
            placeholder="Country Name"
          />
          <Form.Label>Category:</Form.Label>
          <Form.Control
            type="text"
            name="category"
            defaultValue={category}
            placeholder="Category Name"
          />
          <Form.Control className="btn btn-success mt-5" type="Submit" />
        </Form>
      </div>
    </div>
  );
};

export default UpdateChocolate;
