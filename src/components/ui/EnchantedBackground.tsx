import { useLocation } from 'react-router-dom'
import './EnchantedBackground.css'

export default function EnchantedBackground() {
  const location = useLocation()
  
  if (location.pathname === '/') {
    return null
  }

  return (
    <div className="enchanted-bg" aria-hidden="true">
      <div className="enchanted-bg__glint"></div>
      <div className="enchanted-bg__glint enchanted-bg__glint--alt"></div>
    </div>
  )
}
