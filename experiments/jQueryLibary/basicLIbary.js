var $ = (function(window, document) {
  'use strict';
    var version = "0.0.1";
  function $( el ) {
    // enforces new
    if (!(this instanceof $)) {
      return new $( el );
    }
    // constructor body
      if( typeof el === 'string'){
       this.el = document.querySelector( el ) || {}; 
      }else{

        this.el = el;
        this.length = this.el.length || 1;
      }
       
  }
    $.prototype = {
      swing: version,
      const: $,
      el: "",
      size: function(){
        return this.length;
      },
      first: function(){
        this.const(this.el[0]);
        return this;
      },
      last: function(){
        this.const(this.el[this.size() -1]) 
        return this;
      },
      find: function( find ) {
        var query = this.el.querySelectorAll( find ),
            collection =  Array.prototype.slice.call( query );
        this.const(collection);
    return this;

    }, 
      children : function() {
        this.const(this.el.children);
        return this;
    },

      hide : function() {
        this.el.style.display = 'none';
        return this;
    },
      show : function() {
        this.el.style.display = '';
        return this; 
      }
    };


  return $;

}(window, document));

window.onload=function(){
  var tabs = $(".tabs");
  console.log(tabs.children().last());

};



