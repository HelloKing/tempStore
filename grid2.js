Ext.onReady(function() {
 new Ext.form.FormPanel({
	//  new Ext.FormPanel({
	id: 'typeForm',
	renderTo: Ext.getBody(),
	frame: true,
	height: 'auto',
	width: 500,
	buttonAlign: "center",
	//  labelAlign: "right",
	frame: true,
	labelWidth: 100,
	title: '接口授权管理',
	items: [
		{
	             layout: 'column',
	             //width: 700,
	             items: [
	             	{
	             		columnWidth: 0.5,
	             		layout: 'form',
	             		items: [{
	             			xtype: 'textfield',
	             			fieldLabel: '访问用户ID',
	             			name: 'userId'
	             		}]
	             	},
	             	{
	             		columnWidth: 0.2,
	             		layout: 'form',
	             		items: [
	             			new Ext.Button({
	             				text: '查询',
	             				style: "margin-left:20px",
	             				width: 60,
	             				handler: function(){}
	             			})
	             		]
	             	},
	             	{
	             		columnWidth: 0.15,
	             		layout: 'form',
	             		items: [
	             			new Ext.Button({
	             				text: '修改',
	             				width: 60,
	             				handler: function(){}
	             			})
	             		]
	             	},
	             	{
	             		columnWidth: 0.15,
	             		layout: 'form',
	             		items: [
	             			new Ext.Button({
	             				text: '创建',
	             				width: 60,
	             				style: "margin-left:10px",
	             				handler: function(){}
	             			})
	             		]
	             	},
	             ]
		},
		{
			layout: 'column',
	             items: [
	             	{
	             		columnWidth: 0.5,
	             		layout: 'form',
	             		items: [{
	             			xtype: 'textfield',
	             			fieldLabel: '接口Key',
	             			name: 'userId'
	             		}]
	             	},
	             	{
	             		columnWidth: 0.2,
	             		layout: 'form',
	             		items: [
	             			new Ext.Button({
	             				text: '接口KEY生成',
	             				style: "margin-left:20px",
	             				width: 60,
	             				handler: function(){}
	             			})
	             		]
	             	}
	             ]
		},
		{
			columnWidth: 0.5,
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
		},
		{
			layout: 'column',
	             items: [
	             	{
	             		columnWidth: 0.5,
	             		layout: 'form',
	             		items: [{
	             			xtype: 'textfield',
	             			fieldLabel: '访问IP',
	             			name: 'ipAddr',

	             		}]
	             	},
	             	{
	             		columnWidth:0.4,
	             		layout: 'form',
	             		items: [{
	             			xtype: 'checkbox',
	             			boxLabel: '是否绑定IP'
	             		}]
	             	}
	             ]
		},
		{
			xtype: 'radiogroup',
			fieldLabel: '授权状态',
			width: 200,
			items: [{
				boxLabel: '启用',
				name: 'FileItype',
				inputValue: 1
			}, {
				boxLabel: '停用',
				name: 'FileItype',
				inputValue: 2
			}]	   
		}
	]
});
})

