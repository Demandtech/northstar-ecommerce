import React from 'react'
import styled from 'styled-components'
import heroBg from '../assets/images/contact-hero-bg.jpeg'
import { ContactForm } from '../components'

const Contact = () => {
  
  return (
    <Wrapper>
      <div className='hero'>
        <div className='hero-content'>
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className='section'>
        <div className='contact-form'>
          <div className='contact-header'>
            <h2>We would love to hear from you.</h2>
            <p>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
          </div>
         <ContactForm />
        </div>
        <div className='left-contact'>
          <div>
            <h4>Visit Us</h4>
            <p>
              UET Lahore, Punjab, Pakistan <br /> Phone: +923039898987
            </p>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <p>
              You can get in touch with us on this provided email.
              <br />
              Email: hmjawad087@gmail.com
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-top: 70px;

  .hero {
    background: url(${heroBg});
    background-size: cover;
    background-position: center;
    min-height: calc(50vh - 70px);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: end;

    .hero-content {
      padding-left: 1rem;
      padding-bottom: 2rem;

      h2 {
        font-weight: 400;
        font-size: 2rem;
        line-height: 48px;
        color: #ffffff;
        text-transform: uppercase;
      }
    }
  }
  .section {
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem;

    .contact-form {
      .contact-header {
        margin-bottom: 2rem;
        h2 {
          font-family: 'Arimo', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          line-height: 48px;
          color: #3a3939;
          padding-bottom: 1.5rem;
        }
        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 19px;
          color: #555555;
          font-family: 'Lato', sans-serif;
        }
      }
    }
    .left-contact {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 3rem;
      h4 {
        font-weight: 700;
        font-size: 24px;
        line-height: 48px;
        font-family: 'Arimo', sans-serif;
      }
      p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #555555;
      }
    }
  }

  @media screen and (min-width: 480px) {
    .hero {
      .hero-content {
        padding-left: 2rem;
      }
    }
    .section {
      padding: 4rem 2rem;

      .contact-form {
      }

      .left-contact {
        flex-direction: row;
      }
    }
  }

  @media screen and (min-width: 780px) {
    .hero {
      justify-content: flex-start;
      align-items: end;
    }

    .section {
      padding: 4rem;
      gap: 3rem;
      flex-direction: row;

      .contact-form {
        flex-grow: 1;
      }

      .left-contact {
        margin-top: 0;
        flex-grow: 0;
        flex-direction: column;
      }
    }
  }
`

export default Contact
