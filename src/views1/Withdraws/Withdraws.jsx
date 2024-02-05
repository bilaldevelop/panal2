import { useState } from 'react';

const WithdrawsTable = () => {
    // Sample data for withdrawal requests
    const [withdrawRequests, setWithdrawRequests] = useState([
        { id: 1, user: 'John Doe', coins: 500, status: 'Pending' },
        { id: 2, user: 'Jane Smith', coins: 300, status: 'Approved' },
        { id: 3, user: 'Bob Johnson', coins: 700, status: 'Pending' },
    ]);

    // Function to handle approving a withdrawal request
    const handleApproveWithdrawal = (id) => {
        const updatedWithdrawRequests = withdrawRequests.map((request) =>
            request.id === id ? { ...request, status: 'Approved' } : request
        );
        setWithdrawRequests(updatedWithdrawRequests);
    };

    return (
        <div className="overflow-x-auto mt-10">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coins</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {withdrawRequests.map((request) => (
                        <tr key={request.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{request.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{request.user}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{request.coins}</td>
                            <td className={`px-6 py-4 whitespace-nowrap ${request.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{request.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {request.status === 'Pending' && (
                                    <button
                                        className=" text-white px-4 py-2 rounded-md mr-2"
                                        onClick={() => handleApproveWithdrawal(request.id)}
                                        style={{background:"linear-gradient(90deg, #0b30e3, #8300c0)"}}

                                    >
                                        Approve
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WithdrawsTable;
