import React from "react";

function DisplayExpense({ expense }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
      
        <h2 className="text-xl font-bold mb-3">Expenses</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-2 px-4 text-left border-b border-gray-300">Category</th>
              <th className="py-2 px-4 text-left border-b border-gray-300">Description</th>
              <th className="py-2 px-4 text-left border-b border-gray-300">Spent</th>
            </tr>
          </thead>
          <tbody>
            {expense.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-green-200"} text-gray-800`}
              >
                <td className="py-2 px-4 border-b border-gray-300">{item.category}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.description}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayExpense;
