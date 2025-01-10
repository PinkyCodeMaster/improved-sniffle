import { Button } from "@/components/ui/button";

export default function header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Improved Sniffle</h1>
                <Button className="bg-white text-blue-600">Get Started</Button>
            </div>
        </header>
    );
}
