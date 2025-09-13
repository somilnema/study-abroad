import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-white border-b-2 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-center items-center h-12 sm:h-14 lg:h-16">
          <Image
            src="/admivologo.png"
            alt="AdmiVo Logo"
            width={120}
            height={40}
            className="h-15 sm:h-15 lg:h-18 w-auto"
          />
        </div>
      </div>
    </header>
  )
}
