import React from "react";
import {Link} from "react-router-dom";
import {customers} from "../../../src/data";

const AdminCustomersList = () => {
  return (
    <div>
      <h1 className="text-center font-semibold mt-4 mb-4 text-2xl">
        Admin Customers List
      </h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border px-4 py-2 text-center">{customer.id}</td>
              <td className="border px-4 py-2 text-center">{customer.name}</td>
              <td className="border px-4 py-2 text-center text-green-600 ">
                <Link to={`/admin/customers/${customer.id}`}>
                  Customer Detail View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AdminCustomersList;
