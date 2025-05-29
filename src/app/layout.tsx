import { ThemeProvider } from '@/contexts/ThemeContext';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nullin Blog',
  description: 'A modern blog platform for sharing knowledge and experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-background dark:bg-dark-background transition-colors duration-500">
            {/* Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col fixed h-screen bg-sidebar dark:bg-dark-sidebar border-r border-border dark:border-dark-border">
              {/* Profile Section */}
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="/avatar-placeholder.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">John Doe</h2>
                <p className="text-textSecondary dark:text-dark-textSecondary mb-4">
                  Full-stack Developer & Tech Enthusiast
                </p>
                <div className="flex justify-center space-x-4">
                  {/* Social Links */}
                  <a href="#" className="text-iconColor hover:text-accent transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="text-iconColor hover:text-accent transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-iconColor hover:text-accent transition-colors">
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
              </div>

              {/* Categories Section */}
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <ul className="space-y-2">
                  {/* Add categories dynamically */}
                </ul>
              </div>

              {/* Tags Section */}
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {/* Add tags dynamically */}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto p-6 text-sm text-textSecondary dark:text-dark-textSecondary border-t border-border dark:border-dark-border">
                <p className="mb-2">© 2024 Nullin Blog</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
                  <a href="#" className="hover:text-accent transition-colors">Powered by Next.js</a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64">
              {/* Header */}
              <header className="fixed w-full lg:w-[calc(100%-16rem)] z-10 bg-headerBackground dark:bg-dark-headerBackground border-b border-border dark:border-dark-border">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold">Nullin</h1>
                  </div>
                  
                  <nav className="hidden md:flex items-center space-x-6">
                    <a href="/" className="hover:text-accent transition-colors">Home</a>
                    <a href="/archive" className="hover:text-accent transition-colors">Archive</a>
                    <a href="/about" className="hover:text-accent transition-colors">About</a>
                    <a href="https://github.com" className="hover:text-accent transition-colors flex items-center">
                      GitHub
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </nav>

                  <div className="flex items-center space-x-4">
                    <button
                      className="p-2 rounded-full hover:bg-buttonHover dark:hover:bg-dark-buttonHover transition-colors"
                      aria-label="Toggle theme"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </button>
                    
                    <div className="relative">
                      <input
                        type="search"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-full bg-cardBackground dark:bg-dark-cardBackground border border-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>
              </header>

              {/* Page Content */}
              <main className="pt-20 px-4 min-h-screen">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 