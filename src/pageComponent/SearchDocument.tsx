import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

export default function Component() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 59;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Document Search</h1>
      <Tabs defaultValue="normal" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="normal">Normal Search</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Search</TabsTrigger>
        </TabsList>
        <TabsContent value="normal">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Form Section */}
                <div className="w-full lg:w-1/3 space-y-4">
                  <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">
                      Employee Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="project">Project *</Label>
                        <Select>
                          <SelectTrigger id="project">
                            <SelectValue placeholder="Select Project" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project1">Project 1</SelectItem>
                            <SelectItem value="project2">Project 2</SelectItem>
                            <SelectItem value="project3">Project 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="department">Department *</Label>
                        <Select>
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Select Department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hr">Human Resources</SelectItem>
                            <SelectItem value="it">
                              Information Technology
                            </SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="empCode">EMP Code</Label>
                        <Input id="empCode" placeholder="Enter EMP Code" />
                      </div>
                      <div>
                        <Label htmlFor="empName">EMP Name</Label>
                        <Input id="empName" placeholder="Enter EMP Name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob">DOB</Label>
                        <Input id="dob" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender</Label>
                        <Select>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select Gender" />
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
                        <Input id="address" placeholder="Enter Address" />
                      </div>
                      <Button className="w-full">Submit</Button>
                    </div>
                  </div>
                </div>

                {/* Table Section */}
                <div className="w-full lg:w-2/3">
                  <div className="border rounded-lg shadow-sm overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">Serial No</TableHead>
                          <TableHead className="w-[50px]">View</TableHead>
                          <TableHead>EMP Code</TableHead>
                          <TableHead>EMP Name</TableHead>
                          <TableHead>Email Address</TableHead>
                          <TableHead>Phone number</TableHead>
                          <TableHead>DOB</TableHead>
                          <TableHead>Gender</TableHead>
                          <TableHead>Address</TableHead>
                          <TableHead>Updated On</TableHead>
                          <TableHead>Updated By</TableHead>
                          <TableHead>Document Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[...Array(10)].map((_, i) => (
                          <TableRow key={i}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </TableCell>
                            <TableCell>{`EMP${1000 + i}`}</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>+1234567890</TableCell>
                            <TableCell>1990-01-01</TableCell>
                            <TableCell>Male</TableCell>
                            <TableCell>123 Main St, City</TableCell>
                            <TableCell>2024-10-09</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell>Processed</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      Rows per page:
                      <Select defaultValue="10">
                        <SelectTrigger className="w-[70px]">
                          <SelectValue placeholder="10" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="20">20</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                      >
                        Previous
                      </Button>
                      <span>
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="project">Project *</Label>
                    <Select>
                      <SelectTrigger id="project">
                        <SelectValue placeholder="Demo_HR" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo_hr">Demo_HR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Demo HR" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo_hr">Demo HR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="flex-grow">
                      <Label htmlFor="query">Query</Label>
                      <Select>
                        <SelectTrigger id="query">
                          <SelectValue placeholder="--Select--" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="select">--Select--</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="destructive">Delete Query</Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="enable-ocr" />
                  <label
                    htmlFor="enable-ocr"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enable Full Text (OCR)
                  </label>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Search Criteria
                  </h3>
                  <div className="flex gap-2">
                    <Button>+ Add Clause</Button>
                    <Button variant="secondary">- Remove Clause</Button>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="flex-grow">
                    <Label htmlFor="query-name">Query Name</Label>
                    <Input id="query-name" placeholder="Enter query name" />
                  </div>
                  <Button>Save Query</Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="public-query" />
                  <label
                    htmlFor="public-query"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Public Query
                  </label>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">New / Clear</Button>
                  <Button>Search</Button>
                </div>

                <div className="border rounded-lg shadow-sm overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">Serial No</TableHead>
                        <TableHead>TotalRows</TableHead>
                        <TableHead className="w-[50px]">View</TableHead>
                        <TableHead>MainTagId</TableHead>
                        <TableHead>SubTagId</TableHead>
                        <TableHead>Tag Status</TableHead>
                        <TableHead>ProcessID</TableHead>
                        <TableHead>EMP Code</TableHead>
                        <TableHead>EMP Name</TableHead>
                        <TableHead>Email Address</TableHead>
                        <TableHead>Phone number</TableHead>
                        <TableHead>DOB</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Deleted</TableHead>
                        <TableHead>Uploaded On</TableHead>
                        <TableHead>Uploaded By</TableHead>
                        <TableHead>Document Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[...Array(10)].map((_, i) => (
                        <TableRow key={i}>
                          {" "}
                          <TableCell>11</TableCell>
                          <TableCell>589</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>Not Tagged</TableCell>
                          <TableCell>12266</TableCell>
                          <TableCell>56372382793</TableCell>
                          <TableCell>Employee</TableCell>
                          <TableCell>Test@mailinator.com </TableCell>
                          <TableCell>7899999993</TableCell>
                          <TableCell>13-10-1994</TableCell>
                          <TableCell>Male</TableCell>
                          <TableCell>#30 test</TableCell>
                          <TableCell>True</TableCell>
                          <TableCell>Mar 6 2024 5:29PM</TableCell>
                          <TableCell>uploadeduser</TableCell>
                          <TableCell>Processed - Yes</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    Rows per page:
                    <Select defaultValue="10">
                      <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder="10" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span>
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
}
