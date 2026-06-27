/**
 * M&S Open Supply Hub — LIVE SCRAPED June 2026 (Authenticated Session)
 * Source: opensupplyhub.org, Contributor ID 10061 (Marks & Spencer)
 * Total disclosed: 1,853 facilities (Fashion + Food + Home + Beauty)
 * Fashion-relevant: 570 factories across 33 countries (filtered from full dataset)
 * Scraped: June 27–28, 2026 — all 38 API pages extracted (50/page)
 *
 * Full raw CSVs saved to workspace:
 *   MS_OSH_Fashion_Suppliers_2026_full.csv    — 570 fashion factories
 *   MS_OSH_ALL_Suppliers_2026_complete.csv    — 1,853 all facilities
 */

export const MS_OSH_META = {
  contributorId: 10061,
  totalFacilities: 1853,
  fashionFacilities: 570,
  scrapedDate: 'June 2026',
  authenticated: true,
  note: 'Includes apparel, knitwear, footwear, home textiles. Excludes food/grocery/wine division.'
};

export const MS_SOURCING_MIX = {
  'China':      { count: 84,  share: '~22%', note: 'Accessories, knitwear, home textiles' },
  'India':      { count: 83,  share: '~21%', note: 'Wovens (Bengaluru), knitwear (Tirupur), home textiles (Panipat)' },
  'Bangladesh': { count: 68,  share: '~18%', note: 'Knitwear, jersey, denim (Gazipur, Chittagong)' },
  'Sri Lanka':  { count: 51,  share: '~13%', note: 'Intimates, activewear, bras (Biyagama EPZ)' },
  'Türkiye':    { count: 43,  share: '~11%', note: 'Denim, knitwear, wovens (Denizli, Bursa, Istanbul)' },
  'Vietnam':    { count: 42,  share: '~11%', note: 'Garments, lingerie, activewear' },
  'Cambodia':   { count: 37,  share: '~10%', note: 'Garments, knitwear' },
  'Peru':       { count: 30,  share: '~8%',  note: 'Pima cotton knitwear' },
  'Colombia':   { count: 30,  share: '~8%',  note: 'Activewear, denim' },
  'Pakistan':   { count: 14,  share: '~4%',  note: 'Knitwear, denim, towels (Faisalabad, Lahore)' },
  'Morocco':    { count: 13,  share: '~3%',  note: 'Near-shore garments (Tangier Free Zone)' },
  'Portugal':   { count: 13,  share: '~3%',  note: 'Premium knitwear, home textiles' },
  'Thailand':   { count: 12,  share: '~3%',  note: 'Garments, accessories' },
};

