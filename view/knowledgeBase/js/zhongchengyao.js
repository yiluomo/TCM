function handleClick() {
  const ques = document.querySelectorAll('.question')
  ques.forEach(item => {
    item.addEventListener('click', () => {

      if (item.classList.contains('active')) {
        item.classList.remove('active')
        return
      }


      ques.forEach(item => {
        item.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  handleClick()
})