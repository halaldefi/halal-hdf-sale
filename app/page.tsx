import { AccordionSection } from "@/components/AccordionSection";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8  font-[family-name:var(--font-urbanist)]">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to My Page</h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 bg-gray-400">
          {/* <AccordionSection /> */}
          test
        </div>
        <div className="md:w-1/3">
          <AccordionSection />
          tset
        </div>
      </div>
    </main>
  );
}
