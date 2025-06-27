import { Header } from "@/components/header"
import { StatsDashboard } from "@/components/stats-dashboard"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-24 py-8 md:px-36 lg:px-48 pt-28">
        <StatsDashboard />
      </main>
      <FloatingActionButton />
    </div>
  )
}
