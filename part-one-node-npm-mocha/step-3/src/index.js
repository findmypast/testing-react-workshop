class Header {
  constructor(level) {
    this.level = level;
  }
  tagName() {
    return 'h' + this.level;
  }
  addTo(container) {
    container.append('<' + this.tagName() + ' />');
  }
};

export default Header;
