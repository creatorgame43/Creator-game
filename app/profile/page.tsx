"use client";
import Navigation from "../components/Navigation";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="text-5xl mb-4">👤</div>
          <h1 className="text-3xl font-bold mb-2">Profaili Yangu</h1>
          <p className="text-gray-600 mb-6">📚 Mhariri | 💻 Developer | 🚀 Entrepreneur</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">23</p>
              <p className="text-gray-500">Funzo</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">842</p>
              <p className="text-gray-500">Wanafuata</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">456</p>
              <p className="text-gray-500">Akifanya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
