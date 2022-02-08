//<script type="text/javascript" language="javascript">

// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

{
  coded = "dO77Q@xYI78MtDd7.6KN"
  key = "7FDvSJHyAZIL9izbjn8h1P5BcReKsop23YNt4xfdgrlXumOCMQ0VkwqGT6EWaU"
  shift = coded.length
  link = ""
  for (i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
      ltr = coded.charAt(i)
      link += ltr
    } else {
      ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
      link += key.charAt(ltr)
    }
  }
  document.write("<a href='mailto:" + link + "'>Contact</a>")
}
//-->

//</script><noscript>Sorry, you need Javascript on to email me.</noscript>
