export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Blog Post Card */}
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <article key={post} className="bg-cardBackground dark:bg-dark-cardBackground rounded-lg shadow-lg overflow-hidden transition-all hover:transform hover:scale-[1.02]">
            <div className="relative">
              <img
                src={`https://picsum.photos/600/400?random=${post}`}
                alt="Post cover"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="transform translate-y-4 hover:translate-y-0 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-textSecondary dark:text-dark-textSecondary mb-2">
                <span className="mr-3">
                  <i className="far fa-calendar mr-1"></i>
                  Mar 15, 2024
                </span>
                <span>
                  <i className="far fa-clock mr-1"></i>
                  5 min read
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-textPrimary dark:text-dark-textPrimary">
                Building Modern Web Applications with Next.js and TypeScript
              </h2>
              
              <p className="text-textSecondary dark:text-dark-textSecondary mb-4">
                Learn how to create scalable and maintainable web applications using Next.js and TypeScript. We'll cover best practices, performance optimization, and more...
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-accent bg-opacity-10 text-accent">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-accent bg-opacity-10 text-accent">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-accent bg-opacity-10 text-accent">
                  Web Development
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-textSecondary dark:text-dark-textSecondary">
                <span>
                  <i className="far fa-file-alt mr-1"></i>
                  2,500 words
                </span>
                <a href="#" className="text-accent hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        <button className="px-4 py-2 rounded-lg bg-cardBackground dark:bg-dark-cardBackground text-textSecondary dark:text-dark-textSecondary hover:text-accent transition-colors">
          <i className="fas fa-chevron-left mr-2"></i>
          Previous
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-lg ${
              page === 1
                ? 'bg-accent text-white'
                : 'bg-cardBackground dark:bg-dark-cardBackground text-textSecondary dark:text-dark-textSecondary hover:text-accent'
            } transition-colors`}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 rounded-lg bg-cardBackground dark:bg-dark-cardBackground text-textSecondary dark:text-dark-textSecondary hover:text-accent transition-colors">
          Next
          <i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  );
} 