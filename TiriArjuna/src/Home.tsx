import React, { useState } from 'react';
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
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy data array
  const dummyData: Item[] = [
    { id: 1, time: "10:00 AM", filename: "document1.pdf", category: "Reports", updatedBy: "Alice" },
    { id: 2, time: "11:00 AM", filename: "image2.png", category: "Images", updatedBy: "Bob" },
    { id: 3, time: "12:00 PM", filename: "presentation3.ppt", category: "Presentations", updatedBy: "Charlie" },
    { id: 4, time: "01:00 PM", filename: "spreadsheet4.xls", category: "Spreadsheets", updatedBy: "Dana" },
    { id: 5, time: "02:00 PM", filename: "email5.eml", category: "Emails", updatedBy: "Eve" },
    { id: 6, time: "10:00 AM", filename: "qedqed.pdf", category: "Reports", updatedBy: "Alice" },
    { id: 7, time: "11:00 AM", filename: "imagewefwef2.png", category: "Images", updatedBy: "Bob" },
    { id: 8, time: "12:00 PM", filename: "presenfwefwtation3.ppt", category: "Presentations", updatedBy: "Charlie" },
    { id: 9, time: "01:00 PM", filename: "spreadwfwsheet4.xls", category: "Spreadsheets", updatedBy: "Dana" },
    { id: 10, time: "02:00 PM", filename: "emailfwefw5.eml", category: "Emails", updatedBy: "Eve" },
  ];

  // Calculate pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = dummyData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-between mx-10 py-8">
        <h3 className="text-lg flex items-center">Welcome ... </h3>
        <div className='pt-0 '>
        <a href="/upload">
        <button className="bg-navbar font-bold w-80 p-3 rounded-full text-lg">
          Upload
          </button>
          </a>
        </div>
      </div>
      <div className="mx-10">
        <table className="w-full border-y-2 border-black">
          <thead className="border-b-2 border-black bg-heder">
            <tr>
              <th className="py-3 w-[20%]">Time</th>
              <th className="py-3 w-[20%]">Filename</th>
              <th className="py-3 w-[20%]">Category</th>
              <th className="py-3 w-[20%]">Updated by</th>
              <th className="py-3 w-[20%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="text-center py-6 border-black border-y-2 bg-tabel">{item.time}</td>
                <td className="text-center py-6 border-black border-y-2 bg-tabel">{item.filename}</td>
                <td className="text-center py-6 border-black border-y-2 bg-tabel">{item.category}</td>
                <td className="text-center py-6 border-black border-y-2 bg-tabel">{item.updatedBy}</td>
                <td className="text-center py-6 border-black border-y-2 bg-tabel">
                  <ActionButtons itemId={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="w-full flex items-center justify-center pt-5 pb-5">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-e-0  rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight  border hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === index + 1 ? 'font-bold bg-ungu' : ''
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight bg-white border rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
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
    <div className="flex flex-row text-center justify-center space-x-5 ">
      <Link to={`/${itemId}/add`} className="">
        <img src="/assets/add.svg" alt="add"></img>
      </Link>
      <button onClick={handleDownload}>
        <img src="/assets/download.svg" alt="add"></img>
      </button>
    </div>
  );
};

export default Home;
