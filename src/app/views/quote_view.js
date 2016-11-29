//quote_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
      this.quote = options.quote;
      this.template = options.template;
   },

 render: function() {
   var html = this.template(this.quote);

   this.$el.html(html);

   // Enable chained calls
   return this;
 }
});

export default QuoteView;
