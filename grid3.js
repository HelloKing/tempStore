Ext.onReady(function() {
	new Ext.form.FormPanel({
		renderTo: Ext.getBody(),
		frame: true,
		height: 'auto',
		width: 500,
		title: '视频补传管理',
		items: [
		{
			layout: 'column',
			items: [
			{
				//layout: 'form',
				//columnWidth: 0.2,

				layout: 'form',	
				style: 'margin-left:0px',						
				items: [{
					xtype: 'datefield'
				}]
			},{
				//columnWidth: 0.2,
				layout: 'form',
				items: [{
					xtype: 'datefield'
				}]
			}
			]
		}
		]
	})
})