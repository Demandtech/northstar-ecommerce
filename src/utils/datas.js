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
import topseller1 from '../assets/images/topseller-1.jpeg'
import topseller2 from '../assets/images/topseller-2.jpeg'
import topseller3 from '../assets/images/topseller-3.jpeg'
import topseller4 from '../assets/images/topseller-4.jpeg'
import founder1 from '../assets/images/founder1.jpeg'
import founder2 from '../assets/images/founder2.jpeg'
import founder3 from '../assets/images/founder3.jpeg'
import founder4 from '../assets/images/founder4.jpeg'
import quote from '../assets/svgs/quote.svg'
import testimony1 from '../assets/images/testimony1.jpeg'
import testimony2 from '../assets/images/testimony2.jpeg'

export const products = [
  {
    id: 1,
    name: 'Plain White Shirt',
    price: 29,
    img: plainwhite,
    bonus: 24,
    rating: 4.5,
    category: 'female',
    topseller: false,
  },
  {
    id: 2,
    name: 'Denim Jacket ',
    price: 69,
    img: denimjacket,
    bonus: 24,
    rating: 4.5,
    category: 'female',
    topseller: false,
  },
  {
    id: 3,
    name: 'Black Polo Shirt',
    price: 49,
    img: blackPolo,
    bonus: 24,
    rating: 4.1,
    category: 'female',
    topseller: false,
  },
  {
    id: 4,
    name: 'Blue Sweatshirt',
    price: 79,
    img: bluesweatshirt,
    bonus: 22,
    rating: 5,
    category: 'female',
    topseller: false,
  },

  {
    id: 5,
    name: 'Blue Plain Shirt',
    price: 49,
    img: blueplain,
    bonus: 21.5,
    rating: 4.5,
    category: 'male',
    topseller: false,
  },
  {
    id: 6,
    name: 'Dark Blue Shirt',
    price: 89,
    img: darkblue,
    bonus: 24,
    rating: 5,
    category: 'male',
    topseller: false,
  },
  {
    id: 7,
    name: 'Outcast T Shirt',
    price: 19,
    img: outcast,
    bonus: 15,
    rating: 5,
    category: 'male',
    topseller: false,
  },
  {
    id: 8,
    name: 'Polo Plain Shirt',
    price: 29,
    img: poloplain,
    bonus: 24,
    rating: 4.5,
    category: 'male',
    topseller: false,
  },
  {
    id: 9,
    img: topseller1,
    name: 'Gray Polo Shirt',
    price: 49,
    topseller: true,
    bonus: 24,
    rating: 4.5,
    category: 'male',
  },
  {
    id: 10,
    img: topseller2,
    name: 'Red Shirt',
    price: 69,
    topseller: true,
    bonus: 24,
    rating: 4.5,
    category: 'female',
  },
  {
    id: 11,
    img: topseller3,
    name: 'Polo White Shirt',
    price: 29,
    topseller: true,
    bonus: 24,
    rating: 4.5,
    category: 'female',
  },
  {
    id: 12,
    img: topseller4,
    name: 'Pink Casual Shirt',
    price: 39,
    topseller: true,
    bonus: 24,
    rating: 4.5,
    category: 'female',
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

export const founders = [
  {
    img: founder1,
    name: 'HM Jawad',
  },
  {
    img: founder2,
    name: 'Furqan Abid',
  },
  {
    img: founder3,
    name: 'Abdullah Ah',
  },
  {
    img: founder4,
    name: 'Abrar Khan',
  },
]

export const testimonials = [
  {
    text: 'Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.',
    name: 'Stacy',
    icon: quote,
    img: testimony1,
  },
  {
    text: 'I ordered 5 shirts from them and received them in no time. The customer support was awesome!',
    name: 'Tiffany',
    icon: quote,
    img: testimony2,
  },
  {
    text: 'I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.',
    name: 'James',
    icon: quote,
    img: poloplain,
  },
]