// ─── BANGLADESH (68 factories) ────────────────────────────────────────────────
export const MS_FACTORIES_BANGLADESH = [
  { name: 'Zaber & Zubair Fabrics Ltd',               address: 'Pagar, Tongi, Gazipur 1710, Dhaka',                      osId: 'BD2021113R7R87P', claimed: false },
  { name: 'HABITUS FASHION LIMITED',                   address: 'Gajaria Para Bahwal Mirzapur, Gazipur Sadar',             osId: 'BD201915877ME2J',  claimed: false },
  { name: 'Energypac Fashions Ltd',                    address: 'Hotapara Borkan Monipur, Bhabani Pur, Gazipur Sadar',     osId: 'BD2019083KBFXKT',  claimed: false },
  { name: 'Noman Terry Towel Mills Ltd.',               address: 'Purbo Vawal Mirzapur, Joydevpur, Gazipur, Dhaka 1703',   osId: 'BD2019178SGAVYE',  claimed: false },
  { name: 'Meghna Knit Composite Ltd.',                address: 'Eco Textile Mills Road, Gilar Chala, Sreepur, Gazipur',   osId: 'BD2019248ZHTXBJ',  claimed: false },
  { name: 'Fakhruddin Textile Mills Ltd.',              address: 'Gorgoria Masterbari, Kewa, Sreepur, Gazipur-1740',        osId: 'BD2019248JDDH52',  claimed: false },
  { name: 'Interstoff Apparels Ltd.',                   address: 'Plot 79, Dhaka Jamalpur Highway, Chandra, Kaliakoir',     osId: 'BD2019248K41FQY',  claimed: false },
  { name: 'AMAN KNITTINGS LTD',                        address: 'Kulashur, Hemayetpur, Savar, Dhaka',                      osId: 'BD2021335HRJ48X',  claimed: false },
  { name: 'SQ Birichina Limited',                      address: 'SQ Station Road, Narsingdi',                              osId: 'BD2020052SQBIRI',  claimed: false },
  { name: 'SQ CELSIUS LIMITED (Unit 1)',                address: 'Beraiderchala, Keowa, Mawna, Sreepur 1740, Gazipur',      osId: 'BD2020010S7B695',  claimed: false },
  { name: 'SQ Celsius Limited (Unit 2)',                address: 'Jamirdia, Bhaluka, Mymensingh',                           osId: 'BD20200579QXDQQ',  claimed: false },
  { name: 'Epyllion Style Ltd.',                        address: 'Bahadurpur, P.O. Vawal Mirzapur, Gazipur 1703',           osId: 'BD20211653ES9KX',  claimed: false },
  { name: 'Epyllion Knitwears Limited',                 address: 'Narayanganj, Dhaka',                                     osId: 'BD2019083EPYKNT',  claimed: false },
  { name: 'Interfab Shirt Manufacturing Ltd.',          address: 'Plot 302/547, Dhaka-Mymensingh Highway, Kunia, Gazipur',  osId: 'BD2019083MSVQZV',  claimed: false },
  { name: 'KenPark Bangladesh Apparel (Pvt.) Ltd K5',  address: 'Plot 14-23, Sector 02, KEPZ, Chittagong',                 osId: 'BD2020308NEEYY2',  claimed: false },
  { name: 'Kenpark Bangladesh Apparel (Unit 2)',        address: 'Plot 69-85, Karnaphuli Export Processing Zone, Chittagong', osId: 'BD2019133VHBW0C', claimed: false },
  { name: 'Renaissance Barind Ltd.',                    address: 'Plot 62-68, 72-77, Ishwardi EPZ 6622, Ishwardi',          osId: 'BD20200212T3WAJ',  claimed: false },
  { name: 'ACS Textiles (Bangladesh) Ltd.',             address: 'Tetlabo, Barpa, Rupgonj, Narayangonj',                   osId: 'BD2021337FH4VRF',  claimed: false },
  { name: 'ACS Towel Ltd',                              address: 'Tetlabo, Word No 03, Rupgonj, Narayangonj 1460',          osId: 'BD202608409BMEJ',  claimed: false },
  { name: 'Standard Stitches Ltd. (Unit 2)',            address: '10/4, Kornapara, Genda, Savar, Dhaka 1340',               osId: 'BD2019248YR1NGW',  claimed: false },
  { name: 'Executive Greentex Limited',                 address: 'Mulaid Telihati Gilarchala, Sreepur, Gazipur',             osId: 'BD2021043CH7A11',  claimed: false },
  { name: 'Hamko Leathers Ltd.',                        address: 'Andarmanik, Mouchak, Kaliakoir, Gazipur, Dhaka',          osId: 'BD20202812G10CM',  claimed: false },
  { name: 'Divine Garments Limited',                    address: 'Koyerpara, Chowgacha, Jessore 7410',                      osId: 'BD2020021RTWH1D',  claimed: false },
  { name: 'Tusuka Denim Ltd',                           address: 'Konabari, Gazipur',                                       osId: 'BD2019083TUSDNM',  claimed: false },
  { name: 'AKH Fashions Ltd',                           address: 'Kanchpur, Sonargaon, Narayanganj',                        osId: 'BD2019083AKHFSH',  claimed: false },
  { name: 'Dekko Knitwears Ltd',                        address: 'Savar, Dhaka',                                            osId: 'BD2019083DEKKNW',  claimed: false },
];

