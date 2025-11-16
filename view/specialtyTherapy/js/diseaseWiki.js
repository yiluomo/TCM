const { createApp, ref, computed, onMounted } = Vue


const App = {
    setup() {
        const diseaseType = ref([
            '全部疾病',
            '呼吸系统疾病',
            '心血管疾病',
            '消化系统疾病',
            '内分泌疾病',
            '神经系统疾病',
            '皮肤疾病',
            '其他疾病'
        ])
        const diseases = ref([
            {
                name: '头痛',
                type: '神经系统疾病',
                hot: '18',
                description: '头痛是指由于外感六淫或内伤杂病致使头部脉络拘急或失养，清窍不利所引起的，以自觉头部疼痛为主要临床表现的一种常见病证。'
            },
            {
                name: '咳嗽',
                type: '呼吸系统疾病',
                hot: '15',
                description: '咳嗽是指肺失宣降，肺气上逆作声，咯吐痰液而言，为肺系疾病的主要证候之一，多由六淫外邪侵袭肺系，或脏腑功能失调，内伤肺所致。'
            },
            {
                name: '胃脘痛',
                type: '消化系统疾病',
                hot: '12',
                description: '胃脘痛是指以上腹胃脘部近心窝处疼痛为主症的病证，多由外邪犯胃、饮食伤胃、情志不畅和脾胃素虚等因素导致胃气阻滞，胃失和降而作痛。'
            },
            {
                name: '眩晕',
                type: '神经系统疾病',
                hot: '10',
                description: '眩晕是指眼花或眼前发黑，头晕甚或感觉自身或外界景物旋转，二者常同时并见，多由肝阳上亢、气血亏虚、肾精不足、痰湿中阻等引起。'
            },
            {
                name: '泻下',
                type: '消化系统疾病',
                hot: '8',
                description: '泻下是以排便次数增多，粪质稀溏或完谷不化，甚至泻出如水样为主症的病证，多由感受外邪、饮食所伤、情志失调、脾胃虚弱、命门火衰等引起。'
            },
            {
                name: '心悸',
                type: '心血管疾病',
                hot: '6',
                description: '心悸是指病人自觉心中悸动，惊惕不安，甚则不能自主的一种病证，多由体质虚弱、饮食劳倦、七情所伤、感受外邪等引起气血阴阳亏虚，心失所养。'
            },
            {
                name: '消渴',
                type: '内分泌疾病',
                hot: '4',
                description: '消渴是以多饮、多食、多尿、乏力、消瘦，或尿有甜味为主要临床表现的一种疾病，多由禀赋不足、饮食失节、情志失调、劳欲过度等导致阴虚燥热。'
            },
            {
                name: '湿疹',
                type: '皮肤疾病',
                hot: '2',
                description: '湿疹是一种常见的皮肤炎症性疾病，中医称之为湿疮，多由风湿热邪浸淫肌肤，或脾虚湿蕴，或血虚风燥等因素引起，以瘙痒、渗出、多形性皮损为特点。'
            },
            {
                name: '感冒',
                type: '呼吸系统疾病',
                hot: '1',
                description: '感冒是感受触冒风邪，邪犯卫表而导致的常见外感疾病，临床表现以鼻塞、流涕、喷嚏、咳嗽、头痛、恶寒、发热、全身不适、脉浮为其特征。'
            },
            {
                name: '失眠',
                type: '其他疾病',
                hot: '16',
                description: '失眠是以经常不能获得正常睡眠为特征的一类病证，多由情志所伤、饮食不节、劳逸结合、病后 inactive 等因素引起，主要表现为睡眠时间、深度的不足。'
            },
            {
                name: '水肿',
                type: '其他疾病',
                hot: '14',
                description: '水肿是体内水液积存，泛滥肌肤，表现以头面、眼睑、四肢、腹背，甚至全身浮肿为特征的一类病证，多由风邪袭表、疮毒内犯、外感水湿、饮食不节、禀赋不足等引起。'
            }
        ])
        const selectedDiseaseType = ref('全部疾病')
        const currentPage = ref(1)
        const pageSize = ref(6)

        const showDisease = computed(() => {
            if (selectedDiseaseType.value === '全部疾病') {
                return diseases.value
            } else {
                return diseases.value.filter(disease => disease.type === selectedDiseaseType.value)
            }
        })

        const paginatedDiseases = computed(() => {
            const start = (currentPage.value - 1) * pageSize.value
            const end = start + pageSize.value
            return showDisease.value.slice(start, end)
        })
        function filterByType(item) {
            selectedDiseaseType.value = item
            console.log(selectedDiseaseType.value);
        }
        function sortByHot() {
            document.getElementById('sortByHot').classList.add('active')
            // 创建一个排序后的新数组来替换原数据
            const sorted = [...diseases.value].sort((a, b) => {
                return parseInt(b.hot) - parseInt(a.hot)
            })
            // 重置当前页码
            currentPage.value = 1
            // 替换原数据以触发重新渲染
            diseases.value = sorted
        }

        // 切换标签时重置页码
        function handlePageChange(val) {
            currentPage.value = val
        }
        onMounted(() => {
            // 处理分页组件文字
            const goto = document.querySelector('.el-pagination__goto');
            const classifier = document.querySelector('.el-pagination__classifier');
            if (goto) goto.textContent = '跳至';
            if (classifier) classifier.textContent = '页';
        });

        return {
            // 数据
            diseaseType,
            diseases,
            selectedDiseaseType,
            showDisease,
            paginatedDiseases,
            currentPage,
            pageSize,
            filterByType,
            sortByHot,
            handlePageChange
        }
    },
}

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')