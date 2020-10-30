import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import '../styles/components/blogCard.css';
import { Container, Card } from 'react-bootstrap';

function LastPosts() {
    return (
        <section className='section3 illustration-branch-left'>
            <Container>
            <h5 className='title title-medium color-black'>Últimos Posts</h5>
                <div className='blog-grid'>
                    <Card className='blog-card'>
                        <div className='card-img-top'>
                            <img src={require('../images/blog/blog1.png')} />
                            <div className='category'>Receitas</div>
                        </div>

                        <Card.Body>
                            <Card.Title className='color-black title title-little'>Comida orgânica: 9 receitas com ingredientes sustentáveis</Card.Title>
                            <Card.Text className='paragraph p-medium color-grey'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <div className='blog-card-footer'>
                                <div className='blog-card-clock'>
                                    <FaClock className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>12:44</span>
                                </div>
                                <div className='blog-card-calendar'>
                                    <FaCalendarAlt className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='blog-card'>
                        <div className='card-img-top'>
                            <img src={require('../images/blog/blog2.png')} />
                            <div className='category'>Receitas</div>
                        </div>
                        <Card.Body>
                            <Card.Title className='color-black title title-little'>Mandioca: conheça 9 benefícios desse alimento</Card.Title>
                            <Card.Text className='paragraph p-medium color-grey'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <div className='blog-card-footer'>
                                <div className='blog-card-clock'>

                                    <FaClock className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>12:44</span>
                                </div>
                                <div className='blog-card-calendar'>
                                    <FaCalendarAlt className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='blog-card-line'>
                        <img src={require('../images/blog/blog3.png')} />
                        <Card.Body className='blog-card-line-body'>
                            <Card.Title className='title title-little color-black'>Por que consumir alimentos orgânicos?</Card.Title>
                            <div className='blog-card-footer'>
                                <div className='blog-card-clock'>

                                    <FaClock className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>12:44</span>
                                </div>
                                <div className='blog-card-calendar'>
                                    <FaCalendarAlt className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>
                    <Card className='blog-card-line'>
                        <img src={require('../images/blog/blog4.png')} />
                        <Card.Body className='blog-card-line-body'>
                            <Card.Title className='title title-little color-black'>9 receitas vegetarianas e veganas perfeitas...</Card.Title>
                            <div className='blog-card-footer'>
                                <div className='blog-card-clock'>

                                    <FaClock className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>12:44</span>
                                </div>
                                <div className='blog-card-calendar'>
                                    <FaCalendarAlt className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='blog-card-line'>
                        <img src={require('../images/blog/blog5.png')} />
                        <Card.Body className='blog-card-line-body'>
                            <Card.Title className='title title-little color-black'>Conheça a fazenda tamatanduba</Card.Title>
                            <div className='blog-card-footer'>
                                <div className='blog-card-clock'>

                                    <FaClock className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>12:44</span>
                                </div>
                                <div className='blog-card-calendar'>
                                    <FaCalendarAlt className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='blog-card-line'>
                        <img src={require('../images/blog/blog6.png')} />
                        <Card.Body className='blog-card-line-body'>
                            <Card.Title className='title title-little color-black'>Como deve ser a alimentação para quem faz academia?</Card.Title>
                            <div className='blog-card-footer'>
                                <div className='blog-card-clock'>

                                    <FaClock className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>12:44</span>
                                </div>
                                <div className='blog-card-calendar'>
                                    <FaCalendarAlt className='color-grey' size={15} />
                                    <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default LastPosts;