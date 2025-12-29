document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
    const products = document.querySelectorAll('.posts article');
    const comparisonTables = document.querySelectorAll('.comparison-table-container');
    const dropdowns = document.querySelectorAll('.filter-dropdown');

    // Handle Main Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const dropdownParent = btn.closest('.filter-dropdown');

            if (dropdownParent) {
                // It's a dropdown toggle: Only toggle menu, don't filter
                
                // Close other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdownParent) d.classList.remove('active');
                });

                dropdownParent.classList.toggle('active');
            } else {
                // It's a regular filter button (All, Silver Tech)
                const filterValue = btn.getAttribute('data-filter');
                applyFilter(filterValue, 'all');
                updateActiveState(btn);
                
                // Close all dropdowns
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        });
    });

    // Handle Sub-Filter Buttons
    subFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling to the main button
            const parentCategory = btn.getAttribute('data-parent');
            const subCategory = btn.getAttribute('data-sub');
            
            applyFilter(parentCategory, subCategory);
            
            // Update Active State
            // Find the main button for this category
            const mainBtn = document.querySelector(`.filter-btn[data-filter="${parentCategory}"]`);
            if (mainBtn) updateActiveState(mainBtn);

            // Close the dropdown
            const dropdown = btn.closest('.filter-dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
                // Force close for hover state by briefly hiding it
                const content = dropdown.querySelector('.filter-dropdown-content');
                if (content) {
                    content.style.display = 'none';
                    setTimeout(() => {
                        content.style.display = '';
                    }, 100);
                }
            }
        });
    });

    function updateActiveState(activeBtn) {
        filterBtns.forEach(b => {
            b.classList.remove('primary');
            b.classList.remove('active');
        });
        activeBtn.classList.add('primary');
        activeBtn.classList.add('active');
    }

    function applyFilter(category, subCategory) {
        // Filter Products
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productSubCategory = product.getAttribute('data-subcategory');
            const productPriceLevel = product.getAttribute('data-price-level');

            let isVisible = false;

            if (category === 'all') {
                isVisible = true;
            } else if (category === 'budget') {
                if (subCategory === 'all' || !subCategory) {
                    isVisible = true;
                } else {
                    if (productPriceLevel === subCategory) {
                        isVisible = true;
                    }
                }
            } else if (productCategory && productCategory.split(' ').includes(category)) {
                if (subCategory === 'all' || !subCategory) {
                    isVisible = true;
                } else {
                    // Check subcategory (supports multiple values separated by space)
                    if (productSubCategory && productSubCategory.split(' ').includes(subCategory)) {
                        isVisible = true;
                    }
                }
            }

            if (isVisible) {
                product.style.display = 'flex';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'scale(1)';
                }, 10);
            } else {
                product.style.display = 'none';
                product.style.opacity = '0';
                product.style.transform = 'scale(0.95)';
            }
        });

        // Filter Comparison Tables
        comparisonTables.forEach(table => {
            if (category === 'all') {
                table.style.display = 'none';
            } else {
                if (table.getAttribute('data-category') === category) {
                    table.style.display = 'block';
                } else {
                    table.style.display = 'none';
                }
            }
        });
    }

    // Set "All" as primary initially
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) allBtn.classList.add('primary');
    
    // Dropdown Behavior
    dropdowns.forEach(dropdown => {
        // Close on mouse leave
        /* dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('active');
        }); */

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});