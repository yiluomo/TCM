const { onMounted, createApp } = Vue

const app = createApp({
    setup() {
        onMounted(() => {
            const searchInput = document.querySelector('.messageSearch .search input');
            if (searchInput) {
                searchInput.addEventListener('focus', () => {
                    searchInput.setAttribute('data-placeholder', searchInput.placeholder);
                    searchInput.placeholder = '';
                });
                searchInput.addEventListener('blur', () => {
                    if (searchInput.value === '') {
                        searchInput.placeholder = searchInput.getAttribute('data-placeholder');
                    }
                });
            }

            const questionBoxes = document.querySelectorAll('.question');

            questionBoxes.forEach(box => {
                box.addEventListener('click', () => {
                    if (box.classList.contains('active')) {
                        box.classList.remove('active');
                    } else {
                        questionBoxes.forEach(otherBox => {
                            otherBox.classList.remove('active');
                        });
                        box.classList.add('active');
                    }
                });
            });
        })
        return {
        }
    }
})

app.mount('#app')
