import React from "react";
import {orders} from "../../data";
const AdminOrderList = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Admin Order List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">#</th>
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Order Number</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 text-center">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.customer}</td>
              <td className="border p-2">${order.total}</td>
              <td className="border p-2">{order.orderNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderList;
