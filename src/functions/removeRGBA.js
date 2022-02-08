const removeRGBA = color => {
  var rgb

  try {
    rgb = getComputedStyle(document.documentElement)
      .getPropertyValue(color)
      .slice(5, -4)

    console.log(color + ": " + rgb)
  } catch (error) {
    console.log(error)
  }

  return rgb
}

export default removeRGBA
