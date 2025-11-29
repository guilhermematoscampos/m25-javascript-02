import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const items = [
    {
        title: "dashboard",
        content: [{title: "home", route: "/"}]
    },
    {
        title: "configurations",
        content: [{title: "perfil", route: "/perfil"}]
    },
    {
        title: "utilitarios",
        content: [{title: "relatórios", route: "/relatorios"}]
    },
]

export default function Sidebar ((isopen, closesidebar)){
    const {openindex, setopenindex = useState(NULL)}
    const handletoggleitem = (index) => {
        setopenindex ((prev) => 
            (prev==index ? NULL:index));
    }
    return(       
            <aside className={`'sidebar ${isopen ? sidebar-open}'`}>
                <nav className='sidebar-nav'>
                {
                    items.map ((item, index) => {
                        <div className='accordion-item' key=
                        <button className='accordion-header'> 

                            <span>{item, title}</span>
                            <span>{openindex ===index ? NULL}</span>
                        </button>
                        ></div>
                        {
                            openindex === index && (
                                <ul className='accordion-content'>
                                    {
                                        item.content.map ((subitem) => (
                                            <li key={subitem.title}>
                                                <link to={subitem.route} className='accordion-link' onClick={closesidebar}></link> 
                                                {subitem.title} - {subitem.route}
                                                <span onClick={closesidebar}>fechar</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    })
                }
                </nav>
            </aside>
    )
} 

