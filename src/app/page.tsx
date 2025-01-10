import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50 dark:bg-gray-800 flex-grow">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          Welcome to Improved Sniffle
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A modern platform built with Next.js 15, Tailwind CSS, ShadCN UI, and more.
        </p>
        <Button className="mt-8 bg-blue-600 text-white dark:bg-blue-700 dark:text-gray-200">
          Learn More
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <Card className="p-6 bg-blue-50 dark:bg-blue-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Next.js 15
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              The latest and greatest version of Next.js for a modern web experience.
            </p>
          </Card>

          <Card className="p-6 bg-blue-50 dark:bg-blue-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              ShadCN UI
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              A beautiful component library built with Tailwind CSS and Radix UI.
            </p>
          </Card>

          <Card className="p-6 bg-blue-50 dark:bg-blue-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Stripe & Payments
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Easily integrate Stripe for payment processing in your app.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
