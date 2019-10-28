import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { TagsContext } from '../../Store/TagsContext';
import Navbar from '../Home/Navbar';

const Peristiwa = () => {
    const { berita } = useContext(TagsContext)
    const tag = "Peristiwa"
    let data = berita.filter(item => item.acf.tag[0] === tag || item.acf.tag[1] === tag
        || item.acf.tag[2] === tag || item.acf.tag[3] === tag || item.acf.tag[4] === tag
        || item.acf.tag[5] === tag || item.acf.tag[6] === tag || item.acf.tag[7] === tag
        || item.acf.tag[8] === tag)

    return (
        <Fragment>
            <Navbar/>
            <div className="margin" style={{ marginTop: '80px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                            <h2 style={{ margin: '0 15px 0 0', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462' }}>PERISTIWA</h2>
                            <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div>
                        </div>
                        <Grid container spacing={3}>
                            {data.length ? (
                                <Fragment>
                                    {data.map(data => {
                                        return (
                                            <Fragment key={data.id}>
                                                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="gMobile">
                                                    <Link to={`/berita/${data.slug}`}>
                                                        <Box className="boxMobile" style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }}>
                                                            <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                                        </Box>
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                                    <Link to={`/berita/${data.slug}`} style={{ textDecoration: 'none' }}>
                                                        <h2 style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                                    </Link>
                                                    <h2 style={{ fontWeight: '600', fontSize: '12px', color: '#808080', textTransform: 'uppercase' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                                    <div style={{ fontFamily: 'Roboto', fontSize: '14px', height: '50px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                                    <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                                                    {data.acf.tag.map(item => {
                                                        return (
                                                            <Fragment key={item}>
                                                                <Link to={`/tags/${item}`} style={{ textDecoration: 'none' }}><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', marginTop: '5px' }}>{item}</button></Link>
                                                            </Fragment>
                                                        )
                                                    })}
                                                    </div>
                                                </Grid>
                                                <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#C4C4C4' }} />
                                            </Fragment>
                                        )

                                    })}
                                </Fragment>
                            ) : (
                                    <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CircularProgress />
                                    </div>
                                )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                        <Box style={{ height: '100%', marginTop: '10px', border: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3>SPACE IKLAN</h3>
                        </Box>
                    </Grid>
                </Grid>
                <br />
                <br />
            </div>
        </Fragment>
    );
}

export default Peristiwa