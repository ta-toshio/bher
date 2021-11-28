import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRequireLogin } from '../../contexts/auth/useRequireLogin'
import { staff } from '../../contexts/auth/user'
import { useRouter } from 'next/router'

const StaffLayout: React.FC = ({ children }) => {
  const { checking } = useRequireLogin(staff)
  const { pathname } = useRouter()
  if (checking) return <></>

  console.log(pathname)

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
                <Link href="/admin">
                  <a className="navbar-item brand-text">
                    BHERB
                  </a>
                </Link>
                <div className='navbar-burger burger' data-target='navMenu'>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div id='navMenu' className='navbar-menu'>
                <div className='navbar-start'>
                  <Link href="/admin">
                    <a className='navbar-item'>
                      Home
                    </a>
                  </Link>
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
                    <li>
                      <Link href="/admin">
                        <a className={pathname === '/admin' ? 'is-active' : ''}>Dashboard</a>
                      </Link>
                    </li>
                  </ul>
                  <p className='menu-label'>
                    Administration
                  </p>
                  <ul className='menu-list'>
                    <li><a>Store</a></li>
                    <li>
                      <Link href={"/admin/staffs"}>
                        <a className={pathname.includes('/admin/staffs') ? 'is-active' : ''}>Staff</a>
                      </Link>
                    </li>
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
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default StaffLayout
