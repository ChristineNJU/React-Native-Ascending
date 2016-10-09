var server = 'http://www.anyquant.net:40002';

var request = {
	basicInfo:server+('/stock_app.do?id='),
	tableData:server+('/stockTables_app.do?id='),
	stockPool:server+('/user_app/stockpool.do?userid='),
	simulators:server+('/user_app/simulator-list.do?userid='),
	login:server+('/login_app.do?userId='),
}

module.exports = request;