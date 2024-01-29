import React, { useState } from "react";
import Icons from "../common/Icons";
import "./ContactMe.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData?.name?.trim()?.length === 0 ||
      formData?.email?.trim()?.length === 0 ||
      formData?.message?.trim()?.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <div className="contact_section" id="contact">
        <div className="contact_section_heading">
          <h1>Contact Me.</h1>
        </div>
        <div className="contact">
          <div className="contact_form">
            <form action="">
              <div className="input_field">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleOnChange}
                />
                {/* {error && <p>This field is required</p>} */}
              </div>
              <div className="input_field">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleOnChange}
                />
                {/* {error && <p>This field is required</p>} */}
              </div>
              <div className="input_field">
                <p>Message</p>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleOnChange}
                />
                {/* {error && <p>This field is required</p>} */}
              </div>
              <div className="form_btn">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
          <div className="contact_info">
            <div className="contact_info_wrapper">
              <div className="contact_icon">
                <i className="bi bi-telephone-fill"></i>
                <span>+91-8384095798</span>
              </div>
              <div className="contact_icon">
                <i className="bi bi-envelope"></i>
                <span>sushmay097@gmail.com</span>
              </div>
              <div className="contact_info_icon">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
