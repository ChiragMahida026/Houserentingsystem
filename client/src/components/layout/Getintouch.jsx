import axios from "axios";
import React, { useState } from "react";

const Getintouch = () => {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();

    
    try {
      const res = axios.get(
        "routes/api/sendmail?email=" +
          email +
          "&" +
          "name=" +
          name +
          "&" +
          "message=" +
          message
      );
      console.log(res);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <>
      <div className="section-container" id="contact-section-container">
        <div className="container contact-form-container">
          <div className="row">
            <div className="col-xs-12 col-md-offset-2 col-md-8">
              <div className="section-container-spacer">
                <h2 className="text-center">Get in touch</h2>
                <hr
                  style={{
                    border: "4px solid blueviolet",
                    width: "30%",
                    margin: "revert",
                  }}
                />
              </div>
              <form
                action="../../../../routes/api/sendmail"
                method="post"
                onSubmit={save}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        className="form-control"
                        placeholder="Full Name"
                        pattern="^[a-zA-Z]+ [a-zA-Z]+$"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        className="form-control"
                        placeholder="Email"
                        pattern="^[a-z\.0-9]{6,30}@.+\..+$"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Enter your message"
                    minLength={5}
                    maxLength={250}
                    name="message"
                    value={message}
                    onChange={(e) => onChange(e)}
                    style={{ resize: "none" }}
                    required
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  name="submitGetInTouch"
                  value="Send message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getintouch;