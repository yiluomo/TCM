const { createApp, ref, computed, onMounted } = Vue;

const app = createApp({
  setup() {
    // 功法数据（保持不变）
    const exerciseData = [
      {
        name: '八段锦',
        video: './img/pg_img/八段锦.mp4',
        description: '由八个动作组成，针对不同脏腑和经络进行调理，能增强体质，预防疾病，特别适合办公室人群',
        steps: [
          { num: 1, title: '两手托天理三焦', description: '双手十指交叉，掌心向上缓慢举过头顶，同时踮起脚尖，吸气，然后缓慢放下，呼云', image: './img/pg_img/path1.png' },
          { num: 2, title: '左右开弓似射雕', description: '左手前伸，右手拉至胸前，如拉弓状，目视左手，左右交替进行配合呼吸', image: './img/pg_img/path2.png' },
          { num: 3, title: '调理脾胃须单举', description: '左手向上托举，右手下按，如托起重物，左右交替，感受身体拉伸', image: './img/pg_img/path3.png' },
          { num: 4, title: '五劳七伤往后瞧', description: '双手又腰，缓慢向左右转头，目视后方，调节颈部气血，缓解疲劳，', image: './img/pg_img/path4.png' }
        ],
        fullLink: '查看完整八段锦教程'
      },
      {
        name: '太极拳',
        video: './img/pg_img/太极拳.mp4',
        description: '太极拳是一种柔和缓慢的中国传统武术，强调以柔克刚，内外兼修，适合各年龄段人群练习。',
        steps: [
          { num: 1, title: '起势', description: '双脚与肩同宽，双手自然下垂，放松身体，呼吸均匀', image: './img/pg_img/path1.png' },
          { num: 2, title: '揽雀尾', description: '双手呈抱球状，缓慢向左右展开，如揽雀尾一般轻柔', image: './img/pg_img/path2.png' },
          { num: 3, title: '野马分鬃', description: '身体微转，双手分开如野马分鬃，保持重心稳定', image: './img/pg_img/path3.png' },
          { num: 4, title: '云手', description: '双手如行云流水般自然摆动，带动身体缓慢转动', image: './img/pg_img/path4.png' }
        ],
        fullLink: '查看完整太极拳教程'
      },
      {
        name: '五禽戏',
        video: './img/pg_img/五禽戏.mp4',
        description: '模仿虎、鹿、熊、猿、鸟五种动物的动作，能增强脏腑功能，提高免疫力，改善身体灵活性。',
        steps: [
          { num: 1, title: '虎戏', description: '模仿老虎的威猛姿态，伸展肢体，增强体力', image: './img/pg_img/path1.png' },
          { num: 2, title: '鹿戏', description: '模仿鹿的轻盈动作，活动腰部和腿部，增强灵活性', image: './img/pg_img/path2.png' },
          { num: 3, title: '熊戏', description: '模仿熊的厚重沉稳，按摩脾胃，增强消化功能', image: './img/pg_img/path3.png' },
          { num: 4, title: '猿戏', description: '模仿猿猴的敏捷动作，锻炼手脚协调能力', image: './img/pg_img/path4.png' }
        ],
        fullLink: '查看完整五禽戏教程'
      },
      {
        name: '易筋经',
        video: './img/pg_img/易筋经.mp4',
        description: '易筋经是一种古老的养生功法，通过特定的动作和呼吸方法，调理气血，强筋健骨。',
        steps: [
          { num: 1, title: '韦驮献杵', description: '双手合十，缓慢举至胸前，保持身体正直，调匀呼吸', image: './img/pg_img/path1.png' },
          { num: 2, title: '横担降魔杵', description: '双手侧平举，如横担降魔杵，拉伸肩背肌肉', image: './img/pg_img/path2.png' },
          { num: 3, title: '掌托天门', description: '双手向上托举，如托天门，伸展脊柱，增强阳气', image: './img/pg_img/path3.png' },
          { num: 4, title: '摘星换斗', description: '一手托天，一手下垂，左右交替，调节阴阳', image: './img/pg_img/path4.png' }
        ],
        fullLink: '查看完整易筋经教程'
      }
    ];

    // 动态类型列表（从exerciseData中提取名称）
    const exerciseTypes = exerciseData.map(item => ({ name: item.name }));
    // 当前选中类型（默认选中第一个）
    const activeType = ref(exerciseTypes[0].name);
    // 切换选中类型
    const changeType = (typeName) => {
      activeType.value = typeName;
    };
    // 当前选中的功法数据
    const currentExercise = computed(() => {
      return exerciseData.find(item => item.name === activeType.value);
    });

    return {
      exerciseTypes,
      activeType,
      changeType,
      currentExercise
    };
  }
});

app.mount("#app");