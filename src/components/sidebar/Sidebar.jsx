import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {

    
  return (
    <div>
        <aside id="sidebar" class="sidebar">
            <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <a class="nav-link " href="index.html">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-menu-button-wide"></i><span>Room Manage..</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link to="/rooms/add">
                    <i class="bi bi-circle"></i><span>Add</span>
                    </Link>
                </li>
           
                <li>
                    <Link to="/rooms">
                    <i class="bi bi-circle"></i><span>Room List</span>
                    </Link>
                </li>
                </ul>
            </li>
          

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-contact.html">
                <i class="bi bi-envelope"></i>
                <span>Contact</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-register.html">
                <i class="bi bi-card-list"></i>
                <span>Register</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-login.html">
                <i class="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-dash-circle"></i>
                <span>Error 404</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-blank.html">
                <i class="bi bi-file-earmark"></i>
                <span>Blank</span>
                </a>
            </li>

            </ul>
        </aside>
    </div>
  )
}
