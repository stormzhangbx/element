export const getClass = (o) => Object.prototype.toString.call(o).slice(8, -1)

export const deepCopy = (obj) => {
  let result
  const oClass = getClass(obj)

  if (oClass === 'Object') result = {}
  else if (oClass === 'Array') result = []
  else return obj

  for (const i in obj) {
    const copy = obj[i]

    if (oClass === 'Object' || oClass === 'Array') result[i] = deepCopy(copy)
    else result[i] = copy
  }

  return result
}
