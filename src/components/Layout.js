import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CartIcon, HomeIcon } from './Icons'

const Layout = ({categories}) => {

    const renderCategories = () => {
        return categories.data.map(c =>
          <Link to={`/categories/${c.id}`} className='category-title' key={c.id}>{c.title}</Link>
        )
    }

    return (
        <>
        <header>
            <div id='headerHomeIcon'>
                <Link to={'/'}><HomeIcon width={40} /></Link>
            </div>
            <div id='headerTitle'>
                My Store
            </div>
            <div id='headerCartIcon'>
                <Link to={'/cart'}><CartIcon width={40} /></Link>
            </div>
        </header>
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
            <Link to={`/`}>Home</Link> |
            <Link to={`/cart`}>Cart</Link>
        </footer>
        </>
    )
}

export default Layout