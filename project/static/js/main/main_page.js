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


