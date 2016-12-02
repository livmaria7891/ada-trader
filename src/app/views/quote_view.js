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
  },

  events:{
    'click .success': 'increasePrice',
    'click .alert': 'decreasePrice',

  },
  increasePrice: function(){
    this.quote.price += 1
    this.render();
  },
  decreasePrice: function(){
    this.quote.price -= 1
    this.render();
  }
});

export default QuoteView;
