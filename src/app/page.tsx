'use client';
import { ArrowRight, Zap, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import LivePreview from './components/live-preview';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute right-0 top-20 -z-10 h-[600px] w-[600px] bg-emerald-500/20 blur-[128px]" />

      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center px-4 pt-32">
        <Link
          href="/blog/announcing-v1"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300">
          <Zap className="h-4 w-4" />
          🎉 Just launched: react-github-dots v1.0 is here
          <ArrowRight className="h-4 w-4" />
        </Link>

        <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          GitHub contribution graphs{' '}
          <span className="relative inline-flex items-center rounded bg-emerald-500/10 px-6 py-2 text-emerald-400">
            for React
            <div className="absolute -inset-px -z-10 rounded border border-emerald-500/20" />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl text-neutral-400">
          Showcase your coding journey with stunning contribution graphs. The
          way to visualize your GitHub activity and make your portfolio stand
          out.
        </p>

        <div className="flex justify-center w-full">
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/docs/getting-started"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400">
              Start Building
            </Link>
            <div className="rounded-lg border border-neutral-800 bg-black px-4 py-2 font-mono text-sm text-neutral-400">
              npm i @raulcanodev/react-github-dots
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[895px] m-auto">
        <LivePreview />
      </div>

      {/* Quick Start Section */}
      <section className="container px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Quick Start</h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-200">
                Installation
              </h3>
              <div className="relative">
                <pre className="rounded-lg border border-neutral-800 bg-black p-4">
                  <code className="text-sm text-neutral-400">
                    npm install @raulcanodev/react-github-dots
                  </code>
                </pre>
                <CopyButton text="npm install @raulcanodev/react-github-dots" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-200">Usage</h3>
              <div className="relative">
                <pre className="rounded-lg border border-neutral-800 bg-black p-4">
                  <code className="block text-sm text-neutral-400">
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

      {/* TABLE */}
      <section className="container px-4 mt-16 mb-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Component Props</h2>
          <div className="rounded-lg border border-neutral-800">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-800 hover:bg-transparent">
                  <TableHead className="text-neutral-400">Prop</TableHead>
                  <TableHead className="text-neutral-400">Type</TableHead>
                  <TableHead className="text-neutral-400">Default</TableHead>
                  <TableHead className="text-neutral-400">
                    Description
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400">
                    username
                  </TableCell>
                  <TableCell className="font-mono text-sm text-neutral-400">
                    string
                  </TableCell>
                  <TableCell className="text-neutral-400">required</TableCell>
                  <TableCell className="text-neutral-400">
                    Your GitHub username
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400">
                    token
                  </TableCell>
                  <TableCell className="font-mono text-sm text-neutral-400">
                    string
                  </TableCell>
                  <TableCell className="text-neutral-400">required</TableCell>
                  <TableCell className="text-neutral-400">
                    GitHub personal access token
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400">
                    theme
                  </TableCell>
                  <TableCell className="font-mono text-sm text-neutral-400">
                  &apos;light&apos; | &apos;dark&apos;
                  </TableCell>
                  <TableCell className="text-neutral-400">&apos;dark&apos;</TableCell>
                  <TableCell className="text-neutral-400">
                    Color theme of the graph
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400">
                    customColorScheme
                  </TableCell>
                  <TableCell className="font-mono text-sm text-neutral-400">
                    object
                  </TableCell>
                  <TableCell className="text-neutral-400">null</TableCell>
                  <TableCell className="text-neutral-400">
                    Custom colors for contribution levels (0-4)
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400">
                    cacheTime
                  </TableCell>
                  <TableCell className="font-mono text-sm text-neutral-400">
                    false | &apos;2h&apos; | &apos;8h&apos; | &apos;1d&apos;
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    &apos;1d&apos;
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    Duration to cache the GitHub data
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400">
                    loadingComponent
                  </TableCell>
                  <TableCell className="font-mono text-sm text-neutral-400">
                    ReactNode
                  </TableCell>
                  <TableCell className="text-neutral-400">null</TableCell>
                  <TableCell className="text-neutral-400">
                    Custom loading state component
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}

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
      className="absolute right-4 top-4 hover:bg-neutral-800"
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
