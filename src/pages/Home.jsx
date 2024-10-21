import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';



function Home() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='small-nav w-100' style={{zIndex:'99',top:'0'}}>
        <div className='d-block d-md-none' style={{backgroundImage:'url(https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Web_Dimension_1536_1_e1b0eab7b0.jpg)',backgroundSize:'cover',height:'160px'}}>
        </div>
        <div className='py-md-1' style={{backgroundColor:"rgb(224, 224, 224)"}}>
          <div className='px-md-5' style={{backgroundColor:"#0e382c"}}>
            <div className='py-4 text-light d-flex justify-content-between px-md-5' >
              <span className='ms-3' style={{fontSize:"20px",fontWeight:'350'}}>Starbucks</span>
              <button className='me-3 btn btn-outline-light rounded-pill fw-bold' style={{fontSize:'13px'}}>Know More</button>
            </div>
          </div>
        </div>
      </div>

      <div className='d-block d-md-none' style={{height:'242px'}}></div>

      <div className='px-md-5 px-4 mb-5 '>
        <div className='mt-4 px-md-5'>
          <Carousel
          interval={null}
          indicators={false}
          touch={true}
          nextIcon={<span className="custom-next shadow" ><FontAwesomeIcon icon={faArrowRight} /></span>}
          prevIcon={<span className="custom-prev shadow" ><FontAwesomeIcon icon={faArrowLeft} /></span>}
          
          >
          <Carousel.Item >
            <div className='rounded d-flex' style={{backgroundImage:"url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Web_Banner_Background_Image_1_49caed5892.png')",backgroundSize:'cover', backgroundPosition:"center",height:'210px'}}>
              <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Left_Image_1_fd02e7b3b7.png" className='card-image' alt="" />
             <div className='d-flex w-100 flex-column felx-md-row'>
                <div className='ms-md-5'>
                  <p className='mt-md-3 mt-2 mb-md-3 mb-2' style={{fontSize:'14px'}}>Introducing</p>
                  <h5 className='mb-md-4'>Diwali Delights</h5>
                  <p className='para-home'>savor festive flavors with our kesar-pista beverages & mithai inspired desserts</p>
                </div>
                <div className='ms-auto me-5 mt-auto mb-4'>
                  <button className='btn rounded-pill px-5 py-2 text-light fw-bold' style={{backgroundColor:'#00754a',fontSize:'14px'}}>Order Now</button>
                </div>
             </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className='rounded d-flex text-light' style={{backgroundImage:"url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Web_d273add871.png')",backgroundSize:'cover', backgroundPosition:"center",height:'210px'}}>
            <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboards_Banner_Bg_Item_App_and_Web_436875adc1.png" className='card-image' alt="" />
              <div className='d-flex w-100 flex-column flex-md-row'>
                <div className='ms-md-5'>
                  <p className='mt-md-3 mt-2 mb-md-3 mb-2' style={{fontSize:'14px'}}>Introducing</p>
                  <h5 className='mb-md-4'>Gift a Starbucks</h5>
                  <p className='mb-0 mb-md-3 para-home'>this festive season, we bring to you the perfect gifting story our India exclusive limited-edition range</p>
                  <span className='mt-md-3'>starting from </span><br className='d-none d-md-inline' />
                  <span className='fs-6 fw-bold'>₹350.oo</span>
                </div>
                <div className='ms-auto me-5 mt-auto mb-4'>
                  <button className='btn rounded-pill px-5 py-2 fw-bold' style={{backgroundColor:'white',fontSize:'14px'}}>Know more</button>
                </div>
              </div>
              </div>
          </Carousel.Item>
          <Carousel.Item >
          <div className='rounded d-flex text-light' style={{backgroundImage:"url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Banner_Background_2256x488_1_0c34e62d77.webp')",backgroundSize:'cover', backgroundPosition:"center",height:'210px'}}>
              <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png" className='card-image' alt="" />
              <div className='d-flex w-100 flex-column felx-md-row'>
                <div className='ms-md-5'>
                  <p className='mt-md-3 mt-2 mb-md-3 mb-2' style={{fontSize:'14px'}}>Introducing</p>
                  <h5 className='mb-md-4'>Diwali Delights</h5>
                  <p className='para-home'>savor festive flavors with our kesar-pista beverages & mithai inspired desserts</p>
                </div>
                <div className='ms-auto me-5 mt-auto mb-4'>
                  <button className='btn rounded-pill px-5 py-2 fw-bold' style={{backgroundColor:'white',fontSize:'14px'}}>Order Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className='rounded d-flex text-light' style={{backgroundImage:"url('https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1056_2_91726ff5e5.png')",backgroundSize:'cover', backgroundPosition:"center",height:'210px'}}>
            <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png" className='card-image' alt="" />
              <div className='d-flex w-100 flex-column flex-md-row'>
                <div className='ms-md-5'>
                  <p className='mt-md-3 mt-2 mb-md-3 mb-2' style={{fontSize:'14px'}}>Now Brewing</p>
                  <h5 className='mb-md-4'>Starbucks Menu</h5>
                  <p className='mb-0 mb-md-3 para-home'>Indulge in season's feasting! Make your sips extra special. Explore Menu.</p>
                  <span className='mt-3'>starting from </span><br className='d-none d-md-inline' />
                  <span className='fs-6 fw-bold'>Rs250</span>
                </div>
                <div className='ms-auto me-5 mt-auto mb-4'>
                  <button className='btn rounded-pill px-5 py-2 text-light fw-bold' style={{backgroundColor:'rgb(0 117 74)',fontSize:'14px'}}>Know more</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          </Carousel>
        </div>
      </div>



      <div className='px-md-5 px-2 mb-5'>
        <div className='mt-4 px-md-5'>
          <h3 className='fw-bold ms-2'>Handcrafted Curations</h3>
        </div>
        <div className='row g-0 mt-3'>
            <div className='col-md-6 d-flex justify-content-around'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src="https://www.starbucks.in/assets/icon/Bestseller.webp" width={'100px'} height={'100px'} alt="" className='rounds rounded-pill'/>
                <span style={{fontWeight:'700'}}>Bestseller</span>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src="https://www.starbucks.in/assets/icon/Drinks.webp" width={'100px'} height={'100px'} alt="" className='rounds rounded-pill'/>
                <span style={{fontWeight:'700'}}>Drinks</span>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src="https://www.starbucks.in/assets/icon/Food.webp" width={'100px'} height={'100px'} alt="" className='rounds rounded-pill'/>
                <span style={{fontWeight:'700'}}>Food</span>
            </div>
            </div>
            <div className='col-md-6 col-md-6 d-flex justify-content-around'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src="https://www.starbucks.in/assets/icon/Merchandise.webp" width={'100px'} height={'100px'} alt="" className='rounds rounded-pill'/>
                <span style={{fontWeight:'700'}}>Merchandise</span>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src="https://www.starbucks.in/assets/icon/CoffeeAtHome.webp" width={'100px'} height={'100px'} alt="" className='rounds rounded-pill'/>
                <span style={{fontWeight:'700'}}>Coffee At Home</span>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src="https://www.starbucks.in/assets/icon/ReadyToEat.webp" width={'100px'} height={'100px'} alt="" className='rounds rounded-pill'/>
                <span style={{fontWeight:'700'}}>Ready to Eat</span>
              </div>
            </div>
          </div>
      </div>



      <div className='mt-5'style={{backgroundColor:'rgb(237 235 233)',position:'relative'}}>
        <img style={{position:'absolute',top:'0',right:'0'}} width={'70px'} src="https://www.starbucks.in/assets/icon/greyleafright.svg" alt="" />
        <div className='px-md-5 px-2 mb-5'>
        <div className='mt-4 px-md-5'>
          <div className='d-flex pt-4 mb-4'>
            <h4 className='fw-bold'>Barista Recommends</h4>
            <span className='ms-auto fw-bold' style={{color:'rgb(0, 117, 74)',fontSize:'12px'}}>View Menu</span>
          </div>
          <div className='px-4'>
            <Slider {...settings} className='pb-5'>
          <div className='bg-light rounded p-3 ps-4 shadow' >
            <div className='d-flex'>
              <img src="https://www.starbucks.in/assets/icon/placeholder.webp" className='rounded' width={'80px'} height={'80px'} alt="" />
              <div className='ms-3 mt-1'>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <span style={{fontWeight:'600'}}>Cappuccino</span><br />
                <span style={{fontWeight:'100', fontSize:'10px',fontFamily:'Pike_Regular, Helvetica, sans-serif',letterSpacing:'-0.5px'}}>SHORT() .</span>
              </div>
            </div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <span className='fw-bold'>₹283.<span style={{fontSize:'12px'}}>50</span></span>
                <button className='btn rounded-pill text-light' style={{backgroundColor:'rgb(0 117 74)',fontWeight:'600',fontSize:'14px'}}>Add Item</button>
              </div>
          </div>
          <div className='bg-light rounded p-3 ps-4 shadow' >
            <div className='d-flex'>
              <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp" className='rounded' width={'80px'} height={'80px'} alt="" />
              <div className='ms-3 mt-1'>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <span style={{fontWeight:'600'}}>Signature Hot Chocolate</span><br />
                <span style={{fontWeight:'100', fontSize:'10px',fontFamily:'Pike_Regular, Helvetica, sans-serif',letterSpacing:'-0.5px'}}>SHORT(237 mL) .284 kcal</span>
              </div>
            </div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <span className='fw-bold'>₹309.<span style={{fontSize:'12px'}}>75</span></span>
                <button className='btn rounded-pill text-light' style={{backgroundColor:'rgb(0 117 74)',fontWeight:'600',fontSize:'14px'}}>Add Item</button>
              </div>
          </div>
          <div className='bg-light rounded p-3 ps-4 shadow' >
            <div className='d-flex'>
              <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/112573.webp" className='rounded' width={'80px'} height={'80px'} alt="" />
              <div className='ms-3 mt-1'>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <span style={{fontWeight:'600'}}>Vanilla Milkshake</span><br />
                <span style={{fontWeight:'100', fontSize:'10px',fontFamily:'Pike_Regular, Helvetica, sans-serif',letterSpacing:'-0.5px'}}>TALL(354 mL) .PER SERVE (354ml) - 531 Kcal</span>
              </div>
            </div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <span className='fw-bold'>₹350.<span style={{fontSize:'12px'}}>50</span></span>
                <button className='btn rounded-pill text-light' style={{backgroundColor:'rgb(0 117 74)',fontWeight:'600',fontSize:'14px'}}>Add Item</button>
              </div>
          </div>
          <div className='bg-light rounded p-3 ps-4 shadow' >
            <div className='d-flex'>
              <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104997.webp" className='rounded' width={'80px'} height={'80px'} alt="" />
              <div className='ms-3 mt-1'>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <span style={{fontWeight:'600'}}>Cold Brew Black</span><br />
                <span style={{fontWeight:'100', fontSize:'10px',fontFamily:'Pike_Regular, Helvetica, sans-serif',letterSpacing:'-0.5px'}}>SHORT(Short Cold Brew Black) .</span>
              </div>
            </div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <span className='fw-bold'>₹299.<span style={{fontSize:'12px'}}>25</span></span>
                <button className='btn rounded-pill text-light' style={{backgroundColor:'rgb(0 117 74)',fontWeight:'600',fontSize:'14px'}}>Add Item</button>
              </div>
          </div>
          <div className='bg-light rounded p-3 ps-4 shadow' >
            <div className='d-flex'>
              <img src="https://www.starbucks.in/assets/icon/placeholder.webp" className='rounded' width={'80px'} height={'80px'} alt="" />
              <div className='ms-3 mt-1'>
                <img src="https://www.starbucks.in/assets/icon/veg.svg" alt="" />
                <span style={{fontWeight:'600'}}>Tall Java Chip Frappuccino</span><br />
                <span style={{fontWeight:'100', fontSize:'10px',fontFamily:'Pike_Regular, Helvetica, sans-serif',letterSpacing:'-0.5px'}}>TALL() .</span>
              </div>
            </div>
            <div className='d-flex justify-content-between mt-3 align-items-center'>
                <span className='fw-bold'>₹388.<span style={{fontSize:'12px'}}>50</span></span>
                <button className='btn rounded-pill text-light' style={{backgroundColor:'rgb(0 117 74)',fontWeight:'600',fontSize:'14px'}}>Add Item</button>
              </div>
          </div>
            </Slider>
          </div>
        </div>
        </div>
      </div>

      <div className='mt-5 pb-md-4 last'style={{backgroundColor:'rgb(237 235 233)',position:'relative'}}>
      <div className='px-md-5 px-2'>
        <div className='mt-4 px-md-5'>
          <div className='d-flex pt-4 mb-4'>
            <h4 className='fw-bold'>Learn more about the world of coffee!</h4>
            <span className='ms-auto fw-bold' style={{color:'rgb(0, 117, 74)',fontSize:'12px'}}>Discover More</span>
          </div>
          <div className='rounded mx-3' style={{backgroundImage:'url(https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg)',backgroundSize:'cover', backgroundPosition:"center",height:'380px'}}>
          <div className='black rounded p-4 d-flex flex-column'>
            <div className='px-1 rounded-1 fw-bold' style={{backgroundColor:'rgb(237 235 233)', width:'max-content',fontSize:'9px',color:'rgb(18, 138, 94)'}}>Coffee Culture</div>
            <div className='text-light mt-auto'>
              <h2 className='ms-1'>Art & Science Of Coffee Brewing</h2>
              <p className='ms-1'>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
              <button className='btn btn-light rounded-pill px-5 py-2 fw-bold mt-4' style={{color:'rgb(0, 117, 74)',fontSize:'12px'}}>Learn More</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Home