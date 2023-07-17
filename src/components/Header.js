import React,{useState} from 'react'
import "./header.css"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import Nav from './Nav';
import {FaFacebookSquare} from "react-icons/fa";
import {BsTwitter,BsYoutube} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdCloseCircle} from "react-icons/io"
const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const kuck=[
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]
  const fuck=[
    {
      id:1,name:"john"
    }
  ]
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
const bar=document.getElementById('flex');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active');

  })
}
if(close){
close.addEventListener('click',()=>{
  nav.classList.remove('active');
})
}
  return (
    <>
    <div id="hear">
<section id="header">
    <a href="#"><img src="dubai.png" id="ivg"></img></a>
    </section>
<div id="navbar">
    <li><a className="active" href="#">Home</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
<li id="lg-bag"><a href="#"><img src="cart.svg" id="img"></img></a></li>
<a href="#" id="close"><IoMdCloseCircle/></a>
</div>
<div id="mobile">
      <GiHamburgerMenu id="flex" size={30} />
      <a href="#"><img src="cart.svg" id="img"></img></a>

    </div>
    </div>
    
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
        <AiOutlineArrowLeft/>        
        </div>
        <div className="icon" onClick={nextSlide}>
        <AiOutlineArrowRight/>
        </div>
      </div>
    </div>


<section id="feature" className="section-p1">
<div className='fe-box'>
<img src="img/g1.png" alt="" id="fk"/>
<h6 id="jk" >
  Free Shipping
</h6>
</div>
<div className='fe-box'>
<img src="img/download.jpg" alt="" id="fk"/>
<h6 id="jk" >
  Free Shipping
</h6>
</div>
<div className='fe-box'>
<img src="img/huge.jpg" alt="" id="fk"/>
<h6 id="jk" >
  Free Shipping
</h6>
</div>
<div className='fe-box'>
<img src="img/sale.jpg" alt="" id="fk"/>
<h6 id="jk" >
  Free Shipping
</h6>
</div>
</section>
<section id="product1" className="section-p1">
<h2>Featured Products</h2>
<p>Summer Collection New Modern Designs</p>
<div className="pro-container">
  <div className="pro">
<img src="img/images.jpg"/>
<div className="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div className="star">
    <img src="img/a.png"/>
  </div>
  
  
  < h4 class="hw">$78</h4>
</div>
</div>

<div className="pro">
<img src="img/14.jpg" id="i21"/>
<div className="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div className="star">
    <img src="img/a.png"/>
  </div>
  <h4>$78</h4>
</div>
</div>
<div className="pro">
<img src="img/12.jpg"/>
<div className="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div class="star">
    <img src="img/a.png"/>
    <h4>$78</h4>
  </div>
  </div>
</div>
<div className="pro" id="lux">
<img src="img/15.jpg"/>
<div className="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div className="star">
    <img src="img/a.png"/>
    <h4>$78</h4>
  </div>
  </div>
</div>
<div className="pro" id="lux">
<img src="img/14.jpg"/>
<div class="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div class="star">
    <img src="img/a.png"/>
    <h4>$78</h4>
  </div>
  </div>
</div>
<div class="pro" id="lux">
<img src="img/15.jpg"/>
<div class="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div class="star">
    <img src="img/a.png"/>
    <h4>$78</h4>
  </div>
  </div>
</div>


  </div>


</section>
    <section id="banner" className='section-m1'>
      <h4 >Repair Services</h4>
    <h2>Up to  <span>70% Off </span>All T-shirts & Accsessories </h2>
    <button className='normal'>Explore More</button>
    </section>
    <section id="product1" class="section-p1">
<h2>Featured Products</h2>
<p>Summer Collection New Modern Designs</p>
<div class="pro-container" id ="cd">
  <div class="pro">
<img src="img/t3.jpg"/>
<div class="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div class="star">
    <img src="img/a.png"/>
  </div>
  
  
  < h4 class="hw">$78</h4>
</div>
</div>

<div class="pro">
<img src="img/t5.jpg" id="i21"/>
<div class="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div class="star">
    <img src="img/a.png"/>
  </div>
  <h4>$78</h4>
</div>
</div>
<div class="pro">
<img src="img/t4.jpg"/>
<div class="des">
  <span>Adidas</span>
  <h5>Cartoon Astronaut T-shirts</h5>
  <div class="star">
    <img src="img/a.png"/>
    <h4>$78</h4>
  </div>
  </div>
</div>
</div>
</section>
<section id="sm-banner" className="section-p2">
<div className='banner-box'>
  <h4>
    Crazy Deals
  </h4>
  <h2>Upcoming Deals</h2>
<p>lorem50fafafaskllj
</p>
<button id="normal" className='normal'>Learn More</button>

</div>
<div className='banner-box2'>
  <h4>
    Crazy Deals
  </h4>
  <h2>Upcoming Deals</h2>
<p>lorem50fafafaskllj
</p>
<button id="normal" className='normal'>Learn More</button>
</div>
</section>
<section id="banner3">
<div class="banner-box">
  <h2>upcoming season</h2>
  <h3>Winter Collection Off</h3>
</div>
<div className="banner-box2">
  <h2>upcoming season</h2>
  <h3>Winter Collection Off</h3>
</div>
<div class="banner-box3">
  <h2>upcoming season</h2>
  <h3>Winter Collection Off</h3>
</div>

</section>
<section id="newsletter" className='section-p1 section-m1' >
<div className='newstext'>
<h4>Sign for the Newsletter</h4>
<p>Get E-mail updates about our latest shop and <span>special offers</span></p>
</div>
<div class="form">
<input type="text" placeholder="Your email Addreess"/>
  <button className='normal'>
    Sign Up
  </button>
</div>
</section>
<footer className='section-p1'>
  <div className='col'>
    <img src="dubai.png" className='logo' alt=""/>
    <h4>Contact</h4>
<p><strong>Address:</strong> Mangalnagar BhawarKua Indore</p>
<p><strong>Phone:</strong> 9090990909</p>
<p><strong>Hours:</strong> 10:00 -18:00,Mon-Sat</p>
<div className='follow'>
<h4>Follow Us</h4>
<div className='icon'>
  <FaFacebookSquare className='wo'/>
  <BsTwitter className='wo'/>
  <FiInstagram className='wo'/>
  <BsYoutube className='wo'/>
</div>
<div className='fcopywright' id="pop">
<p>2021, Tech2 etc-HTML CSS JS REACT Ecommerce Web App </p>
</div>
</div>
  </div>
<div className='col'>
<h4>About</h4>
<a href="#">About Us</a>
<a href="#">Services</a>
<a href="#">T & C</a>
<a href="#">Contact Us</a>
</div>
<div className='col'>
<h4>My Account</h4>
<a href="#">Sign In</a>
<a href="#">view cart</a>
<a href="#">My WishList</a>
<a href="#">Contact Us</a>
</div>
<div className='col install'>
<h4>Install App</h4>
<p>From App Store</p>
<div className='row'>
  <img src="img/app.jpg"/>
  <img src="img/play.jpg"/>
</div>
<p>Secured Payment Gateways</p>
<img src="img/pay.png"/>
</div>

</footer>
</>
  )
}
export default Header