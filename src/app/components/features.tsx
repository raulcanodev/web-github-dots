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
    <section className="w-full px-4 mt-8 sm:mt-16 mb-12 sm:mb-24 md:container md:mx-auto">
      <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Component Props</h2>
        <div className="rounded-lg border border-neutral-800 overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-800 hover:bg-transparent">
                  <TableHead className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">Prop</TableHead>
                  <TableHead className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">Type</TableHead>
                  <TableHead className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">Default</TableHead>
                  <TableHead className="text-neutral-400 p-2 sm:p-4">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400 whitespace-nowrap p-2 sm:p-4">
                    username
                  </TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    string
                  </TableCell>
                  <TableCell className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">required</TableCell>
                  <TableCell className="text-neutral-400 p-2 sm:p-4">
                    Your GitHub username
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400 whitespace-nowrap p-2 sm:p-4">
                    token
                  </TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    string
                  </TableCell>
                  <TableCell className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">required</TableCell>
                  <TableCell className="text-neutral-400 p-2 sm:p-4">
                    GitHub personal access token
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400 whitespace-nowrap p-2 sm:p-4">
                    theme
                  </TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    &apos;light&apos; | &apos;dark&apos;
                  </TableCell>
                  <TableCell className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">&apos;dark&apos;</TableCell>
                  <TableCell className="text-neutral-400 p-2 sm:p-4">
                    Color theme of the graph
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400 whitespace-nowrap p-2 sm:p-4">
                    customColorScheme
                  </TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    object
                  </TableCell>
                  <TableCell className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">null</TableCell>
                  <TableCell className="text-neutral-400 p-2 sm:p-4">
                    Custom colors for contribution levels (0-4)
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400 whitespace-nowrap p-2 sm:p-4">
                    cacheTime
                  </TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    false | &apos;2h&apos; | &apos;8h&apos; | &apos;1d&apos;
                  </TableCell>
                  <TableCell className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    &apos;1d&apos;
                  </TableCell>
                  <TableCell className="text-neutral-400 p-2 sm:p-4">
                    Duration to cache the GitHub data
                  </TableCell>
                </TableRow>
                <TableRow className="border-neutral-800">
                  <TableCell className="font-medium text-emerald-400 whitespace-nowrap p-2 sm:p-4">
                    loadingComponent
                  </TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm text-neutral-400 whitespace-nowrap p-2 sm:p-4">
                    ReactNode
                  </TableCell>
                  <TableCell className="text-neutral-400 whitespace-nowrap p-2 sm:p-4">null</TableCell>
                  <TableCell className="text-neutral-400 p-2 sm:p-4">
                    Custom loading state component
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}