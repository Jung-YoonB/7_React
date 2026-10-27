import { Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import TodoListPage from './pages/TodoListPage'
import TodoDetailPage from './pages/TodoDetailPage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/todos" element={<TodoListPage />} />
          <Route path="/todos/:id" element={<TodoDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />          
        </Route>
      </Routes>
    </>
  )
}

export default App
