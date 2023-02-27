class Softplay {
  constructor() {
    this.adults = 0
    this.children = 0
    this.totals = {
      adults: 0,
      children: 0
    }
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  total() {
    return {
      adults: this.totals.adults,
      children: this.totals.children
    }
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.adults += numAdults
      this.children += numChildren
      this.addToTotal(numAdults, numChildren)
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (numAdults > this.adults || numChildren > this.children) {
      return false
    } else if (numAdults < numChildren) {
      return false
    } else if (this.adults - numAdults < this.children - numChildren) {
      return false
    } else {
      this.adults -= numAdults
      this.children -= numChildren
      return true
    }
  }

  addToTotal(numAdults, numChildren) {
    this.totals.adults += numAdults
    this.totals.children += numChildren
  }
}

const softplay = new Softplay()

module.exports = softplay