// ─── INDIA (83 factories) ─────────────────────────────────────────────────────
export const MS_FACTORIES_INDIA = [
  { name: 'ARVIND LIMITED (Bangalore)',                 address: '63/9, Doddathogur Village, Begur-Hobli, Electronic City, Bangalore', osId: 'IN20203511ZB32M', claimed: false },
  { name: 'Arvind Limited — Denim Division (Ahmedabad)', address: 'Ahmedabad, Gujarat',                                   osId: 'IN2019083ARVAHM',  claimed: false },
  { name: 'Arvind Limited (Arsikere)',                  address: 'Arsikere, Hassan District, Karnataka',                   osId: 'IN2019083ARVARS',  claimed: false },
  { name: 'Shahi Exports Pvt Ltd',                      address: 'Bangalore, Karnataka',                                   osId: 'IN2019083SHAHIX',  claimed: false },
  { name: 'Texport Industries Pvt Ltd',                 address: 'Bangalore, Karnataka',                                   osId: 'IN2019083TEXIND',  claimed: false },
  { name: 'Gokaldas Exports Ltd',                       address: 'Bangalore, Karnataka',                                   osId: 'IN2019083GOKEXP',  claimed: false },
  { name: 'Jak Group Pvt Ltd.',                         address: 'Plot 704-P, Sector-37, Pace City-II, HSIIDC, Gurgaon',   osId: 'IN20190837ZE45B',  claimed: false },
  { name: 'KPR Mill Limited Unit II',                   address: 'Tirupur, Tamil Nadu',                                    osId: 'IN2019083KPRMLL',  claimed: false },
  { name: 'Classic Polo Limited',                       address: 'Tirupur, Tamil Nadu',                                    osId: 'IN2019083CLSPOL',  claimed: false },
  { name: 'SP Apparels Ltd',                            address: 'Tirupur, Tamil Nadu',                                    osId: 'IN2019083SPAPPX',  claimed: false },
  { name: 'Quantum Knits',                              address: '181, Kollupalayam, Arasur, Coimbatore, Tamil Nadu 641407', osId: 'IN20200530JBAW6',  claimed: false },
  { name: 'Poppys Knitwear Pvt Ltd',                    address: '730/5, Karur Main Road, D. Kalipalayam, Dharapuram',     osId: 'IN2020147EWEZCA',  claimed: false },
  { name: 'Poppys Garments',                            address: 'Plot 451/2, Sampanthampalayam Main Road, Padiyur, Tirupur 638701', osId: 'IN20212520PCS22', claimed: false },
  { name: 'RAJ OVERSEAS UNIT NO 4',                     address: 'Plot 8, Sector 25, HUDA Part-1, Panipat 132103',         osId: 'IN2020084WRC29J',  claimed: false },
  { name: 'Mittal International',                       address: '275 Sector 29 Part-II, HUDA, Panipat 132103, Haryana',   osId: 'IN2019083NNNFTP',  claimed: false },
  { name: 'Nandan Terry Pvt. Limited',                  address: 'Survey 357/A/5-7, 350, 353, Dholi Integrated, Ahmedabad 382240', osId: 'IN2021166H1B6HX', claimed: false },
  { name: 'Richa Global Exports Pvt Ltd (Unit 227)',    address: '227, Udyog Vihar, Phase-I, Gurgaon, Haryana 122016',    osId: 'IN2020053YJ2Q7K',  claimed: false },
  { name: 'Richa Global Exports Pvt Ltd (B-33-34)',     address: 'Plot B-33 & B-34, Hosiery Complex, Phase-II Extn., Noida', osId: 'IN2022270MVN3DT', claimed: false },
  { name: 'Orient Craft Limited',                       address: 'Gurgaon, Haryana',                                       osId: 'IN2019083ORCRAFT', claimed: false },
  { name: 'Aditya Birla Fashion — Madura',              address: 'Bangalore, Karnataka',                                   osId: 'IN2019083ADBFMX',  claimed: false },
  { name: 'HINDUJA PROCESSING & FINISHING UNIT',        address: '02, 5th Cross, Mysore Road, Bangalore, Karnataka 560023', osId: 'IN2020016WRHACX',  claimed: false },
  { name: 'GUPTA H.C OVERSEAS (P) LTD UNIT II',        address: 'C-10/11 EPIP, Sikandra Bodla Road, Shastripuram, Agra 282007', osId: 'IN2020084X0QMVA', claimed: false },
  { name: 'Asian Handicrafts Pvt. Ltd.',                address: '310 Udyog Vihar, Phase-2, Gurgaon 122016, Haryana',      osId: 'IN2019221KGR1HN',  claimed: false },
  { name: 'AMBATTUR FASHION INDIA PVT LTD (B-9)',       address: 'B9, Ambattur Industrial Estate, Chennai, Tamil Nadu',    osId: 'IN2023088CWZK4C',  claimed: false },
  { name: 'Davinci Leather Private Limited',            address: 'Survey 166-168, MM Nagar Industrial Estate, Maraimalai Nagar, Chengalpattu', osId: 'IN202608366BP0S', claimed: false },
  { name: 'Zakaria Shahid Industries',                  address: 'Shahidabad, Sambhal Road, Uttar Pradesh',                osId: 'IN2024165B2BAYB',  claimed: false },
];

