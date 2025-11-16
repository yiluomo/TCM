const { createApp, ref, computed, onMounted } = Vue




console.log('specialTherapy')
const App = {
    setup() {
        onMounted(() => {
            const formValidator = new FormValidator('.myForm');
            // 处理分页组件文字
            const goto = document.querySelector('.el-pagination__goto');
            const classifier = document.querySelector('.el-pagination__classifier');
            if (goto) goto.textContent = '跳至';
            if (classifier) classifier.textContent = '页';
        });



        const tags = ['全部疗法', "针灸疗法", "中药疗法", "推拿疗法", "身心疗法", "内服法", "外治法", '手法类', '运动与身心']
        const tag = ref('全部疗法')
        // 疗法数据数组
        const therapyData = [
            {
                id: 1,
                name: '针灸疗法',
                description: '通过针刺或艾灸人体经络上的特定穴位，调节气血运行，达到治疗疾病、缓解疼痛的目的。',
                image: './img/st_img1.png',
                benefits: ['止痛', '调节内分泌', '改善睡眠', '增强免疫'],
                category: ['针灸疗法', '外治法']
            },
            {
                id: 2,
                name: '推拿按摩',
                description: '运用特定手法作用于人体体表特定部位，疏通经络、调和气血、平衡阴阳，达到防治疾病的目的。',
                image: './img/st_img2.png',
                benefits: ['缓解疲劳', '改善循环', '放松肌肉', '调节神经'],
                category: ['推拿疗法', '手法类']
            },
            {
                id: 3,
                name: '中药疗法',
                description: '运用中药的四气五味、升降浮沉等特性，通过辨证论治，组方用药，调整人体阴阳平衡。',
                image: './img/st_img3.png',
                benefits: ['调理脏腑', '平衡阴阳', '标本兼治', '副作用小'],
                category: ['中药疗法', '内服法']
            },
            {
                id: 4,
                name: '拔罐疗法',
                description: '通过燃火、抽气等方法产生负压，使罐吸附于体表，造成局部瘀血，以达到通经活络、行气活血等作用。',
                image: './img/st_img4.png',
                benefits: ['活血化瘀', '驱寒除湿', '消肿止痛', '通经活络'],
                category: ['外治法']
            },
            {
                id: 5,
                name: '艾灸疗法',
                description: '以艾绒为主要材料，点燃后悬置或放置在穴位或病变部位，借其温热刺激及药物作用来防治疾病。',
                image: './img/st_img5.png',
                benefits: ['温通经络', '祛湿散寒', '补气养血', '增强体质'],
                category: ['针灸疗法', '外治法']
            },
            {
                id: 6,
                name: '气功疗法',
                description: '通过调心、调息、调身的锻炼，调整人体的生理功能，增强体质，防治疾病。',
                image: './img/st_img6.png',
                benefits: ['调节情绪', '增强免疫', '改善睡眠', '延缓衰老'],
                category: ['身心疗法', '运动与身心']
            },
            {
                id: 7,
                name: '针灸疗法',
                description: '通过针刺或艾灸人体经络上的特定穴位，调节气血运行，达到治疗疾病、缓解疼痛的目的。',
                image: './img/st_img1.png',
                benefits: ['止痛', '调节内分泌', '改善睡眠', '增强免疫'],
                category: ['针灸疗法', '外治法']
            },
            {
                id: 8,
                name: '推拿按摩',
                description: '运用特定手法作用于人体体表特定部位，疏通经络、调和气血、平衡阴阳，达到防治疾病的目的。',
                image: './img/st_img2.png',
                benefits: ['缓解疲劳', '改善循环', '放松肌肉', '调节神经'],
                category: ['推拿疗法', '手法类']
            },
            {
                id: 9,
                name: '中药疗法',
                description: '运用中药的四气五味、升降浮沉等特性，通过辨证论治，组方用药，调整人体阴阳平衡。',
                image: './img/st_img3.png',
                benefits: ['调理脏腑', '平衡阴阳', '标本兼治', '副作用小'],
                category: ['中药疗法', '内服法']
            },
            {
                id: 10,
                name: '拔罐疗法',
                description: '通过燃火、抽气等方法产生负压，使罐吸附于体表，造成局部瘀血，以达到通经活络、行气活血等作用。',
                image: './img/st_img4.png',
                benefits: ['活血化瘀', '驱寒除湿', '消肿止痛', '通经活络'],
                category: ['外治法']
            },

        ]
        // 分页相关变量
        const currentPage = ref(1)
        const pageSize = 6

        // 标签切换时重置页码
        const changeTag = (newTag) => {
            tag.value = newTag
            currentPage.value = 1
            console.log(1);

        }

        // 根据选中的标签过滤数据
        const filteredTherapy = computed(() => {
            if (tag.value === '全部疗法') {
                console.log('2');
                return therapyData
            }
            console.log('therapyData', therapyData.filter(item => item.category.includes(tag.value)));
            return therapyData.filter(item => item.category.includes(tag.value))
        })

        // 分页处理后的数据
        const paginatedTherapy = computed(() => {
            const start = (currentPage.value - 1) * pageSize
            const end = start + pageSize
            return filteredTherapy.value.slice(start, end)
        })

        console.log('paginatedTherapy:', paginatedTherapy);

        return {
            tags,
            tag,
            filteredTherapy,
            paginatedTherapy,
            currentPage,
            pageSize,
            changeTag
        }
    }

}

createApp(App).use(ElementPlus).mount('#app')