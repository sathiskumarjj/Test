sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"EmployeeEvaluation/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("EmployeeEvaluation.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init:function(){
    // debugger;
    //router and hashchanger libraries
    jQuery.sap.require("sap.ui.core.routing.History");
    jQuery.sap.require("sap.m.routing.RouteMatchedHandler"); 
    
    //call create content
    sap.ui.core.UIComponent.prototype.init.apply(this);
    
    var router = this.getRouter();
    this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
    router.register("appRouter");  // Assign a name to Router, so that we can access it in all controllers by using this name  
    router.initialize(); // Initialise the Router  
	// this.setModel(models.createDeviceModel(), "device");
},


createContent : function(){
     //debugger;
    var oview = sap.ui.view({id:"app",
    viewName:"EmployeeEvaluation.view.App",
    type:"XML",
    viewData:{ component:this }});
     var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZEMP_EV_FORM_SRV/",true);
  
    oview.setModel(oModel,"emp");
   
    return oview;
}
 });
});