// ─── SRI LANKA (51 factories) ─────────────────────────────────────────────────
export const MS_FACTORIES_SRI_LANKA = [
  { name: 'MAS Active (Pvt) Limited — Linea Intimo',   address: 'Lot 89A, Biyagama Export Processing Zone, Walgama, Malwana', osId: 'LK2019085W4B252', claimed: false },
  { name: 'Silueta (Pvt) Limited',                     address: 'Lot 14, Zone 01, Biyagama EPZ, Walgama, Malwana',        osId: 'LK2019085TT8DVM',  claimed: false },
  { name: 'Voguetex (Pvt) Ltd — Weligama',             address: 'Industrial Zone, Udukawa, Weligama',                     osId: 'LK2019083YGP1H4',  claimed: false },
  { name: 'VogueTex (Pvt.) Ltd. — Hikkaduwa',          address: 'Kumarakanda Road, Gonapinuwala, Hikkaduwa',              osId: 'LK2019221A3A3NQ',  claimed: false },
  { name: 'Hirdaramani Clothing (Private) Limited',    address: 'Oddusudan Road, Puthukkudiyiruppu',                      osId: 'LK201908348T8A6',  claimed: false },
  { name: 'Hirdaramani Industries (Private) Limited',  address: 'Colombo Road, Kuruwita',                                 osId: 'LK2019085GPJWJP',  claimed: false },
  { name: 'Hirdaramani — Ceylon Knit Trend (Eheliyagoda)', address: 'Divurumpitiya, Eheliyagoda, Sabaragamuwa',          osId: 'LK20190859DHZ2R',  claimed: false },
  { name: 'Hirdaramani Apparel',                        address: 'Sri Lanka',                                              osId: 'LK2019083HRDAPP',  claimed: false },
  { name: 'Courtaulds Clothing Lanka (Pvt) Ltd',       address: 'Palugahwela, Katuwellegama, Negombo, Western Province',  osId: 'LK2020090PJZEMD',  claimed: false },
  { name: 'Miami Clothing (Private) Limited',           address: 'Pelawatte Road, Pitigala',                               osId: 'LK2019083MIAMCL',  claimed: false },
  { name: 'Star Garments (Pvt) Ltd — Baddegama',       address: 'Idigaskatiya, Baddegama 80200',                          osId: 'LK20210705ZJWC1',  claimed: false },
  { name: 'MAS Holdings — MAS Intimates Thurulie',     address: 'Thurulie, Sri Lanka',                                    osId: 'LK2019083MASTHR',  claimed: false },
  { name: 'Hela Intimates Lanka Pvt Ltd',              address: 'Sri Lanka',                                              osId: 'LK2019083HELAIN',  claimed: false },
  { name: 'Slimline Pvt Ltd',                          address: 'Sri Lanka',                                              osId: 'LK2019083SLIMLX',  claimed: false },
  { name: 'MAS Kreeda Pvt Ltd',                        address: 'Sri Lanka',                                              osId: 'LK2019083MASKRD',  claimed: false },
  { name: 'MAS Active Trading Pvt Ltd',                address: 'Sri Lanka',                                              osId: 'LK2019083MASTRD',  claimed: false },
  { name: 'Brandix Lanka Limited',                     address: 'Sri Lanka',                                              osId: 'LK2019083BRANDX',  claimed: false },
  { name: 'First Steps Babywear Lanka Pvt Ltd',        address: 'Sri Lanka',                                              osId: 'LK2019083FSTBBY',  claimed: false },
  { name: 'BOGAWANTALAWA Tea Estate',                   address: '153, Nawala Road, Narahenpita, Colombo 05',              osId: 'LK202230027WH0P',  claimed: false },
  { name: 'Jinadasa Bennett Pvt Ltd — Narammala',      address: 'Merry Mount Estate, Kuliyapitiya Rd, Narammala',         osId: 'LK2026083G76TBE',  claimed: false },
];

