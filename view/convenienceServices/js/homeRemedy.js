const { createApp, ref, computed } = Vue


const App = {
    setup() {
        const tags = ['全部偏方', "内科病症", "外科病症", "妇科病症", "儿科病症", "皮肤科", "五官科", '养生保健', '运动与身心']
        const tag = ref('全部偏方')
        const remedy = ref([
            {
                name: '感冒咳嗽',
                summary:'精选28个民间验证有效的感冒咳嗽偏方，温和无副作用',
                look:'12.5k',
                img:'img1.png',
                type:'内科病症'
            },
            {
                name: '消化调理',
                summary:'针对胃痛、便秘、消化不良等问题，提供32种食疗方案',
                look:'12.5k',
                img:'img2.png',
                type:'内科病症'
            },
            {
                name: '关节疼痛',
                summary:'25种外用法与内调方结合，有效缓解各种关节不适',
                look:'12.5k',
                img:'img3.png',
                type:'外科病症'
            },
            {
                name: '失眠多梦',
                summary:'19种安神助眠偏方量，一夜好眠帮助您改善睡眠质',
                look:'12.5k',
                img:'img3.png',
                type:'内科病症'
            },
            {
                name: '美容养颜',
                summary:'36种天然美容偏方，内调外养，焕发自然美丽',
                look:'12.5k',
                img:'img1.png',
                type:'妇科病症'
            },
            {
                name: '头痛眩晕',
                summary:'21种中医特色疗法，快速缓解各种类型头痛不适',
                look:'12.5k',
                img:'img2.png',
                type:'内科病症'
            },
            {
                name: '咽喉肿痛',
                summary:'17种清热利咽偏方，温和缓解喉咙不适，声音清亮',
                look:'12.5k',
                img:'img3.png',
                type:'内科病症'
            },
            {
                name: '养生保健',
                summary:'42种日常养生偏方，增强体质，预防疾病，延年益寿',
                look:'12.5k',
                img:'img2.png',
                type:'内科病症'
            },
        ])
        // 添加切换标签的方法用于测试
        function changeTag(newTag) {
            tag.value = newTag
        }

        // 过滤出选中标签的偏方
        const filteredRemedies = computed(() => {
            if (tag.value === '全部偏方') {
                return remedy.value
            } else {
                return remedy.value.filter(item => item.type === tag.value)
            }
        })
        function getImg (img) {
            return `./img/hr_img/${img}`
        }

        return {
            tags,
            tag,
            changeTag,
            filteredRemedies,
            getImg,
        }
    }
}

createApp(App).mount('#app')