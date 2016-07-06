#Ideas 

*Ideas for workshop on how we do TDD when writing React components*

##Purpose
We use TDD at FMP to verify code works as expected, prevent regressions coming in, and to provide a source of documentation for how to use a particular feature. This applies to our UI as it does to our backend code. We test the markup to ensure the user experience is what it should be - the logic is mainly within Redux.

To test our React components, we use a combination of [Mocha](https://mochajs.org/) and [jsdom](https://github.com/tmpvar/jsdom)/[Enzyme](https://github.com/airbnb/enzyme) (on top of nodejs and npm).

Teams like Oblivion, Puzzlers & T-Rex are already using React, and in the future Minions will support the React applications.

##Learning topics

###node/npm
npm commands: `npm install' and 'npm test`, plus the use of **package.json** script hooks (*publish*, etc.) in conjunction with the *repository* field.

###Mocha

###jsdom

###Enzyme

##Possible workshop stories

###FMP style guide component

##Presentation

Suggested format is:
* Jonathan to lay the foundation, introducing *node/npm*, *Mocha* and *jsdom*.
* Mobile to build on top and showcase Enzyme

Work through a barebones project.
