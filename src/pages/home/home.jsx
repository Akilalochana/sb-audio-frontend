import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#121212] text-white relative overflow-hidden">
      <RetroGrid className="absolute inset-0 opacity-40" />
      

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h2 className="text-5xl font-bold mb-4">Professional Audio Equipment Rental</h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          High-quality sound systems, microphones, and audio gear for events, studios, and performances.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
            Browse Equipment
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition-colors">
            Get a Quote
          </button>
        </div>
      </main>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12">
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition-all">
          <h3 className="text-xl font-bold mb-2">Sound Systems</h3>
          <p className="text-gray-300 mb-4">Complete sound systems for venues of any size</p>
          <a href="#" className="text-blue-400 hover:underline">Explore →</a>
        </div>
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition-all">
          <h3 className="text-xl font-bold mb-2">Studio Equipment</h3>
          <p className="text-gray-300 mb-4">Professional recording gear for your next project</p>
          <a href="#" className="text-blue-400 hover:underline">Explore →</a>
        </div>
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition-all">
          <h3 className="text-xl font-bold mb-2">DJ Gear</h3>
          <p className="text-gray-300 mb-4">Controllers, mixers, and everything for your set</p>
          <a href="#" className="text-blue-400 hover:underline">Explore →</a>
        </div>
      </section>
    </div>
  );
}