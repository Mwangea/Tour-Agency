import React from 'react'
import '../styles/home.css'

import {Col, Container, Row} from 'reactstrap'
import heroImg  from '../assets/images/hero-img01.jpg'
import  worldImg from '../assets/images/world.png';
import heroImg02  from '../assets/images/hero-img02.jpg'
import heroVideo  from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return ( <>
{/*------HERO SECTION STARTS----*/}  
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero_content'>
                <div className='hero_subtitle d-flex align-items-center'>
                  <Subtitle subtitle={"Know Before You Go"} />
                <img src={worldImg} alt='' />
             </div>
             <h1>Traveling opens the door to creating {""}
             <span className='highlight'>memories</span>
             </h1>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
             </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero_img-box'>
              <img src={heroImg} alt='' />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero_img-box hero_video-box mt-4'>
              <video src={heroVideo} alt='' controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero_img-box mt-5'>
              <img src={heroImg02} alt='' />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
{/*------HERO SECTION ENDS----*/}  
    <section >
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services_subtitle'>What we serve</h5>
            <h2 className='services_title'>We offer our best services</h2>
          </Col>
           <ServiceList />
        </Row>
      </Container>
    </section>

    {/*------- FEATURED TOUR SECTION START-----*/}
    <section>
     <Container>
      <Row>
        <Col lg='12' className='mb-5'>
         <Subtitle  subtitle={'Explore'} />
           <h2 className="featured_tour-title">Our Featured tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
     </Container>
    </section>
    {/*------FEATURED TOUR SECTION END-------*/}
    {/*------EXPERIENCE SECTION START------*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='experience_content'>
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='counter_wrap d-flex align-items-center gap-5'>
              <div className='counter_box'>
              <span>12k+</span>
              <h6>Successful trip</h6>
              </div>
              <div className='counter_box'>
              <span>2k+</span>
              <h6>Regular clients</h6>
              </div>
              <div className='counter_box'>
              <span>15</span>
              <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className='experience_img'>
              <img src={experienceImg} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*------EXPERIENCE SECTION END------*/}
    {/*---GALLERY SECTION -----*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery_title'>Visit our customers gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/*----GALLERY SECTION ENDS--- */}

    {/*----TESTIMONIAL SECTION START ----*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className='testimonial_title'>What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter />
  </>
  );
};

export default Home;