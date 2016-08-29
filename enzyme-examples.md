# Using Enzyme to test React components

**What is Enzyme?**

It's a testing utility to assert, manipulate and read the rendered React component.

**Why use it?**

* Keeps the code base clean and reduced boiler code
* Stable rendering of components
* Easy to use API to assert on the rendered component e.g `dom.find('.element')`

## What our code looked like before Enzyme

Below is **one** test asserting the user name exists in the `ProfileBox` component.

In the `before` function a component is rendered to the dom (using [jsdom](https://github.com/tmpvar/jsdom)). The `setTimeout` is used to wait 20ms, allowing extra time for the component to mounted. (this is a hack.)

In the `after` the component is removed for clean up and a `setTimeout` is used for similar reasons as mentioned before.

`findDOMNode` is used to get the rendered component from the DOM, allowing access to stand DOM API which can be used to assert on as shown in the `it`.

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

## Using Enzyme

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

As is can be seen far less lines of code are written, making it more focused and readable. The test is more reliable because in the first example the hack creates flaky tests.

There is no need for the `before` so we render the component in the `it`. The component can be rendered in the `before` if needed. 

## Enzyme API

[Enzyme Guide](http://airbnb.io/enzyme/)

Enzyme provides three ways to render your components.

**Shallow: `shallow(<component />)`** 

Testing the component as a unit and not asserting on child components. (jsdom or browser **not** needed)

**Full: `mount(<component />)`** 

Full dom rendering when interacting with DOM APIs or components that use lifecycle methods. (**Needs** jsdom or browser envrionment)

**Static: `render(<component />)`** 

Render React components to static HTML and analyse the HTML stucture using the [Cheerio](http://cheerio.js.org/) library. (jsdom or browser **not** needed)

## Common Enzyme examples

In the examples below are commonly used Enzyme methods to help get you started. The assert library being used is [shouldJS](https://shouldjs.github.io/) and [Chai](http://chaijs.com/). This will help make the asserts more readable and focused.

You will most likely use the `find` method which traverse through the DOM using **css selectors** to get elements like jQuery.

Below renders a component containing a list and the `find` method is used to get the list items to assert the total.

```javascript
const dom = shallow(<ExampleComponent />);

const exampleList = dom.find('.exampleList li');

exampleList.length.should.equal(3);
```

`get(index)` returns a node (`ReactElement`) giving access to DOM methods like `getAttribute`.

`at(index)` returns an enzyme wrapper.

While the difference is subtle the `get` method is useful to check the rendered markup.

Below the first list item is found and checks for a css class.

```javascript
const dom = shallow(<ExampleComponent />);

const exampleList = dom.find('.exampleList li');

exampleList.get(0).getAttribute('class').should.equal('special');
```

To access the state and prop objects in a React component Enzyme exposes `state([key])`, `prop([key])` and `props()`.

Below the component takes a `profileId` to get a user profile. Assert the profileId is correct on the props and the expected user name set in the state.

```javascript
const dom = mount(<ExampleComponent profileId="123" />);

const exampleList = dom.find('.exampleProfile');

dom.state('name').should.equal('Richard');
dom.prop('profileId').should.equal(123);
```

To simulate an event like `onChange`, use the `simulate(event[, mockData])` method.

In React the `onChange` event needs to be fired to update the state of an input value. Below that event is fired with a mock value. Below the test asserts the value has changed.

```javascript
const dom = mount(<ExampleComponent />);

const exampleList = dom.find('.exampleList .userName');

dom.state('userName').should.equal('typo.doe');

exampleList.simulate('change', { target: { value: 'john.doe'}});

dom.state('userName').should.equal('john.doe');
```

Enzyme JS is a useful tool for testing React components enabling developer to build tests efficiently. I would encourage all React app development to use this library.