var bwmonData=function(){
'use strict';
var i=0, data=[],
Data=function(id,date,ip,mac,user,down,up,first,last){
this.id=id;
this.IP=ip;
this.MAC=mac;
this.user=user;
this.download=down;
this.upload=up;
this.firstSeen=first;
this.lastSeen=last;
this.year=+(date.split('-')[0]);
this.month=+(date.split('-')[1]-1);
this.total=this.download + this.upload;
this.days=Math.floor((Math.abs(this.lastSeen-this.firstSeen)/(60*60*24))+1);
this.average=+(this.total/this.days).toFixed(3);
};
data.push(new Data(i++,'2010-11','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',0,0,1290000000,1290000000));
data.push(new Data(i++,'2011-06','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',202809,11512,1307160300,1308013207));
data.push(new Data(i++,'2011-06','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',3907,548,1307160300,1309433402));
data.push(new Data(i++,'2011-06','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',5370488,334146,1307160300,1309482007));
data.push(new Data(i++,'2011-06','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',19688956,1620721,1307160300,1309491002));
data.push(new Data(i++,'2011-06','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1683269,118731,1307160300,1309491002));
data.push(new Data(i++,'2011-07','192.168.1.22','90:4C:E5:A6:91:FA','COMPUTER-6',174329,13849,1310227207,1310698807));
data.push(new Data(i++,'2011-07','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',1028,230,1309905002,1311377407));
data.push(new Data(i++,'2011-07','192.168.1.13','00:23:18:DA:FF:88','COMPUTER-7',3516266,310801,1310697007,1311426002));
data.push(new Data(i++,'2011-07','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',11856119,761399,1309492802,1311602401));
data.push(new Data(i++,'2011-07','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',5225179,355968,1309530602,1311607802));
data.push(new Data(i++,'2011-07','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1027672,63791,1309492807,1311607802));
data.push(new Data(i++,'2011-08','192.168.1.140','00:1A:A0:C7:2D:EE','COMPUTER-17',389046,8115,1312500602,1312507801));
data.push(new Data(i++,'2011-08','192.168.1.148','00:1A:A0:C7:17:60','COMPUTER-18',82709,5123,1312511402,1312513202));
data.push(new Data(i++,'2011-08','192.168.1.115','00:1A:A0:C7:27:D5','COMPUTER-19',76561,1259,1312579801,1312583401));
data.push(new Data(i++,'2011-08','192.168.1.113','00:1A:A0:C7:27:D3','COMPUTER-20',1812,251,1312594202,1312594202));
data.push(new Data(i++,'2011-08','192.168.1.120','00:26:6C:A8:EE:D6','COMPUTER-21',88863,2857,1313337601,1313337601));
data.push(new Data(i++,'2011-08','192.168.1.133','00:19:B9:03:00:D7','COMPUTER-22',5672,149,1314239402,1314239402));
data.push(new Data(i++,'2011-08','192.168.1.110','00:1A:A0:C7:19:08','COMPUTER-23',57,45,1314446402,1314446402));
data.push(new Data(i++,'2011-08','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',1110757,41051,1312560007,1314723636));
data.push(new Data(i++,'2011-08','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',7763411,322288,1312327802,1314826208));
data.push(new Data(i++,'2011-08','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',5776,402,1312317002,1314835209));
data.push(new Data(i++,'2011-08','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1788651,463530,1312295402,1314838806));
data.push(new Data(i++,'2011-08','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',18193236,937760,1312304401,1314840605));
data.push(new Data(i++,'2011-09','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',7425174,374801,1314880205,1316991602));
data.push(new Data(i++,'2011-09','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',7294,309,1315663201,1317407402));
data.push(new Data(i++,'2011-09','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1934731,257758,1314885604,1317429002));
data.push(new Data(i++,'2011-09','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',533,234,1315395002,1317429002));
data.push(new Data(i++,'2011-09','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',5506898,528937,1314880207,1317432602));
data.push(new Data(i++,'2011-10','192.168.1.20','00:1A:E9:92:A5:5F','COMPUTER-8',4831,500,1319250602,1319250602));
data.push(new Data(i++,'2011-10','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',1839,97,1317510002,1319918402));
data.push(new Data(i++,'2011-10','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',878,192,1317475801,1320012002));
data.push(new Data(i++,'2011-10','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',9234762,864056,1317483001,1320109201));
data.push(new Data(i++,'2011-10','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',4717934,713099,1317463202,1320111001));
data.push(new Data(i++,'2011-11','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',232214,6366,1320519602,1322361007));
data.push(new Data(i++,'2011-11','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',56729,8382,1322274602,1322407802));
data.push(new Data(i++,'2011-11','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',655493,22010,1321403402,1322701201));
data.push(new Data(i++,'2011-11','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',2734650,246716,1320184802,1322701201));
data.push(new Data(i++,'2011-11','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',7241231,410184,1320188401,1322703002));
data.push(new Data(i++,'2011-11','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',654,210,1320183002,1322713801));
data.push(new Data(i++,'2011-12','192.168.1.20','00:1A:E9:92:A5:5F','COMPUTER-8',6,0,1325012407,1325012407));
data.push(new Data(i++,'2011-12','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',4208459,495831,1324652401,1325217607));
data.push(new Data(i++,'2011-12','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',3843262,401974,1322784001,1325266207));
data.push(new Data(i++,'2011-12','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',195739,3768,1322758801,1325280601));
data.push(new Data(i++,'2011-12','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',862905,18134,1324515601,1325352601));
data.push(new Data(i++,'2011-12','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',10296,912,1322715602,1325390401));
data.push(new Data(i++,'2011-12','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',12805542,1015988,1322757002,1325392201));
data.push(new Data(i++,'2012-01','192.168.1.20','00:1A:E9:92:A5:5F','COMPUTER-8',23120,428,1325970007,1325970007));
data.push(new Data(i++,'2012-01','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',87322,8128,1325952002,1326042002));
data.push(new Data(i++,'2012-01','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',178454,3482,1326756602,1327156207));
data.push(new Data(i++,'2012-01','192.168.1.11','70:5A:B6:F3:58:AB','COMPUTER-12',1248238,26635,1327766402,1327779002));
data.push(new Data(i++,'2012-01','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',23935,4612,1326762002,1327809602));
data.push(new Data(i++,'2012-01','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',719913,17111,1325439001,1327815002));
data.push(new Data(i++,'2012-01','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1455985,254409,1325631607,1327870802));
data.push(new Data(i++,'2012-01','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',1611469,421499,1327950001,1328067001));
data.push(new Data(i++,'2012-01','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',15976972,1251929,1325394001,1328067002));
data.push(new Data(i++,'2012-01','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',2958,1114,1325394001,1328068801));
data.push(new Data(i++,'2012-02','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',4526950,90037,1329690602,1330018201));
data.push(new Data(i++,'2012-02','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1282959,115762,1328311801,1330291801));
data.push(new Data(i++,'2012-02','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',2954783,343726,1328148002,1330570802));
data.push(new Data(i++,'2012-02','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',1268064,43425,1328497201,1330574402));
data.push(new Data(i++,'2012-02','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',15380173,1390972,1328103001,1330576202));
data.push(new Data(i++,'2012-02','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',17333,1467,1328099402,1330576202));
data.push(new Data(i++,'2012-03','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',3803595,111699,1330785001,1332640802));
data.push(new Data(i++,'2012-03','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',2529,96,1331845202,1333229401));
data.push(new Data(i++,'2012-03','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',2302078,71410,1330628401,1333233002));
data.push(new Data(i++,'2012-03','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',2252025,89848,1330648202,1333251002));
data.push(new Data(i++,'2012-03','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',11772728,1151192,1330578002,1333251007));
data.push(new Data(i++,'2012-03','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',3308,734,1330579802,1333251007));
data.push(new Data(i++,'2012-04','192.168.1.117','00:19:B9:47:A2:1B','COMPUTER-24',1589462,35947,1334187002,1334239201));
data.push(new Data(i++,'2012-04','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',38,16,1333809001,1335031201));
data.push(new Data(i++,'2012-04','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1624540,114508,1333297802,1335654006));
data.push(new Data(i++,'2012-04','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',1918811,73341,1333252801,1335834007));
data.push(new Data(i++,'2012-04','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',14617990,1127896,1333252802,1335839402));
data.push(new Data(i++,'2012-04','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',3081932,105504,1333303202,1335839402));
data.push(new Data(i++,'2012-04','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',218796,8574,1335564001,1335843001));
data.push(new Data(i++,'2012-04','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',3065,888,1333252802,1335843001));
data.push(new Data(i++,'2012-05','192.168.1.11','70:5A:B6:F3:58:AB','COMPUTER-12',3052,139,1336930201,1336932002));
data.push(new Data(i++,'2012-05','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',364633,7722,1336309203,1338075002));
data.push(new Data(i++,'2012-05','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1528095,66486,1336230002,1338166802));
data.push(new Data(i++,'2012-05','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',748165,47943,1335927602,1338420602));
data.push(new Data(i++,'2012-05','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',2378,770,1335844801,1338456602));
data.push(new Data(i++,'2012-05','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',684831,24953,1335844801,1338456602));
data.push(new Data(i++,'2012-05','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',10060254,770012,1335913201,1338516001));
data.push(new Data(i++,'2012-05','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',1862757,62711,1335886201,1338521401));
data.push(new Data(i++,'2012-06','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',42055,1327,1339243203,1339338602));
data.push(new Data(i++,'2012-06','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',4833223,341342,1338584401,1341005407));
data.push(new Data(i++,'2012-06','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',711517,22743,1338931801,1341010801));
data.push(new Data(i++,'2012-06','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',7791216,653809,1338579001,1341064801));
data.push(new Data(i++,'2012-06','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',5746,1490,1338607801,1341072001));
data.push(new Data(i++,'2012-06','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',2254625,85848,1339243202,1341073801));
data.push(new Data(i++,'2012-06','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',563848,33594,1338759002,1341073801));
data.push(new Data(i++,'2012-07','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1022058,97409,1341273607,1342980002));
data.push(new Data(i++,'2012-07','192.168.1.20','00:1A:E9:92:A5:5F','COMPUTER-8',967,70,1343404801,1343412001));
data.push(new Data(i++,'2012-07','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',336890,17786,1341543602,1343482207));
data.push(new Data(i++,'2012-07','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',18941401,1044723,1341275401,1343575802));
data.push(new Data(i++,'2012-07','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',3111072,114232,1341358202,1343703601));
data.push(new Data(i++,'2012-07','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',6497,954,1341354601,1343755801));
data.push(new Data(i++,'2012-07','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',5156,1175,1341612007,1343755806));
data.push(new Data(i++,'2012-07','192.168.1.22','90:4C:E5:A6:91:FA','COMPUTER-6',855348,73283,1343494802,1343786402));
data.push(new Data(i++,'2012-08','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',410704,7585,1344025802,1344618002));
data.push(new Data(i++,'2012-08','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',1274,494,1343829602,1344634201));
data.push(new Data(i++,'2012-08','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',160172,6757,1343872802,1346193001));
data.push(new Data(i++,'2012-08','192.168.1.22','90:4C:E5:A6:91:FA','COMPUTER-6',19588305,785233,1343827802,1346463001));
data.push(new Data(i++,'2012-08','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',2473603,78619,1343921402,1346463001));
data.push(new Data(i++,'2012-08','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',8286899,834773,1344042001,1346468401));
data.push(new Data(i++,'2012-09','192.168.1.22','90:4C:E5:A6:91:FA','COMPUTER-6',11147836,296972,1346504402,1347805807));
data.push(new Data(i++,'2012-09','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',162115,5812,1346704202,1348956002));
data.push(new Data(i++,'2012-09','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',19822151,568141,1347807607,1349037002));
data.push(new Data(i++,'2012-09','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',7996314,474796,1346542201,1349038802));
data.push(new Data(i++,'2012-09','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',17997682,1745214,1346524201,1349040601));
data.push(new Data(i++,'2012-09','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',6854083,184868,1346545801,1349051401));
data.push(new Data(i++,'2012-09','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',1084,438,1347118202,1349058601));
data.push(new Data(i++,'2012-10','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',842,99,1349719201,1350136802));
data.push(new Data(i++,'2012-10','192.168.1.21','00:23:7A:F7:A0:D0','COMPUTER-2',1009,337,1349130602,1350531002));
data.push(new Data(i++,'2012-10','192.168.1.26','14:74:11:DC:B1:75','COMPUTER-13',19,15,1350606602,1350646202));
data.push(new Data(i++,'2012-10','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',13669884,379264,1349132402,1351310401));
data.push(new Data(i++,'2012-10','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',14055389,311756,1349175601,1351366201));
data.push(new Data(i++,'2012-10','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',49751,2279,1350761402,1351434601));
data.push(new Data(i++,'2012-10','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',10500917,1346529,1349092802,1351634402));
data.push(new Data(i++,'2012-10','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',10168370,711676,1349199001,1351733402));
data.push(new Data(i++,'2012-11','192.168.1.20','00:1A:E9:92:A5:5F','COMPUTER-8',233,3,1352937602,1352937602));
data.push(new Data(i++,'2012-11','192.168.1.139','70:56:81:89:39:AB','COMPUTER-25',472639,15474,1353124802,1353169802));
data.push(new Data(i++,'2012-11','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',105060,2736,1351960201,1353794401));
data.push(new Data(i++,'2012-11','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',11915310,222607,1352044802,1353877202));
data.push(new Data(i++,'2012-11','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',22806445,609045,1351801801,1354327202));
data.push(new Data(i++,'2012-11','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',10698006,325315,1351897201,1354336202));
data.push(new Data(i++,'2012-11','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',9529,1038,1351895401,1354336207));
data.push(new Data(i++,'2012-11','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',11729779,1072077,1351801801,1354336207));
data.push(new Data(i++,'2012-12','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',11754,485,1354483802,1354669207));
data.push(new Data(i++,'2012-12','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',297330,12948,1356193802,1356323402));
data.push(new Data(i++,'2012-12','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',250373,8659,1354377602,1356948001));
data.push(new Data(i++,'2012-12','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',25659988,408417,1354374002,1356987601));
data.push(new Data(i++,'2012-12','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',13800660,353384,1354420802,1357005602));
data.push(new Data(i++,'2012-12','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',14029,1061,1354338002,1357009201));
data.push(new Data(i++,'2012-12','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',19534507,1936772,1354384802,1357014602));
data.push(new Data(i++,'2012-12','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',7145583,193774,1354374002,1357014602));
data.push(new Data(i++,'2013-01','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',212959,10700,1357322402,1359313201));
data.push(new Data(i++,'2013-01','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',4237,776,1357153201,1359682202));
data.push(new Data(i++,'2013-01','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',15209487,291107,1357050602,1359682202));
data.push(new Data(i++,'2013-01','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',26160244,3258263,1357065001,1359682202));
data.push(new Data(i++,'2013-01','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',15284119,317085,1357021802,1359684001));
data.push(new Data(i++,'2013-01','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',7172351,227303,1357056001,1359693002));
data.push(new Data(i++,'2013-02','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',15596141,376211,1359813601,1362013201));
data.push(new Data(i++,'2013-02','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',527512,23291,1360522802,1362106807));
data.push(new Data(i++,'2013-02','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',8848267,261748,1359837002,1362106807));
data.push(new Data(i++,'2013-02','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',20786745,2310726,1359743401,1362108607));
data.push(new Data(i++,'2013-02','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',8254872,236240,1359761402,1362110407));
data.push(new Data(i++,'2013-02','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',142355,10786,1359837002,1362112201));
data.push(new Data(i++,'2013-02','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',9277,1255,1359761402,1362112201));
data.push(new Data(i++,'2013-03','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',247982,15867,1362114002,1364608802));
data.push(new Data(i++,'2013-03','192.168.2.142','50:A4:C8:32:B2:10','COMPUTER-26',587,198,1364697007,1364697007));
data.push(new Data(i++,'2013-03','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',20064665,623125,1362236402,1364767202));
data.push(new Data(i++,'2013-03','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',22974934,4278367,1362141002,1364770802));
data.push(new Data(i++,'2013-03','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',5092582,141958,1362258002,1364772602));
data.push(new Data(i++,'2013-03','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',7518625,242570,1362180607,1364774402));
data.push(new Data(i++,'2013-03','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',861860,19241,1362445202,1364785207));
data.push(new Data(i++,'2013-03','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',4888,1609,1362114002,1364787001));
data.push(new Data(i++,'2013-04','192.168.2.146','0C:EE:E6:80:C8:8C','COMPUTER-27',572601,24837,1365892207,1366057801));
data.push(new Data(i++,'2013-04','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',412896,5910,1367071201,1367078402));
data.push(new Data(i++,'2013-04','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',13244733,303083,1364828407,1367190004));
data.push(new Data(i++,'2013-04','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',1035454,13825,1364913002,1367202602));
data.push(new Data(i++,'2013-04','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',101803,6168,1364839201,1367244001));
data.push(new Data(i++,'2013-04','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',15273323,259911,1364821202,1367366401));
data.push(new Data(i++,'2013-04','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',11025970,851535,1364860801,1367371807));
data.push(new Data(i++,'2013-04','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',14484352,494283,1364826607,1367375401));
data.push(new Data(i++,'2013-04','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',3150,1473,1364788801,1367377201));
data.push(new Data(i++,'2013-05','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',3796089,104813,1368277207,1369607402));
data.push(new Data(i++,'2013-05','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',7218,1196,1367406002,1370052001));
data.push(new Data(i++,'2013-05','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',192731,7664,1367463602,1370052001));
data.push(new Data(i++,'2013-05','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',13104897,260709,1367452802,1370055601));
data.push(new Data(i++,'2013-05','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',12886070,1619598,1367526602,1370055601));
data.push(new Data(i++,'2013-05','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',5967137,176076,1367451002,1370057401));
data.push(new Data(i++,'2013-05','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',168427,15056,1367456402,1370057402));
data.push(new Data(i++,'2013-06','192.168.2.146','0C:EE:E6:80:C8:8C','COMPUTER-27',75474,9691,1370734207,1370739602));
data.push(new Data(i++,'2013-06','192.168.1.21','A8:6A:6F:F2:AB:03','COMPUTER-2',1410,483,1370059201,1372075201));
data.push(new Data(i++,'2013-06','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',19924,2599,1370059202,1372219202));
data.push(new Data(i++,'2013-06','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',13523839,260793,1370176202,1372476602));
data.push(new Data(i++,'2013-06','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',78724,2847,1370275201,1372617002));
data.push(new Data(i++,'2013-06','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',13650687,194603,1371915002,1372640402));
data.push(new Data(i++,'2013-06','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',10573371,323212,1370088002,1372640402));
data.push(new Data(i++,'2013-06','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',17405070,231891,1370059201,1372642202));
data.push(new Data(i++,'2013-06','192.168.1.27','10:D5:42:88:3F:A0','COMPUTER-16',51336,9259,1372629602,1372645807));
data.push(new Data(i++,'2013-06','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',22834180,4650779,1370100604,1372649402));
data.push(new Data(i++,'2013-06','192.168.1.21','40:6F:2A:54:D9:EB','COMPUTER-2',129989,10135,1372131006,1372649402));
data.push(new Data(i++,'2013-07','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1000286,58276,1372698008,1374958802));
data.push(new Data(i++,'2013-07','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',11773346,258402,1372698002,1374960602));
data.push(new Data(i++,'2013-07','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',11412500,201098,1372719601,1375061401));
data.push(new Data(i++,'2013-07','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',36427,2206,1372694407,1375230602));
data.push(new Data(i++,'2013-07','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',8618099,1033505,1372651202,1375236008));
data.push(new Data(i++,'2013-07','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',6267496,133508,1372692608,1375311602));
data.push(new Data(i++,'2013-07','192.168.1.27','10:D5:42:88:3F:A0','COMPUTER-16',1394840,162274,1372692607,1375313402));
data.push(new Data(i++,'2013-07','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',165866,614,1373641202,1375327802));
data.push(new Data(i++,'2013-07','192.168.1.21','40:6F:2A:54:D9:EB','COMPUTER-2',5824887,339674,1372651202,1375327802));
data.push(new Data(i++,'2013-08','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',1176103,28058,1375398001,1377225002));
data.push(new Data(i++,'2013-08','192.168.1.27','10:D5:42:88:3F:A0','COMPUTER-16',852825,66276,1375401602,1377802802));
data.push(new Data(i++,'2013-08','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',11025151,1387270,1375538402,1377894601));
data.push(new Data(i++,'2013-08','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',193814,2336,1375329602,1377918002));
data.push(new Data(i++,'2013-08','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',10480930,203759,1375399802,1377918007));
data.push(new Data(i++,'2013-08','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',1088672,37966,1376137803,1377954007));
data.push(new Data(i++,'2013-08','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',9229320,391683,1376137803,1377955801));
data.push(new Data(i++,'2013-08','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',317656,11281,1375369207,1377957601));
data.push(new Data(i++,'2013-08','192.168.1.21','40:6F:2A:54:D9:EB','COMPUTER-2',151790,18656,1375329607,1377961202));
data.push(new Data(i++,'2013-09','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',838301,11772,1378582207,1378953002));
data.push(new Data(i++,'2013-09','192.168.1.28','94:EB:CD:3D:82:CD','COMPUTER-14',22532,5729,1379201403,1379264402));
data.push(new Data(i++,'2013-09','192.168.1.27','10:D5:42:88:3F:A0','COMPUTER-16',1343921,104747,1378162801,1379818807));
data.push(new Data(i++,'2013-09','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',399551,22406,1378393202,1380403802));
data.push(new Data(i++,'2013-09','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',14571888,270336,1378393207,1380461402));
data.push(new Data(i++,'2013-09','192.168.2.101','50:CC:F8:71:90:AB','COMPUTER-28',318810,29144,1379887207,1380592802));
data.push(new Data(i++,'2013-09','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',9481480,199880,1378166401,1380592802));
data.push(new Data(i++,'2013-09','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',86761,4219,1378220402,1380594601));
data.push(new Data(i++,'2013-09','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',18339058,2556730,1378216802,1380596407));
data.push(new Data(i++,'2013-09','192.168.1.21','40:6F:2A:54:D9:EB','COMPUTER-2',913778,34321,1378157402,1380598202));
data.push(new Data(i++,'2013-09','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',36680,1177,1378161002,1380598202));
data.push(new Data(i++,'2013-10','192.168.2.101','50:CC:F8:71:90:AB','COMPUTER-28',295038,30342,1380639602,1380985201));
data.push(new Data(i++,'2013-10','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',1562271,40268,1380632401,1381617002));
data.push(new Data(i++,'2013-10','192.168.1.11','70:5A:B6:F3:58:AB','COMPUTER-12',1018129,19227,1381669201,1381674601));
data.push(new Data(i++,'2013-10','192.168.1.28','94:EB:CD:3D:82:CD','COMPUTER-14',682,284,1381969802,1382007607));
data.push(new Data(i++,'2013-10','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',359817,21474,1380976202,1382902202));
data.push(new Data(i++,'2013-10','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',20974237,386715,1380976201,1382904002));
data.push(new Data(i++,'2013-10','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',76065,4485,1380641402,1383188402));
data.push(new Data(i++,'2013-10','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',17281773,506644,1380675602,1383269402));
data.push(new Data(i++,'2013-10','192.168.2.106','10:D5:42:88:3F:A0','COMPUTER-29',1442347,106103,1381003201,1383269402));
data.push(new Data(i++,'2013-10','192.168.1.21','40:6F:2A:54:D9:EB','COMPUTER-2',4875511,325321,1380600002,1383276601));
data.push(new Data(i++,'2013-10','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',18051,980,1380600002,1383276607));
data.push(new Data(i++,'2013-11','192.168.1.10','00:1C:25:27:9B:AE','COMPUTER-3',15004318,973266,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.11','70:5A:B6:F3:58:AB','COMPUTER-12',119862,2882,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.12','00:26:9E:C4:A0:40','COMPUTER-5',614181,33709,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.13','00:23:18:DA:FF:88','COMPUTER-7',3516266,310801,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.14','00:24:8D:28:F2:9A','COMPUTER-1',202809,11512,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.15','00:1A:A0:C7:19:08','COMPUTER-9',27174976,564783,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.16','00:90:A9:C6:19:5B','COMPUTER-11',55157,1175,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.20','00:1A:E9:92:A5:5F','COMPUTER-8',23120,428,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.21','40:6F:2A:54:D9:EB','COMPUTER-2',1406551,111668,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.22','90:4C:E5:A6:91:FA','COMPUTER-6',174329,13849,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.23','78:E4:00:9F:97:3A','COMPUTER-10',9291760,324598,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.24','00:27:10:0E:B5:60','COMPUTER-4',19688956,1620721,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.25','70:D4:F2:DA:FA:C9','COMPUTER-15',926389,18903,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.26','10:68:3F:47:A8:69','COMPUTER-13',705107,28673,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.27','10:D5:42:88:3F:A0','COMPUTER-16',1206721,66676,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.28','94:EB:CD:3D:82:CD','COMPUTER-14',69,31,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.2.106','10:D5:42:88:3F:A0','COMPUTER-29',1442347,106103,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.2.101','50:CC:F8:71:90:AB','COMPUTER-28',295038,30342,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.140','00:1A:A0:C7:2D:EE','COMPUTER-17',389046,8115,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.148','00:1A:A0:C7:17:60','COMPUTER-18',82709,5123,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.115','00:1A:A0:C7:27:D5','COMPUTER-19',76561,1259,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.113','00:1A:A0:C7:27:D3','COMPUTER-20',1812,251,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.120','00:26:6C:A8:EE:D6','COMPUTER-21',88863,2857,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.133','00:19:B9:03:00:D7','COMPUTER-22',5672,149,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.1.110','00:1A:A0:C7:19:08','COMPUTER-23',57,45,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.2.142','50:A4:C8:32:B2:10','COMPUTER-26',587,198,1383337801,1385868602));
data.push(new Data(i++,'2013-11','192.168.2.146','0C:EE:E6:80:C8:8C','COMPUTER-27',572601,24837,1383337801,1385868602));
return data;};
