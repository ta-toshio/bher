import React from 'react'
import Head from 'next/head'

const StaffLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/staff.css' />
      </Head>
      <main>
        <div>
          {/* START NAV */}
          <nav className='navbar is-white'>
            <div className='container'>
              <div className='navbar-brand'>
                <a className='navbar-item brand-text' href='../index.html'>
                  BHERB
                </a>
                <div className='navbar-burger burger' data-target='navMenu'>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div id='navMenu' className='navbar-menu'>
                <div className='navbar-start'>
                  <a className='navbar-item' href='admin.html'>
                    Home
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* END NAV */}
          <div className='container'>
            <div className='columns'>
              <div className='column is-3 '>
                <aside className='menu is-hidden-mobile'>
                  <p className='menu-label'>
                    General
                  </p>
                  <ul className='menu-list'>
                    <li><a className='is-active'>Dashboard</a></li>
                  </ul>
                  <p className='menu-label'>
                    Administration
                  </p>
                  <ul className='menu-list'>
                    <li><a>Store</a></li>
                    <li><a>Staff</a></li>
                  </ul>
                </aside>
              </div>
              <div className='column is-9'>
                {/*
                <nav className='breadcrumb' aria-label='breadcrumbs'>
                  <ul>
                    <li><a href='../'>Top</a></li>
                    <li className='is-active'><a href='#' aria-current='page'>Admin</a></li>
                  </ul>
                </nav>
                */}
                <div className='columns'>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default StaffLayout
