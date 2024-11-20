"use client";

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Search, FileText, Users, Database } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function DocSearch() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages: number = 59;

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const delta = 1; // Number of pages to show before and after current page
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages !== 1 && totalPages !== undefined) {
      range.push(totalPages);
    }
    return range;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 p-4 lg:p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold">Document Search</h1>
          <Tabs defaultValue="normal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="normal" className="text-lg py-3">
                <FileText className="mr-2 h-5 w-5" />
                Normal Search
              </TabsTrigger>
              <TabsTrigger value="advanced" className="text-lg py-3">
                <Database className="mr-2 h-5 w-5" />
                Advanced Search
              </TabsTrigger>
            </TabsList>

            <TabsContent value="normal">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Employee Document Search
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Form Section */}
                    <div className="w-full lg:w-1/3 space-y-6">
                      <Card className="shadow-md">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center">
                            <Users className="mr-2 h-5 w-5" />
                            Employee Details
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Form fields */}
                          <div className="space-y-2">
                            <Label htmlFor="project">Project *</Label>
                            <Select>
                              <SelectTrigger id="project">
                                <SelectValue placeholder="Select Project" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="project1">
                                  Project 1
                                </SelectItem>
                                <SelectItem value="project2">
                                  Project 2
                                </SelectItem>
                                <SelectItem value="project3">
                                  Project 3
                                </SelectItem>
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
                                <SelectItem value="hr">
                                  Human Resources
                                </SelectItem>
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
                          <Button className="w-full">
                            <Search className="mr-2 h-4 w-4" />
                            Submit
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Table Section */}
                    <div className="w-full lg:w-2/3">
                      <Card className="shadow-md">
                        <CardHeader>
                          <CardTitle className="text-xl">
                            Search Results
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-x-auto">
                            <Table className="w-full">
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-center">
                                    Serial No
                                  </TableHead>
                                  <TableHead className="text-center">
                                    View
                                  </TableHead>
                                  <TableHead className="text-center">
                                    EMP Code
                                  </TableHead>
                                  <TableHead className="text-center">
                                    EMP Name
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Email Address
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Phone Number
                                  </TableHead>
                                  <TableHead className="text-center">
                                    DOB
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Gender
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Address
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Updated On
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Updated By
                                  </TableHead>
                                  <TableHead className="text-center">
                                    Document Status
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {[...Array(8)].map((_, i) => (
                                  <TableRow key={i}>
                                    <TableCell className="text-center">
                                      {i + 1}
                                    </TableCell>
                                    <TableCell className="text-center">
                                      <Button variant="ghost" size="icon">
                                        <Eye className="h-4 w-4" />
                                      </Button>
                                    </TableCell>
                                    <TableCell className="text-center">{`EMP${
                                      1000 + i
                                    }`}</TableCell>
                                    <TableCell className="text-center">
                                      John Doe
                                    </TableCell>
                                    <TableCell className="text-center">
                                      john.doe@example.com
                                    </TableCell>
                                    <TableCell className="text-center">
                                      +1234567890
                                    </TableCell>
                                    <TableCell className="text-center">
                                      1990-01-01
                                    </TableCell>
                                    <TableCell className="text-center">
                                      Male
                                    </TableCell>
                                    <TableCell className="text-center">
                                      123 Main St, City
                                    </TableCell>
                                    <TableCell className="text-center">
                                      2024-10-09
                                    </TableCell>
                                    <TableCell className="text-center">
                                      Admin
                                    </TableCell>
                                    <TableCell className="text-center">
                                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Processed
                                      </span>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                Rows per page:
                              </span>
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
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1)
                                      );
                                    }}
                                    className={
                                      currentPage === 1
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                    }
                                  />
                                </PaginationItem>
                                {getPageNumbers().map((pageNum, i) => (
                                  <PaginationItem key={i}>
                                    {pageNum === "..." ? (
                                      <PaginationEllipsis />
                                    ) : (
                                      <PaginationLink
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setCurrentPage(Number(pageNum));
                                        }}
                                        isActive={currentPage === pageNum}
                                      >
                                        {pageNum}
                                      </PaginationLink>
                                    )}
                                  </PaginationItem>
                                ))}
                                <PaginationItem>
                                  <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCurrentPage((prev) =>
                                        Math.min(prev + 1, totalPages)
                                      );
                                    }}
                                    className={
                                      currentPage === totalPages
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                    }
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Advanced Document Search
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Advanced search fields */}
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
                      className="text-sm font-medium leading-none"
                    >
                      Enable Full Text (OCR)
                    </label>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Search Criteria</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Button>
                          <span className="mr-2">+</span> Add Clause
                        </Button>
                        <Button variant="secondary">
                          <span className="mr-2">-</span> Remove Clause
                        </Button>
                      </div>
                      <div className="flex flex-col sm:flex-row items-end gap-2">
                        <div className="flex-grow">
                          <Label htmlFor="query-name">Query Name</Label>
                          <Input
                            id="query-name"
                            placeholder="Enter query name"
                          />
                        </div>
                        <Button>Save Query</Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="public-query" />
                        <label
                          htmlFor="public-query"
                          className="text-sm font-medium leading-none"
                        >
                          Public Query
                        </label>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">New / Clear</Button>
                    <Button>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>

                  {/* Advanced search results table */}
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Advanced Search Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Serial No</TableHead>
                              <TableHead>TotalRows</TableHead>
                              <TableHead>View</TableHead>
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
                            {[...Array(5)].map((_, i) => (
                              <TableRow key={i}>
                                <TableCell>11</TableCell>
                                <TableCell>589</TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="icon">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                                <TableCell>0</TableCell>
                                <TableCell>0</TableCell>
                                <TableCell>
                                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    Not Tagged
                                  </span>
                                </TableCell>
                                <TableCell>12266</TableCell>
                                <TableCell>56372382793</TableCell>
                                <TableCell>Employee</TableCell>
                                <TableCell>Test@mailinator.com</TableCell>
                                <TableCell>7899999993</TableCell>
                                <TableCell>13-10-1994</TableCell>
                                <TableCell>Male</TableCell>
                                <TableCell>#30 test</TableCell>
                                <TableCell>True</TableCell>
                                <TableCell>Mar 6 2024 5:29PM</TableCell>
                                <TableCell>uploadeduser</TableCell>
                                <TableCell>
                                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Processed - Yes
                                  </span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      {/* Pagination for advanced search results */}
                      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            Rows per page:
                          </span>
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
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage((prev) =>
                                    Math.max(prev - 1, 1)
                                  );
                                }}
                                className={
                                  currentPage === 1
                                    ? "pointer-events-none opacity-50"
                                    : ""
                                }
                              />
                            </PaginationItem>
                            {getPageNumbers().map((pageNum, i) => (
                              <PaginationItem key={i}>
                                {pageNum === "..." ? (
                                  <PaginationEllipsis />
                                ) : (
                                  <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCurrentPage(Number(pageNum));
                                    }}
                                    isActive={currentPage === pageNum}
                                  >
                                    {pageNum}
                                  </PaginationLink>
                                )}
                              </PaginationItem>
                            ))}
                            <PaginationItem>
                              <PaginationNext
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                  );
                                }}
                                className={
                                  currentPage === totalPages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                                }
                              />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
