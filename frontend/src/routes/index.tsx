import { Navigate, Route, Routes } from "react-router-dom"
import { MonsterForm } from "../pages/AddMonster"
import { BattlePage } from "../pages/Battle"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/monster"} element={<MonsterForm></MonsterForm>}></Route >
      <Route path="*" element={<Navigate to="/monster" />} />
      <Route path={"/battle"} element={<BattlePage />} />
    </Routes>
  )
}
