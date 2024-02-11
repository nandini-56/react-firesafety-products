import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='info1'>
          <div className='logo-division'>
            <img src="/images/logo2.png" alt="image"/> 
          </div>
          <div className='para_div'>
          <p className='add-lock'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident</p>
          </div>
        </div>
        <div className='info2'>
          <div className='email-dummy'>
            <p className='mail'>dummy@gmail.com</p>
          </div>
          <div className='address'>
             <p className='location'>Unicare Fire Safety (India) Pvt. Ltd.C-34, Sector 65, Noida-201301, Delhi (NCR), (U.P).</p>
          </div>
    
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='logo-div'>
          <div className='company-logo'>
            <img src="/images/facebook2.png" alt="company-tags"/> 
          </div>
        </div>
        <div>
          <div className='copyright'>
          <p>© 2021 - DummyCompany</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
