"use strict";

var extend = require('./extend');
var mixins = require('./mixins')

var proto = Object.create(HTMLButtonElement.prototype, {
  createdCallback: {
    value: function () {
      // extend this prototype with the mixins prototype
      extend(proto, mixins);

      // read attributes from html element
      this.readAttributes();

      // use the sayHello method from the mixin
      this.addEventListener('click', this.sayHello);

      // check what’s in the proto object
      //console.log(proto);
    }
  },
  readAttributes : {
    value: function () {
      // use the setter method to set the value of the msg property on the mixin prototype to the html-attribute of the custom element (see index.html)
      this.msg = this.getAttribute('msg') || 'default message';
    }
  }
});

module.exports = document.registerElement('mongo-button', {
  prototype: proto,
  extends: 'button'
});
