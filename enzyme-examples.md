# Using Enzyme to help test your React components

**What is Enzyme?**

It's a testing utility to assert, manipulate and read the rendered React component.

**Why use it?**

* Keeps the code base clean and reduced boiler code
* Tests are less flaky
* Provides an easy to use API to assert on the rendered component e.g `dom.find('.element')`

## What our code looked like before Enzyme

Below is **one** test of asserting the user name exists in the `ProfileBox` component.

In the `before` the component is rendered to the dom. The `setTimeout` is used to force the before to wait helping to ensure the component is mounted. (bit of a hack.)

In the `after` the component is removed for clean up.

```JavaScript
describe('User profile', () => {
	let component,
	dom;

	before((done) => {
    let person = { FirstName:'Richard', LastName:'Kotze' };
    component = React.render(
      <ProfileBox hint={person} />,
      document.body,
      () => {
        setTimeout(done);
      }
    );
    dom = React.findDOMNode(component);
  });

  after((done) => {
    React.unmountComponentAtNode(document.body);
    setTimeout(done);
  });

  it('should have name', () => {
    dom.textContent.should.containEql('Richard Kotze');
  });
});
```

## Now using Enzyme

The same example as above but using Enzyme;

```JavaScript
import { mount } from 'enzyme';
describe('User profile', () => {
	const person = { FirstName:'Richard', LastName:'Kotze' };

  it('should have name', () => {
    const profileDom = mount(<ProfileBox hint={person} />);
    profileDom.text().should.containEql('Richard Kotze');
  });
});
```