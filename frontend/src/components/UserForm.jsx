import React, { useState } from "react";
import FormInput from "./FormInput";

const validateName = (name) => {
  if (!name) return "Name is required.";
  if (name.length < 2) return "Name should be at least 2 characters long.";
  if (name.length > 49) return "Name should be less than 50 characters long.";
  return null;
};

const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!email) return "Email is required.";
  if (!emailRegex.test(email)) return "Not a valid email address.";
  return null;
};

const validatePhone = (phone) => {
  if (!phone) return "Phone number is required.";
  if (phone.length < 3 || phone.length > 20)
    return "Phone number should be between 3 and 20 characters long.";
  return null;
};

const validateWebsite = (website) => {
  if (!website) return "Website is required.";
  if (website.length > 49)
    return "Website should be less than 50 characters long.";
  return null;
};

const validateCompany = (company) => {
  if (!company) return "Company is required.";
  if (company.length < 3)
    return "Company should be at least 3 characters long.";
  if (company.length > 49)
    return "Company should be less than 50 characters long.";
  return null;
};

const validateAddress = (address) => {
  if (!address) return "Address is required.";
  if (address.length < 5)
    return "Address should be at least 5 characters long.";
  if (address.length > 49)
    return "Address should be less than 50 characters long.";
  return null;
};

const validateCity = (city) => {
  if (!city) return "City is required.";
  if (city.length > 29)
    return "City should be less than 30 characters long.";
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
    city: "",
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
      city: validateCity(formData.city),
    };

    setErrors(newErrors);
    const isValid = !Object.values(newErrors).some((error) => error !== null);

    if (isValid) {
      const formatedUserObj = {
        id: Math.floor(Math.random() * 1000),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        company: {
          name: formData.company,
        },
        address: {
          street: formData.address,
          city: formData.city,
        },
      };
      submitForm(formatedUserObj);
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
      <FormInput
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
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
