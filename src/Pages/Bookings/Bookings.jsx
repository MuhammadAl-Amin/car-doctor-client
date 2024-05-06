import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/Bookings?email=${user?.email}`;
  useEffect(() => {

    axios.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, []);
  console.log(bookings);

  const handleDelete = (id) => {
    const proceed = confirm("Are you wand to delete");
    if (proceed) {
      fetch(`http://localhost:5000/Bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFull");
            const remaining = bookings.filter((books) => books._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) =>{
    fetch(`http://localhost:5000/Bookings/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: confirm})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        const remaining = bookings.filter(books => books._id !== id)
        const update = bookings.find(books => books._id ===id);
        update.Status = 'confirm';
        const newBooking = [update, ...remaining];
        setBookings(newBooking)
      }
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Price</th>
            <th></th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((books, index) => (
            <BookingRow
              key={books._id}
              books={books}
              index={index}
              handleDelete={handleDelete}
              handleBookingConfirm = {handleBookingConfirm}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
