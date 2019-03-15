export function setShowTime (state, val) {
  state.showTime = val
}

export function setCountry (state, val) {
  state.country = val
}

export function setParties (state, val) {
  state.parties.push(val)
}
