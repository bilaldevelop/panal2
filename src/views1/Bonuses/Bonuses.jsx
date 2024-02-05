import { useState } from 'react';

const Bonuses = () => {
    // Sample data for user bonus/redemption codes
    const [bonusCodes, setBonusCodes] = useState([
        { id: 1, code: 'BONUS123', type: 'Bonus', amount: 50, status: 'Active' },
        { id: 2, code: 'REDEEM456', type: 'Redemption', amount: 20, status: 'Inactive' },
        // Add more bonus codes as needed
    ]);

    // Function to handle activating or deactivating a bonus code
    const handleToggleStatus = (id) => {
        const updatedBonusCodes = bonusCodes.map((code) =>
            code.id === id ? { ...code, status: code.status === 'Active' ? 'Inactive' : 'Active' } : code
        );
        setBonusCodes(updatedBonusCodes);
    };

    return (
        <div className="overflow-x-auto mt-10">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {bonusCodes.map((code) => (
                        <tr key={code.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{code.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{code.code}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{code.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{code.amount}</td>
                            <td className={`px-6 py-4 whitespace-nowrap ${code.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{code.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    className={`px-4 py-2 rounded-md ${code.status === 'Active' ? 'bg-gradient-to-r from-pink-600 to-purple-900' : 'bg-gradient-to-r from-blue-900 to-purple-800'} text-white`}
                                    onClick={() => handleToggleStatus(code.id)}
                                >
                                    {code.status === 'Active' ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bonuses;
