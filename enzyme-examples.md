# Using Enzyme to test React components

**What is Enzyme?**

It's a testing utility to assert, manipulate and read the rendered React component.

**Why use it?**

* Keeps the code base clean and reduced boiler code
* Stable rendering of components
* Easy to use API to assert on the rendered component e.g `dom.find('.element')`

## What our code looked like before Enzyme

Below is **one** test asserting the user name exists in the `ProfileBox` component.

In the `before` the component is rendered to the dom (using jsdom). The `setTimeout` is used to force the before to wait to ensure the component is mounted. (bit of a hack.)

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

  it('should contain name', () => {
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

  it('should contain name', () => {
    const profileDom = mount(<ProfileBox hint={person} />);
    profileDom.text().should.containEql('Richard Kotze');
  });
});
```

As you can see far less lines making it more focused and readable.  The test is more reliable because in the first example the hack creates flaky tests.

There is no need for the `before` so we render the component in the `it`. The component can be rendered in the `before` and assert different features inside. 

## Enzyme API

[Enzyme Guide](http://airbnb.io/enzyme/)

Enzyme provides three ways to render your components.

**Shallow: `shallow(component)`** 

Testing the component as a unit and not asserting on child components. (jsdom or browser **not** needed)

**Full:** 

Full dom rendering when interacting with DOM apis or components that use lifecycle methods. (**Needs** jsdom or browser envrionment)

- **Static:** 

Render React components to static HTML and analyse the HTML stucture using the [Cheerio](http://cheerio.js.org/) library. (jsdom or browser **not** needed)

## Common enzyme examples

Will use shouldjs to show assert examples.