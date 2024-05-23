/* main page - JS */
/* main page - JS */
const resetButton = document.getElementById('resetbtn');

// 초기화 버튼에 클릭 이벤트 핸들러를 추가합니다.
resetButton.addEventListener('click', function() {
  // 모든 네모박스 체크를 해제합니다.
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
});


const checkbox = document.getElementById('checkbox');
const list = document.getElementById('skincare');

/**체크박스 체크했을 때 뜨는 부분 */

document.getElementById('skincare').addEventListener('change', function() {
    var categoryFilter = document.querySelector('.category-filter');
    if (this.checked) {
        categoryFilter.style.display = 'block';
    } else {
        categoryFilter.style.display = 'none';
    }
});
document.getElementById('lux').addEventListener('change', function() {
    var categoryFilter = document.querySelector('.category-filter');
    if (this.checked) {
        categoryFilter.style.display = 'block';
    } else {
        categoryFilter.style.display = 'none';
    }
});
document.getElementById('checkbox').addEventListener('change', function() {
    var categoryFilter = document.querySelector('.category-filter');
    if (this.checked) {
        categoryFilter.style.display = 'block';
    } else {
        categoryFilter.style.display = 'none';
    }
});

checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
        anyCheckboxChecked = true;
    }
});

/*여기 아래로만 건드리기*/

function updateCategoryFilter() {
  // 선택된 체크박스 찾기
  const selectedCheckbox = document.querySelector('input[name="category"]:checked');
  
  if (selectedCheckbox) {
    // 선택된 체크박스의 레이블 텍스트 가져오기
    const label = document.querySelector(`label[for="${selectedCheckbox.id}"]`).textContent;
    const caption = selectedCheckbox.nextElementSibling.nextElementSibling.textContent;

    // 텍스트 필터 업데이트
    document.querySelector('.text-categoryfilter').textContent = label;

    
    // 총 건수 업데이트
    document.querySelector('.le').textContent = `총 ${caption}건`;
    // 카테고리 필터 표시
    document.querySelector('.category-filter').style.display = 'flex';
  } else {
    // 선택된 체크박스가 없으면 카테고리 필터 숨기기
    document.querySelector('.category-filter').style.display = 'none';
    document.querySelector('.text-categoryfilter').textContent = '';
    document.querySelector('.le').textContent = '총 588건'; 
  }
}

function clearCategoryFilter() {
  // 체크된 체크박스를 해제
  const selectedCheckbox = document.querySelector('input[name="category"]:checked');
  if (selectedCheckbox) {
    selectedCheckbox.checked = false;
  }

  // 카테고리 필터 숨기기
  document.querySelector('.category-filter').style.display = 'none';
  document.querySelector('.text-categoryfilter').textContent = '';
  document.querySelector('.le').textContent = '총 588건'; 
}

// 각 체크박스에 이벤트 리스너 추가
const checkboxes = document.querySelectorAll('input[name="category"]');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', updateCategoryFilter);
});

/** */


document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[name="category"]');
  const textCategoryFilter = document.getElementById('text-categoryfilter');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTextCategoryFilter);
  });

  function updateTextCategoryFilter() {
    const selectedCategories = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
          selectedCategories.push(label.textContent);
        }
      }
    });
    textCategoryFilter.value = selectedCategories.join(', ');
  }
});

/**총합 */

document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('input[name="category"]');
  const totalDisplay = document.querySelector('.le');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotal);
  });

  function updateTotal() {
    let totalCaption = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        totalCaption += parseInt(checkbox.getAttribute('data-caption'));
      }
    });
    totalDisplay.textContent = `총 합산 값: ${totalCaption}`;
  }

  // 초기화 버튼 클릭 시 체크박스 해제 및 총합 초기화
  document.getElementById('resetbtn').addEventListener('click', function() {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    updateTotal();
  });
});

/* 여기 위까지 각각 카테고리 설정 완료*/

