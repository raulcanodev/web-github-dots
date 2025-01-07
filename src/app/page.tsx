import LivePreview from './components/live-preview';
import Hero from './components/hero'
import Features from './components/features';
import QuickStart from './components/quick-start';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute right-0 top-20 -z-10 h-[600px] w-[600px] bg-emerald-500/20 blur-[128px]" />
      <Hero/>
      <div className="max-w-[895px] m-auto">
        <LivePreview />
      </div>
      <QuickStart/>
      <Features/>
    </div>
  );
}