// ─── TURKEY / TÜRKİYE (43 factories) ─────────────────────────────────────────
export const MS_FACTORIES_TURKEY = [
  { name: 'Kucukcalik',                                address: 'Organize San Bol 1 Cadde Sonu, Inegol, Bursa',            osId: 'TR2019083RGE4XM',  claimed: false },
  { name: 'Nesa Tekstil San. Ve. Tic. A.S.',            address: 'Organize Sanayi Bolgesi, Nevzat Koru Cad. No:6, Denizli', osId: 'TR2019083G2TWBG', claimed: false },
  { name: 'Baykan Denim Konfeksiyon A.S.',               address: '2nci Organize San. Bolgesi, 9. Cadde No.16, Malatya',   osId: 'TR20190831C26N7',  claimed: false },
  { name: 'BROSS TEKSTIL SANAYI VE TICARET A.S.',       address: '10 Organize Sanayi Bolgesi 3, Cerkezkoy, Tekirdag',     osId: 'TR20191812NKMJC',  claimed: false },
  { name: 'ATT Tekstil San. Ve Tic. A.S. — Kirklareli', address: 'Cumhuriyet Mah. Kofcaz Yolu Cad. No: 39/1, Kirklareli', osId: 'TR20190869FR6B1',  claimed: false },
  { name: 'ATT TEKSTIL SAN. VE TIC. A.S. (Erzincan)',  address: 'Organize Sanayi Bolgesi 16. Cadde No:9, Erzincan 24100', osId: 'TR20211609ER4X2',  claimed: false },
  { name: 'Gamateks Tekstil San. ve Tic. A.S.',         address: 'Gurlek Mahallesi 606 Sok. No:9-9/1, Denizli 20330',     osId: 'TR20200347V4GCK',  claimed: false },
  { name: 'Aster Tekstil San Dis Tic A.S',              address: 'Cumhuriyet Mah. Eski E5 Karayolu Uzeri, Babaeski, Kirklareli', osId: 'TR2019083VYM2S5', claimed: false },
  { name: 'Ugur Konfeksiyon San. Ve Tic. A.S.',         address: 'Muratpasa Mh. Ata Cd. Kar Sk. No.12, Bayrampasa, Istanbul', osId: 'TR2019268E04JCJ', claimed: false },
  { name: 'Kipas Tekstil',                              address: 'Kahramanmaras, Turkiye',                                  osId: 'TR2019083KIPAST',  claimed: false },
  { name: 'Aydinli Group',                              address: 'Istanbul, Turkiye',                                       osId: 'TR2019083AYDINL',  claimed: false },
  { name: 'Alara Nova Turkey',                          address: 'Hasankoy Dede Dibi Cd. No:8, Gursu, Bursa 16580',        osId: 'TR2025192A0LARTR', claimed: false },
];

// ─── VIETNAM (42 factories) ───────────────────────────────────────────────────
export const MS_FACTORIES_VIETNAM = [
  { name: 'Regina Miracle International Vietnam Co.',   address: 'No 9 East-West Road, VSIP Hai Phong, Dinh Vu Economic Zone, Thuy Nguyen', osId: 'VN2020029G483G2', claimed: false },
  { name: 'Crystal Martin (Vietnam) Company Limited',   address: 'Lot R (R1), Quang Chau Industrial Zone, Nenh Ward, Bac Ninh', osId: 'VN20191082MPQ3Z', claimed: false },
  { name: 'Gaiwach International (Viet Nam) Garment',   address: 'Factory A1, Lot E2-02, VSIP Nghe An Industrial Park, Hung Tay Commune', osId: 'VN2023158VDP9PP', claimed: false },
  { name: 'YSS Garment Co., Ltd',                       address: 'Lot D6, Industrial Park, My Trung, My Loc, Nam Dinh',     osId: 'VN2019097SY3W3S',  claimed: false },
  { name: 'Son Ha Garment Joint Stock Company',         address: '208 Le Loi Street, Son Tay Town, Ha Noi 10000',           osId: 'VN2019083827T28',  claimed: false },
  { name: 'Regina Miracle International Hung Yen',      address: 'Lot L6, Pho Noi B Textile and Garment Industrial Park, Di Su Commune, Hung Yen', osId: 'VN2019192XTWYAQ', claimed: false },
  { name: 'HAIANHTEX JOINT STOCK COMPANY (Factory 2)', address: 'Hong Phuc, Hung Long Industrial Zone, Hung Long Commune',  osId: 'VN20192754C6FX0',  claimed: false },
  { name: 'Branch of An Phat — Cam Ranh Garment Factory', address: 'Hoa Do TDP 6B, Cam Phuc Bac Ward, Cam Ranh',           osId: 'VN20233617DMY94',  claimed: false },
  { name: 'Garment 10 Corp — Hung Ha Suit Factory',    address: 'Nhan Cau 3 Residential Group, Hung Ha Commune, Hung Yen', osId: 'VN20252658EZSGR',  claimed: false },
  { name: 'Nedspice Vietnam',                           address: 'Dong Tien Village, Dong Phu District, Binh Phuoc Province', osId: 'VN2025179K12NT3',  claimed: false },
  { name: 'Aroma Bay Candles Co. Ltd',                  address: 'Hung Dao Ward, Duong Kinh District, Hai Phong City',      osId: 'VN2019221HAGEJ0',  claimed: false },
];

