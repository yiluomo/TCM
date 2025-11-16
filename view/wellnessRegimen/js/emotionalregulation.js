const { createApp,ref } = Vue

const app = createApp({
  setup(){
    const doctors = ref([
        {
            name: '张明远',
            title: '教授',
            avatar: 'https://wallpaperm.cmcm.com/7f66bf9152c32f79205ca3a77a5af6df.jpg',
            specialty: '中医诊断学专家',
            experience: '30年经验',
            coreField: '核心专科：一个文学医师，医师同时接受精神科和内科训练',
            expertise: ['身心同调', '共病管理', '综合治疗'],
            description: '适合情况：当患者出现身体各种不适，但反复检查都找不到明确器质性病因时，或慢性疾病患者伴有情绪困扰时。'
        },
        {
            name: '张明远',
            title: '教授',
            avatar: 'https://ts3.tc.mm.bing.net/th/id/OIP-C.XUHk61lqRZ1j6ZFvoXVswAHaJL?rs=1&pid=ImgDetMain&o=7&rm=3',
            specialty: '精神科医师',
            experience: '30年经验',
            coreField: '核心身份：医学博士，拥有处方权和疾病诊断权',
            expertise: ['睡眠疾病诊疗', '药物治疗', '物理治疗'],
            description: '适合情况:当情志问题已经严重影响到正常生活、工作、社交，或伴有自杀念头、幻觉、妄想等症状时，应首先寻求精神科医师的帮助。'
        },
        {
            name: '王建国',
            title: '医师',
            avatar: 'https://ts1.tc.mm.bing.net/th/id/R-C.3e0e51c08d42c4df4b23bd96032a398f?rik=L4wmZXyMwY%2fSSg&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f005646grRDV.jpg&ehk=EuZ2Q1D8lH6ywzTgjeDODMD%2b%2bRq%2bS00hDmbYJ%2fydoRE%3d&risl=&pid=ImgRaw&r=0',
            specialty: '中医神志病医师',
            experience: '20年经验',
            coreField: '核心身份：这是中医领域最对口情志调理的专科',
            expertise: ['形神论治', '经方应用', '调整与调悦'],
            description: '适合情况：当患者问题已严重影响正常生活、工作、社交，或伴有明显失眠、幻觉、妄想等症状时，应当先寻求精神科医师的帮助。'
        },
        {
            name: '王丽华',
            title: '医师',
            avatar: 'https://ts1.tc.mm.bing.net/th/id/R-C.2aa055520c2a0b30f1a77df700d2996a?rik=rYJIPjGVy56Rkw&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f001008IbZFZ.jpg&ehk=tS%2blzmLEYdemSc0lGGA%2bsJqFIegti9HympE1KPVosGw%3d&risl=&pid=ImgRaw&r=0',
            specialty: '核心科室广汇区中医内科医师',
            experience: '20年经验',
            coreField: '尤其对在脏腑辨证、在情志方面也很有经验',
            expertise: ['从肝论治', '从心论治', '从肺论治'],
            description: '适合情况：当患者问题已经严重影响正常生活、工作、社交，或伴有明显失眠、幻觉、妄想等症状时，应当先寻求精神科医师的帮助。'
        }
    ])
    return{
        doctors,
    }
  }
})

app.mount('#app')