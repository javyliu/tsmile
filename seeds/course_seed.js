
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {
          id: 1, ctitle: '口腔影像学之龋病的根尖片诊断', price: '188', description: '龋病是口腔科最常见的疾病之一，根尖片检查是对龋病临床检查的有力补充，可以帮助临床大夫获得更多肉眼所看不见的信息，辅助临床诊断及治疗。根尖片检查可以帮助我们发现隐匿的龋损；明确龋坏范围，特别是和髓腔的关系；明确牙体及牙周组织是否存在异常等等。在这部分课程中，我们将介绍不同类型龋病的根尖片表现，包括按龋损深度、龋损部位分类的龋病，和一些特殊类型的龋病。除此之外，还会特别介绍一下根尖片龋病的鉴别诊断，帮助大家提高龋病诊断的准确率。',
          pic_img: 'http://www.tsmileedu.com/files/course/2020/04-08/141302e96b42113191.jpg',
          click_count: 10, is_recommend: true,clevel: 1,
          dtype: 3,category_id: 1,
          user_id: 2
        },
      ]);
    });
};
