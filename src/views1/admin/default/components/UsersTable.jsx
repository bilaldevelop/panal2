// import { useState } from "react";
// // import "./UserTale.css"

// const UsersTable = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
//     { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
//     { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", role: "User" },
//   ]);

//   const handleDelete = (id) => {
//     const updatedUsers = users.filter((user) => user.id !== id);
//     setUsers(updatedUsers);
//   };

//   const handleEdit = (id, updatedUser) => {
//     const updatedUsers = users.map((user) => {
//       if (user.id === id) {
//         return { ...user, ...updatedUser };
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//   };

//   return (
//     <div className="overflow-x-auto mt-10">
//       <table className="min-w-[95%] mx-auto divide-none">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">No.</th>
//             <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
//             <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
//             <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
//             <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-none">
//           {users.map((user) => (
//             <tr key={user.id}>
              // <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              // <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              // <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              // <td className="px-6 py-4 whitespace-nowrap">{user.Phone}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-left">
//               <button
//                 className="action-btn edit-btn mr-10 bg-[#ec6105] px-6 py-1.5 font-semibold text-white"
//                 onClick={() => handleEdit(user.id, { role: "Admin" })}
//                 style={{fontFamily: "'Iceland', sans-serif"}}
//               >
//                 Edit
//               </button>
//               <button
//                 className="action-btn delete-btn bg-gradient-to-r from-purple-900 to-purple-600 px-6 py-1.5 font-semibold text-white"
//                 onClick={() => handleDelete(user.id)}
//                 style={{fontFamily: "'Iceland', sans-serif"}}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// };

// export default UsersTable;



import { useState } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", role: "User" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setEditedUser({ ...user }); // Make a copy of the selected user for editing
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditedUser(null);
  };

  const handleUpdateUser = () => {
    // Update the user in the users state with the edited user details
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-none">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">No.</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-none">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              {/* Table Body */}
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="action-btn edit-btn mr-10 bg-[#ec6105] px-6 py-1.5 font-semibold text-white"
                  style={{background:"linear-gradient(90deg, #0b30e3, #8300c0)"}}
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="action-btn delete-btn bg-gradient-to-r from-pink-600 to-purple-900 px-6 py-1.5 font-semibold text-white"
                  onClick={() => handleDelete(user.id)}

                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isModalOpen && (
           <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
           <div className="relative p-2 w-full max-w-md">
             <div className="relative bg-white rounded-lg shadow">
               <div className="flex items-center justify-between p-2 border-b rounded-t ">
               <div className="p-2 w-full">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>                
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="border-2 border-gray-300 mb-4 p-2 rounded-lg block w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="border-2 border-gray-300 mb-4 p-2 rounded-lg block w-full"
              placeholder="Email"
            />
             <input
              type="role"
              name="role"
              value={editedUser.role}
              onChange={handleChange}
              className="border-2 border-gray-300 mb-4 p-2 rounded-lg block w-full"
              placeholder="Role"
            />
            <div className="flex justify-end">
              <button
                className=" text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleUpdateUser}
                style={{background:"linear-gradient(90deg, #0b30e3, #8300c0)"}}

              >
                Save
              </button>
              <button
                className="bg-gradient-to-r from-pink-600 to-purple-900 text-white px-4 py-2 rounded-lg"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              
            </div>
            </form>
              </div>
            </div>
            </div>
            </div>
            </div>
      )}
    </div>
  );
};

export default UsersTable;

