const apiConfig = {
    apiKey: {
        mkTestIndia: '77a7e9ccfa3b45ab9ad0de094d743442',
        onlineBindu: '06e84ab2346543bdbcc8814c580f658c'
    },
    apiInfo: {
        getNews: {
            url: "https://newsapi.org/v2/top-headlines",
            query: {
                country: 'in',
                category: 'business',
                language: 'en',
                apiKey: '77a7e9ccfa3b45ab9ad0de094d743442',
                page: 0,
                pageSize: 0
            },
            reqOptions: {
                method: 'GET'
            }
        },
        sources: {
            url: "https://newsapi.org/v2/top-headlines/sources",
            query: {
                category: 'general',
                language: 'en',
                country: 'in',
                apiKey: '77a7e9ccfa3b45ab9ad0de094d743442'
            },
            reqOptions: {
                method: 'GET'
            }
        }
    },
    category: ["business", "entertainment", "general", "health", "science", "sports", "technology"],
    languages: {
        "Arabic": "ar", 
        "Deutsche": "de", 
        "English": "en", 
        "Spanish": "es", 
        "French": "fr", 
        "Hebrew": "he", 
        "Italian": "it", 
        "Dutch": "nl", 
        "Norwegian": "no", 
        "Portuguese": "pt", 
        "Russian": "ru", 
        "Swedish": "sv", 
        "Turkish-German": "ud", 
        "Chinese": "zh"
    },
    countries: {
        // "": "ae",
        // "": "ar",
        // "": "at",
        // "": "au",
        // "": "be",
        // "": "bg",
        // "": "br",
        // "": "ca",
        // "": "ch",
        // "": "cn",
        // "": "co",
        // "": "cu",
        // "": "cz",
        "German": "de",
        // "": "eg",
        "France": "fr",
        "UK": "gb",
        // "": "gr",
        // "": "hk",
        // "": "hu",
        // "": "id",
        // "": "ie",
        // "": "il",
        "India": "in",
        "Italy": "it",
        // "": "jp",
        // "": "kr",
        // "": "lt",
        // "": "lv",
        // "": "ma",
        // "": "mx",
        // "": "my",
        // "": "ng",
        // "": "nl",
        // "": "no",
        // "": "nz",
        // "": "ph",
        // "": "pl",
        // "": "pt",
        // "": "ro",
        // "": "rs",
        // "": "ru",
        // "": "sa",
        // "": "se",
        // "": "sg",
        // "": "si",
        // "": "sk",
        // "": "th",
        // "": "tr",
        // "": "tw",
        // "": "ua",
        "USA": "us",
        // "": "ve",
        // "": "za"
    }
}

export default apiConfig;