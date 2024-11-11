"use client";

import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  Search,
  ZoomIn,
  ZoomOut,
  Upload,
  Tag,
  FileText,
} from "lucide-react";

export default function ViewPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const [zoom, setZoom] = useState(80);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-primary">Document Download</h1>

      {/* Mobile Layout */}
      <div className="lg:hidden flex h-[calc(100vh-100px)]">
        {/* Left Sidebar with Vertical Tabs */}
        <div className="w-16 border-r bg-background flex flex-col gap-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="h-32 w-full rounded-none hover:bg-muted relative group"
              >
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span className="vertical-text origin-center -rotate-180 text-sm">
                    Upload File
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Files</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <p className="text-muted-foreground">
                    Drag and drop files here or click to browse
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="h-32 w-full rounded-none hover:bg-muted relative group"
              >
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="vertical-text origin-center -rotate-180 text-sm">
                    Tag Details
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tag Details</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="category-mobile"
                    className="text-sm font-medium text-primary"
                  >
                    Category
                  </Label>
                  <Select defaultValue="onboardingkit">
                    <SelectTrigger id="category-mobile">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="onboardingkit">
                        OnboardingKit
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="subcategory-mobile"
                    className="text-sm font-medium text-primary"
                  >
                    Subcategory
                  </Label>
                  <Select defaultValue="employeejoiningdocket">
                    <SelectTrigger id="subcategory-mobile">
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employeejoiningdocket">
                        EmployeeJoiningDocket
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="h-32 w-full rounded-none hover:bg-muted relative group"
              >
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="vertical-text origin-center -rotate-180 text-sm">
                    Document Details
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Document Details</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="project-type-mobile"
                    className="text-sm font-medium text-primary"
                  >
                    Project Type
                  </Label>
                  <Input
                    id="project-type-mobile"
                    value="Demo_HR"
                    readOnly
                    className="bg-secondary/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="department-mobile"
                    className="text-sm font-medium text-primary"
                  >
                    Department
                  </Label>
                  <Input
                    id="department-mobile"
                    value="Demo HR"
                    readOnly
                    className="bg-secondary/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="ref-id-mobile"
                    className="text-sm font-medium text-primary"
                  >
                    Ref ID
                  </Label>
                  <Input
                    id="ref-id-mobile"
                    value="II_II_16222_261_1031"
                    readOnly
                    className="bg-secondary/10"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Main Content Area for Mobile */}
        <div className="flex-1 flex flex-col">
          {/* PDF Preview */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-muted/10 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="PDF preview"
                className="w-32 h-32 opacity-50"
              />
            </div>
          </div>

          {/* Page Navigation for Mobile */}
          <div className="flex items-center justify-between p-2 border-t bg-background">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="w-4 h-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-6">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-blue-700 text-white">
              <CardTitle>Document Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1 space-y-2">
                  <Label
                    htmlFor="project-type"
                    className="text-sm font-medium text-primary"
                  >
                    Project Type
                  </Label>
                  <Input
                    id="project-type"
                    value="Demo_HR"
                    readOnly
                    className="bg-secondary/10"
                  />
                </div>
                <Button variant="outline" className="flex-shrink-0">
                  <Search className="mr-2 h-4 w-4" />
                  Search Again
                </Button>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="department"
                  className="text-sm font-medium text-primary"
                >
                  Department
                </Label>
                <Input
                  id="department"
                  value="Demo HR"
                  readOnly
                  className="bg-secondary/10"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="ref-id"
                  className="text-sm font-medium text-primary"
                >
                  Ref ID
                </Label>
                <Input
                  id="ref-id"
                  value="II_II_16222_261_1031"
                  readOnly
                  className="bg-secondary/10"
                />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="tag-details" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tag-details">Tag Details</TabsTrigger>
              <TabsTrigger value="index-properties">
                Index Properties
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tag-details">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-blue-700 text-white">
                  <CardTitle>Tag Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="category"
                      className="text-sm font-medium text-primary"
                    >
                      Category
                    </Label>
                    <Select defaultValue="onboardingkit">
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="onboardingkit">
                          OnboardingKit
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subcategory"
                      className="text-sm font-medium text-primary"
                    >
                      Subcategory
                    </Label>
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
                  <div className="space-y-2">
                    <Label
                      htmlFor="update-id"
                      className="text-sm font-medium text-primary"
                    >
                      Update ID
                    </Label>
                    <Select defaultValue="1689">
                      <SelectTrigger id="update-id">
                        <SelectValue placeholder="Select update ID" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1689">1689</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-between pt-4">
                    <Button>Add File</Button>
                    <Button variant="outline">Refresh</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="index-properties">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle>Index Properties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="emp-code"
                      className="text-sm font-medium text-primary"
                    >
                      EMP Code
                    </Label>
                    <Input id="emp-code" value="563723821" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="emp-name"
                      className="text-sm font-medium text-primary"
                    >
                      EMP Name
                    </Label>
                    <Input id="emp-name" value="Usman" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-primary"
                    >
                      Email Address
                    </Label>
                    <Input id="email" type="email" value="usman@mail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-primary"
                    >
                      Phone number
                    </Label>
                    <Input id="phone" type="tel" value="8923082766" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="dob"
                      className="text-sm font-medium text-primary"
                    >
                      DOB
                    </Label>
                    <Input id="dob" type="date" value="2025-01-08" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="gender"
                      className="text-sm font-medium text-primary"
                    >
                      Gender
                    </Label>
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
                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="text-sm font-medium text-primary"
                    >
                      Address
                    </Label>
                    <Input id="address" value="#30 test" />
                  </div>
                  <Button className="w-full mt-4">Save</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between">
            <Button variant="outline" className="w-[48%]">
              <Download className="mr-2 h-4 w-4" />
              Complete Download
            </Button>
            <Button variant="outline" className="w-[48%]">
              <Download className="mr-2 h-4 w-4" />
              Category wise Download
            </Button>
          </div>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
                <span>GenericHa...</span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-blue-100">
                    Page {currentPage} of {totalPages}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setZoom(Math.max(20, zoom - 10))}
                    >
                      <ZoomOut className="h-4 w-4" />
                      <span className="sr-only">Zoom out</span>
                    </Button>
                    <span className="text-sm text-blue-100">{zoom}%</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setZoom(Math.min(200, zoom + 10))}
                    >
                      <ZoomIn className="h-4 w-4" />
                      <span className="sr-only">Zoom in</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Printer className="h-4 w-4" />
                    <span className="sr-only">Print</span>
                  </Button>
                </div>
              </div>
              <div className="aspect-[4/3] relative">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="PDF preview"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transform: `scale(${zoom / 100})` }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
