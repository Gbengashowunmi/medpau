import React, {useEffect} from 'react'
import "../component/headFoot.scss"
export default function HeadFoot({children}) {
    
        // Sticky Menu Area
        useEffect(() => {
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        });
    
               
        /* Method that will fix header after a specific scrollable */
               const isSticky = (e) => {
                    const header = document.querySelector('.header');
                    const scrollTop = window.scrollY;
                    scrollTop >= 50 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
                };
  return (
    <div>
        <header className="header">
            <div className="comapany-icon"><h2>MEDPAU</h2></div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Shop</li>
                <li>Blg</li>
                <li>MGTP</li>
                {/* <Button variant="contained">Contained</Button> */}

            </ul>
        </header>
        {children}
        <footer></footer>
    </div>
  )
}
