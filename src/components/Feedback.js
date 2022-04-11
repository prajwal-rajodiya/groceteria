import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Footer from "./Footer";
import Header3 from "./Header3";
import emailJs from "emailjs-com";
import { toast } from "react-toastify";
const Feedback = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    const firstName = sessionStorage.getItem("firstName");
    const lastName = sessionStorage.getItem("lastName");
    setemail(sessionStorage.getItem("email"));
    setUserName(firstName.concat(" ", lastName));
  }, []);

  function sendFeedback(e) {
    e.preventDefault();
    if (message.length == "" || subject.length == "") {
      toast.warn("enter subject and message properly !!");
    } else {
      emailJs
        .sendForm(
          "service_qx4cm7d",
          "template_oip1i7g",
          e.target,
          "3SKX-WM04Jh7JMzdW"
        )
        .then((response) => {
          toast.success("Feedback is submitted (:");
        });
    }
    const url = `${URL}/user/feedback`;
    const customerId = sessionStorage.getItem("id");

    const body = {
      message,
      subject,
      customerId,
    };
    console.log(body);
    axios.post(url, body);
    e.target.reset();
  }

  return (
    <div>
      <Header3></Header3>
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row">
            <h1 className="display-6">Feedback</h1>
            <div className="col">
              <form onSubmit={sendFeedback}>
                <div className="mb-3">
                  <label htmlFor="userName" className="label-control">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="userName"
                    readOnly
                    value={userName}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="user_email" className="label-control">
                    Email
                  </label>
                  <input
                    type="text"
                    id="user_email"
                    name="user_email"
                    value={email}
                    readOnly
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="label-control">
                    subject
                  </label>
                  <textarea
                    rows="3"
                    type=""
                    id="subject"
                    name="subject"
                    className="form-control"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="label-control">
                    message
                  </label>
                  <textarea
                    rows="3"
                    type=""
                    name="message"
                    id="message"
                    className="form-control"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-dark">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Feedback;
