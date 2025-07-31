const pageContent = document.getElementById('page-content');
    const pageButtons = document.querySelectorAll('.page-btn');
    const pagination = document.querySelector('.pagination');

    const totalPages = 8;
    let currentPage = 1;

    function renderContent(page) {
        pageContent.innerHTML = `<p>Содержимое страницы ${page}</p>`;
    }

    function updatePagination(newPage) {
        currentPage = newPage;
        pageButtons.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.page) === currentPage);
    });
    renderContent(currentPage);
    }

    pagination.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.matches('button')) return;

    const page = target.dataset.page;

    if (page === 'first') {
        updatePagination(1);
    } else if (page === 'prev') {
        if (currentPage > 1) updatePagination(currentPage - 1);
    } else if (page === 'next') {
        if (currentPage < totalPages) updatePagination(currentPage + 1);
    } else if (page === 'last') {
        updatePagination(totalPages);
    } else {
        updatePagination(parseInt(page));
    }
    });