//quote_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var QuoteView = Backbone.View.extend({
  initialize: function(options){
    this.stock = options.stock;
    this.template = options.template;
  },

  render: function(){
    var html = this.template({stock: this.stock})
    this.$el.html(html);

    return this;
  }


});

export default QuoteView;
