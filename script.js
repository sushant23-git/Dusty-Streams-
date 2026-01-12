// ===== Configuration =====
const CONFIG = {
    // TMDB API Keys Pool
    TMDB_API_KEYS: [
        'fb7bb23f03b6994dafc674c074d01761',
        'e55425032d3d0f371fc776f302e7c09b',
        '8301a21598f8b45668d5711a814f01f6',
        '8cf43ad9c085135b9479ad5cf6bbcbda',
        'da63548086e399ffc910fbc08526df05',
        '13e53ff644a8bd4ba37b3e1044ad24f3',
        '269890f657dddf4635473cf4cf456576',
        'a2f888b27315e62e471b2d587048f32e',
        '8476a7ab80ad76f0936744df0430e67c',
        '5622cafbfe8f8cfe358a29c53e19bba0',
        'ae4bd1b6fce2a5648671bfc171d15ba4',
        '257654f35e3dff105574f97fb4b97035',
        '2f4038e83265214a0dcd6ec2eb3276f5',
        '9e43f45f94705cc8e1d5a0400d19a7b7',
        'af6887753365e14160254ac7f4345dd2',
        '06f10fc8741a672af455421c239a1ffc',
        '09ad8ace66eec34302943272db0e8d2c'
    ],
    TMDB_BASE_URL: 'https://api.themoviedb.org/3',
    TMDB_IMAGE_BASE: 'https://image.tmdb.org/t/p',
    // Using vidsrc.xyz - cleaner player with minimal/no ads
    EMBED_BASE_URL: 'https://vidsrc.xyz/embed',
    USE_MOCK_DATA: false // Set to true to use mock data only
};

// Get a random TMDB API key from the pool
function getTMDBApiKey() {
    return CONFIG.TMDB_API_KEYS[Math.floor(Math.random() * CONFIG.TMDB_API_KEYS.length)];
}

