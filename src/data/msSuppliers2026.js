/**
 * M&S Open Supply Hub — LIVE SCRAPED June 2026 (Authenticated Session)
 * Source: opensupplyhub.org, Contributor ID 10061 (Marks & Spencer)
 * Total disclosed: 1,853 facilities (Fashion + Food + Home + Beauty)
 * Apparel-only: 253 factories across 10 countries (home textiles, food, rubber, tea estates excluded)
 *
 * Filter methodology:
 *   - EXCLUDE regex removes shoes, home textiles, food, tea, rubber, leather goods, etc.
 *   - GARMENT_PURE countries (BD, KH, ET, MM, LK): EXCLUDE check only
 *   - GARMENT_MIXED countries (IN, CN, TR, VN, MA, PK, EG): EXCLUDE + must match garment keywords
 *   - Manual removals: BOGAWANTALAWA (tea), WINTERQUILTS (home textile),
 *     changzhou samantha home fashion (home décor), Yantai Pacific Home Fashion (home décor),
 *     Hamko Leathers (leather goods), Ethiopia coffee coops (cleared to 0)
 */

export const MS_OSH_META = {
  contributorId: 10061,
  retailer: "Marks & Spencer",
  scrapedDate: 'June 2026',
  totalFacilities: 1853,
  fashionFacilities: 253,
  source: 'Open Supply Hub',
};

