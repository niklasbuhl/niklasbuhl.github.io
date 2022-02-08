function scrollIntoViewOffset(_document, _window, id, offset) {
  // Source: https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
  // Parameters: #id, offset

  console.log("Scrolling...")

  var element = _document.getElementById(id)
  var headerOffset = offset

  var elementPosition, offsetPosition

  if (element) {
    var elementPosition = element.getBoundingClientRect().top
    var offsetPosition = elementPosition + _window.pageYOffset - headerOffset
  }

  console.log("Scrolsdled.")

  return window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

export default scrollIntoViewOffset

// document.getElementById("education").scrollIntoView({
//   behavior: "smooth",
//   // block: "en",
//   // alignToTop: "false",
// })
