
/* GET home page. */

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında','footer': 'Cemre Yağmur Ulağ 2020', });
}
module.exports={
	hakkinda
}
