var server = 'http://192.168.193.1:8088/Ascending';

var request = {
	basicInfo:server+('/stock_app.do?id='),
	tableData:server+('/stockTables_app.do?id='),
	stockPool:server+('/user/stockpool.do?userid='),
}

module.exports = request;