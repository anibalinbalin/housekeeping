import { CalEmbed } from "@/components/cal-embed";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SectionBook() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Book a meeting</span>
        <Button variant="outline">Sign up</Button>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="h-[400px] md:h-[600px] px-4 md:px-0 text-center flex flex-col items-center justify-center">
          <div className="text-2xl text-[#878787]">Calendar booking removed</div>
        </div>
      </div>
    </div>
  );
}
