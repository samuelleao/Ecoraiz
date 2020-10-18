import React from 'react';
import '../styles/pages/about.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Illustration1 from '../images/illustrations/illustration1.svg'
import { FaFlag, FaStar, FaEye } from 'react-icons/fa'
import Founder from '../images/illustrations/luciano.png'

function About() {
    return (
        <main className='about'>
            <section className='section1 illustration-branch-left illustration-branch-left-white'>
                <div className='illustration-branch-white'></div>
                <Container>
                    <Col xs={12}>
                        <h5 className='title title-big text-white'>Sobre nós</h5>
                        <p className='paragraph p-big text-white'>
                            Mais que uma empresa! Uma amiga que se preocupa
                        <br />
                        com a qualidade de seu produto
                        </p>
                    </Col>
                </Container>
            </section>

            <section className='section2'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} md={12} className='first-column'>
                            <div>
                                <h5 className='title title-big color-black '>
                                    <span className='paragraph p-big'>História</span>
                                    <br />
                                    Senta que lá vem  <span className='color-primary'>história!</span>
                                </h5>
                                <p className='paragraph color-grey'>
                                    On the other hand, we denounce with righteous indignation and dislike
                                    men who are so beguiled and demoralized by the charms of pleasure of
                                    the moment, so blinded by desire, that they cannot foresee the pain and
                                    trouble that are bound to ensue; and equal blame belongs to those who
                                    fail in their duty through weakness of will, which is the same as saying
                                    through shrinking from toil and pain.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={12}>
                            <img className='d-block m-auto' src={Illustration1} />
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className='section3 illustration-line-right'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} md={12} className='cards-goals'>
                            <div className='card-goals'>
                                <FaFlag size={25} className='color-second mb-4' />
                                <h5 className='title tile-little color-black'>Missão</h5>
                                <p className='paragraph p-medium color-grey'>Clientes empresas satisfeitos com a qualidade de nossos produtos</p>
                            </div>

                            <div className='card-goals'>
                                <FaStar size={25} className='color-second mb-4' />
                                <h5 className='title tile-little color-black'>Valores</h5>
                                <p className='paragraph p-medium color-grey'>Clientes empresas satisfeitos com a qualidade de nossos produtos</p>
                            </div>

                            <div className='card-goals'>
                                <FaEye size={25} className='color-second mb-4' />
                                <h5 className='title tile-little color-black'>Visão</h5>
                                <p className='paragraph p-medium color-grey'>Clientes empresas satisfeitos com a qualidade de nossos produtos</p>
                            </div>

                        </Col>
                        <Col xs={12} lg={6} md={12} className='second-column'>
                            <div>
                                <h5 className='title title-big color-black '>
                                    <span className='paragraph p-big'>Objetivos</span>
                                    <br />
                                    Se for pra fazer, fazemos <br />
                                    <span className='color-second'>bem feito!</span>
                                </h5>
                                <p className='paragraph color-grey '>
                                    On the other hand, we denounce with righteous <br />
                                indignation and dislike men who are so beguiled <br />
                                and demoralized
                                by the charms.
                                </p>
                                <Button className='bt-standard bt-standard-second'>Produto</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='section4'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} md={12} >
                            <div className='founder d-block m-auto'>
                                <img src={Founder} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={12} className='second-column'>
                            <div>
                                <h5 className='title title-big color-black '>
                                    <span className='paragraph p-big'> <span className='title'> Luciano </span> - Fundador da Ecoraiz</span> <br />
                                    É um  <span className='color-primary'>prazer</span> enorme fazer<br />
                                    parte dessa equipe
                                </h5>
                                <p className='paragraph color-grey '>
                                    " On the other hand, we denounce with righteous<br />
                                 indignation and dislike men who are so beguiled<br />
                                 and demoralized by the charms."
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default About;