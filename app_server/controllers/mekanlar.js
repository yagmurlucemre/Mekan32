

/* GET home page. */

const anaSayfa=function(req, res, next) {
	res.render('mekanlar-liste',
	 {
		 'baslik': 'Anasayfa',
		 'footer': 'Cemre Yağmur Ulağ 2020',
		 'sayfaBaslik':{
			 
			 'siteAd':'Mekan32',
			 'aciklama':'Isparta civarındaki mekanları keşfedin!'
		 },
		 'mekanlar':[
		 {
			 'ad':'Starbucks',
			 'adres':'Centrum Garden AVM',
			 'puan':5,
			 'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
			 'mesafe':'10km'
  
		 },
		 {
			 'ad':'Gloria Jeans',
			 'adres':'İyaş Park AVM',
			 'puan':4,
			 'imkanlar':['Çay','Kekler','Pastalar','Kahve'],
			 'mesafe':'2km'
  
		 },
		 {
			 'ad':'Osmanlı Kahvecisi',
			 'adres':'Bahçelievler',
			 'puan':4,
			 'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
			 'mesafe':'2km'
  
		 },
		 {
			 'ad':'Kahve Dünyası',
			 'adres':'Iyaş Park',
			 'puan':2,
			 'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
			 'mesafe':'3km'
  
		 },
		 {
			 'ad':'Antre Gurme Kitchen',
			 'adres':'Iyaş Park AVM',
			 'puan':5,
			 'imkanlar':['Dünya Mutfağı','Dünya Kahveleri','Kekler','Pastalar'],
			 'mesafe':'5km'
  
		 },
  
  
		 ]
	 }
	 );
  }
  const mekanBilgisi=function(req, res, next) {
	res.render('mekan-detay',{
  
		'baslik':'Mekan Bigisi',
		'footer': 'Cemre Yağmur Ulağ 2020',
		'sayfaBaslik':'Starbucks',
		'mekanBilgisi':{
			'ad':'Starbucks',
			'adres':'Centrum Garden AVM',
			'puan':5,
			'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
			'koordinatlar':{
				'enlem':37.781885,
				'boylam':30.566034
			},
			'saatler':[
			 {
				'gunler':'Pazartesi-Cuma',
				'acilis':'07:00',
				'kapanis':'23:00',
				'kapali':false
			 },
			 {
				'gunler':'Cumartesi',
				'acilis':'09:00',
				'kapanis':'22:30',
				'kapali':false
			 },
			 {
				'gunler':'Pazar',
				
				'kapali':true
			 }
			],
			'yorumlar':[
			 {
				'yorumYapan':'Cemre Yağmur Ulağ',
				'puan':5,
				'tarih':'30 Kasım 2020',
				'yorumMetni':'Pastaları bir harika, mutlaka denemelisiniz :)'
			 }
  
			]
		}
	});
  }
   
  const yorumEkle=function(req, res, next) {
	res.render('yorum-ekle', { title: 'Yorum Ekle','footer': 'Cemre Yağmur Ulağ', });
  }
  
  module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle
  }