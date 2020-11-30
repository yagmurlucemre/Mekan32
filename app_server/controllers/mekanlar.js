

/* GET home page. */

 const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
   {
   	'baslik': 'Anasayfa',
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
   		'adres':'Iyas AVM',
   		'puan':3,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'5km'

   	},
   	{
   		'ad':'Kahve Dünyası',
   		'adres':'Iyas AVM',
   		'puan':2,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'7km'

   	},
   	{
   		'ad':'Antre Kitchen Gurme',
   		'adres':'Centrum Garden AVM',
   		'puan':5,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'10km'

   	},
   	{
   		'ad':'Osmanlı Kahvecisi',
   		'adres':'Iyas AVM',
   		'puan':4,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'4km'

   	},


   	]
   }
   );
}
const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay',{

  	'baslik':'Mekan Bigisi',
  	'sayfaBaslik':'Starbucks',
  	'mekanBilgisi':{
  		'ad':'Starbucks',
  		'adres':'Centrum Garden AVM',
  		'puan':3,
  		'imkanlar':['Kahve','Pasta','Kek'],
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
  			'puan':3,
  			'tarih':'30 Kasım 2020',
  			'yorumMetni':'Pastaları bir harika,mutlaka denemelisiniz :)'
  		 }

  		]
  	}
  });
}
 
const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}






module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle


}