// ─── BANGLADESH (64) ────────────────────────────────────────────────────────
export const MS_FACTORIES_BANGLADESH = [
  { name: 'Zaber & Zubair Fabrics Ltd', os_id: 'BD2021113R7R87P', address: '' },
  { name: 'HABITUS FASHION LIMITED', os_id: 'BD201915877ME2J', address: '' },
  { name: 'Energypac Fashions Ltd', os_id: 'BD2019083KBFXKT', address: '' },
  { name: 'Meghna Knit Composite Ltd', os_id: 'BD2019248ZHTXBJ', address: '' },
  { name: 'Fakhruddin Textile Mills Ltd', os_id: 'BD2019248JDDH52', address: '' },
  { name: 'Interstoff Apparels Ltd', os_id: 'BD2019248K41FQY', address: '' },
  { name: 'AMAN KNITTINGS LTD', os_id: 'BD2021335HRJ48X', address: '' },
  { name: 'SQ Birichina Limited', os_id: 'BD20202686CK76C', address: '' },
  { name: 'Universal Menswear Ltd', os_id: 'BD2019086TN16RE', address: '' },
  { name: 'Talisman Ltd', os_id: 'BD20243292KV6J4', address: '' },
  { name: 'Crown Wears (Pvt) Ltd', os_id: 'BD2019083X6XXGA', address: '' },
  { name: 'Dekko Designs Ltd', os_id: 'BD2020230BWWY2J', address: '' },
  { name: 'SOUTH EAST TEXTILES (PVT.) LIMITED', os_id: 'BD2019259FKJSYD', address: '' },
  { name: 'SQ CELSIUS LIMITED-UNIT-1', os_id: 'BD2020010S7B695', address: '' },
  { name: 'Epyllion Style Ltd', os_id: 'BD20211653ES9KX', address: '' },
  { name: 'Interfab Shirt Manufacturing Ltd', os_id: 'BD2019083MSVQZV', address: '' },
  { name: 'KenPark Bangladesh Apparel (Pvt.) Limited (K5)', os_id: 'BD2020308NEEYY2', address: '' },
  { name: 'Renaissance Barind Ltd', os_id: 'BD20200212T3WAJ', address: '' },
  { name: 'ACS Textiles (Bangladesh) Ltd', os_id: 'BD2021337FH4VRF', address: '' },
  { name: 'AKH FASHIONS LTD', os_id: 'BD2019083CDP49S', address: '' },
  { name: 'Aman Graphics & Designs Ltd', os_id: 'BD2020066CY505A', address: '' },
  { name: 'Madinaple Fashions Craft Ltd', os_id: 'BD2019181B52GVS', address: '' },
  { name: 'SG WICUS (BD) Limited', os_id: 'BD2019241YABN67', address: '' },
  { name: 'Sparrow Apparels Ltd', os_id: 'BD20192485FW70Q', address: '' },
  { name: 'Viyellatex Limited', os_id: 'BD202133732HBSJ', address: '' },
  { name: 'Agami Apparels Ltd', os_id: 'BD2021154D48Y4G', address: '' },
  { name: 'Ananta Huaxiang Ltd', os_id: 'BD2019086H7EAQ7', address: '' },
  { name: 'Helicon Ltd', os_id: 'BD20190832NBYXT', address: '' },
  { name: 'MNR Sweaters Ltd', os_id: 'BD20190833Z2TZT', address: '' },
  { name: 'Tusuka Trousers Ltd', os_id: 'BD2019248EZBM1D', address: '' },
  { name: 'Divine Fabrics Ltd', os_id: 'BD2019086K28A8F', address: '' },
  { name: 'SQ Celsius Limited (Unit 2)', os_id: 'BD20200579QXDQQ', address: '' },
  { name: 'Tusuka Denim Ltd', os_id: 'BD2019086Q01MET', address: '' },
  { name: 'Crystal Martin Apparel Bangladesh Limited', os_id: 'BD201908365GB14', address: '' },
  { name: 'Hop Yick (Bangladesh) Ltd - Unit 2', os_id: 'BD2022136T17SCX', address: '' },
  { name: 'MILLENNIUM TEXTILES (SOUTHERN) LTD', os_id: 'BD20200211AEY8C', address: '' },
  { name: 'Shams Styling Wears Ltd', os_id: 'BD20191089C8D5A', address: '' },
  { name: 'Executive Greentex Limited', os_id: 'BD2021043CH7A11', address: '' },
  { name: 'Kenpark Bangladesh Apparel Pvt. Ltd. (Unit 2)', os_id: 'BD2019133VHBW0C', address: '' },
  { name: 'Urmi Garments Ltd (New Factory)', os_id: 'BD20223009J14YD', address: '' },
  { name: 'EcoFab Ltd', os_id: 'BD2019133WJE03R', address: '' },
  { name: 'Kenpark Bangladesh (Pvt.) Ltd Unit 1', os_id: 'BD2019095MAEPQS', address: '' },
  { name: 'Rose Sweaters Ltd (Unit-2)', os_id: 'BD20192481177Q7', address: '' },
  { name: 'Shanta Denims Limited', os_id: 'BD2019297W046W6', address: '' },
  { name: 'Probridhi Apparels Limited', os_id: 'BD2020308RWGR9T', address: '' },
  { name: 'Dekko Knitwears Ltd', os_id: 'BD2019095GPWMNB', address: '' },
  { name: 'Epyllion Knitwears Limited (Madanpur)', os_id: 'BD2021168FJ5D2F', address: '' },
  { name: 'Executive Hi Fashion Ltd', os_id: 'BD20200092DAEHB', address: '' },
  { name: 'Kazipur Fashion Ltd', os_id: 'BD2020021WW2VMP', address: '' },
  { name: 'Standard Stitches Ltd (Woven Unit)', os_id: 'BD2019248C9MGA3', address: '' },
  { name: 'Vintage Denim Ltd', os_id: 'BD2019248MQJVPE', address: '' },
  { name: 'SECTION SEVEN INTERNATIONAL LTD', os_id: 'BD2020021VJF5R6', address: '' },
  { name: 'Section Seven Ltd', os_id: 'BD2020010YQE52N', address: '' },
  { name: 'Square Fashions Ltd - Manufacturing Unit', os_id: 'BD202133693T2MK', address: '' },
  { name: 'Divine Garments Limited', os_id: 'BD2020021RTWH1D', address: '' },
  { name: 'Kenpark Bangladesh Apparel Pvt. Ltd. (K-3)', os_id: 'BD2019083154XW0', address: '' },
  { name: 'Interfab Shirt Manufacturing Ltd (Unit-2)', os_id: 'BD2020021QATDE3', address: '' },
  { name: 'Standard Stitches Ltd (Unit-2)', os_id: 'BD2019248YR1NGW', address: '' },
  { name: 'CRYSTAL MARTIN APPAREL BD LTD UNIT', os_id: 'BD2022305VX448W', address: '' },
  { name: 'Indochine Apparel (Bangladesh) Limited, Plot 54-56', os_id: 'BD2026072V4ZTK4', address: '' },
  { name: 'Talisman Ltd (New Unit)', os_id: 'BD2026078GTNZEB', address: '' },
  { name: 'Epyllion Style Limited (Extension)', os_id: 'BD2026084KA7ZNM', address: '' },
  { name: 'FCI BD Ltd', os_id: 'BD2026083J17380', address: '' },
  { name: 'MAS Intimates Bangladesh (Private) Limited', os_id: 'BD2026084CT60MW', address: '' },
];

