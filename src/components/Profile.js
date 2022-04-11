import "./Profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import { toast } from "react-toastify";
import Header3 from "./Header3";
import Footer from "./Footer";
const Profile = () => {
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [houseno, setHouseno] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");

  const [addressId, setAddressId] = useState("");

  function updateProfile() {
    const url = `${URL}/user/updateProfile`;
    const customerId = sessionStorage.getItem("id");

    const body = {
      apartment,
      city,
      area,
      houseno,
      firstName,
      lastName,
      email,
      pincode,
      mobile,
      customerId,
      addressId,
    };
    console.log(body);
    axios.post(url, body).then((response) => {
      if (response.data.status == "success") {
        toast.success(response.data.data);
        console.log(response);
      } else {
        toast.error(response.data);
        console.log(response);
      }
    });
  }

  const getProfileData = () => {
    const url = `${URL}/user/profileData`;
    const id = sessionStorage.getItem("id");
    console.log(id);
    axios.get(url, { params: { id: id } }).then((response) => {
      const result = response.data.data;

      setCity(result.city);
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setHouseno(result.houseno);
      setApartment(result.apartment);
      setPincode(result.pincode);
      setEmail(result.email);
      setArea(result.area);
      setMobile(result.mobile);
      setAddressId(result.addressId);

      console.log(result);
    });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <Header3 />
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row">
            <h1 className="display-6">Account Info</h1>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="FirstName" className="label-control">
                  FirstName
                </label>
                <input
                  type="text"
                  id="FirstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Email" className="label-control">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  readOnly="true"
                  value={email}
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="LastName" className="label-control">
                  LastName
                </label>
                <input
                  type="text"
                  id="LastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="label-control">
                  Mobile
                </label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <h1 className="display-6">Address</h1>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="appartment" className="label-control">
                  Appartment
                </label>
                <input
                  type="text"
                  id="appartment"
                  className="form-control"
                  value={apartment}
                  onChange={(e) => {
                    setApartment(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="area" className="label-control">
                  area
                </label>
                <input
                  type="text"
                  id="Area"
                  className="form-control"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pincode" className="label-control">
                  Pincode
                </label>
                <input
                  type="number"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <hr />
              <button className="btn btn-dark" onClick={updateProfile}>
                Update
              </button>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="FirstName" className="label-control">
                  HouseNo
                </label>
                <input
                  type="number"
                  id="houseNo"
                  className="form-control"
                  value={houseno}
                  onChange={(e) => {
                    setHouseno(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="label-control">
                  city
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
