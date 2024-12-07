import { Image, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-blue-600 p-4">
        <div className="container flex items-center gap-2">
          <Image
            // alt="Neolotex Logo"
            width={32}
            height={32}
            className="rounded-full bg-white p-1"
          />
          <span className="text-xl font-bold text-white">Neolotex</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 bg-blue-50/50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Forgot your password?</CardTitle>
            <p className="text-sm text-muted-foreground">
              Enter your username to reset your password.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Username" className="pl-10" />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                RESET PASSWORD
              </Button>
              <div className="text-sm text-center">
                <Link to="/login" className="text-blue-600 hover:underline">
                  Back to login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-muted-foreground">
        © 2024 Neolotex. All rights reserved.
      </footer>
    </div>
  );
}
