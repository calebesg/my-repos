import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Repo } from './pages/Repo'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repo" element={<Repo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
