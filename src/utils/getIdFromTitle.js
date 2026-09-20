const getIdFromTitle = (title) => {
  if (typeof title !== 'string' || !title) {
    return ''
  }

  return title
    .toLocaleLowerCase()
    .replaceAll(' ', '-')
}

export default getIdFromTitle
