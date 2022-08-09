import Head from 'next/head'
import Image from 'next/image'
// import styles from './css/style.css'
import Link from 'next/link'
import shop01 from "../pages/img/shop01.png"
import shop02 from "../pages/img/shop02.png"
import shop03 from "../pages/img/shop03.png"
import product06 from "../pages/img/product06.png"
import logo from "../pages/img/logo.png"


export default function Home() {
  return (
    <>

      <Head>
        {/* <meta charset="utf-8" /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> */}

        <title>Electro - HTML Ecommerce Template</title>



        {/* <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
                <!-- WARNING: Respond.js doesn't work if you view the page via file:// --> */}
        {/* <!--[if lt IE 9]> */}
        {/*  */}
        {/* <![endif]--> */}

      </Head>
      <body>
        {/* <!-- HEADER --> */}
        <header>
          {/* <!-- TOP HEADER --> */}
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li><a href="#"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
                <li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
                <li><a href="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
              </ul>
              <ul className="header-links pull-right">
                <li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
                <li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
              </ul>
            </div>
          </div>
          {/* <!-- /TOP HEADER --> */}

          {/* <!-- MAIN HEADER --> */}
          <div id="header">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                {/* <!-- LOGO --> */}
                <div className="col-md-3">
                  <div className="header-logo">
                    <a href="#" className="logo">
                      <Image src={logo} alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- /LOGO -->

                        <!-- SEARCH BAR --> */}
                <div className="col-md-6">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                      </select>
                      <input className="input" placeholder="Search here" />
                      <button className="search-btn">Search</button>
                    </form>
                  </div>
                </div>
                {/* <!-- /SEARCH BAR -->

                        <!-- ACCOUNT --> */}
                <div className="col-md-3 clearfix">
                  <div className="header-ctn">
                    {/* <!-- Wishlist --> */}
                    <div>
                      <a href="#">
                        <i className="fa fa-heart-o"></i>
                        <span>Your Wishlist</span>
                        <div className="qty">2</div>
                      </a>
                    </div>
                    {/* <!-- /Wishlist -->

                            <!-- Cart --> */}
                    <div className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <i className="fa fa-shopping-cart"></i>
                        <span>Your Cart</span>
                        <div className="qty">3</div>
                      </a>
                      <div className="cart-dropdown">
                        <div className="cart-list">
                          <div className="product-widget">
                            <div className="product-Image ">
                              <Image src={shop01} alt="" />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name"><a href="#">product name goes here</a></h3>
                              <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close"></i></button>
                          </div>

                          <div className="product-widget">
                            <div className="product-Image ">
                              <Image src={shop01} alt="" />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name"><a href="#">product name goes here</a></h3>
                              <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close"></i></button>
                          </div>
                        </div>
                        <div className="cart-summary">
                          <small>3 Item(s) selected</small>
                          <h5>SUBTOTAL: $2940.00</h5>
                        </div>
                        <div className="cart-btns">
                          <a href="#">View Cart</a>
                          <a href="#">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /Cart -->

                            <!-- Menu Toogle --> */}
                    <div className="menu-toggle">
                      <a href="#">
                        <i className="fa fa-bars"></i>
                        <span>Menu</span>
                      </a>
                    </div>
                    {/* <!-- /Menu Toogle --> */}
                  </div>
                </div>
                {/* <!-- /ACCOUNT --> */}
              </div>
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- /MAIN HEADER --> */}
        </header>
        {/* <!-- /HEADER -->

                <!-- NAVIGATION --> */}
        <nav id="navigation">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- responsive-nav --> */}
            <div id="responsive-nav">
              {/* <!-- NAV --> */}
              <ul className="main-nav nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Hot Deals</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Cameras</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
              {/* <!-- /NAV --> */}
            </div>
            {/* <!-- /responsive-nav --> */}
          </div>
          {/* <!-- /container --> */}
        </nav>
        {/* <!-- /NAVIGATION -->

                <!-- SECTION --> */}
        <div className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              {/* <!-- shop --> */}
              <div className="col-md-4 col-xs-6">
                <div className="shop" style={{
                  // position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '0px',
                  // width: '60%',
                  background: '#D10024',
                  opacity: 0.9,
                }}>
                  <div className="shop-Image" style={{
                    // position: 'relative',

                    backgroundColor: '#E4E7ED',
                    zIndex: '-1'
                  }}>
                    <Image src={shop01} alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>Laptop<br />Collection</h3>
                    <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- /shop -->

                      <!-- shop --> */}
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-Image ">
                    <Image src={shop03} alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>Accessories<br />Collection</h3>
                    <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- /shop -->

                      <!-- shop --> */}
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-Image ">
                    <Image src={shop02} alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>Cameras<br />Collection</h3>
                    <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
              {/* <!-- /shop --> */}
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /SECTION -->

                <!-- SECTION --> */}
        <div className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">

              {/* <!-- section title --> */}
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="title">New Products</h3>
                  <div className="section-nav">
                    <ul className="section-tab-nav tab-nav">
                      <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                      <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                      <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                      <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- /section title -->

                      <!-- Products tab & slick --> */}
              <div className="col-md-12">
                <div style={{ display: 'flex', }}>

                  <div className="product" style={{ width: '263px', marginLeft: '20px', height: 'fit-content' }}>
                    <div className="product-Image ">
                      <Image src={product06} alt="" />
                      <div className="product-label" >
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px'
                        }}>-30%</span>
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          left: '15px'
                        }}>NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                  <div className="product" style={{ width: '263px', marginLeft: '20px', height: 'fit-content' }}>
                    <div className="product-Image ">
                      <Image src={product06} alt="" />
                      <div className="product-label" >
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px'
                        }}>-30%</span>
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          left: '15px'
                        }}>NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                  <div className="product" style={{ width: '263px', marginLeft: '20px', height: 'fit-content' }}>
                    <div className="product-Image ">
                      <Image src={product06} alt="" />
                      <div className="product-label" >
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px'
                        }}>-30%</span>
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          left: '15px'
                        }}>NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                  <div className="product" style={{ width: '263px', marginLeft: '20px', height: 'fit-content' }}>
                    <div className="product-Image ">
                      <Image src={product06} alt="" />
                      <div className="product-label" >
                        <span style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          backgroundColor: ' #FFF',
                          borderColor: '#D10024',
                          color: '#D10024',
                          border: '2px solid',
                          padding: '2px 10px',
                          fontSize: '12px',

                        }}>-30%</span>
                        <span style={{


                          position: 'absolute',
                          top: '15px',
                          left: '15px',
                          backgroundColor: '#D10024',
                          borderColor: '#D10024',
                          color: '#FFF',
                          border: '2px solid',
                          padding: '2px 10px',
                          fontSize: '12px',
                        }}>NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>



                  {/* <!-- /product --> */}
                </div>
              </div>
              {/* <!-- Products tab & slick -->/ */}
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /SECTION --> */}

        {/* <!-- HOT DEAL SECTION -->/ */}
        <div id="hot-deal" className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="hot-deal">
                  <ul className="hot-deal-countdown">
                    <li>
                      <div>
                        <h3>02</h3>
                        <span>Days</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>10</h3>
                        <span>Hours</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>34</h3>
                        <span>Mins</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>60</h3>
                        <span>Secs</span>
                      </div>
                    </li>
                  </ul>
                  <h2 className="text-uppercase">hot deal this week</h2>
                  <p>New Collection Up to 50% OFF</p>
                  <a className="primary-btn cta-btn" href="#">Shop now</a>
                </div>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /HOT DEAL SECTION --> */}

        {/* <!-- SECTION --> */}
        <div className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">

              {/* <!-- section title --> */}
              <div className="col-md-12">
                <div className="section-title">
                  <h3 className="title">Top selling</h3>
                  <div className="section-nav">
                    <ul className="section-tab-nav tab-nav">
                      <li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                      <li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
                      <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                      <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- /section title -->

                      <!-- Products tab & slick --> */}
              <div className="col-md-12">
                {/* <div > */}
                <div >

                  <div>
                    {/* <!-- tab --> */}
                    <div >
                      <div style={{ display: 'flex', }}>

                        <div className="product" style={{ width: '263px' }}>
                          <div className="product-Image">
                            <Image src={product06} alt="" />
                            <div className="product-label">
                              <span className="sale">-30%</span>
                              <span className="new">NEW</span>
                            </div>
                          </div>
                          <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="product-btns">
                              <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                              <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                              <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                          </div>
                        </div>
                        <div className="product" style={{ width: '263px', marginLeft: '20px' }}>
                          <div className="product-Image ">
                            <Image src={product06} alt="" />
                            <div className="product-label">
                              <span className="sale">-30%</span>
                              <span className="new">NEW</span>
                            </div>
                          </div>
                          <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="product-btns">
                              <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                              <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                              <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                          </div>
                        </div>
                        <div className="product" style={{ width: '263px', marginLeft: '20px' }}>
                          <div className="product-Image ">
                            <Image src={product06} alt="" />
                            <div className="product-label">
                              <span className="sale">-30%</span>
                              <span className="new">NEW</span>
                            </div>
                          </div>
                          <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="product-btns">
                              <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                              <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                              <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                          </div>
                        </div>
                        <div className="product" style={{ width: '263px', marginLeft: '20px' }}>
                          <div className="product-Image ">
                            <Image src={product06} alt="" />
                            <div className="product-label">
                              <span className="sale">-30%</span>
                              <span className="new">NEW</span>
                            </div>
                          </div>
                          <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="product-btns">
                              <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                              <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                              <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                            </div>
                          </div>
                          <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                          </div>
                        </div>



                        {/* <!-- /product --> */}
                      </div>
                      <div id="slick-nav-2" className="products-slick-nav"></div>
                    </div>
                    {/* <!-- /tab --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /Products tab & slick --> */}
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /SECTION -->

                <!-- SECTION --> */}
        <div className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-4 col-xs-6">
                <div className="section-title">
                  <h4 className="title">Top selling</h4>
                  <div className="section-nav">
                    <div id="slick-nav-3" className="products-slick-nav"></div>
                  </div>
                </div>

                <div className="products-widget-slick" data-nav="#slick-nav-3">
                  <div>
                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product07.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product08.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product09.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- product widget --> */}
                  </div>

                  <div>
                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image/shop01.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image/shop01.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product03.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- product widget --> */}
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-6">
                <div className="section-title">
                  <h4 className="title">Top selling</h4>
                  <div className="section-nav">
                    <div id="slick-nav-4" className="products-slick-nav"></div>
                  </div>
                </div>

                <div className="products-widget-slick" data-nav="#slick-nav-4">
                  <div>
                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product04.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget --> */}

                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product05.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product06.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- product widget --> */}
                  </div>

                  <div>
                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product07.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget --> */}

                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product08.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product09.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- product widget --> */}
                  </div>
                </div>
              </div>

              <div className="clearfix visible-sm visible-xs"></div>

              <div className="col-md-4 col-xs-6">
                <div className="section-title">
                  <h4 className="title">Top selling</h4>
                  <div className="section-nav">
                    <div id="slick-nav-5" className="products-slick-nav"></div>
                  </div>
                </div>

                <div className="products-widget-slick" data-nav="#slick-nav-5">
                  <div>
                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image/shop01.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image/shop01.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget --> */}

                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product03.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- product widget --> */}
                  </div>

                  <div>
                    {/* <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product04.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product05.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- /product widget -->

                            <!-- product widget --> */}
                    <div className="product-widget">
                      <div className="product-Image ">
                        <Image src="/Image /product06.png" alt="" width="64" height="64" />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      </div>
                    </div>
                    {/* <!-- product widget --> */}
                  </div>
                </div>
              </div>

            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /SECTION -/-> */}

        {/* <!-- NEWSLETTER --> */}
        <div id="newsletter" className="section">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="newsletter">
                  <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
                  </form>
                  <ul className="newsletter-follow">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /NEWSLETTER --> */}

        {/* <!-- FOOTER --> */}
        <footer id="footer">
          {/* <!-- top footer --> */}
          <div className="section">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                    <ul className="footer-links">
                      <li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
                      <li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
                      <li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Categories</h3>
                    <ul className="footer-links">
                      <li><a href="#">Hot deals</a></li>
                      <li><a href="#">Laptops</a></li>
                      <li><a href="#">Smartphones</a></li>
                      <li><a href="#">Cameras</a></li>
                      <li><a href="#">Accessories</a></li>
                    </ul>
                  </div>
                </div>

                <div className="clearfix visible-xs"></div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Information</h3>
                    <ul className="footer-links">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Orders and Returns</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Service</h3>
                    <ul className="footer-links">
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">View Cart</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">Track My Order</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /top footer -->

                  <!-- bottom footer --> */}
          <div id="bottom-footer" className="section">
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="footer-payments">
                    <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                    <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
                    <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                    <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                    <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                    <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
                  </ul>
                  <span className="copyright">
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>.
                    Downloaded from <a href="https://themeslab.org/" target="_blank" rel="noreferrer">Themeslab</a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </span>
                </div>
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /bottom footer --> */}
        </footer>
        {/* <!-- /FOOTER -->

		<!-- jQuery Plugins --> */}
        {/*  */}

      </body>

    </>
  )
}
