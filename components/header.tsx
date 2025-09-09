import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-white border-b-2 border-red-500 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <Image
            src="/admivologo.png"
            alt="AdmiVo Logo"
            width={120}
            height={40}
            className="h-20 w-auto"
          />
        </div>
      </div>
    </header>
  )
}
