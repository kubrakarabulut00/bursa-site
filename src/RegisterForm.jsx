import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm({ onRegistration }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [registeredUser, setRegisteredUser] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    const userData = {
      username,
      password
    };
  
 
    const muhtarliklar = [
      {
        "ID": 1,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ADALET MAH.MUHTARI",
        "AD_SOYAD": "HÜZEYFE TIĞ",
        "TELEFON": "0537 933 25 90",
        "ADRES": "ADALET MAH. 3.AHMETLER ÇIKMAZI NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 2,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "AHMETBEY  MAH.MUHTARI",
        "AD_SOYAD": "SÜLEYMAN YAVUZ",
        "TELEFON": "0532 413 93 52",
        "ADRES": "AHMETBEY MAH. AHMETBEY SOK. OSMANGAZİ\/BURSA"
       },
       {
        "ID": 3,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "AHMETPAŞA MAH.MUHTARI",
        "AD_SOYAD": "ERDAL KONGU",
        "TELEFON": "0531 948 47 10",
        "ADRES": "AHMETPAŞA MAH. F.KORUTÜRK CD. NO:85 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 4,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "AKPINAR MAH.MUHTARI",
        "AD_SOYAD": "SEVGİ GÜLTEKİN",
        "TELEFON": "0535 828 86 51",
        "ADRES": "AKPINAR MAH. HANCI CD. NO:5\/5           OSMANGAZİ\/BURSA"
       },
       {
        "ID": 5,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "AKSUNGUR  MAH.MUHTARI",
        "AD_SOYAD": "RECEP İLHAN",
        "TELEFON": "0532 767 59 20",
        "ADRES": "AKSUNGUR MAH.AKSUNGUR SOK. OSMANGAZİ\/BURSA"
       },
       {
        "ID": 6,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "AKTARHÜSSAM MAH.MUHTARI",
        "AD_SOYAD": "NARİN SELÇUK",
        "TELEFON": "0551 421 87 91",
        "ADRES": "AKTARHÜSSAM MAH. BURSALI TAHİR CD. NO:5 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 7,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALAADDİN  MAH.MUHTARI",
        "AD_SOYAD": "İSMAİL GÖZÜUĞURLU",
        "TELEFON": "0532 695 04 29",
        "ADRES": "ALAADDİN  MAH. ZİNDANKAPI SOK. NO:55 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 8,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALACAHIRKA  MAH.MUHTARI",
        "AD_SOYAD": "FEVZİ DURSUN",
        "TELEFON": "0536 445 86 45",
        "ADRES": "ALACAHIRKA MAH. ZİNDANKAPI SOK. NO:40 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 9,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALACAMESCİT  MAH.MUHTARI",
        "AD_SOYAD": "SALİM ÇAVDAR",
        "TELEFON": "0535 378 01 90",
        "ADRES": "ALACAMESCİT MAH. TUZPAZARI SOK. NO: 9 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 10,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALAŞAR  MAH.MUHTARI",
        "AD_SOYAD": "İDRİS AYDIN",
        "TELEFON": "0532 350 66 60",
        "ADRES": "ALAŞAR  MAH. ASLI SOK. NO:4 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 11,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALEMDAR  MAH.MUHTARI",
        "AD_SOYAD": "ABDULLAH AKAY",
        "TELEFON": "0536 337 16 11",
        "ADRES": "ALEMDAR  MAH. ORMANLARYOLU CAD. NO:59 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 12,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALİPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ BODUR",
        "TELEFON": "0505 281 89 85",
        "ADRES": "ALİPAŞA MAH. PINARBAŞI CAD. 4. KAZAN SOK. NO:52 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 13,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALTINOVA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KARAOĞLU",
        "TELEFON": "0535 359 51 10",
        "ADRES": "ALTINOVA MAH.  KESKİN SK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 14,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ALTIPARMAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "M.RAHŞAN ASLANTAŞ",
        "TELEFON": "0532 207 70 25",
        "ADRES": "ALTIPARMAK MAH. KUYULU SK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 15,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ARMUT MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEKİ YARDIMCI",
        "TELEFON": "0533.348 00 99",
        "ADRES": "ARMUTKÖY MAH.  ASLI SK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 16,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ATICILAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADEM DEMİR",
        "TELEFON": "0535 769 23 53",
        "ADRES": "ATICILAR MAH. GÜVERCİN SK. NO:15 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 17,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "AVDANCIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET EMİN ERTAŞ",
        "TELEFON": "0532 466 57 98",
        "ADRES": "AVDANCIK MAH.ADVANCIK SOK. OSMANGAZİ\/BURSA"
       },
       {
        "ID": 18,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "BAĞLARBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN GÜMÜŞSOY",
        "TELEFON": "0533 626 65 10",
        "ADRES": "BAĞLARBAŞI MAH. NİLÜFER CAD. NO:36 OSMANGAZİ \/ BURSA"
       },
       {
        "ID": 19,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "BAĞLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KAYA",
        "TELEFON": "0533 720 68 75",
        "ADRES": "BAĞLI MAH. BAĞLI SOK. OSMANGAZİ\/BURSA"
       },
       {
        "ID": 20,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "BAHAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MÜLAYİM VARDAR",
        "TELEFON": "0533 268 03 01",
        "ADRES": "BAHAR MAH. NEHİR SK. NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 21,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "BAŞARAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL YILMAZLAR",
        "TELEFON": "0532 451 13 62",
        "ADRES": "BAŞARAN MAH. BAŞARAN SOK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 22,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "BÜYÜKDELİLLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÜNAL ORUÇ",
        "TELEFON": "0533 512 24 65",
        "ADRES": "BÜYÜKDELİLLER MAH. PEKER SOK. NO:14 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 23,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇAĞLAYAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA CEBECİ",
        "TELEFON": "0532 232 93 97",
        "ADRES": "ÇAĞLAYAN MAH. ÇAĞLIYAN SOK. OSMANGAZİ\/BURSA"
       },
       {
        "ID": 24,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇAYBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ KARAKAYA",
        "TELEFON": "0535 345 35 41",
        "ADRES": "ÇAYBAŞI MAH. ÇAYBAŞI SOK.OSMANGAZİ\/BURSA"
       },
       {
        "ID": 25,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇEKİRGE MAHALLESİ MUHTARI",
        "AD_SOYAD": "COŞKUN ALINDAŞ",
        "TELEFON": "0532 616 58 81",
        "ADRES": "ÇEKİRGE MAH. LAMİ SOK. NO:14 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 26,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇELTİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMAL KAYMAK",
        "TELEFON": "0532 543 62 49",
        "ADRES": "ÇELTİK MAH. YENİYOL NO:40 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 27,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇIRPAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF DEMİR",
        "TELEFON": "0532 583 47 49",
        "ADRES": "ÇIRPAN MAH. MERİNOSLU SOK. NO:5 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 28,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇİFTEHAVUZLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA SÜLEYMAN",
        "TELEFON": "0532 475 33 91",
        "ADRES": "ÇİFTEHAVUZLAR MAH. ÇİRİŞHANE CAD. NO:136 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 29,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇİRİŞHANE MAHALLESİ MUHTARI",
        "AD_SOYAD": "APDİL DURMUŞ",
        "TELEFON": "0532 611 78 38",
        "ADRES": "ÇİRİŞHANE MAH. OKUL SOK. NO:4 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 30,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ÇUKURCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAYİT ÇETİN",
        "TELEFON": "0534 656 48 41",
        "ADRES": "ÇUKURCA MAH.  ÇİĞDEM SOK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 31,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "D.BARBAROS MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAYİL SAVAŞ",
        "TELEFON": "0532 206 93 16",
        "ADRES": "DEMİRTAŞ BARBAROS MAH. PANAYIR CAD. NO:4 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 32,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "D.CUMHURİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA MAYİL",
        "TELEFON": "0532 012 01 99",
        "ADRES": "DEMİRTAŞ CUMHURİYET MAH.  ATATÜRK CAD. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 33,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "D.DUMLUPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN TOPALOĞLU",
        "TELEFON": "0544 844 96 44",
        "ADRES": "DEMİRTAŞ DUMLUPINAR MAH. YILDIZ SOK. NO:8 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 34,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "D.SAKARYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MÜMİN DÜNDAR",
        "TELEFON": "0507 764 51 18",
        "ADRES": "DEMİRTAŞ SAKARYA MAH. ATATÜRK CAD. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 35,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DAĞAKÇA MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURETTİN MENTEŞ",
        "TELEFON": "0551 711 04 44",
        "ADRES": "DAĞAKÇA MAH. DAĞAKÇA SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 36,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DEMİRTAŞPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "İHSAN TOZAKLI",
        "TELEFON": "0536 637 30 01",
        "ADRES": "DEMİRTAŞPAŞA MAH. OKUL SOK. No:11 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 37,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DEREÇAVUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP ARSLAN",
        "TELEFON": "0532 611 71 76",
        "ADRES": "DEREÇAVUŞ MAH. DERMAN SOK. NO:9 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 38,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DİKKALDIRIM MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ÖZDERYA",
        "TELEFON": "0532 740 15 51",
        "ADRES": "DİKKALDIRIM MAH. HOŞ SOK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 39,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DOBRUCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYHAN KARAKUŞ",
        "TELEFON": "0532 669 72 16",
        "ADRES": "DOBRUCA MAH. TEPE SOK. NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 40,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DOĞANBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN NURİ AYBAKAN",
        "TELEFON": "0532 474 37 11",
        "ADRES": "DOĞANBEY MAH. BAHÇIVAN SOK. NO:4\/1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 41,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DOĞANCI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ARI",
        "TELEFON": "0538 882 08 17",
        "ADRES": "DOĞANCI MAH.DOĞANCI SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 42,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DOĞANEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "SERKAN KOÇER",
        "TELEFON": "0536 570 99 18",
        "ADRES": "DOĞANEVLER MAH. DERYA SOK. NO:19 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 43,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "DÜRDANE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL İBRAHİM  İNCE",
        "TELEFON": "0532 250 22 96",
        "ADRES": "DÜRDANE MAH.DÜRDANE SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 44,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "EBU İSHAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA DURMAZ",
        "TELEFON": "0535 419 49 27",
        "ADRES": "EBU İSHAK MAH. İSHAK SOK. NO:5 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 45,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ELMASBAHÇELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAŞAR GÜL",
        "TELEFON": "0532 244 01 52",
        "ADRES": "ELMASBAHÇELER MAH. ATAN SOK. NO:32 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 46,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "EMEK A.MENDERES.MUHTARI",
        "AD_SOYAD": "NACİ ÖZBAY",
        "TELEFON": "0532 483 24 15",
        "ADRES": "EMEK ADNAN MENDERES. MAH. OSMANAĞA CAD. NO:46 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 47,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "EMEK FATİH SULTAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEYNEP KELEŞ",
        "TELEFON": "0541 918 13 38",
        "ADRES": "EMEK FATİH SULTAN MAH. RAMAZAN OKUR CAD. NO:93 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 48,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "EMEK Z.GÜMÜŞDİŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "TALİP APTİOĞLU",
        "TELEFON": "0533 602 32 85",
        "ADRES": "EMEK ZEKAİ GÜMÜŞDİŞ MAH. MAREŞAL FEVZİ ÇAKMAK CAD. NO:4 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 49,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ESENTEPE\/D.KAPI MAHALLESİ MUHTARI",
        "AD_SOYAD": "FERİT UÇAR",
        "TELEFON": "0535 323 09 31",
        "ADRES": "ESENTEPE\/D.KAPI MAH. DEMİRKAPI SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 50,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "FATİH MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZİYA ALINCA",
        "TELEFON": "0537 426 77 61",
        "ADRES": "FATİH MAH. DOĞAN CAD. NO:76 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 51,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GAZİAKDEMİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMET AY",
        "TELEFON": "0536 271 25 51",
        "ADRES": "GAZİAKDEMİR MAH. GELİNCİK SOK. NO:24\/A OSMANGAZİ\/BURSA"
       },
       {
        "ID": 52,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GEÇİT MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERKAN TEMİZ",
        "TELEFON": "0537 475 38 56",
        "ADRES": "GEÇİT MAH. SANAYİ CD. NO:796 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 53,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GÖKÇEÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN YİĞİT",
        "TELEFON": "0537 668 39 51",
        "ADRES": "GÖKÇEÖREN MAH. GÖKÇEÖREN SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 54,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GÜLBAHÇE MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAYRAM SAYGILI",
        "TELEFON": "0535 699 23 99",
        "ADRES": "GÜLBAHÇE MAH. GÜNEY SOK. NO:3 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 55,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GÜNDOĞDU MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAVAŞ ÖZKAN",
        "TELEFON": "0535 552 15 19",
        "ADRES": "GÜNDOĞDU MAH.  ATATÜRK CAMİİ ALTI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 56,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GÜNEŞTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAVCI AKGÜN",
        "TELEFON": "0532 617 04 11",
        "ADRES": "GÜNEŞTEPE MAH. YAMAN CAD. NO:165 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 57,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GÜNEYBAYIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN OĞUZ",
        "TELEFON": "0537 595 36 24",
        "ADRES": "GÜNEYBAYIR MAH. GÜNEYBAYIR SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 58,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "GÜNEYBUDAKLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ ÖZTÜRK",
        "TELEFON": "0532 616 86 52",
        "ADRES": "GÜNEYBUDAKLAR MAH. GÜNEYBUDAKLAR SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 59,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HACI İLYAS MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL FİDAN",
        "TELEFON": "0532 257 61 13",
        "ADRES": "HACI İLYAS MAH.  HACIİLYAS SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 60,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HAMİTLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSAMETTİN AŞKIN",
        "TELEFON": "0532 265 5805",
        "ADRES": "HAMİTLER MAH. 2. MERAM SOK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 61,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HAMZABEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞABAN GÜLEN",
        "TELEFON": "0535 398 28 11",
        "ADRES": "HAMZABEY MAH. KAPLICA CAD. NO:55 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 62,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HOCA ALİZADE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KEMAL AKTAŞ",
        "TELEFON": "0541 223 39 83",
        "ADRES": "HOCAALİZADE MAH. KERESTECİLER CAD. NO:3 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 63,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HOCA HASAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA YARGIÇ",
        "TELEFON": "0535 254 05 54",
        "ADRES": "HOCAHASAN MAH. GÜZEL SOK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 64,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HÜDAVENDİGAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA PALA",
        "TELEFON": "0535 831 22 61",
        "ADRES": "HÜDAVENDİGAR MAH.  ESEN CAD. NO:28 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 65,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HÜRRİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "FATMA TUNÇEZER",
        "TELEFON": "0552 308 19 55",
        "ADRES": "HÜRRİYET MAH. KURTULDU SOK. NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 66,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "HÜSEYİNALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET YILMAZ",
        "TELEFON": "0532 597 20 44",
        "ADRES": "HÜSEYİNALAN MAH. HÜSEYİNALAN SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 67,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "İBRAHİM PAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "S. MİZYAL TUNÇMAN",
        "TELEFON": "0555 982 80 27",
        "ADRES": "İBRAHİM PAŞA MAH. KIZOKULU CAD. NO:11 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 68,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "İNKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖZKAN BOZ",
        "TELEFON": "0532 324 88 06",
        "ADRES": "İNKAYA MAH. İNAN SOK. NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 69,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "İNTİZAM MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM TOPLAL",
        "TELEFON": "0532 795 52 51",
        "ADRES": "İNTİZAM MAH. DEĞİRMEN SOK. NO:22 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 70,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "İSMETİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "BEKİR YAZICILAR",
        "TELEFON": "0532 261 05 95",
        "ADRES": "İSMETİYE MAH. İSTİKLAL SOK. NO:25 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 71,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "İSTİKLAL MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜLNAZ KARADENİZ",
        "TELEFON": "0533 714 96 76",
        "ADRES": "İSTİKLAL MAH.  İSTİKLAL CAD. NO:25 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 72,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "İVAZPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL ÖZYILMAZ",
        "TELEFON": "0532 477 58 96",
        "ADRES": "İVAZPAŞA MAH. PINARBAŞI CAD. NO:60 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 73,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "K.BALIKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMİL AKSU",
        "TELEFON": "0537 589 62 12",
        "ADRES": "K.BALIKLI MAH. KÜÇÜKBALIKLI CAD. NO:116 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 74,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KARABALÇIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYHAN AKIN",
        "TELEFON": "0531 631 27 77",
        "ADRES": "KARABALÇIK MAH. KARABALÇIK SOK. NO:91 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 75,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KARAİSLAH MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLYAS YAĞCI",
        "TELEFON": "0544 274 16 16",
        "ADRES": "KARAİSLAH MAH. KARAİSLAH SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 76,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KAVAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SERAP ÖZBAY",
        "TELEFON": "0533 325 88 35",
        "ADRES": "KAVAKLI MAH. YERKAPI CAD. NO:3 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 77,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KAYHAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL TAMUROĞLU",
        "TELEFON": "0532 322 61 93",
        "ADRES": "KAYHAN MAH. IRGANDI KÖPRÜSÜ OSMANGAZİ\/BURSA"
       },
       {
        "ID": 78,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KEMERÇEŞME MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEDAT TOĞALOĞLU",
        "TELEFON": "0533 934 09 41",
        "ADRES": "KEMERÇEŞME MAH. KEMERÇEŞME CAD. NO:89 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 79,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KIRCA ALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞERİF AKGÜN",
        "TELEFON": "0532 357 37 76",
        "ADRES": "KIRCA ALİ MAH. AKGÜN SOK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 80,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KİRAZLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT SEVİMLİ",
        "TELEFON": "0536 516 29 08",
        "ADRES": "KİRAZLI MAH. KİRAZLI SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 81,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KİREMİTÇİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "KENAN SOLAK",
        "TELEFON": "0532 356 62 67",
        "ADRES": "KİREMİTÇİ MAH. DOĞANBEY CAD. NO:53 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 82,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KOCANAİP MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ŞİRİN",
        "TELEFON": "0533 818 32 88",
        "ADRES": "KOCANAİP MAH. KAPLICA CAD. NO:58 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 83,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KOĞUKÇINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAİT ERGEN",
        "TELEFON": "0533 777 60 09",
        "ADRES": "KOĞUKÇINAR MAH. AYGÖREN SOK. NO:6\/1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 84,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KURUÇEŞME MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ POLAT",
        "TELEFON": "0535 766 62 73",
        "ADRES": "KURUÇEŞME MAH.  SAKARYA CAD. NO:3 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 85,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KÜÇÜKDELİLLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET BOZKURT",
        "TELEFON": "0536 515 89 17",
        "ADRES": "KÜÇÜKDELİLLER MAH.CAMİ CADDESİ NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 86,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KÜKÜRTLÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "CANAN AKIN ERDEM",
        "TELEFON": "0533 201 86 09",
        "ADRES": "KÜKÜRTLÜ MAH.  MAVİLİ SOK. NO:3 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 87,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "KÜPLÜPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAMİL KONUŞKAN",
        "TELEFON": "0532 241 58 97",
        "ADRES": "KÜPLÜPINAR MAH.  DİCLE SOK. NO:9 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 88,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "MAKSEM MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET GÜLEÇ",
        "TELEFON": "0532 233 54 06",
        "ADRES": "MAKSEM MAH.  MURAT SOK. NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 89,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "MEHMET AKİF MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN SAKİN",
        "TELEFON": "0535 464 56 12",
        "ADRES": "MEHMET AKİF MAH.  TRAFO CAD. NO:3 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 90,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "MOLLAFENARİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF MARABA",
        "TELEFON": "0536 318 28 58",
        "ADRES": "MOLLAFENARİ MAH. KAHVECİ ÇIKMAZI NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 91,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "MOLLAGÜRANİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "METİN ACAR",
        "TELEFON": "0535 857 85 95",
        "ADRES": "MOLLAGÜRANİ MAH. EMİRABDÜLKADİR SOK NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 92,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "MURADİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "VAHİDE KILIÇKAYA",
        "TELEFON": "0530 924 04 24",
        "ADRES": "MURADİYE MAH. KAPLICA CAD. NO:53 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 93,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "MÜRSELLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ GEZEN",
        "TELEFON": "0536 973 06 20",
        "ADRES": "MÜRSELLER MAH.  MÜRSELLER SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 94,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "NALBANTOĞLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÖNÜL METELİKÇİ",
        "TELEFON": "0532 617 37 03",
        "ADRES": "NALBANTOĞLU MAH. CAMİ ARALIĞI NO:5\/1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 95,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "NAMIK KEMAL MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMETTİN GENİŞ",
        "TELEFON": "0535 409 62 30",
        "ADRES": "NAMIK KEMAL MAH.  BADEM SOK. NO:11 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 96,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "NİLÜFERKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "BURHAN MANDACI",
        "TELEFON": "0533 300 07 73",
        "ADRES": "NİLÜFERKÖY MAH. CUMHURİYET MEYDANI NO:7 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 97,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ORHANBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEM PEKÖZCAN",
        "TELEFON": "0507 447 55 12",
        "ADRES": "ORHANBEY MAH. TAŞKAPI CAD. NO:22 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 98,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "OSMANGAZİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALAATTİN CANIGÜLEÇ",
        "TELEFON": "0544 808 09 56",
        "ADRES": "OSMANGAZİ MAH. ORUÇBEY CAD. NO:32 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 99,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "OVAAKÇA ÇEŞMEBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞAKİR YAKUPOĞLU",
        "TELEFON": "0536 719 49 81",
        "ADRES": "OVAAKÇA ÇEŞMEBAŞI MAH.  MEVLANA CAD. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 100,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "OVAAKÇA EĞİTİM MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMET ERMİŞ",
        "TELEFON": "0541 689 22 69",
        "ADRES": "OVAAKÇA EĞİTİM MAH.  ADNANMENDERES CAD. NO:19 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 101,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "OVAAKÇA MERKEZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL  TAŞDEMİR",
        "TELEFON": "0534 848 64 25",
        "ADRES": "OVAAKÇA MERKEZ MAH.  EMİRSULTAN CAD. NO:10 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 102,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "OVAAKÇA SANTRAL MAHALLESİ MUHTARI",
        "AD_SOYAD": "YASEMİN VATANSEVER",
        "TELEFON": "0546 761 30 37",
        "ADRES": "OVAAKÇA SANTRAL MAH. ADNANMENDERES CAD. NO:19 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 103,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "PANAYIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "BİNALİ TAŞ",
        "TELEFON": "0536 616 86 06",
        "ADRES": "PANAYIR MAH.  DERMAN CAD. NO:54 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 104,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "PINARBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL İBRAHİM KOÇUM",
        "TELEFON": "0532 347 14 20",
        "ADRES": "PINARBAŞI MAH.  TEKKE SOK. NO:4 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 105,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "REYHAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYKUT ÖZKAN",
        "TELEFON": "0532 626 28 00",
        "ADRES": "REYHAN MAH. BEKİRDEDE SOK. NO:1D OSMANGAZİ\/BURSA"
       },
       {
        "ID": 106,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "S.GARAJ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN BİLBAY",
        "TELEFON": "0532 508 76 09",
        "ADRES": "S.GARAJ MAH.  ULU SOK. NO:70 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 107,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SAKARYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "NUSRET AYDIN",
        "TELEFON": "0532 244 67 17",
        "ADRES": "SAKARYA MAH. ÇEŞME SOK. NO:25 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 108,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SEÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN TÜRE",
        "TELEFON": "0532 596 74 06",
        "ADRES": "SEÇ MAH. SEÇ SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 109,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SEFERIŞIKLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN KAHRAMAN",
        "TELEFON": "0536 238 76 97",
        "ADRES": "SEFERIŞIKLAR MAH.  SEFERIŞIKLAR SOKAĞI NO:133 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 110,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SELAMET MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL ÜSKÜPLÜ",
        "TELEFON": "0532 442 29 11",
        "ADRES": "SELAMET MAH.  SEZGİN CAD. NO:19 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 111,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SELÇUKGAZİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ ARPAN",
        "TELEFON": "0535 030 76 14",
        "ADRES": "SELÇUKGAZİ MAH. SELÇUKGAZİ MEYDANI NO:111 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 112,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SELİMİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA DEMİR",
        "TELEFON": "0532 461 46 49",
        "ADRES": "SELİMİYE MAH. 5.DEĞİRMEN SOK. NO:35 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 113,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SIRAMEŞELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA FERİK",
        "TELEFON": "0532 397 10 42",
        "ADRES": "SIRAMEŞELER MAH.  GÜÇLÜ SOK. NO:3\/A OSMANGAZİ\/BURSA"
       },
       {
        "ID": 114,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SOĞANLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEYNEP YILDIRIM",
        "TELEFON": "0535 373 16 31",
        "ADRES": "SOĞANLI MAH. PINAR SOK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 115,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SOĞUKKUYU MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEVİN GÜNDAY",
        "TELEFON": "0532 556 35 65",
        "ADRES": "SOĞUKKUYU MAH.  FAKÜLTE CAD. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 116,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SOĞUKPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ŞİRİN",
        "TELEFON": "0535 342 41 99",
        "ADRES": "SOĞUKPINAR MAH. SOĞUKPINAR SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 117,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "SÜLEYMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEDAT DEMİR",
        "TELEFON": "0532 440 72 52",
        "ADRES": "SÜLEYMANİYE MAH.  SÜLEYMANİYE SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 118,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ŞAHABETTİNPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN DUŞAR",
        "TELEFON": "0539 229 50 22",
        "ADRES": "ŞAHABETTİNPAŞA MAH.  ÇATAL SOK. NO:44 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 119,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ŞEHREKÜSTÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAMİ TOKAKİ",
        "TELEFON": "0541 211 60 36",
        "ADRES": "ŞEHREKÜSTÜ MAH.  SEVİNÇ SOK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 120,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "TAHTAKALE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET YAVUZ",
        "TELEFON": "0532 200 55 36",
        "ADRES": "TAHTAKALE MAH. MAKSEM CAD. NO:65 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 121,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "TAYAKADIN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN GENÇ",
        "TELEFON": "0533 560 93 12",
        "ADRES": "TAYAKADIN MAH. TAYAKADIN CAD. NO:38 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 122,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "TUNA MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYŞEGÜL YILDIZ",
        "TELEFON": "0535 671 01 55",
        "ADRES": "TUNA MAH.  GÜRDAL CAD. NO:26\/1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 123,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "TUZAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ İŞGÖREN",
        "TELEFON": "0533 421 41 74",
        "ADRES": "TUZAKLI MAH. TUZAKLI SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 124,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "TUZPAZARI MAHALLESİ MUHTARI",
        "AD_SOYAD": "FERRUH SEVİMGİL",
        "TELEFON": "0536 612 15 33",
        "ADRES": "TUZPAZARI MAH. HAŞİM İŞCAN CAD. NO:9 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 125,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ULUÇAM MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAMİL ALMAZ",
        "TELEFON": "0535 778 77 03",
        "ADRES": "ULUÇAM MAH. ULUÇAM SOKAĞI NO:66 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 126,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ULUMAHALLE MUHTARI",
        "AD_SOYAD": "SEZEN FİDAN",
        "TELEFON": "0533 415 95 92",
        "ADRES": "ULU MAH. ULU ÇIKMAZI NO:7 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 127,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "VEYSEL KARANİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA GEZGİN",
        "TELEFON": "0532 257 05 33 ",
        "ADRES": "VEYSEL KARANİ MAH.  VİLLA SOK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 128,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YAHŞİBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEJAT YETİŞİR",
        "TELEFON": "0507 033 11 43",
        "ADRES": "YAHŞİBEY MAH.  ALAN SOK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 129,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YENİ BAĞLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADİL GÖKÇE",
        "TELEFON": "0537 515 28 84",
        "ADRES": "YENİ BAĞLAR MAH. TAN SOK. NO:2 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 130,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YENİ KARAMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEYFİ YURTAÇAN",
        "TELEFON": "0532 576 48 16",
        "ADRES": "YENİ KARAMAN MAH.  POLAT CAD. NO:59 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 131,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YENİCEABAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELİM YATGI",
        "TELEFON": "0535 341 57 95",
        "ADRES": "YENİCEABAT MAH. YÜKSEK SOK. NO:1 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 132,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YENİKENT MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN AYDIN",
        "TELEFON": "0541 616 13 61",
        "ADRES": "YENİKENT MAH. 731.SOK. NO:4 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 133,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YEŞİLOVA MAHALLESİ MUHTARI",
        "AD_SOYAD": "FAHİR DEMİR",
        "TELEFON": "0535 940 40 72",
        "ADRES": "YEŞİLOVA MAH. KEMERÇEŞME CAD. NO:89 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 134,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YİĞİTALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "TAHİR AYDIN",
        "TELEFON": "0533 262 74 54",
        "ADRES": "YİĞİTALİ MAH.  YİĞİTALİ SOKAĞI OSMANGAZİ\/BURSA"
       },
       {
        "ID": 135,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "YUNUSELİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM BAHAR",
        "TELEFON": "0532 461 69 52",
        "ADRES": "YUNUSELİ MAH.  TAŞKÖPRÜ CAD. NO:7 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 136,
        "ILCE": "OSMANGAZİ",
        "MAHALLE": "ZAFER MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET KARABURUN",
        "TELEFON": "0536 827 80 08",
        "ADRES": "ZAFER MAH. ZAFER BULVARI NO:6 OSMANGAZİ\/BURSA"
       },
       {
        "ID": 137,
        "ILCE": "YILDIRIM",
        "MAHALLE": "152 EVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜLSEN ÖZTÜRK",
        "TELEFON": "0530 551 12 36",
        "ADRES": "152 EVLER MAH. 1.DAMLA SOK. NO:14 YILDIRIM\/BURSA"
       },
       {
        "ID": 138,
        "ILCE": "YILDIRIM",
        "MAHALLE": "75.YIL MAHALLESİ MUHTARI",
        "AD_SOYAD": "FİGEN ERMANTAŞ",
        "TELEFON": "0507 747 21 25",
        "ADRES": "75.YIL MAH. KARAGÖZ CAD. YILDIRIM\/BURSA"
       },
       {
        "ID": 139,
        "ILCE": "YILDIRIM",
        "MAHALLE": "AKÇAĞLAYAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SALİH İNAN ",
        "TELEFON": "0535 622 93 09",
        "ADRES": "AKÇAĞLAYAN MAH. 1. AFACANLAR SOK. N0:24 YILDIRIM\/BURSA"
       },
       {
        "ID": 140,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ANADOLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞABAN EMİN DURMAZ",
        "TELEFON": "0533 311 12 56",
        "ADRES": "ANADOLU MAH. 2.CENK SOK. NO:1O YILDIRIM\/BURSA"
       },
       {
        "ID": 141,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ARABAYATAĞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET SELİM SEVİM",
        "TELEFON": "0552 745 16 01",
        "ADRES": "ARABAYATAĞI MAH. HASTANE CAD. NO:1 YILDIRIM\/BURSA"
       },
       {
        "ID": 142,
        "ILCE": "YILDIRIM",
        "MAHALLE": "BAĞLARALTI MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAİF KOCABAŞ",
        "TELEFON": "0531 569 39 43 ",
        "ADRES": "BAĞLARALTI MAH. 305. SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 143,
        "ILCE": "YILDIRIM",
        "MAHALLE": "BALABAN  MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞERİF SEVCAN",
        "TELEFON": "0535 303 00 56",
        "ADRES": "BALABAN  MAH. BALABAN SOK. NO:2 YILDIRIM\/BURSA"
       },
       {
        "ID": 144,
        "ILCE": "YILDIRIM",
        "MAHALLE": "BARUTHANE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET AYBAY",
        "TELEFON": "0532 513 28 17 ",
        "ADRES": "BARUTHANE MAH. TEYYARECİ MEHMET ALİ CAD. NO:181 YILDIRIM\/BURSA"
       },
       {
        "ID": 145,
        "ILCE": "YILDIRIM",
        "MAHALLE": "BEYAZIT MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN ATIŞ",
        "TELEFON": "0532 346 81 80",
        "ADRES": "BEYAZIT MAH. 2.KURT SOK. NO:39 YILDIRIM\/BURSA"
       },
       {
        "ID": 146,
        "ILCE": "YILDIRIM",
        "MAHALLE": "CUMALIKIZIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN YAVUZ",
        "TELEFON": "0533 923 73 71",
        "ADRES": "CUMALIKIZIK MAH. ORTA SOK. NO:8 YILDIRIM\/BURSA"
       },
       {
        "ID": 147,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ÇINARÖNÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ÜN",
        "TELEFON": "0553 676 07 43",
        "ADRES": "ÇINARÖNÜ MAH. ÇINARÖNÜ CAD NO:76 YILDIRIM\/BURSA"
       },
       {
        "ID": 148,
        "ILCE": "YILDIRIM",
        "MAHALLE": "DAVUTDEDE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN ÖZBEK",
        "TELEFON": "0530 697 41 41 ",
        "ADRES": "DAVUTDEDE MAH. 2.AÇIK SOK. NO:4 YILDIRIM\/BURSA"
       },
       {
        "ID": 149,
        "ILCE": "YILDIRIM",
        "MAHALLE": "DAVUTKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAYRAM DEMİR",
        "TELEFON": "0532 725 81 04",
        "ADRES": "DAVUTKADI MAH. SULTAN SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 150,
        "ILCE": "YILDIRIM",
        "MAHALLE": "DEĞİRMENLİKIZIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ARİF EKER",
        "TELEFON": "0532 235 55 48",
        "ADRES": "DEĞİRMENLİKIZIK MAH. 2.TÜTÜNCÜOĞLU CAD. NO:23 YILDIRIM\/BURSA"
       },
       {
        "ID": 151,
        "ILCE": "YILDIRIM",
        "MAHALLE": "DEĞİRMENÖNÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAZİF YILMAZ",
        "TELEFON": "0542 794 95 91 ",
        "ADRES": "DEĞİRMENÖNÜ MAH. 4.GÜLER SOK. NO:28 YILDIRIM\/BURSA"
       },
       {
        "ID": 152,
        "ILCE": "YILDIRIM",
        "MAHALLE": "DEMETEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN ACAR",
        "TELEFON": "0532 402 09 31 ",
        "ADRES": "DEMETEVLER MAH. A236. SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 153,
        "ILCE": "YILDIRIM",
        "MAHALLE": "DUAÇINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MÜMİN YILDIZ",
        "TELEFON": "0538 251 39 51",
        "ADRES": "DUAÇINAR MAH. YÜKSEK SOK. NO:5 YILDIRIM\/BURSA"
       },
       {
        "ID": 154,
        "ILCE": "YILDIRIM",
        "MAHALLE": "EĞİTİM MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET YILDIRIM",
        "TELEFON": "0532 730 89 45",
        "ADRES": "EĞİTİM MAH. 2. NARLI SOK. NO:7  YILDIRIM\/BURSA"
       },
       {
        "ID": 155,
        "ILCE": "YILDIRIM",
        "MAHALLE": "EMİRSULTAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ZİYA AYDINLI",
        "TELEFON": "0543 450 62 49",
        "ADRES": "EMİRSULTAN MAH. DOYURAN CAD. NO:16 YILDIRIM\/BURSA"
       },
       {
        "ID": 156,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ERİKLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADEM RENÇPER",
        "TELEFON": "0532 333 76 08",
        "ADRES": "ERİKLİ MAH. ADİL SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 157,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ERTUĞRULGAZİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYTEN ÜLKÜ",
        "TELEFON": "0536 828 41 71",
        "ADRES": "ERTUĞRULGAZİ MAH. ZÜMRÜT SOK. NO:7 YILDIRIM\/BURSA"
       },
       {
        "ID": 158,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ESENEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET BOZKURT",
        "TELEFON": "0537 251 13 43",
        "ADRES": "ESENEVLER MAH. EDEBALİ SOK. NO:41 YILDIRIM\/BURSA"
       },
       {
        "ID": 159,
        "ILCE": "YILDIRIM",
        "MAHALLE": "FİDYEKIZIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF KANTAROĞLU",
        "TELEFON": "0537 700 73 07",
        "ADRES": "FİDYEKIZIK MAH. BURSA CAD. NO:5 YILDIRIM\/BURSA"
       },
       {
        "ID": 160,
        "ILCE": "YILDIRIM",
        "MAHALLE": "GÜLLÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL EROĞLU",
        "TELEFON": "0535 354 06 30",
        "ADRES": "GÜLLÜK MAH. GİRNE CAD. NO:31A YILDIRIM\/BURSA"
       },
       {
        "ID": 161,
        "ILCE": "YILDIRIM",
        "MAHALLE": "HACISEFETTİN MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEŞE  PALMANAK",
        "TELEFON": "0536 659 41 81",
        "ADRES": "HACISEFETTİN MAH. MÜCELLEDDİN SOK. NO:16 YILDIRIM\/BURSA"
       },
       {
        "ID": 162,
        "ILCE": "YILDIRIM",
        "MAHALLE": "HACİVAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYRETTİN AYGÜN",
        "TELEFON": "0535 858 53 78",
        "ADRES": "HACİVAT MAH. A137 SOK. NO:8 YILDIRIM\/BURSA"
       },
       {
        "ID": 163,
        "ILCE": "YILDIRIM",
        "MAHALLE": "HAMAMLIKIZIK KÖYÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "FERİDUN ÇAKIR",
        "TELEFON": "0532 432 87 53",
        "ADRES": "HAMAMLIKIZIK KÖYÜ MAH. HAMAMLIKIZIKN KÖYÜ İÇ YOLU NO:17 YILDIRIM\/BURSA"
       },
       {
        "ID": 164,
        "ILCE": "YILDIRIM",
        "MAHALLE": "HOCATAŞKIN MAHALLESİ MUHTARI",
        "AD_SOYAD": "UFUK VARVEREN",
        "TELEFON": "0536 620 11 64",
        "ADRES": "HOCATAŞKIN MAH. KARACADERE SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 165,
        "ILCE": "YILDIRIM",
        "MAHALLE": "İSABEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAHRİ KOZUK",
        "TELEFON": "0532 231 32 45",
        "ADRES": "İSABEY MAH. İYİGÜN SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 166,
        "ILCE": "YILDIRIM",
        "MAHALLE": "KAPLIKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MAKSUT KÖZ",
        "TELEFON": "0505 385 01 80",
        "ADRES": "KAPLIKAYA MAH. 2. KIYI SOK. NO:69 YILDIRIM\/BURSA"
       },
       {
        "ID": 167,
        "ILCE": "YILDIRIM",
        "MAHALLE": "KARAAĞAÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEMA PAMUKÇULAR",
        "TELEFON": "0544 327 04 64",
        "ADRES": "KARAAĞAÇ MAH. BÜYÜKARALIK SOK. NO:12\/1 YILDIRIM\/BURSA"
       },
       {
        "ID": 168,
        "ILCE": "YILDIRIM",
        "MAHALLE": "KARAMAZAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVDET BAYRAM",
        "TELEFON": "0535 700 18 02",
        "ADRES": "KARAMAZAK MAH. 4.CAN SOK. NO:29 YILDIRIM\/BURSA"
       },
       {
        "ID": 169,
        "ILCE": "YILDIRIM",
        "MAHALLE": "KARAPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ÇAKIR",
        "TELEFON": "0537 211 93 28",
        "ADRES": "KARAPINAR MAH. YILDIRIM SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 170,
        "ILCE": "YILDIRIM",
        "MAHALLE": "KAZIM KARABEKİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "YILMAZ ALTUNTAŞ",
        "TELEFON": "0532 322 69 17",
        "ADRES": "KAZIM KARABEKİR MAH. MERİÇ SOK. NO:89A YILDIRIM\/BURSA"
       },
       {
        "ID": 171,
        "ILCE": "YILDIRIM",
        "MAHALLE": "KURTOĞLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET GEDİK",
        "TELEFON": "0507 842 16 16",
        "ADRES": "KURTOĞLU MAH. KARŞI SOK. NO:4A YILDIRIM\/BURSA"
       },
       {
        "ID": 172,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MALTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDİNÇ ÇEVİK",
        "TELEFON": "0533 434 70 68",
        "ADRES": "MALTEPE MAH. YELİZ SOK. NO:8 YILDIRIM\/BURSA"
       },
       {
        "ID": 173,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MEHMET AKİF ERSOY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HATİCE ŞAHİN",
        "TELEFON": "0546 583 23 34 ",
        "ADRES": "MEHMET AKİF ERSOY MAH.3. KINALI SOK. NO:21 YILDIRIM\/BURSA"
       },
       {
        "ID": 174,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MEVLANAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAMET EFE",
        "TELEFON": "0533 768 24 08",
        "ADRES": "MEVLANAN MAH. YAVER SOK. NO:32 YILDIRIM\/BURSA"
       },
       {
        "ID": 175,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MEYDANCIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SULTAN DEMİRCİ",
        "TELEFON": "0532 675 51 44",
        "ADRES": "MEYDANCIK MAH. HUNDU KADIN SOK. NO:1 YILDIRIM\/BURSA"
       },
       {
        "ID": 176,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MİLLET MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA İMDAT",
        "TELEFON": "0533 455 11 94",
        "ADRES": "MİLLET MAH. CENGİZHAN CAD. NO:11A YILDIRIM\/BURSA"
       },
       {
        "ID": 177,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MİMAR SİNAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUHSİN SAK",
        "TELEFON": "0530 346 07 24",
        "ADRES": "MİMAR SİNAN MAH. 3.POYRAZ SOK. NO:29 YILDIRIM\/BURSA"
       },
       {
        "ID": 178,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MOLLAARAP MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ONARAN",
        "TELEFON": "0536 380 62 80",
        "ADRES": "MOLLAARAP MAH.  ÇİMEN CAD. YILDIRIM\/BURSA"
       },
       {
        "ID": 179,
        "ILCE": "YILDIRIM",
        "MAHALLE": "MUSABABA MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜLAY ŞAHİN",
        "TELEFON": "0530 784 08 62",
        "ADRES": "MUSABABA MAH. 8.FATİH SOK. NO: 6 YILDIRIM\/BURSA"
       },
       {
        "ID": 180,
        "ILCE": "YILDIRIM",
        "MAHALLE": "NAMAZGAH MAHALLESİ MUHTARI",
        "AD_SOYAD": "RUHHAN GÖRGÜN",
        "TELEFON": "0505 415 20 27",
        "ADRES": "NAMAZGAH MAH. 2.ARİF SOK NO:17-1 YILDIRIM\/BURSA"
       },
       {
        "ID": 181,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ORTABAĞLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEKİYE GAZİ",
        "TELEFON": "0537 843 90 38",
        "ADRES": "ORTABAĞLAR MAH. OSMANBEY CAD. NO:10 YILDIRIM\/BURSA"
       },
       {
        "ID": 182,
        "ILCE": "YILDIRIM",
        "MAHALLE": "PİREMİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSMEN ONUR",
        "TELEFON": "0530 969 35 25",
        "ADRES": "PİREMİR MAH. TELEFERİK CAD. NO:84 YILDIRIM\/BURSA"
       },
       {
        "ID": 183,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SAMANLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT GÜVEN",
        "TELEFON": "0535 440 36 71",
        "ADRES": "SAMANLI MAH. KOCAALİ CAD. NO:99A YILDIRIM\/BURSA"
       },
       {
        "ID": 184,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SELÇUKBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM KILIÇ",
        "TELEFON": "0532 725 81 22",
        "ADRES": "SELÇUKBEY MAH. AKAR SOK. YILDIRIM\/BURSA"
       },
       {
        "ID": 185,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SELİMZADE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL GÜLAY",
        "TELEFON": "0532 625 00 26",
        "ADRES": "SELİMZADE MAH. SELİMZADE CAD. NO:24 YILDIRIM\/BURSA"
       },
       {
        "ID": 186,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SIRACEVİZLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN HACI",
        "TELEFON": "0535 846 19 62",
        "ADRES": "SIRACEVİZLER MAH. 15. AYDIN SOK. NO:16 YILDIRIM\/BURSA"
       },
       {
        "ID": 187,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SİNANDEDE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL KOCA",
        "TELEFON": "0535 731 29 70",
        "ADRES": "SİNANDEDE MAH. GÜNEŞ ÇIKMAZI NO:2 YILDIRIM\/BURSA"
       },
       {
        "ID": 188,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SİTELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "SANİYE ÖZTÜRK",
        "TELEFON": "0532 064 20 23",
        "ADRES": "SİTELER MAH. SELÇUKBEY CAD. NO:A-4 YILDIRIM\/BURSA"
       },
       {
        "ID": 189,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ŞİRİNEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF EMRE KÜRKÇÜ",
        "TELEFON": "0539 293 81 88",
        "ADRES": "ŞİRİNEVLER MAH. ŞİRİNEVLER CAD. NO:76 YILDIRIM\/BURSA"
       },
       {
        "ID": 190,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ŞÜKRANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERGÜN KAHRAMAN",
        "TELEFON": "0532 474 16 44",
        "ADRES": "ŞÜKRANİYE MAH. 6.DERYA SOK. NO:34 YILDIRIM\/BURSA"
       },
       {
        "ID": 191,
        "ILCE": "YILDIRIM",
        "MAHALLE": "TEFERRÜÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞÜKRÜ TAŞÇI",
        "TELEFON": "0544 234 95 13",
        "ADRES": "TEFERRÜÇ MAH. 2.MENEKŞE SOK. NO:16 YILDIRIM\/BURSA"
       },
       {
        "ID": 192,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ULUS MAHALLESİ MUHTARI",
        "AD_SOYAD": "MAŞALLAH TOKSUN",
        "TELEFON": "0532 175 24 57",
        "ADRES": "ULUS MAH. PAZAR SOK. NO:10 YILDIRIM\/BURSA"
       },
       {
        "ID": 193,
        "ILCE": "YILDIRIM",
        "MAHALLE": "UMURBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYRİ GÜRKORU",
        "TELEFON": "0543 437 47 04",
        "ADRES": "UMURBEY MAH. FABRİKA SOK NO:5 YILDIRIM\/BURSA"
       },
       {
        "ID": 194,
        "ILCE": "YILDIRIM",
        "MAHALLE": "VAKIF MAHALLESİ MUHTARI",
        "AD_SOYAD": "CAHİT OZAN",
        "TELEFON": "0536 675 60 76",
        "ADRES": "VAKIF MAH. VAKIF CAD. NO:49 YILDIRIM\/BURSA"
       },
       {
        "ID": 195,
        "ILCE": "YILDIRIM",
        "MAHALLE": "VATAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADNAN DEMİR",
        "TELEFON": "0532 161 58 03",
        "ADRES": "VATAN MAH. 7. KENT SOK. NO:2 YILDIRIM\/BURSA"
       },
       {
        "ID": 196,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YAVUZ SELİM MAHALLESİ MUHTARI",
        "AD_SOYAD": "ASLAN ALİ YILDIZ",
        "TELEFON": "0532 472 64 63",
        "ADRES": "YAVUZ SELİM MAH. SU DEPOSU CAD. YILDIRIM\/BURSA"
       },
       {
        "ID": 197,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YEDİSELVİLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAŞİM ÇETİN",
        "TELEFON": "0536 704 09 22",
        "ADRES": "YEDİSELVİLER MAH. YEMENİ SOK. NO:1 YILDIRIM\/BURSA"
       },
       {
        "ID": 198,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YENİ MAHALLE MUHTARI",
        "AD_SOYAD": "HÜSEYİN BULDU",
        "TELEFON": "0544 508 07 73",
        "ADRES": "YENİ MAH. PARK CAD. NO:23 YILDIRIM\/BURSA"
       },
       {
        "ID": 199,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YEŞİL MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN BASRİ YEKİN",
        "TELEFON": "0543 437 47 01",
        "ADRES": "YEŞİL MAH. 1.YEŞİL CAD. NO:66-1 YILDIRIM\/BURSA"
       },
       {
        "ID": 200,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YEŞİLYAYLA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET BAŞ",
        "TELEFON": "0536 577 27 60",
        "ADRES": "YEŞİLYAYLA MAH. 15. PINAR SOK. NO:8 YILDIRIM\/BURSA"
       },
       {
        "ID": 201,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YILDIRIM MAHALLESİ MUHTARI",
        "AD_SOYAD": "CİHAT OVALISOY",
        "TELEFON": "0536 899 05 99",
        "ADRES": "YILDIRIM MAH. YILDIRIM CAD. NO:11A YILDIRIM\/BURSA"
       },
       {
        "ID": 202,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YİĞİTLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "FERHAT SARMAN",
        "TELEFON": "0538 881 32 34",
        "ADRES": "YİĞİTLER MAH. TÜRKMENBAŞI CAD. NO:85 YILDIRIM\/BURSA"
       },
       {
        "ID": 203,
        "ILCE": "YILDIRIM",
        "MAHALLE": "YUNUS EMRE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEVİNÇ MUTLU",
        "TELEFON": "0516 160 19 60",
        "ADRES": "YUNUS EMRE MAH. KIRKPINAR CAD. NO:70 YILDIRIM\/BURSA"
       },
       {
        "ID": 204,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ZEYNİLER KÖYÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NİHAT ÜLKER",
        "TELEFON": "0531 867 09 93",
        "ADRES": "ZEYNİLER KÖYÜ MAH. ZEYNİLER YILDIRIM\/BURSA"
       },
       {
        "ID": 205,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ZÜMRÜTEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ABDURRAHMAN CAMKERTEN",
        "TELEFON": "0505 272 61 54",
        "ADRES": "ZÜMRÜTEVLER MAH. SARIÇAM SOK. NO:1 YILDIRIM\/BURSA"
       },
       {
        "ID": 206,
        "ILCE": "YILDIRIM",
        "MAHALLE": "ÇELEBİMEHMET MAHALLESİ",
        "AD_SOYAD": "ERKAN SAĞIM",
        "TELEFON": "0535 663 0366  ",
        "ADRES": "YENİ KURULAN MAHALLELER"
       },
       {
        "ID": 207,
        "ILCE": "YILDIRIM",
        "MAHALLE": "SAKARYA MAHALLESİ",
        "AD_SOYAD": "ARİF YAMAN",
        "TELEFON": "0532 686 27 64",
        "ADRES": "YENİ KURULAN MAHALLELER"
       },
       {
        "ID": 208,
        "ILCE": "NİLÜFER",
        "MAHALLE": "30 AĞUSTOS ZAFER MAHALLESİ MUHTARI(KYP)",
        "AD_SOYAD": "HALİL ÖZCOBAN",
        "TELEFON": "0532 633 97 00",
        "ADRES": "30 AĞUSTOS ZAFER MAH. ÇAMLIK CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 209,
        "ILCE": "NİLÜFER",
        "MAHALLE": "AHMETYESEVİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "BÜLENT ÇAKLI",
        "TELEFON": "0530 435 33 51",
        "ADRES": "AHMETYESEVİ MAH. BALAT CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 210,
        "ILCE": "NİLÜFER",
        "MAHALLE": "AKÇALAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "SALİH AVCİL",
        "TELEFON": "0554 500 68 77",
        "ADRES": "AKÇALAR MAH. ŞEHİR CAD. NO:26 NİLÜFER\/BURSA"
       },
       {
        "ID": 211,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ALAATTİNBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEYİT AHMET GÖKKIYAS",
        "TELEFON": "0533 315 08 32",
        "ADRES": "ALAADDİNBEY MAH. ALAADDİNBEY CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 212,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ALTINŞEHİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MELEHAT ŞANAL",
        "TELEFON": "0505 792 49 31",
        "ADRES": "ALTINŞEHİR MAH. MUAMMER AKSOY CAD. NO:20\/5 NİLÜFER\/BURSA"
       },
       {
        "ID": 213,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ATAEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "SABİHA GÜNEŞ",
        "TELEFON": "0541 544 04 58",
        "ADRES": "ATAEVLER MAH. EMEK CAD. NO:21 NİLÜFER\/BURSA"
       },
       {
        "ID": 214,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ATLAS MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA BİLGİÇ",
        "TELEFON": "0542 583 98 63",
        "ADRES": "ATLAS MAH. BURSA CAD. NO:5 NİLÜFER\/BURSA"
       },
       {
        "ID": 215,
        "ILCE": "NİLÜFER",
        "MAHALLE": "AYVAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN OTMAN",
        "TELEFON": "0539 690 55 72",
        "ADRES": "AYVAKÖY MAH. AYVAKÖY SOK. NİLÜFER\/BURSA"
       },
       {
        "ID": 216,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BALAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN YETİK",
        "TELEFON": "0532 633 80 19",
        "ADRES": "BALAT MAH. BAĞ SOK. NO:3 NİLÜFER\/BURSA"
       },
       {
        "ID": 217,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BALKAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YILMAZ ERYILMAZ",
        "TELEFON": "0530 329 64 36",
        "ADRES": "BALKAN MAH. MEVLANA SOK. NO:8 NİLÜFER\/BURSA"
       },
       {
        "ID": 218,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BADIRGA MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVABİ YILDIZ",
        "TELEFON": "0533 544 87 51",
        "ADRES": "BADIRGA MAH. BADIRGA CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 219,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BARIŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEVİLAY KARACA",
        "TELEFON": "0532 413 64 50",
        "ADRES": "BARIŞ MAH. KUBİLAY SOK. NO:22 NİLÜFER\/BURSA"
       },
       {
        "ID": 220,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BAŞKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERKAN ATAMAN",
        "TELEFON": "0532 371 21 81",
        "ADRES": "BAŞKÖY MAH. BAŞKÖY SOK. NİLÜFER\/BURSA"
       },
       {
        "ID": 221,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BEŞEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL YILMAZER",
        "TELEFON": "0532 286 61 64",
        "ADRES": "BEŞEVLER MAH. MERTOĞLU SOK.  NO:62 NİLÜFER\/BURSA"
       },
       {
        "ID": 222,
        "ILCE": "NİLÜFER",
        "MAHALLE": "BÜYÜKBALIKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖMER KARACA",
        "TELEFON": "0532 634 17 33",
        "ADRES": "BÜYÜKBALIKLI MAH. BÜYÜKBALIKLI CAD. NO:7 NİLÜFER\/BURSA"
       },
       {
        "ID": 223,
        "ILCE": "NİLÜFER",
        "MAHALLE": "CUMHURİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "DİLEK TEZ",
        "TELEFON": "0535 829 23 93",
        "ADRES": "CUMHURİYET MAH. MAVİ SOK. NO:7 NİLÜFER\/BURSA"
       },
       {
        "ID": 224,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÇALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAAN DOĞAN",
        "TELEFON": "0532 410 93 16",
        "ADRES": "ÇALI MAH. 179.SOK. NO:4 NİLÜFER\/BURSA"
       },
       {
        "ID": 225,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÇAMLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ORHAN ÖZTÜRK",
        "TELEFON": "0532 397 57 26",
        "ADRES": "ÇAMLICA MAH. KAVAKDERE CAD. NO:37 NİLÜFER\/BURSA"
       },
       {
        "ID": 226,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÇATALAĞIL MAHALLESİ MUHTARI",
        "AD_SOYAD": "CELALETTİN BORAN",
        "TELEFON": "0533 456 33 08",
        "ADRES": "ÇATALAĞIL MAH. 3.SOK. NO:2 NİLÜFER\/BURSA"
       },
       {
        "ID": 227,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÇAYLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ MANDACI",
        "TELEFON": "0532 629 04 16",
        "ADRES": "ÇAYLI MAH. ÇAYLI KÖYÜ NİLÜFR\/BURSA"
       },
       {
        "ID": 228,
        "ILCE": "NİLÜFER",
        "MAHALLE": "DAĞYENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "RIDVAN TEKİN",
        "TELEFON": "0532 682 58 47",
        "ADRES": "DAĞYENİCE MAH. 4.SOK. NO:8 NİLÜFER\/BURSA"
       },
       {
        "ID": 229,
        "ILCE": "NİLÜFER",
        "MAHALLE": "DEMİRCİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET BULUT",
        "TELEFON": "0537 415 14 02",
        "ADRES": "DEMİRCİ MAH. DEMİRCİ CAD. NO:104 NİLÜFER\/BURSA"
       },
       {
        "ID": 230,
        "ILCE": "NİLÜFER",
        "MAHALLE": "DOĞANKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "FİKRİ ARAZ",
        "TELEFON": "0532 404 48 47",
        "ADRES": "DOĞANKÖY MAH. CUMHURİYET CAD. NO:46 NİLÜFER\/BURSA"
       },
       {
        "ID": 231,
        "ILCE": "NİLÜFER",
        "MAHALLE": "DUMLUPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA AKTAŞ",
        "TELEFON": "0543 220 76 80",
        "ADRES": "DUMLUPINAR MAH. ATATÜRK CAD. NO:3 NİLÜFER\/BURSA"
       },
       {
        "ID": 232,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ERTUĞRUL MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜLTEN ÜSTÜNKAYA",
        "TELEFON": "0542 457 61 59",
        "ADRES": "ERTUĞRUL MAH. ERTUĞRUL SOK. NO:3 NİLÜFER\/BURSA"
       },
       {
        "ID": 233,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ESENTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HACI ÖZKAN",
        "TELEFON": "0533 551 30 43",
        "ADRES": "ESENTEPE MAH. İSKAN SOK NO:19 NİLÜFER\/BURSA"
       },
       {
        "ID": 234,
        "ILCE": "NİLÜFER",
        "MAHALLE": "FADILLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMAL KARGILI",
        "TELEFON": "0530 401 63 28",
        "ADRES": "FADILLI MAH. FADILLI KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 235,
        "ILCE": "NİLÜFER",
        "MAHALLE": "FETHİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SABAHATTİN KELEBEKLER",
        "TELEFON": "0532 644 43 60",
        "ADRES": "FETHİYE MAH. KELEBEK SOK. NO:2 NİLÜFER\/BURSA"
       },
       {
        "ID": 236,
        "ILCE": "NİLÜFER",
        "MAHALLE": "GÖKÇE MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAİF ALINCA",
        "TELEFON": "0532 698 39 13",
        "ADRES": "GÖKÇE MAH. MEYDAN SOK. NO:22 NİLÜFER\/BURSA"
       },
       {
        "ID": 237,
        "ILCE": "NİLÜFER",
        "MAHALLE": "GÖLYAZI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM ŞAHİN",
        "TELEFON": "0536 823 24 16",
        "ADRES": "GÖLYAZI MAH. ATATÜRK CAD. NO:27 NİLÜFER\/BURSA"
       },
       {
        "ID": 238,
        "ILCE": "NİLÜFER",
        "MAHALLE": "GÖRÜKLE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN SERT",
        "TELEFON": "0539 795 63 94",
        "ADRES": "GÖRÜKLE MAH. ATATÜRK CAD. NO:15 NİLÜFER\/BURSA"
       },
       {
        "ID": 239,
        "ILCE": "NİLÜFER",
        "MAHALLE": "GÜMÜŞTEPE MAHALLESİ MUHTARI (MİSİ)",
        "AD_SOYAD": "HALUK BALTA",
        "TELEFON": "0535 782 62 61",
        "ADRES": "GÜMÜŞTEPE MAH. SULTAN SOK. NİLÜFER\/BURSA"
       },
       {
        "ID": 240,
        "ILCE": "NİLÜFER",
        "MAHALLE": "GÜNGÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MESUT ENGİN",
        "TELEFON": "0535 216 68 74",
        "ADRES": "GÜNGÖREN MAH. GÜNGÖREN KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 241,
        "ILCE": "NİLÜFER",
        "MAHALLE": "HASANAĞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL TURAN",
        "TELEFON": "0533 728 28 48",
        "ADRES": "HASANAĞA MAH. CUMHURİYET CAD. NO:2 NİLÜFER\/BURSA"
       },
       {
        "ID": 242,
        "ILCE": "NİLÜFER",
        "MAHALLE": "IŞIKTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİM SARIYEL",
        "TELEFON": "0535 523 26 59",
        "ADRES": "IŞIKTEPE MAH. MEHTAP SOK. NO:35 NİLÜFER\/BURSA"
       },
       {
        "ID": 243,
        "ILCE": "NİLÜFER",
        "MAHALLE": "İHSANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELAMİ CENGİZ",
        "TELEFON": "0537 347 29 59",
        "ADRES": "İHSANİYE MAH. FATİH CAD. NO:3 NİLÜFER\/BURSA"
       },
       {
        "ID": 244,
        "ILCE": "NİLÜFER",
        "MAHALLE": "İNEGAZİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURETTİN AYDIN",
        "TELEFON": "0553 302 09 76",
        "ADRES": "İNEGAZİ MAH. 1.SOK. NO:13 NİLÜFER\/BURSA"
       },
       {
        "ID": 245,
        "ILCE": "NİLÜFER",
        "MAHALLE": "İRFANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAHMİ ERiK",
        "TELEFON": "0535 737 69 93",
        "ADRES": "İRFANİYE MAH. NİLÜFER\/BURSA"
       },
       {
        "ID": 246,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KADRİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ALİ ARSLAN",
        "TELEFON": "0537 708 09 37",
        "ADRES": "KADRİYE MAH. KADRİYE KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 247,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KARACAOBA MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP BAYRAKTAR",
        "TELEFON": "0533 280 50 28",
        "ADRES": "KARACAOBA MAH. KARACAOBA KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 248,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KARAMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAMİ GÜRBÜZ",
        "TELEFON": "0533 473 74 06",
        "ADRES": "KARAMAN MAH. KARŞI SOK. NO:11 NİLÜFER\/BURSA"
       },
       {
        "ID": 249,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KAYAPA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ İHSAN DENGİZ",
        "TELEFON": "0532 252 80 51",
        "ADRES": "KAYAPA MAH. BURSA CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 250,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KIZILCIKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÜLKÜ CELEP",
        "TELEFON": "0535 360 15 10",
        "ADRES": "KIZILCIKLI MAH. ORHANGAZİ CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 251,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KONAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALE ÇAĞAN",
        "TELEFON": "0535 654 45 57",
        "ADRES": "KONAK MAH. KUŞBURNU SOK. NO:9 NİLÜFER\/BURSA"
       },
       {
        "ID": 252,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KONAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "TACETTİN TARMAN",
        "TELEFON": "0533 432 41 26",
        "ADRES": "KONAKLI MAH. BURSA CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 253,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KORUBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "FEHMİ BURHAN",
        "TELEFON": "0539 463 54 10",
        "ADRES": "KORUBAŞI MAH. KORUBAŞI KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 254,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KURTULUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET AYD. SALDIZ",
        "TELEFON": "0532 223 25 66",
        "ADRES": "KURTULUŞ MAH. BAYRAK CAD. NO:1 NİLÜFER\/BURSA"
       },
       {
        "ID": 255,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KURUÇEŞME MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERGİN ÖZDEMİR",
        "TELEFON": "0535 231 74 00",
        "ADRES": "KURUÇEŞME MAH. DEĞİRMEN SOK. NO:4 NİLÜFER\/BURSA"
       },
       {
        "ID": 256,
        "ILCE": "NİLÜFER",
        "MAHALLE": "KÜLTÜR MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEZİBAN PEHLİVAN",
        "TELEFON": "0533 604 86 03",
        "ADRES": "KÜLTÜR MAH. ÖMÜR SOK. NO:3 NİLÜFER\/BURSA"
       },
       {
        "ID": 257,
        "ILCE": "NİLÜFER",
        "MAHALLE": "MAKSEMPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET EREN",
        "TELEFON": "0541 321 10 96",
        "ADRES": "MAKSEMPINAR MAH. BURSA CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 258,
        "ILCE": "NİLÜFER",
        "MAHALLE": "MİNARELİÇAVUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYRETTİN KANAL",
        "TELEFON": "0532 764 12 67",
        "ADRES": "MİNARELİÇAVUŞ MAH. MİNARELİ ÇAVUŞ CAD. NİLÜFER\/BURSA"
       },
       {
        "ID": 259,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ODUNLUK MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLYAS SEYHAN",
        "TELEFON": "0537 721 30 03",
        "ADRES": "ODUNLUK MAH. ESKİ ORHANELİ YOLU NO:52 NİLÜFER\/BURSA"
       },
       {
        "ID": 260,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ON DOKUZ MAYIS MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET FATİH HATİPOĞLU",
        "TELEFON": "0533 31 440 39",
        "ADRES": "19 MAYIS MAH. SİDE CAD. NO:4 NİLÜFER\/BURSA"
       },
       {
        "ID": 261,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÖZLÜCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN ÇAKIR",
        "TELEFON": "0535 418 65 00",
        "ADRES": "ÖZLÜCE MAH. ÇİÇEK CAD. NO:83 NİLÜFER\/BURSA"
       },
       {
        "ID": 262,
        "ILCE": "NİLÜFER",
        "MAHALLE": "TAHTALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN KAHYA",
        "TELEFON": "0537 439 05 56",
        "ADRES": "TAHTALI MAH. TAHTALI KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 263,
        "ILCE": "NİLÜFER",
        "MAHALLE": "UNÇUKURU MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ BULUT",
        "TELEFON": "0538 626 42 83",
        "ADRES": "UNÇUKURU MAH. UNÇUKURU KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 264,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÜÇEVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "SİBEL UZUN",
        "TELEFON": "0539 228 37 97",
        "ADRES": "ÜÇEVLER MAH. ÜLMAK SOK. NO:16 NİLÜFER\/BURSA"
       },
       {
        "ID": 265,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÜÇPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADNAN UÇAR",
        "TELEFON": "0538 553 43 85",
        "ADRES": "ÜÇPINAR MAH. ÜÇPINAR KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 266,
        "ILCE": "NİLÜFER",
        "MAHALLE": "ÜRÜNLÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "KADİR BEKİ",
        "TELEFON": "0532 470 61 85",
        "ADRES": "ÜRÜNLÜ MAH. ÜRÜNLÜ CAD. NO:71 NİLÜFER\/BURSA"
       },
       {
        "ID": 267,
        "ILCE": "NİLÜFER",
        "MAHALLE": "YAYLACIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "NACİ KURÇİN",
        "TELEFON": "0532 203 26 38",
        "ADRES": "YAYLACIK MAH. 1.SOK. NO:7\/1 NİLÜFER\/BURSA"
       },
       {
        "ID": 268,
        "ILCE": "NİLÜFER",
        "MAHALLE": "YİRMİ ÜÇ NİSAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEVDA BAYRAKTAR",
        "TELEFON": "0541 772 88 90",
        "ADRES": "23 NİSAN MAH. 252.SOK. NO:5 NİLÜFER\/BURSA"
       },
       {
        "ID": 269,
        "ILCE": "NİLÜFER",
        "MAHALLE": "YİRMİDOKUZ EKİM MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL KESKİN",
        "TELEFON": "0536 879 05 70",
        "ADRES": "29 EKİM MAH. AHMET TANER KIŞLALI BULVARI NO:13A NİLÜFER\/BURSA"
       },
       {
        "ID": 270,
        "ILCE": "NİLÜFER",
        "MAHALLE": "YOLÇATI MAHALLESİ MUHTARI",
        "AD_SOYAD": "YILMAZ ULUDAĞ",
        "TELEFON": "0536 317 13 98",
        "ADRES": "YOLÇATI MAH. YOLÇATI KÖYÜ NİLÜFER\/BURSA"
       },
       {
        "ID": 271,
        "ILCE": "NİLÜFER",
        "MAHALLE": "YÜZÜNCÜYIL MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYŞENUR SAYAN",
        "TELEFON": "0505 637 76 93",
        "ADRES": "YÜZÜNCÜYIL MAH. 415.SOK. NO: 22 NİLÜFER\/BURSA"
       },
       {
        "ID": 272,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "AKÇAŞAZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERCAN HAZAR",
        "TELEFON": "0538 915 70 28",
        "ADRES": "AKÇASAZ KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 273,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "AKTAŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ AYDIN",
        "TELEFON": "0535 239 88 37",
        "ADRES": "AKTAŞ KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 274,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ARMUTÇUK MAHALLESİ MUHTARI",
        "AD_SOYAD": "AKIN SEVİM",
        "TELEFON": "0532 307 43 73",
        "ADRES": "ARMUTÇUK KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 275,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "BALABAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL YILMAZ",
        "TELEFON": "0535 341 66 34",
        "ADRES": "BALABAN KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 276,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "BAYINDIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAYRAM HUSTEN",
        "TELEFON": "0531 815 84 49",
        "ADRES": "BAYINDIR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 277,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "BURUNCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ORHAN KARACA",
        "TELEFON": "0535 970 87 10",
        "ADRES": "BURUNCA KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 278,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "CUMHURİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ÇALI",
        "TELEFON": "0542 295 53 23",
        "ADRES": "CUMHURİYET MAH. ATATÜRK CAD. NO:13B BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 279,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ÇAKIRYENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ÖZDEMİR",
        "TELEFON": "0536 299 92 13",
        "ADRES": "ÇAKIRYENİCE KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 280,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ÇERİBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDAL FERİK",
        "TELEFON": "0537 219 67 30",
        "ADRES": "ÇERİBAŞI KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 281,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "DANACILAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "İRFAN DÜŞ",
        "TELEFON": "0532 440 73 34",
        "ADRES": "DANACILAR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 282,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "DANAÇALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELAHATTİN YÜRÜTEN",
        "TELEFON": "0535 065 79 82",
        "ADRES": "DANAÇALI KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 283,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "DEMİRLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAMİL MEHMET ASLAN",
        "TELEFON": "0535 627 22 39",
        "ADRES": "DEMİRLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 284,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "DERECİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "KADİR ÇİÇEK",
        "TELEFON": "0535 731 81 88",
        "ADRES": "DERECİK KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 285,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "DURHASAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN ÇOL",
        "TELEFON": "0537 696 25 26",
        "ADRES": "DURHASAN KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 286,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "DÜĞÜNCÜLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ABDULLAH KAYA",
        "TELEFON": "0536 813 60 63",
        "ADRES": "DÜĞÜNCÜLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 287,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ELEKÇALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURULLAH ÖDEK",
        "TELEFON": "0533 775 83 13",
        "ADRES": "ELEKÇALI KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 288,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ERECEK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ BAYRAM",
        "TELEFON": "0538 647 37 05",
        "ADRES": "ERECEK KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 289,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "GEDİKLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "CAFER AYDEMİR",
        "TELEFON": "0537 258 51 40",
        "ADRES": "GEDİKLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 290,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "GEYNİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN ÖZTÜRK",
        "TELEFON": "0538 388 11 61",
        "ADRES": "GEYNİK KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 291,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "HACIAHMETLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜNER BAYRAM",
        "TELEFON": "0534 334 35 65",
        "ADRES": "HACIAHMETLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 292,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "HACILAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ OSMAN ULUTAŞ",
        "TELEFON": "0532 713 69 07",
        "ADRES": "HACILAR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 293,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "HEMŞERİLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAKİ KESKİN",
        "TELEFON": "0535 931 55 60",
        "ADRES": "HEMŞERİLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 294,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "HOCA HASAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞENER İLHAN",
        "TELEFON": "0539 714 42 91",
        "ADRES": "HOCA HASAN MAH. TURAN SOK. NO:22 BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 295,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "İSMETİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZİYA DURAK",
        "TELEFON": "0538 414 11 14",
        "ADRES": "İSMETİYE MAH. OKUL CAD. BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 296,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "KARAAĞIZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ARİF YILMAZ",
        "TELEFON": "0535 011 91 14",
        "ADRES": "KARAAĞIZ KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 297,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "KARAÇUKUR MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN YAĞIZ",
        "TELEFON": "0536 279 68 38",
        "ADRES": "KARAÇUKUR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 298,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "KARALAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERCAN YILDIZ",
        "TELEFON": "0536 836 45 60",
        "ADRES": "KARALAR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 299,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "KAYAPA MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMİL ORUÇ",
        "TELEFON": "0536 407 63 45",
        "ADRES": "KAYAPA KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 300,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "KINIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN MENTEŞ",
        "TELEFON": "0533 749 87 31",
        "ADRES": "KINIK MAH. EMİN MENTEŞ CAD. NO:62 BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 301,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "KUŞLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ABÜDÜN KAYGUSUZ",
        "TELEFON": "0537 649 66 74",
        "ADRES": "KUŞLAR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 302,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "MAZLUMLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KORKMAZ",
        "TELEFON": "0538 589 52 13",
        "ADRES": "MAZLUMLAR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 303,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ORHAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN KATMIŞ",
        "TELEFON": "0533 521 51 60",
        "ADRES": "ORHAN MAH. ATATÜRK CAD. NO:1B BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 304,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "OSMANLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAMİL YILMAZ",
        "TELEFON": "0538 478 92 88",
        "ADRES": "OSMANLAR KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 305,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ÖRENCİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "BİLAL TOSUN",
        "TELEFON": "0535 431 30 43",
        "ADRES": "ÖRENCİK KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 306,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ÖZLÜCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERCAN ŞEN",
        "TELEFON": "0533 775 83 39",
        "ADRES": "ÖZLÜCE KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 307,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "PERÇİN MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM İNAN",
        "TELEFON": "0532 703 34 38",
        "ADRES": "PERÇİN KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 308,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "PINARI MAHALLESİ MUHTARI",
        "AD_SOYAD": "KERİM GÜLER",
        "TELEFON": "0533 423 94 37",
        "ADRES": "PINARI KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 309,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "PİREBEYLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM KAHRAMAN",
        "TELEFON": "0537 381 25 10",
        "ADRES": "PİREBEYLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 310,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "SARNIÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KAYA",
        "TELEFON": "0537 430 98 05",
        "ADRES": "SARNIÇ KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 311,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "TEKERLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSA ARI",
        "TELEFON": "0536 769 25 14",
        "ADRES": "TEKERLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 312,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "VELETLER MAH-MUHTARI  (BADEMLİK)",
        "AD_SOYAD": "MEHMET ÖZTÜRK",
        "TELEFON": "0546 587 30 24",
        "ADRES": "VELETLER KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 313,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "YENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "FAİK ULUM",
        "TELEFON": "0535 458 48 89",
        "ADRES": "YENİCE KÖYÜ BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 314,
        "ILCE": "BÜYÜKORHAN",
        "MAHALLE": "ZAFERİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ÖZTÜRK",
        "TELEFON": "0537 203 51 24",
        "ADRES": "ZAFERİYE MAH. ZAFERİYE SOK. NO:6 BÜYÜKORHAN\/BURSA"
       },
       {
        "ID": 315,
        "ILCE": "GEMLİK",
        "MAHALLE": "ADLİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "BURHAN BAYRAK",
        "TELEFON": "0546 407 01 16",
        "ADRES": "ADLİYE KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 316,
        "ILCE": "GEMLİK",
        "MAHALLE": "ATA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUALLA ÇİĞDEM",
        "TELEFON": "0553 380 51 39",
        "ADRES": "ATA MAH. HAL BOYU SOK. NO:2 GEMLİK\/BURSA"
       },
       {
        "ID": 317,
        "ILCE": "GEMLİK",
        "MAHALLE": "BALIKPAZARI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET BİRLİK",
        "TELEFON": "0537 816 14 81",
        "ADRES": "BALIKPAZARI MAH. 2.CAD. NO:16 GEMLİK\/BURSA"
       },
       {
        "ID": 318,
        "ILCE": "GEMLİK",
        "MAHALLE": "BÜYÜK KUMLA MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURİ ÇAKIR",
        "TELEFON": "0533 397 17 83",
        "ADRES": "BÜYÜK KUMLA KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 319,
        "ILCE": "GEMLİK",
        "MAHALLE": "CİHATLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ALTAY",
        "TELEFON": "0538 340 85 60",
        "ADRES": "CİHATLI KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 320,
        "ILCE": "GEMLİK",
        "MAHALLE": "CUMHURİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "GAMZE HIZARLI(AZA)",
        "TELEFON": "0535 360 86 01",
        "ADRES": "CUMHURİYET MAH. 397.SOK. NO:8C GEMLİK\/BURSA"
       },
       {
        "ID": 321,
        "ILCE": "GEMLİK",
        "MAHALLE": "DEMİRSUBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMETTİN ŞANLI",
        "TELEFON": "0537 923 10 68",
        "ADRES": "DEMİRSUBAŞI KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 322,
        "ILCE": "GEMLİK",
        "MAHALLE": "DR. ZİYA KAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ENVER ÇELİK",
        "TELEFON": "0537 894 43 54 ",
        "ADRES": "DR. ZİYA KAYA MAH. FATİH SOK. GEMLİK\/BURSA"
       },
       {
        "ID": 323,
        "ILCE": "GEMLİK",
        "MAHALLE": "ENGÜRÜCÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN ÇELİK",
        "TELEFON": "0537 933 16 19",
        "ADRES": "ENGÜRÜCÜK MAH. ENGÜRÜCÜK CAD. NO:14 GEMLİK\/BURSA"
       },
       {
        "ID": 324,
        "ILCE": "GEMLİK",
        "MAHALLE": "EŞREF DİNÇER MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF GÜNGÖR AL",
        "TELEFON": "0507 380  90 61",
        "ADRES": "EŞREF DİNÇER MAH. AYDIN SOK. NO:27C  GEMLİK\/BURSA"
       },
       {
        "ID": 325,
        "ILCE": "GEMLİK",
        "MAHALLE": "FEVZİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "KENAN TURAN",
        "TELEFON": "0 537 692 47 50",
        "ADRES": "FEVZİYE KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 326,
        "ILCE": "GEMLİK",
        "MAHALLE": "FINDICAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ YURT",
        "TELEFON": "0 536 497 48 40",
        "ADRES": "FINDICAK KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 327,
        "ILCE": "GEMLİK",
        "MAHALLE": "GENÇALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MÜRÜVET GÜNAY",
        "TELEFON": "0 506 687 51 46",
        "ADRES": "GENÇALİ KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 328,
        "ILCE": "GEMLİK",
        "MAHALLE": "GÜVENLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN ELBÜKEN",
        "TELEFON": "0 532 730 36 50",
        "ADRES": "GÜVENLİ KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 329,
        "ILCE": "GEMLİK",
        "MAHALLE": "HALİT PAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEVİM KOÇDEMİR",
        "TELEFON": "0 532 582 60 92",
        "ADRES": "HALİT PAŞA MAH. ALEMDAR CAD. NO:51 GEMLİK\/BURSA"
       },
       {
        "ID": 330,
        "ILCE": "GEMLİK",
        "MAHALLE": "HAMİDİYE köyü MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYHAN GÜNDOĞDU",
        "TELEFON": "0 532 286 95 55",
        "ADRES": "HAMİDİYE  KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 331,
        "ILCE": "GEMLİK",
        "MAHALLE": "HAMİDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMİ ÜNLÜ",
        "TELEFON": "0 532 583 90 95",
        "ADRES": "HAMİDİYE MAH. HAL SOK. NO:2C GEMLİK\/BURSA"
       },
       {
        "ID": 332,
        "ILCE": "GEMLİK",
        "MAHALLE": "HAYDARİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN ŞAHİN",
        "TELEFON": "0 531 381 85 87",
        "ADRES": "HAYDARİYE KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 333,
        "ILCE": "GEMLİK",
        "MAHALLE": "HİSAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÇİĞDEM TÜRE",
        "TELEFON": "0 546 274 02 33",
        "ADRES": "HİSAR MAH. 212.SOK GEMLİK\/BURSA"
       },
       {
        "ID": 334,
        "ILCE": "GEMLİK",
        "MAHALLE": "KARACAALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÖKSAL NOCA",
        "TELEFON": "0 532 742 73 65 ",
        "ADRES": "KARACAALİ KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 335,
        "ILCE": "GEMLİK",
        "MAHALLE": "KATIRLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAŞİT ERTUNÇ",
        "TELEFON": "0 532 655 16 71",
        "ADRES": "KATIRLI KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 336,
        "ILCE": "GEMLİK",
        "MAHALLE": "KAYHAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞÜKRÜ BEKİ",
        "TELEFON": "0 535 337 00 84",
        "ADRES": "KAYHAN MAH. YEDİEVLER SOK. NO:47 GEMLİK\/BURSA"
       },
       {
        "ID": 337,
        "ILCE": "GEMLİK",
        "MAHALLE": "KUMLA MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAZIM ATA",
        "TELEFON": "0 532 284 94 44 ",
        "ADRES": "KUMLA MAH. 1.KUMLA CAD. NO:14A GEMLİK\/BURSA"
       },
       {
        "ID": 338,
        "ILCE": "GEMLİK",
        "MAHALLE": "KURŞUNLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ORMANCILAR",
        "TELEFON": "0530 022 08 11 ",
        "ADRES": "KURŞUNLU MAH. GEMLİK\/BURSA"
       },
       {
        "ID": 339,
        "ILCE": "GEMLİK",
        "MAHALLE": "KURTUL MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAHMİ GÜLEÇ",
        "TELEFON": "0 535 497 80 09",
        "ADRES": "KURTUL MAH."
       },
       {
        "ID": 340,
        "ILCE": "GEMLİK",
        "MAHALLE": "KÜÇÜK KUMLA MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEMAL KARADENİZ",
        "TELEFON": "0 535 601 63 80",
        "ADRES": "KÜÇÜK KUMLA MAH. HUZUR SOK NO:55 GEMLİK\/BURSA"
       },
       {
        "ID": 341,
        "ILCE": "GEMLİK",
        "MAHALLE": "MURATOBA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN SUKUŞU",
        "TELEFON": "0 539 970 52 25",
        "ADRES": "MURATOBA KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 342,
        "ILCE": "GEMLİK",
        "MAHALLE": "NARLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SALİM ÖZDEMİR",
        "TELEFON": "0 536 221 97 07",
        "ADRES": "NARLI KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 343,
        "ILCE": "GEMLİK",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ATİLLA KÖKÇAM",
        "TELEFON": "0 537 933 45 74",
        "ADRES": "ORHANİYE MAH. YEDİEVLER SOK. NO:45 GEMLİK\/BURSA"
       },
       {
        "ID": 344,
        "ILCE": "GEMLİK",
        "MAHALLE": "OSMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ALTAY",
        "TELEFON": "0532 448 02 24",
        "ADRES": "OSMANİYE MAH. AYDIN SOK NO:23 GEMLİK\/BURSA"
       },
       {
        "ID": 345,
        "ILCE": "GEMLİK",
        "MAHALLE": "ŞAHİNYURDU MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN AĞIL",
        "TELEFON": "0 539 427 69 91",
        "ADRES": "ŞAHİNYURDU KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 346,
        "ILCE": "GEMLİK",
        "MAHALLE": "ŞÜKRİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAŞAR YILMAZ BAYKAL",
        "TELEFON": "0 533 521 30 34",
        "ADRES": "ŞÜKRİYE KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 347,
        "ILCE": "GEMLİK",
        "MAHALLE": "UMURBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA DURAN",
        "TELEFON": "0 537 573 59 33",
        "ADRES": "UMURBEY MAH. REŞİDE BAYAR CAD. GEMLİK\/BURSA"
       },
       {
        "ID": 348,
        "ILCE": "GEMLİK",
        "MAHALLE": "YENİ MAHALLE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAZMİ SEVİM",
        "TELEFON": "0 533 491 25 38",
        "ADRES": "YENİ MAHALLE MAH.YEDİEVLER SOK. NO:41 GEMLİK\/BURSA"
       },
       {
        "ID": 349,
        "ILCE": "GEMLİK",
        "MAHALLE": "YENİKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT BARANSEL",
        "TELEFON": "0 538 340 85 93 ",
        "ADRES": "YENİKÖY KÖYÜ GEMLİK\/BURSA"
       },
       {
        "ID": 350,
        "ILCE": "GÜRSU",
        "MAHALLE": "ADAKÖY ",
        "AD_SOYAD": "VEYSEL SARIBAL",
        "TELEFON": "0533 465 20 79",
        "ADRES": "ADAKÖY MAH. MİLLET CAD. NO:164 GÜRSU\/BURSA"
       },
       {
        "ID": 351,
        "ILCE": "GÜRSU",
        "MAHALLE": "AĞAKÖY ",
        "AD_SOYAD": "ERTUĞRUL ERTEM",
        "TELEFON": "0532 630 12 26",
        "ADRES": "AĞAKÖY MAH. GÜRSÜ YOLU CAD. AĞAKÖY MEYDANI NO:4 GÜRSU\/BURSA"
       },
       {
        "ID": 352,
        "ILCE": "GÜRSU",
        "MAHALLE": "CANBAZLAR ",
        "AD_SOYAD": "HASAN EFE",
        "TELEFON": "0532 748 74 30",
        "ADRES": "CANBAZLAR MAH. CANBAZLAR CADDESİ GÜRSU\/BURSA"
       },
       {
        "ID": 353,
        "ILCE": "GÜRSU",
        "MAHALLE": "DIŞKAYA ",
        "AD_SOYAD": "GÜROL ŞİŞEK",
        "TELEFON": "0535 034 90 56",
        "ADRES": "DIŞKAYA MAH. OĞUZLAR CAD. GÜRSU\/BURSA"
       },
       {
        "ID": 354,
        "ILCE": "GÜRSU",
        "MAHALLE": "ERİCEK ",
        "AD_SOYAD": "KADİR AYDIN",
        "TELEFON": "0535 973 39 31",
        "ADRES": "ERİCEK MAH. GÖL YOLU CAD. NO:9 GÜRSU\/BURSA"
       },
       {
        "ID": 355,
        "ILCE": "GÜRSU",
        "MAHALLE": "HASANKÖY",
        "AD_SOYAD": "ERTUĞRUL TÜRE",
        "TELEFON": "0532 254 08 15",
        "ADRES": "HASANKÖY MAH. HASANDEDE CAD. NO:42 GÜRSU\/BURSA"
       },
       {
        "ID": 356,
        "ILCE": "GÜRSU",
        "MAHALLE": "İĞDİR ",
        "AD_SOYAD": "ERCAN SAKIN",
        "TELEFON": "0532 549 27 00",
        "ADRES": "İĞDİR MAH. YUKARI BEŞEVLER SOK. NO:11B GÜRSU\/BURSA"
       },
       {
        "ID": 357,
        "ILCE": "GÜRSU",
        "MAHALLE": "İPEK YOLU ",
        "AD_SOYAD": "ALİ ERTUĞRUL",
        "TELEFON": "0545 428 00 42",
        "ADRES": "İPEK YOLU MAH. ŞEYH GALİP SOK. 5.NOLU AİLE MERKEZİ GÜRSU\/BURSA"
       },
       {
        "ID": 358,
        "ILCE": "GÜRSU",
        "MAHALLE": "İSTİKLAL ",
        "AD_SOYAD": "MUSTAFA DEVECİ",
        "TELEFON": "0537 276 16 34",
        "ADRES": "İSTİKLAL MAH. ATATÜRK CAD. NO:32A GÜRSU\/BURSA"
       },
       {
        "ID": 359,
        "ILCE": "GÜRSU",
        "MAHALLE": "KARAHIDIR ",
        "AD_SOYAD": "MUSTAFA GÜZELCE",
        "TELEFON": "0534 277 07 67",
        "ADRES": "KARAHIDIR MAH. GÜZELCE CAD. NO:1B GÜRSU\/BURSA"
       },
       {
        "ID": 360,
        "ILCE": "GÜRSU",
        "MAHALLE": "KAZIKLI ",
        "AD_SOYAD": "SALİH DİNÇER",
        "TELEFON": "0532 527 98 25",
        "ADRES": "KAZIKLI MAH. ÇAKALDERE CAD. NO:1 GÜRSU\/BURSA"
       },
       {
        "ID": 361,
        "ILCE": "GÜRSU",
        "MAHALLE": "KUMLUKALAN",
        "AD_SOYAD": "SÜLEYMAN KAYA",
        "TELEFON": "0533 301 60 86",
        "ADRES": "KUMLUKALAN MAH. MUHARREM TÜK CAD. NO:1 GÜRSU\/BURSA"
       },
       {
        "ID": 362,
        "ILCE": "GÜRSU",
        "MAHALLE": "KURTULUŞ ",
        "AD_SOYAD": "MUSTAFA SUBAŞI",
        "TELEFON": "0537 646 13 31",
        "ADRES": "KURTULUŞ ATATÜRK CADDESİ NO:78B GÜRSU\/BURSA"
       },
       {
        "ID": 363,
        "ILCE": "GÜRSU",
        "MAHALLE": "YENİ DOĞAN ",
        "AD_SOYAD": "AHMET KOZOĞLU",
        "TELEFON": "0533 021 94 34",
        "ADRES": "YENİ DOĞAN MAH. AİLE SAĞLIĞI MERKEZİ NO:1 K:1 GÜRSU\/BURSA"
       },
       {
        "ID": 364,
        "ILCE": "GÜRSU",
        "MAHALLE": "ZAFER ",
        "AD_SOYAD": "AHMET DEMİRCİ",
        "TELEFON": "0532 793 17 18",
        "ADRES": "ZAFER MAH. MERVE SOK. NO:2A GÜRSU\/BURSA"
       },
       {
        "ID": 365,
        "ILCE": "HARMANCIK",
        "MAHALLE": "AKPINAR KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET OKYAY",
        "TELEFON": "0536 584 36 26",
        "ADRES": "AKPINAR KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 366,
        "ILCE": "HARMANCIK",
        "MAHALLE": "ALUTÇA KÖYÜ MUHTARI",
        "AD_SOYAD": "NEJDET TETİK",
        "TELEFON": "0538 663 05 42",
        "ADRES": "ALUTÇA KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 367,
        "ILCE": "HARMANCIK",
        "MAHALLE": "B. DANİŞMENT KÖYÜ MUHTARI",
        "AD_SOYAD": "HASAN KARANLIK",
        "TELEFON": "0538 255 88 17",
        "ADRES": "B. DANİŞMENT KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 368,
        "ILCE": "HARMANCIK",
        "MAHALLE": "BALLISARAY MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL BAYRAM",
        "TELEFON": "0536 889 52 40",
        "ADRES": "BALLISARAY KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 369,
        "ILCE": "HARMANCIK",
        "MAHALLE": "BEKDEMİRLER KÖYÜ MUHTARI",
        "AD_SOYAD": "İLYAS KÖMÜRCÜ",
        "TELEFON": "0544 836 10 69",
        "ADRES": "BEKDEMİRLER KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 370,
        "ILCE": "HARMANCIK",
        "MAHALLE": "ÇAKMAK KÖYÜ MUHTARI",
        "AD_SOYAD": "İBRAHİM DOĞAN",
        "TELEFON": "0536 729 59 47",
        "ADRES": "ÇAKMAK KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 371,
        "ILCE": "HARMANCIK",
        "MAHALLE": "ÇAMOĞLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAVVA BAKAR",
        "TELEFON": "0535 079 25 22",
        "ADRES": "ÇAMOĞLU KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 372,
        "ILCE": "HARMANCIK",
        "MAHALLE": "ÇATALSÖĞÜT KÖYÜ MUHTARI",
        "AD_SOYAD": "HALİL CAN",
        "TELEFON": "0536 380 62 66",
        "ADRES": "ÇATALSÖĞÜT KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 373,
        "ILCE": "HARMANCIK",
        "MAHALLE": "DEDEBALİ KÖYÜ MUHTARI",
        "AD_SOYAD": "İSMAİL ASLAN",
        "TELEFON": "0530 693 25 16",
        "ADRES": "DEDEBALİ KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 374,
        "ILCE": "HARMANCIK",
        "MAHALLE": "DELİCEGÜNEY KÖYÜ MUHTARI",
        "AD_SOYAD": "ADEM GÖKÇE",
        "TELEFON": "0538 950 13 05",
        "ADRES": "DELİCEGÜNEY KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 375,
        "ILCE": "HARMANCIK",
        "MAHALLE": "DUTLUCA KÖYÜ MUHTARI",
        "AD_SOYAD": "OSMAN ÇETİN",
        "TELEFON": "0536 339 07 63",
        "ADRES": "DUTLUCA KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 376,
        "ILCE": "HARMANCIK",
        "MAHALLE": "ECE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KOÇDEMİR",
        "TELEFON": "0536 488 79 13",
        "ADRES": "ECE MAH. ZAFER CAD. NO:34 HARMANCIK\/BURSA"
       },
       {
        "ID": 377,
        "ILCE": "HARMANCIK",
        "MAHALLE": "GEDİKÖREN KÖYÜ MUHTARI",
        "AD_SOYAD": "MUSTAFA GÜLŞEN",
        "TELEFON": "0535 367 02 50",
        "ADRES": "GEDİKÖREN KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 378,
        "ILCE": "HARMANCIK",
        "MAHALLE": "GÖKÇELER KÖYÜ MUHTARI",
        "AD_SOYAD": "METİN DEMİRTAŞ",
        "TELEFON": "0537 949 69 78",
        "ADRES": "GÖKÇELER KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 379,
        "ILCE": "HARMANCIK",
        "MAHALLE": "GÜLÖZÜ KÖYÜ MUHTARI",
        "AD_SOYAD": "ÖZKAN EMRE",
        "TELEFON": "0544 512 90 55",
        "ADRES": "GÜLÖZÜ KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 380,
        "ILCE": "HARMANCIK",
        "MAHALLE": "H. AKALAN KÖYÜ MUHTARI",
        "AD_SOYAD": "AHMET ÇOBAN",
        "TELEFON": "0541 387 29 70",
        "ADRES": "H. AKALAN KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 381,
        "ILCE": "HARMANCIK",
        "MAHALLE": "H. DANİŞMENT KÖYÜ MUHTARI",
        "AD_SOYAD": "SEYFETTİN EKEN",
        "TELEFON": "0537 363 68 41",
        "ADRES": "H. DANİŞMENT KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 382,
        "ILCE": "HARMANCIK",
        "MAHALLE": "ILICAKSU KÖYÜ MUHTARI",
        "AD_SOYAD": "İRFAN ASA",
        "TELEFON": "0551 220 93 59",
        "ADRES": "ILICAKSU KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 383,
        "ILCE": "HARMANCIK",
        "MAHALLE": "İSHAKLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "EMRE ORUÇ",
        "TELEFON": "0545 619 91 41",
        "ADRES": "İSHAKLARKÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 384,
        "ILCE": "HARMANCIK",
        "MAHALLE": "KARACA MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN KONUK",
        "TELEFON": "0 539 268 95 11",
        "ADRES": "KARACA KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 385,
        "ILCE": "HARMANCIK",
        "MAHALLE": "KEPEKDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET KOÇ",
        "TELEFON": "0532 571 50 03",
        "ADRES": "KEPEKDERE KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 386,
        "ILCE": "HARMANCIK",
        "MAHALLE": "KILAVUZLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAKİ ALTIN",
        "TELEFON": "0533 648 11 78",
        "ADRES": "KILAVUZLAR KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 387,
        "ILCE": "HARMANCIK",
        "MAHALLE": "KIŞMANLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "RECAİ DURMUŞ",
        "TELEFON": "0535 528 11 57",
        "ADRES": "KIŞMANLAR MAH. KIŞMANLAR SOK. NO:95 HARMANCIK\/BURSA"
       },
       {
        "ID": 388,
        "ILCE": "HARMANCIK",
        "MAHALLE": "KOCAPINAR KÖYÜ MUHTARI",
        "AD_SOYAD": "RAMAZAN ÇETİNER",
        "TELEFON": "0505 565 77 98",
        "ADRES": "KOCAPINAR KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 389,
        "ILCE": "HARMANCIK",
        "MAHALLE": "KOZLUCA KÖYÜ MUHTARI",
        "AD_SOYAD": "HAYRETTİN SÖNMEZ",
        "TELEFON": "0541 808 22 71",
        "ADRES": "KOZLUCAKÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 390,
        "ILCE": "HARMANCIK",
        "MAHALLE": "MERKEZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KOÇDEMİR",
        "TELEFON": "0530 225 26 02",
        "ADRES": "MERKEZ MAH.FEVZİ PAŞA CAD. NO:11 D:1 HARMANCIK\/BURSA"
       },
       {
        "ID": 391,
        "ILCE": "HARMANCIK",
        "MAHALLE": "NALBANT KÖYÜ MUHTARI",
        "AD_SOYAD": "MUSTAFA GEZGİN",
        "TELEFON": "0533 558 71 00",
        "ADRES": "NALBANT KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 392,
        "ILCE": "HARMANCIK",
        "MAHALLE": "OKÇULAR KÖYÜ MUHTARI",
        "AD_SOYAD": "AHMET GÜLŞEN",
        "TELEFON": "0541 261 92 53",
        "ADRES": "OKÇULAR MAH. CUMHURİYET CAD. HARMANCIK\/BURSA"
       },
       {
        "ID": 393,
        "ILCE": "HARMANCIK",
        "MAHALLE": "SAÇAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SUZAN AY",
        "TELEFON": "0541 387 30 93",
        "ADRES": "SAÇAKLI KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 394,
        "ILCE": "HARMANCIK",
        "MAHALLE": "YAYABAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "YÜCEL TEMEL",
        "TELEFON": "0545 802 09 80",
        "ADRES": "YAYABAŞI MAH. ATATÜRK CAD. HARMANCIK\/BURSA"
       },
       {
        "ID": 395,
        "ILCE": "HARMANCIK",
        "MAHALLE": "YEŞİLYURT KÖYÜ MUHTARI",
        "AD_SOYAD": "RAMAZAN ERTAN",
        "TELEFON": "0538 240 54 42",
        "ADRES": "YEŞİLYURT KÖYÜ HARMANCIK\/BURSA"
       },
       {
        "ID": 396,
        "ILCE": "İNEGÖL",
        "MAHALLE": "AKBAŞLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "EYÜP ASLAN",
        "TELEFON": "0536 692 01 45",
        "ADRES": "AKBAŞLAR MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 397,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BAYKOCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA AKKAN",
        "TELEFON": "0533 540 35 98",
        "ADRES": "BAYKOCA MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 398,
        "ILCE": "İNEGÖL",
        "MAHALLE": "AKHİSAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "OKTAY GARİP",
        "TELEFON": "0534 896 41 97",
        "ADRES": "AKHİSAR MAH. 167.SOK. NO:7 İNEGÖL\/BURSA"
       },
       {
        "ID": 399,
        "ILCE": "İNEGÖL",
        "MAHALLE": "AKINCILAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "SERKAN TURAN",
        "TELEFON": "0534 748 00 90",
        "ADRES": "AKINCILAR MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 400,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALANYURT CUMHURİYET MUHTARI",
        "AD_SOYAD": "MUSTAFA BEKTAŞ",
        "TELEFON": "0535 631 47 06",
        "ADRES": "ALANYURT CUMHURİYET MAH. GAZİ ATATÜRK CAD. NO:9\/1 İNEGÖL\/BURSA"
       },
       {
        "ID": 401,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALANYURT ESENTEPE MUHTARI",
        "AD_SOYAD": "SÜREYYA AYDIN",
        "TELEFON": "0532 559 03 29",
        "ADRES": "ALANYURT ESENTEPE MAH. KANALYA CAD. NO:6 İNEGÖL\/BURSA"
       },
       {
        "ID": 402,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALANYURT FATİH  MUHTARI",
        "AD_SOYAD": "SELAMİ KAVIK",
        "TELEFON": "0535 575 97 20",
        "ADRES": "ALANYURT FATİH MAH. GAZİ ATATÜRK CAD. NO:46 İNEGÖL\/BURSA"
       },
       {
        "ID": 403,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALANYURT ERTUĞRULGAZİ MUHTARI",
        "AD_SOYAD": "ERCAN UYSAL",
        "TELEFON": "0532 151 85 05",
        "ADRES": "ALANYURT ERTUĞRULGAZİ MAH. İLİM SOK. NO:9 İNEGÖL\/BURSA"
       },
       {
        "ID": 404,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALANYURT YENİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "BALABEY GÜRLER",
        "TELEFON": "0533 469 34 35",
        "ADRES": "ALANYURT YENİ MAH. 1. ERTUĞRULGAZİ CAD. NO:9 İNEGÖL\/BURSA"
       },
       {
        "ID": 405,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALANYURT YUNUSEMRE MUHTARI",
        "AD_SOYAD": "CEMAL TEKİN",
        "TELEFON": "0533 520 42 27",
        "ADRES": "ALANYURT YUNUSEMRE MAH. DOSTLAR SİTESİ ÜÇLÜTEPE SOK. NO:4 İNEGÖL\/BURSA"
       },
       {
        "ID": 406,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ALİBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEMAL OK",
        "TELEFON": "0536 871 97 99",
        "ADRES": "ALİBEY KÖYÜ İNEGÖL\/BURSA"
       },
       {
        "ID": 407,
        "ILCE": "İNEGÖL",
        "MAHALLE": "AŞAĞI BALLIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET BEYHAN",
        "TELEFON": "0533 768 33 94",
        "ADRES": "AŞAĞI BALLIK MAH. CAMİİ MEYDANI İNEGÖL\/BURSA"
       },
       {
        "ID": 408,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BABAOĞLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ ÇUR",
        "TELEFON": "0536 554 28 74",
        "ADRES": "BABAOĞLU MAH.  2753 SOK. NO:7 İNEGÖL\/BURSA"
       },
       {
        "ID": 409,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BAHARİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECATİ ALAN ",
        "TELEFON": "0536 702 66 13",
        "ADRES": "BAHARİYE KÖYÜ MUHTARLIĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 410,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BAHÇEKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "O.NURİ BAŞTÜRK",
        "TELEFON": "0535 253 70 69",
        "ADRES": "BAHÇEKAYA MAH. MUHTARLIĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 411,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BAYRAMŞAH MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURİ BOYRAT",
        "TELEFON": "0537 982 73 33",
        "ADRES": "BAYRAMŞAH MAH. MUHTARLIĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 412,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BİLALKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYŞE GÜLHAN ",
        "TELEFON": "0537 380 53 75",
        "ADRES": "BİLALKÖY MAH. BİLALKÖY CAMİİ CAD. NO:2\/1 İNEGÖL\/BURSA"
       },
       {
        "ID": 413,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BOĞAZKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ESE",
        "TELEFON": "0533 612 87 07",
        "ADRES": "BOĞAZKÖY MAH. MUHTARLIK KONAĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 414,
        "ILCE": "İNEGÖL",
        "MAHALLE": "BURHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "COŞKUN YILDIZ",
        "TELEFON": "0532 554 42 12",
        "ADRES": "BURHANİYE MAH. PARKYOLU CAD. NO:37 İNEGÖL\/BURSA"
       },
       {
        "ID": 415,
        "ILCE": "İNEGÖL",
        "MAHALLE": "CERRAH MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN AYAR",
        "TELEFON": "0537 443 85 55",
        "ADRES": "CERRAH MAH. KAZIM BARACAR ACACIK CAD. NO:5 İNEGÖL\/BURSA"
       },
       {
        "ID": 416,
        "ILCE": "İNEGÖL",
        "MAHALLE": "CUMA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜLYA BULUN",
        "TELEFON": "0555 273 67 54",
        "ADRES": "CUMA MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 417,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÇAVUŞKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL ÇAKIR",
        "TELEFON": "0537 416 58 13",
        "ADRES": "ÇAVUŞKÖY MAH. ÇAVUŞKÖY CAD. NO:55 İNEGÖL\/BURSA"
       },
       {
        "ID": 418,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÇAYLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT DENİZ",
        "TELEFON": "0535 381 85 86",
        "ADRES": "ÇAYLICA MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 419,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÇAYYAKA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT ÖZCEN",
        "TELEFON": "0501 361 31 84",
        "ADRES": "ÇAYYAKA MAH. ÇAYYAKA CAD. NO:16 İNEGÖL\/BURSA"
       },
       {
        "ID": 420,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÇELTİKÇİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "RIDVAN USLU",
        "TELEFON": "0542 637 16 36",
        "ADRES": "ÇELTİKÇİ MAH. CERRAH YOLU CAD.İNEGÖL\/BURSA"
       },
       {
        "ID": 421,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÇİFTLİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MESUT ÇELEBİ",
        "TELEFON": "0541 695 75 59",
        "ADRES": "ÇİFTLİK MAH. ÇİFTLİKKÖY CAD. İNEGÖL\/BURSA"
       },
       {
        "ID": 422,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÇİTLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA YILMAZ",
        "TELEFON": "0533 969 88 56",
        "ADRES": "ÇİTLİ MAH. NO:267 İNEGÖL\/BURSA"
       },
       {
        "ID": 423,
        "ILCE": "İNEGÖL",
        "MAHALLE": "DEYDİNLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET TOPÇU",
        "TELEFON": "0530 766 75 47",
        "ADRES": "DEYDİNLER MAH. 6053.SOK. NO:134 İNEGÖL\/BURSA"
       },
       {
        "ID": 424,
        "ILCE": "İNEGÖL",
        "MAHALLE": "DİPSİZGÖL MAHALLESİ MUHTARI",
        "AD_SOYAD": "LEVENT ASLAN",
        "TELEFON": "0536 833 81 40",
        "ADRES": "DİPSİZGÖL MAH. KÖY KONAĞI YANI İNEGÖL\/BURSA"
       },
       {
        "ID": 425,
        "ILCE": "İNEGÖL",
        "MAHALLE": "DOĞANYURDU MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECAİ YEŞİM",
        "TELEFON": "0533 221 03 82",
        "ADRES": "DOĞANYURDU MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 426,
        "ILCE": "İNEGÖL",
        "MAHALLE": "DÖMEZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ARI",
        "TELEFON": "0530 346 06 15",
        "ADRES": "DÖMEZ MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 427,
        "ILCE": "İNEGÖL",
        "MAHALLE": "EDEBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "NİYAZİ CENGİZ",
        "TELEFON": "0537 211 16 72",
        "ADRES": "EDEBEY MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 428,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ELMAÇAYIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "LÜTFÜ AŞ",
        "TELEFON": "0536 711 68 12 ",
        "ADRES": "ELMAÇAYIR MAH. NO:8 İNEGÖL\/BURSA"
       },
       {
        "ID": 429,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ESENKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ DEMİRALAY",
        "TELEFON": "0534 085 76 57",
        "ADRES": "ESENKÖY MAH. NO:10 İNEGÖL\/BURSA"
       },
       {
        "ID": 430,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ESKİ KARACAKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "AKIN ÖZKAN",
        "TELEFON": "0532 749 93 73",
        "ADRES": "ESKİ KARACAKAYA MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 431,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ESKİKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ OSMAN ZEYBEK",
        "TELEFON": "0537 611 35 17",
        "ADRES": "ESKİKÖY MAH.NO:23 İNEGÖL\/BURSA"
       },
       {
        "ID": 432,
        "ILCE": "İNEGÖL",
        "MAHALLE": "EYMİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAZMİ ÖZEN",
        "TELEFON": "0533 748 53 76",
        "ADRES": "EYMİR MAH. KÖY KONAĞI ÜSTÜ İNEGÖL\/BURSA"
       },
       {
        "ID": 433,
        "ILCE": "İNEGÖL",
        "MAHALLE": "FEVZİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞUAYİP MEMİŞ",
        "TELEFON": "0535 231 07 53",
        "ADRES": "FEVZİYE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 434,
        "ILCE": "İNEGÖL",
        "MAHALLE": "FINDIKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN KARDAŞ",
        "TELEFON": "0532 725 30 22",
        "ADRES": "FINDIKLI MAH. ALPARSLAN CAD. NO:11 İNEGÖL\/BURSA"
       },
       {
        "ID": 435,
        "ILCE": "İNEGÖL",
        "MAHALLE": "GEDİKPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "NUSRET AKTAŞ",
        "TELEFON": "0538 641 12 29",
        "ADRES": "GEDİKPINAR MAH. NO:23 İNEGÖL\/BURSA"
       },
       {
        "ID": 436,
        "ILCE": "İNEGÖL",
        "MAHALLE": "GÜLBAHÇE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ŞEN",
        "TELEFON": "0536 442 13 82",
        "ADRES": "GÜLBAHÇE MAH. 5200.SOK. NO:1 İNEGÖL\/BURSA"
       },
       {
        "ID": 437,
        "ILCE": "İNEGÖL",
        "MAHALLE": "GÜNDÜZLÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "CAHİT ÖZDEMİR",
        "TELEFON": "0532 384 82 49",
        "ADRES": "GÜNDÜZLÜ MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 438,
        "ILCE": "İNEGÖL",
        "MAHALLE": "GÜNEY KESTANE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERCAN AKAR",
        "TELEFON": 5346364883,
        "ADRES": "GÜNEY KESTANE MAH. GÜNEY KESTANE CAD. NO:1 İNEGÖL\/BURSA"
       },
       {
        "ID": 439,
        "ILCE": "İNEGÖL",
        "MAHALLE": "GÜZELYURT MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN BODUR",
        "TELEFON": "0539 856 53 88",
        "ADRES": "GÜZELYURT MAH. NO:17 İNEGÖL\/BURSA"
       },
       {
        "ID": 440,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HACIKARA MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAMETTİN KAYIHAN",
        "TELEFON": "0532 578 50 33",
        "ADRES": "HACIKARA MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 441,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HALHALCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞABAN YAMAN",
        "TELEFON": "0533 160 65 10",
        "ADRES": "HALHALCA MAH. HALHALCA CAD. NO:17\/2 İNEGÖL\/BURSA"
       },
       {
        "ID": 442,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HAMAMLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP ÖTÜNMEK",
        "TELEFON": "0533 355 87 97",
        "ADRES": "HAMAMLI MAH. NO:254 İNEGÖL\/BURSA"
       },
       {
        "ID": 443,
        "ILCE": "İNEGÖL",
        "MAHALLE": "GAZELLİ (HAMİDİYE) MUHTARI",
        "AD_SOYAD": "HÜSEYİN ERDEN",
        "TELEFON": "0535 455 25 17",
        "ADRES": "GAZELLİ (HAMİDİYE) MAH. NO:135 İNEGÖL\/BURSA"
       },
       {
        "ID": 444,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HAMİDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "CELALETTİN İL GEZDİ",
        "TELEFON": "0536 279 92 39",
        "ADRES": "HAMİDİYE MAH. PARK CAD. NO:4 İNEGÖL\/BURSA"
       },
       {
        "ID": 445,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HAMİTABAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "NİHAT AKAR",
        "TELEFON": "0532 290 60 49",
        "ADRES": "HAMİTABAT MAH. NO:28 İNEGÖL\/BURSA"
       },
       {
        "ID": 446,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HAMZABEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "SADULLAH ARDA",
        "TELEFON": "0538 690 05 10",
        "ADRES": "HAMZABEY MAH. KÖY MUHTARLIĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 447,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HASANPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SUAT KARAKAYA",
        "TELEFON": "0535 410 75 80",
        "ADRES": "HASANPAŞA MAH. 2362.SOK. NO:20 İNEGÖL\/BURSA"
       },
       {
        "ID": 448,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HAYRİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMALETTİN TAŞDEMİR",
        "TELEFON": 5616116512,
        "ADRES": "HAYRİYE MAH. 4459.SOK. NO:20 İNEGÖL\/BURSA"
       },
       {
        "ID": 449,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HİLMİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALAATTİN TETİK",
        "TELEFON": "0 537 594 63 53",
        "ADRES": "HİLMİYE MAH. MERKEZ CAMİİ YANI İNEGÖL\/BURSA"
       },
       {
        "ID": 450,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HOCAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLHAN BAYRAM",
        "TELEFON": "0538 238 97 57",
        "ADRES": "HOCAKÖY MAH. CAMİİ YANI İNEGÖL\/BURSA"
       },
       {
        "ID": 451,
        "ILCE": "İNEGÖL",
        "MAHALLE": "HUZUR MAHALLESİ MUHTARI",
        "AD_SOYAD": "M.SALİH DAYAN",
        "TELEFON": "0532 300 81 65",
        "ADRES": "HUZUR MAH. MUSTAFA KEMAL ATATÜRK CAD. NO:25 İNEGÖL\/BURSA"
       },
       {
        "ID": 452,
        "ILCE": "İNEGÖL",
        "MAHALLE": "İCLALİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN AKÇAN",
        "TELEFON": "0536 364 66 51",
        "ADRES": "İCLALİYE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 453,
        "ILCE": "İNEGÖL",
        "MAHALLE": "İHSANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "KADİR YAKŞE",
        "TELEFON": "0537 591 32 92",
        "ADRES": "İHSANİYE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 454,
        "ILCE": "İNEGÖL",
        "MAHALLE": "İNAYET MAHALLESİ MUHTARI (TUZLA)",
        "AD_SOYAD": "YUSUF SARIKAYA",
        "TELEFON": "0536 729 78 78",
        "ADRES": "İNAYET MAH.(TUZLA)PALANKÖY CAD. NO:1\/2 İNEGÖL\/BURSA"
       },
       {
        "ID": 455,
        "ILCE": "İNEGÖL",
        "MAHALLE": "İSAÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "FİKRİ TÜRK",
        "TELEFON": "0536 733 91 36",
        "ADRES": "İSAÖREN MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 456,
        "ILCE": "İNEGÖL",
        "MAHALLE": "İSKANİYE ( CEMİYET) MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEBAHATTİN GÜNE",
        "TELEFON": "0536 438 80 17",
        "ADRES": "İSKANİYE( CEMİYET)MAH. NO:51 İNEGÖL\/BURSA"
       },
       {
        "ID": 457,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KARAGÖLET MAHALLESİ MUHTARI",
        "AD_SOYAD": "KENAN DURMUŞ",
        "TELEFON": "0532 730 19 79",
        "ADRES": "KARAGÖLET MAH. NO:7 İNEGÖL\/BURSA"
       },
       {
        "ID": 458,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KARAHASANLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM KURT",
        "TELEFON": "0535 787 95 81",
        "ADRES": "KARAHASANLAR MAH. KARAHASANLAR CAD. NO:21 İNEGÖL\/BURSA"
       },
       {
        "ID": 459,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KARAKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "FATİH AYDOĞU",
        "TELEFON": "0535 927 9351",
        "ADRES": "KARAKADI MAH. NO:23 İNEGÖL\/BURSA"
       },
       {
        "ID": 460,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KARALAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL YILMAZ",
        "TELEFON": "0532 656 11 98",
        "ADRES": "KARALAR MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 461,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KAYAPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "LEVENT ZENGİN",
        "TELEFON": "0537 324 16 07",
        "ADRES": "KAYAPINAR MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 462,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KEMALPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDEM KAYA",
        "TELEFON": "0532 386 05 29",
        "ADRES": "KEMALPAŞA MAH. YEŞİLÇAYIR CAD. NO:38 İNEGÖL\/BURSA"
       },
       {
        "ID": 463,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KESTANEALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAKAN HAZAR",
        "TELEFON": "0537 443 88 41",
        "ADRES": "KESTANEALAN MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 464,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KINIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ENDER BAYRAM",
        "TELEFON": "0535 712 70 44",
        "ADRES": "KINIK MAH.2960.SOK. NO:12  İNEGÖL\/BURSA"
       },
       {
        "ID": 465,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KIRAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEDETTİN GÜNAY",
        "TELEFON": "0539 287 02 99",
        "ADRES": "KIRAN MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 466,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KOCAKONAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA PAL",
        "TELEFON": "0535 732 41 08",
        "ADRES": "KOCAKONAK MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 467,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KONURLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT ÇETİNKAYA",
        "TELEFON": "0541 798 26 06",
        "ADRES": "KONURLAR MAH. KÖY KONAĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 468,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KOZLUCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM BAYRAM",
        "TELEFON": "0542 385 20 54",
        "ADRES": "KOZLUCA MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 469,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KULACA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEDAT SEÇİM",
        "TELEFON": "0532 382 60 55",
        "ADRES": "KULACA MAH. NO:2 İNEGÖL\/BURSA"
       },
       {
        "ID": 470,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KURŞUNLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM KILIÇ",
        "TELEFON": "0553 795 97 55",
        "ADRES": "KURŞUNLU MAH. BELEDİYE EK HİZMET BİNASI İNEGÖL\/BURSA"
       },
       {
        "ID": 471,
        "ILCE": "İNEGÖL",
        "MAHALLE": "KÜÇÜK YENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NUSRET DENİZ",
        "TELEFON": "0533 765 99 03",
        "ADRES": "KÜÇÜK YENİCE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 472,
        "ILCE": "İNEGÖL",
        "MAHALLE": "LÜTFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET AYAZ",
        "TELEFON": "0532 474 44 38",
        "ADRES": "LÜTFİYE MAH. NO:22 İNEGÖL\/BURSA"
       },
       {
        "ID": 473,
        "ILCE": "İNEGÖL",
        "MAHALLE": "MADEN MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM UĞUR",
        "TELEFON": "0532 490 11 72",
        "ADRES": "MADEN MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 474,
        "ILCE": "İNEGÖL",
        "MAHALLE": "MAHMUDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADNAN ORDU",
        "TELEFON": "0533 435 37 56",
        "ADRES": "MAHMUDİYE MAH. KASIMEFENDİ CAD. NO:189 İNEGÖL\/BURSA"
       },
       {
        "ID": 475,
        "ILCE": "İNEGÖL",
        "MAHALLE": "MESRURİYE(ESKİBAHÇEKAYA) MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYAT NURİ ASLAN",
        "TELEFON": "0537 243 81 53",
        "ADRES": "MESRURİYE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 476,
        "ILCE": "İNEGÖL",
        "MAHALLE": "MESUDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMETTİN SEVİM",
        "TELEFON": "0 542 451 40 50",
        "ADRES": "MESUDİYE MAH. İNEGÖL CAD. NO:147 İNEGÖL\/BURSA"
       },
       {
        "ID": 477,
        "ILCE": "İNEGÖL",
        "MAHALLE": "MEZİT MAHALLESİ MUHTARI",
        "AD_SOYAD": "REMZİ KETHUDA",
        "TELEFON": "0535 712 06 82",
        "ADRES": "MEZİT MAH. NO:4 İNEGÖL\/BURSA"
       },
       {
        "ID": 478,
        "ILCE": "İNEGÖL",
        "MAHALLE": "MURATBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURİ TÜRKYILMAZ",
        "TELEFON": "0537 374 16 11",
        "ADRES": "MURATBEY MAH. KÖY KONAĞI İNEGÖL\/BURSA"
       },
       {
        "ID": 479,
        "ILCE": "İNEGÖL",
        "MAHALLE": "OLUKMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YILDIRAY MUTLU",
        "TELEFON": "0539 840 12 74",
        "ADRES": "OLUKMAN MAH. 2451.SOK. NO:7 İNEGÖL\/BURSA"
       },
       {
        "ID": 480,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "VELİ ÇETİN",
        "TELEFON": "0533 696 36 31",
        "ADRES": "ORHANİYE MAH. BARIŞÇIL SOK. NO:3 İNEGÖL\/BURSA"
       },
       {
        "ID": 481,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ORTAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "TAHİR YÖRÜK",
        "TELEFON": "0532 263 85 07",
        "ADRES": "ORTAKÖY MAH. KERVANSARAY CAD. KÖY KONAĞI ÜSTÜ İNEGÖL\/BURSA"
       },
       {
        "ID": 482,
        "ILCE": "İNEGÖL",
        "MAHALLE": "OSMANİYE KÖYÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERKAN AYDEMİR",
        "TELEFON": "0532 310 91 23",
        "ADRES": "OSMANİYE KÖYÜ MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 483,
        "ILCE": "İNEGÖL",
        "MAHALLE": "OSMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYDIN BAŞDERE",
        "TELEFON": "0542 453 05 19",
        "ADRES": "OSMANİYE MAH. ÇAĞLAR SOK.NO:14 İNEGÖL\/BURSA"
       },
       {
        "ID": 484,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ÖZLÜCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "YÜKSEL AŞIK",
        "TELEFON": "0532 343 74 97",
        "ADRES": "ÖZLÜCE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 485,
        "ILCE": "İNEGÖL",
        "MAHALLE": "PAŞAÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YILMAZ SEVİM",
        "TELEFON": "0530 274 11 23",
        "ADRES": "PAŞAÖREN MAH. NO:27 İNEGÖL\/BURSA"
       },
       {
        "ID": 486,
        "ILCE": "İNEGÖL",
        "MAHALLE": "RÜŞTİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "YENER KARADAN",
        "TELEFON": "0537 314 76 73",
        "ADRES": "RÜŞTİYE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 487,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SAADET MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEKİ EKREN",
        "TELEFON": "0533 420 44 69",
        "ADRES": "SAADET MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 488,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SARIPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞENOL YAKUT",
        "TELEFON": "0542 340 46 40",
        "ADRES": "SARIPINAR MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 489,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SİNANBET MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞEVKET PARLAYAN",
        "TELEFON": "0538 844 86 33",
        "ADRES": "SİNANBEY MAH. NO:2 İNEGÖL\/BURSA"
       },
       {
        "ID": 490,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SOĞUKDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM AYBİL",
        "TELEFON": "0537 927 68 24",
        "ADRES": "SOĞUKDERE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 491,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SULHİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECAİ DEMİRCAN",
        "TELEFON": "0549 794 92 84",
        "ADRES": "SULHİYE MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 492,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SULTANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SADULLAH ÖZ",
        "TELEFON": "0533 371 17 34",
        "ADRES": "SULTANİYE MAH. NO:39 İNEGÖL\/BURSA"
       },
       {
        "ID": 493,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SUNGURPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ENVER BALİ",
        "TELEFON": "0536 238 89 42",
        "ADRES": "SUNGURPAŞA MAH. SUNGURPAŞA CAD. NO:134 İNEGÖL\/BURSA"
       },
       {
        "ID": 494,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SÜLE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ ÇİÇEK",
        "TELEFON": "0536 468 08 20",
        "ADRES": "SÜLE MAH. NO:29 İNEGÖL\/BURSA"
       },
       {
        "ID": 495,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SÜLEYMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİM YİĞİT",
        "TELEFON": "0539 251 67 02",
        "ADRES": "SÜLEYMANİYE MAH. ALADAĞ SOK. NO:4 İNEGÖL\/BURSA"
       },
       {
        "ID": 496,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SÜLÜKLÜGÖL MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAŞAR YALÇIN",
        "TELEFON": "0537 967 48 07",
        "ADRES": "SÜLÜKLÜGÖL MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 497,
        "ILCE": "İNEGÖL",
        "MAHALLE": "SÜPÜRTÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM ARIKAN",
        "TELEFON": "0535 693 18 30",
        "ADRES": "SÜPÜRTÜ MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 498,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ŞEHİTLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİR GÜNEŞ",
        "TELEFON": "0535 408 96 11",
        "ADRES": "ŞEHİTLER MAH. NO:1 İNEGÖL\/BURSA"
       },
       {
        "ID": 499,
        "ILCE": "İNEGÖL",
        "MAHALLE": "ŞIPALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT ÖZER",
        "TELEFON": "0536 842 74 64",
        "ADRES": "ŞIPALİ MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 500,
        "ILCE": "İNEGÖL",
        "MAHALLE": "TAHTAKÖPRÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDOĞAN ALP",
        "TELEFON": "0536 326 15 68",
        "ADRES": "TAHTAKÖPRÜ MAH. 1.İNEGÖL CAD. NO:2 İNEGÖL\/BURSA"
       },
       {
        "ID": 501,
        "ILCE": "İNEGÖL",
        "MAHALLE": "TEKKE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELAMİ KOŞUCU",
        "TELEFON": "0545 768 21 36",
        "ADRES": "TEKKE MAH. TEKKEKÖY CAD. NO:78 İNEGÖL\/BURSA"
       },
       {
        "ID": 502,
        "ILCE": "İNEGÖL",
        "MAHALLE": "TOKUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞEMSETTİN EREN",
        "TELEFON": "0537 769 44 88",
        "ADRES": "TOKUŞ MAH.  NO:8 İNEGÖL\/BURSA"
       },
       {
        "ID": 503,
        "ILCE": "İNEGÖL",
        "MAHALLE": "TURGUTALP KÖYÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AVNİ ZEYBEK",
        "TELEFON": "0535 258 39 27",
        "ADRES": "TURGUTALP KÖYÜ MAH. CAMİİ ALTI İNEGÖL\/BURSA"
       },
       {
        "ID": 504,
        "ILCE": "İNEGÖL",
        "MAHALLE": "TURGUTALP MAHALLESİ MUHTARI",
        "AD_SOYAD": "BEŞİR ALIÇ",
        "TELEFON": "0535 253 79 36",
        "ADRES": "TURGUTALP MAH. İSMAİL HAKKI TÜMÜR SOK. NO:51 İNEGÖL\/BURSA"
       },
       {
        "ID": 505,
        "ILCE": "İNEGÖL",
        "MAHALLE": "TÜFEKÇİKONAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAMETTİN AYKUL",
        "TELEFON": "0532 771 63 18",
        "ADRES": "TÜFEKÇİKONAK MAH. TÜFEKÇİKONAK CAD. NO:36 İNEGÖL\/BURSA"
       },
       {
        "ID": 506,
        "ILCE": "İNEGÖL",
        "MAHALLE": "YENİCE DERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞÜKRÜ KUTLUCA",
        "TELEFON": "0536 396 37 89",
        "ADRES": "YENİCE DERE MAH. DEMOKRATLAR MEYDANI İNEGÖL\/BURSA"
       },
       {
        "ID": 507,
        "ILCE": "İNEGÖL",
        "MAHALLE": "YENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL PEYNİRCİ",
        "TELEFON": "0531 425 31 99",
        "ADRES": "YENİCE MAH. MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 508,
        "ILCE": "İNEGÖL",
        "MAHALLE": "YENİKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLHAN YAVUZ",
        "TELEFON": "0546 722 31 37",
        "ADRES": "YENİKÖY MAH. YENİKÖY CAD. NO:21 İNEGÖL\/BURSA"
       },
       {
        "ID": 509,
        "ILCE": "İNEGÖL",
        "MAHALLE": "YENİYÖRÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYRETTİN DEMİŞTAŞ",
        "TELEFON": "0530 037 46 56",
        "ADRES": "YENİYÖRÜK MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 510,
        "ILCE": "İNEGÖL",
        "MAHALLE": "YİĞİTKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERTAN SAKİN",
        "TELEFON": "0536 262 16 61",
        "ADRES": "YİĞİTKÖY MAH. 2254.SOK. NO:22 İNEGÖL\/BURSA"
       },
       {
        "ID": 511,
        "ILCE": "İNEGÖL",
        "MAHALLE": "YUKARI BALLIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "H. HÜSEYİN ORHAN",
        "TELEFON": "0532 658 34 23",
        "ADRES": "YUKARI BALLIK MAH. İNEGÖL\/BURSA"
       },
       {
        "ID": 512,
        "ILCE": "İZNİK",
        "MAHALLE": "AYDINLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KULE ",
        "TELEFON": " 0535 899 23 91",
        "ADRES": "AYDINLAR MAH. İZNİK\/BURSA"
       },
       {
        "ID": 513,
        "ILCE": "İZNİK",
        "MAHALLE": "BAYINDIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "LÜTFÜ EROL",
        "TELEFON": "0 534 514 13 82",
        "ADRES": "BAYINDIR MAH. KILIÇASLAN CAD. İZNİK\/BURSA"
       },
       {
        "ID": 514,
        "ILCE": "İZNİK",
        "MAHALLE": "BEYLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALTUĞ BAYRAM",
        "TELEFON": " 0545 500 10 16",
        "ADRES": "BEYLER MAH. İZNİK\/BURSA"
       },
       {
        "ID": 515,
        "ILCE": "İZNİK",
        "MAHALLE": "BOYALICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN MERSİN",
        "TELEFON": " 0532 681 46 34",
        "ADRES": "BOYALICA MAH. İZNİK\/BURSA"
       },
       {
        "ID": 516,
        "ILCE": "İZNİK",
        "MAHALLE": "CANDARLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖMER YAVUZ",
        "TELEFON": " 0537 384 31 07",
        "ADRES": "CANDARLI MAH. CANDARLI SOK. NO:17 İZNİK\/BURSA"
       },
       {
        "ID": 517,
        "ILCE": "İZNİK",
        "MAHALLE": "ÇAKIRCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEKİ BAYRAK",
        "TELEFON": " 0535 942 45 90",
        "ADRES": "ÇAKIRCA MAH. İZNİK\/BURSA"
       },
       {
        "ID": 518,
        "ILCE": "İZNİK",
        "MAHALLE": "ÇAMDİBİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL KÜÇÜKER",
        "TELEFON": " 0537 208 14 05",
        "ADRES": "ÇAMDİBİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 519,
        "ILCE": "İZNİK",
        "MAHALLE": "ÇAMOLUK MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN ÇÖMEZ",
        "TELEFON": "0537 204 69 54",
        "ADRES": "ÇAMOLUK MAH. İZNİK\/BURSA"
       },
       {
        "ID": 520,
        "ILCE": "İZNİK",
        "MAHALLE": "ÇAMPINAR ( NÜZHETİYE -ESKİ) MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZAFER BEYHAN",
        "TELEFON": " 0532 678 25 30",
        "ADRES": "ÇAMPINAR ( NÜZHETİYE -ESKİ)MAH. İZNİK\/BURSA"
       },
       {
        "ID": 521,
        "ILCE": "İZNİK",
        "MAHALLE": "ÇİÇEKLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN YAKŞİ",
        "TELEFON": " 0535 567 67 38",
        "ADRES": "ÇİÇEKLİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 522,
        "ILCE": "İZNİK",
        "MAHALLE": "DERBENT MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ERSİN",
        "TELEFON": " 0535 335 29 11",
        "ADRES": "DERBENT MAH. İZNİK\/BURSA"
       },
       {
        "ID": 523,
        "ILCE": "İZNİK",
        "MAHALLE": "DEREKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN ÇAKMAK",
        "TELEFON": " 0532 797 60 88",
        "ADRES": "DEREKÖY MAH. İZNİK\/BURSA"
       },
       {
        "ID": 524,
        "ILCE": "İZNİK",
        "MAHALLE": "DIRAZALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET HIŞTIROĞLU",
        "TELEFON": "0532 281 59 16",
        "ADRES": "DIRAZALİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 525,
        "ILCE": "İZNİK",
        "MAHALLE": "ELBEYLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET DEĞİRMENCİ",
        "TELEFON": " 0532 761 46 51",
        "ADRES": "ELBEYLİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 526,
        "ILCE": "İZNİK",
        "MAHALLE": "ELMALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN TURNA",
        "TELEFON": "0537 835 30 87",
        "ADRES": "ELMALI MAH. İZNİK\/BURSA"
       },
       {
        "ID": 527,
        "ILCE": "İZNİK",
        "MAHALLE": "EŞREFZADE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖMER KOCUK",
        "TELEFON": " 0536 505 91 64",
        "ADRES": "EŞREFZADE MAH. MUSTAFA DOĞAN SOK. NO:11A İZNİK\/BURSA"
       },
       {
        "ID": 528,
        "ILCE": "İZNİK",
        "MAHALLE": "GÖLLÜCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN BAYER",
        "TELEFON": "0537 232 69 77",
        "ADRES": "GÖLLÜCE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 529,
        "ILCE": "İZNİK",
        "MAHALLE": "GÜRMÜZLÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEYNEL ÇETİN",
        "TELEFON": " 0543 798 08 86",
        "ADRES": "GÜRMÜZLÜ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 530,
        "ILCE": "İZNİK",
        "MAHALLE": "HACIOSMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ACAR",
        "TELEFON": "0538 614 60 76",
        "ADRES": "HACIOSMAN MAH. SARISU SOK. NO:4 İZNİK\/BURSA"
       },
       {
        "ID": 531,
        "ILCE": "İZNİK",
        "MAHALLE": "HİSARDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADEM TOPCU",
        "TELEFON": " 0536 948 76 94",
        "ADRES": "HİSARDERE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 532,
        "ILCE": "İZNİK",
        "MAHALLE": "HOCAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEDAT ÖNER",
        "TELEFON": "0535 937 14 74",
        "ADRES": "HOCAKÖY MAH. İZNİK\/BURSA"
       },
       {
        "ID": 533,
        "ILCE": "İZNİK",
        "MAHALLE": "İHSANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "EYÜP POYRAZ",
        "TELEFON": "0532 628 24 25",
        "ADRES": "İHSANİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 534,
        "ILCE": "İZNİK",
        "MAHALLE": "İNİKLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAFFET ŞAHİN",
        "TELEFON": "0538 598 21 44",
        "ADRES": "İNİKLİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 535,
        "ILCE": "İZNİK",
        "MAHALLE": "KARATEKİN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÜNAL YAVUZ",
        "TELEFON": " 0532 580 38 43",
        "ADRES": "KARATEKİN MAH. İZNİK\/BURSA"
       },
       {
        "ID": 536,
        "ILCE": "İZNİK",
        "MAHALLE": "KAYNARCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ AYAN",
        "TELEFON": " 0536 579 23 68",
        "ADRES": "KAYNARCA MAH. İZNİK\/BURSA"
       },
       {
        "ID": 537,
        "ILCE": "İZNİK",
        "MAHALLE": "KIRINTI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MAHMUT DEMİRTAŞ",
        "TELEFON": "0551-215-13-80",
        "ADRES": "KIRINTI MAH. KIRINTI SOK. İZNİK\/BURSA"
       },
       {
        "ID": 538,
        "ILCE": "İZNİK",
        "MAHALLE": "KUTLUCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MAHMUT BURHAN",
        "TELEFON": "0532 260 65 51",
        "ADRES": "KUTLUCA MAH. İZNİK\/BURSA"
       },
       {
        "ID": 539,
        "ILCE": "İZNİK",
        "MAHALLE": "M.ÇELEBİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞENOL BEKDEŞ",
        "TELEFON": " 0532 783 52 80",
        "ADRES": "M.ÇELEBİ MAH. CAMBAZ SOK. NO:7A İZNİK\/BURSA"
       },
       {
        "ID": 540,
        "ILCE": "İZNİK",
        "MAHALLE": "M.KEMALPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET DEMİRCAN",
        "TELEFON": " 0536 200 00 40",
        "ADRES": "M.KEMALPAŞA MAHALLESİ MUHTARI"
       },
       {
        "ID": 541,
        "ILCE": "İZNİK",
        "MAHALLE": "MAHMUDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL AKIN",
        "TELEFON": "0533 472 75 40",
        "ADRES": "MAHMUDİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 542,
        "ILCE": "İZNİK",
        "MAHALLE": "MECİDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KARAYEL",
        "TELEFON": "0532 240 79 62",
        "ADRES": "MECİDİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 543,
        "ILCE": "İZNİK",
        "MAHALLE": "MUSTAFALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KIRIK",
        "TELEFON": "0538 843 23 25",
        "ADRES": "MUSTAFALI MAH. MUSTAFALI SOK. İZNİK\/BURSA"
       },
       {
        "ID": 544,
        "ILCE": "İZNİK",
        "MAHALLE": "MÜŞKÜLE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ATAKAN YAĞCI",
        "TELEFON": "0539 789 09 56",
        "ADRES": "MÜŞKÜLE MAH. MÜŞKÜLE SOK. İZNİK\/BURSA"
       },
       {
        "ID": 545,
        "ILCE": "İZNİK",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SUAT ATEŞ",
        "TELEFON": " 0532 575 16 20 ",
        "ADRES": "ORHANİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 546,
        "ILCE": "İZNİK",
        "MAHALLE": "OSMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEBAHATTİN ERSON",
        "TELEFON": "0538 300 21 15",
        "ADRES": "OSMANİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 547,
        "ILCE": "İZNİK",
        "MAHALLE": "ÖMERLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL SARGIN",
        "TELEFON": "0536 636 89 25",
        "ADRES": "ÖMERLİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 548,
        "ILCE": "İZNİK",
        "MAHALLE": "SANSARAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM AKBAŞ",
        "TELEFON": "0535 370 50 27",
        "ADRES": "SANSARAK MAH. İZNİK\/BURSA"
       },
       {
        "ID": 549,
        "ILCE": "İZNİK",
        "MAHALLE": "SARIAĞIL MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMALETTİN KÜÇÜK",
        "TELEFON": "0536 590 03 24",
        "ADRES": "SARIAĞIL MAH. İZNİK\/BURSA"
       },
       {
        "ID": 550,
        "ILCE": "İZNİK",
        "MAHALLE": "SELÇUK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELİM SARIKAYA",
        "TELEFON": " 0532 682 37 40",
        "ADRES": "SELÇUK MAH. ORHAN SOK. NO:25 İZNİK\/BURSA"
       },
       {
        "ID": 551,
        "ILCE": "İZNİK",
        "MAHALLE": "SÜLEYMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET SALIM",
        "TELEFON": " 0536 783 02 13",
        "ADRES": "SÜLEYMANİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 552,
        "ILCE": "İZNİK",
        "MAHALLE": "ŞEREFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLYAS AKSU",
        "TELEFON": " 0537 251 48 70",
        "ADRES": "ŞEREFİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 553,
        "ILCE": "İZNİK",
        "MAHALLE": "TACİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAİT ERSÖZ",
        "TELEFON": "0535 783 22 71",
        "ADRES": "TACİR MAH. İZNİK\/BURSA"
       },
       {
        "ID": 554,
        "ILCE": "İZNİK",
        "MAHALLE": "Y.ŞEREFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖZER AYDOĞDU",
        "TELEFON": " 0532 734 96 28",
        "ADRES": "Y.ŞEREFİYE MAH. İZNİK\/BURSA"
       },
       {
        "ID": 555,
        "ILCE": "İZNİK",
        "MAHALLE": "YENİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "RIDVAN CİNAL",
        "TELEFON": " 0532 540 4 647",
        "ADRES": "YENİ MAH. İZNİK\/BURSA"
       },
       {
        "ID": 556,
        "ILCE": "İZNİK",
        "MAHALLE": "YEŞİL CAMİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ETHEM AYDIN",
        "TELEFON": " 0537 676 42 96  ",
        "ADRES": "YEŞİL CAMİ MAH. BÜKE SOK. NO:1 İZNİK\/BURSA"
       },
       {
        "ID": 557,
        "ILCE": "İZNİK",
        "MAHALLE": "YÖRÜKLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET BATI",
        "TELEFON": "0530 903 34 16",
        "ADRES": "YÖRÜKLER MAH. İZNİK\/BURSA"
       },
       {
        "ID": 558,
        "ILCE": "KESTEL",
        "MAHALLE": "AĞLAŞAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "BÜNYAMİN ÖZBEY",
        "TELEFON": "0542 345 03 44",
        "ADRES": "AĞLAŞAN MAH. KESTEL\/BURSA"
       },
       {
        "ID": 559,
        "ILCE": "KESTEL",
        "MAHALLE": "AHMET VEFİK PAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "TÜNCAY ÖZEL",
        "TELEFON": "0533 651 03 84",
        "ADRES": "AHMET VEFİK PAŞA MAH.EDİZER CAD. NO:1 KESTEL\/BURSA"
       },
       {
        "ID": 560,
        "ILCE": "KESTEL",
        "MAHALLE": "AKSU MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM ÖZCAN",
        "TELEFON": "0532 494 41 14",
        "ADRES": "AKSU MAH. KESTEL\/BURSA"
       },
       {
        "ID": 561,
        "ILCE": "KESTEL",
        "MAHALLE": "ALAÇAM MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVAT TURAN",
        "TELEFON": "0536 966 07 08",
        "ADRES": "ALAÇAM MAH. NO:69 KESTEL\/BURSA"
       },
       {
        "ID": 562,
        "ILCE": "KESTEL",
        "MAHALLE": "BABASULTAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "FAHRİ ÇELİK",
        "TELEFON": "0533 663 69 62",
        "ADRES": "BABASULTAN MAH. MUHTAR SOK. NO:10 KESTEL\/BURSA"
       },
       {
        "ID": 563,
        "ILCE": "KESTEL",
        "MAHALLE": "BARAKFAKİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET AKBULUT",
        "TELEFON": "0533 388 46 52",
        "ADRES": "BARAKFAKİH MAH. GENÇ OSMAN CAD. KESTEL\/BURSA"
       },
       {
        "ID": 564,
        "ILCE": "KESTEL",
        "MAHALLE": "BURHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECDET DİLER",
        "TELEFON": "0 532 471 51 73",
        "ADRES": "BURHANİYE MAH.FIRIN SOK. NO:5 KESTEL\/BURSA"
       },
       {
        "ID": 565,
        "ILCE": "KESTEL",
        "MAHALLE": "ÇATALTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ARSLAN",
        "TELEFON": "0 532 683 35 43",
        "ADRES": "ÇATALTEPE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 566,
        "ILCE": "KESTEL",
        "MAHALLE": "DEREKIZIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "FUAT DURMUŞ",
        "TELEFON": "0532 394 76 08",
        "ADRES": "DEREKIZIK MAH. KESTEL\/BURSA"
       },
       {
        "ID": 567,
        "ILCE": "KESTEL",
        "MAHALLE": "DUDAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ESEN",
        "TELEFON": "0 533 355 36 01",
        "ADRES": "DUDAKLI MAH. KESTEL\/BURSA"
       },
       {
        "ID": 568,
        "ILCE": "KESTEL",
        "MAHALLE": "ERDOĞAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA İMREN",
        "TELEFON": "0532 724 82 63",
        "ADRES": "ERDOĞAN MAH. KESTEL\/BURSA"
       },
       {
        "ID": 569,
        "ILCE": "KESTEL",
        "MAHALLE": "ESENTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "M.KADİR SEÇKİNLİ",
        "TELEFON": "0537 564 43 60",
        "ADRES": "ESENTEPE MAH. TOKİ CAD. KESTEL\/BURSA"
       },
       {
        "ID": 570,
        "ILCE": "KESTEL",
        "MAHALLE": "GÖLBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İRFAN AYDIN",
        "TELEFON": "0 532 612 19 42",
        "ADRES": "GÖLBAŞI MAH. KESTEL\/BURSA"
       },
       {
        "ID": 571,
        "ILCE": "KESTEL",
        "MAHALLE": "GÖLCÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ÇAĞLAYAN",
        "TELEFON": "0534 216 86 92",
        "ADRES": "GÖLCÜK MAH. KESTEL\/BURSA"
       },
       {
        "ID": 572,
        "ILCE": "KESTEL",
        "MAHALLE": "GÖZEDE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİT KARATAŞ",
        "TELEFON": "0532 506 89 85",
        "ADRES": "GÖZEDE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 573,
        "ILCE": "KESTEL",
        "MAHALLE": "KALE MAHALLESİ MUHTARI",
        "AD_SOYAD": "DERVİŞ ÇATALTEPE",
        "TELEFON": "0 536 931 99 48",
        "ADRES": "KALE MAH. KURTULUŞ CAD. NO:5 KESTEL\/BURSA"
       },
       {
        "ID": 574,
        "ILCE": "KESTEL",
        "MAHALLE": "KAYACIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEBATTİN UYSAL",
        "TELEFON": "0 532 736 16 98",
        "ADRES": "KAYACIK MAH. KESTEL\/BURSA"
       },
       {
        "ID": 575,
        "ILCE": "KESTEL",
        "MAHALLE": "KOZLUÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT YILDIZ",
        "TELEFON": "0533 714 91 15",
        "ADRES": "KOZLUÖREN MAH. KESTEL\/BURSA"
       },
       {
        "ID": 576,
        "ILCE": "KESTEL",
        "MAHALLE": "LÜTFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "DAVUT EREN",
        "TELEFON": "0 507 668 71 10",
        "ADRES": "LÜTFİYE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 577,
        "ILCE": "KESTEL",
        "MAHALLE": "NARLIDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SERKAN SAKİN",
        "TELEFON": "0533 923 85 85",
        "ADRES": "NARLIDERE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 578,
        "ILCE": "KESTEL",
        "MAHALLE": "NÜZHETİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ ÇİLDEM",
        "TELEFON": "0532 357 56 15",
        "ADRES": "NÜZHETİYE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 579,
        "ILCE": "KESTEL",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALAATTİN YILMAZ",
        "TELEFON": "0534 736 58 34",
        "ADRES": "ORHANİYE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 580,
        "ILCE": "KESTEL",
        "MAHALLE": "OSMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLYAS YILMAZ",
        "TELEFON": "0 532 786 65 20",
        "ADRES": "OSMANİYE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 581,
        "ILCE": "KESTEL",
        "MAHALLE": "SAİTABAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN ERASLAN",
        "TELEFON": "0532 286 60 96 ",
        "ADRES": "SAİTABAT MAH. KESTEL\/BURSA"
       },
       {
        "ID": 582,
        "ILCE": "KESTEL",
        "MAHALLE": "SAYFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAŞAR KILIÇ",
        "TELEFON": "0532 120 16 45",
        "ADRES": "SAYFİYE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 583,
        "ILCE": "KESTEL",
        "MAHALLE": "SERME MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN KAYA",
        "TELEFON": "0 549 501 07 15",
        "ADRES": "SERME MAH. KESTEL\/BURSA"
       },
       {
        "ID": 584,
        "ILCE": "KESTEL",
        "MAHALLE": "SEYMEN MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAZIM TÜYSÜZ",
        "TELEFON": "0530 934 59 17",
        "ADRES": "SEYMEN MAH. KESTEL\/BURSA"
       },
       {
        "ID": 585,
        "ILCE": "KESTEL",
        "MAHALLE": "SOĞUKSU MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ALTIN",
        "TELEFON": "0535 574 54 15",
        "ADRES": "SOĞUKSU MAH. KESTEL\/BURSA"
       },
       {
        "ID": 586,
        "ILCE": "KESTEL",
        "MAHALLE": "ŞEVKETİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN KONEZ",
        "TELEFON": "0536 739 54 83",
        "ADRES": "ŞEVKETİYE MAH. KESTEL\/BURSA"
       },
       {
        "ID": 587,
        "ILCE": "KESTEL",
        "MAHALLE": "KAZANCI  MAHALLESİ MUHTARI",
        "AD_SOYAD": "SACİT ERHAN",
        "TELEFON": "0 532 477 60 40",
        "ADRES": "KAZANCI  MAH. KESTEL\/BURSA"
       },
       {
        "ID": 588,
        "ILCE": "KESTEL",
        "MAHALLE": "TURAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZAHİD ERKAN",
        "TELEFON": "0 532 325 54 16",
        "ADRES": "TURAN MAH. KESTEL\/BURSA"
       },
       {
        "ID": 589,
        "ILCE": "KESTEL",
        "MAHALLE": "ÜMİTALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞABAN ÖZEK",
        "TELEFON": "0533 613 56 72",
        "ADRES": "ÜMİTALAN MAH. KESTEL\/BURSA"
       },
       {
        "ID": 590,
        "ILCE": "KESTEL",
        "MAHALLE": "VANİ MEHMET MAHALLESİ MUHTARI",
        "AD_SOYAD": "CENGİZ ALA",
        "TELEFON": "0532 523 20 92",
        "ADRES": "VANİ MEHMET MAH. EMRE SOK. NO:16 KESTEL\/BURSA"
       },
       {
        "ID": 591,
        "ILCE": "KESTEL",
        "MAHALLE": "YAĞMURLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET YILDIZ",
        "TELEFON": "0537 664 96 03",
        "ADRES": "YAĞMURLU MAH. KESTEL\/BURSA"
       },
       {
        "ID": 592,
        "ILCE": "KESTEL",
        "MAHALLE": "YENİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEKERİYA KILIÇ",
        "TELEFON": "0 533 630 92 34",
        "ADRES": "YENİ MAH. KANUNİ SOK. NO:1 KESTEL\/BURSA"
       },
       {
        "ID": 593,
        "ILCE": "KARACABEY",
        "MAHALLE": "ABDULLAHPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMET KARAN",
        "TELEFON": "0 536 419 45 39",
        "ADRES": "ABDULLAHPAŞA MAH. HASAN ÜNALDI SOK. NO:7 KARACABEY\/BURSA"
       },
       {
        "ID": 594,
        "ILCE": "KARACABEY",
        "MAHALLE": "AKÇAKOYUN MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAMİL DİNÇ",
        "TELEFON": "0536 528 63 37",
        "ADRES": "AKÇAKOYUN MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 595,
        "ILCE": "KARACABEY",
        "MAHALLE": "AKÇASUSURLUK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET KURUR",
        "TELEFON": "0 536 745 49 24",
        "ADRES": "AKÇASUSURLUK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 596,
        "ILCE": "KARACABEY",
        "MAHALLE": "AKHİSAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMALİ ATIŞ",
        "TELEFON": "0 533 321 35 25",
        "ADRES": "AKHİSAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 597,
        "ILCE": "KARACABEY",
        "MAHALLE": "ARIZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ İHSAN KARDEŞ",
        "TELEFON": "0 538 769 84 40",
        "ADRES": "ARIZ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 598,
        "ILCE": "KARACABEY",
        "MAHALLE": "BAKIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAZIM ÖNEN",
        "TELEFON": "0 532 464 15 68",
        "ADRES": "BAKIR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 599,
        "ILCE": "KARACABEY",
        "MAHALLE": "BALLIKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "METİN AVCULAR",
        "TELEFON": "0533 247 71 46",
        "ADRES": "BALLIKAYA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 600,
        "ILCE": "KARACABEY",
        "MAHALLE": "BAYRAMDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NİHAT ALTIN",
        "TELEFON": "0 533 745 87 14",
        "ADRES": "BAYRAMDERE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 601,
        "ILCE": "KARACABEY",
        "MAHALLE": "BEYLİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN AYYILDIZ",
        "TELEFON": "0 532 473 15 70",
        "ADRES": "BEYLİK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 602,
        "ILCE": "KARACABEY",
        "MAHALLE": "BOĞAZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEMAL KAYA",
        "TELEFON": "0536 657 37 46",
        "ADRES": "BOĞAZ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 603,
        "ILCE": "KARACABEY",
        "MAHALLE": "CANBALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN KOYUNCU",
        "TELEFON": "0 532 658 32 65",
        "ADRES": "CANBALI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 604,
        "ILCE": "KARACABEY",
        "MAHALLE": "CANBAZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ORHAN AYYILDIZ",
        "TELEFON": "0 535 373 57 55",
        "ADRES": "CANBAZ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 605,
        "ILCE": "KARACABEY",
        "MAHALLE": "ÇAMLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAADETTİN YILDIRIM",
        "TELEFON": "0 535 980 21 71",
        "ADRES": "ÇAMLICA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 606,
        "ILCE": "KARACABEY",
        "MAHALLE": "ÇARIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SİNAN AYDIN",
        "TELEFON": "0 533 573 72 76",
        "ADRES": "ÇARIK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 607,
        "ILCE": "KARACABEY",
        "MAHALLE": "ÇAVUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA UZ",
        "TELEFON": "0535 308 13 15",
        "ADRES": "ÇAVUŞ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 608,
        "ILCE": "KARACABEY",
        "MAHALLE": "ÇEŞNİGİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLYAS ORUÇ",
        "TELEFON": "0 533 466 13 39",
        "ADRES": "ÇEŞNİGİR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 609,
        "ILCE": "KARACABEY",
        "MAHALLE": "DAĞESEMEN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET NURİ ÇOBAN",
        "TELEFON": "0536 933 70 26",
        "ADRES": "DAĞESEMEN MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 610,
        "ILCE": "KARACABEY",
        "MAHALLE": "DAĞKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "FAHRİ SAN",
        "TELEFON": "0533 523 41 74",
        "ADRES": "DAĞKADI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 611,
        "ILCE": "KARACABEY",
        "MAHALLE": "DANİŞMENT MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMETTİN ZARİF",
        "TELEFON": "0 535 288 58 62",
        "ADRES": "DANİŞMENT MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 612,
        "ILCE": "KARACABEY",
        "MAHALLE": "DOĞLA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖMER ÇAMUR",
        "TELEFON": "0506 115 74 67",
        "ADRES": "DOĞLA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 613,
        "ILCE": "KARACABEY",
        "MAHALLE": "DRAMA MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEDİM TARLI",
        "TELEFON": "0 532 476 41 65",
        "ADRES": "DRAMA MAH. RUNGUÇPAŞA CAD. NO:23 KARACABEY\/BURSA"
       },
       {
        "ID": 614,
        "ILCE": "KARACABEY",
        "MAHALLE": "EKİNLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ÇELİK",
        "TELEFON": "0 536 629 89 11",
        "ADRES": "EKİNLİ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 615,
        "ILCE": "KARACABEY",
        "MAHALLE": "EKMEKÇİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADNAN ECELER",
        "TELEFON": "0 530 611 98 50",
        "ADRES": "EKMEKÇİ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 616,
        "ILCE": "KARACABEY",
        "MAHALLE": "EMİRSULTAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SİNAN ÇOLAK",
        "TELEFON": "0537 255 39 93",
        "ADRES": "EMİRSULTAN MAH. 200.SOK. NO:18 KARACABEY\/BURSA"
       },
       {
        "ID": 617,
        "ILCE": "KARACABEY",
        "MAHALLE": "ESENTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ IŞIK",
        "TELEFON": "0 533 238 85 56",
        "ADRES": "ESENTEPE MAH. 180. SOK. NO:9 KARACABEY\/BURSA"
       },
       {
        "ID": 618,
        "ILCE": "KARACABEY",
        "MAHALLE": "ESKİKARAAĞAÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "RİDVAN ÇETİN",
        "TELEFON": "0 532 658 32 52",
        "ADRES": "ESKİKARAAĞAÇ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 619,
        "ILCE": "KARACABEY",
        "MAHALLE": "ESKİSARIBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ASİL CAN",
        "TELEFON": "0536 506 73 05",
        "ADRES": "ESKİSARIBEY MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 620,
        "ILCE": "KARACABEY",
        "MAHALLE": "FEVZİPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ONUR DEMİR",
        "TELEFON": "0530 344 35 14",
        "ADRES": "FEVZİPAŞA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 621,
        "ILCE": "KARACABEY",
        "MAHALLE": "GARİPÇE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN BASRİ HOTANLI",
        "TELEFON": "0 533 547 51 93",
        "ADRES": "GARİPÇE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 622,
        "ILCE": "KARACABEY",
        "MAHALLE": "GAZİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN YAVAŞ",
        "TELEFON": "0 533 337 13 39",
        "ADRES": "GAZİ MAH. 96.SOK. KARACABEY\/BURSA"
       },
       {
        "ID": 623,
        "ILCE": "KARACABEY",
        "MAHALLE": "GÖLECİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜNER KAZA",
        "TELEFON": "0534 840 56 96",
        "ADRES": "GÖLECİK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 624,
        "ILCE": "KARACABEY",
        "MAHALLE": "GÖLKIYI MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEVZAT YALÇIN",
        "TELEFON": "0532 468 22 87",
        "ADRES": "GÖLKIYI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 625,
        "ILCE": "KARACABEY",
        "MAHALLE": "GÖNÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL YILDIRIM",
        "TELEFON": "0 532 464 55 44",
        "ADRES": "GÖNÜ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 626,
        "ILCE": "KARACABEY",
        "MAHALLE": "GÜNGÖRMEZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL BATIR",
        "TELEFON": "0535 701 08 44",
        "ADRES": "GÜNGÖRMEZ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 627,
        "ILCE": "KARACABEY",
        "MAHALLE": "OVAHAMİDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "Cemal ERDEM",
        "TELEFON": "0532 416 99 86",
        "ADRES": "OVAHAMİDİYE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 628,
        "ILCE": "KARACABEY",
        "MAHALLE": "HAMİDİYE MERKEZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ORHAN ÖZDEMİR",
        "TELEFON": "0536 441 50 38",
        "ADRES": "HAMİDİYE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 629,
        "ILCE": "KARACABEY",
        "MAHALLE": "HARMANLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDEM ÇOLAK",
        "TELEFON": "0 533 455 18 53",
        "ADRES": "HARMANLI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 630,
        "ILCE": "KARACABEY",
        "MAHALLE": "HAYIRLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYATİ ARSLANGERİ",
        "TELEFON": "0 531 935 83 53",
        "ADRES": "HAYIRLAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 631,
        "ILCE": "KARACABEY",
        "MAHALLE": "HOTANLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAMİ ÖZSEÇEN",
        "TELEFON": "0 542 676 13 94",
        "ADRES": "HOTANLI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 632,
        "ILCE": "KARACABEY",
        "MAHALLE": "HÜDAVENDİGAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEYFETTİN GÜRGENCİ",
        "TELEFON": "0 542 285 60 55",
        "ADRES": "HÜDAVENDİGAR MAH. MAH. YENİKÖY CAD. NO:33  KARACABEY\/BURSA"
       },
       {
        "ID": 633,
        "ILCE": "KARACABEY",
        "MAHALLE": "HÜRRİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET KAÇAR",
        "TELEFON": "0535 829 23 39",
        "ADRES": "HÜRRİYET MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 634,
        "ILCE": "KARACABEY",
        "MAHALLE": "İKİZCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MÜMÜN ERESELLİ",
        "TELEFON": "0 532 734 96 99",
        "ADRES": "İKİZCE MMAH. KARACABEY\/BURSA"
       },
       {
        "ID": 635,
        "ILCE": "KARACABEY",
        "MAHALLE": "İNKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN TURHAN",
        "TELEFON": "0 545 387 23 93",
        "ADRES": "İNKAYA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 636,
        "ILCE": "KARACABEY",
        "MAHALLE": "İSMETPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET GÜVEN",
        "TELEFON": "0 533 561 89 68",
        "ADRES": "İSMETPAŞA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 637,
        "ILCE": "KARACABEY",
        "MAHALLE": "KARACAAHMET MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ESEMEN",
        "TELEFON": "0 535 473 27 88",
        "ADRES": "KARACAAHMET MAH. 66.SOK. NO:2 KARACABEY\/BURSA"
       },
       {
        "ID": 638,
        "ILCE": "KARACABEY",
        "MAHALLE": "KARAKOCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MÜMİN ÖZDEMİR",
        "TELEFON": "0 533 460 45 07",
        "ADRES": "KARAKOCA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 639,
        "ILCE": "KARACABEY",
        "MAHALLE": "KARASU MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ÖZSOY",
        "TELEFON": "0535 980 88 21",
        "ADRES": "KARASU MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 640,
        "ILCE": "KARACABEY",
        "MAHALLE": "KEDİKAYA MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEYSEL DÖNMEZ",
        "TELEFON": "0 536 610 02 17",
        "ADRES": "KEDİKAYA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 641,
        "ILCE": "KARACABEY",
        "MAHALLE": "KEŞLİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "BÜNYAMİN DENİZHAN",
        "TELEFON": "0 530 411 48 75",
        "ADRES": "KEŞLİK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 642,
        "ILCE": "KARACABEY",
        "MAHALLE": "KIRANLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ OSMAN DİNÇER",
        "TELEFON": "0535 678 58 79",
        "ADRES": "KIRANLAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 643,
        "ILCE": "KARACABEY",
        "MAHALLE": "KULAKPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ KARAKUŞ",
        "TELEFON": "0535 216 40 31",
        "ADRES": "KULAKPINAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 644,
        "ILCE": "KARACABEY",
        "MAHALLE": "KURŞUNLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİM ŞÜKÜR",
        "TELEFON": "0538 926 02 49",
        "ADRES": "KURŞUNLU MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 645,
        "ILCE": "KARACABEY",
        "MAHALLE": "KÜÇÜKKARAAĞAÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NADİR NADİ KAHRAMAN",
        "TELEFON": "0 533 392 15 73",
        "ADRES": "KÜÇÜKKARAAĞAÇ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 646,
        "ILCE": "KARACABEY",
        "MAHALLE": "MAMURİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ÇAKIR",
        "TELEFON": "0 536 314 01 44",
        "ADRES": "MAMURİYET MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 647,
        "ILCE": "KARACABEY",
        "MAHALLE": "MECİDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "CELAL ERİM",
        "TELEFON": "0551 045 40 65",
        "ADRES": "MECİDİYE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 648,
        "ILCE": "KARACABEY",
        "MAHALLE": "MURATLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDAL YALDIZ",
        "TELEFON": "0 535 560 52 42",
        "ADRES": "MURATLI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 649,
        "ILCE": "KARACABEY",
        "MAHALLE": "NASRETTİN MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL BİLTEKİN",
        "TELEFON": "0 532 437 39 78",
        "ADRES": "NASRETTİN MAH. BURSA CAD. KARACABEY\/BURSA"
       },
       {
        "ID": 650,
        "ILCE": "KARACABEY",
        "MAHALLE": "OKÇULAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEYFULLAH YILMAZ",
        "TELEFON": "0538 619 94 38",
        "ADRES": "OKÇULAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 651,
        "ILCE": "KARACABEY",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖZGÜR AYDIN",
        "TELEFON": "0 533 479 33 15",
        "ADRES": "ORHANİYE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 652,
        "ILCE": "KARACABEY",
        "MAHALLE": "ORTASARIBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA AY",
        "TELEFON": "0532 204 73 94",
        "ADRES": "ORTASARIBEY MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 653,
        "ILCE": "KARACABEY",
        "MAHALLE": "OVAESEMEN MAHALLESİ MUHTARI",
        "AD_SOYAD": "LEVENT ÇINAR",
        "TELEFON": "0532 590 14 70",
        "ADRES": "OVAESEMEN MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 654,
        "ILCE": "KARACABEY",
        "MAHALLE": "ÖRENCİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURETTİN ATA",
        "TELEFON": "0535 880 84 15",
        "ADRES": "ÖRENCİK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 655,
        "ILCE": "KARACABEY",
        "MAHALLE": "RUNGUŞPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEMAL TETİK",
        "TELEFON": "0536 886 25 26",
        "ADRES": "RUNGUŞPAŞA MAH. PANAYIR CAD. NO:4 KARACABEY\/BURSA"
       },
       {
        "ID": 656,
        "ILCE": "KARACABEY",
        "MAHALLE": "SAADET MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ÜZER",
        "TELEFON": "0539 226 14 17",
        "ADRES": "SAADET MAH. MUHTAR AZİZ EREN SOK. NO:4 KARACABEY\/BURSA"
       },
       {
        "ID": 657,
        "ILCE": "KARACABEY",
        "MAHALLE": "SAZLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SİNAN ARGIN",
        "TELEFON": "0542 380 54 50",
        "ADRES": "SAZLICA MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 658,
        "ILCE": "KARACABEY",
        "MAHALLE": "SELİMİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAMİT TOPALOĞLU",
        "TELEFON": "0537 365 16 03",
        "ADRES": "SELİMİYE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 659,
        "ILCE": "KARACABEY",
        "MAHALLE": "SEYRAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "FEVZİ BAYRAM",
        "TELEFON": "0537 924 69 95",
        "ADRES": "SEYRAN MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 660,
        "ILCE": "KARACABEY",
        "MAHALLE": "SIRABADEMLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞABAN KİBAR",
        "TELEFON": "0536 705 39 77",
        "ADRES": "SIRABADEMLER MAH. 14 EYLÜL CAD. NO:103  KARACABEY\/BURSA"
       },
       {
        "ID": 661,
        "ILCE": "KARACABEY",
        "MAHALLE": "SUBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL UMUTLU",
        "TELEFON": "0538 595 48 58",
        "ADRES": "SUBAŞI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 662,
        "ILCE": "KARACABEY",
        "MAHALLE": "SULTANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "DERVİŞ METE",
        "TELEFON": "0532 596 93 55",
        "ADRES": "SULTANİYE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 663,
        "ILCE": "KARACABEY",
        "MAHALLE": "ŞAHİN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEDAT BAYIR",
        "TELEFON": "0536 220 45 08",
        "ADRES": "ŞAHİN MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 664,
        "ILCE": "KARACABEY",
        "MAHALLE": "ŞAHMELEK MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP ÖZEN",
        "TELEFON": "0546 470 96 59",
        "ADRES": "ŞAHMELEK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 665,
        "ILCE": "KARACABEY",
        "MAHALLE": "TABAKLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVDET BİLGİN",
        "TELEFON": "0535 040 15 35",
        "ADRES": "TABAKLAR MAH. BANDIRMA CAD. NO:24C KARACABEY\/BURSA"
       },
       {
        "ID": 666,
        "ILCE": "KARACABEY",
        "MAHALLE": "TAŞLIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN KAÇAR",
        "TELEFON": "0532 658 48 41",
        "ADRES": "TAŞLIK MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 667,
        "ILCE": "KARACABEY",
        "MAHALLE": "TAŞPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "FEDAİ İZLİ",
        "TELEFON": "0532 434 34 58",
        "ADRES": "TAŞPINAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 668,
        "ILCE": "KARACABEY",
        "MAHALLE": "TAVŞANLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN SARIN",
        "TELEFON": "0536 524 96 15",
        "ADRES": "TAVŞANLI MAH.KARACAAHMET CAD. KARACABEY\/BURSA"
       },
       {
        "ID": 669,
        "ILCE": "KARACABEY",
        "MAHALLE": "TOPHİSAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN YAKUT",
        "TELEFON": "0533 710 53 67",
        "ADRES": "TOPHİSAR MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 670,
        "ILCE": "KARACABEY",
        "MAHALLE": "ULUABAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞEVKET AŞNI",
        "TELEFON": "0535 860 80 42",
        "ADRES": "ULUABAT MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 671,
        "ILCE": "KARACABEY",
        "MAHALLE": "YARIŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZİYA ARSLAN",
        "TELEFON": "0535 678 57 63",
        "ADRES": "YARIŞ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 672,
        "ILCE": "KARACABEY",
        "MAHALLE": "YENİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÇETİN AYVA",
        "TELEFON": "0532 661 39 74",
        "ADRES": "YENİ MAH. 143.SOK. NO:35 KARACABEY\/BURSA"
       },
       {
        "ID": 673,
        "ILCE": "KARACABEY",
        "MAHALLE": "YENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEDAT DUYMAZ",
        "TELEFON": "0532 232 87 66",
        "ADRES": "YENİCE MAH. 58.SOK. KARACABEY\/BURSA"
       },
       {
        "ID": 674,
        "ILCE": "KARACABEY",
        "MAHALLE": "YENİKARAAĞAÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADEM ŞEN",
        "TELEFON": "0541 545 69 22",
        "ADRES": "YENİKARAAĞAÇ MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 675,
        "ILCE": "KARACABEY",
        "MAHALLE": "YENİSARIBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ENGİN ÇİFTÇİ",
        "TELEFON": "0532 717 53 71",
        "ADRES": "YENİSARIBEY MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 676,
        "ILCE": "KARACABEY",
        "MAHALLE": "YEŞİLDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP ORHAN",
        "TELEFON": "0532 716 80 69",
        "ADRES": "YEŞİLDERE MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 677,
        "ILCE": "KARACABEY",
        "MAHALLE": "YOLAĞZI MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEMALETTİN VURAL",
        "TELEFON": "0533 727 52 52",
        "ADRES": "YOLAĞZI MAH. KARACABEY\/BURSA"
       },
       {
        "ID": 678,
        "ILCE": "KELES",
        "MAHALLE": "AKÇAPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ORUÇ",
        "TELEFON": "0532 713 27 33",
        "ADRES": "AKÇAPINAR MAH. KELES\/BURSA"
       },
       {
        "ID": 679,
        "ILCE": "KELES",
        "MAHALLE": "ALPAGUT MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ORUÇ",
        "TELEFON": "0533 646 48 76",
        "ADRES": "ALPAGUT MAH. KELES\/BURSA"
       },
       {
        "ID": 680,
        "ILCE": "KELES",
        "MAHALLE": "AVDAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN DENİZ",
        "TELEFON": "0533 966 58 19",
        "ADRES": "AVDAN MAH. KELES\/BURSA"
       },
       {
        "ID": 681,
        "ILCE": "KELES",
        "MAHALLE": "BARAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "HACER ÇAM ",
        "TELEFON": "0537 648 90 95",
        "ADRES": "BARAKLI MAH. KELES\/BURSA"
       },
       {
        "ID": 682,
        "ILCE": "KELES",
        "MAHALLE": "BAŞAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP DURAK",
        "TELEFON": "0535 445 80 84",
        "ADRES": "BAŞAK MAH. KELES\/BURSA"
       },
       {
        "ID": 683,
        "ILCE": "KELES",
        "MAHALLE": "BELENÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ARI",
        "TELEFON": "0532 056 88 92",
        "ADRES": "BELENÖREN MAH. KELES\/BURSA"
       },
       {
        "ID": 684,
        "ILCE": "KELES",
        "MAHALLE": "BIYIKLIALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SİNAN AYAN",
        "TELEFON": "0506 609 52 75",
        "ADRES": "BIYIKLIALAN MAH. KELES\/BURSA"
       },
       {
        "ID": 685,
        "ILCE": "KELES",
        "MAHALLE": "CUMA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ BAYRAM ",
        "TELEFON": "0532 601 37 59",
        "ADRES": "CUMA MAH. MURAT CAD. KELES\/BURSA"
       },
       {
        "ID": 686,
        "ILCE": "KELES",
        "MAHALLE": "HEREKE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HİKMET SEVİŞ",
        "TELEFON": "0537 291 13 30",
        "ADRES": "HEREKE MAH. KELES\/BURSA"
       },
       {
        "ID": 687,
        "ILCE": "KELES",
        "MAHALLE": "ÇUKUR MAHALLESİ MUHTARI",
        "AD_SOYAD": "KAYA ALİ BOZKURT",
        "TELEFON": "0535 704 84 82",
        "ADRES": "ÇUKUR MAH. DERE SOK. KELES\/BURSA"
       },
       {
        "ID": 688,
        "ILCE": "KELES",
        "MAHALLE": "DAĞDEMİRCİLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "SALİH KORKMAZ",
        "TELEFON": "0533 263 33 37",
        "ADRES": "DAĞDEMİRCİLER MAH. KELES\/BURSA"
       },
       {
        "ID": 689,
        "ILCE": "KELES",
        "MAHALLE": "DAĞDİBİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ GÖKALP",
        "TELEFON": "0532 772 42 31",
        "ADRES": "DAĞDİBİ MAH. KELES\/BURSA"
       },
       {
        "ID": 690,
        "ILCE": "KELES",
        "MAHALLE": "DAVUTLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL SAKİN",
        "TELEFON": "0532 381 61 29",
        "ADRES": "DAVUTLAR MAH. KELES\/BURSA"
       },
       {
        "ID": 691,
        "ILCE": "KELES",
        "MAHALLE": "DEDELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT SEYREK",
        "TELEFON": "0535 320 31 68",
        "ADRES": "DEDELER MAH. KELES\/BURSA"
       },
       {
        "ID": 692,
        "ILCE": "KELES",
        "MAHALLE": "DELİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET ÇAKIR",
        "TELEFON": "0535 228 51 25",
        "ADRES": "DELİCE MAH. KELES\/BURSA"
       },
       {
        "ID": 693,
        "ILCE": "KELES",
        "MAHALLE": "DENİZLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "FEZAİL SEVİM",
        "TELEFON": "0537 289 42 57",
        "ADRES": "DENİZLER MAH. KELES\/BURSA"
       },
       {
        "ID": 694,
        "ILCE": "KELES",
        "MAHALLE": "DURAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN SEYMEN",
        "TELEFON": "0535  273 32 83",
        "ADRES": "DURAK MAH. KELES\/BURSA"
       },
       {
        "ID": 695,
        "ILCE": "KELES",
        "MAHALLE": "DÜVENLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "BAYRAM ÖZKAYA",
        "TELEFON": "0532 285 87 36",
        "ADRES": "DÜVENLİ MAH. KELES\/BURSA"
       },
       {
        "ID": 696,
        "ILCE": "KELES",
        "MAHALLE": "EPÇELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞABAN YILDIZ",
        "TELEFON": "0533 313 25 27",
        "ADRES": "EPÇELER MAH. KELES\/BURSA"
       },
       {
        "ID": 697,
        "ILCE": "KELES",
        "MAHALLE": "ERTUĞRULGAZİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERHAN ÇOBAN",
        "TELEFON": "0532 573 73 07",
        "ADRES": "ERTUĞRULGAZİ MAH. TAHİR HOCA CAD. KELES\/BURSA"
       },
       {
        "ID": 698,
        "ILCE": "KELES",
        "MAHALLE": "GELEMİÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET DİKMEN",
        "TELEFON": "0536 977 01 52",
        "ADRES": "GELEMİÇ MAH. KELES\/BURSA"
       },
       {
        "ID": 699,
        "ILCE": "KELES",
        "MAHALLE": "GÖKÖZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İDRİS AYDIN",
        "TELEFON": "0555 237 61 52",
        "ADRES": "GÖKÖZ MAH. KELES\/BURSA"
       },
       {
        "ID": 700,
        "ILCE": "KELES",
        "MAHALLE": "HARMANALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF USLU",
        "TELEFON": "0535 415 30 82",
        "ADRES": "HARMANALAN MAH. KELES\/BURSA"
       },
       {
        "ID": 701,
        "ILCE": "KELES",
        "MAHALLE": "HARMANDEMİRCİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECİP ÜZE",
        "TELEFON": "0532 609 09 51",
        "ADRES": "HARMANDEMİRCİ MAH. KELES\/BURSA"
       },
       {
        "ID": 702,
        "ILCE": "KELES",
        "MAHALLE": "HAYDAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM SEVİNÇ",
        "TELEFON": "0530 288 29 30",
        "ADRES": "HAYDAR MAH. KELES\/BURSA"
       },
       {
        "ID": 703,
        "ILCE": "KELES",
        "MAHALLE": "ISSIZÖREN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ATIŞ",
        "TELEFON": "0536 353 55 86",
        "ADRES": "ISSIZÖREN MAH. KELES\/BURSA"
       },
       {
        "ID": 704,
        "ILCE": "KELES",
        "MAHALLE": "KARAARDIÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYDIN ÖZDEMİR",
        "TELEFON": "0535 742 17 35",
        "ADRES": "KARAARDIÇ MAH. KELES\/BURSA"
       },
       {
        "ID": 705,
        "ILCE": "KELES",
        "MAHALLE": "KEMALİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞAKİR YILDIZ",
        "TELEFON": "0532 781 56 08",
        "ADRES": "KEMALİYE MAH. KELES\/BURSA"
       },
       {
        "ID": 706,
        "ILCE": "KELES",
        "MAHALLE": "KIRANIŞIKLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN ALA",
        "TELEFON": "0530 922 16 87",
        "ADRES": "KIRANIŞIKLAR MAH. KELES\/BURSA"
       },
       {
        "ID": 707,
        "ILCE": "KELES",
        "MAHALLE": "KİRAZLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET MEMİŞ",
        "TELEFON": "0532 749 09 28",
        "ADRES": "KİRAZLI MAH. KELES\/BURSA"
       },
       {
        "ID": 708,
        "ILCE": "KELES",
        "MAHALLE": "KOCAKAVACIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN BALI",
        "TELEFON": "0535 351 87 45",
        "ADRES": "KOCAKAVACIK MAH. KELES\/BURSA"
       },
       {
        "ID": 709,
        "ILCE": "KELES",
        "MAHALLE": "KOZBUDAKLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET YILDIRIM",
        "TELEFON": "0537 760 73 53",
        "ADRES": "KOZBUDAKLAR MAH. KELES\/BURSA"
       },
       {
        "ID": 710,
        "ILCE": "KELES",
        "MAHALLE": "KÜÇÜKKAVACIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "YÜKSEL BİLGİT",
        "TELEFON": "0530 265 34 88",
        "ADRES": "KÜÇÜKKAVACIK MAH. KELES\/BURSA"
       },
       {
        "ID": 711,
        "ILCE": "KELES",
        "MAHALLE": "MENTEŞE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL TURGUT",
        "TELEFON": "0539 231 33 93",
        "ADRES": "MENTEŞE MAH. KELES\/BURSA"
       },
       {
        "ID": 712,
        "ILCE": "KELES",
        "MAHALLE": "PINARCIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ORHAN AYBEY",
        "TELEFON": "0531 492 56 88",
        "ADRES": "PINARCIK MAH. KELES\/BURSA"
       },
       {
        "ID": 713,
        "ILCE": "KELES",
        "MAHALLE": "SOFULAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET EMİN CANAVAR",
        "TELEFON": "0530 043 78 23",
        "ADRES": "SOFULAR ADNAN MENDERES CAD. KELES\/BURSA"
       },
       {
        "ID": 714,
        "ILCE": "KELES",
        "MAHALLE": "SORGUN MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECATİ EKŞİ",
        "TELEFON": "0532 446 96 52",
        "ADRES": "SORGUN MAH. KELES\/BURSA"
       },
       {
        "ID": 715,
        "ILCE": "KELES",
        "MAHALLE": "UZUNÖZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET TURAN",
        "TELEFON": "0537 219 68 36",
        "ADRES": "UZUNÖZ MAH. KELES\/BURSA"
       },
       {
        "ID": 716,
        "ILCE": "KELES",
        "MAHALLE": "YAĞCILAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ETHEM BAYRIK",
        "TELEFON": "0533 415 71 40",
        "ADRES": "YAĞCILAR MAH. KELES\/BURSA"
       },
       {
        "ID": 717,
        "ILCE": "KELES",
        "MAHALLE": "YAZIBAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUHAMMER KILIÇARSLAN",
        "TELEFON": "0532 787 03 10",
        "ADRES": "YAZIBAŞI MAH. KELES\/BURSA"
       },
       {
        "ID": 718,
        "ILCE": "KELES",
        "MAHALLE": "YENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ARİF HİKMET KAYIŞ",
        "TELEFON": "0535 552 15 77",
        "ADRES": "YENİCE MAH. TUĞRULBEY CAD. KELES\/BURSA"
       },
       {
        "ID": 719,
        "ILCE": "KELES",
        "MAHALLE": "YUNUSLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KAYA",
        "TELEFON": "0535 481 13 17",
        "ADRES": "YUNUSLAR MAH. KELES\/BURSA"
       },
       {
        "ID": 720,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ADAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEFA DİZBEY",
        "TELEFON": "0534 485 39 51",
        "ADRES": "ADAKÖY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 721,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ADALET MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET HERGÜL",
        "TELEFON": "0536 467 28 28",
        "ADRES": "ADALET MAH. FETİH SOK. NO:8C MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 722,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "AĞAÇLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ÖZDEMİR",
        "TELEFON": "0536 25180 76",
        "ADRES": "AĞAÇLI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 723,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "AKARCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYRETTİN YAMAN",
        "TELEFON": "0537 611 87 65",
        "ADRES": "AKARCA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 724,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "AKÇAPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET SEYMEN",
        "TELEFON": "0535 491 94 66",
        "ADRES": "AKÇAPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 725,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ALACAAT MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLHAN SADIK",
        "TELEFON": "0535 267 87 87",
        "ADRES": "ALACAAT MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 726,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ALİSEYDİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLYAS SERD",
        "TELEFON": "0533 475 10 54",
        "ADRES": "ALİSEYDİ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 727,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ALPAGUT MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMİ ALTIN",
        "TELEFON": "0535 675 45 50",
        "ADRES": "ALPAGUT MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 728,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ARALIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "TANER HADAR",
        "TELEFON": "0535 605 06 85",
        "ADRES": "ARALIK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 729,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "AŞAĞIBALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ZEYBEK",
        "TELEFON": "0535 592 48 33",
        "ADRES": "AŞAĞIBALI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 730,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ATARİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AVNİ YAZICIOĞLU",
        "TELEFON": "0532 481 07 39",
        "ADRES": "ATARİYE MAH. SEYİT ALİ SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 731,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ATATÜRK MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM KARAKAŞ",
        "TELEFON": "0535 985 12 30",
        "ADRES": "ATATÜRK MAH. GAZİLER SOK NO:3 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 732,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "AYAZKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERTAN BULUT",
        "TELEFON": "0533 630 92 21",
        "ADRES": "AYAZKÖY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 733,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "BAHARİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN KARANFİL",
        "TELEFON": "0537 926 51 41",
        "ADRES": "BAHARİYE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 734,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "BARIŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET USLU",
        "TELEFON": "0532 713 09 56",
        "ADRES": "BARIŞ MAH. BARIŞ SOK. NO:15 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 735,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "BEHRAM MAHALLESİ MUHTARI",
        "AD_SOYAD": "EKREM AYDIN",
        "TELEFON": "0536 717 51 30",
        "ADRES": "BEHRAM MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 736,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "BOĞAZKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "SERVET EREN",
        "TELEFON": "0533 815 16 70",
        "ADRES": "BOĞAZKÖY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 737,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "BOSTANDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖZKAN GÜLCAN",
        "TELEFON": 5344537927,
        "ADRES": "BOSTANDERE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 738,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "BÜKKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN ÖZDEMİR",
        "TELEFON": "0533 692 56 26",
        "ADRES": "BÜKKÖY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 739,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "CAMANDAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURETTİN BAYRAM",
        "TELEFON": "0536 711 00 56",
        "ADRES": "CAMANDAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 740,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "CUMHURİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖMÜRLÜ AKBAŞ",
        "TELEFON": "0535 609 85 75",
        "ADRES": "CUMHURİYET MAH. PARK SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 741,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇAKALLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA GÖNÜL",
        "TELEFON": "0507 705 59 73",
        "ADRES": "ÇAKALLAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 742,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇALTILIBÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SALİH KAYACIK",
        "TELEFON": "0536 635 72 11",
        "ADRES": "ÇALTILIBÜK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 743,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇAMLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN YILMAZ",
        "TELEFON": "0535 293 77 15",
        "ADRES": "ÇAMLICA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 744,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇARDAKBELEN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ALİ ACAR",
        "TELEFON": "0535 821 65 50",
        "ADRES": "ÇARDAKBELEN MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 745,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇAVUŞKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAHİM ALMACI",
        "TELEFON": "0531 915 15 45",
        "ADRES": "ÇAVUŞKÖY MAH. 14 EYLÜL BULVARI NO:2 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 746,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇELTİKÇİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "RASİM ACAR",
        "TELEFON": "0535 731 12 90",
        "ADRES": "ÇELTİKÇİ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 747,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇIRPAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET SOLAK",
        "TELEFON": "0537 604 43 60",
        "ADRES": "ÇIRPAN MAH. RAUF DENKTAŞ CAD. NO:12 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 748,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇİVİLİÇAM MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÖZCAN AYDEMİR",
        "TELEFON": "0538 382 97 83",
        "ADRES": "ÇİVİLİÇAM MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 749,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇÖMLEKÇİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL HAKKI YILDIRIM",
        "TELEFON": "0533 762 21 67",
        "ADRES": "ÇÖMLEKÇİ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 750,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÇÖRDÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SABAHAT KANLIOĞLU",
        "TELEFON": "0505 472 74 10",
        "ADRES": "ÇÖRDÜK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 751,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DALLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVAT UŞAR",
        "TELEFON": "0536 843 16 27",
        "ADRES": "DALLICA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 752,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DEMİRDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN YEŞİL",
        "TELEFON": "0545 684 30 47",
        "ADRES": "DEMİRDERE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 753,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DEMİRELİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMET TURHAN",
        "TELEFON": "0537 885 87 67",
        "ADRES": "DEMİRELİ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 754,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SALİH KIRKAN",
        "TELEFON": "0538 735 91 67",
        "ADRES": "DERE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 755,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DERECİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYATİ DEMİREL",
        "TELEFON": "0539 663 92 93",
        "ADRES": "DERECİK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 756,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DEREKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "Burhan BAŞER",
        "TELEFON": "0535 398 30 35",
        "ADRES": "DEREKADI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 757,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DEVECİKONAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEDAT ECE",
        "TELEFON": "0537 956 71 36",
        "ADRES": "DEVECİKONAK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 758,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DOĞANALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MESUT AKYILDIZ",
        "TELEFON": "0537 734 40 79",
        "ADRES": "DOĞANALAN MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 759,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DOĞANCI MAHALLESİ MUHTARI",
        "AD_SOYAD": "AYHAN ŞEN",
        "TELEFON": "0532 582 09 97",
        "ADRES": "DOĞANCI MAH. DOĞANCI SOK. NO:98 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 760,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DORAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "Ünal SUNA",
        "TELEFON": "0536 766 56 62",
        "ADRES": "DORAK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 761,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DÖLLÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN KARADUMAN",
        "TELEFON": "0535 560 93 25",
        "ADRES": "DÖLLÜK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 762,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "DURUMTAY MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÜVEN ÖDEN",
        "TELEFON": "0534 839 69 72",
        "ADRES": "DURUMTAY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 763,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ESKİBALÇIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP CEYLAN",
        "TELEFON": "0530 087 19 70",
        "ADRES": "ESKİBALÇIK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 764,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ESKİKIZILELMA MAHALLESİ MUHTARI",
        "AD_SOYAD": "BİLGİN ULU",
        "TELEFON": "0537 948 85 70",
        "ADRES": "ESKİKIZILELMA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 765,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "FEVZİDEDE MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL ALTINTAŞ",
        "TELEFON": "0532 445 05 38",
        "ADRES": "FEVZİDEDE MAH. FEVZİDEDE SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 766,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "FINDICAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET DURAK",
        "TELEFON": "0535 319 75 68",
        "ADRES": "FINDICAK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 767,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "GARİPÇETEKKE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÜMİT KURT",
        "TELEFON": "0538 842 66 25",
        "ADRES": "GARİPÇETEKKE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 768,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "GÜLLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN SAYIN",
        "TELEFON": "0536 571 87 32",
        "ADRES": "GÜLLER MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 769,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "GÜLLÜCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "FİKRİ ARGIN",
        "TELEFON": "0532 272 86 66",
        "ADRES": "GÜLLÜCE MAH. GÜLLÜCE SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 770,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "GÜNDOĞDU MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL TARAKÇI",
        "TELEFON": "0532 491 71 55",
        "ADRES": "GÜNDOĞDU MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 771,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "GÜVEÇDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "LÜTFÜ TÜRKMEN",
        "TELEFON": "0530 615 55 54",
        "ADRES": "GÜVEÇDERE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 772,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "GÜVEM MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞERİF EROL",
        "TELEFON": "0539 205 34 44",
        "ADRES": "GÜVEM MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 773,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "HACIAHMET MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL KURUOĞLU",
        "TELEFON": "0536 243 51 07",
        "ADRES": "HACIAHMET MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 774,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "HACIALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEBAHATTİN VESKE",
        "TELEFON": "0537 611 87 68",
        "ADRES": "HACIALİ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 775,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "HAMİDİYE KÖYÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL TURHAN",
        "TELEFON": "0532 307 63 59",
        "ADRES": "HAMİDİYE KÖYÜ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 776,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "HAMİDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN ONAT",
        "TELEFON": "0533 325 59 29",
        "ADRES": "HAMİDİYE MAH. RAUF DENKTAŞ CAD. NO:2 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 777,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "HAMZABEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "NUSRET ALGUN",
        "TELEFON": "0532 573 83 59",
        "ADRES": "HAMZABEY MAH. SOKULLU SOK. NO:14 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 778,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "HİSARALTI MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEYİT ÇATAL",
        "TELEFON": "0535 432 94 80",
        "ADRES": "HİSARALTI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 779,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "IŞIKLAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET KULA",
        "TELEFON": "0538 392 17 06",
        "ADRES": "IŞIKLAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 780,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "İLYASÇILAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP YILMAZ",
        "TELEFON": "0532 468 60 09",
        "ADRES": "İLYASÇILAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 781,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "İNCEALİPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET EMİR",
        "TELEFON": "0543 530 73 90",
        "ADRES": "İNCEALİPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 782,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KABULBABA MAHALLESİ MUHTARI",
        "AD_SOYAD": "FEZVİ ÜLKER",
        "TELEFON": "0537 978 47 74",
        "ADRES": "KABULBABA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 783,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KADİRÇEŞME MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDOĞAN UZUN",
        "TELEFON": "0537 449 22 71",
        "ADRES": "KADİRÇEŞME MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 784,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KAPAKLIOLUK MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAİL ŞAHİN",
        "TELEFON": "0537 717 03 89",
        "ADRES": "KAPAKLIOLUK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 785,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KARACALAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ TANIŞ",
        "TELEFON": "0535 281 13 09",
        "ADRES": "KARACALAR MAH.KARACALAR SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 786,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KARAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HİDAYET UZUN",
        "TELEFON": "0535 565 60 09",
        "ADRES": "KARAKÖY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 787,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KARAOĞLAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERGÜN KISA",
        "TELEFON": "0538 514 87 79",
        "ADRES": "KARAOĞLAN MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 788,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KARAORMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "NECMİ ÇAKIR",
        "TELEFON": "0535 673 43 92",
        "ADRES": "KARAORMAN MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 789,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KARAPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN SEVİM",
        "TELEFON": "0532 402 17 73",
        "ADRES": "KARAPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 790,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KAYABAŞI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA ADIGÜZEL",
        "TELEFON": "0536 935 06 55",
        "ADRES": "KAYABAŞI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 791,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KAZANPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEMAL DOĞRU",
        "TELEFON": "0532 292 43 28",
        "ADRES": "KAZANPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 792,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KELTAŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAİM DURSUN",
        "TELEFON": "0539 818 81 44",
        "ADRES": "KELTAŞ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 793,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KESTELEK MAHALLESİ MUHTARI",
        "AD_SOYAD": "KEMAL DOĞRU",
        "TELEFON": "0539 303 31 16",
        "ADRES": "KESTELEK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 794,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KİLLİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HİDAYET SUNGUR",
        "TELEFON": "0536 856 25 48",
        "ADRES": "KİLLİK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 795,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KOCAKORU MAHALLESİ MUHTARI",
        "AD_SOYAD": "TAHSİN EKİNCİ",
        "TELEFON": "0537 428 52 92",
        "ADRES": "KOCAKORU MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 796,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KOSOVA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELAMİ SALIM",
        "TELEFON": "0544 792 59 15",
        "ADRES": "KOSOVA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 797,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KOŞUBOĞAZI MAHALLESİ MUHTARI",
        "AD_SOYAD": "HİKMET ALPAY",
        "TELEFON": "0536 851 62 76",
        "ADRES": "KOŞUBOĞAZI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 798,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KÖMÜRCÜKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVAT CANDAN",
        "TELEFON": "0536 972 00 51",
        "ADRES": "KÖMÜRCÜKADI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 799,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KÖREKEM MAHALLESİ MUHTARI",
        "AD_SOYAD": "CAFER İKİZOĞLU",
        "TELEFON": "0538 215 67 55",
        "ADRES": "KÖREKEM MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 800,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KÖSEHOROZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ÇAKIR",
        "TELEFON": "0532 644 69 85",
        "ADRES": "KÖSEHOROZ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 801,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KUMKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KURT",
        "TELEFON": "0542 791 01 58",
        "ADRES": "KUMKADI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 802,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "KURŞUNLU MAHALLESİ MUHTARI",
        "AD_SOYAD": "BİLAL BAYIRLI",
        "TELEFON": "0530 680 59 45",
        "ADRES": "KURŞUNLU MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 803,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "LALAŞAHİN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ BULUT",
        "TELEFON": "0532 281 61 90",
        "ADRES": "LALAŞAHİN MAH. MUSA ÜZEL CAD. NO:1 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 804,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "LÜTFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET AYTEKİN",
        "TELEFON": "0535 559 07 80",
        "ADRES": "LÜTFİYE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 805,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "MELİKKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ DURAN ",
        "TELEFON": "0537 673 92 76",
        "ADRES": "MELİKKÖY MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 806,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "MURADİYE SARNIÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN GÜNEŞ",
        "TELEFON": "0535 382 92 31",
        "ADRES": "MURADİYE SARNIÇ MAHALLESİ MUHTARI"
       },
       {
        "ID": 807,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "OCAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ KEMAL AYDIN",
        "TELEFON": "0536 884 83 01",
        "ADRES": "OCAKLI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 808,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ONAÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "TEZCAN SEZER",
        "TELEFON": "0531 836 98 37",
        "ADRES": "ONAÇ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 809,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ MERİÇ",
        "TELEFON": "0536 956 70 38",
        "ADRES": "ORHANİYE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 810,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ORMANKADI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET SALİH KALINBACAK",
        "TELEFON": "0553 354 35 55",
        "ADRES": "ORMANKADI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 811,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ORTA MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP KORKMAZ",
        "TELEFON": "0535 322 93 81",
        "ADRES": "ORTA MAH. ESKİ BURSA CAD. NO:41A MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 812,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "OSMANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ÇETİNSOY",
        "TELEFON": "0537 725 50 41",
        "ADRES": "OSMANİYE MAH. OSMANİYE SOK. NO:60 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 813,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "OVAAZATLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "CELAL TUNCA",
        "TELEFON": "0536 705 17 27",
        "ADRES": "OVAAZATLI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 814,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÖMERALTI MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAKUP YILDIZ",
        "TELEFON": "0538 207 35 51",
        "ADRES": "ÖMERALTI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 815,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "PAŞALAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİKSAN  İÇER",
        "TELEFON": "0532 285 23 01",
        "ADRES": "PAŞALAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 816,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SARIMUSTAFALAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ÜZEYİR SARAÇ",
        "TELEFON": "0533 446 77 20",
        "ADRES": "SARIMUSTAFALAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 817,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SELİMİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MİTHAT ÜRKÜN",
        "TELEFON": "0532 647 13 05",
        "ADRES": "SELİMİYE MAH. YUSUF SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 818,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SİNCANSARNIÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MENDERES ÖZEN",
        "TELEFON": "0535 742 01 25",
        "ADRES": "SİNCANSARNIÇ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 819,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SOĞUCAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ŞAHİN",
        "TELEFON": "0535 575 82 11",
        "ADRES": "SOĞUCAK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 820,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SOĞUKPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "YUSUF ÖZMEN",
        "TELEFON": "0538 766 25 02",
        "ADRES": "SOĞUKPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 821,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SÖĞÜTALAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEDAT AYTEKİN",
        "TELEFON": "0535 931 40 57",
        "ADRES": "SÖĞÜTALAN MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 822,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "SÜNLÜK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERSİN USLU",
        "TELEFON": "0551 407 33 57",
        "ADRES": "SÜNLÜK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 823,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ŞAPÇI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET AKAR",
        "TELEFON": "0534 525 15 21",
        "ADRES": "ŞAPÇI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 824,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ŞEHRİMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "EROL BURHAN",
        "TELEFON": "0535 337 29 78",
        "ADRES": "ŞEHRİMAN MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 825,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ŞEREFİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEVZAT ÇETİNSOY",
        "TELEFON": "0531 667 82 07",
        "ADRES": "ŞEREFİYE MAH.ELÇİN SOK. NO:14 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 826,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ŞEVKETİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT KURTULAN",
        "TELEFON": "0532 625 65 10",
        "ADRES": "ŞEVKETİYE MAH. DEMİRCİLER CAD. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 827,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ŞEYHMÜFTÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL YILMAZ",
        "TELEFON": "0541 383 81 11",
        "ADRES": "ŞEYHMÜFTÜ MAH. CAMİİ SOK. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 828,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "TAŞKÖPRÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "Sezai ÇAPKIN",
        "TELEFON": "0536 956 70 18",
        "ADRES": "TAŞKÖPRÜ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 829,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "TAŞPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN ULUDAĞ",
        "TELEFON": "0533 931 75 49",
        "ADRES": "TAŞPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 830,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "TATKAVAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET ORAK ",
        "TELEFON": "0535 786 33 39",
        "ADRES": "TATKAVAKLI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 831,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "TEPECİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MESUT ETTİ",
        "TELEFON": "0537 681 31 57",
        "ADRES": "TEPECİK MAH. ÇAN SOK. NO:5 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 832,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "TIRNOVA MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMRULLAH GEZER",
        "TELEFON": "0537 613 81 12",
        "ADRES": "TIRNOVA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 833,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "UĞURLUPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "CİHAN TOSO",
        "TELEFON": "0533 484 43 58",
        "ADRES": "UĞURLUPINAR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 834,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ÜÇBEYLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN TURAN",
        "TELEFON": "0532 305 07 15",
        "ADRES": "ÜÇBEYLİ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 835,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "VİRACA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SADETTİN ÇALI",
        "TELEFON": "0537 528 20 29",
        "ADRES": "VİRACA MAH. EDABALİ SOK NO:5 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 836,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YALINTAŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SEYFETTİN KARANFİL",
        "TELEFON": "0537 707 36 64",
        "ADRES": "YALINTAŞ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 837,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YAMANLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMET KUTLU",
        "TELEFON": "0535 355 94 41",
        "ADRES": "YAMANLI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 838,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YAVELLİ    (İNCİLİPINAR)",
        "AD_SOYAD": "ERSİN DEMİR",
        "TELEFON": "0542 635 14 50",
        "ADRES": "YAVELLİ    (İNCİLİPINAR) MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 839,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YAYLAÇAYIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZİYAFETTİN DEDEOĞLU",
        "TELEFON": "0533 577 98 47",
        "ADRES": "YAYLAÇAYIR MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 840,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YENİBALÇIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAKKI KARAKÖSEMOĞLU",
        "TELEFON": "0535 613 99 02",
        "ADRES": "YENİBALÇIK MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 841,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLHAN ÖKDEM",
        "TELEFON": "0532 741 28 78",
        "ADRES": "YENİCE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 842,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YENİDERE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAVAŞ TURA",
        "TELEFON": "0539 423 98 50",
        "ADRES": "YENİDERE MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 843,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YENİKIZILELMA MAHALLESİ MUHTARI",
        "AD_SOYAD": "BASRİ SEVİM",
        "TELEFON": "0532 763 91 71",
        "ADRES": "YENİKIZILELMA MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 844,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YEŞİLOVA MAHALLESİ MUHTARI",
        "AD_SOYAD": "BEYSAT TOKUŞ",
        "TELEFON": "0535 686 52 97",
        "ADRES": "YEŞİLOVAMAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 845,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YONCAAĞAÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "AZİZ PEHLİVAN",
        "TELEFON": "0535 859 18 39",
        "ADRES": "YONCAAĞAÇ MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 846,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YUKARIBALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAKUP BÜK",
        "TELEFON": "0539 847 00 75 ",
        "ADRES": "YUKARIBALI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 847,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YUMURCAKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "NACİ GÖRPE",
        "TELEFON": "0537 725 40 30",
        "ADRES": "YUMURCAKLI MAH. MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 848,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YUNUSEMRE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADNAN ERATAN",
        "TELEFON": "0535 341 21 17",
        "ADRES": "YUNUSEMRE MAH. FEVZİPAŞA CAD. NO:183 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 849,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "YÜZBAŞI SABRİBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAYRETTİN CAN",
        "TELEFON": "0532 723 17 09",
        "ADRES": "YÜZBAŞI SABRİBEY MAH. MEKTEP SOK. NO:34 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 850,
        "ILCE": "MUSTAFAKEMALPAŞA",
        "MAHALLE": "ZÜFERBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN AYDIN",
        "TELEFON": "0554 620 52 52",
        "ADRES": "ZÜFERBEY MAH.İSMETPAŞA CAD. NO:19 MUSTAFAKEMALPAŞA\/BURSA"
       },
       {
        "ID": 851,
        "ILCE": "MUDANYA",
        "MAHALLE": "AKKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET ÇABUKLAR",
        "TELEFON": "0532 575 77 57 ",
        "ADRES": "AKKÖY MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 852,
        "ILCE": "MUDANYA",
        "MAHALLE": "ALTINTAŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "TAYFUN UYAR",
        "TELEFON": "0536 872 29 54",
        "ADRES": "ALTINTAŞ MAH. ALTINTAŞ KÖYÜ İÇ YOLUMUDANYA\/BURSA"
       },
       {
        "ID": 853,
        "ILCE": "MUDANYA",
        "MAHALLE": "AYDINPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "EKREM GÜR",
        "TELEFON": "0535 859 44 20",
        "ADRES": "AYDINPINAR MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 854,
        "ILCE": "MUDANYA",
        "MAHALLE": "BADEMLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "CEVAT DURMAZ",
        "TELEFON": "0537 596 69 25",
        "ADRES": "BADEMLİ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 855,
        "ILCE": "MUDANYA",
        "MAHALLE": "BALABANCIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ CEYLAN",
        "TELEFON": "0532 790 64 26",
        "ADRES": "BALABANCIK MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 856,
        "ILCE": "MUDANYA",
        "MAHALLE": "BURGAZ GÜZELYALI  ",
        "AD_SOYAD": "YÜKSEL KOPUZ",
        "TELEFON": "0532 724 99 96",
        "ADRES": "BURGAZ GÜZELYALI  MAH. YEŞİL CAD. NO:7 MUDANYA\/BURSA"
       },
       {
        "ID": 857,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÇAĞRIŞAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET GÜN",
        "TELEFON": "0533 367 38 67",
        "ADRES": "ÇAĞRIŞAN MAH. ATA SOK. NO:3 MUDANYA\/BURSA"
       },
       {
        "ID": 858,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÇAMLIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMRULLAH FÜMEN",
        "TELEFON": "0537 463 38 80",
        "ADRES": "ÇAMLIK MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 859,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÇAYÖNÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZEKİ KARADENİZ",
        "TELEFON": "0533 431 23 89",
        "ADRES": "ÇAYÖNÜ MAH. ÇAYÖNÜ SOK. NO:116A MUDANYA\/BURSA"
       },
       {
        "ID": 860,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÇEKRİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET AKTÜRK",
        "TELEFON": "0541 313 14 67",
        "ADRES": "ÇEKRİCE MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 861,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÇEPNİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "GÖKSEL METE",
        "TELEFON": "0533 377 75 48",
        "ADRES": "ÇEPNİ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 862,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÇINARLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAŞAR YILDIZ",
        "TELEFON": "0533 388 54 75",
        "ADRES": "ÇINARLI MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 863,
        "ILCE": "MUDANYA",
        "MAHALLE": "DEDEKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "BÜLENT SEZGİÇ",
        "TELEFON": "0535 570 51 14",
        "ADRES": "DEDEKÖY MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 864,
        "ILCE": "MUDANYA",
        "MAHALLE": "DEREKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEDİM ORUÇ",
        "TELEFON": "0536 249 55 27 0516 162 55 27",
        "ADRES": "DEREKÖY MAH. 1.SOK NO:16 MUDANYA\/BURSA"
       },
       {
        "ID": 865,
        "ILCE": "MUDANYA",
        "MAHALLE": "E. YENİCESİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMET KAŞAN",
        "TELEFON": "0541 617 45 27",
        "ADRES": "E. YENİCESİ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 866,
        "ILCE": "MUDANYA",
        "MAHALLE": "EĞERCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA TEMEL",
        "TELEFON": "0533 569 34 15",
        "ADRES": "EĞERCE MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 867,
        "ILCE": "MUDANYA",
        "MAHALLE": "EĞİTİM MAHALLESİ MUHTARI",
        "AD_SOYAD": "HAMZA DİKBIYIK",
        "TELEFON": "0532 713 43 66",
        "ADRES": "EĞİTİM MAH. İSTİKLAL CAD. MUDANYA\/BURSA"
       },
       {
        "ID": 868,
        "ILCE": "MUDANYA",
        "MAHALLE": "ESENCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN ÇETİN",
        "TELEFON": "0536 421 69 29",
        "ADRES": "ESENCE MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 869,
        "ILCE": "MUDANYA",
        "MAHALLE": "EVCİLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN MUTLU",
        "TELEFON": "0534 302 26 08",
        "ADRES": "EVCİLER MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 870,
        "ILCE": "MUDANYA",
        "MAHALLE": "GÖYNÜKLÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞENOL HABİL",
        "TELEFON": "0536 332 61 30",
        "ADRES": "GÖYNÜKLÜ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 871,
        "ILCE": "MUDANYA",
        "MAHALLE": "HALİTPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELMA YARAR",
        "TELEFON": "0536 732 54 60",
        "ADRES": "HALİTPAŞA MAH. MUSTAFAKEMALPAŞA CAD. NO:27 MUDANYA\/BURSA"
       },
       {
        "ID": 872,
        "ILCE": "MUDANYA",
        "MAHALLE": "HANÇERLİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL BAYINDIR",
        "TELEFON": "0536 837 06 90",
        "ADRES": "HANÇERLİ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 873,
        "ILCE": "MUDANYA",
        "MAHALLE": "HASKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "LEVENT AŞÇI",
        "TELEFON": "0532 408 51 50",
        "ADRES": "HASKÖY MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 874,
        "ILCE": "MUDANYA",
        "MAHALLE": "HASANBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEZİR SAĞLAM",
        "TELEFON": "0539 420 10 41",
        "ADRES": "HASANBEY MAH. SELVİLİK CAD. NO:43 MUDANYA\/BURSA"
       },
       {
        "ID": 875,
        "ILCE": "MUDANYA",
        "MAHALLE": "IŞIKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "TARIK ŞENGÜL",
        "TELEFON": "0532 544 63 31",
        "ADRES": "IŞIKLI MAH. ESKİ SU SOK. NO:20 MUDANYA\/BURSA"
       },
       {
        "ID": 876,
        "ILCE": "MUDANYA",
        "MAHALLE": "İPEKYAYLA MAHALLESİ MUHTARI",
        "AD_SOYAD": "H. İBRAHİM EVCİL",
        "TELEFON": "0507 421 50 93",
        "ADRES": "İPEKYAYLA MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 877,
        "ILCE": "MUDANYA",
        "MAHALLE": "KAYMAKOBA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MURAT ŞEN",
        "TELEFON": "0535 764 07 74",
        "ADRES": "KAYMAKOBA MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 878,
        "ILCE": "MUDANYA",
        "MAHALLE": "KUMYAKA MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM YALÇINKAYA",
        "TELEFON": "0536 476 81 05",
        "ADRES": "KUMYAKA MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 879,
        "ILCE": "MUDANYA",
        "MAHALLE": "KÜÇÜKYENİCE MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL HAKKI ERTEN",
        "TELEFON": "0543 413 74 87",
        "ADRES": "KÜÇÜKYENİCE MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 880,
        "ILCE": "MUDANYA",
        "MAHALLE": "MESUDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET KÖSE",
        "TELEFON": "0532 517 58 87",
        "ADRES": "MESUDİYE MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 881,
        "ILCE": "MUDANYA",
        "MAHALLE": "MİRZAOBA MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞENOL DURGUT",
        "TELEFON": "0536 910 38 41",
        "ADRES": "MİRZAOBA MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 882,
        "ILCE": "MUDANYA",
        "MAHALLE": "MÜRSEL MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET İLHAN",
        "TELEFON": "0535 829 03 56",
        "ADRES": "MÜRSEL MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 883,
        "ILCE": "MUDANYA",
        "MAHALLE": "MÜTAREKE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ BAYTEKİN",
        "TELEFON": "0533 577 11 52",
        "ADRES": "MÜTAREKE MAH. ASLANBABA CAD. NO:2\/4 MUDANYA\/BURSA"
       },
       {
        "ID": 884,
        "ILCE": "MUDANYA",
        "MAHALLE": "ORHANİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "VELİ BALİ",
        "TELEFON": "0533 466 08 19",
        "ADRES": "ORHANİYE MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 885,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÖMERBEY MAHALLESİ MUHTARI",
        "AD_SOYAD": "SONGÜL ERDOĞAN",
        "TELEFON": "0505 855 96 92",
        "ADRES": "ÖMERBEY MAH. DENİZ CAD. NO:4 MUDANYA\/BURSA"
       },
       {
        "ID": 886,
        "ILCE": "MUDANYA",
        "MAHALLE": "SİTELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞAKİR ÇELEBİOĞLU",
        "TELEFON": "0532 726 54 54",
        "ADRES": "SİTELER MAH.ERTUĞRULGAZİ CAD. NO:3A MUDANYA\/BURSA"
       },
       {
        "ID": 887,
        "ILCE": "MUDANYA",
        "MAHALLE": "SÖĞÜTPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HÜSEYİN DEMİROK",
        "TELEFON": "0532 723 25 74",
        "ADRES": "SÖĞÜTPINAR MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 888,
        "ILCE": "MUDANYA",
        "MAHALLE": "ŞÜKRÜÇAVUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞEREF ŞAŞ",
        "TELEFON": "0535 586 43 79",
        "ADRES": "ŞÜKRÜÇAVUŞ MAH. 1.HARMANLAR SOK. NO:33 MUDANYA\/BURSA"
       },
       {
        "ID": 889,
        "ILCE": "MUDANYA",
        "MAHALLE": "ÜLKÜ MAHALLESİ MUHTARI",
        "AD_SOYAD": "TANER BAYRAK",
        "TELEFON": "0533 223 30 35",
        "ADRES": "ÜLKÜ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 890,
        "ILCE": "MUDANYA",
        "MAHALLE": "YÖRÜK  YENİCESİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERKAN AKCAN",
        "TELEFON": "0546 974 10 27",
        "ADRES": "YÖRÜK  YENİCESİ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 891,
        "ILCE": "MUDANYA",
        "MAHALLE": "YALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "NEJDİ DİLSİZ",
        "TELEFON": "0532 586 19 26",
        "ADRES": "YALI MAH. ALAY SOK. NO:33 MUDANYA\/BURSA"
       },
       {
        "ID": 892,
        "ILCE": "MUDANYA",
        "MAHALLE": "YALIÇİFTLİK MAHALLESİ MUHTARI",
        "AD_SOYAD": "ARİF TOKTAŞ",
        "TELEFON": "0531 671 63 72",
        "ADRES": "YALIÇİFTLİK MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 893,
        "ILCE": "MUDANYA",
        "MAHALLE": "YAMAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "ABDULLAH ÇAKIR",
        "TELEFON": "0537 932 81 68",
        "ADRES": "YAMAN MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 894,
        "ILCE": "MUDANYA",
        "MAHALLE": "YAYLACIK MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN TURAN",
        "TELEFON": "0532 202 42 12",
        "ADRES": "YAYLACIK MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 895,
        "ILCE": "MUDANYA",
        "MAHALLE": "YENİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "NAZMİ KARALAR",
        "TELEFON": "0531 509 97 97",
        "ADRES": "YENİ MAH.ÜNLÜ CAD NO:21 MUDANYA\/BURSA"
       },
       {
        "ID": 896,
        "ILCE": "MUDANYA",
        "MAHALLE": "YÖRÜKALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "YAŞAR ÜNLÜER",
        "TELEFON": "0532 113 59 57",
        "ADRES": "YÖRÜKALİ MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 897,
        "ILCE": "MUDANYA",
        "MAHALLE": "TRİLYE (ZEYTİNBAĞI) MAHALLESİ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN ALKIZ",
        "TELEFON": "0535 337 72 17",
        "ADRES": "TRİLYE (ZEYTİNBAĞI) MAH. MUDANYA\/BURSA"
       },
       {
        "ID": 898,
        "ILCE": "ORHANELİ",
        "MAHALLE": "300 EVLER MAHALLESİ MUHTARI",
        "AD_SOYAD": "RAMAZAN BALI",
        "TELEFON": "0536 888 14 92",
        "ADRES": "300 EVLER MAH. SARAÇ SOK. ORHANELİ\/BURSA"
       },
       {
        "ID": 899,
        "ILCE": "ORHANELİ",
        "MAHALLE": "AĞAÇHİSAR KÖYÜ MUHTARI",
        "AD_SOYAD": "K.ALİ GÜLTEKİN",
        "TELEFON": "0532 733 41 27",
        "ADRES": "AĞAÇHİSAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 900,
        "ILCE": "ORHANELİ",
        "MAHALLE": "AKALAN KÖYÜ MUHTARI",
        "AD_SOYAD": "HÜSEYİN YILMAZ",
        "TELEFON": "0536 321 94 76",
        "ADRES": "AKALAN KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 901,
        "ILCE": "ORHANELİ",
        "MAHALLE": "AKÇABÜK KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ KAYA",
        "TELEFON": "0533 267 09 23",
        "ADRES": "AKÇABÜK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 902,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ALTINTAŞ KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ AKIN",
        "TELEFON": "0537 450 12 51",
        "ADRES": "ALTINTAŞ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 903,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ARGIN KÖYÜ MUHTARI",
        "AD_SOYAD": "İSMAİL AVLAN",
        "TELEFON": "0536 296 68 21",
        "ADRES": "ARGIN KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 904,
        "ILCE": "ORHANELİ",
        "MAHALLE": "BALIOĞLU KÖYÜ MUHTARI",
        "AD_SOYAD": "FEZAYİR KAYA",
        "TELEFON": "0532 204 30 17",
        "ADRES": "BALIOĞLU KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 905,
        "ILCE": "ORHANELİ",
        "MAHALLE": "BAŞ KÖY MUHTARI",
        "AD_SOYAD": "HASAN ACAR",
        "TELEFON": "0536 860 39 63",
        "ADRES": "BAŞ KÖY MAH. ORHANELİ\/BURSA"
       },
       {
        "ID": 906,
        "ILCE": "ORHANELİ",
        "MAHALLE": "BELENOLUK KÖYÜ MUHTARI",
        "AD_SOYAD": "AHMET ACAR",
        "TELEFON": "0536 988 31 58",
        "ADRES": "BELENOLUK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 907,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ÇALAPLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "CANİP ASLAN",
        "TELEFON": "0532 587 00 70",
        "ADRES": "ÇALAPLARKÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 908,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ÇEKİ KÖYÜ MUHTARI",
        "AD_SOYAD": "ŞERİF BEKTEŞ",
        "TELEFON": "0536 453 24 71",
        "ADRES": "ÇEKİ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 909,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ÇINARCIK KÖYÜ MUHTARI",
        "AD_SOYAD": "ADİL DANIK",
        "TELEFON": "0538 630 41 46",
        "ADRES": "ÇINARCIK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 910,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ÇİVİLİ KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET KESKİN",
        "TELEFON": "0532 567 37 87",
        "ADRES": "ÇİVİLİ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 911,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ÇÖRELER KÖYÜ MUHTARI",
        "AD_SOYAD": "TURAN ARGIN",
        "TELEFON": "0538 251 16 62",
        "ADRES": "ÇÖRELER KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 912,
        "ILCE": "ORHANELİ",
        "MAHALLE": "DAĞGÜNEY KÖYÜ MUHTARI",
        "AD_SOYAD": "TANER ARI",
        "TELEFON": "0535 660 45 35",
        "ADRES": "DAĞGÜNEY KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 913,
        "ILCE": "ORHANELİ",
        "MAHALLE": "DELİBALLILAR KÖYÜ MUHTARI",
        "AD_SOYAD": "ŞAHMERAN AY",
        "TELEFON": "0537 798 36 75",
        "ADRES": "DELİBALLILAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 914,
        "ILCE": "ORHANELİ",
        "MAHALLE": "DEMİRCİ KÖYÜ MUHTARI",
        "AD_SOYAD": "EROL ARI",
        "TELEFON": "535 631 21 10",
        "ADRES": "DEMİRCİ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 915,
        "ILCE": "ORHANELİ",
        "MAHALLE": "DERE KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET ÇETİN",
        "TELEFON": "0532 771 29 51",
        "ADRES": "DERE KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 916,
        "ILCE": "ORHANELİ",
        "MAHALLE": "DÜNDAR KÖYÜ MUHTARI",
        "AD_SOYAD": "HÜSNÜ ERDEM",
        "TELEFON": "0536 493 99 78",
        "ADRES": "DÜNDAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 917,
        "ILCE": "ORHANELİ",
        "MAHALLE": "EMİR KÖYÜ MUHTARI",
        "AD_SOYAD": "AHMET ÇAVDAR",
        "TELEFON": "0535 373 33 68",
        "ADRES": "EMİR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 918,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ERENLER KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ SÖNMEZ",
        "TELEFON": "0535 634 63 55",
        "ADRES": "ERENLER KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 919,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ESENTEPE MAHALLESİ MUHTARI",
        "AD_SOYAD": "NİHAT TUNCA",
        "TELEFON": "0535 248 01 94",
        "ADRES": "ESENTEPE MAH. ARPA SOK. ORHANELİ\/BURSA"
       },
       {
        "ID": 920,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ESKİDANİŞMENT KÖYÜ MUHTARI",
        "AD_SOYAD": "FEZAİL TUĞRUL",
        "TELEFON": "0531 240 54 53",
        "ADRES": "ESKİDANİŞMENT KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 921,
        "ILCE": "ORHANELİ",
        "MAHALLE": "FADIL KÖYÜ MUHTARI",
        "AD_SOYAD": "OSMAN ORUÇ",
        "TELEFON": "0538 299 85 42",
        "ADRES": "FADIL KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 922,
        "ILCE": "ORHANELİ",
        "MAHALLE": "FEVZİPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSA MARAL",
        "TELEFON": "0533 620 04 74",
        "ADRES": "FEVZİPAŞA MAH. SÜMER SOK. ORHANELİ\/BURSA"
       },
       {
        "ID": 923,
        "ILCE": "ORHANELİ",
        "MAHALLE": "FİROZ KÖYÜ MUHTARI",
        "AD_SOYAD": "HÜSAMETTİN KÖZKUR",
        "TELEFON": "0535 450 13 83",
        "ADRES": "FİROZ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 924,
        "ILCE": "ORHANELİ",
        "MAHALLE": "G.BELEN \/ MERKEZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET TURP",
        "TELEFON": "0533 673 44 17",
        "ADRES": "G.BELEN \/ MERKEZ MAH. ORHANELİ\/BURSA"
       },
       {
        "ID": 925,
        "ILCE": "ORHANELİ",
        "MAHALLE": "GAZİOLUK KÖYÜ MUHTARI",
        "AD_SOYAD": "RAMAZAN CAN",
        "TELEFON": "0535 563 43 16",
        "ADRES": "GAZİOLUK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 926,
        "ILCE": "ORHANELİ",
        "MAHALLE": "GAZİPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "SADULLAH KOÇAN",
        "TELEFON": "0533 466 36 43",
        "ADRES": "GAZİPAŞA MAH. HAKKI YILDIZ CAD. ORHANELİ\/BURSA"
       },
       {
        "ID": 927,
        "ILCE": "ORHANELİ",
        "MAHALLE": "GİRENCİK KÖYÜ MUHTARI",
        "AD_SOYAD": "HALİL KATIN",
        "TELEFON": "0538 348 28 77",
        "ADRES": "GİRENCİK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 928,
        "ILCE": "ORHANELİ",
        "MAHALLE": "GÖKTEPE KÖYÜ MUHTARI",
        "AD_SOYAD": "HASAN KORKMAZ",
        "TELEFON": "0532 446 57 14",
        "ADRES": "GÖKTEPE KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 929,
        "ILCE": "ORHANELİ",
        "MAHALLE": "GÜMÜŞPINAR KÖYÜ MUHTARI",
        "AD_SOYAD": "HALİL GÜRBÜZ",
        "TELEFON": "0533 248 90 09",
        "ADRES": "GÜMÜŞPINAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 930,
        "ILCE": "ORHANELİ",
        "MAHALLE": "İKİZOLUK KÖYÜ MUHTARI",
        "AD_SOYAD": "RAMAZAN ARIKAN",
        "TELEFON": "0532 720 68 28",
        "ADRES": "İKİZOLUK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 931,
        "ILCE": "ORHANELİ",
        "MAHALLE": "İSMETPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "AHMET KORKMAZ",
        "TELEFON": "0532 730 52 74",
        "ADRES": "İSMETPAŞA MAH. ZAFER CAD. ORHANELİ\/BURSA"
       },
       {
        "ID": 932,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KABAKLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "SÜLEYMAN ŞEVİK",
        "TELEFON": "0535 722 31 32",
        "ADRES": "KABAKLAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 933,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KADI KÖYÜ MUHTARI",
        "AD_SOYAD": "HALİL ÖZTÜRK",
        "TELEFON": "0531 671 18 65",
        "ADRES": "KADI KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 934,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KARABEKİRPAŞA MAHALLESİ MUHTARI",
        "AD_SOYAD": "FERSAN GÜNAY",
        "TELEFON": "0532 715 17 07",
        "ADRES": "KARABEKİRPAŞA MAH.ORHANELİ\/BURSA"
       },
       {
        "ID": 935,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KARAOĞLANLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "ADEM AYDEMİR",
        "TELEFON": "0536 931 99 46",
        "ADRES": "KARAOĞLANLAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 936,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KARASİ KÖYÜ MUHTARI",
        "AD_SOYAD": "KAYA ALİ TÜTEN",
        "TELEFON": "0536 823 34 40",
        "ADRES": "KARASİ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 937,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KARINCALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM SARI",
        "TELEFON": "0534 289 43 55",
        "ADRES": "KARINCALI MAH. BELEDİYE CAD. NO:18 ORHANELİ\/BURSA"
       },
       {
        "ID": 938,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KOÇU KÖYÜ MUHTARI",
        "AD_SOYAD": "ERHAN FERİK",
        "TELEFON": "0541 323 48 14",
        "ADRES": "KOÇU KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 939,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KUSUMLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "HÜSEYİN BAŞAY",
        "TELEFON": "0530 324 56 28",
        "ADRES": "KUSUMLAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 940,
        "ILCE": "ORHANELİ",
        "MAHALLE": "KÜÇÜKORHAN KÖYÜ MUHTARI",
        "AD_SOYAD": "İSMAİL TAŞDEMİR",
        "TELEFON": "0537 897 89 92",
        "ADRES": "KÜÇÜKORHAN KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 941,
        "ILCE": "ORHANELİ",
        "MAHALLE": "LETAFET KÖYÜ MUHTARI",
        "AD_SOYAD": "OSMAN TOSUN",
        "TELEFON": "0535 690 7393",
        "ADRES": "LETAFET KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 942,
        "ILCE": "ORHANELİ",
        "MAHALLE": "MAHALLER KÖYÜ MUHTARI",
        "AD_SOYAD": "SAMİ TURHAN",
        "TELEFON": "0545 528 45 19",
        "ADRES": "MAHALLER KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 943,
        "ILCE": "ORHANELİ",
        "MAHALLE": "NALINLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "YALÇIN ORUÇ",
        "TELEFON": "0532 704 12 41",
        "ADRES": "NALINLAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 944,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ORTAKÖY MUHTARI",
        "AD_SOYAD": "ALİ OSMAN ÇAKMAK",
        "TELEFON": "0546 533 24 72",
        "ADRES": "ORTAKÖY ORHANELİ\/BURSA"
       },
       {
        "ID": 945,
        "ILCE": "ORHANELİ",
        "MAHALLE": "OSMANİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ SAKİN",
        "TELEFON": "0532 626 84 63",
        "ADRES": "OSMANİYE KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 946,
        "ILCE": "ORHANELİ",
        "MAHALLE": "SADAĞI KÖYÜ MUHTARI",
        "AD_SOYAD": "KAMİL ÇAKIR",
        "TELEFON": "0535 632 65 11",
        "ADRES": "SADAĞI MAH. SADAĞI SOK. NO:21 ORHANELİ\/BURSA"
       },
       {
        "ID": 947,
        "ILCE": "ORHANELİ",
        "MAHALLE": "SEMERCİ KÖYÜ MUHTARI",
        "AD_SOYAD": "CAHİT GÜLEÇ",
        "TELEFON": "0537 450 23 26",
        "ADRES": "SEMERCİ KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 948,
        "ILCE": "ORHANELİ",
        "MAHALLE": "SERÇELER KÖYÜ MUHTARI",
        "AD_SOYAD": "İBRAHİM TUFAN",
        "TELEFON": "0537 232 24 77",
        "ADRES": "SERÇELER KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 949,
        "ILCE": "ORHANELİ",
        "MAHALLE": "SIRIL KÖYÜ MUHTARI",
        "AD_SOYAD": "ALAATTİN RÜZGAR",
        "TELEFON": "0535 914 1475",
        "ADRES": "SIRIL KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 950,
        "ILCE": "ORHANELİ",
        "MAHALLE": "SÖĞÜT KÖYÜ MUHTARI",
        "AD_SOYAD": "YAŞAR AYDEMİR",
        "TELEFON": "0531 620 37 40",
        "ADRES": "SÖĞÜT KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 951,
        "ILCE": "ORHANELİ",
        "MAHALLE": "SÜLEYMANBEY KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ ALPER",
        "TELEFON": "0535 646 30 69",
        "ADRES": "SÜLEYMANBEY KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 952,
        "ILCE": "ORHANELİ",
        "MAHALLE": "ŞÜKRİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "SELİM AY",
        "TELEFON": "0533 716 41 03",
        "ADRES": "ŞÜKRİYE KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 953,
        "ILCE": "ORHANELİ",
        "MAHALLE": "TEPECİK KÖYÜ MUHTARI",
        "AD_SOYAD": "MUSTAFA TÜTİN",
        "TELEFON": "0535 782 45 04",
        "ADRES": "TEPECİK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 954,
        "ILCE": "ORHANELİ",
        "MAHALLE": "TOPUK KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ İHSAN YILDIZ",
        "TELEFON": "0535 619 40 85",
        "ADRES": "TOPUK KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 955,
        "ILCE": "ORHANELİ",
        "MAHALLE": "YAKUPLAR KÖYÜ MUHTARI",
        "AD_SOYAD": "OSMAN AYDIN",
        "TELEFON": "0532 594 41 24",
        "ADRES": "YAKUPLAR KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 956,
        "ILCE": "ORHANELİ",
        "MAHALLE": "YENİDANİŞMENT KÖYÜ MUHTARI",
        "AD_SOYAD": "CELALETTİN ŞEN",
        "TELEFON": "0536 353 15 50",
        "ADRES": "YENİDANİŞMENT KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 957,
        "ILCE": "ORHANELİ",
        "MAHALLE": "YEŞİLLER KÖYÜ MUHTARI",
        "AD_SOYAD": "KAMİL MEHMET ARIK",
        "TELEFON": "0533 626 58 85",
        "ADRES": "YEŞİLLER KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 958,
        "ILCE": "ORHANELİ",
        "MAHALLE": "YÜRÜKLER KÖYÜ MUHTARI",
        "AD_SOYAD": "ARİF ALAN",
        "TELEFON": "0533 398 26 06",
        "ADRES": "YÜRÜKLER KÖYÜ ORHANELİ\/BURSA"
       },
       {
        "ID": 959,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "AKHAREM MAHALLESİ MUHTARI",
        "AD_SOYAD": "EMİN ORHAN",
        "TELEFON": "0537 521 50 69",
        "ADRES": "AKHAREM MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 960,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "ARAPZADE MAHALLESİ MUHTARI",
        "AD_SOYAD": "SAADET ACET",
        "TELEFON": "0536 870 5163",
        "ADRES": "ARAPZADE MAH. TOZKOPARAN CAD. NO:52 ORHANGAZİ\/BURSA"
       },
       {
        "ID": 961,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "BAYIRKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ABDİ ILDIZ",
        "TELEFON": "0534 312 74 68",
        "ADRES": "BAYIRKÖY MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 962,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "CAMİKEBİR MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN SAKİN",
        "TELEFON": "0539 458 32 44",
        "ADRES": "CAMİKEBİR MAH. TOZKOPARAN CAD. NO:52 ORHANGAZİ\/BURSA"
       },
       {
        "ID": 963,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "CİHANKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "ERDAL KAYA",
        "TELEFON": "0532 470 79 60",
        "ADRES": "CİHANKÖY MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 964,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "ÇAKIRLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "OSMAN BOMBACI",
        "TELEFON": "0533 457 49 81",
        "ADRES": "ÇAKIRLI MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 965,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "ÇELTİKÇİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞEVKİ ŞİRİN",
        "TELEFON": "0533 056 29 35",
        "ADRES": "ÇELTİKÇİ MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 966,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "DUTLUCA MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA KAYABAY",
        "TELEFON": "0532 607 16 15",
        "ADRES": "DUTLUCA MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 967,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "FATİH MAHALLESİ MUHTARI (TOPSELVİ)",
        "AD_SOYAD": "HÜSEYİN FİKRET YILDIRIM",
        "TELEFON": "0535 358 46 60",
        "ADRES": "FATİH MAH.(TOPSELVİ) ORHANGAZİ\/BURSA"
       },
       {
        "ID": 968,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "FINDIKLI MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURETTİN TÜFEKÇİ",
        "TELEFON": "0532 507 02 60",
        "ADRES": "FINDIKLI MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 969,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "GEDELEK MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET DÖNMEZ",
        "TELEFON": "0532 778 52 90",
        "ADRES": "GEDELEK MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 970,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "GEMİÇ MAHALLESİ MUHTARI",
        "AD_SOYAD": "DİNÇER DİMRİT",
        "TELEFON": "0536 447 99 24",
        "ADRES": "GEMİÇ MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 971,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "GÖLYAKA MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ŞAHİN",
        "TELEFON": "0533 695 49 22",
        "ADRES": "GÖLYAKA MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 972,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "GÜRLE MAHALLESİ MUHTARI",
        "AD_SOYAD": "MEHMET UZUN",
        "TELEFON": "0542 376 02 40",
        "ADRES": "GÜRLE MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 973,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "HAMZALI MAHALLESİ MUHTARI",
        "AD_SOYAD": "ŞEMSETTİN ŞAHİN",
        "TELEFON": "0542 253 39 98",
        "ADRES": "HAMZALI MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 974,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "HECELER MAHALLESİ MUHTARI",
        "AD_SOYAD": "ZAFER SEVİNÇ",
        "TELEFON": "0545 602 75 74",
        "ADRES": "HECELER MAH. ÇİMENLİK CAD. NO:7 ORHANGAZİ\/BURSA"
       },
       {
        "ID": 975,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "HÜRRİYET MAHALLESİ MUHTARI",
        "AD_SOYAD": "SITKI BALCI",
        "TELEFON": "0543 646 46 00",
        "ADRES": "HÜRRİYET MAH.KURTULUŞ SOK. NO:9 ORHANGAZİ\/BURSA"
       },
       {
        "ID": 976,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "KARSAK MAHALLESİ MUHTARI",
        "AD_SOYAD": "BARIŞ GENÇ",
        "TELEFON": "0537 643 8268",
        "ADRES": "KARSAK MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 977,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "KERAMET MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALTAN GÜN",
        "TELEFON": "0535 308 12 77",
        "ADRES": "KERAMET MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 978,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "MAHMUDİYE MAHALLESİ MUHTARI",
        "AD_SOYAD": "VEYSEL ÜSTÜN",
        "TELEFON": "0533 680 59 49",
        "ADRES": "MAHMUDİYE MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 979,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "MURADİYEMAHALLESİ MUHTARI",
        "AD_SOYAD": "KADRİ ERGEN",
        "TELEFON": "0533 621 83 90",
        "ADRES": "MURADİYE MAH. TOZKOPARAN CAD. NO:52 ORHANGAZİ\/BURSA"
       },
       {
        "ID": 980,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "NARLICA MAHALLESİ MUHTARI",
        "AD_SOYAD": "BİROL TÜRKALİ",
        "TELEFON": "0544 692 58 29",
        "ADRES": "NARLICA MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 981,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "ORTAKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "RECEP KURHAN",
        "TELEFON": "0535 375 30 58",
        "ADRES": "ORTAKÖY MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 982,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "ÖRNEKKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "İSMAİL ŞİRİN",
        "TELEFON": "0532 392 70 47",
        "ADRES": "ÖRNEKKÖY MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 983,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "PAŞAPINAR MAHALLESİ MUHTARI",
        "AD_SOYAD": "NURAN NALBANT DURSUN",
        "TELEFON": "0531 624 12 84",
        "ADRES": "PAŞAPINAR MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 984,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "SÖLÖZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN AVCU",
        "TELEFON": "0536 930 92 52",
        "ADRES": "SÖLÖZ MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 985,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "TEKKE MAHALLESİ MUHTARI",
        "AD_SOYAD": "TARIK SEVİNÇ",
        "TELEFON": "0532 744 99 11",
        "ADRES": "TEKKE MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 986,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "ÜREĞİL MAHALLESİ MUHTARI",
        "AD_SOYAD": "CENGİZ ACAR",
        "TELEFON": "0531 866 95 45",
        "ADRES": "ÜREĞİL MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 987,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "YENİGÜRLE MAHALLESİ MUHTARI",
        "AD_SOYAD": "ADNAN SAKALLI",
        "TELEFON": "0532 335 54 19",
        "ADRES": "YENİGÜRLE MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 988,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "YENİKÖY MAHALLESİ MUHTARI",
        "AD_SOYAD": "HASAN AKOĞLU",
        "TELEFON": "0545 488 27 68",
        "ADRES": "YENİKÖY MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 989,
        "ILCE": "ORHANGAZİ",
        "MAHALLE": "YENİSÖLÖZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "HALİL BAYRAM",
        "TELEFON": "0536 231 80 87",
        "ADRES": "YENİSÖLÖZ MAH. ORHANGAZİ\/BURSA"
       },
       {
        "ID": 990,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "100.YIL MAHALLESİ MUHTARI",
        "AD_SOYAD": "NASUH AYDIN",
        "TELEFON": "0532 484 15 09",
        "ADRES": "100.YIL MAH. ÖZCAN SOK. NO:2 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 991,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "AFŞAR KÖYÜ MUHTARI",
        "AD_SOYAD": "EŞREF ÖZTÜRK",
        "TELEFON": "0533 463 98 14",
        "ADRES": "AFŞAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 992,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "AKBIYIK KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET ÇAKIR",
        "TELEFON": "0532 397 02 46",
        "ADRES": "AKBIYIK KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 993,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "AKÇAPINAR KÖYÜ MUHTARI",
        "AD_SOYAD": "EFRAİM EFE",
        "TELEFON": "0507 450 98 19",
        "ADRES": "AKÇAPINAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 994,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "AKDERE KÖYÜ MUHTARI",
        "AD_SOYAD": "NACİ İLHAN",
        "TELEFON": "0532 692 39 90",
        "ADRES": "AKDERE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 995,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ALAYLI KÖYÜ MUHTARI",
        "AD_SOYAD": "NİHAT TÜRKYILMAZ",
        "TELEFON": "0532 79 564 59",
        "ADRES": "ALAYLI KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 996,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "AYAZ KÖYÜ MUHTARI",
        "AD_SOYAD": "ZÜLKİF AKÇİĞDEM",
        "TELEFON": "0532 515 72 45",
        "ADRES": "AYAZ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 997,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "AYDOĞDU KÖYÜ MUHTARI",
        "AD_SOYAD": "NURETTİN ZENGİN",
        "TELEFON": "0533 217 64 59",
        "ADRES": "AYDOĞDU KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 998,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "BARCIN KÖYÜ MUHTARI",
        "AD_SOYAD": "İSMAİL YÜKSEL",
        "TELEFON": "0532 788 28 36",
        "ADRES": "BARCIN KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 999,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "BEYPINAR KÖYÜ MUHTARI",
        "AD_SOYAD": "METİN HÜNER",
        "TELEFON": "0534 242 48 05",
        "ADRES": "BEYPINAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1000,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "BURCUN KÖYÜ MUHTARI",
        "AD_SOYAD": "CEVDET YUMUŞAK",
        "TELEFON": "0535 474 90 16",
        "ADRES": "BURCUN KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1001,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "CİHADİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "AYHAN ÖZDEMİR",
        "TELEFON": "0538 286 91 88",
        "ADRES": "CİHADİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1002,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇAMÖNÜ KÖYÜ MUHTARI",
        "AD_SOYAD": "RIDVAN SAKA",
        "TELEFON": "0534 654 77 82",
        "ADRES": "ÇAMÖNÜ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1003,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇARDAK KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET KINIK",
        "TELEFON": "0532 317 65 66",
        "ADRES": "ÇARDAK KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1004,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇAYIR MAHALLESİ MUHTARI",
        "AD_SOYAD": "İLHAN ELLİBEŞ",
        "TELEFON": "0539 253 25 55",
        "ADRES": "ÇAYIR MAH. ŞALVARLI SOK. NO:2 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1005,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇAYIRLI KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET SARI",
        "TELEFON": "0535 767 46 64",
        "ADRES": "ÇAYIRLI KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1006,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇELEBİ KÖYÜ MUHTARI",
        "AD_SOYAD": "ENVER ZENGİN",
        "TELEFON": "0507 011 40 40",
        "ADRES": "ÇELEBİ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1007,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇELTİKÇİ KÖYÜ MUHTARI",
        "AD_SOYAD": "HİKMET AVŞAR",
        "TELEFON": "0532 617 46 84",
        "ADRES": "ÇELTİKÇİ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1008,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ÇİÇEKÖZÜ KÖYÜ MUHTARI",
        "AD_SOYAD": "NİZAMETTİN FİLİZ",
        "TELEFON": "0533 266 89 21",
        "ADRES": "ÇİÇEKÖZÜ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1009,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "DEMİRBOĞA KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET EMİNONAY",
        "TELEFON": "0537 475 16 81",
        "ADRES": "DEMİRBOĞA KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1010,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "DERE KÖY MUHTARI",
        "AD_SOYAD": "LEVENT NARİ",
        "TELEFON": "0535 972 78 75",
        "ADRES": "DERE KÖY YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1011,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "EBE KÖY MUHTARI",
        "AD_SOYAD": "İSMAİL İLHAN",
        "TELEFON": "0537 273 38 47",
        "ADRES": "EBE KÖY YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1012,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "EĞERCE KÖYÜ MUHTARI",
        "AD_SOYAD": "ALİ ÖZDİL",
        "TELEFON": "0536 229 18 28",
        "ADRES": "EĞERCE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1013,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "FETİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "HASAN ÇETİN",
        "TELEFON": "0538 880 21 66",
        "ADRES": "FETİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1014,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "GÖKÇESU KÖYÜ MUHTARI",
        "AD_SOYAD": "GÜRHAN ALTUĞ",
        "TELEFON": "0534 416 60 90",
        "ADRES": "GÖKÇESU KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1015,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "GÜNDOĞAN MAHALLESİ MUHTARI",
        "AD_SOYAD": "MUSTAFA MANASTIRLI",
        "TELEFON": "0533 514 72 61",
        "ADRES": "GÜNDOĞAN MAH. ÇEŞME SOK. NO:70 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1016,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "GÜNECE KÖYÜ MUHTARI",
        "AD_SOYAD": "HAKAN ÖZEL",
        "TELEFON": "0535 381 88 84",
        "ADRES": "GÜNECE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1017,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "HAYRİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "İLHAN TURAN",
        "TELEFON": "0536 448 82 32 ",
        "ADRES": "HAYRİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1018,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "HIDIRBALİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "ALİ İKİKARDEŞ",
        "TELEFON": "0535 631 91 91",
        "ADRES": "HIDIRBALİ MAH. MESCİT SOK. NO:23 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1019,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "İNCİRLİ KÖYÜ MUHTARI",
        "AD_SOYAD": "ENDER ZENGİN",
        "TELEFON": "0516 166 70 01",
        "ADRES": "İNCİRLİ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1020,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KARA KÖY MUHTARI",
        "AD_SOYAD": "HASAN HÜSEYİN YILMAZ",
        "TELEFON": "0533 929 45 25",
        "ADRES": "KARA KÖY YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1021,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KARAAMCA KÖYÜ MUHTARI",
        "AD_SOYAD": "KAZIM ATA",
        "TELEFON": "0542 239 05 99",
        "ADRES": "KARAAMCA KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1022,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KARABAHADIR KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET DOĞAN",
        "TELEFON": "0534 220 96 87",
        "ADRES": "KARABAHADIR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1023,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KARACAAHMET KÖYÜ MUHTARI",
        "AD_SOYAD": "SERKAN ALSAN",
        "TELEFON": "0535 258 52 13",
        "ADRES": "KARACAAHMET KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1024,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KARACAALİ KÖYÜ MUHTARI",
        "AD_SOYAD": "MURAT ÜZMEZ",
        "TELEFON": "0535 675 37 07",
        "ADRES": "KARACAALİ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1025,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KARASIL KÖYÜ MUHTARI",
        "AD_SOYAD": "CENGİZ ŞEN",
        "TELEFON": "0535 694 78 96",
        "ADRES": "KARASIL KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1026,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KAVAKLI KÖYÜ MUHTARI",
        "AD_SOYAD": "İLHAN DEMİRÖREN",
        "TELEFON": "0533 629 32 66",
        "ADRES": "KAVAKLI KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1027,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KIBLEPINAR KÖYÜ MUHTARI",
        "AD_SOYAD": "SADIK AYDEMİR",
        "TELEFON": "0539 480 74 59",
        "ADRES": "KIBLEPINAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1028,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KIZIL KÖY MUHTARI",
        "AD_SOYAD": "ALİ YAŞA",
        "TELEFON": "0532 356 03 36",
        "ADRES": "KIZIL KÖY YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1029,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KIZILHİSAR KÖYÜ MUHTARI",
        "AD_SOYAD": "OSMAN AK",
        "TELEFON": "0535 637 96 87",
        "ADRES": "KIZILHİSAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1030,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KİRAZLIYAYLA KÖYÜ MUHTARI",
        "AD_SOYAD": "CEVDET TEKİN",
        "TELEFON": "0505 566 44 77",
        "ADRES": "KİRAZLIYAYLA KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1031,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KOYUNHİSAR KÖYÜ MUHTARI",
        "AD_SOYAD": "AHMET UZUN ",
        "TELEFON": "0538 321 66 11",
        "ADRES": "KOYUNHİSAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1032,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KOZDERE KÖYÜ MUHTARI",
        "AD_SOYAD": "NAZMİ ŞEN",
        "TELEFON": "0533 351 9 059",
        "ADRES": "KOZDERE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1033,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KÖPRÜHİSAR KÖYÜ MUHTARI",
        "AD_SOYAD": "HARUN ENGÜR",
        "TELEFON": "0541 612 12 33",
        "ADRES": "KÖPRÜHİSAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1034,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "KURTULUŞ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM ERCAN",
        "TELEFON": "0532 414 99 83",
        "ADRES": "KURTULUŞ MAH. ATATÜRK CAD. NO:66 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1035,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "MAHMUDİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "MUSTAFA ÖZGÖVEN",
        "TELEFON": "0532 520 07 30",
        "ADRES": "MAHMUDİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1036,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "MARMARACIK KÖYÜ MUHTARI",
        "AD_SOYAD": "MİTHAT ARI",
        "TELEFON": "0532 610 92 18",
        "ADRES": "MARMARACIK KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1037,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "MECİDİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "FEYZULLAH SUNGUR",
        "TELEFON": "0531 761 33 75",
        "ADRES": "MECİDİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1038,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "MENTEŞE KÖYÜ MUHTARI",
        "AD_SOYAD": "AHMET ERDEM BAYRAM",
        "TELEFON": "0532 688 88 24",
        "ADRES": "MENTEŞE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1039,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ORHANİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "METİN ULU",
        "TELEFON": "0533 389 80 07",
        "ADRES": "ORHANİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1040,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "OSMANİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "HÜSEYİN EFE",
        "TELEFON": "0532 683 92 94",
        "ADRES": "OSMANİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1041,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "PAPATYA KÖYÜ MUHTARI",
        "AD_SOYAD": "ORHAN YILDIZ",
        "TELEFON": "0532 402 75 80",
        "ADRES": "PAPATYA KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1042,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "PAŞAYAYLA KÖYÜ MUHTARI",
        "AD_SOYAD": "SALİH ORUÇ",
        "TELEFON": "0536 688 9 570",
        "ADRES": "PAŞAYAYLA KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1043,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "REŞADİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "BAYRAM ALİ BEYHAN",
        "TELEFON": "0533 813 06 94",
        "ADRES": "REŞADİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1044,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "SELİMİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "MEHMET AYDIN",
        "TELEFON": "0541 782 00 06",
        "ADRES": "SELİMİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1045,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "SÖYLEMİŞ KÖYÜ MUHTARI",
        "AD_SOYAD": "İSMAİL EYİZ",
        "TELEFON": "0535 895 65 22",
        "ADRES": "SÖYLEMİŞ KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1046,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "SUBAŞI KÖYÜ MUHTARI",
        "AD_SOYAD": "BAHATTİN CAV",
        "TELEFON": "0533 488 01 81",
        "ADRES": "SUBAŞI KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1047,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "SÜLEYMANİYE KÖYÜ MUHTARI",
        "AD_SOYAD": "MUSTAFA SEVİM",
        "TELEFON": "0542 548 34 88",
        "ADRES": "SÜLEYMANİYE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1048,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "TABAKHANE MAHALLESİ MUHTARI",
        "AD_SOYAD": "FERİT KAYA",
        "TELEFON": "0530 677 05 39",
        "ADRES": "TABAKHANE MAH. GÜLÜMSER SOK. NO:37 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1049,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "TERZİLER KÖYÜ MUHTARI",
        "AD_SOYAD": "RIZA ASLAN",
        "TELEFON": "0532 663 92 45",
        "ADRES": "TERZİLER KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1050,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "TOPRAKDERE KÖYÜ MUHTARI",
        "AD_SOYAD": "FİKRET AK",
        "TELEFON": "0544 578 45 09",
        "ADRES": "TOPRAKDERE KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1051,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "TOPRAKOCAK KÖYÜ MUHTARI",
        "AD_SOYAD": "REMZİ DURMUŞ",
        "TELEFON": "0532 340 3463",
        "ADRES": "TOPRAKOCAK KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1052,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "ULUCAMİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "YURDANUR ÜLKER",
        "TELEFON": "0536 338 83 98",
        "ADRES": "ULUCAMİ MAH. ESKİ KARACAALİ SOK. NO:12 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1053,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YARHİSAR KÖYÜ MUHTARI",
        "AD_SOYAD": "VEYSEL KAYA",
        "TELEFON": "0541 476 27 01",
        "ADRES": "YARHİSAR KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1054,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YAZILI KÖYÜ MUHTARI",
        "AD_SOYAD": "NİHAT BİÇER",
        "TELEFON": "0536 837 97 10",
        "ADRES": "YAZILI KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1055,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YENİ KÖY MUHTARI",
        "AD_SOYAD": "ORHAN FİLİZ",
        "TELEFON": "0537 349 81 34",
        "ADRES": "YENİ KÖY YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1056,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YENİ MAHALLESİ MUHTARI",
        "AD_SOYAD": "İBRAHİM KEKİK",
        "TELEFON": "0535 732 35 33",
        "ADRES": "YENİ MAH. YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1057,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YENİGÜN MAHALLESİ MUHTARI",
        "AD_SOYAD": "BASRİ ACAR",
        "TELEFON": "0532 601 01 79",
        "ADRES": "YENİGÜN MAH. YENİGÜN CAMİ SOK. NO:12 YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1058,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YILDIRIM KÖYÜ MUHTARI",
        "AD_SOYAD": "EMİN BURHAN",
        "TELEFON": "0539 932 44 04",
        "ADRES": "YILDIRIM KÖYÜ YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1059,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YILMAZ MAHALLESİ MUHTARI",
        "AD_SOYAD": "SELCUK BEYAZIT",
        "TELEFON": "0531 887 50 85",
        "ADRES": "YILMAZ MAH. SANAYİ CAD. YENİŞEHİR\/BURSA"
       },
       {
        "ID": 1060,
        "ILCE": "YENİŞEHİR",
        "MAHALLE": "YOLÖREN KÖYÜ MUHTARI",
        "AD_SOYAD": "SADİ AKTAŞ",
        "TELEFON": "0533 727 16 07",
        "ADRES": "YOLÖREN KÖYÜ YENİŞEHİR\/BURSA"
       }
   
    ];
  
   
    const userLocation = { latitude: 41.0305, longitude: 29.1083 };
  
   
    let closestMuhtarlik = null;
    let closestDistance = Infinity;
  
    muhtarliklar.forEach((muhtarlik) => {
      const distance = calculateDistance(userLocation, muhtarlik);
      if (distance < closestDistance) {
        closestMuhtarlik = muhtarlik;
        closestDistance = distance;
      }
    });
  
    
    alert(`En yakın muhtarlık: ${closestMuhtarlik.name}`);
  
    
  };
  

  const calculateDistance = (location1, location2) => {
    const lat1 = location1.latitude;
    const lon1 = location1.longitude;
    const lat2 = location2.latitude;
    const lon2 = location2.longitude;
  
    const R = 6371e3; 
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;
  
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c;
    return distance;
  };
  

  return (
    <div className="register-form">
      <h3>Giriş Yap</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><i class="bi bi-person"></i> | Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><i class="bi bi-key"></i> | Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label><i class="bi bi-house-door"></i> | Adres:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit"><i class="bi bi-fingerprint"></i> | Giriş Yap</button>
      </form>
      
      {registeredUser && (
        <div>
          <h4>Giriş Yaptınız!</h4>
          <p>Kullanıcı Adı: {registeredUser}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;


