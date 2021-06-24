//append classes to existing accordion class
document.querySelectorAll('.accordion-item').forEach(item => {
    const accordionCollapse = item.getElementsByClassName('accordion-collapse')[0]
    const contentHeight = accordionCollapse.clientHeight
    accordionCollapse.style.height = '0px'
    item.addEventListener('click', () => {
        
        //accordion is closed
        if (!item.classList.contains('open')) {
            console.log('op: open')

            item.classList.toggle('open')
            console.log(contentHeight)

            accordionCollapse.style.height = contentHeight + 'px'
           
            return
        }
        //accordion is open
        if (item.classList.contains('open')) {
            accordionCollapse.style.height = '0px'
            item.classList.toggle('open')
        }

        //accordion is in transition
        return
    })
  })