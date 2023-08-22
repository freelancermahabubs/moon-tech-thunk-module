// AddCustomer.js
import React, {useState} from "react";

const AddCustomer = ({onAddCustomer}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {name, email};
    onAddCustomer(newCustomer);
    setName("");
    setEmail("");
  };

  return (
    <div className="p-4 mx-auto w-1/2">
      <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
