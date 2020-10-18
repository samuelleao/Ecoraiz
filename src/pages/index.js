import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import LastPosts from '../components/lastPosts';

import '../styles/pages/index.css';
import '../styles/components/video.css';

import playVideo from '../images/video/play-video.svg';
import img from '../images/illustrations/receitas.png'
import productsIllustration from '../images/illustrations/products-illustration.svg';

function Index() {

    function RemoveVideoMask(){
        setInterval(() => {
            var elem = document.activeElement;
            var video_filter = document.querySelector(`#${elem.getAttribute('data-filter_video')}`)
            if (elem && elem.tagName == 'IFRAME') {
                video_filter.classList.add('d-none')
            }
        }, 100);
    }

    RemoveVideoMask()

    return (
        <main className='index'>
            <section className='section1 illustration-branch-left'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} md={12} className='first-column'>
                            <div>
                                <h5 className='title title-big color-black '>
                                    Qualidade <span className='color-second'>Ecoraiz</span>
                                </h5>
                                <p className='paragraph color-grey'>
                                    Obtenha de uma experiência incrível ao experimentar
                                    produtos que são selecionados por uma empresa que
                                    se preocupa com sua qualidade.
                                </p>
                                <Button className='bt-standard bt-standard-second'>Sobre nós</Button>
                                <img src={productsIllustration} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={12}>
                            <div className='video' >
                                <iframe className='border-radius-elements' data-filter_video='video1' 
                                src='https://www.youtube-nocookie.com/embed/hWkYtZxpQUo' 
                                allow='accelerometer; autoplay; 
                                clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture' >
                                </iframe>
                                <div className='video-mask' id='video1' >
                                    <img src={playVideo} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section2 bg-light illustration-branch-right illustration-line-left'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} md={12} className='first-column'>
                            <div>
                                <h5 className='title title-big color-black '>
                                    <span className='color-primary'>Receitas</span> Ecoraiz
                                </h5>
                                <p className='paragraph color-grey'>
                                    Separamos receitas incriveis que você pode fazer com a Ecoraiz,
                                    pode nos enviar alguma nova
                                    receita também :D
                                </p>
                                <Button className='bt-standard bt-standard-black'>Ver receitas</Button>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={12} className='d-flex justify-content-center'>
                            <img src={img} alt='receitas ecoraiz' title='receitas ecoraiz' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <LastPosts/>
        </main>
    );
}

export default Index;