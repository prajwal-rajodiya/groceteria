import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { URL } from "../config";
import ViewFeedback from "./ViewFeedback";

import SendReplyToFeedback from "./SendReplyToFeedback";
import Topbar from "./Topbar";
export default function FeedbackList() {
  useEffect(() => {
    fetchAllFeedback();
  }, []);

  const [allFeedback, setAllFeedback] = useState([]);
  const [selected, setSelected] = useState();
  const [isFeedbackShown, setisFeedbackShown] = useState(false);
  const [isMailSelected, setisMailSelected] = useState(false);
  const fetchAllFeedback = () => {
    const url = `${URL}/admin/getAllFeedback`;

    axios.get(url).then((response) => {
      const result = response.data;
      //console.log(response.data);
      setAllFeedback(result.data);
    });
  };

  return (
    <>
      {" "}
      <Topbar />
      <div className="container table-responsive">
        <h1 className="display-3 text-center">All Feedback</h1>
        {allFeedback !== "" && (
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col"> Id</th>
                <th scope="col"> firstName</th>
                <th scope="col"> lastName</th>
                <th scope="col"> email</th>
                <th scope="col"> date</th>
                <th scope="col"> </th>
                <th scope="col"> Action</th>
              </tr>
            </thead>
            <tbody>
              {allFeedback.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.feedbackDate.substring(0, 10)}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          const feedback = allFeedback.filter(
                            (e) => e.id == item.id
                          );
                          setSelected(feedback[0]);
                          setisFeedbackShown(true);
                          setisMailSelected(false);
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          const feedback = allFeedback.filter(
                            (e) => e.id == item.id
                          );
                          setSelected(feedback[0]);
                          setisMailSelected(true);
                          setisFeedbackShown(false);
                        }}
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {isFeedbackShown && <ViewFeedback feedback={selected} />}
      {isMailSelected && <SendReplyToFeedback user={selected} />}
    </>
  );
}
