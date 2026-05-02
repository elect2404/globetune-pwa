// --- i18n LOGIC ---
const translations = {
    en: {
        discover: "Discover",
        home: "Home",
        explore: "Explore",
        local_radio: "Local Radio",
        your_library: "Your Library",
        favorites: "Favorites",
        recents: "Recents",
        hero_title: "Tune in the world",
        hero_subtitle: "Discover thousands of live radio stations from anywhere.",
        listen_now: "Listen Now",
        popular_stations: "Popular Stations",
        languages: "By Languages",
        load_more: '<i class="ph ph-plus-circle"></i> <span>Load more</span>',
        search_placeholder: "Search stations, genres, countries...",
        no_station: "No station",
        select_station: "Select a station to listen",
        fetching_stations: "Fetching top stations...",
        no_stations_found: "No stations found.",
        detecting_zone: "Detecting zone...",
        search_results: "Search results",
        explore_top_voted: "Explore Top Voted",
        invalid_url: "This station doesn't have a valid URL.",
        cannot_play: "Could not play this station.",
        loading: "Loading...",
        no_notifications: "You have no new notifications.",
        profile_settings: "Profile Settings",
        username: "Username",
        username_placeholder: "e.g. Charlie",
        save: "Save",
        data_management: "Data Management",
        clear_recents: "Clear Recents",
        clear_favorites: "Clear Favorites",
        recents_cleared: "Recents cleared successfully.",
        favorites_cleared: "Favorites cleared successfully.",
        listener: "Listener",
        avatar: "Avatar",
        upload_photo: "Change Photo",
        avatar_too_large: "Image is too large. Please select a file under 2MB.",
        privacy: "Privacy",
        contact: "Contact",
        privacy_policy_title: "Privacy Policy",
        privacy_last_update: "Last updated: April 2026",
        back_to_radio: "← Back to Radio",
        privacy_s1_title: "1. Information we collect",
        privacy_s1_text: "Our application stores information strictly locally on your device (LocalStorage technology). This includes your favorite radio stations, your recently listened stations history, your configured username and your profile picture. <b>None of this data is sent to our servers or shared with third parties.</b> You have full control to clear this information from the profile panel at any time.",
        privacy_s2_title: "2. Use of Geolocation",
        privacy_s2_text: "We use public and anonymous services (geojs.io) to determine your approximate country based on your IP address. The sole purpose of this is to be able to automatically filter and show you relevant radio stations from your region in the 'Local Radio' section. We do not track, store or share your exact location.",
        privacy_s3_title: "3. Third-party Providers",
        privacy_s3_text: "This application works as a search engine and uses the free public Radio Browser API to list stations. We have no control over the audio broadcasts emitted by individual stations, their programming content or their own privacy policies. By listening to a station, you connect directly to the public servers of that radio.",
        privacy_s4_title: "4. Advertising (Google AdSense)",
        privacy_s4_text: "We partner with third-party advertising networks, such as Google AdSense, to show ads. Google uses cookies (including DoubleClick cookies) to serve ads based on your previous visits to this and other websites on the Internet. You can manage your privacy preferences and opt out of personalized advertising by visiting Google's Ad Settings or similar options in your browser.",
        privacy_s5_title: "5. Contact",
        privacy_s5_text: "If you have any questions about this Privacy Policy or the practices of this site, please contact us at the email provided in our Contact section.",
        contact_h1: "Contact",
        contact_intro: "We highly value the feedback of our listeners. If you have suggestions to improve the application, need to report a technical problem, or have professional inquiries, commercial alliances and sponsorships, we would love to hear from you.",
        contact_box_text: "Write to us directly at our email and we will respond as soon as possible:",
        seo_title: "RadioStream: Your Live Online Radio",
        seo_p1: "Welcome to RadioStream, the leading platform to listen to free online radio. Our app allows you to tune in to thousands of live radio stations from all continents.",
        seo_p2: "Whether you're looking for FM radio, pop music, jazz, rock, or local stations from your country, RadioStream offers the best user experience."
    },
    es: {
        discover: "Descubrir",
        home: "Inicio",
        explore: "Explorar",
        local_radio: "Radio Local",
        your_library: "Tu Biblioteca",
        favorites: "Favoritos",
        recents: "Recientes",
        hero_title: "Sintoniza el mundo",
        hero_subtitle: "Descubre miles de estaciones de radio en vivo desde cualquier lugar.",
        listen_now: "Escuchar Ahora",
        popular_stations: "Estaciones Populares",
        languages: "Por idiomas",
        load_more: '<i class="ph ph-plus-circle"></i> <span>Cargar más</span>',
        search_placeholder: "Buscar emisoras, géneros, países...",
        no_station: "Ninguna emisora",
        select_station: "Selecciona una emisora para escuchar",
        fetching_stations: "Obteniendo las mejores emisoras...",
        no_stations_found: "No se encontraron emisoras.",
        detecting_zone: "Detectando zona...",
        search_results: "Resultados de búsqueda",
        explore_top_voted: "Explorar Más Votadas",
        invalid_url: "Esta emisora no tiene una URL válida.",
        cannot_play: "No se pudo reproducir esta emisora.",
        loading: "Cargando...",
        no_notifications: "No tienes notificaciones nuevas en este momento.",
        profile_settings: "Configuración de Perfil",
        username: "Nombre de Usuario",
        username_placeholder: "Ej. Carlos",
        save: "Guardar",
        data_management: "Gestión de Datos",
        clear_recents: "Borrar Historial",
        clear_favorites: "Borrar Favoritos",
        recents_cleared: "Historial borrado exitosamente.",
        favorites_cleared: "Favoritos borrados exitosamente.",
        listener: "Oyente",
        avatar: "Foto de Perfil",
        upload_photo: "Cambiar Foto",
        avatar_too_large: "La imagen es muy grande. Por favor selecciona un archivo menor a 2MB.",
        privacy: "Privacidad",
        contact: "Contacto",
        privacy_policy_title: "Política de Privacidad",
        privacy_last_update: "Última actualización: Abril 2026",
        back_to_radio: "← Volver a la Radio",
        privacy_s1_title: "1. Información que recopilamos",
        privacy_s1_text: "Nuestra aplicación almacena información estrictamente de forma local en su dispositivo (tecnología LocalStorage). Esto incluye sus estaciones de radio favoritas, su historial de emisoras escuchadas recientemente, su nombre de usuario configurado y su foto de perfil. <b>Ninguno de estos datos se envía a nuestros servidores ni se comparte con terceros.</b> Usted tiene el control total para borrar esta información desde el panel de perfil en cualquier momento.",
        privacy_s2_title: "2. Uso de la Geolocalización",
        privacy_s2_text: "Utilizamos servicios públicos y anónimos (geojs.io) para determinar su país aproximado basándonos en su dirección IP. El único fin de esto es poder filtrar y mostrarle automáticamente emisoras de radio relevantes de su región en la sección \"Radio Local\". No rastreamos, almacenamos ni compartimos su ubicación exacta.",
        privacy_s3_title: "3. Proveedores de Terceros (Radios)",
        privacy_s3_text: "Esta aplicación funciona como un buscador y utiliza la API pública y gratuita de Radio Browser para listar emisoras. No tenemos control sobre las transmisiones de audio emitidas por las estaciones individuales, el contenido de su programación ni sus propias políticas de privacidad. Al escuchar una emisora, usted se conecta directamente a los servidores públicos de dicha radio.",
        privacy_s4_title: "4. Publicidad (Google AdSense)",
        privacy_s4_text: "Nos asociamos con redes publicitarias de terceros, como Google AdSense, para mostrar anuncios. Google utiliza cookies (incluidas las cookies de DoubleClick) para publicar anuncios basados en sus visitas anteriores a este y otros sitios web en Internet. Usted puede administrar sus preferencias de privacidad y optar por no participar en la publicidad personalizada visitando la Configuración de anuncios de Google u opciones similares en su navegador.",
        privacy_s5_title: "5. Contacto",
        privacy_s5_text: "Si tiene alguna pregunta sobre esta Política de Privacidad o las prácticas de este sitio, contáctenos al correo provisto en nuestra sección de Contacto.",
        contact_h1: "Contacto",
        contact_intro: "Valoramos enormemente el feedback de nuestros oyentes. Si tienes sugerencias para mejorar la aplicación, necesitas reportar un problema técnico, o tienes consultas profesionales, alianzas comerciales y patrocinios, nos encantaría escucharte.",
        contact_box_text: "Escríbenos directamente a nuestro correo electrónico y te responderemos a la mayor brevedad posible:"
    }
};

