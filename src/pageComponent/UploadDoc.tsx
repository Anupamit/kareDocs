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
import { Textarea } from "@/components/ui/textarea";

export default function UploadDoc() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-2 space-y-2">
      <h1 className="text-2xl font-bold text-primary">Document Upload</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-700 text-white">
            <CardTitle>Upload Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            <form className="space-y-4">
              <div>
                <Label htmlFor="project">Project</Label>
                <Select>
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Demo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="file">File to Upload</Label>
                <Input id="file" type="file" onChange={handleFileChange} />
              </div>
              <div>
                <Label htmlFor="refId">Ref ID</Label>
                <Input id="refId" placeholder="Enter reference ID" />
              </div>
              <Button type="submit">Preview</Button>
              <div>
                <Label htmlFor="keywords">Keywords</Label>
                <Textarea id="keywords" placeholder="Enter keywords" />
              </div>
              <div>
                <Label
                  htmlFor="refId"
                  className="text-sm font-medium text-gray-700"
                >
                  Ref ID *
                </Label>
                <Input
                  id="refId"
                  placeholder="DE_DE_16230_261_1002"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="keywords"
                  className="text-sm font-medium text-gray-700"
                >
                  Keywords *
                </Label>
                <Textarea
                  id="keywords"
                  placeholder="Enter keywords"
                  className="mt-1"
                />
              </div>
              <div>
                <Button
                  type="button"
                  className="w-full bg-blue-500 text-white"
                  disabled
                >
                  Keywords Not Available for This Document
                </Button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Index Properties *</h3>
                <div className="space-y-3">
                  <div>
                    <Label
                      htmlFor="empCode"
                      className="text-sm font-medium text-gray-700"
                    >
                      EMP Code
                    </Label>
                    <Input id="empCode" defaultValue="8999" className="mt-1" />
                  </div>
                  <div>
                    <Label
                      htmlFor="empName"
                      className="text-sm font-medium text-gray-700"
                    >
                      EMP Name
                    </Label>
                    <Input
                      id="empName"
                      defaultValue="Killer"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="kill@anu.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="8399399399"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="dob"
                      className="text-sm font-medium text-gray-700"
                    >
                      DOB
                    </Label>
                    <Input
                      id="dob"
                      type="date"
                      defaultValue="2000-10-02"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="gender"
                      className="text-sm font-medium text-gray-700"
                    >
                      Gender
                    </Label>
                    <Select defaultValue="male">
                      <SelectTrigger id="gender" className="mt-1">
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
                    <Label
                      htmlFor="address"
                      className="text-sm font-medium text-gray-700"
                    >
                      Address
                    </Label>
                    <Input id="address" defaultValue="jilla" className="mt-1" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="submit" className="bg-blue-500 text-white">
                  Save
                </Button>
                <Button type="button" variant="destructive">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-700 text-white">
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full h-auto"
              />
            ) : (
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500">
                No file selected for preview
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