// ===== Mock Data (for demo when API key is not set) =====
const MOCK_DATA = {
    trending: [
        { id: 693134, title: "Dune: Part Two", overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.", poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg", backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", vote_average: 8.3, release_date: "2024-02-27", media_type: "movie" },
        { id: 1022789, title: "Inside Out 2", overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions!", poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", backdrop_path: "/p5ozvmdgsmbWe0H8Xk7Rc8IXXQE.jpg", vote_average: 7.6, release_date: "2024-06-11", media_type: "movie" },
        { id: 94997, name: "House of the Dragon", overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most combatively they pose a threat to any enemy.", poster_path: "/7QMsOTMUSwAV0L9puvmJLRUyDMy.jpg", backdrop_path: "/9mWnX1zz8zHj6LjbYBYTJPZl2Wk.jpg", vote_average: 8.4, first_air_date: "2022-08-21", media_type: "tv" },
        { id: 124364, name: "Fallout", overview: "The story of haves and have-nots in a world in which there's almost nothing left to have. 200 years after the apocalypse, the gentle denizens of luxury fallout shelters are forced to return to the irradiated hellscape their ancestors left behind.", poster_path: "/98G7e0FsS9gcBuxnTFMBqPHzGwH.jpg", backdrop_path: "/rqbCbjB19amtOtFQbb3K2lgm2Lc.jpg", vote_average: 8.5, first_air_date: "2024-04-10", media_type: "tv" },
        { id: 653346, title: "Kingdom of the Planet of the Apes", overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows.", poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg", vote_average: 7.1, release_date: "2024-05-08", media_type: "movie" },
        { id: 823464, title: "Godzilla x Kong: The New Empire", overview: "Following their fruit victory against Mechagodzilla, Godzilla and Kong are again exploring humanity in this latest epic.", poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg", backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg", vote_average: 7.2, release_date: "2024-03-27", media_type: "movie" },
        { id: 533535, title: "Deadpool & Wolverine", overview: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him.", poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg", vote_average: 7.7, release_date: "2024-07-24", media_type: "movie" },
        { id: 718821, title: "Twisters", overview: "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide.", poster_path: "/pjnD08FlMAIXsfOLKQbKmH9xDdE.jpg", backdrop_path: "/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg", vote_average: 7.0, release_date: "2024-07-10", media_type: "movie" },
        { id: 209867, name: "The Penguin", overview: "After the events of The Batman (2022), Oswald Cobblepot goes on to take control of Gotham City's criminal underworld.", poster_path: "/rCHxMIpzK8P8PpE8W3wdH8yMN2J.jpg", backdrop_path: "/7E9OC7JGfQPjWLdvlMVqQOCBLkA.jpg", vote_average: 8.6, first_air_date: "2024-09-19", media_type: "tv" },
        { id: 1091181, title: "Family Pack", overview: "When an old card game comes to life, a family jumps back in time to a medieval village where they must unmask werewolves to return to the present.", poster_path: "/nWr4wfBLfbFJ1G8WBFNFLj9Rl2A.jpg", backdrop_path: "/oGythE98MYleE6mZlEs5KokyDRb.jpg", vote_average: 5.9, release_date: "2024-10-30", media_type: "movie" }
    ],
    movies: [
        { id: 693134, title: "Dune: Part Two", overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen.", poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg", backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", vote_average: 8.3, release_date: "2024-02-27", media_type: "movie" },
        { id: 1022789, title: "Inside Out 2", overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected.", poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", backdrop_path: "/p5ozvmdgsmbWe0H8Xk7Rc8IXXQE.jpg", vote_average: 7.6, release_date: "2024-06-11", media_type: "movie" },
        { id: 653346, title: "Kingdom of the Planet of the Apes", overview: "Several generations in the future following Caesar's reign, apes are now the dominant species.", poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg", vote_average: 7.1, release_date: "2024-05-08", media_type: "movie" },
        { id: 823464, title: "Godzilla x Kong: The New Empire", overview: "Following their fruit victory against Mechagodzilla, Godzilla and Kong are again exploring.", poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg", backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg", vote_average: 7.2, release_date: "2024-03-27", media_type: "movie" },
        { id: 533535, title: "Deadpool & Wolverine", overview: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary.", poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg", vote_average: 7.7, release_date: "2024-07-24", media_type: "movie" },
        { id: 718821, title: "Twisters", overview: "As storm season intensifies, the paths of former storm chaser Kate Carter collide.", poster_path: "/pjnD08FlMAIXsfOLKQbKmH9xDdE.jpg", backdrop_path: "/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg", vote_average: 7.0, release_date: "2024-07-10", media_type: "movie" },
        { id: 1091181, title: "Family Pack", overview: "When an old card game comes to life, a family jumps back in time to a medieval village.", poster_path: "/nWr4wfBLfbFJ1G8WBFNFLj9Rl2A.jpg", backdrop_path: "/oGythE98MYleE6mZlEs5KokyDRb.jpg", vote_average: 5.9, release_date: "2024-10-30", media_type: "movie" },
        { id: 1011985, title: "Kung Fu Panda 4", overview: "Po is gearing up to become the spiritual leader of his Valley of Peace.", poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg", backdrop_path: "/lKaHpNECJnp6C6bD8MpBdJ1x7G3.jpg", vote_average: 7.1, release_date: "2024-03-02", media_type: "movie" },
        { id: 929590, title: "Civil War", overview: "In the near future, a group of war journalists attempt to survive while reporting the truth.", poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg", backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg", vote_average: 7.0, release_date: "2024-04-10", media_type: "movie" },
        { id: 940551, title: "Migration", overview: "A family of ducks try to convince their overprotective father to go on the vacation of a lifetime.", poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg", backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg", vote_average: 7.5, release_date: "2023-12-06", media_type: "movie" }
    ],
    tvShows: [
        { id: 94997, name: "House of the Dragon", overview: "The Targaryen dynasty is at the absolute apex of its power.", poster_path: "/7QMsOTMUSwAV0L9puvmJLRUyDMy.jpg", backdrop_path: "/9mWnX1zz8zHj6LjbYBYTJPZl2Wk.jpg", vote_average: 8.4, first_air_date: "2022-08-21", media_type: "tv" },
        { id: 124364, name: "Fallout", overview: "200 years after the apocalypse, the gentle denizens of luxury fallout shelters are forced to return.", poster_path: "/98G7e0FsS9gcBuxnTFMBqPHzGwH.jpg", backdrop_path: "/rqbCbjB19amtOtFQbb3K2lgm2Lc.jpg", vote_average: 8.5, first_air_date: "2024-04-10", media_type: "tv" },
        { id: 209867, name: "The Penguin", overview: "Oswald Cobblepot goes on to take control of Gotham City's criminal underworld.", poster_path: "/rCHxMIpzK8P8PpE8W3wdH8yMN2J.jpg", backdrop_path: "/7E9OC7JGfQPjWLdvlMVqQOCBLkA.jpg", vote_average: 8.6, first_air_date: "2024-09-19", media_type: "tv" },
        { id: 1399, name: "Game of Thrones", overview: "Seven noble families fight for control of the mythical land of Westeros.", poster_path: "/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg", backdrop_path: "/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg", vote_average: 8.4, first_air_date: "2011-04-17", media_type: "tv" },
        { id: 1396, name: "Breaking Bad", overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.", poster_path: "/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg", backdrop_path: "/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg", vote_average: 8.9, first_air_date: "2008-01-20", media_type: "tv" },
        { id: 66732, name: "Stranger Things", overview: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.", poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg", vote_average: 8.6, first_air_date: "2016-07-15", media_type: "tv" },
        { id: 100088, name: "The Last of Us", overview: "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie.", poster_path: "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", backdrop_path: "/9GAJrB6y3L2i2u2dSLsXcjbIhDO.jpg", vote_average: 8.6, first_air_date: "2023-01-15", media_type: "tv" },
        { id: 82856, name: "The Mandalorian", overview: "The travels of a lone bounty hunter in the outer reaches of the galaxy.", poster_path: "/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", backdrop_path: "/9ijMGlJKqcslswWUzTEwScm82Gs.jpg", vote_average: 8.5, first_air_date: "2019-11-12", media_type: "tv" },
        { id: 1402, name: "The Walking Dead", overview: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins.", poster_path: "/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg", backdrop_path: "/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg", vote_average: 8.1, first_air_date: "2010-10-31", media_type: "tv" },
        { id: 60059, name: "Better Call Saul", overview: "The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office.", poster_path: "/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg", backdrop_path: "/9JBGKhzxFr1rCKMsuSNLrW6mPqU.jpg", vote_average: 8.7, first_air_date: "2015-02-08", media_type: "tv" }
    ],
    mockTvDetails: {
        94997: { seasons: [{ season_number: 1, episode_count: 10 }, { season_number: 2, episode_count: 8 }] },
        124364: { seasons: [{ season_number: 1, episode_count: 8 }] },
        209867: { seasons: [{ season_number: 1, episode_count: 8 }] },
        1399: { seasons: [{ season_number: 1, episode_count: 10 }, { season_number: 2, episode_count: 10 }, { season_number: 3, episode_count: 10 }, { season_number: 4, episode_count: 10 }, { season_number: 5, episode_count: 10 }, { season_number: 6, episode_count: 10 }, { season_number: 7, episode_count: 7 }, { season_number: 8, episode_count: 6 }] },
        1396: { seasons: [{ season_number: 1, episode_count: 7 }, { season_number: 2, episode_count: 13 }, { season_number: 3, episode_count: 13 }, { season_number: 4, episode_count: 13 }, { season_number: 5, episode_count: 16 }] },
        66732: { seasons: [{ season_number: 1, episode_count: 8 }, { season_number: 2, episode_count: 9 }, { season_number: 3, episode_count: 8 }, { season_number: 4, episode_count: 9 }] },
        100088: { seasons: [{ season_number: 1, episode_count: 9 }] },
        82856: { seasons: [{ season_number: 1, episode_count: 8 }, { season_number: 2, episode_count: 8 }, { season_number: 3, episode_count: 8 }] },
        1402: { seasons: Array.from({ length: 11 }, (_, i) => ({ season_number: i + 1, episode_count: 16 })) },
        60059: { seasons: [{ season_number: 1, episode_count: 10 }, { season_number: 2, episode_count: 10 }, { season_number: 3, episode_count: 10 }, { season_number: 4, episode_count: 10 }, { season_number: 5, episode_count: 10 }, { season_number: 6, episode_count: 13 }] }
    }
};

// ===== State =====
let currentCategory = 'movie';
let currentItem = null;
let tvShowDetails = null;

// ===== DOM Elements =====
const elements = {
    // Hero
    heroBackdrop: document.getElementById('heroBackdrop'),
    heroTitle: document.getElementById('heroTitle'),
    heroDescription: document.getElementById('heroDescription'),
    heroRatingValue: document.getElementById('heroRatingValue'),
    heroYear: document.getElementById('heroYear'),
    heroPlayBtn: document.getElementById('heroPlayBtn'),
    heroBadge: document.getElementById('heroBadge'),

    // Grids
    trendingGrid: document.getElementById('trendingGrid'),
    moviesGrid: document.getElementById('moviesGrid'),
    tvGrid: document.getElementById('tvGrid'),
    searchGrid: document.getElementById('searchGrid'),

    // Sections
    trendingSection: document.getElementById('trendingSection'),
    moviesSection: document.getElementById('moviesSection'),
    tvSection: document.getElementById('tvSection'),
    searchSection: document.getElementById('searchSection'),

    // Search
    searchInput: document.getElementById('searchInput'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),
    searchBtn: document.getElementById('searchBtn'),

    // Modal
    videoModal: document.getElementById('videoModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalTitle: document.getElementById('modalTitle'),
    modalRating: document.getElementById('modalRating'),
    modalYear: document.getElementById('modalYear'),
    modalDescription: document.getElementById('modalDescription'),
    videoFrame: document.getElementById('videoFrame'),
    episodeSelector: document.getElementById('episodeSelector'),
    seasonSelect: document.getElementById('seasonSelect'),
    episodeSelect: document.getElementById('episodeSelect'),

    // Navigation
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileNav: document.getElementById('mobileNav'),

    // Loading
    loadingOverlay: document.getElementById('loadingOverlay'),

    // Header
    header: document.querySelector('.header')
};

// ===== API Functions =====
async function fetchFromTMDB(endpoint, params = {}) {
    // Use mock data if configured
    if (CONFIG.USE_MOCK_DATA) {
        return null;
    }

    const url = new URL(`${CONFIG.TMDB_BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', getTMDBApiKey());

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        return await response.json();
    } catch (error) {
        console.error('TMDB API Error:', error);
        return null;
    }
}

async function getTrending(mediaType = 'all', timeWindow = 'week') {
    const apiData = await fetchFromTMDB(`/trending/${mediaType}/${timeWindow}`);
    if (apiData) return apiData;

    // Return mock data
    let results = MOCK_DATA.trending;
    if (mediaType === 'movie') {
        results = MOCK_DATA.trending.filter(item => item.media_type === 'movie');
    } else if (mediaType === 'tv') {
        results = MOCK_DATA.trending.filter(item => item.media_type === 'tv');
    }
    return { results };
}

async function getPopularMovies() {
    const apiData = await fetchFromTMDB('/movie/popular');
    if (apiData) return apiData;
    return { results: MOCK_DATA.movies };
}

async function getPopularTVShows() {
    const apiData = await fetchFromTMDB('/tv/popular');
    if (apiData) return apiData;
    return { results: MOCK_DATA.tvShows };
}

async function searchMulti(query) {
    const apiData = await fetchFromTMDB('/search/multi', { query });
    if (apiData && apiData.results && apiData.results.length > 0) {
        return apiData;
    }

    // Mock search - filter through all data with improved matching
    const allContent = [...MOCK_DATA.trending, ...MOCK_DATA.movies, ...MOCK_DATA.tvShows];
    const searchLower = query.toLowerCase().trim();

    // Split search into words for better matching
    const searchWords = searchLower.split(/\s+/);

    const results = allContent.filter(item => {
        const title = (item.title || item.name || '').toLowerCase();
        const overview = (item.overview || '').toLowerCase();

        // Check if any search word matches title or overview
        return searchWords.some(word =>
            title.includes(word) || overview.includes(word)
        );
    });

    // Remove duplicates by ID and sort by relevance
    const uniqueResults = results.filter((item, index, self) =>
        index === self.findIndex(t => t.id === item.id)
    ).sort((a, b) => {
        // Prioritize title matches over overview matches
        const aTitle = (a.title || a.name || '').toLowerCase();
        const bTitle = (b.title || b.name || '').toLowerCase();
        const aTitleMatch = searchWords.some(word => aTitle.includes(word));
        const bTitleMatch = searchWords.some(word => bTitle.includes(word));
        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;
        return 0;
    });

    return { results: uniqueResults };
}

async function getTVShowDetails(tvId) {
    const apiData = await fetchFromTMDB(`/tv/${tvId}`);
    if (apiData) return apiData;

    // Return mock TV details
    return MOCK_DATA.mockTvDetails[tvId] || { seasons: [{ season_number: 1, episode_count: 10 }] };
}

// ===== Render Functions =====
function createContentCard(item) {
    const isMovie = item.media_type === 'movie' || item.title;
    const title = isMovie ? item.title : item.name;
    const releaseDate = isMovie ? item.release_date : item.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
    const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
    const posterPath = item.poster_path
        ? `${CONFIG.TMDB_IMAGE_BASE}/w342${item.poster_path}`
        : 'https://via.placeholder.com/342x513/1a1a1a/666?text=No+Image';

    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <div class="card-poster">
            <img src="${posterPath}" alt="${title}" loading="lazy">
            <div class="card-overlay">
                <div class="play-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21"></polygon>
                    </svg>
                </div>
            </div>
            <div class="card-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                </svg>
                ${rating}
            </div>
            <div class="card-type">${isMovie ? 'Movie' : 'TV'}</div>
        </div>
        <div class="card-info">
            <h3 class="card-title">${title}</h3>
            <div class="card-meta">
                <span>${year}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => navigateToWatch(item));
    return card;
}

// Navigate to dedicated watch page
function navigateToWatch(item) {
    // Store item in localStorage for the watch page
    localStorage.setItem('currentWatchItem', JSON.stringify(item));
    const type = item.media_type || (item.title ? 'movie' : 'tv');
    window.location.href = `watch.html?id=${item.id}&type=${type}`;
}

function renderContentGrid(container, items) {
    container.innerHTML = '';
    items.forEach(item => {
        // Filter out people from search results
        if (item.media_type !== 'person') {
            container.appendChild(createContentCard(item));
        }
    });
}

function renderSkeletons(container, count = 10) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'content-card skeleton';
        skeleton.innerHTML = `
            <div class="card-poster" style="background: var(--bg-glass);"></div>
            <div class="card-info">
                <div style="height: 18px; background: var(--bg-glass); border-radius: 4px; margin-bottom: 8px;"></div>
                <div style="height: 14px; background: var(--bg-glass); border-radius: 4px; width: 60%;"></div>
            </div>
        `;
        container.appendChild(skeleton);
    }
}

// ===== Hero Section =====
function updateHero(item) {
    const isMovie = item.media_type === 'movie' || item.title;
    const title = isMovie ? item.title : item.name;
    const releaseDate = isMovie ? item.release_date : item.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
    const backdropPath = item.backdrop_path
        ? `${CONFIG.TMDB_IMAGE_BASE}/original${item.backdrop_path}`
        : '';

    elements.heroBackdrop.style.backgroundImage = backdropPath ? `url(${backdropPath})` : 'none';
    elements.heroTitle.textContent = title;
    elements.heroDescription.textContent = item.overview || 'No description available.';
    elements.heroRatingValue.textContent = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
    elements.heroYear.textContent = year;
    elements.heroBadge.textContent = isMovie ? 'Featured Movie' : 'Featured Series';

    // Store current hero item for play button
    currentItem = item;
}

// ===== Video Modal =====
async function openVideoModal(item) {
    const isMovie = item.media_type === 'movie' || item.title;
    const title = isMovie ? item.title : item.name;
    const releaseDate = isMovie ? item.release_date : item.first_air_date;
    const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
    const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';

    // Update modal info
    elements.modalTitle.textContent = title;
    elements.modalRating.querySelector('span:last-child').textContent = rating;
    elements.modalYear.textContent = year;
    elements.modalDescription.textContent = item.overview || 'No description available.';

    currentItem = item;

    if (isMovie) {
        // Hide episode selector for movies
        elements.episodeSelector.classList.add('hidden');

        // Set video source
        const videoUrl = `${CONFIG.EMBED_BASE_URL}/movie/${item.id}`;
        elements.videoFrame.src = videoUrl;
    } else {
        // Show episode selector for TV shows
        elements.episodeSelector.classList.remove('hidden');

        // Fetch TV show details for seasons/episodes
        tvShowDetails = await getTVShowDetails(item.id);

        if (tvShowDetails && tvShowDetails.seasons) {
            // Populate seasons (filter out specials with season_number 0)
            const seasons = tvShowDetails.seasons.filter(s => s.season_number > 0);
            elements.seasonSelect.innerHTML = seasons.map(season =>
                `<option value="${season.season_number}">Season ${season.season_number}</option>`
            ).join('');

            // Set initial episodes
            updateEpisodes(seasons[0]?.episode_count || 10);

            // Load first episode
            updateVideoSource();
        }
    }

    // Show modal
    elements.videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateEpisodes(episodeCount) {
    elements.episodeSelect.innerHTML = '';
    for (let i = 1; i <= episodeCount; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Episode ${i}`;
        elements.episodeSelect.appendChild(option);
    }
}

function updateVideoSource() {
    if (!currentItem) return;

    const isMovie = currentItem.media_type === 'movie' || currentItem.title;

    if (isMovie) {
        elements.videoFrame.src = `${CONFIG.EMBED_BASE_URL}/movie/${currentItem.id}`;
    } else {
        const season = elements.seasonSelect.value;
        const episode = elements.episodeSelect.value;
        elements.videoFrame.src = `${CONFIG.EMBED_BASE_URL}/tv/${currentItem.id}/${season}-${episode}`;
    }
}

function closeVideoModal() {
    elements.videoModal.classList.remove('active');
    elements.videoFrame.src = '';
    document.body.style.overflow = '';
    tvShowDetails = null;
}

// ===== Search =====
let searchTimeout;

async function handleSearch(query) {
    if (!query || query.length < 2) {
        // Show default sections
        elements.trendingSection.style.display = 'block';
        elements.moviesSection.style.display = 'block';
        elements.tvSection.style.display = 'block';
        elements.searchSection.classList.add('hidden');
        return;
    }

    // Hide default sections, show search
    elements.trendingSection.style.display = 'none';
    elements.moviesSection.style.display = 'none';
    elements.tvSection.style.display = 'none';
    elements.searchSection.classList.remove('hidden');

    // Show loading
    renderSkeletons(elements.searchGrid, 12);

    const results = await searchMulti(query);

    if (results && results.results && results.results.length > 0) {
        renderContentGrid(elements.searchGrid, results.results);
    } else {
        elements.searchGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No results found</p>';
    }
}

function debounceSearch(query) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => handleSearch(query), 500);
}

// ===== Tab Filtering =====
function handleTabClick(e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const type = btn.dataset.type;
    const tabBtns = btn.parentElement.querySelectorAll('.tab-btn');

    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter trending content
    loadTrending(type);
}

async function loadTrending(type = 'all') {
    renderSkeletons(elements.trendingGrid, 10);

    let data;
    if (type === 'movie') {
        data = await getTrending('movie');
    } else if (type === 'tv') {
        data = await getTrending('tv');
    } else {
        data = await getTrending('all');
    }

    if (data && data.results) {
        renderContentGrid(elements.trendingGrid, data.results);

        // Update hero with first trending item
        if (type === 'all' && data.results.length > 0) {
            updateHero(data.results[0]);
        }
    }
}

// ===== Navigation =====
function handleNavClick(e) {
    const link = e.target.closest('.nav-link');
    if (!link) return;

    e.preventDefault();

    const category = link.dataset.category;
    if (!category) return;

    // Update active state
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll(`.nav-link[data-category="${category}"]`).forEach(l => l.classList.add('active'));

    // Close mobile nav
    elements.mobileNav.classList.remove('active');
    elements.mobileMenuBtn.classList.remove('active');

    // Clear search
    elements.searchInput.value = '';
    if (elements.mobileSearchInput) elements.mobileSearchInput.value = '';

    // Show all sections
    elements.searchSection.classList.add('hidden');
    elements.trendingSection.style.display = 'block';
    elements.moviesSection.style.display = 'block';
    elements.tvSection.style.display = 'block';

    // Scroll to appropriate section
    let targetSection;
    switch (category) {
        case 'movie':
            targetSection = elements.moviesSection;
            break;
        case 'tv':
            targetSection = elements.tvSection;
            break;
        case 'trending':
            targetSection = elements.trendingSection;
            break;
    }

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', (e) => debounceSearch(e.target.value));
    elements.searchBtn.addEventListener('click', () => handleSearch(elements.searchInput.value));
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch(e.target.value);
    });

    // Mobile search
    if (elements.mobileSearchInput) {
        elements.mobileSearchInput.addEventListener('input', (e) => debounceSearch(e.target.value));
        elements.mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(e.target.value);
                elements.mobileNav.classList.remove('active');
                elements.mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // Modal
    elements.modalClose.addEventListener('click', closeVideoModal);
    elements.modalOverlay.addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVideoModal();
    });

    // Hero play button
    elements.heroPlayBtn.addEventListener('click', () => {
        if (currentItem) navigateToWatch(currentItem);
    });

    // Season/Episode selectors
    elements.seasonSelect.addEventListener('change', () => {
        if (tvShowDetails) {
            const seasonNum = parseInt(elements.seasonSelect.value);
            const season = tvShowDetails.seasons.find(s => s.season_number === seasonNum);
            if (season) {
                updateEpisodes(season.episode_count || 10);
            }
        }
        updateVideoSource();
    });

    elements.episodeSelect.addEventListener('change', updateVideoSource);

    // Mobile menu
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileMenuBtn.classList.toggle('active');
        elements.mobileNav.classList.toggle('active');
    });

    // Navigation
    document.querySelectorAll('.nav, .mobile-nav-links, .footer-column').forEach(nav => {
        nav.addEventListener('click', handleNavClick);
    });

    // Tab filtering
    document.querySelector('.section-tabs').addEventListener('click', handleTabClick);

    // Scroll header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
    });
}

