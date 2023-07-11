import React from 'react';

const TransactionTable = ({ entries }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 w-1/5">Date</th>
          <th className="py-2 px-4 w-1/5">Order ID</th>
          <th className="py-2 px-4 w-1/5">Defected Pieces</th>
          <th className="py-2 px-4 w-1/5">Delivered Pieces</th>
          <th className="py-2 px-4 w-1/5"></th> {/* Empty header */}
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr
            key={index}
            className={`bg-${index % 2 === 0 ? 'white' : 'gray-100'} text-center`}
          >
            <td className="py-2 px-4 w-1/5">{entry.date}</td>
            <td className="py-2 px-4 w-1/5">{entry.orderId}</td>
            <td className="py-2 px-4 w-1/5">{entry.defectedPieces}</td>
            <td className="py-2 px-4 w-1/5">{entry.deliveredPieces}</td>
            <td className="py-2 px-4 w-1/5">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded">
                Order Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default TransactionTable;
