export default function QuickStart() {
  return (
    <section id="quick-start" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Quick Start</h2>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Installation</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <code>npm install @raulcanodev/react-github-dots</code>
        </pre>
        <h3 className="text-xl font-semibold mt-6 mb-4">Usage</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <code>{`import React from 'react';
import { GitHubContributionGraph } from '@raulcanodev/react-github-dots';

function App() {
  return (
    <GitHubContributionGraph
      data={[/* Your contribution data */]}
      username="yourusername"
    />
  );
}`}</code>
        </pre>
      </div>
    </section>
  )
}