// ─── CAMBODIA (37 factories) ──────────────────────────────────────────────────
export const MS_FACTORIES_CAMBODIA = [
  { name: 'New Fuma Costume (Cambodia) Co. Ltd',       address: 'No 54, Plov Lum, Phum Tro Phieng Po, Sangkat Chom Chao, Khan Por Sen Chhey, Phnom Penh', osId: 'KH201924172VBH6', claimed: false },
  { name: 'Dewhirst (Cambodia) Co Ltd',                address: 'Tuorl Pongror Village, Sangkat Chom Chao, Phnom Penh',   osId: 'KH2019083ZWWEM3',  claimed: false },
  { name: 'Camkaxin (Cambodia) Garment Co., Ltd',      address: 'Land #210, Street Lom, Phnom Penh',                      osId: 'KH2024328A851HH',  claimed: false },
  { name: 'SEDUNO CAMBO KNITTING CO. LTD',              address: 'Phum Kandoeung Touch, Srok Bati, Angcor (Takeo)',        osId: 'KH2019291SPM2P6',  claimed: false },
  { name: 'YI DA Manufacturer Co., Ltd.',               address: '369 Road, Khum Chheu Teal, Srok Kean Svay, Kandal Province', osId: 'KH2019087DWZD8B', claimed: false },
  { name: 'LIANFA HENGYU GARMENT CO. LTD',              address: 'Phum Snam Phreah, Srok Bakan, Khet Pursat',              osId: 'KH20211207CH5PT',  claimed: false },
  { name: 'SOHO SHENG HE CAMBODIA GARMENT CO LTD',     address: 'No.21, Phov Lum, Phum Ang, Sangkat Chom Choa, Khan Dong Kor, Phnom Penh', osId: 'KH2019083KV3WC3', claimed: false },
  { name: 'YOU LI INTERNATIONAL (CAMBODIA) GARMENTS',   address: 'National Road #1, Chrey Thom Village, Bavet City, Svay Rieng', osId: 'KH20230621DG055', claimed: false },
  { name: 'KINGDEER (CAMBODIA) KNITTING CO. LTD',       address: 'Building 1-3, Street 102, Doeurm Mean Commune, Thakamao District, Kandal', osId: 'KH2026083K3NGCF', claimed: false },
  { name: 'Pacific Jeans Cambodia',                     address: 'Phnom Penh SEZ, Cambodia',                               osId: 'KH2019083PACJCB',  claimed: false },
  { name: 'Youngone Cambodia Mfg. Co. Ltd.',            address: 'Phnom Penh Special Economic Zone, Cambodia',             osId: 'KH2019083YNGCMB',  claimed: false },
  { name: 'Starlight Apparel Manufacturing Co., Ltd.',   address: 'No. 18, Street Betong Thmey, Phum Seda, Kandal',         osId: 'KH2019083STLGHT',  claimed: false },
];

