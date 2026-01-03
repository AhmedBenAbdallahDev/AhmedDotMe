import { TextScramble } from '@/components/text-scrammble';

export default function Home() {
  return (
    <main style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#0a0a0a'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '90vw', overflow: 'hidden' }}>
        <TextScramble
          phrases={[
            'The best is yet to be.',
            "Tomorrow keeps its promise.",
            'The future gathers light.'
          ]}
          pauseMs={1500}
          textClass="text-4xl md:text-7xl font-bold tracking-tighter text-white font-mono"
          dudClass="text-blue-500/40"
          autoStart
          loop
        />
      </div>
    </main>
  );
}