// ─── CHINA (47) ─────────────────────────────────────────────────────────────
export const MS_FACTORIES_CHINA = [
  { name: 'Hangzhou Hs Fashion Corporation Ltd - 1st Branch', os_id: 'CN201908519MPYW', address: '' },
  { name: 'Hangzhou Yukai Garments Co Ltd', os_id: 'CN2019083RCC2RJ', address: '' },
  { name: 'Shengzhou Xingbaili Necktie And Garment Co., Ltd', os_id: 'CN2025195C918RZ', address: '' },
  { name: 'Jiangyin Chaoyu Knitting Co', os_id: 'CN2019083G5FWKV', address: '' },
  { name: 'Hangzhou Yutu Spinning & Knitting Co., Ltd', os_id: 'CN2021299AR07SC', address: '' },
  { name: 'Nanjing Trust Garment Co., Ltd', os_id: 'CN2021153FK84AQ', address: '' },
  { name: 'Neo-Concept Fashion (Zhongshan) Co., Ltd', os_id: 'CN20190834ZNSMD', address: '' },
  { name: 'Tonglu Fangxin Knitting Co Ltd', os_id: 'CN2019083DXAHQ4', address: '' },
  { name: 'Tian Run Garment Limited', os_id: 'CN2019100YGS3FQ', address: '' },
  { name: 'Anyang Dishang Huaying Garment Co Ltd', os_id: 'CN2021252N2XYZG', address: '' },
  { name: 'Jinhua Mengna Textile Co. Ltd', os_id: 'CN2019086R3QSK9', address: '' },
  { name: 'Suqian Kelly Textile Co Ltd', os_id: 'CN2019108BRY0GQ', address: '' },
  { name: 'Suzhou Tianguang Textile Co., Ltd', os_id: 'CN2020043VDTFBR', address: '' },
  { name: 'Rongli Garments Co. Ltd', os_id: 'CN2019100MNF3QG', address: '' },
  { name: 'Dongguan Prosperity Knitwear & Garment Ltd', os_id: 'CN2021355PJEKV7', address: '' },
  { name: 'Hangzhou Beiming Textile Co., Ltd', os_id: 'CN2025220TXRA5W', address: '' },
  { name: 'Jiangsu Guotai Baoma Clothing', os_id: 'CN20190838AXDSX', address: '' },
  { name: 'Hai Yang Jin De Li Sweater Co Ltd', os_id: 'CN2019083EV3NS2', address: '' },
  { name: 'JIAXING MENGXIN FASHION CORP., LTD', os_id: 'CN2020268ZY748N', address: '' },
  { name: 'Suzhou Heft Garments & Fashion Accessories Co Ltd', os_id: 'CN2021105NMBHZ0', address: '' },
  { name: 'Shaoxing Maidilang Apparel Co., Ltd', os_id: 'CN2019085J1EDE6', address: '' },
  { name: 'ZHEJIANG AIYIMEI GARMENTS CO. LTD', os_id: 'CN20213567W3CG6', address: '' },
  { name: 'Hefei Tristate Garment Manufacturing Co., Ltd', os_id: 'CN20190857G2DP6', address: '' },
  { name: 'Jingjiang Eknit Co Ltd', os_id: 'CN2020010X0N0JT', address: '' },
  { name: 'Sumec Cheerway Knitting Co. Ltd', os_id: 'CN20200859M1D9P', address: '' },
  { name: 'Foshan ShunDe Strategic Garment Co., Ltd', os_id: 'CN20231465AMHZP', address: '' },
  { name: 'GuangZhou PanYu ZhuoHua Garment Co., Ltd', os_id: 'CN2025255XHHFRC', address: '' },
  { name: 'WUXI CHUANG MEI FASHION KNITTING CO', os_id: 'CN202230513DCMG', address: '' },
  { name: 'Jiangsu Xinmengya Smart Textile Co., Ltd', os_id: 'CN2021186W8DKBM', address: '' },
  { name: 'Haian Lianfa Garments Co Ltd', os_id: 'CN20192681FDF0S', address: '' },
  { name: 'Kaiping Charming Apparel Accessory Limited', os_id: 'CN2022081QCESMY', address: '' },
  { name: 'Suzhou New Best Textile Co., Ltd', os_id: 'CN20202816MP7E5', address: '' },
  { name: 'Tonglu Wei Zi Garments Co. Ltd', os_id: 'CN20192212S43AE', address: '' },
  { name: 'Chenfeng (Jiangsu) Apparel & Accessories Knitting', os_id: 'CN2019097C8A9D1', address: '' },
  { name: 'DALIAN ZHONGYUN GARMENT CO., LTD', os_id: 'CN2024214D1VX4A', address: '' },
  { name: 'Jiangsu Dreamland Textile Co Ltd', os_id: 'CN2020009VVZDKK', address: '' },
  { name: 'Jiaxing Hongrun Textile Co., Ltd', os_id: 'CN2023030J5GTHD', address: '' },
  { name: 'HUBEI TIANHE KINGSRICH FASHION', os_id: 'CN20223054F28XS', address: '' },
  { name: 'Zhangjiagang Free Trade Zone Supertex International Textile Co., Ltd', os_id: 'CN2020191RWDYA9', address: '' },
  { name: 'DONGGUAN YUDA GARMENT CO. LTD', os_id: 'CN2025336KGQ8Z7', address: '' },
  { name: 'Wuxi Taste Textile Co., Ltd', os_id: 'CN20200105GK6FK', address: '' },
  { name: 'ZHEJIANG PENGFEI KNITTING CO', os_id: 'CN202230520BY0A', address: '' },
  { name: 'Inner Mongolia Erdos Resource Co., Ltd. No.1 Knitting Factory', os_id: 'CN2026084SHGVJE', address: '' },
  { name: 'Nanjing SUMEC Chuangjin Garment Technology Co., Ltd', os_id: 'CN2026083PY1QYG', address: '' },
  { name: 'Tonglu Simeng Knitting Factory', os_id: 'CN20212700156JX', address: '' },
  { name: 'Zhejiang Mengna Socks & Hosiery Beiyuan Branch', os_id: 'CN202608440N55A', address: '' },
  { name: 'Zhucheng Yuli Garment Co., Ltd', os_id: 'CN2026083XTA6CS', address: '' },
];

