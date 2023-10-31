import React, { useState } from "react";
import FormInput from "./FormInput";

const validateName = (name) => {
  if (!name) return "Name is required.";
  if (name.length < 3) return "Name should be at least 3 characters long.";
  return null;
};

const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!email) return "Email is required.";
  if (!emailRegex.test(email)) return "Invalid email format.";
  return null;
};

const validatePhone = (phone) => {
  if (!phone) return "Phone number is required.";
  return null;
};

const validateWebsite = (website) => {
  if (!website) return "Website is required.";
  return null;
};

const validateCompany = (company) => {
  if (!company) return "Company is required.";
  if (company.length < 3)
    return "Company should be at least 3 characters long.";
  return null;
};

const validateAddress = (address) => {
  if (!address) return "Address is required.";
  if (address.length < 5)
    return "Address should be at least 5 characters long.";
  return null;
};

const UserForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      website: validateWebsite(formData.website),
      company: validateCompany(formData.company),
      address: validateAddress(formData.address),
    };

    setErrors(newErrors);
    const isValid = !Object.values(newErrors).some((error) => error !== null);

    if (isValid) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormInput
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormInput
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <FormInput
        label="Website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        error={errors.website}
      />
      <FormInput
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        error={errors.company}
      />
      <FormInput
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
