import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';

describe('Primary header', () => {
  let component, headerDom;

  before((done) => {
    component = ReactDOM.render(
      <Header />,
      document.body.firstChild,
      () => {
        setTimeout(done);
      }
    );
    headerDom = ReactDOM.findDOMNode(component);
  });

  after((done) => {
    ReactDOM.unmountComponentAtNode(document.body.firstChild);
    setTimeout(done);
  });

  it('should contain company name', () => {
    headerDom.textContent.should.containEql('Findmypast');
  });
});
