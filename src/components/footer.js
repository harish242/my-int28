import React from 'react'
import '../styles/footer.css'
export default function Footer(){
    return (
        <div className='footer'>
            <div id='contact'>
                <div>Contact Us</div>
                <ul>
                    <li>Toll Free Customer Care</li>
                    <li style={{color:'blue'}}>+(1) 123 456 7890</li>
                </ul>
            </div>
            <div id="company">
            <div>Company</div>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div id='support'>
            <div>Support</div>
                <ul>
                    <li>Contact</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
            <div id='otherservices'>
            <div>Other Srvices</div>
                <ul>
                    <li>Car hire</li>
                    <li>Activity Finder</li>
                </ul>
            </div>
            <div id='moblie'>
            <div>Mobile</div>
                <ul>
                    <li>Apple</li>
                    <li>Samsung</li>
                </ul>
            </div>
        </div>
    )
}