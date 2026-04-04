import { useLocation } from 'react-router-dom'
import './WavesBackground.css'

export default function WavesBackground() {
  const location = useLocation()
  
  if (location.pathname === '/') {
    return null
  }

  return (
    <div className="waves-bg" aria-hidden="true">
      <div className="wave wave-back"></div>
      <div className="wave wave-mid"></div>
      <div className="wave wave-front"></div>
    </div>
  )
}
