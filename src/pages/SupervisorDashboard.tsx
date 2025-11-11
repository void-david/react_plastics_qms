import Button from "../components/common/Button";

interface SupervisorDashboardProps {
  onLogout: () => void;
}

function SupervisorDashboard({ onLogout }: SupervisorDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-800 text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Supervisor Dashboard</h1>
        <Button onClick={onLogout} className="bg-red-500 hover:bg-red-600">Logout</Button>
      </div>
      <p>Welcome, Supervisor. Here are the forms awaiting your review:</p>
      {/* List of submitted forms for the supervisor will go here */}
    </div>
  );
}

export default SupervisorDashboard;