import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-lime selection:text-ink overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-12 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
