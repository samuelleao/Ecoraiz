import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import LogoSecond from '../images/logo/logoSecond.png';
import LogoVibeCriativa from '../images/copyright/logo_vibecriativa.png';
import '../styles/components/footer.css';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} lg={12} md={12} className='d-flex justify-content-center'>
                        <img src={LogoSecond} alt='' />
                    </Col>
                    <Col xs={12} lg={12} md={12} className='d-flex justify-content-center mt-5'>
                        <div className='social-medias'>
                            <a href=''>
                                <FaFacebookF size={15} />
                            </a>
                            <a href=''>
                                <FaInstagram size={15} />
                            </a>
                            <a href=''>
                                <FaYoutube size={15} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg={4} xs='12' className='d-flex justify-content-center'>
                        <ul>
                            <li> <h5 className='title title-little color-black'>Institucional</h5></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>Sobre nós</a></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>Blog</a></li>
                        </ul>
                    </Col>
                    <Col lg={4} xs='12' className='d-flex justify-content-center'>
                        <ul>
                            <li><h5 className='title title-little color-black'>Mídias sociais</h5></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>Facebook</a></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>Instagram</a></li>
                        </ul>
                    </Col>
                    <Col lg={4} xs='12' className='d-flex justify-content-center'>
                        <ul>
                            <li><h5 className='title title-little color-black'>Contatos</h5></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>Fale conosco</a></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>(84) 98845-5223</a></li>
                            <li className='paragraph p-medium'><a className='color-grey' href=''>(84) 3662-5566</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className='d-flex justify-content-center'>
                        <span className='paragraph p-medium color-grey'>
                            Fazenda Tamatanduba <br/>
                            CPR / NIRF 50655779
                        </span>
                    </Col>
                    <Col lg={12} className='d-flex justify-content-center mt-5 mb-5'>
                    <img src={LogoVibeCriativa}/>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footer;

