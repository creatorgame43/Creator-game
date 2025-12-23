export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">🌍 Swahili Loop</h1>
        <p className="text-xl mb-4">Mtandao wa Kijamii wa Kujifunza kwa Kiswahili</p>
        <p className="text-lg mb-8">A social learning platform for Swahili speakers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">📚 Elimu Kwanza</h2>
            <p className="mb-2">Education focused content</p>
            <p className="text-sm opacity-75">Hakuna porojo, siasa, wala matusi</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🛠️ Mafunzo ya Vitendo</h2>
            <p className="mb-2">Practical learning</p>
            <p className="text-sm opacity-75">Learn → Do → Share</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">📱 Rahisi na Inayofanya Kazi</h2>
            <p className="mb-2">Simple and functional</p>
            <p className="text-sm opacity-75">Works on any device</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🌐 Kiswahili Rahisi</h2>
            <p className="mb-2">Swahili for everyone</p>
            <p className="text-sm opacity-75">Clear and accessible language</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">✨ Teknolojia</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Frontend: Next.js + Tailwind CSS</li>
            <li>Backend: Supabase (Auth, Database, Storage)</li>
            <li>Performance Monitoring: Vercel Speed Insights</li>
            <li>Deployment: Vercel</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
