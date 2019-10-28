import React, { useState } from 'react';
import { Toolbar, Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import Search from './Search';

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const toogleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="navigation">
            <Dialog
            open={open}
            onClose={toogleOpen}
            fullwidth={true}
            maxWidth="xl" >
                <div style={{ overflow:'hidden', width: '700px', zIndex: '15', height: '50px' }} >
                    <Search/>
                </div>
            </Dialog>
            <Toolbar className='tags' style={{ padding: '0' }}>
                <Link to='/tags/Daerah' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>DAERAH</h4>
                </Link>
                <Link to='/tags/Ekobis' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>EKOBIS</h4>
                </Link>
                <Link to='/tags/Hukum Kriminal' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>HUKUM KRIMINAL</h4>
                </Link>
                <Link to='/tags/Nasional' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>NASIONAL</h4>
                </Link>
                <Link to='/tags/Peristiwa' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>PERISTIWA</h4>
                </Link>
                <Link to='/tags/Politik' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>POLITIK</h4>
                </Link>
                <Link to='/tags/Ragam' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>RAGAM</h4>
                </Link>
                <Link to='/tags/Sport' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>SPORT</h4>
                </Link>
                <Link to='/tags/Teknologi' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>TEKNOLOGI</h4>
                </Link>
                <MdSearch style={{ color: 'white', cursor: 'pointer', fontSize:'20px' }} onClick={toogleOpen}/>
            </Toolbar>
        </div>
    );
}

export default Navigation;