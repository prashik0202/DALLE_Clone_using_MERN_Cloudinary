import { BrowserRouter , Link , Route , Routes } from 'react-router-dom';
import { logo } from './assets';
import { CreatePost, Home } from './pages';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { useUser } from "@clerk/clerk-react";

function App() {


  const { isSignedIn, user, isLoaded } = useUser();

  return (
      <BrowserRouter>
        <header className='w-full flex justify-between bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'
        >
          <Link
            to='/'
          >
            <img src={logo} alt="logo"
              className='w-28 object-contain'
            />
          </Link>

          <div>
            {
              isSignedIn ? (
                <div className='flex'>
                  <h1 className='my-auto'>Welcome, {user.firstName}</h1>
                  <SignedIn>
                    
                    <Link to='/create-post'
                      className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mx-2'
                    >
                      Create
                    </Link>
                      <SignOutButton afterSignOutUrl="/" className='font-inter font-medium bg-red-700 text-white px-4 py-2 rounded-md'/>
                  </SignedIn>
                </div>
              ) : (
                <SignedOut>
                  <SignInButton className='font-inter font-medium bg-blue-500 text-white px-4 py-2 rounded-md'/>
                </SignedOut>
              )
            }
            

            
          </div>

        </header>

        <main className='sm: p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
