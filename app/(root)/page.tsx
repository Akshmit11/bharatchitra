import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import Gallery from '@/components/shared/Gallery'
import Hero from '@/components/shared/Hero'

export default async function HomePage() {
  const user = await currentUser()

  if (user) {
    redirect('/home');
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground geist-sans">
      <main className="flex-1">
        <Hero />
        <Gallery />
      </main>
    </div>
  )
}