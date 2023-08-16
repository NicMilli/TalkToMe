import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import FullLogo from '../FullLogo.png'

const NavbarLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 border-r border-black">
        TalkToMe
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">
          <nav>
            <div className="h-full w-full px-6 flex items-center justify-around">
              <div className="w-[50%]">
                <Image
                  src={FullLogo}
                  width={60}
                  height={60}
                  alt="Nicholas Milligan Logo"
                />
              </div>

              <div className="flex justify-between w-[50%]">
                <button>TalkToMe</button>
                <button>WriteMe</button>
                <UserButton />
              </div>
            </div>
          </nav>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default NavbarLayout