// ─── SRI LANKA (46) ─────────────────────────────────────────────────────────
export const MS_FACTORIES_SRI_LANKA = [
  { name: 'MAS Active (Pvt) Limited - Linea Intimo', os_id: 'LK2019085W4B252', address: '' },
  { name: 'Silueta (Pvt) Limited', os_id: 'LK2019085TT8DVM', address: '' },
  { name: 'Voguetex (Pvt) Ltd - Weligama', os_id: 'LK2019083YGP1H4', address: '' },
  { name: 'Hirdaramani Clothing (Private) Limited', os_id: 'LK201908348T8A6', address: '' },
  { name: 'Hirdaramani Industries (Private) Limited', os_id: 'LK2019085GPJWJP', address: '' },
  { name: 'Courtaulds Clothing Lanka (Pvt) Ltd', os_id: 'LK2020090PJZEMD', address: '' },
  { name: 'VogueTex (Pvt.) Ltd - Hikkaduwa', os_id: 'LK2019221A3A3NQ', address: '' },
  { name: 'Hirdaramani - Ceylon Knit Trend - Eheliyagoda', os_id: 'LK20190859DHZ2R', address: '' },
  { name: 'Miami Clothing (Private) Limited', os_id: 'LK2019107XBW20H', address: '' },
  { name: 'Unichela (Pvt) Ltd - Slimline Division', os_id: 'LK201908506Y46Y', address: '' },
  { name: 'Hirdaramani Knit Seethawaka', os_id: 'LK2019083BPWQY0', address: '' },
  { name: 'Marsylka Manufacturing (Plot 10)', os_id: 'LK20191815MCVYB', address: '' },
  { name: 'Vogue Tex (Pvt) Ltd - Kosgoda', os_id: 'LK201908536GXSZ', address: '' },
  { name: 'Winter Fashion (Pvt) Ltd', os_id: 'LK2019086H0F5SF', address: '' },
  { name: 'MIAMI CLOTHING (PRIVATE) LIMITED - RATHMALE', os_id: 'LK2022286BBNX1P', address: '' },
  { name: 'Ritz Clothing Yapahuwa (Pvt) Ltd', os_id: 'LK2021252Q2ENRS', address: '' },
  { name: 'Eam Maliban Textiles (Pvt) Ltd - Nalanda', os_id: 'LK20191080KMVP4', address: '' },
  { name: 'Interfashion (Pvt) Ltd', os_id: 'LK2019083JQ9NK8', address: '' },
  { name: 'Star Garments (Pvt) Ltd - Baddegama', os_id: 'LK20210705ZJWC1', address: '' },
  { name: 'Unichela (Pvt) Ltd - Slimtex Plant', os_id: 'LK2019108M72XQX', address: '' },
  { name: 'Unichela (Pvt) Ltd - Vidiyal Division', os_id: 'LK2024192HH90TG', address: '' },
  { name: 'COURTAULDS CLOTHING RAJANGANAYA (PVT) LTD', os_id: 'LK2020084VVRTQ6', address: '' },
  { name: 'Crystal Martin Ceylon (PVT) Ltd - Wathupitiwala', os_id: 'LK2020106AJF2H0', address: '' },
  { name: 'Linea Aqua (Pvt) Ltd (Naiwala/Veyangoda)', os_id: 'LK2021355E2XBWX', address: '' },
  { name: 'VOGUE TEX (PVT) LTD', os_id: 'LK20213079BH3K1', address: '' },
  { name: 'Crystal Martin Central (Pvt) Ltd - Dambulla', os_id: 'LK202023042EBKJ', address: '' },
  { name: 'HIRDARAMANI FASHIONS (PVT) LTD', os_id: 'LK2020084F3RPX4', address: '' },
  { name: 'Martex Clothing (Pvt) Ltd - Meegahakiula', os_id: 'LK202532918V5QE', address: '' },
  { name: 'STAR GARMENTS (PVT) LTD - KOGGALA 2', os_id: 'LK20201067W3B4Q', address: '' },
  { name: 'COURTAULDS CLOTHING VEYANGODA', os_id: 'LK2024329CB4G2T', address: '' },
  { name: 'Crystal Martin Ceylon (Pvt) Ltd - Kantale', os_id: 'LK2019086221XVE', address: '' },
  { name: 'Maliban Wovens (Pvt) Ltd - Dehiyaththakandiya', os_id: 'LK2026084W1TYBD', address: '' },
  { name: 'STAR GARMENTS (PVT) LTD - BUTTALA', os_id: 'LK2022305AV8YBV', address: '' },
  { name: 'Triple Holdings (Pvt) Ltd', os_id: 'LK2025009RR8DT8', address: '' },
  { name: 'Crystal Martin Ceylon (Pvt) Ltd - Galagedara', os_id: 'LK2025009WHKQ33', address: '' },
  { name: 'Jinadasa Bennett Pvt Ltd - Mawathagama', os_id: 'LK2026083JDBC9B', address: '' },
  { name: 'Martex M F G Pvt Ltd - Mahiyanganaya', os_id: 'LK2026084GP1KZ6', address: '' },
  { name: 'DAG Apparel (Pvt) Ltd - Talalla', os_id: 'LK202608358Z9VW', address: '' },
  { name: 'Jinadasa Bennett Pvt Ltd - Narammala', os_id: 'LK2026083G76TBE', address: '' },
  { name: 'Maliban Wovens (Pvt) Ltd - Balangoda', os_id: 'LK2026083N80K0W', address: '' },
  { name: 'Miami Exports Pvt Ltd - Ranna', os_id: 'LK2026083DMSBEZ', address: '' },
  { name: 'Ritz Clothing Nikaweratiya (Pvt) Ltd', os_id: 'LK2026035JKERF3', address: '' },
  { name: 'Star Garments Pvt Ltd - Katunayake', os_id: 'LK2026084EECMEQ', address: '' },
  { name: 'Sumithra Polgahawela SL', os_id: 'LK20252206397RN', address: '' },
  { name: 'Unichela Pvt Ltd - Casualline', os_id: 'LK2026083GZVH6D', address: '' },
  { name: 'Vira Fashions Pvt Ltd', os_id: 'LK2026083X67VH2', address: '' },
];

