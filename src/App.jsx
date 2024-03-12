import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <main className='w-3/4 mx-auto my-5 md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>

    </>
  )
}

export default App
