import React from 'react'
import Sidebar from '../components/HomePage/Sidebar'
import ContentDetails from '../components/ContentDetails'
import TransactionTable from '../components/TransactionTable';
import OderTable from '../components/OrderTable';

const entries = [
  {
    date: '2023-07-10',
    clientName: 'John Doe',
    orderId: '12345',
    defectedPieces: 3,
    deliveredPieces: 7,
  },
  {
    date: '2023-07-11',
    clientName: 'Jane Smith',
    orderId: '67890',
    defectedPieces: 1,
    deliveredPieces: 9,
  },
  {
    date: '2023-07-12',
    clientName: 'Alex Johnson',
    orderId: '54321',
    defectedPieces: 2,
    deliveredPieces: 8,
  },
  // Add more entries as needed
];

const entries2 = [
  {
    lotNo: '1001',
    item: 'Widget A',
    type: ['Type A', 'Type B', 'Type C'],
    rate: 10,
    quantity: 20,
    defected: 2,
    delivered: 18,
    status: 'In Progress',
  },
  {
    lotNo: '1002',
    item: 'Widget B',
    type: ['Type B', 'Type D'],
    rate: 15,
    quantity: 30,
    defected: 5,
    delivered: 25,
    status: 'Completed',
  },
  // Add more entries as needed
];

const Home = () => {
  return (
    <div>
        <div>
            <Sidebar/>

            <ContentDetails/>

            <TransactionTable entries={entries} />

            <OderTable entries={entries2}/>
        </div> 
    </div>
  )
}

export default Home
