export const formatPrice = (num) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }
  return num?.toLocaleString('en-Us', options)
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
    default:
  }
}
