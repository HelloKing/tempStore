Ext.onReady(function(){
	var cm = new Ext.grid.ColumnModel([
		{header:'编号',dataIndex:'id'},
		{header:'名字',dataIndex:'name'},
		{header:'描述',dataIndex:'descn'}
	]);

	var data = [
		['1','name1','descn1'],
		['2','name2','descn2'],
		['3','name3','descn3'],
		['4','name4','descn4']
	];
	var store = new Ext.data.Store({
		proxy: new Ext.data.MemoryProxy(data),
		reader: new Ext.data.ArrayReader({},[
			{name:'id'},
			{name:'name'},
			{name:'descn'}
		])
	});
	store.load();
	var gird = new Ext.grid.GridPanel({
		renderTo: 'grid',
		store: 'store',
		cm: cm
	});
})