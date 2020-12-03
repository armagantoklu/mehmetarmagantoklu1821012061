var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
 res.render('anaSayfa',{
	 'baslik':'Anasayfa',
	 'footer':'Mehmet Armağan TOKLU 2020',
 	 'sayfaBaslik': {
 		'siteAd':'Mekan32',
 		'aciklama':'Isparta Civarındaki Mekanları Keşfedin!!'
 	},
 	'mekanlar':[
 	{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'mesafe':'10 km'
 	},
 	 {
 	 	'ad':'Kahve Dünyası',
 	 	'adres':'Centrum Garden AVM',
 	 	'puan':1,
 	 	'imkanlar':['Kahve','Çay','Kek'],
 	 	'mesafe':'17 km'
 	 },
 	 {
 	 	'ad':'Çay Ocağı',
 	 	'adres':'İsmetpaşa Mah.',
 	 	'puan':5,
 	 	'imkanlar':['Çay ','Oralet','Simit'],
 	 	'mesafe':'100m'
 	 },
 	 {
 	 	'ad':'Burger King',
 	 	'adres':'Yeşilevler Mah',
 	 	'puan':1,
 	 	'imkanlar':['Hamburger','Dondurma','İçecek'],
 	 	'mesafe':'20 km'
 	 },
 	 {
 	 	'ad':'Dostlar Döner Salonu',
 	 	'adres':'Barış Mah',
 	 	'puan':5,
 	 	'imkanlar':['Et Döner','Tavuk Döner','Ayran'],
 	 	'mesafe':'11 m'
 	 }
 	]
 });
}

const mekanBilgisi=function(req,res,next){
 res.render('mekanBilgisi',{
 	'baslik':'Mekan Bilgisi',
	 'sayfaBaslik':'Starbucks',
	 'footer':'Mehmet Armağan TOKLU 2020',
 	 'mekanBilgisi':{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'koordinatlar':{
 			'enlem':'37.781835',
 			'boylam':'30.566034'
 		},
 		'saatler':[
 		  {
 			'gunler':'Pazartesi - Cuma ',
 			'acilis':' 07:00 ',
 			'kapanis':' 23:00 ',
 			'kapali':false
 		  },
 		  {
 			'gunler':'Cumartesi ',
 			'acilis':' 09:00 ',
 			'kapanis':' 22:00 ',
 			'kapali':false
 			
 		  },
 		  {
			'gunler':'Pazar ',
 			'kapali':true
 		
 		  }
 		],
 		'yorumlar':[
 		   {
 		   	 'yorumYapan':'Mehmet Armağan TOKLU',
 		   	 'puan':1,
 		   	 'tarih': '02.12.2020',
 		   	 'yorumMetni':'Gitmeyin çay ocağına gidin esnaf kazansın.'
 		   },
 		   {
 		 	 'yorumYapan':'Ahmet Kaan KENAR',
 		   	 'puan':5,
 		   	 'tarih': '27.11.2020',
 		   	 'yorumMetni':'Süper'
 		   }
 		]
 	   }
 });
}

const yorumEkle=function(req,res,next){
 res.render('yorumEkle',{title:'Yorum Ekle'});
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}