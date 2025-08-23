
  const checkboxes = document.querySelectorAll(".goalCheck");
  const progressBar = document.getElementById("progressBar");
  function updateProgress() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    let percent = (checkedCount / checkboxes.length) * 100;
    progressBar.value = percent;
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateProgress);
  });