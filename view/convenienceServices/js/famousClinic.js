const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const chclintag = ref('全部')
        const cnclintags = ref(["全部", "官方旗舰", "民间特色"]);

        const cnClinic = ref([
            {
                name: '深圳南山旗舰中医馆',
                summary: '政府认证的社区健康服务机构，环境舒适，提供全面的中医医疗与健康管理服务。',
                img: 'cnclinic1.png',
                special: ['针灸', '推拿', '中药调理'],
                score: '4.8',
                type: '官方旗舰'
            },
            {
                name: '深圳福田旗舰中医馆',
                summary: '提供全方位中医诊疗服务，拥有经验丰富的医师团队，是社区居民信赖的健康服务点。',
                img: 'cnclinic2.png',
                special: ['艾灸', '按摩', '体质调理'],
                score: '4.7',
                type: '官方旗舰'
            },
            {
                name: '深圳一道堂中医馆',
                summary: '第二届中国医疗养生发展论坛获奖机构，擅长各类结节调理，疗效显著。',
                img: 'cnclinic3.png',
                special: ['结节调理', '中药配方', '养生指导'],
                score: '4.9',
                type: '官方旗舰'
            },
            {
                name: '三见堂中医馆',
                summary: '以特色儿科闻名，采用传统中医疗法治疗儿童常见病，深受家长信赖。',
                img: 'cnclinic4.png',
                special: ['特色儿科', '小儿推拿', '呼吸系统调理'],
                score: '4.8',
                type: '民间特色'
            },
            {
                name: '龙港春先堂中医馆',
                summary: '提供独特的梁氏疗法和通明眼疗法，在中医特色疗法领域独享盛誉。',
                img: 'cnclinic5.png',
                special: ['梁氏疗法', '通明眼疗法', '非遗传承'],
                score: '4.7',
                type: '民间特色'
            },
            {
                name: '深圳罗湖旗舰中医馆',
                summary: '集医疗、预防、保健于一体的综合性中医馆，提供便捷的社区中医服务。',
                img: 'cnclinic6.png',
                special: ['中医全科', '康复理疗', '健康管理'],
                score: '4.9',
                type: '官方旗舰'
            }
        ])
        const showClinic = (tag) => {
            if (tag == '全部') {
                return cnClinic.value
            } else {
                return cnClinic.value.filter(item => item.type == tag  )
            }
        }


        const clintag = ref('全部')
        const clitags = ref(["全部", "护理院", "养老社区",'康复中心']);

        const clinic = ref([
            {
                name: '上海仁瑞护理院',
                summary: '以中医为特色的医保定点单位，集医疗、护理、康复、养老于一体的专业机构。',
                img: 'clinic1.png',
                special: ['医保定点', '中医特色', '专业护理'],
                score: '4.8',
                type: '护理院'
            },
            {
                name: '上海梧桐人家养老院',
                summary: '环境优美、配套完善的高端养老公寓，注重长者精神文化生活与健康管理。',
                img: 'clinic2.png',
                special: ['高端公寓', '文娱活动', '健康管理'],
                score: '4.9',
                type: '养老院'
            },
            {
                name: '深圳社区康复中心',
                summary: '社区旗舰中医馆，提供便捷的家门口康复理疗服务，专业医师团队坐诊。',
                img: 'clinic3.png',
                special: ['康复理疗', '社区服务', '慢病治疗'],
                score: '4.9',
                type: '康复中心'
            },
            {
                name: '上海康中沃尔护理院',
                summary: '提供专业医疗护理与养老服务，收费区间3600-22000元/月，满足不同需求。',
                img: 'clinic4.png',
                special: ['分级护理', '医保定点', '多样选择'],
                score: '4.8',
                type: '护理院'
            },
            {
                name: '杭州绿城养老社区',
                summary: '园林式养老社区，提供全方位生活照料、健康管理和丰富的文化娱乐活动。',
                img: 'clinic5.png',
                special: ['园林社区', '文化生活', '24小时护理'],
                score: '4.7',
                type: '养老社区'
            },
            {
                name: '广州社区康复中心',
                summary: '旗舰中医馆社区服务点，提供针灸、推拿等康复理疗服务，方便居民就近就医。',
                img: 'clinic6.png',
                special: ['针灸推拿', '社区便利', '慢病管理'],
                score: '4.9',
                type: '康复中心'
            }
        ])
        const showClinic2 = (tag) => {
            if (tag == '全部') {
                return clinic.value
            } else {
                return clinic.value.filter(item => item.type == tag  )
            }
        }



        const getImg = (img) => {
            return `./img/fc_img/${img}`
        }


        return {
            chclintag,
            cnclintags,
            cnClinic,
            getImg,
            showClinic,
            clintag,
            clitags,
            clinic,
            showClinic2,
        }
    }
});

app.mount("#app");