function updateCategoryFilter() {
    let checkboxes = document.querySelectorAll('input[name="category"]:checked');
    let sum = 0;
    let selectedCategories = [];
  
    checkboxes.forEach((checkbox) => {
      sum += parseInt(checkbox.getAttribute('data-caption'));
      selectedCategories.push(checkbox.nextElementSibling.textContent.trim());
    });
  
    if (selectedCategories.length === 0) {
      document.querySelector('.le').textContent = "총 588건";
    } else {
      document.querySelector('.le').textContent = `총 ${sum}건`;
    }
  
    document.querySelector('.text-categoryfilter').innerHTML = selectedCategories.join(', ');
  }
  
  function resetCheckbox() {
    let checkboxes = document.querySelectorAll('input[name="category"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  
    updateCategoryFilter();
  }
  
  function clearCategoryFilter() {
    let checkboxes = document.querySelectorAll('input[name="category"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  
    updateCategoryFilter();
  }
  

/**여기 아래로는 삭제 버튼 개별적으로 구현이... 되기를!!!*/


document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.getElementById('resetbtn');
    const checkboxes = document.querySelectorAll('input[name="category"]');
    const categoryFilterContainer = document.querySelector('.category-filter-container');
    const totalDisplay = document.querySelector('.le');
  
    // 초기화 버튼 클릭 시 체크박스 해제 및 총합 초기화
    resetButton.addEventListener('click', function() {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      updateCategoryFilter();
    });
  
    // 각 체크박스에 이벤트 리스너 추가
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateCategoryFilter);
    });
  
    function updateCategoryFilter() {
      let sum = 0;
      let selectedCategories = [];
  
      // 현재 선택된 필터 요소들을 모두 제거
      categoryFilterContainer.innerHTML = '';
  
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          sum += parseInt(checkbox.getAttribute('data-caption'));
          const label = checkbox.nextElementSibling.textContent.trim();
          selectedCategories.push(label);
  
          // 선택된 필터를 개별적으로 추가
          const filterElement = document.createElement('div');
          filterElement.classList.add('selected-filter');
  
          // 필터 텍스트 추가
          const filterText = document.createElement('span');
          filterText.textContent = label;
  
          // 개별 취소 버튼 추가
          const cancelButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          cancelButton.setAttribute('class', 'cancel');
          cancelButton.setAttribute('width', '20');
          cancelButton.setAttribute('height', '20');
          cancelButton.setAttribute('viewBox', '0 0 20 20');
          cancelButton.setAttribute('fill', 'none');
          cancelButton.innerHTML = `
            <path d="M9.99967 11.1668L5.91634 15.2502C5.76356 15.4029 5.56912 15.4793 5.33301 15.4793C5.0969 15.4793 4.90245 15.4029 4.74967 15.2502C4.5969 15.0974 4.52051 14.9029 4.52051 14.6668C4.52051 14.4307 4.5969 14.2363 4.74967 14.0835L8.83301 10.0002L4.74967 5.91683C4.5969 5.76405 4.52051 5.56961 4.52051 5.3335C4.52051 5.09738 4.5969 4.90294 4.74967 4.75016C4.90245 4.59738 5.0969 4.521 5.33301 4.521C5.56912 4.521 5.76356 4.59738 5.91634 4.75016L9.99967 8.8335L14.083 4.75016C14.2358 4.59738 14.4302 4.521 14.6663 4.521C14.9025 4.521 15.0969 4.59738 15.2497 4.75016C15.4025 4.90294 15.4788 5.09738 15.4788 5.3335C15.4788 5.56961 15.4025 5.76405 15.2497 5.91683L11.1663 10.0002L15.2497 14.0835C15.4025 14.2363 15.4788 14.4307 15.4788 14.6668C15.4788 14.9029 15.4025 15.0974 15.2497 15.2502C15.0969 15.4029 14.9025 15.4793 14.6663 15.4793C14.4302 15.4793 14.2358 15.4029 14.083 15.2502L9.99967 11.1668Z" fill="#DDDDDD"/>
          `;
  
          // 취소 버튼 클릭 시 체크 해제 및 필터 제거
          cancelButton.addEventListener('click', function() {
            checkbox.checked = false;
            updateCategoryFilter();
          });
  
          filterElement.appendChild(filterText);
          filterElement.appendChild(cancelButton);
          categoryFilterContainer.appendChild(filterElement);
        }
      });
  
      if (sum === 0) {
        totalDisplay.textContent = '총 588건';
      } else {
        totalDisplay.textContent = `총 ${sum}건`;
      }
    }
  
    function clearCategoryFilter() {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      updateCategoryFilter();
    }
    
    // 초기화 버튼 클릭 시 clearCategoryFilter 함수를 호출
    document.querySelector('.reset').addEventListener('click', clearCategoryFilter);
  });
  