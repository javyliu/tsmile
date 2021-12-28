'use strict';
const users = [
  [2,'tjg','谭建国','http://www.tsmileedu.com/files/user/2018/05-22/224116c80100914807.jpg',8,'教授，主任医师，博士研究生导师','北京大学口腔医学院修复科教授, 主任医师，博士生导师。\n现任中华口腔医学会继续教育部部长、中华口腔医学会口腔美学专业委员会主任委员、中华口腔医学会口腔修复学专业委员会常委。北京市医师协会医疗美容专科医师分会常务理事。北京市外国医师在京短期行医资格考评专家，北京市高级职称评审专家。美国固定修复学会（AAFP）会员，《中国口腔医学继续教育杂志》编委，《中国实用口腔科杂志》编委。\n1988年毕业于山东医科大学口腔医学系，获医学学士学位；1994年毕业于北京医科大学口腔医学院（现北京大学口腔医学院），获医学博士学位；1999年～2000年在日本昭和大学齿学部作访问学者。\n主要临床和研究方向有牙齿美学修复、牙本质粘结和口腔修复生物力学研究等。'],
  [3,'fky','傅开元','http://www.tsmileedu.com/files/user/2015/05-07/18482154ddd9401586.jpg',8,'教授、主任医师、博士研究生导师','1994年北京医科大学获博士学位。1996-98年美国北卡大学牙学院博士后。2002年美国北卡大学医学院生理系访问教授。2007-08哈佛大学麻省总医院麻醉科疼痛研究中心高级研究员。现为北京大学口腔医学院教授、主任医师、博士生导师。中华口腔医学会颞下颌关节病学及合学专委会副主任委员，口颌面疼痛学组组长。'],
  [4,'rqx','栾庆先','http://www.tsmileedu.com/files/user/2015/05-07/18551537d682734682.jpg',8,'教授、主任医师、博士研究生导师','栾庆先 口腔医学博士, 教授, 主任医师, 博士研究生导师。\n现任北京大学口腔医院牙周科主任。兼任国家医师资格考试试题开发专家委员会委员，全国牙周病学专业委员会常务委员，国家科技进步奖评审专家，中国医师协会全民健康促进活动专家委员。北京口腔医学会第三届理事会理事，北京市外国医师在京短期行医资格考试中心考评专家，北京市卫生局专业技术职称晋升评审专家，临床牙周病学副主编。在国际和国内专业刊物上发表学术论文20余篇。作为课题负责人，承担国家自然基金（两项）、首都医学发展科研基金（联合攻关项目、重点项目）、教育部归国人员启动基金、十一五科技攻关子课题等多项研究课题。'],
  [5,'fc','樊聪','http://www.tsmileedu.com/files/user/2015/05-07/1900546e6395488327.jpg',8,'主任医师','樊聪 北京大学口腔医院主任医师\n专业特长：牙齿美学修复、固定修复、可摘局部义齿修复等。\n 主要履历：\n1982-1988年 北京医科大学口腔系  大本；1997-2000年 北京大学口腔医院修复科 博士；1998-1999年 美国UTHSCSA 牙科学院 进修；2007年至今 北京大学口腔医院修复科 主任医师\n主要社会兼职：\n中华医学会医学美学与美容学分会委员，口腔学组组长；北京医学会医学美学与美容学分会常委；中华医学美学美容杂志编委；国家医学考试中心专家组成员；北京市医学会医疗事故技术鉴定专家。'],
  [6,'fb','房兵','http://www.tsmileedu.com/files/user/2019/04-23/145718e27758847764.jpg',8,'教授，主任医师','中华口腔医学会口腔美学专业委员会副主任委\n中华口腔医学会口腔正畸专业委员会副主任委员\n中国口腔美容协会口腔美容分会常委\n中华口腔医学会颞下颌关节病学及牙合学专业委员会常委\n上海交通大学医学院附属第九人民医院正畸科主任\n中华口腔医学会口腔美学专业委员会副主任委\n中华口腔医学会口腔正畸专业委员会副主任委员\n中国口腔美容协会口腔美容分会常委\n中华口腔医学会颞下颌关节病学及牙合学专业委员会常委'],
  [7,'hc','黄翠','http://www.tsmileedu.com/files/user/2020/03-02/200914a15b4b002902.png',8,'教授、主任医师、博士生导师','武汉大学口腔医学院修复科主任医师、教授、博士生导师。1991年毕业于原湖北医科大学，获学士学位，1994年获硕士学位，后留校工作、任教。1999年连续两年获登士柏中国奖学金赴香港大学牙学院学习，获保存齿科牙医学硕士（MDS），2001年回武汉大学口腔医学院任教，2005年获博士学位。长期坚持临床一线，致力于研究口腔修复的临床与基础问题，将科研与临床紧密结合。近年来获得国家级教学成果二等奖，及湖北省科技进步二等奖和湖北省教学成果一等奖，主持国家自然科学基金项目4项、省部级科研项目多项，在国内外发表论文50余篇，SCI收录20余篇，授权并转让发明专利1项，授权实用新型专利6项，培养博士硕士30余人。'],
  [8,'zh','张海','http://www.tsmileedu.com/files/user/2015/05-07/205612ca959c201695.jpg',8,'医学博士，教授','张海, 医学博士、教授（终身教授）、华盛顿大学口腔修复学系临床研究生主任, 美国口腔修复学会认证专科医师。\n临床专业特长：口腔修复、种植修复；\n简介：1992年毕业于华西医科大学口腔医学院。2002年获得美国康涅狄克大学牙医学院(University of Connecticut, School of Dental Medicine)口腔生物学博士(PhD, Oral Biology)以及口腔修复学专科证书(Certificate in Prosthodontics)，被聘为康涅狄克大学口腔修复学系讲师，并继续在医学院骨外科从事博士后研究。 2004年聘为华盛顿大学牙医学院(University of Washington, School of Dentistry)口腔修复系助理教授，2010年晋升为副教授并同时授予终身教授。在华盛顿大学牙医学院的专家门诊为病人提供修复和种植的临床诊疗服务至今。2012年担任口腔修复临床研究生主任(Director, Graduate Prosthodontics)。他是美国口腔修复学专业委员会（ABP) 认证医师（Diplomate），美国口腔修复学会 (ACP) 的专家会员 (Fellow), 美国固定修复学会(AAFP) 的科研委员会委员，美国牙科科研协会 (AADR) 奖学金委员会委员，美国口腔修复学杂志（Journal of Prosthodontics）基础研究分部主编及编委会成员，修复牙医学杂志（Journal of Prosthetic Dentistry）编委会成员，以及美国数家口腔修复及种植领域专业杂志的审稿人。参与撰写了数本中英文专著并在国际顶级专业杂志上发表了三十余篇论文。他是美国荣誉牙科协会（OKU，美国牙医学院毕业生的最高荣誉）会员， 并于2014-2015年度当选为OKU全国主席（President-Elect）。'],
  [9,'sh','孙凤','http://www.tsmileedu.com/files/user/2015/05-07/18482154ddd9401586.jpg',8,'主任医师，门诊部副主任','孙凤，主任医师，现任北京大学口腔医院门诊部副主任。1988年毕业于北京大学口腔医学院，从事修复临床与临床科研工作，6次获得北京大学口腔医学院新技术与新疗法的重点项目奖项，负责完成了北京科委重大科研项目1项，多次参加国内、国际学术交流，主要研究方向为全瓷美学修复、种植修复、咬合重建等；发表文章近三十篇。\n主要兼职：\n北京市医疗事故鉴定委员会委员\n口腔颌面修复学杂志编委\n北京口腔医学会修复专业委员会常委\n中华口腔修复专业委员会委员'],
  [10,'rhp','卢海平','http://www.tsmileedu.com/files/default/2015/06-16/14193020a05c810490.jpg',8,'教授，主任医师','卢海平博士是中华口腔医学会民营口腔医疗分会候任主任委员、浙江中医药大学口腔医学院副院长、美国Tweed基金会口腔正畸培训中心教官、北京大学中国Tweed中心教官、傅民魁口腔正畸研究中心副主任。还是英国爱丁堡皇家外科学院口腔正畸专科院士、国际牙医师学院院士。'],
  [11,'yjj','杨建军','http://www.tsmileedu.com/files/default/2015/06-23/16171069fd0d511733.jpg',8,'主任医师、教授、博士研究生导师','杨建军，1959年12月出生。主任医师、教授、博士研究生导师。1983年大学本科毕业。现任青岛大学口腔医学院口腔医学基础教研室主任，兼任中华口腔学会口腔种植专委会委员，青岛市口腔医学会副主任委员，青岛市口腔医学会口腔种植专委会副主任委员。擅长牙种植、颞下颌关节病和口腔颌面部创伤的诊治。1992年，在山东省率先开展了牙种植科研和临床工作，完成了多项牙种植科研课题，对骨量不足和伴有错合畸形的牙列缺损患者有独特的种植修复方法，特别是对美学区域的牙种植有较深入的研究，曾多次获省、市科技进步奖,获国家发明专利、实用新型专利多项，培养硕士研究生20余名，发表学术论文80多篇，SCI收录4篇，主编著作一部。'],
  [12,'blj','毕良佳','http://www.tsmileedu.com/files/default/2015/06-29/14365244a9fd473949.JPG',8,'教授、主任医师','姓名：毕良佳\n性别：男\n出生年月：1961年7月\n学历：博士\n职称：教授、主任医师\n 现任职务：哈尔滨医科大学附属第四医院副院长，口腔医疗中心主任\n个人经历：\n1984年8月-1990年7月   哈尔滨医科\n大学附属第一医院 医生\n1990年7月-1999年6月  日本北海道大学 博士课程、博士后研究\n1999年6月-2004年10月 哈尔滨医科大学附属口腔医院 牙周病科主任\n2004年10月-至今    哈尔滨医科大学附属第四医院 口腔医疗中心主\n任，副院长\n一学术兼职：\n中华口腔医学会牙周病学专委会   常务委员\n黑龙江省口腔医学会牙周病专委会 主任委员\n哈尔滨医科大学学位委员会       委    员\n中华口腔医学年鉴杂志           编    委\n中华医学会继续教育杂志         编    委\n中国实用口腔杂志               编    委\n哈医大学报编委会               编    委\n二工作情况：\n我国著名口腔医学专家，国内首创“以牙周为基础，口腔整体治疗”的口腔医疗保健新理念，打破了口腔各科的界限，为患者提供一站式服务，使医生可以更好更全面的为患者提供更加切实可行的治疗方案。\n在日本近10年从事牙周病学的研究和临床工作，掌握了牙周病治疗的一流技术，重视牙周基础治疗，强调牙菌斑的控制与管理（患者参与治疗），特别是对牙周病患者的咬合治疗处于领先地位。回国后开展了重度牙周炎的基础治疗、正畸和修复、种植等综合治疗，实施了劈裂牙粘结再植，咬合创伤的治疗（磨牙症的诊治），牙周病的中药治疗（固齿缓释膏）及再生性手术等新技术。'],
  [13,'ashish','Ashish','http://www.tsmileedu.com/files/default/2016/03-05/1655280cd331176430.jpg',8,'','Ashish B Parmar (Ash) is a private dentist in London, UK and has a unique state-of-the-art dental practice called Smile Design By Ash (www.smiledesignbyash.co.uk). More about Ash: -\n•    One of the leading cosmetic dentists in the UK\n•    National and international lecturer\n•    Has been extensively featured in the National Media and TV Programmes (including three series of Extreme Makeover UK)\n•    Has a training academy teaching dentists from all over UK and Europe (www.theacademybyash.co.uk)\n•    “Dentist to dentists” – Due to his clinical skills and knowledge, Ash has a number of dentists and their family members as his clients'],
  [14,'yxa','叶晓昂','http://www.tsmileedu.com/files/default/2015/06-23/1745448355d9534622.jpg',8,'主任医师，副教授',''],
  [15,'mmx','马敏先','http://www.tsmileedu.com/files/default/2015/06-17/232443bc4b34571720.jpg',8,'主任医师，硕士研究生导师',''],
  [16,'zb','邹波','http://www.tsmileedu.com/files/user/2015/05-07/2038091ca508889937.jpg',8,'医学博士，副主任医师',''],
  [17,'gcl','葛春玲','http://www.tsmileedu.com/files/user/2015/05-07/204138243f59510782.jpg',8,'医学博士，副主任医师',''],
  [18,'yj','杨坚','http://www.tsmileedu.com/files/user/2015/05-07/204325d0ffcc509355.jpg',8,'医学博士，副主任医师',''],
  [19,'ldl','李德利','http://www.tsmileedu.com/files/user/2015/05-07/2053222310fd752516.jpg',8,'医学博士，主治医师',''],
  [20,'zy','周毅','http://www.tsmileedu.com/files/user/2019/05-30/084527738314469038.jpeg',8,'副教授，主任医师',''],
  [21,'lss','梁珊珊','http://www.tsmileedu.com/files/user/2019/05-30/083419b38523532202.png',8,'副主任医师，硕士研究生导师',''],
  [22,'zjf','周建锋','http://www.tsmileedu.com/files/user/2016/08-23/191051bb2e12811918.jpg',8,'医学博士、副教授',''],
  [23,'wyh','王宇华','http://www.tsmileedu.com/files/user/2020/02-03/20534041c125550267.png',8,' 医学博士，副主任医师，美学修复专家,硕士生导师',''],
  [24,'sy','撒悦','http://www.tsmileedu.com/files/user/2019/07-04/1340182e4b68641919.jpeg',8,'副教授，副主任医师',''],
  [25,'wyk','王亚珂','http://www.tsmileedu.com/files/user/2019/05-30/084255f07a64904363.png',8,'博士，主治医师',''],
  [26,'rgh','任光辉','http://www.tsmileedu.com/files/default/2015/08-24/213541d7fd68856019.png',8,'副主任医师，副主任',''],
  [27,'jt','姜涛','http://www.tsmileedu.com/files/user/2020/03-26/16104776425f123217.JPG',8,'副主任医师',''],
  [28,'ld','林东','http://www.tsmileedu.com/files/user/2017/04-11/230901d82e59219769.png',8,'副主任医师',''],
  [29,'lx','罗旭','http://www.tsmileedu.com/files/default/2015/08-24/220723b7e2f5751873.png',8,'硕士，主治医师',''],
  [30,'cl','陈立','http://www.tsmileedu.com/files/user/2015/05-07/20360775978d147390.png',8,'副教授、副主任医师',''],
  [31,'wxd','王雪东','http://www.tsmileedu.com/files/default/2015/07-18/09194844de48536740.jpg',8,'医学博士，副主任医师、助理研究员',''],
  [32,'cg','陈贵','http://www.tsmileedu.com/files/default/2015/08-24/212847f01a17596787.png',8,'医学博士',''],
  [33,'hz','黄振','http://www.tsmileedu.com/files/default/2015/07-29/164343f6f699302403.png',8,'口腔医学博士，副主任医师',''],
  [34,'cjh','陈江浩','http://www.tsmileedu.com/files/default/2015/08-27/1736491bbc62370172.jpg',8,'医学博士，主治医师',''],
  [35,'dy','杜阳','http://www.tsmileedu.com/files/default/2015/06-23/1941437b2b1c391389.jpg',8,'医学博士、主治医师',''],
  [36,'lxq','刘晓强','http://www.tsmileedu.com/files/user/2015/05-07/2058444a34c3830145.jpg',8,'医学博士、副主任医师、副教授',''],
  [37,'wfp','王芳萍','http://www.tsmileedu.com/files/default/2020/04-13/223146263556665339.jpg',8,'口腔医学博士',''],
  [38,'lmy','刘明月','http://www.tsmileedu.com/files/user/2020/04-10/183906aa5f53925184.jpg',8,'博士',''],
  [39,'zw','赵伟','http://www.tsmileedu.com/files/user/2020/03-10/131318e6da13417898.jpg',8,'主治医师，口腔修复学硕士',''],
  [40,'zzk','朱震坤','http://www.tsmileedu.com/files/user/2020/03-02/13131281dff5985681.jpg',8,'主治医师，山东大学口腔医学院口腔颌面外科教研室副主任',''],
  [41,'wxy','吴夏怡','http://www.tsmileedu.com/files/user/2020/02-24/13253602fd05796980.jpg',8,'医师，博士，助理研究员，博士后',''],
  [42,'zl','张凌','http://www.tsmileedu.com/files/user/2020/02-24/1323153951ba427167.jpg',8,'空军军医大学口腔医学院修复科副教授',''],
  [43,'wwl','吴为良','http://www.tsmileedu.com/files/user/2020/02-24/131630ec9acc413073.jpg',8,'福建医科大学口腔医学院',''],
  [44,'sxl','师晓蕊','http://www.tsmileedu.com/files/user/2020/03-02/1318273389be763782.jpg',8,'口腔修复学博士，主治医师',''],
  [45,'yyq','俞懿强','http://www.tsmileedu.com/files/user/2020/03-02/1324237b5026244415.jpg',8,'博士',''],
  [46,'ly1','林焱','http://www.tsmileedu.com/files/user/2020/03-02/13065936e2c1145542.jpg',8,'副主任医师，口腔正畸学医学硕士',''],
  [47,'zm','张敏','http://www.tsmileedu.com/files/user/2020/03-10/131557d8e9fa900223.jpg',8,'',''],
  [48,'sjh','孙静华','http://www.tsmileedu.com/files/user/2020/02-19/154445d85c59427360.jpg',8,'医学博士，副主任医师',''],
  [49,'yz','杨振','http://www.tsmileedu.com/files/user/2020/02-05/230612484c5f081009.jpg',8,'医学博士',''],
  [50,'lj1','梁晋','http://www.tsmileedu.com/files/user/2020/02-19/153823f9983b878201.jpg',8,'副主任医师，医学博士，副院长',''],
  [51,'xx','徐欣','http://www.tsmileedu.com/files/user/2020/02-24/131751f8303d513930.jpg',8,'医学博士，山东大学教授',''],
  [52,'cjf','陈济芬','http://www.tsmileedu.com/files/user/2020/02-24/131302f00bf8493261.jpg',8,'副主任医师',''],
  [53,'john_cranham','JohnCranham','http://www.tsmileedu.com/files/user/2016/07-16/102432034f80799835.jpg',8,'教授',''],
  [54,'ly2','刘宇','http://www.tsmileedu.com/files/user/2020/02-19/153554a2c914908084.jpg',8,'副主任医师',''],
  [55,'lmq','刘木清','http://www.tsmileedu.com/files/user/2018/05-22/210120035c9b705367.jpg',8,'医学博士，主治医师',''],
  [56,'lj2','雷杰','http://www.tsmileedu.com/files/user/2018/05-26/221701d3b4fe089744.jpg',8,'医学博士，主治医师',''],
  [57,'yy','杨洋','http://www.tsmileedu.com/files/default/2015/06-23/2149459efb6b951851.JPG',8,'医学博士，主治医师',''],
  [58,'fldl','弗拉蒂尼','http://www.tsmileedu.com/files/user/2018/08-18/105647fc668d613643.jpeg',8,'教授',''],

]
/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let date = new Date()

     let ary = [ {
      id: '1',
      name: 'admin',
      pwd: '123123',
      real_name: 'quanliu',
      head_pic: '',
      ulevel: 1,
      title: '教授，主任医师，博士研究生导师',
      desc: '北京大学口腔医学院修复科教授, 主任医师，博士生导师。\n现任中华口腔医学会继续教育部部长、\
      中华口腔医学会口腔美学专业委员会主任委员、\
    中华口腔医学会口腔修复学专业委员会常委。北京市医师协会医疗美容专科医师分会常务理事。\
    北京市外国医师在京短期行医资格考评专家，北京市高级职称评审专家。美国固定修复学会（AAFP）会员，\
    《中国口腔医学继续教育杂志》编委，《中国实用口腔科杂志》编委。\n1988年毕业于山东医科大学口腔医学系，\
    获医学学士学位；1994年毕业于北京医科大学口腔医学院（现北京大学口腔医学院），获医学博士学位；\
    1999年～2000年在日本昭和大学齿学部作访问学者。\n主要临床和研究方向有牙齿美学修复、牙本质粘结和口腔修复生物力学研究等。',
      sign: '签名',
      company: '',
      created_at: date,
      updated_at: date
    },]
    users.forEach(eles => {
      let u = {pwd: '123123'}
      u.id = eles[0]
      u.name = eles[1]
      u.real_name = eles[2]
      u.head_pic = eles[3]
      u.ulevel = eles[4]
      u.title = eles[5]
      u.desc = eles[6]
      u.created_at = date
      u.updated_at = date
      ary.push(u)
    });
    // await queryInterface.sequelize.query('truncate users;')
    await queryInterface.bulkInsert('users', ary);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {truncate: true});
  }
};
