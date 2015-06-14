Ext.onReady(function(){
	new Ext.form.FormPanel({
		title: '监管视频管理服务',
		renderTo: Ext.getBody(),
		frames: true,
		height: 'auto',
		width: 500,
		labelWidth: 100,
		items: [
			{
				layout: 'column',
				items: [
					{
	             		layout: 'form',
	             		items: [{
	             			xtype: 'combo',
	             			fieldLabel: '接口类型',
	             		store: 
						new Ext.data.ArrayStore({
							fields: ['id', 'types'],
							data: [
								[1, '外观检验系统接口'],
								[2, '外观检验系统接口2'],
								[3, '外观检验系统接口3']
							]
						}),
					displayField: 'types',
					valueField: 'id',
					triggerAction: 'all',
					emptyText: '请选择...',
					allowBlank: false,
					blankText: '请选择接口类型',
					editable: false,
					mode: 'local'
	             		}]
	             	},{
	             		columnWidth: 0.3,
	             		//layout: 'form',
	             		items: [
	             			new Ext.Button({
	             				text: '参数保存',
	             				style: "margin-left:20px",
	             				width: 60,
	             				handler: function(){}
	             			})
	             		]
	             	}
				]
			},{
				
			}
		]
	})
})