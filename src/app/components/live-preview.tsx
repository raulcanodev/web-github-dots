'use client'
import ContributionGraph from '@raulcanodev/react-github-dots'

export default function LivePreview() {
  const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN || '';

  return (
    <section className="container px-4 py-16">
      <div className="space-y-6">
        {/* <div className="rounded-lg border border-neutral-800 bg-black p-6"> */}
          <div className="overflow-x-auto">
            <ContributionGraph
              username="raulcanodev"
              theme="dark"
              token={token}
            />
          </div>
        {/* </div> */}
        <p className="text-sm text-neutral-400">
          Live preview of the contribution graph component using real GitHub data.
        </p>
      </div>
    </section>
  )
}

