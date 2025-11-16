const { createApp, onMounted, ref, computed } = Vue

const app = createApp({
    setup() {
        // 原始药材数据
        const medicalData = ref([
            { id: 1, name: '茉莉花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.07', category: '花类', img: './img/mt_img/img1.png' },
            { id: 2, name: '金莲花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.07', category: '花类', img: './img/mt_img/img2.png' },
            { id: 3, name: '肉苁蓉', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.07', category: '花类', img: './img/mt_img/img3.png' },
            { id: 4, name: '枸杞', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.07', category: '花类', img: './img/mt_img/img4.png' },
            { id: 5, name: '茉莉花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.08', category: '花类', img: './img/mt_img/img1.png' },
            { id: 6, name: '金莲花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.08', category: '清热类', img: './img/mt_img/img2.png' },
            { id: 7, name: '肉苁蓉', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.09', category: '补益类', img: './img/mt_img/img3.png' },
            { id: 8, name: '枸杞', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.09', category: '补益类', img: './img/mt_img/img4.png' },
            { id: 9, name: '茉莉花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.10', category: '花类', img: './img/mt_img/img1.png' },
            { id: 10, name: '金莲花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.10', category: '清热类', img: './img/mt_img/img2.png' },
            { id: 11, name: '肉苁蓉', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.07', category: '补益类', img: './img/mt_img/img3.png' },
            { id: 12, name: '枸杞', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.08', category: '补益类', img: './img/mt_img/img4.png' },
            { id: 13, name: '茉莉花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.09', category: '花类', img: './img/mt_img/img1.png' },
            { id: 14, name: '金莲花', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.10', category: '清热类', img: './img/mt_img/img2.png' },
            { id: 15, name: '肉苁蓉', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.07', category: '补益类', img: './img/mt_img/img3.png' },
            { id: 16, name: '枸杞', description: '木樨科素馨属植物。直立或攀援灌木', time: '2025.08', category: '补益类', img: './img/mt_img/img4.png' }
        ])

        // 筛选条件
        const searchKeyword = ref('')
        const selectedTime = ref('')
        const selectedCategory = ref('')

        // 分页数据
        const currentPage4 = ref(1)
        const pageSize4 = ref(8)
        const size = ref('medium')
        const background = ref(true)
        const disabled = ref(false)

        // 筛选后的数据
        const filteredData = computed(() => {
            return medicalData.value.filter(item => {
                const matchesKeyword = item.name.toLowerCase().includes(searchKeyword.value.toLowerCase()) || 
                                     item.description.toLowerCase().includes(searchKeyword.value.toLowerCase())
                const matchesTime = !selectedTime.value || item.time === selectedTime.value
                const matchesCategory = !selectedCategory.value || 
                                      selectedCategory.value === '展示全部' || 
                                      item.category === selectedCategory.value
                return matchesKeyword && matchesTime && matchesCategory
            })
        })

        // 分页后的数据
        const paginatedData = computed(() => {
            const start = (currentPage4.value - 1) * pageSize4.value
            const end = start + pageSize4.value
            return filteredData.value.slice(start, end)
        })

        // 总数据条数
        const total = computed(() => filteredData.value.length)

        // 分页大小变化处理
        const handleSizeChange = (val) => {
            pageSize4.value = val
            currentPage4.value = 1 // 重置到第一页
        }

        // 当前页变化处理
        const handleCurrentChange = (val) => {
            currentPage4.value = val
        }

        // 筛选按钮点击事件
        const handleFilter = () => {
            currentPage4.value = 1 // 筛选后重置到第一页
        }

        // 初始化页面
        onMounted(() => {
            // 中文化分页组件
            setTimeout(() => {
                const goto = document.querySelector('.el-pagination__goto')
                const classifier = document.querySelector('.el-pagination__total')
                const sizesText = document.querySelector('.el-pagination__sizes .el-select__label')
                
                if (goto) goto.textContent = '跳至'
                if (classifier) classifier.textContent = `共 ${total.value} 条`
                if (sizesText) sizesText.textContent = `${pageSize4.value} 条/页`
            }, 100)
        })

        return {
            medicalData,
            searchKeyword,
            selectedTime,
            selectedCategory,
            filteredData,
            paginatedData,
            currentPage4,
            pageSize4,
            size,
            background,
            disabled,
            total,
            handleSizeChange,
            handleCurrentChange,
            handleFilter
        }
    }
})

app.use(ElementPlus).mount('#app')