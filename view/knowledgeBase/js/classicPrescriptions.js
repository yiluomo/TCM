const { createApp, ref, computed, onMounted } = Vue

// 方剂主题数据（提取为独立常量，提高可读性）
const TOPIC_DATA =[
        {
            name: '逍遥丸疏肝解郁',
            material: [
                {
                    name: '柴胡',
                   summary: '疏肝解郁，升举阳气',
                }, {
                    name: '白芍',
                    summary: '养血柔肝，缓急止痛',
                }, {
                    name: '当归',
                    summary: '补血活血，调经止痛',
                }, {
                    name: '白术',
                    summary: '健脾益气，燥湿利水',
                }, {
                    name: '大枣',
                    summary: '健脾宁心，利水渗湿'
                }, {
                    name: '大枣',
                    summary: '补脾益气，调和诸药'
                }
            ],
            effect:[
                '1.直接疏肝理气:方中柴胡为君药，性味苦平，归肝、胆经，具有肝解郁、升举阳气的作用，能够直接调节肝气，解除郁结。',
                '2.养血柔肝:当归、白芍为臣药，养血柔肝，使肝体得养，肝用正常。肝藏血，血足则肝柔，郁结自解。',
                '3.健脾益气:白术、茯苓、甘草健脾益气，培土荣木。中医认为"见肝之病，知肝传脾，当先实脾”，通过健防止肝病传变，同时脾健则气血生化有源，肝血充足。',
                '4.调和肝脾:全方配伍精当，既疏肝又健脾，使肝气调达，睥土健运，气血调和，则郁结自除。'
            ],
            thoery:[
                '道遥丸的组方思想源于《黄帝内经》"木郁达之"的治疗原则。肝属木，主疏泄，喜条达而恶抑郁。当情志不遂，肝失疏泄，导致肝气郁结，进而影响脾胃功 能，形成"肝郁脾虚”证',
                '道遥丸通过疏肝、健脾、养血三法并，恢复肝的疏泄功能，使气机调畅，情志舒展，故名为"道遥”。'
            ]
        },
        {
            name: '六味地黄丸：滋阴补肾的典范',
            material: [
                {
                    name: '柴胡',
                   summary: '疏肝解郁，升举阳气',
                }, {
                    name: '白芍',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }, {
                    name: '当归',
                    summary: '补血活血，调经止痛',
                }, {
                    name: '白术',
                    summary: '健脾益气，燥湿利水',
                }, {
                    name: '大枣',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }, {
                    name: '大枣',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }
            ],
            effect:[
                '1.直接疏肝理气:方中柴胡为君药，性味苦平，归肝、胆经，具有肝解郁、升举阳气的作用，能够直接调节肝气，解除郁结。',
                '2.养血柔肝:当归、白芍为臣药，养血柔肝，使肝体得养，肝用正常。肝藏血，血足则肝柔，郁结自解。',
                '3.健脾益气:白术、茯苓、甘草健脾益气，培土荣木。中医认为"见肝之病，知肝传脾，当先实脾”，通过健防止肝病传变，同时脾健则气血生化有源，肝血充足。',
                '4.调和肝脾:全方配伍精当，既疏肝又健脾，使肝气调达，睥土健运，气血调和，则郁结自除。'
            ],
            thoery:[
                '道遥丸的组方思想源于《黄帝内经》"木郁达之"的治疗原则。肝属木，主疏泄，喜条达而恶抑郁。当情志不遂，肝失疏泄，导致肝气郁结，进而影响脾胃功 能，形成"肝郁脾虚”证',
                '道遥丸通过疏肝、健脾、养血三法并，恢复肝的疏泄功能，使气机调畅，情志舒展，故名为"道遥”。'
            ]
        },
        {
            name: '四君子汤：补气健脾第一方',
            material: [
                {
                    name: '柴胡',
                   summary: '疏肝解郁，升举阳气',
                }, {
                    name: '白芍',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }, {
                    name: '当归',
                    summary: '补血活血，调经止痛',
                }, {
                    name: '白术',
                    summary: '健脾益气，燥湿利水',
                }, {
                    name: '大枣',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }, {
                    name: '大枣',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }
            ],
            effect:[
                '1.直接疏肝理气:方中柴胡为君药，性味苦平，归肝、胆经，具有肝解郁、升举阳气的作用，能够直接调节肝气，解除郁结。',
                '2.养血柔肝:当归、白芍为臣药，养血柔肝，使肝体得养，肝用正常。肝藏血，血足则肝柔，郁结自解。',
                '3.健脾益气:白术、茯苓、甘草健脾益气，培土荣木。中医认为"见肝之病，知肝传脾，当先实脾”，通过健防止肝病传变，同时脾健则气血生化有源，肝血充足。',
                '4.调和肝脾:全方配伍精当，既疏肝又健脾，使肝气调达，睥土健运，气血调和，则郁结自除。'
            ],
            thoery:[
                '道遥丸的组方思想源于《黄帝内经》"木郁达之"的治疗原则。肝属木，主疏泄，喜条达而恶抑郁。当情志不遂，肝失疏泄，导致肝气郁结，进而影响脾胃功 能，形成"肝郁脾虚”证',
                '道遥丸通过疏肝、健脾、养血三法并，恢复肝的疏泄功能，使气机调畅，情志舒展，故名为"道遥”。'
            ]
        },
        {
            name: '桂枝汤：群方之魁，调和营卫',
            material: [
                {
                    name: '柴胡',
                   summary: '疏肝解郁，升举阳气',
                }, {
                    name: '白芍',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }, {
                    name: '当归',
                    summary: '补血活血，调经止痛',
                }, {
                    name: '白术',
                    summary: '健脾益气，燥湿利水',
                }, {
                    name: '大枣',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }, {
                    name: '大枣',
                    summary: '疏肝解郁，降 lowered blood pressure',
                }
            ],
            effect:[
                '1.直接疏肝理气:方中柴胡为君药，性味苦平，归肝、胆经，具有肝解郁、升举阳气的作用，能够直接调节肝气，解除郁结。',
                '2.养血柔肝:当归、白芍为臣药，养血柔肝，使肝体得养，肝用正常。肝藏血，血足则肝柔，郁结自解。',
                '3.健脾益气:白术、茯苓、甘草健脾益气，培土荣木。中医认为"见肝之病，知肝传脾，当先实脾”，通过健防止肝病传变，同时脾健则气血生化有源，肝血充足。',
                '4.调和肝脾:全方配伍精当，既疏肝又健脾，使肝气调达，睥土健运，气血调和，则郁结自除。'
            ],
            thoery:[
                '道遥丸的组方思想源于《黄帝内经》"木郁达之"的治疗原则。肝属木，主疏泄，喜条达而恶抑郁。当情志不遂，肝失疏泄，导致肝气郁结，进而影响脾胃功 能，形成"肝郁脾虚”证',
                '道遥丸通过疏肝、健脾、养血三法并，恢复肝的疏泄功能，使气机调畅，情志舒展，故名为"道遥”。'
            ]
        },
    ]

