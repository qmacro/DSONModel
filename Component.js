jQuery.sap.require("local.DogeonModel");
jQuery.sap.declare("local.Component");

sap.ui.core.UIComponent.extend("local.Component", {

  metadata : {
    dependencies : {
        libs : ["sap.m"]
    },
    rootView : "local.Root"
  },

  init : function() {

    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    var wowModel = new local.DogeonModel('beers.dson');
    this.setModel(wowModel);

  }

});
