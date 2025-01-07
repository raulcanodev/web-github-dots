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
        </div>
      </div>
    </section>
  );
}