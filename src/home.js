
import './App.css';

import headBg from './assets/WhiteBG_Top.svg'
import Logo from './assets/Logo.svg'
import leftArrow from './assets/Icon_Caret.svg'
import freshDay from './assets/Title.svg'
import Qr from './assets/QR.jpg'
import HIT1 from './assets/HowItWorks1.svg'
import HIT2 from './assets/HowItWorks2.svg'
import HIT3 from './assets/HowItWorks3.svg'
import subs from './assets/HowItWorks1.png'
import calendar from './assets/HowItWorks3.png'
import hit2 from './assets/HowItWorks2.png'
import hit4 from './assets/HowItWorks4.png'
import cart from './assets/Products.png'
import cart1 from './assets/Mobile/Products.png'
import Easy from './assets/ITsThatEasy.png'
import orderTime from './assets/OrderTime.png'
import hand from './assets/Icon_Hand.svg'
import appstore from './assets/appstore.png'
import googleplay from './assets/google+(1).png'
import mOrderTime from './assets/Mobile/Graphic_Mobile.png'
import footerBG from './assets/footerBG.png'
function Home() {

  return (
    <>
      <div className="container">
        <div className="Main">
          <div className="head">
            <img src={headBg} alt="" className="headBg" />
            <div className="headNav">
              <img src={Logo} className="Logo" />
              <p className="margin"><a href="#HIT">How it works</a></p>
              <img src={leftArrow} className="leftArrow margin" />
              <p className="margin"><a href="#Cart">Subscriptions</a></p>
              <img src={leftArrow} className="leftArrow margin" />
              <p className="margin"><a href="#DO">Delivery Options</a></p>
            </div>
          </div>
          <div className="FreshDay">
            <div className="FreshDaySec1">
              <img className="FreshDayImg" src={freshDay} />
              <p className="FreshDayP1">Presenting MB Daily by Mast Bazaar.</p>
              <p className="FreshDayP1"> One app for all your grocery needs!</p>
              <p className="FreshDayP2">Trusted by thousands of families,delivering over  <span>20,000</span> groceries and household items right to your doorstep..</p>
              <div className="QrDiv">
                <img src={Qr} alt="" />
                <div className="QrContent">
                  <p className="FreshDayP4">Join the countless satisfied customers who have chosen MB Daily for their grocery needs</p>
                  <p className="FreshDayP3"> <span>SCAN THE QR </span>TO DOWNLOAD THE App </p>
                </div>
              </div>
            </div>
            <div className="FreshDaySec2"></div>
          </div>
          <div className="HIT" id="HIT">
            <div className="HITdiv">
              <p className="HITtittle">How It Works</p>
              <div className="HITsec1">
                <img className='HITicon' src={HIT1} />
                <img className='HITleft' src={leftArrow} />
                <img className='HITicon' src={HIT2} />
                <img className='HITleft' src={leftArrow} />
                <img className='HITicon' src={HIT3} />
              </div>
              <div className="HITname">
                <p>Select</p>
                <p>Checkout</p>
                <p>Deliver</p>
              </div>
              <img className="calendar" src={calendar} />
              <p className="HITP1">Get ready for the easiest shopping experience with MB Daily! </p>

              <div className="HITsubs">
                <img className="hit4" src={hit4} />
                <div className="HITsubsImg">
                  <img src={subs} />
                </div>
                <div className='HITsubsContent'>
                  <p className="HITsubsP1">Order Right Away.</p>
                  <p className="HITsubsP2">Your Way.</p>
                  <p className="HITsubsP3">Choose to have your items delivered on a one-time basis or set up a subscription for daily deliveries. <br></br>Whether you're looking for milk, veggies, eggs, snacks, or cleaning supplies, we've got you covered with a wide range of products.</p>
                </div>
              </div>
            </div>
          </div>
          <img className="hit2" src={hit2} />
        </div>
        <div className="Cart" id="Cart">
          <img className="CartImg1" src={cart} />
          <div className="CartSec2">
            <p className="CartSec2p1">Subscriptions</p>
            <p className="CartSec2p2">NEVER RUN OUT OF <span>GROCERIES</span> </p>
            <p className="CartSec2p3">Do you need milk, bread, or monthly staples but forget to reorder them again and again? No problem!<br></br>With MB Daily subscriptions, place an order once and get your products delivered every day by 7 AM.  </p>
            <p className="CartSec2p3">Customize your delivery schedule, choose the frequency of your deliveries, and enjoy discounts on your purchases.</p>
            <br></br>
            <img src={Easy} />
          </div>
        </div>
        <div className="orderTime" id="DO">
          <div className="orderTimesec1">
            <p className="orderTimesec1p1">Delivery Options</p>
            <p className="orderTimesec1p2">PLACE YOUR ORDER <span>BEFORE 10 PM</span> AND GET NEXT DAY DELIVERY</p>
            <p className="orderTimesec1p3">Forgot to order the magic ingredient for your lunch? NO PROBLEM!<br></br> We offer flexible delivery options to fit your needs. Order before 10 PM and choose the delivery slot that works best for you. We'll ensure that your groceries arrive on time.</p>
            <p className="orderTimesec1p4">No more rushing to the grocery store or worrying about running out of essentials.</p>
          </div>
          <div className="orderTimesec2">
            <img src={orderTime} />
          </div>
        </div>
        <div className="Main">
          <div className="signup">
            <p className="signupP1">Enjoy the convenience of having your groceries delivered straight to your doorstep with <span>MB Daily</span> by Mast Bazaar!</p>
           {/* <p className="signupP2"><a href="https://mastbazaar.page.link/dmCn" target='_blank'>Download the APP <span> Now</span><img src={hand}/></a> </p>*/ }
          </div>
          <div className="download">
            <a href="https://apps.apple.com/in/app/mb-daily/id1504797669" target="_blank">
              <img src={appstore} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mastbazaar.app" target="_blank"><img src={googleplay} /></a>
          </div>
        </div>
        <div className="footer">
          <div className="contact">
            <p>Contact Support <a href="tel:+918069451366"> +91 806 945 1366</a></p>

          </div>
          <div className="footerLogo">
            <img src={Logo} />
            <p className="rights">2023, Mast Bazaar. All rights reserved</p>
          </div>
          <div className="foterNav">
            <p><a href="https://mastbazaar.com/privacy-policy-cookie" target="_blank">Privacy Policy</a></p>
            <p> <a href="/terms" >Terms & Conditions</a></p>
          </div>
        </div >
      </div >


      {/* mobile view*/ }
      <div className="mContainer">
        <div className="mhead">
          <div className="mheadNav">
            <img src={Logo} className="mLogo" />
          </div>
        </div>
        <div className="sbag"></div>
        <div className="mMain">
          <img className="mFreshDayImg" src={freshDay} />
          <p className="mFreshDayP1">Presenting MB Daily by Mast Bazaar. Your one-stop-shop for hassle-free grocery shopping!</p>
          <p className="mFreshDayP2">Trusted by thousands of families with over <span>20,000</span> groceries and household items available for delivery - straight to your doorstep. </p>
          <div className="mDownloadNow">
            <p className="mDownloadP1">DOWNLOAD THE APP <span>NOW</span></p>
            <p className="mDownloadP2">Don't wait any longer to join the countless satisfied customers who have chosen MB Daily for their grocery needs</p>
            <div className="mDowloadImg">
            <a href="https://apps.apple.com/in/app/mb-daily/id1504797669" target="_blank"> <img src={appstore} /></a>
            <a href="https://play.google.com/store/apps/details?id=com.mastbazaar.app" target="_blank"> <img src={googleplay} /></a>
            </div>
          </div>
          <div className="mHIT">
            <p className="mHITtittle">How It Works</p>
            <div className="mHITsec1">
              <img className='mHITicon' src={HIT1} />
              <img className='mHITleft' src={leftArrow} />
              <img className='mHITicon' src={HIT2} />
              <img className='mHITleft' src={leftArrow} />
              <img className='mHITicon' src={HIT3} />
            </div>
            <div className="mHITname">
              <p>Select</p>
              <p>Checkout</p>
              <p>Deliver</p>
            </div>
            <p className="mHITp3">Get ready for the easiest grocery experience of your life with MB Daily!</p>
            <p className="mHITp4">Just create an account, add items to your cart, and checkout - it's that simple. Whether you're looking for fresh produce, dairy products, snacks, beverages, or cleaning supplies, we've got you covered with a wide range of options.</p>
            <img className="HIT1img" src={subs} />
            <p className="mHITp5">Order Right Away. <br></br><span>Your Way.</span></p>
            <p className="mHITp6">Choose to have your items delivered on a one-time basis or set up a subscription for daily deliveries. Whether you're looking for milk, veggies, eggs, snacks, or cleaning supplies, we've got you covered with a wide range of products.</p>
          </div>
          <p className="msubs">Subscriptions</p>
          <p className="msubsP2">NEVER RUN OUT <br></br> OF <span>GROCERIES</span><br></br> ANYMORE</p>

        </div>
        <img className="mCart" src={cart1} />
        <div className="mMain">
          <p className="mIESp1">Do you need milk, bread, or monthly staples but forget to reorder them again and again? No problem! With MB Daily subscriptions, simply order once and get them delivered every day by 7 AM</p>
          <img className="mIESimg" src={Easy} />
          <p className="mIESp1">Customize your delivery schedule, choose the frequency of your deliveries, and enjoy discounts on your purchases. Say goodbye to the hassle of constantly reordering your groceries.</p>
          <div className="mOrder">
            <p className="mHITtittle">Delivery Options</p>
            <p className="mHITp10">PLACE YOUR ORDER <span>BEFORE 10 PM </span> <br></br>AND GET NEXT DAY DELIVERY </p>
         <p className="mHITp6">Forgot to order the magic ingredient for your lunch? NO PROBLEM! We offer flexible delivery options to fit your needs. Order before 10 PM and choose the delivery slot that works best for you. We'll ensure that your groceries arrive on time.</p>
         <p className="mHITp3">No more rushing to the grocery store or worrying about running out of essentials - let us take care of everything for you.</p>
         <img  className="mOrderImg"src={mOrderTime} />
          </div>
          <p className="mIESp1">Enjoy the convenience of having your groceries delivered straight to your doorstep with <span>MB Daily</span> by Mast Bazaar!</p>
          {/* <p className="msignupP2"><a href="https://mastbazaar.page.link/dmCn" target='_blank'>Download the APP <span> Now</span><img src={hand} /></a></p> */}
          <div className="mdownload">
            <a href="https://apps.apple.com/in/app/mb-daily/id1504797669" target="_blank">
              <img src={appstore} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mastbazaar.app" target="_blank"><img src={googleplay} /></a>
          </div>
        </div>
        <div className="mFooter">
        <img src={Logo} className="mLogo" />
        <p><a href="https://mastbazaar.com/privacy-policy-cookie" target="_blank">Privacy Policy</a></p>
            <p> <a href="https://mastbazaar.com/terms-and-conditions" >Terms & Conditions</a></p>
        <p>Contact Support <a href="tel:+918069451366"><br></br> +91 806 945 1366</a></p>
        <p className="rights">2023, Mast Bazaar. All rights reserved</p>
        </div>
      </div>

    </>
  );
}

export default Home;
