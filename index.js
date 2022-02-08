function telephoneCheck(str) {
  let isPhoneNumber = /^([1]{1}\s?)?(\([0-9]{3}\)|[0-9]{3})\s?-?[0-9]{3}\s?-?[0-9]{4}$/
  if (isPhoneNumber.test(str)) {
    return true
  }
  return false
}

telephoneCheck("2 (757) 622-7382");