// ===== Check URL Search Params =====
function checkUrlSearchParams() {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search');
    if (searchQuery) {
        elements.searchInput.value = searchQuery;
        handleSearch(searchQuery);
    }
}

// ===== Initialize =====
async function init() {
    try {
        // Show loading
        elements.loadingOverlay.classList.remove('hidden');

        // Show skeleton loaders
        renderSkeletons(elements.trendingGrid, 10);
        renderSkeletons(elements.moviesGrid, 10);
        renderSkeletons(elements.tvGrid, 10);

        // Setup event listeners
        setupEventListeners();

        // Load content in parallel
        const [trendingData, moviesData, tvData] = await Promise.all([
            getTrending('all'),
            getPopularMovies(),
            getPopularTVShows()
        ]);

        // Render content
        if (trendingData && trendingData.results) {
            renderContentGrid(elements.trendingGrid, trendingData.results);
            // Set hero with first trending item
            if (trendingData.results.length > 0) {
                updateHero(trendingData.results[0]);
            }
        }

        if (moviesData && moviesData.results) {
            renderContentGrid(elements.moviesGrid, moviesData.results);
        }

        if (tvData && tvData.results) {
            renderContentGrid(elements.tvGrid, tvData.results);
        }

        // Check for search parameter in URL
        checkUrlSearchParams();

    } catch (error) {
        console.error('Initialization error:', error);
    } finally {
        // Hide loading
        elements.loadingOverlay.classList.add('hidden');
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