// ─── CAMBODIA (33) ──────────────────────────────────────────────────────────
export const MS_FACTORIES_CAMBODIA = [
  { name: 'New Fuma Costume (Cambodia) Co Ltd', os_id: 'KH201924172VBH6', address: '' },
  { name: 'Dewhirst (Cambodia) Co Ltd', os_id: 'KH2019083ZWWEM3', address: '' },
  { name: 'Camkaxin (Cambodia) Garment Co., Ltd', os_id: 'KH2024328A851HH', address: '' },
  { name: 'SEDUNO CAMBO KNITTING CO. LTD', os_id: 'KH2019291SPM2P6', address: '' },
  { name: 'YI DA Manufacturer Co., Ltd', os_id: 'KH2019087DWZD8B', address: '' },
  { name: 'LIANFA HENGYU GARMENT CO. LTD', os_id: 'KH20211207CH5PT', address: '' },
  { name: 'SOHO SHENG HE CAMBODIA GARMENT CO LTD', os_id: 'KH2019083KV3WC3', address: '' },
  { name: 'Starlight Apparel Manufacturing Co., Ltd', os_id: 'KH2019083QSPAA4', address: '' },
  { name: 'BLOSSOM KNITWEAR (CAMBODIA) COMPANY LIMITED', os_id: 'KH2024004MNHHP0', address: '' },
  { name: 'CERIE (CAMBODIA) GARMENT', os_id: 'KH2019085601YTB', address: '' },
  { name: 'Joyance International (Cambodia) Apparel Co Ltd', os_id: 'KH2021252X05VEC', address: '' },
  { name: 'Strong Health International Ltd', os_id: 'KH20190833SF8XT', address: '' },
  { name: 'FAST PACED VISIONARY FASHION CO., LTD', os_id: 'KH2025104ZHM5S3', address: '' },
  { name: 'Quantum Clothing (Cambodia) Ltd', os_id: 'KH201908302NX0Y', address: '' },
  { name: 'Toyoki Apparel (Cambodia) Co. Ltd (Main)', os_id: 'KH20233125R1R6W', address: '' },
  { name: 'Xin Heng Yi (Cambodia) International Trading Co., Ltd', os_id: 'KH20251219VWMC0', address: '' },
  { name: 'AETA Apparel Co', os_id: 'KH2024192EZJCE0', address: '' },
  { name: 'JIN YUN XIU', os_id: 'KH202432925PAFZ', address: '' },
  { name: 'Hui Xin Lu (Cambodia) Garment Co. Ltd', os_id: 'KH2025107YQPHMM', address: '' },
  { name: 'K FINE (CAMBODIA) GARMENT COMPANY LIMITED', os_id: 'KH2023064NYH2DQ', address: '' },
  { name: 'NC Apparel (Cambodia) Co., Ltd', os_id: 'KH202600744DH3D', address: '' },
  { name: 'TWHQ GARMENTS CO., LTD', os_id: 'KH20240338NVDFN', address: '' },
  { name: 'CAM FOREVER CO LTD', os_id: 'KH2025220G9XQFW', address: '' },
  { name: 'Elegance Industries (Cambodia) Co., Ltd', os_id: 'KH20252988BMAZZ', address: '' },
  { name: 'JIN YUN JIN (CAMBODIA) GARMENT COMPANY LIMITED', os_id: 'KH2023064ZEDE6J', address: '' },
  { name: 'KYLIN (CAMBODIA) SPORTS CO., LTD', os_id: 'KH202400644FH1A', address: '' },
  { name: 'YOU LI INTERNATIONAL (CAMBODIA) GARMENTS CO., LTD', os_id: 'KH20230621DG055', address: '' },
  { name: 'KINGDEER (CAMBODIA) KNITTING CO. LTD', os_id: 'KH2026083K3NGCF', address: '' },
  { name: 'Pengjiao (Cambodia) Industrial Co., Ltd', os_id: 'KH2026083FTG2BE', address: '' },
  { name: 'Phoenix Fashion Co. Ltd', os_id: 'KH2024329ZV4T56', address: '' },
  { name: 'QUANTUM GARMENT CO., LTD', os_id: 'KH2024192SPH9XD', address: '' },
  { name: 'SHANDA (CAMBODIA) TEXTILE CO., LTD', os_id: 'KH2026083BKCG57', address: '' },
  { name: 'S W J (Cambodia) Garment Co., Ltd', os_id: 'KH2026083GKQ147', address: '' },
];

