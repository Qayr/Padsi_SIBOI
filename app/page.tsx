import Link from 'next/link';
import Image from 'next/image';

function App() {
  return (
    <div>
      
    <div className="flex w-full h-screen bg-yellow-400">
    
      <div className="w-full flex items-center justify-center lg:w-1/2">
      
      <div className='mt-8 flex-col gap-y-4'>
      <h1 className='mb-8 justify-center text-4xl font-bold text-white '> BOWL INC</h1>
                
                <div className="login-link right-10 top-5">
        <Link
          href="/login"
          className="flex items-center gap-3 self-start rounded-xl bg-gray-600 px-10 py-5 text-sm font-medium text-white transition-colors md:text-base"
        >
          <Image
            src="/user.svg"
            width={20}
            height={20}
            className="mx-1"
            alt="logo-user"
          />
          <span>Log in</span>
        </Link>
      </div>
            </div>
      </div>
      <h1 className=""></h1>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-yellow-200">
      
        <div className="w-60 h-60 bg-gradient-to-tr from-yellow-300 to-gray-600 rounded-full"/>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-sm"/>
          
      </div>
    </div>
    </div>
  );
}

export default App;