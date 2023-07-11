import React from 'react';

const OderTable = ({ entries }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4">Lot No</th>
          <th className="py-2 px-4 w-1/8">Item</th>
          <th className="py-2 px-4 w-3/10">Type</th>
          <th className="py-2 px-4">Rate</th>
          <th className="py-2 px-4">Quantity</th>
          <th className="py-2 px-4">Defected</th>
          <th className="py-2 px-4">Delivered</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4"></th> {/* Empty header for button */}
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr
            key={index}
            className={`bg-${index % 2 === 0 ? 'white' : 'gray-100'} text-center`}
          >
            <td className="py-2 px-4">{entry.lotNo}</td>
            <td className="py-2 px-4 w-1/8">{entry.item}</td>
            <td className="py-2 px-4 w-3/10">{entry.type.join(', ')}</td>
            <td className="py-2 px-4">{entry.rate}</td>
            <td className="py-2 px-4">{entry.quantity}</td>
            <td className="py-2 px-4">{entry.defected}</td>
            <td className="py-2 px-4">{entry.delivered}</td>
            <td className="py-2 px-4">{entry.status}</td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded">
                Transactions
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OderTable;