const userLang = (navigator.language || navigator.userLanguage).split('-')[0];
const lang = translations[userLang] ? userLang : 'en';

function t(key) {
    return translations[lang][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
}

// --- API LOGIC ---
const API_BASE = 'https://de1.api.radio-browser.info/json/stations';

// Fallback stations in case API fails or is blocked
const fallbackStations = [
    {
        name: "Lofi Radio",
        country: "Internet",
        tags: "lofi, chill, beats",
        favicon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Square_200x200.png/200px-Square_200x200.png",
        url_resolved: "https://streams.ilovemusic.de/iloveradio17.mp3"
    },
    {
        name: "Classic Rock Hits",
        country: "USA",
        tags: "rock, classic rock",
        favicon: "",
        url_resolved: "https://stream.cor.epa.gov/classicrock" // Example
    },
    {
        name: "BBC Radio 1",
        country: "UK",
        tags: "pop, news, top40",
        favicon: "",
        url_resolved: "http://stream.live.vc.bbcmedia.co.uk/bbc_radio_one"
    },
    {
        name: "Radio Clásica",
        country: "España",
        tags: "classical",
        favicon: "",
        url_resolved: "https://rtvelivestream.akamaized.net/rtvesec/rne/rne_clasica_main.m3u8"
    }
];

// Helper fetch with timeout
async function fetchWithTimeout(url, options = {}) {
    const { timeout = 5000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
}

async function fetchTopStations(limit = 60, offset = 0) {
    try {
        const response = await fetchWithTimeout(`${API_BASE}/search?limit=${limit}&offset=${offset}&order=clickcount&reverse=true&hidebroken=true&is_https=true`);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        console.warn('Using fallback stations due to error:', error);
        return fallbackStations;
    }
}

async function searchStations(query, limit = 60, offset = 0) {
    try {
        const q = query.toLowerCase().trim();
        let apiUrl = `${API_BASE}/search?name=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}&order=clickcount&reverse=true&hidebroken=true&is_https=true`;
        
        if (q === 'cuba') {
            apiUrl = `${API_BASE}/search?countrycode=CU&limit=${limit}&order=clickcount&reverse=true&hidebroken=true&is_https=true`;
        }

        const response = await fetchWithTimeout(apiUrl);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        return [];
    }
}

let userLocation = null;

async function getUserLocation() {
    if (userLocation) return userLocation;
    try {
        const geoRes = await fetchWithTimeout('https://get.geojs.io/v1/ip/geo.json', { timeout: 3000 });
        if (geoRes.ok) {
            userLocation = await geoRes.json();
            return userLocation;
        }
    } catch(e) {
        console.warn('Geolocation failed', e);
    }
    return null;
}

async function fetchLocalStations(limit = 60, offset = 0) {
    try {
        const loc = await getUserLocation();
        const langMap = { 'es': 'spanish', 'en': 'english', 'fr': 'french', 'de': 'german', 'it': 'italian', 'pt': 'portuguese' };
        const apiLang = langMap[userLang] || 'english';
        let url = `${API_BASE}/search?language=${apiLang}&limit=${limit}&offset=${offset}&order=clickcount&reverse=true&hidebroken=true&is_https=true`;
        if (loc && loc.country_code) {
            url = `${API_BASE}/search?countrycode=${loc.country_code}&limit=${limit}&offset=${offset}&order=clickcount&reverse=true&hidebroken=true&is_https=true`;
        }
        
        const response = await fetchWithTimeout(url);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        return fallbackStations;
    }
}

async function fetchExploreStations(limit = 60, offset = 0) {
    try {
        const response = await fetchWithTimeout(`${API_BASE}/search?limit=${limit}&offset=${offset}&order=votes&reverse=true&hidebroken=true&is_https=true`);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        return fallbackStations;
    }
}

async function fetchLanguages() {
    try {
        // Obtenemos idiomas ordenados por número de estaciones para mostrar los más relevantes
        const response = await fetchWithTimeout(`${API_BASE.replace('/stations', '/languages')}?order=stationcount&reverse=true&hidebroken=true`);
        if (!response.ok) throw new Error('API Error');
        const langs = await response.json();
        // Filtramos idiomas raros o vacíos y limitamos a los top 80
        return langs.filter(l => l.name && l.stationcount > 10).slice(0, 80);
    } catch (error) {
        return [
            {name: 'spanish', stationcount: 1000},
            {name: 'english', stationcount: 5000},
            {name: 'french', stationcount: 800},
            {name: 'german', stationcount: 1200},
            {name: 'italian', stationcount: 600},
            {name: 'portuguese', stationcount: 500}
        ];
    }
}

async function fetchStationsByLanguage(language, limit = 60, offset = 0) {
    try {
        const response = await fetchWithTimeout(`${API_BASE}/search?language=${encodeURIComponent(language)}&limit=${limit}&offset=${offset}&order=clickcount&reverse=true&hidebroken=true&is_https=true`);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        return [];
    }
}

// --- APP LOGIC ---
const stationsGrid = document.getElementById('stationsGrid');
const audioElement = document.getElementById('audioElement');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const playerTitle = document.getElementById('playerTitle');
const playerSubtitle = document.getElementById('playerSubtitle');
const playerImg = document.getElementById('playerImg');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const searchInput = document.getElementById('searchInput');

const navHome = document.getElementById('navHome');
const navExplore = document.getElementById('navExplore');
const navLocal = document.getElementById('navLocal');
const navLanguages = document.getElementById('navLanguages');
const navFavorites = document.getElementById('navFavorites');
const navRecents = document.getElementById('navRecents');
const sectionTitle = document.getElementById('sectionTitle');
const btnFavorite = document.getElementById('btnFavorite');
const btnViewAll = document.getElementById('btnViewAll');
const btnHeroPlay = document.getElementById('btnHeroPlay');
const btnProfile = document.getElementById('btnProfile');

// Profile Modal Elements
const profileModal = document.getElementById('profileModal');
const btnCloseProfile = document.getElementById('btnCloseProfile');
const inputUsername = document.getElementById('inputUsername');
const btnSaveUsername = document.getElementById('btnSaveUsername');
const btnClearRecents = document.getElementById('btnClearRecents');
const btnClearFavorites = document.getElementById('btnClearFavorites');
const displayUsername = document.getElementById('displayUsername');

const displayAvatar = document.getElementById('displayAvatar');
const modalAvatarPreview = document.getElementById('modalAvatarPreview');
const inputAvatarFile = document.getElementById('inputAvatarFile');
const btnUploadAvatar = document.getElementById('btnUploadAvatar');

let currentStations = [];
let activeStation = null;
let isPlaying = false;
let favorites = [];
let recents = [];
let pendingAvatar = null;
let currentLanguageFilter = null;
let currentOffset = 0;
const PAGE_SIZE = 60;
let lastVolume = 0.25;
const defaultAvatar = "https://i.pravatar.cc/150?img=11";

function loadStorage() {
    try {
        const favs = localStorage.getItem('radio_favorites');
        const recs = localStorage.getItem('radio_recents');
        if (favs) favorites = JSON.parse(favs);
        if (recs) recents = JSON.parse(recs);
    } catch (e) {
        console.error("Error loading from localStorage", e);
    }
}

function loadProfile() {
    const savedName = localStorage.getItem('radio_username');
    const defaultName = t('listener');
    if (displayUsername) {
        displayUsername.textContent = savedName || defaultName;
    }
    if (inputUsername && savedName) {
        inputUsername.value = savedName;
    }
    
    const savedAvatar = localStorage.getItem('radio_avatar');
    if (savedAvatar) {
        if(displayAvatar) displayAvatar.src = savedAvatar;
        if(modalAvatarPreview) modalAvatarPreview.src = savedAvatar;
    } else {
        if(displayAvatar) displayAvatar.src = defaultAvatar;
        if(modalAvatarPreview) modalAvatarPreview.src = defaultAvatar;
    }
    pendingAvatar = null;
}

function saveStorage() {
    try {
        localStorage.setItem('radio_favorites', JSON.stringify(favorites));
        localStorage.setItem('radio_recents', JSON.stringify(recents));
    } catch(e) {}
}

async function init() {
    applyTranslations();
    loadStorage();
    loadProfile();
    
    // Solo ejecutar lógica de la radio si estamos en la página principal
    if (stationsGrid) {
        try {
            renderLoading();
            currentOffset = 0;
            let topStations = await fetchTopStations(PAGE_SIZE, currentOffset);
            
            // Forzar iHeart80s Radio al principio si no está o moverla
            const featuredName = "iHeart80s Radio";
            let featuredStation = topStations.find(s => s.name === featuredName);
            
            if (!featuredStation) {
                // Si no está en los top iniciales, intentamos buscarla específicamente
                const searchRes = await searchStations(featuredName, 1);
                if (searchRes && searchRes.length > 0) {
                    featuredStation = searchRes[0];
                }
            }
            
            if (featuredStation) {
                // Eliminarla de su posición actual y ponerla al principio
                topStations = topStations.filter(s => s.stationuuid !== featuredStation.stationuuid);
                topStations.unshift(featuredStation);
            }

            currentStations = topStations;
            renderStations(currentStations);
            
            // Mostrar botón si hay exactamente PAGE_SIZE (asumimos que hay más)
            if(btnViewAll) {
                btnViewAll.parentElement.style.display = currentStations.length >= PAGE_SIZE ? 'flex' : 'none';
            }
            
            setupEventListeners();
        } catch (err) {
            if(stationsGrid) stationsGrid.innerHTML = '<div style="color:red">Error: ' + err.message + '</div>';
        }
    } else {
        // En páginas legales igual necesitamos los listeners básicos (perfil, etc si existieran)
        // Pero por ahora solo llamamos a setupEventListeners si hay botones del player
        if (btnPlayPause) setupEventListeners();
    }
}

function renderLoading() {
    if(stationsGrid) stationsGrid.innerHTML = `<div class="loading-spinner">${t('fetching_stations')}</div>`;
}

function renderStations(stations, append = false) {
    if (!stationsGrid) return;
    
    if (!stations || stations.length === 0) {
        if (!append) stationsGrid.innerHTML = `<div class="loading-spinner">${t('no_stations_found')}</div>`;
        return;
    }

    if (!append) stationsGrid.innerHTML = '';
    
    stations.forEach((station) => {
        const card = document.createElement('div');
        card.className = 'station-card';
        
        const faviconUrl = station.favicon ? station.favicon : '';
        const imgHtml = faviconUrl 
            ? `<img src="${faviconUrl}" alt="Radio" onerror="this.onerror=null; this.outerHTML='<i class=\\'ph ph-radio\\'></i>';">`
            : `<i class="ph ph-radio"></i>`;

        card.innerHTML = `
            <div class="station-img-container">
                ${imgHtml}
                <div class="play-overlay">
                    <i class="ph-fill ph-play-circle"></i>
                </div>
            </div>
            <div class="station-info">
                <h4>${station.name || 'Radio Station'}</h4>
                <p>${station.tags ? station.tags.split(',').slice(0, 2).join(', ') : (station.country || 'Radio Online')}</p>
            </div>
        `;

        card.addEventListener('click', () => playStation(station));
        stationsGrid.appendChild(card);
    });
}

function renderLanguages(languages) {
    if (!stationsGrid) return;
    stationsGrid.innerHTML = '';
    currentLanguageFilter = null;

    const langToCountry = {
        'spanish': 'es', 'english': 'gb', 'french': 'fr', 'german': 'de',
        'italian': 'it', 'portuguese': 'pt', 'russian': 'ru', 'chinese': 'cn',
        'japanese': 'jp', 'arabic': 'sa', 'hindi': 'in', 'dutch': 'nl',
        'greek': 'gr', 'turkish': 'tr', 'polish': 'pl', 'korean': 'kr',
        'swedish': 'se', 'danish': 'dk', 'finnish': 'fi', 'norwegian': 'no',
        'hebrew': 'il', 'vietnamese': 'vn', 'catalan': 'es-ct', 'basque': 'es-pv',
        'galician': 'es-ga', 'thai': 'th', 'indonesian': 'id', 'turkish': 'tr',
        'hungarian': 'hu', 'czech': 'cz', 'romanian': 'ro', 'ukrainian': 'ua',
        'albanian': 'al', 'armenian': 'am', 'azerbaijani': 'az', 'belarusian': 'by',
        'bosnian': 'ba', 'bulgarian': 'bg', 'croatian': 'hr', 'estonian': 'ee',
        'georgian': 'ge', 'icelandic': 'is', 'kazakh': 'kz', 'latvian': 'lv',
        'lithuanian': 'lt', 'macedonian': 'mk', 'maltese': 'mt', 'moldovan': 'md',
        'montenegrin': 'me', 'serbian': 'rs', 'slovak': 'sk', 'slovenian': 'si',
        'swedish': 'se', 'swiss': 'ch', 'welsh': 'gb-wls', 'esperanto': 'un',
        'bengali': 'bd', 'gujarati': 'in', 'kannada': 'in', 'malayalam': 'in',
        'marathi': 'in', 'nepali': 'np', 'punjabi': 'in', 'sinhala': 'lk',
        'tamil': 'in', 'telugu': 'in', 'urdu': 'pk', 'burmese': 'mm',
        'khmer': 'kh', 'lao': 'la', 'malay': 'my', 'tagalog': 'ph',
        'afrikaans': 'za', 'amharic': 'et', 'swahili': 'ke', 'yoruba': 'ng',
        'zulu': 'za', 'farsi': 'ir', 'pashto': 'af', 'kurmanji': 'tr',
        'latvian': 'lv', 'lithuanian': 'lt', 'mongolian': 'mn'
    };

    languages.forEach((langObj) => {
        const card = document.createElement('div');
        card.className = 'station-card language-card';
        
        const countryCode = langToCountry[langObj.name.toLowerCase()];
        const imgHtml = countryCode 
            ? `<img src="https://flagcdn.com/w160/${countryCode.toLowerCase()}.png" alt="${langObj.name}" style="width: 60%; height: auto; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">`
            : `<i class="ph ph-translate"></i>`;
        
        card.innerHTML = `
            <div class="station-img-container">
                ${imgHtml}
            </div>
            <div class="station-info">
                <h4>${langObj.name.charAt(0).toUpperCase() + langObj.name.slice(1)}</h4>
                <p>${langObj.stationcount} estaciones</p>
            </div>
        `;

        card.addEventListener('click', async () => {
            renderLoading();
            currentLanguageFilter = langObj.name;
            const title = langObj.name.charAt(0).toUpperCase() + langObj.name.slice(1);
            setActiveNav(navLanguages, `${t('languages')} > ${title}`);
            currentStations = await fetchStationsByLanguage(langObj.name, 150);
            renderStations(currentStations);
        });
        stationsGrid.appendChild(card);
    });
}

function playStation(station) {
    if (!station.url_resolved) {
        alert(t('invalid_url'));
        return;
    }

    activeStation = station;
    
    playerTitle.textContent = station.name || 'Radio Station';
    playerSubtitle.textContent = station.country || 'Radio Online';
    
    if (station.favicon) {
        playerImg.innerHTML = `<img src="${station.favicon}" alt="logo" onerror="this.onerror=null; this.outerHTML='<i class=\\'ph ph-radio\\'></i>';">`;
    } else {
        playerImg.innerHTML = '<i class="ph ph-radio"></i>';
    }

    addToRecents(station);
    updateFavoriteButton();
    updateMediaSession(station);

    audioElement.src = station.url_resolved;
    audioElement.play()
        .then(() => {
            isPlaying = true;
            updatePlayPauseButton();
        })
        .catch(err => {
            console.error("Error playing audio:", err);
            alert(t('cannot_play'));
            isPlaying = false;
            updatePlayPauseButton();
        });
}

function togglePlay() {
    if (!activeStation) return;

    if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
    } else {
        audioElement.play();
        isPlaying = true;
    }
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    if (isPlaying) {
        btnPlayPause.innerHTML = '<i class="ph-fill ph-pause-circle"></i>';
    } else {
        btnPlayPause.innerHTML = '<i class="ph-fill ph-play-circle"></i>';
    }
}

function addToRecents(station) {
    if (!station) return;
    recents = recents.filter(s => s.stationuuid !== station.stationuuid);
    recents.unshift(station);
    if (recents.length > 30) recents.pop();
    saveStorage();
}

function updateMediaSession(station) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: station.name,
            artist: station.country || 'Radio Online',
            album: 'GlobeTune',
            artwork: [
                { src: station.favicon || 'https://elect2404.github.io/globetune-pwa/icon-512.png', sizes: '512x512', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => { audioElement.play(); isPlaying = true; updatePlayPauseButton(); });
        navigator.mediaSession.setActionHandler('pause', () => { audioElement.pause(); isPlaying = false; updatePlayPauseButton(); });
    }
}

