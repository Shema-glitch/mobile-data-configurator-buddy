
export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            <span className="font-bold text-gray-800">APN Lookup Tool</span> 
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full ml-2 text-xs">v1.0</span>
          </p>
          <p className="mb-3">
            Developed by <span className="font-semibold text-gray-800">Shema Charmant</span> © 2025 — All rights reserved
          </p>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Especially useful for imported smartphones, travelers, and users with network configuration issues.
            Perfect for Japanese phones in Rwanda, European phones in Asia, and more!
          </p>
        </div>
      </div>
    </footer>
  );
};