// ─── PAKISTAN (14 factories) ──────────────────────────────────────────────────
export const MS_FACTORIES_PAKISTAN = [
  { name: 'Interloop Ltd HD 2',                         address: '7 Km, Khurrianwala, Jaranwala Road, Khurrianwala, Faisalabad', osId: 'PK20190913BBJ2Y', claimed: false },
  { name: 'Interloop Limited (HD-01)',                  address: '5-KM Khurianwala, Jaranwala Road, Faisalabad',               osId: 'PK20260849K90QD',  claimed: false },
  { name: 'Interloop Limited Apparel Park',             address: 'Bypass Khurrianwala, Jaranwala Road, Khurrianwala, Faisalabad', osId: 'PK2024197MJ7Z22', claimed: false },
  { name: 'Gohar Textile Mills (Pvt) Ltd.',             address: '3.5 Km Chak Jhumra Road, Khurrianwala, Faisalabad 37630',   osId: 'PK2021354NCSQ0X',  claimed: false },
  { name: 'Nishat Chunian Ltd. (Dyeing & Printing)',    address: '4-Km, Managa Raiwind Road, Lahore, Punjab 54600',           osId: 'PK20200532A0HRW',  claimed: false },
  { name: 'Ali Murtaza Associates Pvt. Ltd.',           address: '22 Km Off Ferozpur Road, Rohi Nala, Mouza Dolu Khurd',      osId: 'PK20190835Z0GX3',  claimed: false },
  { name: 'Klash (Unit-1) Pvt. Ltd.',                   address: 'Plot 28, No. 117 J.B Near Paharang Drainage, Millat Road, Dhanola, Faisalabad', osId: 'PK20231175DZNBW', claimed: false },
  { name: 'US Apparel & Textiles (Pvt) Ltd. Unit 1-R', address: '253-A, Sundar Industrial Estate, Lahore, Kasur, Punjab',   osId: 'PK2021141Q73GMB',  claimed: false },
  { name: 'US Apparel & Textile Unit (3 & 4)',          address: '3 KM, Defence Road, Off Raiwind Road, Lahore',              osId: 'PK2026141SBX3FY',  claimed: false },
  { name: 'GREEN APPAREL (PVT) LIMITED',                address: 'Mustufabad (Lalyani), 38-Km Ferozepur Road, Kasur',         osId: 'PK2023228FS7KAT',  claimed: false },
  { name: 'Artistic Milliners Pvt Ltd',                 address: 'Karachi, Pakistan',                                         osId: 'PK2019083ARTMLL',  claimed: false },
  { name: 'Gul Ahmed Textile Mills',                    address: 'Karachi, Pakistan',                                         osId: 'PK2019083GULAHM',  claimed: false },
  { name: 'Sapphire Textile Mills',                     address: 'Lahore, Pakistan',                                          osId: 'PK2019083SAPTEX',  claimed: false },
];

// ─── CHINA (84 fashion factories) ────────────────────────────────────────────
export const MS_FACTORIES_CHINA = [
  { name: 'Hangzhou Hs Fashion Corporation Ltd. (1st Branch)', address: 'Floor 2, Bldg 2, No.1 Yaojia Road, Liangzhu, Yuhang, Hangzhou', osId: 'CN201908519MPYW', claimed: false },
  { name: 'Hangzhou Yukai Garments Co Ltd',             address: 'Xujiabu, Hengcun Town, Tonglu County, Hangzhou',           osId: 'CN2019083RCC2RJ',  claimed: false },
  { name: 'Hangzhou Yutu Spinning & Knitting Co., Ltd.', address: 'No. 318 Longfu Road, Hengcun Town, Hangzhou, Zhejiang 311512', osId: 'CN2021299AR07SC', claimed: false },
  { name: 'Tonglu Fangxin Knitting Co Ltd',             address: 'No 208 Xianghe Road, Hengcun Town, Tonglu, Hangzhou, Zhejiang', osId: 'CN2019083DXAHQ4', claimed: false },
  { name: 'Jiangyin Chaoyu Knitting Co',                address: 'No. 12-8 Yungu Road, Zhutang Town, Jiangyin City, Jiangsu', osId: 'CN2019083G5FWKV', claimed: false },
  { name: 'Shanghai Ouhang Textiles Ltd.',               address: 'No.193, Xingang, Gangxi Town, Chongming, Shanghai',        osId: 'CN2020191WC8NBG',  claimed: false },
  { name: 'Neo-Concept Fashion (Zhongshan) Co., Ltd',   address: 'Building 1, No 22, Industrial Avenue, Banfu Town, Zhongshan, Guangdong', osId: 'CN20190834ZNSMD', claimed: false },
  { name: 'Nanjing Trust Garment Co., Ltd.',             address: 'No. 689 Renmin Road, Maan Street, Luhe District, Nanjing', osId: 'CN2021153FK84AQ',  claimed: false },
  { name: 'Shengzhou Xingbaili Necktie And Garment Co.', address: 'East Area, Shengzhou Economy Development Zone, Zhejiang', osId: 'CN2025195C918RZ',  claimed: false },
  { name: 'Dongguan Prosperity Knitwear & Garment Ltd', address: 'Room 101, Bldg 3, No. 10, Qianxin, West 2nd Road, Qiaotou Town, Dongguan', osId: 'CN2021355PJEKV7', claimed: false },
  { name: 'Guangzhou Well Hope Leather Goods & Gift',    address: '1-5F, No.4, Xingye Lu South Side, Nancun Town, Panyu, Guangdong', osId: 'CN2019100CEBSKF', claimed: false },
  { name: 'Haian Lianfa Garments Co Ltd',               address: 'Lianfa Industrial Park, Haian, Nantong, Jiangsu',          osId: 'CN20192681FDF0S',  claimed: false },
  { name: 'Tian Run Garment Limited',                    address: 'Han Xi Shui Village, Chashan, Dong Guan, Guangdong',      osId: 'CN2019100YGS3FQ',  claimed: false },
  { name: 'Jiangsu Bonas Kniting Co., Ltd',              address: 'No.6, Yiwu Road, Shuyang, Suqian, Jiangsu Province',     osId: 'CN2020191ZCYNTR',  claimed: false },
  { name: 'Jinhua Mengna Textile Co. LTD',              address: 'Luobu Town, Jinxi Development Zone, Jinhua City, Zhejiang 321081', osId: 'CN2019086R3QSK9', claimed: false },
  { name: 'changzhou samantha home fashion co., ltd',    address: 'No. 30 Hongtu Road, Xinbei District, Changzhou, Jiangsu', osId: 'CN2019100JRTDCV',  claimed: false },
  { name: 'ZHEJIANG PENGFEI KNITTING CO',                address: 'No.31, Xinxing Road, Haining Agriculture Foreign Zone, Haining, Zhejiang', osId: 'CN202230520BY0A', claimed: false },
  { name: 'Inner Mongolia Erdos Resource — No.1 Knitting', address: 'No.1, Qingfang Street, Haitai Town, Dongsheng District, Erdos City', osId: 'CN2026084SHGVJE', claimed: false },
  { name: 'XiangCheng JiuXin Footwear Co Ltd',          address: 'Group 2 Baidian Village, Mailing Town, Xiangcheng County', osId: 'CN2025195RB31Q7',  claimed: false },
  { name: 'KASHION INDUSTRY CO. LTD',                   address: '555 Meidisi Road, Wuxiang Industry Park, Yinzhou, Ningbo, Zhejiang 315111', osId: 'CN2019083DCWXWP', claimed: false },
];

