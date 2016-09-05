import jsdom from 'jsdom';
import jquery from 'jquery';
import Header from './index';

describe('Header', () => {
  let $, h1;

  before(() => {
    global.document = jsdom.jsdom('<!doctype html><html><body><div class="wrapper"></div></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};

    $ = jquery(window);
    h1 = new Header(1);
  });

  it('should have the correct tagName', () => {
    h1.tagName().should.equal('h1');
  });

  it('should be added to .wrapper', () => {
    h1.addTo($('.wrapper'));
    $(h1.tagName(), $('.wrapper')).length.should.equal(1);
  });
});
