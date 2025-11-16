// 从全局Vue对象中解构所需API
const { createApp, ref, computed, onMounted } = Vue;

const App = {
  setup() {
    // 理论数据合并（基础数据 + 更多数据）
    const theoryData = [
      {
        name: '中医概述',
        summary: '共收录248个理论学说，源自28部中医典籍',
        content: '中医是古代汉民族的传统医学，是中华民族在长期医疗实践中形成的医学体系。'
      },
      {
        name: '阴阳学说',
        summary: '共收录25个理论学说，源自3部中医典籍',
        content: '阴阳学说是中医理论的重要组成部分，用来解释人体生理病理现象和指导临床诊断治疗。'
      }
    ];

    const moreTheoryData = [
      {
        name: '五行学说',
        summary: '共收录30个理论学说，源自5部中医典籍',
        content: '五行学说认为宇宙万物都是由木、火、土、金、水五种基本物质构成的，自然界各种事物和现象的发展变化都是这五种物质不断运动和相互作用的结果。'
      },
      {
        name: '脏腑理论',
        summary: '共收录45个理论学说，源自8部中医典籍',
        content: '脏腑理论是研究人体各个脏腑的生理功能、病理变化及其相互关系的理论，是中医基础理论的重要组成部分。'
      },
      {
        name: '经络学说',
        summary: '共收录40个理论学说，源自6部中医典籍',
        content: '经络学说是研究人体经络系统的循行分布、生理功能、病理变化及其与脏腑相互关系的理论，是中医基础理论的重要组成部分。'
      },
      {
        name: '气血津液',
        summary: '共收录35个理论学说，源自5部中医典籍',
        content: '气血津液是构成人体和维持人体生命活动的基本物质，也是脏腑经络功能活动的产物。'
      }
    ];

    // 合并所有理论数据
    const allTheoryData = [...theoryData, ...moreTheoryData];

    // 课程分类数据
    const classData = [
      {
        name: '艾灸疗法',
        quantity: 250,
        data: [
          { id: 1, title: '艾灸疗法', img: 'img1.png', summary: '艾灸是一种使用艾叶制成的艾条或艾绒，在特定穴位上熏灼的一种中医治疗方法。', act: '线上' },
          { id: 2, title: '温针灸法', img: 'img2.png', summary: '温针灸是针刺与艾灸结合应用的一种方法，适用于既需要留针又需施灸的疾病。', act: '线下' },
          { id: 3, title: '隔物灸法', img: 'img3.png', summary: '隔物灸是在艾炷与皮肤之间衬垫药物或其他物品后再燃烧施灸的方法。', act: '线上' },
          { id: 10, title: '直接灸法', img: 'img4.png', summary: '直接灸是将艾炷直接放在皮肤上施灸的方法，具有温阳补气、温经通络的功效。', act: '线下' },
          { id: 11, title: '间接灸法', img: 'img5.png', summary: '间接灸是在艾炷与皮肤之间放置药物等物品，具有调和气血、疏通经络的作用。', act: '线上' },
          { id: 12, title: '艾条灸法', img: 'img1.png', summary: '艾条灸是用艾条在穴位上熏烤的一种方法，操作简便，适合家庭保健使用。', act: '线上' },
          { id: 13, title: '雷火灸法', img: 'img2.png', summary: '雷火灸是特种灸法之一，具有穿透力强、温热感持久的特点，适用于慢性疾病。', act: '线下' }
        ]
      },
      {
        name: '刮痧拔罐',
        quantity: 32,
        data: [
          { id: 4, title: '刮痧疗法', img: 'img4.png', summary: '刮痧是用边缘光滑的器具在患者体表一定部位反复刮动，使局部皮下出现瘀斑的治疗方法。', act: '线下' },
          { id: 5, title: '拔罐疗法', img: 'img5.png', summary: '拔罐是以罐为工具，利用燃火、抽气等方法产生负压，使之吸附于体表的治疗方法。', act: '线下' },
          { id: 14, title: '走罐疗法', img: 'img1.png', summary: '走罐是在拔罐基础上发展起来的一种疗法，通过罐具在皮肤上的来回移动起到治疗作用。', act: '线下' },
          { id: 15, title: '刺络拔罐', img: 'img2.png', summary: '刺络拔罐是先用三棱针点刺出血，再进行拔罐的方法，适用于实证和热证。', act: '线下' }
        ]
      },
      {
        name: '正骨整脊',
        quantity: 45,
        data: [
          { id: 6, title: '颈椎正骨', img: 'img1.png', summary: '通过手法调整颈椎关节位置，缓解颈椎病症状的治疗方法。', act: '线下' },
          { id: 16, title: '胸椎正骨', img: 'img2.png', summary: '针对胸椎小关节紊乱的手法复位技术，可改善胸闷、背痛等症状。', act: '线下' },
          { id: 17, title: '腰椎正骨', img: 'img3.png', summary: '运用手法矫正腰椎错位，有效缓解腰腿疼痛的治疗方式。', act: '线下' },
          { id: 18, title: '骶髂关节正骨', img: 'img4.png', summary: '针对骶髂关节功能障碍的专业手法治疗技术。', act: '线下' }
        ]
      },
      {
        name: '小儿推拿',
        quantity: 18,
        data: [
          { id: 7, title: '小儿感冒推拿', img: 'img2.png', summary: '针对小儿感冒症状的一套推拿手法，安全无副作用。', act: '线上' },
          { id: 19, title: '小儿咳嗽推拿', img: 'img3.png', summary: '通过特定推拿手法缓解小儿咳嗽症状的家庭保健方法。', act: '线上' },
          { id: 20, title: '小儿消化不良推拿', img: 'img4.png', summary: '改善小儿食欲不振、腹胀等消化系统问题的推拿技术。', act: '线上' },
          { id: 21, title: '小儿夜啼推拿', img: 'img5.png', summary: '针对小儿夜间哭闹不安的调理推拿手法。', act: '线上' }
        ]
      },
      {
        name: '足底反射',
        quantity: 12,
        data: [
          { id: 8, title: '足底按摩', img: 'img3.png', summary: '通过刺激足底反射区，调节人体各器官功能的保健方法。', act: '线下' },
          { id: 22, title: '足疗养生', img: 'img4.png', summary: '综合性的足部护理和保健技术，有助于放松身心、促进血液循环。', act: '线下' },
          { id: 23, title: '足部刮痧', img: 'img5.png', summary: '在足部特定区域进行刮痧，达到调理全身机能的目的。', act: '线下' }
        ]
      },
      {
        name: '耳穴疗法',
        quantity: 8,
        data: [
          { id: 9, title: '耳穴贴压', img: 'img4.png', summary: '在耳廓特定穴位贴敷药丸或磁珠，通过经络传导治疗疾病的方法。', act: '线上' },
          { id: 24, title: '耳穴埋豆', img: 'img5.png', summary: '将王不留行籽贴压在耳穴上，通过持续刺激达到防治疾病的效果。', act: '线下' }
        ]
      }
    ];

    // 响应式变量
    const theory = ref('中医概述'); // 当前选中的理论
    const classNow = ref('艾灸疗法'); // 当前选中的课程分类
    const currentPage = ref(1); // 当前页码

    // 计算属性：获取当前选中的理论详情
    const theoryitem = computed(() => {
      return allTheoryData.find(item => item.name === theory.value) || allTheoryData[0];
    });

    // 计算属性：获取当前选中的课程分类详情
    const classitem = computed(() => {
      return classData.find(item => item.name === classNow.value) || classData[0];
    });

    // 计算属性：分页处理课程列表
    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * 6;
      const end = start + 6;
      return classitem.value.data.slice(start, end);
    });

    // 生命周期：页面挂载后初始化
    onMounted(() => {
      // 处理分页组件文字
      const goto = document.querySelector('.el-pagination__goto');
      const classifier = document.querySelector('.el-pagination__classifier');
      if (goto) goto.textContent = '跳至';
      if (classifier) classifier.textContent = '页';
    });

    // 工具方法：获取图片URL
    function getImageUrl(imgPath) {
      return `./img/${imgPath}`; // 根据实际图片路径调整
    }

    // 事件处理：切换理论分类
    function changeTheory(name) {
      theory.value = name;
    }

    // 事件处理：切换课程分类（同时重置页码）
    function changeClass(name) {
      classNow.value = name;
      currentPage.value = 1;
    }

    return {
      allTheoryData,
      classData,
      theory,
      classNow,
      currentPage,
      theoryitem,
      classitem,
      paginatedItems,
      getImageUrl,
      changeTheory,
      changeClass
    };
  }
};

// 创建并挂载应用
createApp(App)
  .use(ElementPlus)
  .mount('#app');