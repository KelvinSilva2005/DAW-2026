import type { Category } from "./data/categorias"

type NavigationBarProps = {
    categories: Category[]
    activeCategory:string
    ons
}
export function NavigationBar({
    categories,
    activeCategory
} : NavigationBarProps) {
return (
    <nav>
    <ul className="container">
        {categories.map((category)=>(
            <li>
        <button type="button"
        className={category.alias == activeCategory ? "active" : ''}
         >{category.label}</button>
             </li>
        ))}
    </ul>
    </nav>
  )
}