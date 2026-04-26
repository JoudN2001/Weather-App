# 🌤️ React Weather App

A responsive, bilingual weather application built with React. This project demonstrates how to integrate third-party REST APIs, manage state, and implement seamless internationalization (i18n) for Arabic and English users.

**🌍 Live Demo:** https://open-weather-api-app-live.netlify.app

---

## 📸 Screenshots

| English Version | النسخة العربية |
| :---: | :---: |
| <img src="./public/Screenshot/Screenshot EN.png" alt="Weather App English" width="400"/> | <img src="./public/Screenshot/Screenshot AR.png" alt="تطبيق الطقس بالعربية" width="400"/> |

---

## ✨ Features

* **Real-time Weather Data:** Fetches current temperature, min/max temperatures, and weather conditions for Amman using the **OpenWeather API**.
* **Full Localization (i18n):** Seamlessly switch between English and Arabic.
* **Dynamic UI Direction:** The layout automatically flips between LTR (Left-to-Right) and RTL (Right-to-Left) based on the selected language.
* **Localized Dates:** Displays the current date formatted specifically for the user's selected language.
* **Modern UI:** Clean, glass-morphism inspired design built with **Material-UI (MUI)**.

---

## 🧠 What I Learned & Accomplished

This project was a major stepping stone for me in transitioning from building static React components to dynamic, data-driven applications. 

Here is a breakdown of my learning process:

1. **API Testing & Integration:** Before writing code, I learned how to use **Postman** to test API endpoints (like the Aladhan API and OpenWeather API) to understand JSON input/output structures.
2. **Mastering HTTP Requests:** I transitioned from using the native Fetch API (learned during FreeCodeCamp) to using the **Axios** library, which made handling requests and responses much cleaner and easier to manage.
3. **Internationalization (i18n):** I successfully implemented the `i18next` and `react-i18next` libraries. This taught me how to manage translation files and dynamically update the entire app's text and layout direction (`row` vs `row-reverse`) without reloading the page.
4. **Date Formatting:** I integrated **Moment.js** to handle complex date formatting and locale switching, moving away from the limitations of the native JS `Date` object.
5. **UI Frameworks:** Strengthened my skills in using **Material-UI (MUI)** components like `Card`, `Stack`, and `Typography` to build a responsive interface quickly.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling & UI:** Material-UI (MUI), CSS
* **HTTP Client:** Axios
* **Localization:** i18next, react-i18next
* **Date Handling:** Moment.js
* **API:** OpenWeatherMap API

---

## 🚀 How to Run Locally

To run this project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/JoudN2001/Weather-App.git

2. Navigate to the project directory:
    ```bash
    cd Weather-App

3. Install the dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
   npm start
5.  Open http://localhost:3000 to view it in your browser.
