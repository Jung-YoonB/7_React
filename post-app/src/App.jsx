import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import NewPostPage from './pages/NewPostPage'
import EditPostPage from './pages/EditPostPage'
import PostListPage from './pages/PostListPage'
import Layout from './components/Layout'


function App() {

  return (
    <>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/posts/:id/edit" element={<EditPostPage />} />
            <Route path="/posts/new" element={<NewPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
