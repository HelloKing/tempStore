Ext.onReady(function(){
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

	// 新建grid表格
	var myData = [
		['S7000','设备服务器时间','已开启','0','<a href="###">日志查详</a>'],
		['S7001','推送监控工位点信息','已开启','0','<a href="###">日志查详</a>'],
		['S7002','摄获取监控工位对应摄像头编导','已开启','0','<a href="###">日志查详</a>'],
		['S7003','监控摄像头巡检','已开启','0','<a href="###">日志查详</a>'],
		['S7004','监控摄像头故障设置','已开启','0','<a href="###">日志查详</a>'],
		['S7005','监控摄像头拍照','已开启','0','<a href="###">日志查详</a>'],
		['S7006','监控视频路径获取','已开启','0','<a href="###">日志查详</a>'],
		['S7101','项目检查录像开始','已开启','0','<a href="###">日志查详</a>'],
		['S7102','项目检查录像结束','已开启','0','<a href="###">日志查详</a>']
	];

	var store = new Ext.data.ArrayStore({
		fields: [
			{name: 'no'},
			{name: 'name'},
			{name: 'status'},
			{name: 'times'},
			{name: 'options'}
		]
	});
	store.loadData(myData);
	var grid = new Ext.grid.GridPanel({
		store: store,
		columns: [
		 	{id:'no',header:'服务标号',width:100,dataIndex:'no'},
		 	{header:'服务名称',width:100,dataIndex:'name'},
		 	{header:'服务状态',width:100,dataIndex:'status'},
		 	{header:'访问次数',width:100,dataIndex:'times'},
		 	{header:'操作',width:100,dataIndex:'options'}
		],
		autoExpandColumn:'no',
		height:400,
		width:500,
		//title:'监管视频管理日志统计'


	});
	var win = new Ext.Window({
		title: "监管视频管理日志统计",
		width: 600,
		height: 500,
		resizable: false,
		modal: true,
		items: [grid]	
	});
	win.show();
})

Ext.onReady(function() {
	var set = new Ext.form.FieldSet({
		title: 'fieldset',
		columnWidth: 1,
		height: 80,
		layout: 'column',
		border: false,
		anchor: '100%',
		labelWidth: 40,
		items: [{
			columnWidth: .4,
			layout: 'form',
			border: false,
			items: [{
				xtype: 'textfield',
				fieldLabel: '访问用户ID',
				labelWidth: 100,
				name: 'userd',
				//width: 100
			}]
		}, {
			columnWidth: .2,
			layout: 'form',
			border: false,
			items: [{
				xtype: 'button',
				name: 'query',
				text: '查询',
				style: 'margin-left:20px',
				width: 60
			}]
		}, {
			columnWidth: .2,
			layout: 'form',
			border: false,
			items: [{
				xtype: 'button',
				name: 'modify',
				text: '修改',
				style: 'margin-left:10px',
				width: 60
			}]
		}, {
			columnWidth: .2,
			layout: 'form',
			border: false,
			items: [{
				xtype: 'button',
				name: 'create',
				text: '创建',
				style: 'margin-left:30px',
				width: 60
			}]
		}]
	});

	 var interfaceKey = new Ext.form.TextField({
                 width: 140,
                 allowBlank: false,
                 maxLength: 20,
                  name: 'username',
                 fieldLabel: '接口Key',
                 blankText: '请输入用户名',
                 maxLengthText: '用户名不能超过20个字符'
             });

	 var keyButton = new Ext.Button({
	 	text: '接口Key生成'

	 });
	 var label = new Ext.form.TextField({
	 	fieldLabel: 'helloworldasdasdasd',
	 	labelWidth: 10,
	 	border: false
	 });
	var setform = new Ext.form.FormPanel({
		width: 300,
		height: 80,
		labelWidth: 80,
		labelAlign: 'right',
		frame: true,
		items: [set,interfaceKey,keyButton,label]
	});
	var win = new Ext.Window({
		title: 'fieldSet的column布局',
		layout: 'fit',
		width: 500,
		height: 380,
		closeAction: 'hide',
		items: [setform]
	});
	win.show();

	
})		{
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