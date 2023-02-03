import React from 'react'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'


export default function Layout({children}) {
  return (
    <>
        <Topbar/>
        <Sidebar/>
        <main id="main" class="main">
                <div class="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
                </div>
                <section class="section dashboard">
                <div class="row">
                    {children}
                
                </div>
                </section>

            </main>
        <Footer/>
    </>
  )
}
