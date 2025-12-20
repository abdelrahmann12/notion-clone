import { Button } from "@/components/ui/button";
import { CircleArrowLeft } from 'lucide-react';


export default function Home() {
  return (
    <main className=" flex items-center space-x-2 animate-pulse ">
      <CircleArrowLeft className="w-10 h-10 "></CircleArrowLeft>
      <h1>Get Started with create a new document</h1>
      
    </main>
  );
}
