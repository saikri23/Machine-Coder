import React, { useState } from "react";

const FormWithOutPackage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    intrests: [],
  });

  const [errorData, setErrorData] = useState({});

  const validateForm = () => {
    const errors = {};
    if (formData.name === "") {
      errors.name = "Enter the name properly";
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    }
    setErrorData(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("submitted");
    } else {
      console.log("Sai");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked, name } = e.target;
    let updatedIntrests = [...formData.intrests];
    if (checked) {
      updatedIntrests.push(name);
    } else {
      updatedIntrests = updatedIntrests.filter((ele) => ele !== name);
    }

    setFormData({
      ...formData,
      intrests: updatedIntrests,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.value}
          name="name"
          onChange={handleOnChange}
        />
        {errorData.name && (
          <span style={{ color: "red" }}>Enter the name please</span>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.value}
          name="email"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.value}
          name="password"
          onChange={handleOnChange}
        />
        {errorData.password && (
          <span style={{ color: "red" }}>{errorData.password}</span>
        )}
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleOnChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Interests:</label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="coding"
            checked={formData.intrests.includes("coding")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">Coding</label>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="sports"
            checked={formData.intrests.includes("sports")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">Sports</label>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="dancing"
            checked={formData.intrests.includes("dancing")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="">Dancing</label>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithOutPackage;
