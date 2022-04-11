const ViewFeedback = (props) => {
  const { feedback } = props;

  return (
    <div>
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row">
            <div className="col" style={{ border: "2px solid gray" }}>
              <div className="mb-3">
                <label htmlFor="firstName" className="label-control">
                  FirstName
                </label>
                <input
                  type="text"
                  readOnly
                  value={feedback.firstName}
                  id="firstName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="label-control">
                  LastName
                </label>

                <input
                  type="text"
                  readOnly
                  value={feedback.lastName}
                  id="lastName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="label-control">
                  Date
                </label>
                <input
                  value={feedback.feedbackDate.substring(0, 10)}
                  readOnly
                  type="text"
                  id="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="label-control">
                  email
                </label>

                <input
                  readOnly
                  value={feedback.email}
                  type="text"
                  id="date"
                  className="form-control"
                />
                {/* <button btn btn-dark>
                  <a href={`mailto:${feedback.email}`} target="_blank">
                    email
                  </a>
                </button> */}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="label-control">
                  subject
                </label>
                <textarea
                  rows="3"
                  readOnly
                  value={feedback.subject}
                  id="subject"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="label-control">
                  message
                </label>
                <textarea
                  rows="3"
                  readOnly
                  value={feedback.message}
                  id="message"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
export default ViewFeedback;