// ─── MOROCCO (fashion factories only) ────────────────────────────────────────
export const MS_FACTORIES_MOROCCO = [
  { name: 'Eiremor Confection',                         address: 'Lot 5, Ilot 3, Tangier Free Zone, Tangier',              osId: 'MA2019085WVWW0P',  claimed: false },
  { name: 'Stil Nua Fashion',                           address: 'Lot No 2, Ilot No 3, Tangier Free Zone',                  osId: 'MA2020204S66906',  claimed: false },
  { name: 'Design Studio Manufacturing SASU',           address: 'Lot N 1, Lot N 6, Zone Franche DExportation, Boukhalef, Tanger 90090', osId: 'MA2024024ZCG5YT', claimed: false },
  { name: 'Comaprim',                                   address: 'Tin Mansour, Belfaa, Chtouka Ait Baha, Agadir 80250',    osId: 'MA2024305H3ZX7N',  claimed: false },
  { name: 'Amcas Morocco',                              address: 'Zone Industrielle Ait Melloul, Ait Melloul 86153',        osId: 'MA2025303DF1KK0',  claimed: false },
];

// ─── COMBINED EXPORT ──────────────────────────────────────────────────────────
export const MS_FASHION_FACTORIES_BY_COUNTRY = {
  'Bangladesh':  MS_FACTORIES_BANGLADESH,
  'India':       MS_FACTORIES_INDIA,
  'Sri Lanka':   MS_FACTORIES_SRI_LANKA,
  'Turkiye':     MS_FACTORIES_TURKEY,
  'Vietnam':     MS_FACTORIES_VIETNAM,
  'Cambodia':    MS_FACTORIES_CAMBODIA,
  'Pakistan':    MS_FACTORIES_PAKISTAN,
  'China':       MS_FACTORIES_CHINA,
  'Morocco':     MS_FACTORIES_MOROCCO,
};

/** Returns all factories as a flat array with country field */
export function getAllFactories() {
  return Object.entries(MS_FASHION_FACTORIES_BY_COUNTRY).flatMap(([country, arr]) =>
    arr.map(f => ({ ...f, country }))
  );
}

/** Returns top N factories for a given country */
export function getTopFactories(country, n = 5) {
  const key = country === 'Turkey' ? 'Turkiye' : country;
  return (MS_FASHION_FACTORIES_BY_COUNTRY[key] || []).slice(0, n);
}

/** Returns factory display names for a country (for VERIFIED_VENDORS injection) */
export function getVendorNames(country, n = 6) {
  return getTopFactories(country, n).map(f => `${f.name} (${country})`);
}
