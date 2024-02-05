// import { useState } from 'react';

// const Account = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "johndoe@example.com", Phone: "(209) 577-6029", },
//     { id: 2, name: "Jane Smith", email: "janesmith@example.com", Phone: "(702) 684-7721", },
//     { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", Phone: "(855) 723-2747", },
//   ]);

//   const handleUpdate = (id, updatedUser) => {
//     const updatedUsers = users.map((user) => {
//       if (user.id === id) {
//         return { ...user, ...updatedUser };
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//       setIsOpen(!isOpen);
//   };

//   return (
//     <div className="overflow-x-auto mt-10">
//     <table className="min-w-[95%] mx-auto divide-none">
//       <thead className="bg-gray-50">
//         <tr>
//           <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">No.</th>
//           <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
//           <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
//           <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
//           <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-none ">
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
//             <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
//             <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
//             <td className="px-6 py-4 whitespace-nowrap">{user.Phone}</td>
//             <td className="px-6 py-4 whitespace-nowrap text-left">
//                {/* Modal toggle button */}
//             <button
//                 className="block text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
//                 type="button"
//                 onClick={toggleModal}
//             >
//                View
//             </button>

//             {/* Main modal */}
//             {isOpen && (
//                 <div
//                     id="authentication-modal"
//                     tabIndex="-1"
//                     aria-hidden="true"
//                     className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
//                 >
//                     <div className="relative p-4 w-full max-w-md">
//                         {/* Modal content */}
//                         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                             {/* Modal header */}
//                             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                 Account Information
//                                 </h3>
//                                 <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal} >
//                                     <svg
//                                         className="w-3 h-3"
//                                         aria-hidden="true"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 14 14">
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                                     </svg>
//                                     <span className="sr-only">Close modal</span>
//                                 </button>
//                             </div>
//                             {/* Modal body */}
//                             <div className="p-4 md:p-5">
//                             <form className="space-y-4">
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//                                   Full Name </label>
//                                 <input
//                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                   id="firstName"  type="text" value="" placeholder="Enter your Full Name" readOnly />
//                               </div>
//                                                   <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                   Email Address
//                                 </label>
//                                 <input
//                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                   id="email" type="email" value="" placeholder="Enter your email"  readOnly /></div>
//                                <div className="mb-4">
//                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//                                    Phone Number</label>
//                                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                    id="phoneNumber" type="text" value="" placeholder="Enter your phone number" readOnly/></div>
                                                      
//                                <button type="submit"
//                                 className="w-full  text-white bg-[#ec6105]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                                onClick={() => handleUpdate(user.id, { role: "Admin" })}
//                                >UpDate Info</button>
//                            </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
              
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
   
//   );
// };

// export default Account;



import { useState, useEffect } from 'react';

const Account = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John farukhayaz", email: "johnfarukhayaz@example.com", Phone: "(209) 499-0995" },
    { id: 2, name: "farukhayaz", email: "farukhayaz@example.com", Phone: "(702) 555-7721" },
    { id: 3, name: "Bobfarukhayaz", email: "farukhayazson@example.com", Phone: "(855) 999-2747" }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Load user data from local storage when component mounts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Update local storage whenever user data changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const toggleModal = (user) => {
    setSelectedUser(user);
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    const updatedUsers = users.map((user) => {
      if (user.id === selectedUser.id) {
        return { ...user, name: selectedUser.name, email: selectedUser.email, Phone: selectedUser.Phone };
      }
      return user;
    });
    setUsers(updatedUsers);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-none">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">No.</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-none">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.Phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                <button
                  className="block text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="button"
                  onClick={() => toggleModal(user)}
                  style={{background:"linear-gradient(90deg, #0b30e3, #8300c0)"}}

                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Main modal */}
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">Account Information</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4">
                <form className="space-y-4" onSubmit={handleUpdate}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">Full Name</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="name"
                      value={selectedUser ? selectedUser.name : ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      value={selectedUser ? selectedUser.email : ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                      type="text"
                      name="Phone"
                      value={selectedUser ? selectedUser.Phone : ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full  text-white font-bold py-2 px-4 rounded"
                    style={{background:"linear-gradient(90deg, #0b30e3, #8300c0)"}}
                    >
                    Update Info
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
