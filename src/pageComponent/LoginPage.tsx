import { Building2, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function LoginPage({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (authenticated: boolean) => void;
}) {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    // Hardcoded credentials for demonstration
    if (username === "anupam" && password === "12345") {
      setIsAuthenticated(true); // Set authenticated state
      navigate("/"); // Redirect to the dashboard
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      {/* Header and Main Structure */}
      <header className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/src/assets/NeoLotex.png"
              alt="Neolotex Logo"
              className="w-10 h-10 rounded-full bg-white p-1"
            />
            <span className="text-white text-2xl font-bold">Neolotex</span>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="flex justify-center">
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Welcome back! Please enter your details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <InputSection
                    id="demo"
                    type="text"
                    placeholder="Demo"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <InputSection
                    id="username"
                    name="username" // Add name attribute
                    type="text"
                    placeholder="Username"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <InputSection
                    id="password"
                    name="password" // Add name attribute
                    type="password"
                    placeholder="Password"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button type="submit" variant="blue" className="w-full">
                LOGIN
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          © 2024 Neolotex. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const InputSection = ({ ...props }) => (
  <div className="space-y-2">
    <div className="relative">
      <Input {...props} className="pl-10" />
    </div>
  </div>
);
