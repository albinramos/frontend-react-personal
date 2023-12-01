import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import {projects} from '../../Data';
import './portfolio.css';
import { FaRegFileArchive } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

/* category asegura que cada categoría aparezca solo una vez.  allNavList contiene todas las categorías únicas, incluyendo 'all'. */

const allNavList = ['all', ...new Set (projects.map((project) => project.category))];
console.log(allNavList)


const Portfolio = () => {
    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);


/* filterItems toma una categoría como argumento. Si la categoría es 'all', se establece projectItems de nuevo a la lista completa de proyectos (projects). De lo contrario, se filtran los proyectos para incluir solo aquellos cuya propiedad category coincide con la categoría proporcionada. */

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems);
    };


    return(
        <section className='portfolio section' id='work'>
            <h2 className="section__title text-cs">
                Portfolio
            </h2>
            <p className='section__subtitle'>
                
            </p>

            <List list={navList} filterItems={filterItems}/>

            <div className="portfolio__container container grid">
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems}/>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Portfolio;