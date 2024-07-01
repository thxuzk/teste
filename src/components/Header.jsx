import { NavLink } from "react-router-dom";

export function Header({title}) {
    return (
        <header className="p-5 flex justify-between">
        <h1 className="text-4xl font-bold">{title}</h1>
        <nav>
          <ul className="flex gap-2.5">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/products">Produtos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}