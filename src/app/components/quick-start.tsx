'use client';

import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      className="absolute right-2 top-2 sm:right-4 sm:top-4 hover:bg-neutral-800"
      onClick={copy}>
      {copied ? (
        <Check className="h-4 w-4 text-emerald-400" />
      ) : (
        <Copy className="h-4 w-4 text-neutral-400" />
      )}
      <span className="sr-only">Copy code</span>
    </Button>
  );
}

export default function QuickStart() {
  return (
    <section className="w-full px-4 md:container md:mx-auto">
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Quick Start</h2>
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-200">
              Installation
            </h3>
            <div className="relative">
              <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-black p-3 sm:p-4">
                <code className="text-xs sm:text-sm text-neutral-400 whitespace-pre-wrap break-words">
                  npm install @raulcanodev/react-github-dots
                </code>
              </pre>
              <CopyButton text="npm install @raulcanodev/react-github-dots" />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-200">Usage</h3>
            <div className="relative">
              <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-black p-3 sm:p-4">
                <code className="block text-xs sm:text-sm text-neutral-400 whitespace-pre-wrap break-words">
                  {`import ContributionGraph from '@raulcanodev/react-github-dots'

export default function Example() {
  return (
    <ContributionGraph 
      username="githubusername"
      token=process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN
    />
  )
}`}
                </code>
              </pre>
              <CopyButton
                text={`import ContributionGraph from '@raulcanodev/react-github-dots'

export default function Example() {
  return (
    <ContributionGraph 
      username="githubusername"
      token=process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN
    />
  )
}`}
              />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-200">
              Getting a GitHub Personal Access Token
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-neutral-400">
              <li>Go to GitHub Settings → Developer Settings → Personal Access Tokens → Fine-grained personal access tokens</li>
              <li>Click &quot;Generate new token&quot;</li>
              <li>Give your token a name and select the following scopes:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>read:user</li>
                  <li>repo</li>
                </ul>
              </li>
              <li>Click &quot;Generate token&quot; and copy your new token</li>
              <li>Create a <code className="px-1 py-0.5 text-xs bg-neutral-800 rounded">.env.local or .env</code> file in your project root and add:
                <pre className="mt-2 overflow-x-auto rounded-lg border border-neutral-800 bg-black p-3">
                  <code className="text-xs sm:text-sm text-neutral-400">
                    NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN=your_token_here
                  </code>
                </pre>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}