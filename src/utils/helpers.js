export const formatPrice = (num) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }
  return num?.toLocaleString('en-Us', options)
}

export const formatTime = (str) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  return new Date(str).toLocaleString('en-us', options)
}

export const checkInput = (event, inputsError, setInputsError, newUser) => {
  let name = event.target.name
  let value = event.target.value.trim()

  switch (name) {
    case 'fname':
      if (value == '') {
        setInputsError({
          ...inputsError,
          fname: 'Fist name can not be blank',
        })
      } else if (/\d/.test(value)) {
        setInputsError({
          ...inputsError,
          fname: 'First name can not contain number',
        })
      } else {
        setInputsError({
          ...inputsError,
          fname: '',
        })
      }
      break
    case 'lname':
      if (value == '') {
        setInputsError({
          ...inputsError,
          lname: 'Last name can not be blank',
        })
      } else if (/\d/.test(value)) {
        setInputsError({
          ...inputsError,
          lname: 'Last name can not contain number',
        })
      } else {
        setInputsError({
          ...inputsError,
          lname: '',
        })
      }
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (value == '') {
        setInputsError({
          ...inputsError,
          email: 'Email can not be blank',
        })
      } else if (!emailRegex.test(value)) {
        setInputsError({
          ...inputsError,
          email: 'Wrong email format',
        })
      } else {
        setInputsError({
          ...inputsError,
          email: '',
        })
      }
      break
    case 'pass1':
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

      if (value == '') {
        setInputsError({
          ...inputsError,
          pass1: 'Password can not be blank',
        })
      } else if (!passwordRegex.test(value)) {
        setInputsError({
          ...inputsError,
          pass1: 'Choose strong password',
        })
      } else {
        setInputsError({
          ...inputsError,
          pass1: '',
        })
      }
      break
    case 'pass2':
      if (value == '') {
        setInputsError({
          ...inputsError,
          pass2: 'Password can not be blank',
        })
      } else if (newUser.pass1 !== value) {
        setInputsError({
          ...inputsError,
          pass2: 'Passwords does not match',
        })
      } else {
        setInputsError({
          ...inputsError,
          pass2: '',
        })
      }

      break
    case 'phone':
      if (value == '') {
        setInputsError({ ...inputsError, phone: 'Phone can not be black' })
      } else if (!/^\d+$/.test(value)) {
        setInputsError({
          ...inputsError,
          phone: 'Invalid input. Please enter only numbers.',
        })
      } else {
        setInputsError({ ...inputsError, phone: '' })
      }
      break
    case 'address':
      if (value == '') {
        setInputsError({ ...inputsError, address: 'Address can not be black' })
      } else {
        setInputsError({ ...inputsError, address: '' })
      }
      break
    case 'city':
      if (value == '') {
        setInputsError({
          ...inputsError,
          city: 'City can not be blank',
        })
      } else if (/\d/.test(value)) {
        setInputsError({
          ...inputsError,
          city: 'City can not contain number',
        })
      } else {
        setInputsError({
          ...inputsError,
          city: '',
        })
      }
      break
    case 'full_name':
      if (value == '') {
        setInputsError({
          ...inputsError,
          full_name: 'Name can not be blank',
        })
      } else if (/\d/.test(value)) {
        setInputsError({
          ...inputsError,
          full_name: 'Name can not contain number',
        })
      } else {
        setInputsError({
          ...inputsError,
          full_name: '',
        })
      }
      break
    default:
  }
}

const generatedNumbers = []

export const generateRandomNumber = () => {
  let randomNumber
  do {
    randomNumber = Math.floor(Math.random() * 100000)

    const formattedNumber = String(randomNumber).padStart(7, '#1')
    generatedNumbers.push(formattedNumber)
    const numberExists = generatedNumbers.includes(formattedNumber)

    if (!numberExists) {
      break
    }
    return formattedNumber
  } while (true)
}
