import React from 'react'
import  "./Footer.css"
import "./Navbar.css"
import { Box, Button,useColorMode } from '@chakra-ui/react'
import footerImg from "../images/footer.svg"
import bookImg from "../images/book.jpg"
import footerDark from "../images/footerDark.svg"
import logo from "../images/logo.png"
import logoDark from "../images/light.png"
import apple from "../images/applestore.png"
import playStore from "../images/playstore.png"

 const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className = "footer">
       {/* <div className={colorMode==='light' ? 'footerIntro' : "footerIntroDark"} id="footerIntro">
            <div id='footerIntroData'>
            <h1 id='footerh1'>Be the first to know about <span style={{fontWeight:"bold"}}>crypto news every day</span></h1>
            <p id='footerP'>Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
            <Button colorScheme={"messenger"} id="footerSubscribeBtn">Subscribe Now</Button>
            </div>
        <div>
            <img className='imgFooter' src={bookImg} alt="" />
        </div> 
       </div> */}
       <div id="footerContent">
           <div id='footerList'>
               <div id='footerLogo'>
                   {/* <img src={colorMode==="light" ? logo : logoDark} alt="logo" /> */}
                   <Box className='logo' fontFamily={"Fredoka"} fontWeight={"bold"} fontSize={"3xl"}>Bookish Journey</Box>
               </div>
               <div id='footerData'>
                    <div id='listBox'>
                        <h1>Products</h1>
                        <p>Blockchain Explorer</p>
                        <p>Crypto API</p>
                        <p>Crypto Indices</p>
                        <p>Doodles</p>
                        <p>Job Board</p>
                        <p>Sitemap</p>
                    </div>
                    <div id='listBox'>
                        <h1>Company</h1>
                        <p>About Us</p>
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Community Rules</p>
                        <p>Disclamer</p>
                        <p>Methodology</p>
                        <p>Careers</p>
                    </div>
                    <div id='listBox'>
                        <h1>Support</h1>
                        <p>Request Form</p>
                        <p>Contact Support</p>
                        <p>FAQ</p>
                        <p>Glossary</p>
                    </div>
                    <div id='listBox'>
                        <h1>Socials</h1>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Telegram</p>
                        <p>Instagram</p>
                        <p>Interactive Chat</p>
                    </div>
               </div>
           </div>
       </div>
       <div id='footerDownload'>
           <div id='footerPtag'>
                <p>© 2023 CoinMarketCap. All rights reserved</p>
           </div>
           <div id='appStore'>
            <div id='apple'>
                <img src={apple} alt="" />
            </div>
               <div id='google'>
                   <img src={playStore} alt="" />
               </div> 
           </div>
       </div>
    </div>
  )
}


export default Footer;