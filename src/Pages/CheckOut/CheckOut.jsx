import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext)
  const {_id, title, price, img} = service;

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const date = event.target.date.value;
    const price = event.target.price.value;
    console.log(name, email, date, price)
    const bookings = {
        customerName : name,
        email,
        date,
        service: title,
        img,
        service_id: _id,
        price: price
    }
    console.log(bookings);

    fetch('http://localhost:5000/Bookings', {
        method: "POST",
        headers: {
            'content-type':'application/json'
            
        },
        body: JSON.stringify(bookings)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Yeah...",
                text: "Order successfully done",
                
              });
        }
    })
    
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    defaultValue={user?.displayName}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    defaultValue={user?.email}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price $"
                    name="price"
                    className="input input-bordered"
                    defaultValue={price}
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#FF3811]"
                  type="submit"
                  value="Order confirm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
