import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view.js'

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.stockData = options.stockData;

    this.template = _.template($('#tmpl-quote-view').html());

    this.listElement = this.$('.quotes');

    this.cardList = []
      this.stockData.forEach(function(quote) {

          var card = new QuoteView({
            quote: quote,
            template: this.template
          });
          this.cardList.push(card);

      }, this);
  },

  render: function() {
    this.listElement.empty();

    this.cardList.forEach(function(card){
      card.render();

      this.listElement.append(card.$el);}, this);

    return this;
  }
});

export default ApplicationView;
