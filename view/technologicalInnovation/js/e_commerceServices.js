const { createApp, ref, computed } = Vue


const app = createApp({


    setup() {
        // 每页显示3个商品
        const itemsPerPage = 3; 
        // 当前页码
        const currentPage = ref(1);
        const commounidys = ref([
            {
                name: '宁夏枸杞 头茬红枸杞子 256g*2袋',
                sprice: '￥12.6',
                img: 'commounidy1.png'
            },
            {
                name: '金丝皇菊胎贡菊花一罐',
                sprice: '￥12.6',
                img: 'commounidy2.png'
            },
            {
                name: '新疆红枣',
                sprice: '￥12.6',
                img: 'commounidy3.png'
            },
            {
                name: '宁夏枸杞 头茬红枸杞子 256g*2袋',
                sprice: '￥12.6',
                img: 'commounidy1.png'
            },
            {
                name: '金丝皇菊胎贡菊花一罐',
                sprice: '￥12.6',
                img: 'commounidy2.png'
            },
            {
                name: '新疆红枣',
                sprice: '￥12.6',
                img: 'commounidy3.png'
            },
            {
                name: '宁夏枸杞 头茬红枸杞子 256g*2袋',
                sprice: '￥12.6',
                img: 'commounidy1.png'
            },
            {
                name: '金丝皇菊胎贡菊花一罐',
                sprice: '￥12.6',
                img: 'commounidy2.png'
            },
            {
                name: '新疆红枣',
                sprice: '￥12.6',
                img: 'commounidy3.png'
            },
        ])
        // 计算总页数
        const totalPages = computed(() => {
            return Math.ceil(commounidys.value.length / itemsPerPage);
        });
        // 获取当前页显示的商品
        const currentPageItems = computed(() => {
            const startIndex = (currentPage.value - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return commounidys.value.slice(startIndex, endIndex);
        });
        
        // 动画状态
        const animationClass = ref('');
        
        // 上一页
        function prevPage() {
            if (currentPage.value > 1) {
                animationClass.value = 'slide-right';
                setTimeout(() => {
                    currentPage.value--;
                    animationClass.value = 'slide-right-enter';
                    setTimeout(() => {
                        animationClass.value = '';
                    }, 300);
                }, 10);
            }
        }
        
        // 下一页
        function nextPage() {
            if (currentPage.value < totalPages.value) {
                animationClass.value = 'slide-left';
                setTimeout(() => {
                    currentPage.value++;
                    animationClass.value = 'slide-left-enter';
                    setTimeout(() => {
                        animationClass.value = '';
                    }, 300);
                }, 10);
            }
        }
        
        // 跳转到指定页
        function goToPage(page) {
            // 根据页面跳转方向设置不同的动画
            if (page > currentPage.value) {
                animationClass.value = 'slide-left';
            } else if (page < currentPage.value) {
                animationClass.value = 'slide-right';
            }
            
            setTimeout(() => {
                currentPage.value = page;
                animationClass.value = page > currentPage.value ? 'slide-left-enter' : 'slide-right-enter';
                setTimeout(() => {
                    animationClass.value = '';
                }, 300);
            }, 10);
        }
        
        // 动态图片导入函数
        function getImg(img) {
            return `./img/es_img/${img}`
        }
        const books = ref([
            {
                summary: '正版全套3册黄帝内经+本草纲目+易经 古典国学名著',
                sprice: '￥9.6',
                img: 'book1.png'
            },
            {
                summary: '中医自学百日通学习中医诊断中医基础理论中医学黄帝内经本草纲目中医药入门医学全书中医诊断学三个月学懂中医入门知识书籍大全',
                sprice: '￥9.6',
                img: 'book2.png'
            },
            {
                summary: '正版全套3册黄帝内经+本草纲目+易经 古典国学名著',
                sprice: '￥9.6',
                img: 'book3.png'
            },
            {
                summary: '正版全套3册黄帝内经+本草纲目+易经 古典国学名著',
                sprice: '￥9.6',
                img: 'book4.png'
            },
            {
                summary: '正版全套3册黄帝内经+本草纲目+易经 古典国学名著',
                sprice: '￥9.6',
                img: 'book5.png'
            },
            {
                summary: '正版全套3册黄帝内经+本草纲目+易经 古典国学名著',
                sprice: '￥9.6',
                img: 'book6.png'
            },
            {
                summary: '正版全套3册黄帝内经+本草纲目+易经 古典国学名著',
                sprice: '￥9.6',
                img: 'book7.png'
            },
        ])
        const lastBook = computed(() => {
            return books.value[books.value.length - 1]
        })

        return {
            commounidys,
            currentPageItems,
            currentPage,
            totalPages,
            animationClass,
            books,
            lastBook,
            getImg,
            prevPage,
            nextPage,
            goToPage
        }
    }
})

app.mount('#app')