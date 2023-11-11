import {useState} from "react";

export default function Contacts() {
   const [formData, setFormData] = useState({name: "",email: "",message: ""})

   const handleChange = (event) => {
       const { name, value } = event.target;
       setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
   }

   const  handleSubmit = (event) => {
       event.preventDefault();
       alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`)
   };

   return (
       <div className="mx-auto mt-10 bg-light-gray max-w-4xl w-3/4 rounded">
        <form onSubmit={handleSubmit} className="flex flex-col px-4 py-2">
            <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-2/3 text-dark-gray"/>
            </div >

            <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-2/3 text-dark-gray"/>
            </div>

            <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" name="message" value={formData.message} onChange={handleChange} className="w-2/3 text-dark-gray"/>
            </div>

            <button type="submit" className="w-2/3 bg-sky-blue mt-4">Submit</button>
        </form>
       </div>
   )
}

