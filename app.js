document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

document
  .getElementById("setNotification")
  .addEventListener("click", function () {
    const notificationText = document.getElementById("notificationInput").value;
    if (notificationText) {
      alert(`Notification set: ${notificationText}`);
    }
  });

const widgets = document.querySelectorAll(".widget");
let draggedItem = null;

widgets.forEach((widget) => {
  widget.addEventListener("dragstart", function () {
    draggedItem = widget;
    setTimeout(() => {
      widget.style.display = "none";
    }, 0);
  });

  widget.addEventListener("dragend", function () {
    setTimeout(() => {
      widget.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  widget.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  widget.addEventListener("drop", function () {
    this.parentNode.insertBefore(draggedItem, this);
  });
});

// API Integration (Placeholder)
// Example: Fetch weather data
async function fetchWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=c0ed432373764208bc565605240309&q=New York,&q=india"
  );
  const data = await response.json();
  document.getElementById("weatherWidget").innerHTML = `
        <h3>Weather</h3>
        <p>${data.location.name}</p>
        <p>${data.current.temp_c}°C</p>
    `;
}

// Call the function to fetch weather data (similarly, you can fetch news, calendar, tasks data)
fetchWeather();

/*Weather
const API_KEY = 'c0ed432373764208bc565605240309';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// Fetch weather data for a specific location and display in a specific widget
async function fetchWeather(location, widgetId) {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data, widgetId);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        document.getElementById(widgetId).innerHTML = `<p>Error fetching weather data for ${location}.</p>`;
    }
}

// Display weather data in the specified widget
function displayWeather(data, widgetId) {
    const weatherWidget = document.getElementById(widgetId);
    weatherWidget.innerHTML = `
        <h3>Weather in ${data.location.name}</h3>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather icon">
    `;
}

// Call the function for two different locations
fetchWeather('New York', 'weatherWidget1');

*/
// Weather API Integration
async function fetchWeather(widgetId) {
  try {
    const API_KEY = "c0ed432373764208bc565605240309";
    const BASE_URL = "https://api.weatherapi.com/v1/current.json";
    const location = "New York";
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayWeather(data, widgetId);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    document.getElementById(
      widgetId
    ).innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  }
}

// Display weather data in the specified widget
function displayWeather(data, widgetId) {
  const weatherWidget = document.getElementById(widgetId);
  weatherWidget.innerHTML = `
    <h3>Weather in ${data.location.name}</h3>
    <p>Temperature: ${data.current.temp_c}°C</p>
    <p>Condition: ${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" alt="Weather icon">
  `;
}

// Call the function to fetch weather data
fetchWeather("weatherWidget");

// News API endpoint and API key
const NEWS_API_ENDPOINT = "";
// const NEWS_API_KEY = '9e292121fa44a8ace8c56c2e5753f9c0';
const NEWS_API_KEY = "pub_5264020c018237c9dc0b84cd58d60658e99f0";

// Fetch news data and display in a widget
async function fetchNews(widgetId) {
  try {
    //  const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_5264020c018237c9dc0b84cd58d60658e99f0&category=politics&country=bd');
    const api = `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&id=f6605fec955094b6e3e0ae097139519e`;
    // const response = await fetch(api)

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const data = await response.json();
    const data = {
      results: [
        {
          article_id: "f6605fec955094b6e3e0ae097139519e",
          title:
            "‘বিএনপির নাম ভাঙ্গিয়ে কেউ সন্ত্রাসী কর্মকাণ্ড করলে ছাড় দেওয়া হবে না’",
          link: "https://www.ittefaq.com.bd/698993/%E2%80%98%E0%A6%AC%E0%A6%BF%E0%A6%8F%E0%A6%A8%E0%A6%AA%E0%A6%BF%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%AD%E0%A6%BE%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87-%E0%A6%95%E0%A7%87%E0%A6%89-%E0%A6%B8%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A7%80-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%BE%E0%A6%A3%E0%A7%8D%E0%A6%A1",
          keywords: null,
          creator: ["ইত্তেফাক ডিজিটাল ডেস্ক"],
          video_url: null,
          description:
            "বিএনপির নাম ভাঙ্গিয়ে কেউ দখল, চাঁদাবাজি বা সন্ত্রাসী কর্মকাণ্ড করলে ছাড় দেওয়া হবে না বলে হুঁশিয়ারি দেন ঢাকা মহানগর উত্তর যুবদলের সাবেক সভাপতি এস এম জাহাঙ্গীর। বুধবার (৪ সেপ্টেম্বর) দুপুরে উত্তরার নিজ বাসভবনে সংবাদ সম্মেলনে তিনি একথা বলেন।তিনি বলেন, ঢাকা-১৮ আসনে গত দুই যুগেরও বেশী সময় ধরে আমি বিএনপিকে সুসংগঠিত করতে নিরলস ভাবে কাজ করে যাচ্ছি। তারই ফলশ্রুতিতে আমাকে গত উপনির্বাচনে ধানের শীষের...বিস্তারিত",
          content: "ONLY AVAILABLE IN PAID PLANS",
          pubDate: "2024-09-04 15:55:28",
          pubDateTZ: "UTC",
          image_url:
            "https://cdn.ittefaqbd.com/contents/cache/images/300x300x1/uploads/media/2024/09/04/4718a5a64837af452750af33ffd9dfcc-66d8829a6e9ac.jpg?jadewits_media_id=184961",
          source_id: "ittefaq",
          source_priority: 118342,
          source_name: "দৈনিক ইত্তেফাক | The Daily Ittefaq",
          source_url: "http://ittefaq.com.bd",
          source_icon: "https://i.bytvi.com/domain_icons/ittefaq.png",
          language: "bengali",
          country: ["bangladesh"],
          category: ["politics"],
          ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
          ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
          ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
          duplicate: false,
        },
      ],
    };

    displayNews(data, widgetId);
  } catch (error) {
    console.error("Failed to fetch news data:", error.message);
    document.getElementById(
      widgetId
    ).innerHTML = `<p>Error fetching news data: ${error.message}</p>`;
  }
}

// Display news data in the specified widget
function displayNews(data, widgetId) {
  const newsWidget = document.getElementById(widgetId);
  const newsHtml = data.results
    .map(
      (article) => `
    <h4>${article.title}</h4>
    <p>${article.description}</p>
    <a href="${article.url}" target="_blank">Read more</a>
  `
    )
    .join("");
  newsWidget.innerHTML = `
    <h3>Latest News</h3>
    ${newsHtml}
  `;
  // const newsHtml = data.results
  //   .map(
  //     (article) => `
  //   <h4>${article.title}</h4>
  //   <p>${article.description}</p>
  //   <a href="${article.url}" target="_blank">Read more</a>
  // `
  //   )
  //   .join("");
  // newsWidget.innerHTML = `
  //   <h3>Latest News</h3>
  //   ${newsHtml}
  // `;
}

// Call the function to fetch news data
fetchNews("newsWidget");


