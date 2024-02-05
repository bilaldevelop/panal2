
const DepositsTable = () => {
    // Sample data for deposits
    const deposits = [
        { id: 1, user: 'John Doe', amount: 100, method: 'Cart', status: 'Pending' },
        { id: 2, user: 'Jane Smith', amount: 50, method: 'Flash', status: 'Completed' },
        { id: 3, user: 'Bob Johnson', amount: 200, method: 'Cart', status: 'Pending' },
    ];

    return (
        <div className="overflow-x-auto mt-10">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {deposits.map((deposit) => (
                        <tr key={deposit.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{deposit.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{deposit.user}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{deposit.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{deposit.method}</td>
                            <td className={`px-6 py-4 whitespace-nowrap ${deposit.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>{deposit.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DepositsTable;
