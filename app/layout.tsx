import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Modal, ModalProvider } from '@/components/ui/modal';
import { SoundProvider } from '@/components/sound-context';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Bizz-E-Bee | Swartruggens Business Hive',
  description: 'Discover local businesses, deals, and what\'s buzzing in Swartruggens.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-cream-50`}>
        <SoundProvider>
          <ModalProvider>
            <NavBar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            
            <Modal title="List Your Business">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Enter your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="+27 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your business
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent h-24 resize-none"
                    placeholder="Brief description of your business..."
                  />
                </div>
                <button
                  disabled
                >
                  Request a Call (Coming Soon)
                </button>
              </div>
            </Modal>
          </ModalProvider>
        </SoundProvider>
      </body>
    </html>
  );
}