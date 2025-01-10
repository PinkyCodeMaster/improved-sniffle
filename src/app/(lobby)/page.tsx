import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function home_page() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section with background image */}
      <section className="relative text-center py-32 bg-gray-50 flex-grow bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
        
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white">
            Welcome to Improved Sniffle
          </h2>
          <p className="mt-4 text-lg text-white">
            A modern platform built with Next.js 15, Tailwind CSS, ShadCN UI, and more.
          </p>
          <Button className="mt-8 bg-blue-600 text-white">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <Card className="p-6 bg-blue-50">
            <h3 className="text-xl font-semibold">Next.js 15</h3>
            <p className="mt-2 text-gray-600">
              The latest and greatest version of Next.js for a modern web experience.
            </p>
          </Card>

          <Card className="p-6 bg-blue-50">
            <h3 className="text-xl font-semibold">ShadCN UI</h3>
            <p className="mt-2 text-gray-600">
              A beautiful component library built with Tailwind CSS and Radix UI.
            </p>
          </Card>

          <Card className="p-6 bg-blue-50">
            <h3 className="text-xl font-semibold">Stripe & Payments</h3>
            <p className="mt-2 text-gray-600">
              Easily integrate Stripe for payment processing in your app.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
