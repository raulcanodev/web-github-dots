import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


export default function Features() {
  return (
    <section className="container px-4 mt-16 mb-24 m-auto">
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
  )
}

