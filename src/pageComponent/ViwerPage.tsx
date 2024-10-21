import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ViewerPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Document Download</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <Label htmlFor="project-type">Project Type</Label>
                  <Input id="project-type" value="Demo_HR" readOnly />
                </div>
                <Button variant="outline">Search Again</Button>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" value="Demo HR" readOnly />
              </div>
              <div>
                <Label htmlFor="ref-id">Ref ID</Label>
                <Input id="ref-id" value="II_II_16222_261_1031" readOnly />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tag Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select defaultValue="onboardingkit">
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onboardingkit">OnboardingKit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subcategory">Subcategory</Label>
                <Select defaultValue="employeejoiningdocket">
                  <SelectTrigger id="subcategory">
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employeejoiningdocket">
                      EmployeeJoiningDocket
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="update-id">Update ID</Label>
                <Select defaultValue="1689">
                  <SelectTrigger id="update-id">
                    <SelectValue placeholder="Select update ID" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1689">1689</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between">
                <Button>Add File</Button>
                <Button variant="outline">Refresh</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Index Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <Label htmlFor="emp-code">EMP Code</Label>
                <Input id="emp-code" value="563723821" />
              </div>
              <div>
                <Label htmlFor="emp-name">EMP Name</Label>
                <Input id="emp-name" value="Usman" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value="usman@mail.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" value="8923082766" />
              </div>
              <div>
                <Label htmlFor="dob">DOB</Label>
                <Input id="dob" type="date" value="2025-01-08" />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue="male">
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" value="#30 test" />
              </div>
              <Button className="w-full">Save</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between mb-2">
            <Button variant="outline">Complete Download</Button>
            <Button variant="outline">Category wise Download</Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-100 p-2 flex justify-between items-center">
                <span>GenericHa...</span>
                <div className="flex items-center space-x-2">
                  <span>1 / 4</span>
                  <Button variant="ghost" size="icon">
                    -
                  </Button>
                  <span>80%</span>
                  <Button variant="ghost" size="icon">
                    +
                  </Button>
                </div>
              </div>
              <div className="aspect-[4/3] relative">
                <img
                  src="/placeholder.svg?height=450&width=600"
                  alt="PDF preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