// 方剂分类数据（提取为独立常量）
const CLASS_DATA = [
  {
    name: "全部方剂",
    quantity: 250,
    data: [
      {
        id: 1,
        name: "麻黄汤",
        img: "medical1.png",
        summary: "艾灸是一种使用艾叶制成的艾条或艾绒，在特定穴位上熏灼的一种中医治疗方法。",
        act: "解毒剂",
        material: ["麻黄", "甘草", "白术", "茯苓"],
        form: "出自《伤寒论》",
      },
      // 其他方剂数据保持不变，此处省略...
    ],
  },
  { name: "解毒剂", quantity: 32, data: [] },
  { name: "清热剂", quantity: 45, data: [] },
  // 其他分类保持不变...
]

const App = {
  setup() {
    // 主题相关状态
    const topicNow = ref('逍遥丸疏肝解郁')
    const topic = ref(TOPIC_DATA)
    
    // 计算当前主题数据（优化默认值处理）
    const materialNow = computed(() => {
      return topic.value.find(item => item.name === topicNow.value) ?? topic.value[0]
    })

    // 分类相关状态
    const classNow = ref("全部方剂")
    console.log(classNow.value,'111')
    const classData = ref(CLASS_DATA)
    const currentPage = ref(1)
    const pageSize = ref(4) // 提取为常量，方便修改

    // 计算当前分类数据
    const classitem = computed(() => {
      return classData.value.find(item => item.name === classNow.value) ?? classData.value[0]
    })

    // 计算分页数据（优化逻辑，避免数组越界）
    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value
      if (start < 0) return []
      const end = start + pageSize.value
      return classitem.value.data.slice(start, end)
    })

    // 计算总页数（新增，方便分页控制）
    const totalPages = computed(() => {
      return Math.ceil(classitem.value.data.length / pageSize.value)
    })

    // 图片路径处理（兼容非模块环境）
    function getImageUrl(imgPath) {
      // 检查是否支持import.meta.url，否则使用相对路径
      if (typeof import.meta !== 'undefined' && import.meta.url) {
        return new URL(`./img/${imgPath}`, import.meta.url).href
      }
      return `./img/${imgPath}`
    }

    // 切换分类（优化逻辑，避免无效操作）
    function changeClass(name) {
      if (name === classNow.value) return // 相同分类不处理
      classNow.value = name
      currentPage.value = 1 // 重置页码
    }

    // 切换主题（新增，实现主题切换功能）
    function changeTopic(name) {
      if (name === topicNow.value) return
      topicNow.value = name
    }

    // 分页文本设置（修复生命周期钩子调用问题）
    onMounted(() => {
      const goto = document.querySelector(".el-pagination__goto")
      const classifier = document.querySelector(".el-pagination__classifier")
      if (goto) goto.textContent = "跳至"
      if (classifier) classifier.textContent = "页"
      
    })

    // 评分相关状态
    const userRating = ref(0)

    return {
      topicNow,
      topic,
      materialNow,
      classNow,
      classData,
      currentPage,
      pageSize,
      totalPages,
      classitem,
      paginatedItems,
      userRating,
      getImageUrl,
      changeClass,
      changeTopic // 新增主题切换方法
    }
  }
}

// 确保ElementPlus已加载
if (window.ElementPlus) {
  createApp(App).use(ElementPlus).mount('#app')
} else {
  console.error('ElementPlus未正确加载')
}