import React, { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const getUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;
    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://contact-form-a97e0-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Your Data Stored Successfully");
      }
    } else {
      alert("Please fill the all the data");
    }
  };
  return (
    <div className="main shaddow">
      <div className="main-container">
        <form className="f-gap" method="POST">
          <h2 className="text-3xl mb-5 font-sans">Contact Us</h2>
          <div className="g-inp-gap">
            <div className=" f-gap border-b border-gray-500">
              <p className="text-sm gray-font ">Your Name *</p>

              <input
                className="inputs"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="f-gap border-b border-gray-500">
              <p className="text-sm gray-font "> Email </p>

              <input
                className="inputs"
                type="text"
                name="email"
                placeholder="Enter your email addess"
                value={user.email}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>

            <div className="f-gap border-b border-gray-500">
              <p className="text-sm gray-font ">Mobile Number</p>

              <input
                className="inputs"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={user.phone}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>

            <div className="f-gap border-b border-gray-500">
              <p className="text-sm gray-font">Address</p>

              <input
                className="inputs"
                type="text"
                name="address"
                placeholder="Enter your address"
                value={user.address}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="f-gap  border-b border-gray-500">
            <p className="text-sm gray-font ">Message</p>
            <textarea
              cols={100}
              rows={2}
              className="w-full inputs"
              name="message"
              placeholder="Your message here... "
              value={user.message}
              onChange={getUserData}
            />
          </div>
        </form>

        <button type="submit" className="btn" onClick={postData}>
          Submit
        </button>
        <p className="gray-font mt-3">
          For any question contact our 24/7 call center:
          <span className="text-red-700"> +91 xxx xxxx</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
