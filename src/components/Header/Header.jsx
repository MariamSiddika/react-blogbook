import React from 'react';
import './Header.css'
import bg from '../../images/blog-bg.jpg';
// import secondBg from '../../images/primary-blog-bg.jpg'
// import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitle d-flex align-items-center flex-column">
                <span className="headerTitleSm">Write Your Blog</span>
                <span className="headerTitleLg">BlogBook</span>
            </div>
            <img className='headerImg img-fluid' src={bg} alt="" />

            {/* <Carousel>           
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block headerImg"
                        src={bg}
                        alt="First slide"
                    />                   
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block headerImg"
                        src={secondBg}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block headerImg"
                        src={bg}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default Header;