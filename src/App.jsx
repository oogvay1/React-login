import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { Home, Projects } from './Pages'
import Layout from "./Layouts/Layout"

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Projects />} />
    </Route>
  )
)
export default App
