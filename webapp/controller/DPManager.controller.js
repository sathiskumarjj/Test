sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("EmployeeEvaluation.controller.DPManager", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf EmployeeEvaluation.view.DPManager
		 */
			onInit: function() {
				
				var oModel= new sap.ui.getCore().byId("app").getModel("emp");
		              this.getView().setModel(oModel);
		              var simpleform = this.getView().byId("SimpleFormChange480_Trial").bindElement("/zemp_ev_formSet('3000000001')");
		              
		              //var oModel sap.ui.getCore().byId("app").getModel("emp");
			},
			onPress:function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("manager");
			}
		
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf EmployeeEvaluation.view.DPManager
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf EmployeeEvaluation.view.DPManager
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf EmployeeEvaluation.view.DPManager
		 */
		//	onExit: function() {
		//
		//	}

	});

});