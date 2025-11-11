import Form from "../components/forms/Form";
import Button from "../components/common/Button";
import type {UserRole}  from "../types";

// Define the user roles

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-slate-800 text-white p-8">
      <Form className="flex flex-col space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white text-center">Select Role to Login</h2>
        <Button type="button" onClick={() => onLogin('operator')} className="bg-sky-600 hover:bg-sky-700">
          Login as Operator
        </Button>
        <Button type="button" onClick={() => onLogin('supervisor')} className="bg-sky-600 hover:bg-sky-700">
          Login as Supervisor
        </Button>
      </Form>
    </div>
    
  )
}

export default LoginPage;