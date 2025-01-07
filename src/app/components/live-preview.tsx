'use client'
import ContributionGraph from '@raulcanodev/react-github-dots'

export default function LivePreview() {
  const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN || '';

  return (
    <section className="container px-4 py-16 m-auto flex justify-center">
      <div className="space-y-6">
          <ContributionGraph
            username="raulcanodev"
            theme="dark"
            token={token}
          />
        <p className="text-sm text-neutral-400">
          Live preview of the contribution graph component using real GitHub data.
        </p>
      </div>
    </section>
  )
}