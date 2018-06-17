//-------------------------------------------------------------------------
// Format the indvidual error message from AuthService into an
// single prettified string
//-------------------------------------------------------------------------
export const formatErrorMessage = (errorType, errorMessage) => {
  return capitalizeFirstLetter(errorType) + ' ' + errorMessage + '. '
}

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

//-------------------------------------------------------------------------
// Get the beginning of an email (characters before @)
//-------------------------------------------------------------------------
export const getEmailName = email => {
  return email.substring(0, email.indexOf('@'))
}

//-------------------------------------------------------------------------
// Convert a string of names into initials
//-------------------------------------------------------------------------
export const getInitials = name => {
  if (name && typeof name === 'string') {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  } else {
    return undefined
  }
}
