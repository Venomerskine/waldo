import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function MainLayout() {
  return (
    <div className="app-container flex min-h-screen flex-col">
      <Header />
      <main className='flex-1'>
        <Outlet /> {}
      </main>
      <Footer />
    </div>
  );
}