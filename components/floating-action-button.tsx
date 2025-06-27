import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="rounded-full bg-orange-500 px-6 py-3 text-white shadow-lg hover:bg-orange-600">
        <MessageCircle className="mr-2 h-5 w-5" />
        Ask a question
      </Button>
    </div>
  )
}
