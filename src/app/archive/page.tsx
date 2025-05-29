export default function Archive() {
  const archives = [
    {
      year: 2024,
      months: [
        {
          name: 'March',
          posts: [
            { title: 'Building Modern Web Applications with Next.js', date: '15 Mar 2024' },
            { title: 'Understanding TypeScript Generics', date: '10 Mar 2024' },
          ],
        },
        {
          name: 'February',
          posts: [
            { title: 'Advanced React Patterns', date: '28 Feb 2024' },
            { title: 'State Management in 2024', date: '15 Feb 2024' },
          ],
        },
      ],
    },
    {
      year: 2023,
      months: [
        {
          name: 'December',
          posts: [
            { title: 'Year in Review: Web Development', date: '31 Dec 2023' },
            { title: 'The Future of Frontend Development', date: '15 Dec 2023' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-textPrimary dark:text-dark-textPrimary">Archive</h1>
      
      <div className="space-y-12">
        {archives.map((year) => (
          <div key={year.year} className="relative">
            <div className="sticky top-24 bg-background dark:bg-dark-background z-10 py-4">
              <h2 className="text-2xl font-bold text-accent">
                {year.year}
                <span className="text-sm font-normal text-textSecondary dark:text-dark-textSecondary ml-2">
                  ({year.months.reduce((acc, month) => acc + month.posts.length, 0)} posts)
                </span>
              </h2>
            </div>
            
            <div className="space-y-8 mt-4">
              {year.months.map((month) => (
                <div key={month.name} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent"></div>
                  <div className="absolute left-1 top-4 w-[1px] h-[calc(100%+1rem)] bg-border dark:bg-dark-border"></div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-textPrimary dark:text-dark-textPrimary">
                    {month.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {month.posts.map((post) => (
                      <div
                        key={post.title}
                        className="group p-4 rounded-lg bg-cardBackground dark:bg-dark-cardBackground hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <a
                            href="#"
                            className="text-textPrimary dark:text-dark-textPrimary hover:text-accent transition-colors"
                          >
                            {post.title}
                          </a>
                          <span className="text-sm text-textSecondary dark:text-dark-textSecondary">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 