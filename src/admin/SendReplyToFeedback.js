import { useEffect, useState } from "react";
import emailJs from "emailjs-com";
import { toast } from "react-toastify";
const SendReplyToFeedback = (props) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [toEmail, setToEmail] = useState("");
  useEffect(() => {
    // const firstName = props.user.firstName;
    // const lastName = props.user.lastName;
    setToEmail(props.user.email);
    // setUserName(firstName.concat(" ", lastName));
    setUserName("Groceteria Admin");
  }, []);

  function sendFeedback(e) {
    e.preventDefault();
    if (message.length == "" || subject.length == "") {
      toast.warn("enter subject and message properly !!");
    } else {
      emailJs
        .sendForm(
          "service_qx4cm7d",
          "template_d89kmfj",
          e.target,
          "3SKX-WM04Jh7JMzdW"
        )
        .then((response) => {
          toast.success("email sent (:");
        });
    }
   
  }

  return (
    <div>
      <div className="row ">
        <div className="col-2"></div>
        <div
          className="col-8"
          style={{ border: "1px solid gray", padding: "10px" }}
        >
          <div className="row">
            <div className="col">
              <form onSubmit={sendFeedback}>
                <div className="mb-3">
                  <label htmlFor="userName" className="label-control">
                    From
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={userName}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user_email" className="label-control">
                    To
                  </label>
                  <input
                    type="text"
                    id="user_email"
                    name="user_email"
                    value={toEmail}
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
      </div>
    </div>
  );
};
export default SendReplyToFeedback;
