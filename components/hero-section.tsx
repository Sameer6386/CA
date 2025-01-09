"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    city: "",
    whatsappUpdates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (key: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { email, mobileNumber, city, whatsappUpdates } = formData;

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mobileNumber, city, whatsappUpdates }),
      });

      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "We'll get back to you soon.",
        });
        setFormData({
          email: "",
          mobileNumber: "",
          city: "",
          whatsappUpdates: false,
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-[600px] bg-[#001529] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Online CA Consultation
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Our CAs excel in providing comprehensive services for both
              businesses and individuals, including Compliance Services,
              Accounting and Financial Reporting, Taxation, Advisory, and much
              more.
            </p>
          </div>

          {/* Right Form */}
          <div className="relative w-full max-w-md mx-auto md:max-w-none md:mx-0">
            <form
              onSubmit={handleSubmit}
              className="bg-[#002547] p-8 rounded-3xl border border-blue-900/50 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Get Started
              </h2>

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  aria-label="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="border-blue-900/50 text-white"
                />

                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
                  required
                  className="border-blue-900/50 text-white"
                />

                <Select
                  value={formData.city}
                  onValueChange={(value) => handleChange("city", value)}
                  required
                >
                  <SelectTrigger
                    className="border-blue-900/50 text-black"
                    aria-label="Select City"
                  >
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {CITIES.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="whatsapp"
                    checked={formData.whatsappUpdates}
                    onCheckedChange={(checked) =>
                      handleChange("whatsappUpdates", checked)
                    }
                  />
                  <Label htmlFor="whatsapp" className="text-gray-300">
                    Get updates via WhatsApp
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Started →"}
                </Button>
              </div>
            </form>

            {/* Decorative Corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-yellow-400/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
