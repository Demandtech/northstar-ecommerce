import blackPolo from '../assets/images/blackpolo.jpeg'
import bluesweatshirt from '../assets/images/bluesweatshirt.jpeg'
import denimjacket from '../assets/images/denimjacket.jpeg'
import plainwhite from '../assets/images/plainwhite.jpeg'
import blueplain from '../assets/images/blueplain.jpeg'
import darkblue from '../assets/images/darkblue.jpeg'
import outcast from '../assets/images/outcast.jpeg'
import poloplain from '../assets/images/poloplain.jpeg'
import shippingIcon from '../assets/svgs/shipping.svg'
import supportIcon from '../assets/svgs/ubuntu.svg'
import returnIcon from '../assets/svgs/return.svg'
import secureIcon from '../assets/svgs/secure.svg'

export const newArrival = [
  {
    women: [
      { id: 1, name: 'Plain White Shirt', price: 29, img: plainwhite },
      { id: 2, name: 'Denim Jacket ', price: 69, img: denimjacket },
      { id: 3, name: 'Black Polo Shirt', price: 49, img: blackPolo },
      { id: 4, name: 'Blue Sweatshirt', price: 79, img: bluesweatshirt },
    ],
  },
  {
    men: [
      {id:5, name: 'Blue Plain Shirt', price: 49, img: blueplain },
      {id:6, name: 'Dark Blue Shirt', price: 89 , img: darkblue},
      {id:7, name: 'Outcast T Shirt', price: 19, img:outcast },
      {id:8, name: 'Polo Plain Shirt', price: 29, img:poloplain },
    ],
  },
]

export const benefits = [
  {
    icon: shippingIcon,
    title: 'Free Shipping',
    text: 'Enjoy free shipping on all orders above $100',
  },
  {
    icon: supportIcon,
    title: 'SUPPORT 24/7',
    text: 'Our support team is there to help you for queries',
  },
  {
    icon: returnIcon,
    title: '30 DAYS RETURN',
    text: 'Simply return it within 30 days for an exchange.',
  },
  {
    icon: secureIcon,
    title: '100% PAYMENT SECURE',
    text: 'Our payments are secured with 256 bit encryption',
  },
]