// ─── TURKEY (23) ────────────────────────────────────────────────────────────
export const MS_FACTORIES_TURKEY = [
  { name: 'Ugur Konfeksiyon San. Ve Tic. A.S.', os_id: 'TR2019268E04JCJ', address: '' },
  { name: 'Nesa Tekstil San. Ve. Tic. A.S.', os_id: 'TR2019083G2TWBG', address: '' },
  { name: 'Baykan Denim Konfeksiyon A.S.', os_id: 'TR20190831C26N7', address: '' },
  { name: 'BROSS TEKSTIL SANAYI VE TICARET A.S.', os_id: 'TR20191812NKMJC', address: '' },
  { name: 'ATT Tekstil San. Ve Tic. A.S. - Kirklareli Branch', os_id: 'TR20190869FR6B1', address: '' },
  { name: 'Gamateks Tekstil San. ve Tic. A.S. (Gurlek Factory)', os_id: 'TR20200347V4GCK', address: '' },
  { name: 'Aster Tekstil San. Dis. Tic. A.S.', os_id: 'TR2019083VYM2S5', address: '' },
  { name: 'ATT TEKSTIL SAN. VE TIC. A.S. (ERZINCAN SUBE)', os_id: 'TR20211609ER4X2', address: '' },
  { name: 'Hateks Hatay Tekstil Isletmeleri A.S.', os_id: 'TR201909104XFW8', address: '' },
  { name: 'APS Giyim', os_id: 'TR2019083RCCEJD', address: '' },
  { name: 'Gamma Giyim San. ve Tic. A.S.', os_id: 'TR2023064Q1QS32', address: '' },
  { name: 'Alpin Corap San. ve Tic. A.S.', os_id: 'TR20223310A5DVA', address: '' },
  { name: 'Sanko Tekstil Isl. San. Ve Tic. A.S.', os_id: 'TR20190838VYMXF', address: '' },
  { name: 'Penti Corap San. ve Tic. A.S. (Factory 1)', os_id: 'TR2023128C97JFN', address: '' },
  { name: 'EKO TEKSTIL SAN. VE TIC. A.S. - CAYCUMA BRANCH', os_id: 'TR2020084DNW0BZ', address: '' },
  { name: 'Gamateks Tekstil San. ve Tic. A.S. (Batman Branch)', os_id: 'TR20190867JBVED', address: '' },
  { name: 'UGUR KONFEKSIYON SAN. VE TIC. AS BATMAN BRANCH', os_id: 'TR2022007E06Z4A', address: '' },
  { name: 'Ceylingul Tekstil Giyim San. Tic. Ltd. Sti.', os_id: 'TR2023312SFGHQK', address: '' },
  { name: 'LIONS GRUP TEKSTIL SAN. TIC. LTD. STI.', os_id: 'TR2025042HEBFQ5', address: '' },
  { name: 'ALPIN AKTIF GIYIM SAN. TIC. A.S.', os_id: 'TR2022305FFMWVX', address: '' },
  { name: 'Bereket Tekstil Muhammet Özçelik', os_id: 'TR20240976MJGB5', address: '' },
  { name: 'Aster Tekstil - Erbaa Subesi', os_id: 'TR20241926ZZFP3', address: '' },
  { name: 'Yildirim Corap Manufacturing Trade and Industry Inc', os_id: 'TR2026084ZK9FSZ', address: '' },
];

