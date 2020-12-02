var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next){
  res.render('anaSayfa',
  {
    'baslik': 'Anasayfa',
  'sayfaBaslik':{
    'siteAd':'Mekan32',
    'aciklama':'Isparta civarındaki mekanları keşfedin'
  },
  'mekanlar':[
   {
      'ad':'Starbucks',
      'adres':'Centrum Garden AVM',
      'puan':1,
      'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
      'mesafe':'10km'
    },
      {
      'ad':'Kahve Dunyası',
      'adres':'Centrum Garden AVM',
      'puan':3,
      'imkanlar':['Soğuk Kahve','Sıcak Kahve','Çay'],
      'mesafe':'18km'
    },
      {
      'ad':'Çay Ocağı',
      'adres':'İsmetpaşa Mah',
      'puan':5,
      'imkanlar':['Çay','Oralet','Tost','Simit'],
      'mesafe':'10km'
    },
      {
      'ad':'Kyk Kantini',
      'adres':'Isparta Erkek KYK ',
      'puan':0,
      'imkanlar':['Bozuk Peynir','Taş Ekmek','Pişmemiş Tavuk',],
      'mesafe':'100m'
    },
      {
      'ad':'Burger King',
      'adres':'Yeşilevler Mah',
      'puan':1,
      'imkanlar':['Hamburger','Dondurma','İçecek'],
      'mesafe':'19km'
    }
    ]
   }
    );
}

const mekanBilgisi=function(req, res, next){
    res.render('mekanBilgisi',
    {
    'baslik': 'Mekan Bilgisi',
    'sayfaBaslik': 'Starbucks',
    'mekanBilgisi':{
        'ad':'Starbucks',
        'adres':'Centrum Garden AVM',
        'puan':3,
        'imkanlar':['Dünya Kahveleri','Kekleri','Pastalar'],
        'koordinatlar':{
          'enlem':'37.781835',
          'boylam':'30.566034'
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
            'kapanis':'22:00',
            'kapali':false
          },
          {
            'gunler':'Pazar',
            'kapali':true
          }
        ],
        'yorumlar':[
          {
            'yorumYapan':'Mehmet Armağan TOKLU',
            'puan':1,
            'tarih':'02.12.2020',
            'yorumMetni':'Buraya bir daha gitmeyin çay ocağına gidin'

          },
          {
            'yorumYapan':'Ahmet Kaan KENAR',
            'puan':5,
            'tarih':'20:12:2020',
            'yorumMetni':'Süper'
          }

        ]
    }
    } ) ;
}
const yorumEkle=function(req,res,next){
  res.render('yorumEkle',{title:'Yorum Yap'});
}
module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}