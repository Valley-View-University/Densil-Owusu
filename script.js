function getSelectedItems() {
    const selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedItemsArray = Array.from(selectedItems).map(item => item.value);
    
    // Display selected items (you can modify this part as needed)
    alert(`Selected items: ${selectedItemsArray.join(', ')}`);
}