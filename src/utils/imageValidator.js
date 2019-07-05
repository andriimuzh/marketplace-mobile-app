const imageValidator = (data, placeholder = false) => {
  if (Array.isArray(data)) {
    if (typeof data[0] === 'string') {
      if (data[0] !== '') {
        return data[0];
      }
      return placeholder;
    }
    return placeholder;
  } else if (typeof data === 'string') {
    if (data !== '') {
      return data;
    }
    return placeholder;
  }
  return placeholder;
};

export default imageValidator;
