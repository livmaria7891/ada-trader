import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view.js'

const ApplicationView = Backbone.View.extend({
  initialize: function() {
  },

  render: function() {
    this.$el.html('<p>Hello World</p>');

    return this;
  }
});

export default ApplicationView;
