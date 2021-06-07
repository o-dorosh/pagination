const ulTag = document.querySelector('.pagination-list')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let totalPages = 15

function element(totalPages, page) {
  let liTag = ''
  let startCount = page - 2
  let endCount = page + 2

  if (page > 1) {
    liTag += `<li class="btn-prev" onclick="element(totalPages, ${
      page - 1
    })"><svg class="arrow-left-icon" width="22" height="30"><use href="./sprite.svg#arrow-left"></use></svg></li>`
  }

  if (startCount < 1) {
    startCount = 1
  }

  if (endCount > totalPages) {
    endCount = totalPages
  }

  if (startCount + 5 >= totalPages) {
    startCount = totalPages - 5
  }

  if (page > 5 && totalPages > 5) {
    liTag += `<li onclick="element(totalPages, 1)">1</li>`
    liTag += `<span>...</span>`
  }

  for (let i = startCount; i <= endCount; i += 1) {
    liTag += `<li onclick="element(totalPages, ${i})" class="${
      page === i ? 'active' : ''
    }">${i}</li>`
  }

  if (totalPages > 5 && page < totalPages) {
    liTag += `<span>...</span>`
    liTag += `<li onclick="element(totalPages, totalPages)">${totalPages}</li>`
  }

  if (page < totalPages) {
    liTag += `<li class="btn-next"  onclick="element(totalPages, ${
      page + 1
    })"><svg class="arrow-right-icon" width="22" height="30"><use href="./sprite.svg#arrow-right"></use></svg></li>`
  }

  ulTag.innerHTML = liTag
}

element(totalPages, 1)