function updateFavoriteButton() {
    if (!activeStation) {
        btnFavorite.innerHTML = '<i class="ph ph-heart"></i>';
        btnFavorite.style.color = 'var(--primary)';
        return;
    }
    const isFav = favorites.some(s => s.stationuuid === activeStation.stationuuid);
    if (isFav) {
        btnFavorite.innerHTML = '<i class="ph-fill ph-heart"></i>';
        btnFavorite.style.color = '#ef4444';
    } else {
        btnFavorite.innerHTML = '<i class="ph ph-heart"></i>';
        btnFavorite.style.color = 'var(--primary)';
    }
}

function setActiveNav(activeElement, title) {
    if(navHome) navHome.classList.remove('active');
    if(navExplore) navExplore.classList.remove('active');
    if(navLocal) navLocal.classList.remove('active');
    if(navLanguages) navLanguages.classList.remove('active');
    if(navFavorites) navFavorites.classList.remove('active');
    if(navRecents) navRecents.classList.remove('active');
    
    if (activeElement) activeElement.classList.add('active');
    if (sectionTitle) sectionTitle.textContent = title;

    if(btnViewAll) {
        if (activeElement === navFavorites || activeElement === navRecents || (activeElement === navLanguages && !currentLanguageFilter)) {
            btnViewAll.parentElement.style.display = 'none';
        } else {
            btnViewAll.parentElement.style.display = 'flex';
            btnViewAll.innerHTML = t('load_more');
        }
    }

    // Sync mobile nav
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => item.classList.remove('active'));
    
    const navMap = {
        'navHome': 0,
        'navExplore': 1,
        'navLocal': 2,
        'navFavorites': 3
    };
    
    if (activeElement && navMap[activeElement.id] !== undefined) {
        mobileNavItems[navMap[activeElement.id]].classList.add('active');
    }
}

