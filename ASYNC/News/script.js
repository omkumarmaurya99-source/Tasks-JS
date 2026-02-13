const newsContainer = document.getElementById("news-container");

async function loadNews() {
    newsContainer.innerHTML = "";

    try {
        const randomPage = Math.floor(Math.random() * 10) + 1;

        const response = await fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/?limit=6&offset=${randomPage * 6}`
        );

        const data = await response.json();

        data.results.forEach(article => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${article.image_url}">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.summary.substring(0,120)}...</p>
                    <a href="${article.url}" target="_blank">Read More</a>
                </div>
            `;

            newsContainer.appendChild(card);
        });

    } catch (error) {
        newsContainer.innerHTML = "<p style='color:white;text-align:center;'>Failed to load news.</p>";
    }
}
