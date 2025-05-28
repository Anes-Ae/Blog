// Sample data for demonstration
const samplePosts = [
    {
        id: 1,
        title: 'معرفی فریم‌ورک React',
        excerpt: 'در این مقاله به بررسی ویژگی‌های فریم‌ورک React می‌پردازیم...',
        category: 'programming',
        date: '2024-03-15',
        author: 'علی محمدی',
        views: 1500,
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 2,
        title: 'آینده هوش مصنوعی',
        excerpt: 'بررسی روند پیشرفت هوش مصنوعی و تاثیر آن بر زندگی...',
        category: 'technology',
        date: '2024-03-10',
        author: 'سارا احمدی',
        views: 2000,
        image: 'https://via.placeholder.com/300x200'
    }
    // Add more sample posts as needed
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const dateFilter = document.getElementById('dateFilter');
const resultsGrid = document.querySelector('.results-grid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.querySelector('.no-results');

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortBy = sortFilter.value;
    const dateRange = dateFilter.value;

    let results = samplePosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
                            post.excerpt.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || post.category === category;
        const matchesDate = filterByDate(post.date, dateRange);

        return matchesSearch && matchesCategory && matchesDate;
    });

    // Sort results
    results = sortResults(results, sortBy);

    // Update UI
    displayResults(results);
}

// Date filter helper
function filterByDate(postDate, range) {
    if (!range) return true;

    const date = new Date(postDate);
    const now = new Date();
    const dayInMs = 24 * 60 * 60 * 1000;

    switch (range) {
        case 'today':
            return (now - date) < dayInMs;
        case 'week':
            return (now - date) < 7 * dayInMs;
        case 'month':
            return (now - date) < 30 * dayInMs;
        case 'year':
            return (now - date) < 365 * dayInMs;
        default:
            return true;
    }
}

// Sort helper
function sortResults(results, sortBy) {
    return results.sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'oldest':
                return new Date(a.date) - new Date(b.date);
            case 'popular':
                return b.views - a.views;
            default:
                return 0;
        }
    });
}

// Display results
function displayResults(results) {
    resultsCount.textContent = results.length;
    resultsGrid.innerHTML = '';

    if (results.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    results.forEach(post => {
        const postElement = createPostElement(post);
        resultsGrid.appendChild(postElement);
    });
}

// Create post element
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post-card';
    
    article.innerHTML = `
        <div class="post-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-content">
            <div class="post-category">${post.category}</div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="post-meta">
                <span><i class="far fa-user"></i> ${post.author}</span>
                <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                <span><i class="far fa-eye"></i> ${post.views} بازدید</span>
            </div>
            <a href="#" class="read-more">ادامه مطلب</a>
        </div>
    `;

    return article;
}

// Format date helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fa-IR', options);
}

// Event listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

[categoryFilter, sortFilter, dateFilter].forEach(filter => {
    filter.addEventListener('change', performSearch);
});

// Initial search
performSearch(); 