function determineWinner(colors) {
  colors = colors.split('')
  b_count = 0
  w_count = 0
  for (let i=0; i<colors.length; i++) {
    if (colors[i] == colors[i+1] && colors[i] == colors[i+2]) {
      if (colors[i] == 'b') {
        b_count++
      } else {
        w_count++
      }
      colors.splice(i+1, 1)
    }
  }
  if (b_count >= w_count) {
    return 'bob'
  } else {
    return 'whitney'
  }
}