function setupEventListeners() {
    // Mobile Menu Toggle
    const btnMenuToggle = document.getElementById('btnMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (btnMenuToggle && sidebar && sidebarOverlay) {
        btnMenuToggle.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            sidebarOverlay.classList.add('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
            sidebarOverlay.classList.remove('active');
        });

        // Close sidebar when clicking a nav item on mobile
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                sidebar.classList.remove('mobile-open');
                sidebarOverlay.classList.remove('active');
            });
        });
    }

    if(btnPlayPause) btnPlayPause.addEventListener('click', togglePlay);

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (!currentStations || currentStations.length === 0) return;
            const validStations = currentStations.filter(s => s.url_resolved);
            if (validStations.length === 0) return;
            
            const index = activeStation ? validStations.findIndex(s => s.stationuuid === activeStation.stationuuid) : -1;
            if (index > -1) {
                const prevIndex = (index - 1 + validStations.length) % validStations.length;
                playStation(validStations[prevIndex]);
            } else {
                playStation(validStations[validStations.length - 1]);
            }
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (!currentStations || currentStations.length === 0) return;
            const validStations = currentStations.filter(s => s.url_resolved);
            if (validStations.length === 0) return;
            
            const index = activeStation ? validStations.findIndex(s => s.stationuuid === activeStation.stationuuid) : -1;
            if (index > -1) {
                const nextIndex = (index + 1) % validStations.length;
                playStation(validStations[nextIndex]);
            } else {
                playStation(validStations[0]);
            }
        });
    }

    if(volumeSlider) {
        if(audioElement) {
            audioElement.volume = volumeSlider.value;
        }

        volumeSlider.addEventListener('input', (e) => {
            const vol = e.target.value;
            if(audioElement) audioElement.volume = vol;
            if (vol == 0) volumeIcon.className = 'ph ph-speaker-none';
            else if (vol < 0.5) volumeIcon.className = 'ph ph-speaker-low';
            else volumeIcon.className = 'ph ph-speaker-high';
            
            if (vol > 0) lastVolume = vol;
        });

        if(volumeIcon) {
            volumeIcon.style.cursor = 'pointer';
            volumeIcon.addEventListener('click', () => {
                if (audioElement.volume > 0) {
                    lastVolume = audioElement.volume;
                    audioElement.volume = 0;
                    volumeSlider.value = 0;
                } else {
                    audioElement.volume = lastVolume || 0.25;
                    volumeSlider.value = lastVolume || 0.25;
                }
                // Trigger input event to update icon
                volumeSlider.dispatchEvent(new Event('input'));
            });
        }

        // Configurar icono inicial
        volumeSlider.dispatchEvent(new Event('input'));
    }

    let searchTimeout;
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            searchTimeout = setTimeout(async () => {
                if (query.length > 2) {
                    renderLoading();
                    setActiveNav(null, t('search_results'));
                    currentOffset = 0;
                    currentStations = await searchStations(query, PAGE_SIZE, currentOffset);
                    renderStations(currentStations);
                    if(btnViewAll) btnViewAll.parentElement.style.display = currentStations.length >= PAGE_SIZE ? 'flex' : 'none';
                } else if (query.length === 0) {
                    renderLoading();
                    setActiveNav(navHome, t('popular_stations'));
                    currentOffset = 0;
                    currentStations = await fetchTopStations(PAGE_SIZE, currentOffset);
                    renderStations(currentStations);
                    if(btnViewAll) btnViewAll.parentElement.style.display = currentStations.length >= PAGE_SIZE ? 'flex' : 'none';
                }
            }, 500);
        });
    }

    if(navHome) navHome.addEventListener('click', async (e) => {
        e.preventDefault();
        setActiveNav(navHome, t('popular_stations'));
        renderLoading();
        currentOffset = 0;
        currentStations = await fetchTopStations(PAGE_SIZE, currentOffset);
        renderStations(currentStations);
    });

    if(navExplore) navExplore.addEventListener('click', async (e) => {
        e.preventDefault();
        setActiveNav(navExplore, t('explore_top_voted'));
        renderLoading();
        currentOffset = 0;
        currentStations = await fetchExploreStations(PAGE_SIZE, currentOffset);
        renderStations(currentStations);
    });

    if(navLocal) navLocal.addEventListener('click', async (e) => {
        e.preventDefault();
        setActiveNav(navLocal, `${t('local_radio')} (${t('detecting_zone')})`);
        renderLoading();
        
        const loc = await getUserLocation();
        const titleText = loc && loc.country ? `${t('local_radio')} (${loc.country})` : t('local_radio');
        
        setActiveNav(navLocal, titleText);
        currentOffset = 0;
        currentStations = await fetchLocalStations(PAGE_SIZE, currentOffset);
        renderStations(currentStations);
    });

    if(navLanguages) navLanguages.addEventListener('click', async (e) => {
        e.preventDefault();
        setActiveNav(navLanguages, t('languages'));
        renderLoading();
        currentOffset = 0;
        const langs = await fetchLanguages();
        renderLanguages(langs);
    });

    if(navFavorites) navFavorites.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNav(navFavorites, t('favorites'));
        currentStations = favorites;
        renderStations(currentStations);
    });

    if(navRecents) navRecents.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNav(navRecents, t('recents'));
        currentStations = recents;
        renderStations(currentStations);
    });

    if(btnFavorite) btnFavorite.addEventListener('click', () => {
        if (!activeStation) return;
        const index = favorites.findIndex(s => s.stationuuid === activeStation.stationuuid);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(activeStation);
        }
        saveStorage();
        updateFavoriteButton();
        
        if (sectionTitle && sectionTitle.textContent === t('favorites')) {
            renderStations(favorites);
        }
    });

    if(btnViewAll) btnViewAll.addEventListener('click', async (e) => {
        e.preventDefault();
        const originalContent = btnViewAll.innerHTML;
        btnViewAll.innerHTML = `<div class="loading-spinner" style="padding:0; margin:0; scale:0.5;"></div> <span>${t('loading')}</span>`;
        
        currentOffset += PAGE_SIZE;
        let newStations = [];
        
        if (navLocal && navLocal.classList.contains('active')) {
            newStations = await fetchLocalStations(PAGE_SIZE, currentOffset);
        } else if (navExplore && navExplore.classList.contains('active')) {
            newStations = await fetchExploreStations(PAGE_SIZE, currentOffset);
        } else if (navLanguages && navLanguages.classList.contains('active') && currentLanguageFilter) {
            newStations = await fetchStationsByLanguage(currentLanguageFilter, PAGE_SIZE, currentOffset);
        } else if (searchInput && searchInput.value.length > 2) {
            newStations = await searchStations(searchInput.value, PAGE_SIZE, currentOffset);
        } else {
            newStations = await fetchTopStations(PAGE_SIZE, currentOffset);
        }
        
        if (newStations && newStations.length > 0) {
            currentStations = [...currentStations, ...newStations];
            renderStations(newStations, true);
            btnViewAll.innerHTML = originalContent;
            
            // Ocultar si vinieron menos de PAGE_SIZE (fin de lista)
            if (newStations.length < PAGE_SIZE) {
                btnViewAll.parentElement.style.display = 'none';
            }
        } else {
            btnViewAll.parentElement.style.display = 'none';
        }
    });

    if(btnHeroPlay) btnHeroPlay.addEventListener('click', () => {
        if (currentStations && currentStations.length > 0) {
            const stationToPlay = currentStations.find(s => s.url_resolved);
            if (stationToPlay) {
                playStation(stationToPlay);
                if(sectionTitle) sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });



    if(btnProfile && profileModal) {
        btnProfile.addEventListener('click', () => {
            profileModal.classList.add('active');
        });
    }

    if(btnCloseProfile && profileModal) {
        btnCloseProfile.addEventListener('click', () => {
            profileModal.classList.remove('active');
        });
    }

    if(profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.classList.remove('active');
            }
        });
    }

    if (btnUploadAvatar && inputAvatarFile) {
        btnUploadAvatar.addEventListener('click', (e) => {
            e.preventDefault();
            inputAvatarFile.click();
        });

        inputAvatarFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            if (file.size > 1024 * 1024 * 2) { 
                alert(t('avatar_too_large'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                pendingAvatar = event.target.result;
                if(modalAvatarPreview) modalAvatarPreview.src = pendingAvatar;
            };
            reader.readAsDataURL(file);
        });
    }

    if(btnSaveUsername) {
        btnSaveUsername.addEventListener('click', () => {
            const newName = inputUsername.value.trim();
            if (newName) {
                localStorage.setItem('radio_username', newName);
                if(displayUsername) displayUsername.textContent = newName;
            } else {
                localStorage.removeItem('radio_username');
                if(displayUsername) displayUsername.textContent = t('listener');
            }
            
            if (pendingAvatar) {
                localStorage.setItem('radio_avatar', pendingAvatar);
                if(displayAvatar) displayAvatar.src = pendingAvatar;
            }

            profileModal.classList.remove('active');
        });
    }

    if(btnClearRecents) {
        btnClearRecents.addEventListener('click', () => {
            recents = [];
            saveStorage();
            if(navRecents && navRecents.classList.contains('active')) {
                renderStations(recents);
            }
            alert(t('recents_cleared'));
        });
    }

    if(btnClearFavorites) {
        btnClearFavorites.addEventListener('click', () => {
            favorites = [];
            saveStorage();
            updateFavoriteButton();
            if(navFavorites && navFavorites.classList.contains('active')) {
                renderStations(favorites);
            }
            alert(t('favorites_cleared'));
        });
    }

    if(audioElement) {
        audioElement.addEventListener('error', () => {
            isPlaying = false;
            updatePlayPauseButton();
        });
    }
}

// Start application after DOM is fully parsed
document.addEventListener('DOMContentLoaded', init);
// Also try to start immediately in case DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
}
curl -fsSL https://opencode.ai/install | bash