// ─── INDIA (14) ─────────────────────────────────────────────────────────────
export const MS_FACTORIES_INDIA = [
  { name: 'Ambattur Clothing Private Limited - D15 & D16', os_id: 'IN20192689KA5KH', address: '' },
  { name: 'Poppys Knitwear Pvt Ltd - Unit-VI', os_id: 'IN2025132EGJWZH', address: '' },
  { name: 'Intimate Fashions (India) Pvt Ltd', os_id: 'IN20230308XSPC1', address: '' },
  { name: 'Venkateshwara Clothing Company - 2', os_id: 'IN2019108TFARH8', address: '' },
  { name: 'M B APPARELS PRIVATE LIMITED', os_id: 'IN202136545F5MV', address: '' },
  { name: 'AMBATTUR FASHION INDIA PRIVATE LIMITED (B-9)', os_id: 'IN2023088CWZK4C', address: '' },
  { name: 'Poppys Garments', os_id: 'IN20212520PCS22', address: '' },
  { name: 'Poppys Knitwear PVT Ltd', os_id: 'IN2020147EWEZCA', address: '' },
  { name: 'VICTUS DYEINGS (GARMENT UNIT 2)', os_id: 'IN2023248SKB429', address: '' },
  { name: 'Patronus Apparel', os_id: 'IN2025268FZWBDJ', address: '' },
  { name: 'Poppys Knitwear Private Limited - Unit V', os_id: 'IN20240032HSSMV', address: '' },
  { name: 'Victus Dyeings (Garment Division)', os_id: 'IN2025353AA4X99', address: '' },
  { name: 'AAN CLOTHINGS LLP', os_id: 'IN2023153H5FT4A', address: '' },
  { name: 'Saran Garments', os_id: 'IN20260834VXPHF', address: '' },
];

// ─── VIETNAM (13) ───────────────────────────────────────────────────────────
export const MS_FACTORIES_VIETNAM = [
  { name: 'Gaiwach International (Viet Nam) Garment Co., Ltd', os_id: 'VN2023158VDP9PP', address: '' },
  { name: 'YSS Garment Co., Ltd', os_id: 'VN2019097SY3W3S', address: '' },
  { name: 'Son Ha Garment Joint Stock Company', os_id: 'VN2019083827T28', address: '' },
  { name: 'United Swimwear Apparel Co. Ltd', os_id: 'VN20190851D59SJ', address: '' },
  { name: 'Bim Son Garment Joint Stock Company', os_id: 'VN201908328Z0FK', address: '' },
  { name: 'Tay Son Garment Joint Stock Company', os_id: 'VN2019083B5VNPH', address: '' },
  { name: 'VINATEX HUONG TRA GARMENT LIMITED COMPANY', os_id: 'VN2025192SW8Q2F', address: '' },
  { name: 'TNG Investment and Trading JSC - Phu Binh Garment Branches', os_id: 'VN2021266QPX6HR', address: '' },
  { name: 'Song Hong - Nghia Hung Garment JSC', os_id: 'VN20220767CQYVT', address: '' },
  { name: 'AN PHAT CAM RANH GARMENT FACTORY', os_id: 'VN20233617DMY94', address: '' },
  { name: 'Branch of Garment 10 Corporation JSC - Hung Ha Suit Factory', os_id: 'VN20252658EZSGR', address: '' },
  { name: 'NAM CHAU GARMENT JOINT STOCK COMPANY', os_id: 'VN20223058BR9Z5', address: '' },
  { name: 'Viet Y Hung Yen Garment Joint Stock Company', os_id: 'VN202500999RM3Q', address: '' },
];

