
export const Footer = () => {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-1">
            <span className="font-medium">APN Lookup Tool</span> v1.0
          </p>
          <p>
            Developed by <span className="font-medium">Shema Charmant</span> © 2025 — All rights reserved
          </p>
          <p className="mt-2 text-xs">
            Especially useful for imported smartphones, travelers, and users with network configuration issues.
          </p>
        </div>
      </div>
    </footer>
  );
};
