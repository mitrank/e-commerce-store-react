import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = ({categories}) => {
    const navigate = useNavigate();

    const renderCategories = () => {
        return categories.data.map(c =>
          <div onClick={() => navigate(`/categories/${c.id}`)} className='category-title' key={c.id}>{c.title}</div>
        )
    }

    return (
        <>
        <header>My Store</header>
        <section>
        <nav>
            {categories.errorMessage && 
            <div>Error: {categories.errorMessage}</div>}
            {categories.data && renderCategories()}
        </nav>
        <main>
            <Outlet />
        </main>
        </section>
        <footer>
            <div onClick={() => navigate(`/`)}>Home</div> |
            <div onClick={() => navigate(`/basket`)}>Cart</div>
        </footer>
        </>
    )
}

export default Layout