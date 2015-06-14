/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.onReady(function(){

    // NOTE: This is an example showing simple state management. During development,
    // it is generally best to disable state management as dynamically-generated ids
    // can change across page loads, leading to unpredictable results.  The developer
    // should ensure that stable state ids are set for stateful components in real apps.    
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    // sample static data for the store
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
    
    // create the data store
    var store = new Ext.data.ArrayStore({
          	fields:   [
		        {name: 'no'},
		        {name: 'name'},
		        {name: 'status'},
		        {name: 'times'},
		        {name: 'options'}
		]
     
    });

    // manually load local data
    store.loadData(myData);

    // create the Grid
    var grid = new Ext.grid.GridPanel({
        store: store,
	// columns: [
	// 	 {id:'no',header:'服务标号',width:100,dataIndex:'no'},
	// 	 {header:'服务名称',width:100,dataIndex:'name'},
	// 	 {header:'服务状态',width:100,dataIndex:'status'},
	// 	 {header:'访问次数',width:100,dataIndex:'times'},
	// 	 {header:'操作',width:100,dataIndex:'options'}
	// ],
        columns: [
            {id:'no',header: '服务标号', width: 75, sortable: true, dataIndex: 'no'},
            {header: '服务名称', width: 200, sortable: true, dataIndex: 'name'},
            {header: '服务状态', width: 75, sortable: true, dataIndex: 'status'},
            {header: '访问次数', width: 75, sortable: true, dataIndex: 'times'},
            {header: '操作', width: 85, sortable: true, dataIndex: 'options'}
        ],
        stripeRows: true,
        autoExpandColumn: 'no',
        height: 250,
        width: 550,
        style: 'margin:10px',
        //title: '监管视频管理日志统计',
        // config options for stateful behavior
        stateful: true,
        stateId: 'grid',
      //  renderTo: 'grid-example'        
    });
    
    // render the grid to the specified div in the page
    //grid.render('grid');
    var win = new Ext.Window({
		title: "监管视频管理日志统计",
		width: 630,
		height: 300,
		resizable: true,
		modal: true,
		autoScroll:true,
		items: [grid],
		closable: false	
	});
	win.show();
	//grid.render('grid');
});