// ─── PAKISTAN (7) ───────────────────────────────────────────────────────────
export const MS_FACTORIES_PAKISTAN = [
  { name: 'Gohar Textile Mills (Pvt) Ltd', os_id: 'PK2021354NCSQ0X', address: '' },
  { name: 'Interloop Limited Apparel Park', os_id: 'PK2024197MJ7Z22', address: '' },
  { name: 'US Apparel & Textiles (Pvt) Ltd - UNIT 1-R', os_id: 'PK2021141Q73GMB', address: '' },
  { name: 'GREEN APPAREL (PVT) LIMITED', os_id: 'PK2023228FS7KAT', address: '' },
  { name: 'US Apparel & Textile Unit (3&4)', os_id: 'PK2026141SBX3FY', address: '' },
  { name: 'Nishat Mills Limited (Terry/Textile Division)', os_id: 'PK2024341STC66P', address: '' },
  { name: 'Sapphire Textile Mills Limited (Stitching Unit)', os_id: 'PK2025056TP6FE2', address: '' },
];

// ─── EGYPT (5) ──────────────────────────────────────────────────────────────
export const MS_FACTORIES_EGYPT = [
  { name: 'Alpha Textile', os_id: 'EG202010637ZPA0', address: '' },
  { name: 'T&C Garments SAE', os_id: 'EG2019083R1DNTR', address: '' },
  { name: 'Dice for Ready Made Garments', os_id: 'EG2019087D755FM', address: '' },
  { name: 'K.C.G TEXTILE EGYPT S.A.E', os_id: 'EG20200536SHPWT', address: '' },
  { name: 'Eroglu Egypt for Ready Made Garment LLC', os_id: 'EG2026083XFQZTX', address: '' },
];

// ─── MOROCCO (1) ────────────────────────────────────────────────────────────
export const MS_FACTORIES_MOROCCO = [
  { name: 'Stil Nua Fashion', os_id: 'MA2020204S66906', address: '' },
];

// ─── AGGREGATES ─────────────────────────────────────────────────────────────
export const MS_FASHION_FACTORIES_BY_COUNTRY = {
  Bangladesh: MS_FACTORIES_BANGLADESH,
  China: MS_FACTORIES_CHINA,
  'Sri Lanka': MS_FACTORIES_SRI_LANKA,
  Cambodia: MS_FACTORIES_CAMBODIA,
  Türkiye: MS_FACTORIES_TURKEY,
  India: MS_FACTORIES_INDIA,
  Vietnam: MS_FACTORIES_VIETNAM,
  Pakistan: MS_FACTORIES_PAKISTAN,
  Egypt: MS_FACTORIES_EGYPT,
  Morocco: MS_FACTORIES_MOROCCO,
};

export const MS_SOURCING_MIX = {
  Bangladesh: { count: 64, pct: '25%' },
  China: { count: 47, pct: '19%' },
  'Sri Lanka': { count: 46, pct: '18%' },
  Cambodia: { count: 33, pct: '13%' },
  Türkiye: { count: 23, pct: '9%' },
  India: { count: 14, pct: '6%' },
  Vietnam: { count: 13, pct: '5%' },
  Pakistan: { count: 7, pct: '3%' },
  Egypt: { count: 5, pct: '2%' },
  Morocco: { count: 1, pct: '0%' },
};

// ─── UTILITY FUNCTIONS ───────────────────────────────────────────────────────
export function getAllMSFactories() {
  return Object.values(MS_FASHION_FACTORIES_BY_COUNTRY).flat();
}

export function getTopMSFactories(n = 20) {
  return getAllMSFactories().slice(0, n);
}

export function getMSVendorNames(country) {
  const factories = MS_FASHION_FACTORIES_BY_COUNTRY[country] || [];
  return factories.map(f => f.name);
}
