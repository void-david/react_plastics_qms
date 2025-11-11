import { useState } from "react";
import Button from "../components/common/Button";
import ExtrusionOrderForm from "../components/forms/ExtrusionOrder/ExtrusionOrderForm";
import type { ExtrusionOrder } from "../types";

interface OperatorDashboardProps {
  onLogout: () => void;
}

function OperatorDashboard({ onLogout }: OperatorDashboardProps) {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (data: ExtrusionOrder) => {
    console.log("Extrusion order submitted:", data);
    // TODO: Send to backend when available
    alert("Orden de extrusión enviada exitosamente! (Ver consola para detalles)");
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <ExtrusionOrderForm
        onSubmit={handleFormSubmit}
        onCancel={handleFormCancel}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Operator Dashboard</h1>
        <Button onClick={onLogout} className="bg-red-500 hover:bg-red-600">Logout</Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">Welcome, Operator. Select a form to fill out:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Orden de Extrusión</h2>
            <p className="text-slate-300 mb-4">
              Create a new extrusion work order with all manufacturing parameters and quality control settings.
            </p>
            <Button
              onClick={() => setShowForm(true)}
              className="w-full bg-cyan-600 hover:bg-cyan-700"
            >
              Nueva Orden de Extrusión
            </Button>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg shadow-lg opacity-50">
            <h2 className="text-xl font-semibold mb-3">Other Forms</h2>
            <p className="text-slate-300 mb-4">
              Additional forms will be available here in the future.
            </p>
            <Button
              disabled
              className="w-full"
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperatorDashboard;