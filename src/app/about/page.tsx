'use client';

import { useEffect, useState } from 'react';

interface GitHubData {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

interface RepoData {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  license?: {
    name: string;
  };
  html_url: string;
}

export default function About() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    // Fetch GitHub profile data
    fetch('https://api.github.com/users/yourusername')
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(console.error);

    // Fetch repository data
    fetch('https://api.github.com/repos/yourusername/nullin-blog')
      .then(res => res.json())
      .then(data => setRepoData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-textPrimary dark:text-dark-textPrimary">About Me</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Info Section */}
        <div className="bg-cardBackground dark:bg-dark-cardBackground rounded-lg p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Hello, I'm John Doe</h2>
            <p className="mb-4">
              I'm a passionate full-stack developer with over 5 years of experience in building web applications.
              My expertise includes React, TypeScript, Node.js, and various modern web technologies.
            </p>
            <p className="mb-4">
              This blog is my way of sharing knowledge and experiences with the developer community.
              I write about web development, software architecture, and best practices.
            </p>
            <p className="mb-8">
              When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers,
              or exploring new technologies.
            </p>
            
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-white hover:bg-opacity-90 transition-colors"
            >
              View Portfolio
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* GitHub Integration Section */}
        <div className="space-y-6">
          {githubData && (
            <div className="bg-cardBackground dark:bg-dark-cardBackground rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={githubData.avatar_url}
                  alt={githubData.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-textPrimary dark:text-dark-textPrimary">
                    {githubData.name}
                  </h3>
                  <p className="text-textSecondary dark:text-dark-textSecondary">
                    @{githubData.login}
                  </p>
                </div>
              </div>
              
              <p className="mt-4 text-textSecondary dark:text-dark-textSecondary">
                {githubData.bio}
              </p>
              
              <div className="flex items-center space-x-6 mt-4">
                <div>
                  <span className="text-sm text-textSecondary dark:text-dark-textSecondary">Public Repos</span>
                  <p className="text-lg font-semibold text-textPrimary dark:text-dark-textPrimary">
                    {githubData.public_repos}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-textSecondary dark:text-dark-textSecondary">Followers</span>
                  <p className="text-lg font-semibold text-textPrimary dark:text-dark-textPrimary">
                    {githubData.followers}
                  </p>
                </div>
              </div>
            </div>
          )}

          {repoData && (
            <div className="bg-cardBackground dark:bg-dark-cardBackground rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-textPrimary dark:text-dark-textPrimary">
                Project Repository
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-textPrimary dark:text-dark-textPrimary">
                    {repoData.name}
                  </h4>
                  <p className="text-textSecondary dark:text-dark-textSecondary">
                    {repoData.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.327.668A.75.75 0 0 1 12 .25z" />
                    </svg>
                    <span>{repoData.stargazers_count} stars</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.75 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM15 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-13 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 8.75c-1.79 0-3.25-1.46-3.25-3.25S10.21 2.25 12 2.25s3.25 1.46 3.25 3.25S13.79 8.75 12 8.75Zm3.25 10.5c0 1.79-1.46 3.25-3.25 3.25s-3.25-1.46-3.25-3.25S10.21 15.75 12 15.75s3.25 1.46 3.25 3.25Z" />
                    </svg>
                    <span>{repoData.forks_count} forks</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-textSecondary dark:text-dark-textSecondary">
                    License: {repoData.license?.name || 'No License'}
                  </span>
                </div>
                
                <a
                  href={repoData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:underline"
                >
                  View on GitHub
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-textSecondary dark:text-dark-textSecondary">
          Thank you for visiting my blog! Feel free to reach out if you'd like to collaborate or just chat.
        </p>
      </div>
    </div>
  );
} 