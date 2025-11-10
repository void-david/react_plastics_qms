import Button from "../components/forms/Button";

interface OperatorDashboardProps {
  onLogout: () => void;
}

function OperatorDashboard({ onLogout }: OperatorDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-800 text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Operator Dashboard</h1>
        <Button onClick={onLogout} className="bg-red-500 hover:bg-red-600">Logout</Button>
      </div>
      <p>Welcome, Operator. Here are your forms:</p>
      {/* List of forms for the operator will go here */}
    </div>
  );
}

export default OperatorDashboard;