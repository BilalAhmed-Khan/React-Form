import React, { useState } from "react";

const MainForm = () => {
  const [formsData, setFormsData] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    address: "",
    gender: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formsData);
    setSubmittedData(formsData);
  };
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormsData((prevFormData) => ({ ...prevFormData, [name]: value }));
    type === "radio"
      ? setFormsData((prevFormData) => ({ ...prevFormData, [name]: value }))
      : setFormsData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <form className="mainForm" onSubmit={handleSubmit}>
        <div className="Inputs">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formsData.firstName}
              onChange={handleChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              value={formsData.lastName}
              onChange={handleChange}
              name="lastName"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="Inputs-detail">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              className="form-control"
              name="occupation"
              value={formsData.occupation}
              onChange={handleChange}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              value={formsData.address}
              onChange={handleChange}
              name="address"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formsData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>
        <div className="mb-3 form-check">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formsData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      {submittedData && (
        <div>
          <h2>
            Your name is {submittedData.firstName} {submittedData.lastName} (
            {submittedData.gender})
          </h2>
          <br />
          <h2>Occupation: {submittedData.occupation}</h2>
          <h4>You live at {submittedData.address}</h4>
        </div>
      )}
    </>
  );
};

export default MainForm;
