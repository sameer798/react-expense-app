import React from "react";

function DisplayExpense({ expense }) {


    const deleteHandler = (id)=>{
        console.log(id)
    }

    const editHandler = (id)=>{
        console.log(id)
    }


  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="text-xl font-bold mb-3">Expenses</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-2 px-4 text-left border-b border-gray-300">
                Category
              </th>
              <th className="py-2 px-4 text-left border-b border-gray-300">
                Description
              </th>
              <th className="py-2 px-4 text-left border-b border-gray-300">
                Spent
              </th>
              <th className="py-2 px-4 text-left border-b border-gray-300">
                request
              </th>
            </tr>
          </thead>
          <tbody>
            {expense.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-green-200"
                } text-gray-800`}
              >
                <td className="py-2 px-4 border-b border-gray-300">
                  {item.category}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {item.description}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {item.spent}
                </td>
                <td>
                  <button
                    onClick={editHandler.bind(null, item.id)}
                    className="bg-neutral-500 hover:bg-neutral-600 font-thin rounded px-1 text-white"
                  >
                    edit
                  </button>
                  <button onClick={deleteHandler.bind(null, item.id)} className="bg-red-500 text-white rounded px-1 font-thin ml-2 hover:bg-red-600">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayExpense;
