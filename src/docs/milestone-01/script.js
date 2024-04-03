window.addEventListener('DOMContentLoaded', function() {
    function goToBottomOfPage() {
      document.body.style.backgroundColor = 'black';
    }
  
    const bottomButton = document.getElementById('bottomButton');
    if (bottomButton) {
      bottomButton.addEventListener('click', goToBottomOfPage);
    }
  });
  