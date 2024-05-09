import React, { useState } from "react";
import EmployeeList from "./Employelist";

const Employeform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    courses: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          courses: [...prevData.courses, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          courses: prevData.courses.filter((course) => course !== value),
        }));
      }
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
    // Reset form data after submission if needed
    setFormData(...employees,{
      name: "",
      email: "",
      mobile: "",
      designation: "",
      gender: "",
      courses: [],
      image: null,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Employe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="mobile">
            Mobile No:
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="designation">
            Designation:
          </label>
          <select
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 p-2"
            required
          >
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Gender:</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Courses:</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="course1"
              name="course1"
              value="MCA"
              checked={formData.courses.includes("MCA")}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="course1">MCA</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="course2"
              name="course2"
              value="BCA"
              checked={formData.courses.includes("BCA")}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="course2">BCA</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="course3"
              name="course3"
              value="BSC"
              checked={formData.courses.includes("BSC")}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="course3">BSc</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Employeform;

