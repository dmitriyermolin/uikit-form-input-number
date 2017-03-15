(function(addon) {

  var component;

  if (window.UIkit) {
    component = addon(UIkit);
  }

  if (typeof define == 'function' && define.amd) {
    define('uikit-form-input-number', ['uikit'], function(){
      return component || addon(UIkit);
    });
  }

})(function(UI){

  "use strict";

  UI.component('formInputNumber', {

    defaults: {
      min: 0,
      max: 9007199254740991, // Number.MAX_SAFE_INTEGER
      step: 1
    },

    boot: function() {
      // init code
      UI.ready(function(context) {

        UI.$('[data-uk-form-input-number]', context).each(function(){

          var ele = UI.$(this);

          if (!ele.data('formInputNumber')) {
            UI.formInputNumber(ele, UI.Utils.options(ele.attr('data-uk-form-input-number')));
          }
        });
      });
    },

    _checkValue: function() {
      if (!this.input.val() || !(isFinite(parseInt(this.input.val())) && Math.floor(parseInt(this.input.val())) === parseInt(this.input.val())) || this.input.val() < this.options.min) {
        this.input.val(this.options.min);
      }
      if (this.input.val() <= this.options.min) {
        this.input.val(this.options.min);
        this.decrementor.addClass('uk-text-muted');
      } else {
        this.decrementor.removeClass('uk-text-muted');
      }
      if (this.input.val() >= this.options.max) {
        this.input.val(this.options.max);
        this.incrementor.addClass('uk-text-muted');
      } else {
        this.incrementor.removeClass('uk-text-muted');
      }
    },

    init: function() {

      var $this = this;

      this.decrementor = this.find('.uk-form-input-number-decrement');
      this.incrementor = this.find('.uk-form-input-number-increment');
      this.input = this.find('input');

      this._checkValue();

      this.decrementor.on('click', function(e) {

        e.preventDefault();

        $this.input.val(parseInt($this.input.val()) - $this.options.step);

        $this._checkValue();

      });

      this.incrementor.on('click', function(e) {

        e.preventDefault();

        $this.input.val(parseInt($this.input.val()) + $this.options.step);

        $this._checkValue();

      });

      this.input.on('blur', function(e) {
        $this._checkValue();
      });

      this.element.data('formInputNumber', this);
    }
  });

  return UI.formInputNumber;
});
