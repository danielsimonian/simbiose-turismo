"use client"

import { useState } from 'react';
import { pacotes } from '@/lib/data';
import { Pacote } from '@/lib/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import PackageDetail from '@/components/PackageDetail';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState<Pacote | null>(null);

  const handleSelectPackage = (packageId: string) => {
    const pkg = pacotes.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
      setCurrentPage('package-detail');
      window.scrollTo(0, 0);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedPackage(null);
    window.scrollTo(0, 0);
  };

  // Página de detalhes do pacote
  if (currentPage === 'package-detail' && selectedPackage) {
    return <PackageDetail package={selectedPackage} onBack={handleBackToHome} />;
  }

  // Página Home
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Packages onSelectPackage={handleSelectPackage} />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}