import { FiShoppingCart } from 'react-icons/fi'
import './index.css'
const defaultIcon = <FiShoppingCart />

export const ListItemNav = ({ icon, text, href }) => {
  return (
    <div className="nav-item-list">
      {icon || defaultIcon}
      <a href={href}>{text}</a>
    </div>
  )
}
