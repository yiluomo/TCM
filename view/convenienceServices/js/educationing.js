const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
        const categories = [
            { id: 'all', name: '全部课程' },
            { id: 'basic', name: '基础理论' },
            { id: 'clinical', name: '临床技能' },
            { id: 'special', name: '特色疗法' },
            { id: 'modern', name: '现代研究' }
        ]

        // 激活的分类
        const activeCategory = ref('all')

        // 课程数据
        const courses = ref([
            {
                id: 1,
                title: '中医辨证论治新进展',
                description: '深入探讨中医辨证论治的最新研究成果和临床应用，提升辨证准确性和治疗效果。',
                hours: 36,
                image: '2-1.jpg',
                teacher: '张教授',
                category: 'basic'
            },
            {
                id: 2,
                title: '针灸治疗常见病实战',
                description: '通过案例分析和实操训练，掌握针灸治疗内科、外科、妇科等常见病的技巧和要点。',
                hours: 48,
                image: '2-2.png',
                teacher: '张教授',
                category: 'clinical'
            },
            {
                id: 3,
                title: '中医药膳与养生调理',
                description: '学习中医食疗理论，掌握不同体质的药膳配方和制作方法，提升养生调理能力。',
                hours: 24,
                image: '2-3.png',
                teacher: '张教授',
                category: 'special'
            },
            {
                id: 4,
                title: '中医现代化研究方法',
                description: '介绍现代科学技术在中医药研究中的应用，包括实验设计、数据分析和论文撰写等。',
                hours: 30,
                image: '2-4.png',
                teacher: '张教授',
                category: 'modern'
            },
            {
                id: 5,
                title: '经络学说新解与应用',
                description: '结合现代研究成果，重新解读经络学说的科学内涵，探讨其在临床中的创新应用。',
                hours: 28,
                image: '2-5.png',
                teacher: '张教授',
                category: 'basic'
            },
            {
                id: 6,
                title: '推拿按摩治疗颈肩腰腿痛',
                description: '系统学习推拿按摩手法，掌握颈肩腰腿痛等常见病症的治疗技术和操作规范。',
                hours: 40,
                image: '2-6.png',
                teacher: '张教授',
                category: 'special'
            }
        ])

        // 根据激活的分类筛选课程
        const filteredCourses = computed(() => {
            if (activeCategory.value === 'all') {
                return courses.value
            }
            return courses.value.filter(course => course.category === activeCategory.value)
        })

        // 设置激活的分类
        const setActiveCategory = (categoryId) => {
            activeCategory.value = categoryId
        }
        const getImageUrl = (imageName) => {
            return `./img/ei_img/${imageName}`
        }

        return {
            categories,
            activeCategory,
            filteredCourses,
            setActiveCategory,
            getImageUrl
        }
    }

})
app.mount('#app')