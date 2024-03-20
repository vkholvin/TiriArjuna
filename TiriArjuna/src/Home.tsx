import React from 'react';
import Navbar from './component/Navbar';
import { Link } from 'react-router-dom';

// Define the structure of your items
interface Item {
  id: number;
  time: string;
  filename: string;
  category: string;
  updatedBy: string;
}

const Home: React.FC = () => {
  // Dummy data array
  const dummyData: Item[] = [
    { id: 1, time: "10:00 AM", filename: "document1.pdf", category: "Reports", updatedBy: "Alice" },
    { id: 2, time: "11:00 AM", filename: "image2.png", category: "Images", updatedBy: "Bob" },
    { id: 3, time: "12:00 PM", filename: "presentation3.ppt", category: "Presentations", updatedBy: "Charlie" },
    { id: 4, time: "01:00 PM", filename: "spreadsheet4.xls", category: "Spreadsheets", updatedBy: "Dana" },
    { id: 5, time: "02:00 PM", filename: "email5.eml", category: "Emails", updatedBy: "Eve" },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-between mx-10 py-16">
        <h3 className="text-lg flex">Welcome ... </h3>
        <div className='pt-10 '>
        <button className="bg-ungu font-bold w-80 p-3 rounded-full text-lg">Upload</button>
        </div>
      </div>
      <div className="mx-10">
        <table className="w-full border-y-4">
          <thead className="border-b-4">
            <tr>
              <th className="py-3 w-[20%]">Time</th>
              <th className="py-3 w-[20%]">Filename</th>
              <th className="py-3 w-[20%]">Category</th>
              <th className="py-3 w-[20%]">Updated by</th>
              <th className="py-3 w-[20%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => (
              <tr key={item.id}>
                <td className="text-center py-6 border-y-2">{item.time}</td>
                <td className="text-center py-6 border-y-2">{item.filename}</td>
                <td className="text-center py-6 border-y-2">{item.category}</td>
                <td className="text-center py-6 border-y-2">{item.updatedBy}</td>
                <td className="text-center py-6 border-y-2">
                  <ActionButtons itemId={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ActionButtons component tailored for handling item-specific actions
interface ActionButtonsProps {
  itemId: number;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ itemId }) => {
  // Placeholder for actual functionality
  const handleDownload = () => {
    console.log(`Downloading item ${itemId}`);
    // Implement download functionality
  };

  return (
    <div className='flex flex-row justify-center space-x-5 w-1/2 '>
      <Link to={`/${itemId}/add`} className="">
        <img src='/assets/add.svg' alt="add"></img>
      </Link>
      <button onClick={handleDownload}>
      <img src='/assets/download.svg' alt="add"></img>
      </button>
    </div>
  );
};

export default Home;
