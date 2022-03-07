import { FaTshirt } from 'react-icons/fa'

import { ListItemNav } from '../ListItemNav'
import './index.css'

export const Sidebar = ({ sidebar }) => {
  return (
    <section className={!sidebar ? 'nav-menu' : 'nav-menu active'}>
      <div className="wrapper-clothes">
        <ListItemNav href="#" text="Nuevo" />
        <ListItemNav href="#" text="Colecciones" />
        <ListItemNav href="#" icon={<FaTshirt />} text="Rameras" />
        <ListItemNav href="#" text="Pantalones" />
        <ListItemNav href="#" text="Jeans" />
        <ListItemNav href="#" text="Zapatillas" />
      </div>
      <div className="more-info">
        <a href="#">Preguntas frecuentes</a>
        <a href="#">Envíos</a>
      </div>
    </section>
  )
}
