const { createApp,ref } = Vue;

const app = createApp({
    setup() {
         const doctorList = ref([
                {
                    name:'张明远 教授',
                    identity:'中医诊断学专家·30年经验',
                    summery:'擅长脉诊和体质辨识，对复杂疑难病症的诊断有独到见解，曾发表多篇中医诊断学研究论文。',
                    tag:['脉诊','体质辨识','疑难杂症'],
                    img:'doctor1.png'
                },
                {
                    name:'李淑华 医师',
                    identity:'舌诊与面诊专家·25年经验',
                    summery:'精通舌诊和面诊，善于通过观察舌象和面部特征判断健康状况，对妇科和内分泌疾病的诊断尤为擅长。',
                    tag:['舌诊','面诊','妇科疾病'],
                    img:'doctor2.png'
                },
                {
                    name:'王建国 医师',
                    identity:'经络与耳穴诊断专家·20年经验',
                    summery:'专注于经络诊断和耳穴诊断研究，结合现代科技开展数字化脉诊分析，对消化系统疾病有深入研究。',
                    tag:['经络诊断','耳穴诊断','消化系统'],
                    img:'doctor3.png'
                },
                {
                    name:'张明远 教授',
                    identity:'中医诊断学专家·30年经验',
                    summery:'擅长脉诊和体质辨识，对复杂疑难病症的诊断有独到见解，曾发表多篇中医诊断学研究论文。',
                    tag:['脉诊','体质辨识','疑难杂症'],
                    img:'doctor1.png'
                },
                {
                    name:'李淑华 医师',
                    identity:'舌诊与面诊专家·25年经验',
                    summery:'精通舌诊和面诊，善于通过观察舌象和面部特征判断健康状况，对妇科和内分泌疾病的诊断尤为擅长。',
                    tag:['舌诊','面诊','妇科疾病'],
                    img:'doctor2.png'
                },
                {
                    name:'王建国 医师',
                    identity:'经络与耳穴诊断专家·20年经验',
                    summery:'专注于经络诊断和耳穴诊断研究，结合现代科技开展数字化脉诊分析，对消化系统疾病有深入研究。',
                    tag:['经络诊断','耳穴诊断','消化系统'],
                    img:'doctor3.png'
                },
                {
                    name:'李淑华 医师',
                    identity:'舌诊与面诊专家·25年经验',
                    summery:'精通舌诊和面诊，善于通过观察舌象和面部特征判断健康状况，对妇科和内分泌疾病的诊断尤为擅长。',
                    tag:['舌诊','面诊','妇科疾病'],
                    img:'doctor2.png'
                },
                {
                    name:'王建国 医师',
                    identity:'经络与耳穴诊断专家·20年经验',
                    summery:'专注于经络诊断和耳穴诊断研究，结合现代科技开展数字化脉诊分析，对消化系统疾病有深入研究。',
                    tag:['经络诊断','耳穴诊断','消化系统'],
                    img:'doctor3.png'
                },
            ])


         const getImg = (img) => {
            return `./img/dc_img/${img}`
        }
        return {
            doctorList,
            getImg  
        }
    }
})
app.mount('#app');