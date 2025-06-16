import { useState } from 'react';
import './Header.css'

function Header() {

    let [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    return (
        <>
            {modal && <modal />}

            <header className='header'>
                <div className="container">
                    <div className="header-inner">
                        <div className="header-main-part">
                            <div className="headear-logo">
                                <h1>INWOOD</h1>
                            </div>

                            <div className="header-contact">
                                <button>Contact us</button>
                            </div>
                        </div>

                        <div onClick={() => openModal} className="header-menu">
                            <div className="menu-spans">
                                <div className="menu1 menu"></div>
                                <div className="menu2 menu"></div>
                                <div className="menu3 menu"></div>
                            </div>
                            <p>menu • menu • menu • menu menu • menu</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header
