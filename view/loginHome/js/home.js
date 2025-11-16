const { createApp, ref, onMounted } = Vue
const app = createApp({
    setup() {

        const activty = ref({
            title: '全国中医药文化校园主题活动',
            img: './img/activty.png'
        })
        const activtys = [
            {
                title: '全国中医药文化校园主题活动',
                img: './img/activty.png'
            },
            {
                title: '百市千县”中医药文化惠民活动',
                img: './img/activty.png'
            },
            {
                title: '百市千县”中医药文化liitte活动',
                img: './img/activty.png'
            },
        ]

        const activtyList = ref([
            '百市千县”中医药文化惠民活动',
            '百市千县”中医药文化惠民活动',
            '百市千县”中医药文化惠民活动',
            '百市千县”中医药文化惠民活动',
            '百市千县”中医药文化惠民活动',
            '百市千县”中医药文化惠民活动',
        ])

        const view = ref({
            name: '平和体质',
            img: './img/view.png'
        })
        const viewItem = ref([
            {
                name: '平和体质',
                img: './img/view.png'
            },
            {
                name: '阳虚体质',
                img: './img/view.png'
            },
            {
                name: '阴虚体质',
                img: './img/view.png'
            },
            {
                name: '痰湿体质',
                img: './img/view.png'
            },
            {
                name: '湿热体质',
                img: './img/view.png'
            },
            {
                name: '气虚体质',
                img: './img/view.png'
            }
        ])

        const historyTop = [
            {
                name: '陈郎中为格格治病“不',
                summary: '望、闻、问、切”系古时医家为患者诊病的常用之法，是指通过观气色、听声音',
                img: './img/history.png'
            },
            {
                name: '陈郎中为格格治病“不',
                summary: '望、闻、问、切”系古时医家为患者诊病的常用之法，是指通过观气色、听声音',
                img: './img/history.png'
            },
        ]
        const historyList = ref([
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
            {
                name: '陈郎中为格格治病“不',
                time: '2023-02-13',
            },
        ])

        onMounted(() => {
            const pageUp = document.querySelector('.pageUp');
            // 检查滚动位置并显示/隐藏pageUp元素
            const togglePageUpVisibility = () => {
                if (pageUp) {
                    if (window.scrollY > 100) { // 当页面向下滚动超过100px时显示
                        pageUp.style.display = 'flex'; // 假设pageUp是一个块级元素，如果不是，可能需要调整为'flex'或'inline-block'
                    } else {
                        pageUp.style.display = 'none'; // 否则隐藏
                    }
                }
            };
            // 页面滚动时触发
            window.addEventListener('scroll', togglePageUpVisibility);
            // 页面加载时进行一次检查，以确保初始状态正确
            togglePageUpVisibility();
            if (pageUp) {
                pageUp.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // 平滑滚动效果
                    });
                });
            }
        })

        return {
            activty,
            activtys,
            activtyList,
            view,
            viewItem,
            historyTop,
            historyList,
        }
    }
})
app.mount('#app')