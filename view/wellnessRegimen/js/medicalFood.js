
const { createApp, ref, computed, onMounted } = Vue


// 在非构建环境下，直接定义图片路径而不是使用import
const triangle = "./img/mf_img/triangle.png";
const triangle1 = "./img/mf_img/triangle1.png";

const App = {
    setup() {
        
        const types = ref([
            {
                name: "平和体质",
                content:
                {
                    name: '平和体质',
                    bigimg: 'body1.png',
                    smallimg: 'points.png',
                    summary: '身体阴阳平衡，气血调和，是最理想的体质状态，表现为面色红润，精力充沛，睡眠良好。',
                    point: [
                        '保持规律作息，均衡饮食',
                        '适当运动，保持良好心态',
                        '顺应四季变化调整生活方式',
                    ]
                }

            },
            {
                name: "气虚体质",
                content:
                {
                    name: '气虚体质',
                    bigimg: 'body1.png',
                    smallimg: 'points.png',
                    summary: '气血不足，阴阳不平衡，是一种常见的体质问题，表现为面色苍白，精力不足，睡眠困难。',
                    point: [
                        '多吃富含维生素A的食物，如苹果、桃子、橙子等',
                        '多吃富含维生素D的食物，如鱼、虾、贝类等',
                        '多吃富含维生素E的食物，如葡萄、橘子、桃子等',
                    ]
                }
            },
            {
                name: "阳虚体质",
                content:
                {
                    name: '阳虚体质',
                    bigimg: 'body1.png',
                    smallimg: 'points.png',
                    summary: '阳气不足，阴阳不平衡，是一种常见的体质问题，表现为面色苍白，精力不足，睡眠困难。',
                    point: [
                        '多吃富含维生素C的食物，如番茄、黄瓜、胡萝卜等',
                        '多吃富含维生素B12的食物，如鱼、虾、贝类等',
                        '多吃富含维生素B6的食物，如葡萄、橘子、桃子等',
                    ]
                }
            },
            {
                name: "阴虚体质",
                content:
                {
                    name: '阴虚体质',
                    bigimg: 'body1.png',
                    smallimg: 'points.png',
                    summary: '阴阳不平衡，气血不足，是一种常见的体质问题，表现为面色苍白，精力不足，睡眠困难。',
                    point: [
                        '多吃富含维生素B12的食物，如鱼、虾、贝类等',
                        '多吃富含维生素B6的食物，如葡萄、橘子、桃子等',
                        '多吃富含维生素E的食物，如葡萄、橘子、桃子等',
                    ]
                }
            },
            {
                name: "痰湿体质",
                content:
                {
                    name: '痰湿体质',
                    bigimg: 'body1.png',
                    smallimg: 'points.png',
                    summary: '气血不足，阴阳不平衡，是一种常见的体质问题，表现为面色苍白，精力不足，睡眠困难。',
                    point: [
                        '多吃富含维生素A的食物，如苹果、桃子、橙子等',
                        '多吃富含维生素D的食物，如鱼、虾、贝类等',
                        '多吃富含维生素E的食物，如葡萄、橘子、桃子等',
                    ]
                }
            },
            {
                name: "湿热体质",
                content:
                {
                    name: '湿热体质',
                    bigimg: 'body1.png',
                    smallimg: 'points.png',
                    summary: '气血不足，阴阳不平衡，是一种常见的体质问题，表现为面色苍白，精力不足，睡眠困难。',
                    point: [
                        '多吃富含维生素A的食物，如苹果、桃子、橙子等',
                        '多吃富含维生素D的食物，如鱼、虾、贝类等',
                        '多吃富含维生素E的食物，如葡萄、橘子、桃子等',
                    ]
                }
            },
        ])
        const activeType = ref('平和体质')
        const nowtypedata = computed(() => {
            return types.value.find((type) => type.name === activeType.value)
        })
        const medicaltype = ref([
            {
                name: "全部",
                data: []
            },
            {
                name: '补气养血',
                data: [
                    {
                        title: '黄芪炖牛肉',
                        summary: '补气健脾，增强免疫力',
                        tag: '补气养血',
                        img: 'food1.png'
                    },
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补气养血',
                        img: 'food2.png'
                    }
                ]
            },
            {
                name: '健脾养胃',
                data: [
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补血益气',
                        img: 'food3.png'
                    }
                ]
            },
            {
                name: '清热解毒',
                data: [
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补血益气',
                        img: 'food4.png'
                    }
                ]
            },
            {
                name: '滋阴润燥',
                data: [
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补血益气',
                        img: 'food5.png'
                    }
                ]
            },
            {
                name: '补肾壮阳',
                data: [
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补血益气',
                        img: 'food6.png'
                    }
                ]
            },
            {
                name: '安神助眠',
                data: [
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补血益气',
                        img: 'food7.png'
                    },
                    {
                        title: '红枣桂圆茶',
                        summary: '补血益气，改善贫血',
                        tag: '补血益气',
                        img: 'food8.png'
                    }
                ]
            },
        ])
        const activeMedicalType = ref('全部')
        const changeClass = (name) => {
            activeMedicalType.value = name;
        };

        const getMedicalType = () => {
            if (activeMedicalType.value === '全部') {
                return medicaltype.value.map(item => item.data).flat()
            }
            return medicaltype.value.filter(item => item.name === activeMedicalType.value)[0].data
        }
        const getImageUrl = (imgPath) => {
            // 使用上一级目录路径，避免包含js目录
            return new URL(`../img/mf_img/${imgPath}`, import.meta.url).href;
        }
        return {
            types,
            activeType,
            nowtypedata,
            medicaltype,
            activeMedicalType,
            triangle,
            triangle1,
            changeClass,
            getMedicalType,
            getImageUrl,
        }
    },

}

createApp(App).mount('#app')