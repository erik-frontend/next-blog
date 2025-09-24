export async function getUnsplashImage(query, index, size = "small") {
    const key = process.env.UNSPLASH_ACCESS_KEY
    if (!key) return null
    // console.log(key);


    try {
        const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                query
            )}&per_page=10`,
            {
                headers: { Authorization: `Client-ID ${key}` },
                next: { revalidate: 86400 }, // кэшируем на 24 часа
            }
        );

        // console.log(res.urls);
        

        if (!res.ok) {
            console.error("unsplash api error:", res.status, res.statusText)
            return null
        }

        const data = await res.json()
        const results = Array.isArray(data?.results) ? data.results : []
        const img = results.length ? results[index % results.length] : null
        console.log(data.results[0].urls);

        return img?.urls?.[size] ?? null
    } catch (error) {
        console.error("unsplash fetch error:", error)
        return null
    }
}