"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useLayoutEffect } from "react"
import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "Subscribers", path: "/subscribers" },
  { name: "Stats", path: "/" },
  { name: "Podcast", path: "/podcast" },
  { name: "Chat", path: "/chat" },
  { name: "Recommendations", path: "/recommendations" },
  { name: "Settings", path: "/settings" },
]

export function Header() {
  const pathname = usePathname()
  const [selected, setSelected] = useState(() => {
    // Set default based on current path
    if (pathname === "/settings") return "Settings"
    if (pathname === "/") return "Stats"
    return "Stats"
  })
  const navBarRef = useRef<HTMLDivElement | null>(null)
  const textRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [underline, setUnderline] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const idx = NAV_ITEMS.findIndex(item => item.name === selected)
    const textSpan = textRefs.current[idx]
    const navBar = navBarRef.current
    if (textSpan && navBar) {
      const textRect = textSpan.getBoundingClientRect()
      const navRect = navBar.getBoundingClientRect()
      setUnderline({
        left: textRect.left - navRect.left,
        width: textRect.width,
      })
    }
  }, [selected])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      {/* First level - Logo, title, search, notifications, avatar */}
      <div className="border-b bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-0">
          {/* Left side - Logo */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <div style={{ width: 40, height: 28, borderRadius: 8, border: '1px solid #e3e6e8', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
                <Image
                  src="/flag-icon.svg"
                  alt="Flag Icon"
                  width={36}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </div>

          {/* Center - Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <span className="font-sans font-extrabold text-3xl cursor-pointer">Substack</span>
            </Link>
          </div>

          {/* right-side icons */}
          <div className="flex items-center gap-4">
            {[Search, MessageSquare, Bell].map((Icon) => (
              <Button key={Icon.displayName} variant="ghost" size="icon" className="rounded-full">
                <Icon className="h-5 w-5 text-gray-600" />
              </Button>
            ))}

            {/* avatar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar-user.png" alt="User avatar" style={{ objectFit: 'cover', borderRadius: '9999px' }} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="absolute -right-1 -bottom-1 h-4 w-4 text-gray-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href="/settings">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Second level - Navigation menu */}
      <div className="bg-white h-12 relative border-b">
        <div className="container mx-auto h-full flex items-center justify-center p-0">
          <nav
            ref={navBarRef}
            className="inline-flex items-center justify-center h-full relative"
            style={{ position: "relative" }}
          >
            {NAV_ITEMS.map((item, idx) => {
              const isSelected = selected === item.name
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setSelected(item.name)}
                  className={`relative h-full inline-flex items-center justify-center p-0 m-0 transition-all duration-200 font-medium text-sm whitespace-nowrap group
                    ${isSelected ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
                  style={{ outline: "none", background: "none", border: "none", minWidth: 0, textDecoration: "none" }}
                >
                  {/* Hover background, only when hovering text */}
                  <span
                    className="absolute left-0 right-0 top-0 bottom-0 bg-gray-100 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition"
                    aria-hidden="true"
                  />
                  <span
                    ref={el => { textRefs.current[idx] = el || null; }}
                    className="relative z-10 px-3 py-0.5 w-full text-center cursor-pointer"
                  >
                    {item.name}
                  </span>
                </Link>
              )
            })}
            {/* Single underline at the very bottom of the nav bar, matches text width */}
            <span
              className="absolute h-[4px] bg-gray-900 z-20 transition-all duration-200"
              style={{
                left: underline.left,
                width: underline.width,
                bottom: 0,
                pointerEvents: "none",
              }}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
