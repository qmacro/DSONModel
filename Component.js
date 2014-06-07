jQuery.sap.require("local.DSONModel");
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
    var wowModel = new local.DSONModel('beers.dson');
    wowModel.attachEventOnce('requestCompleted', function() {
      console.log("REQUEST COMPLETED");
    });
    this.setModel(wowModel);

  }

});
