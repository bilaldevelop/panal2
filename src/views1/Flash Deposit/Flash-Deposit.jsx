import React from 'react';

const FlashDeposit = () => {
    // Sample data for flash deposit instructions
    const flashDepositInstructions = [
        { id: 1, method: 'Bank Transfer', instructions: 'Transfer funds to the provided bank account details.' },
        { id: 2, method: 'PayPal', instructions: 'Send funds to the provided PayPal account email address.' },
        { id: 3, method: 'Crypto Wallet', instructions: 'Transfer cryptocurrency to the provided wallet address.' },
    ];

    // Function to determine the method color class based on the method name
    const getMethodColorClass = (method) => {
        switch (method) {
            case 'Bank Transfer':
                return 'text-blue-600';
            case 'PayPal':
                return 'text-green-600';
            case 'Crypto Wallet':
                return 'text-purple-600';
            default:
                return 'text-gray-900';
        }
    };

    return (
        <div className="overflow-x-auto mt-10">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {flashDepositInstructions.map((instruction) => (
                        <tr key={instruction.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{instruction.id}</td>
                            <td className={`px-6 py-4 whitespace-nowrap ${getMethodColorClass(instruction.method)}`}>{instruction.method}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{instruction.instructions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlashDeposit;
