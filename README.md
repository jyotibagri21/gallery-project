# 📸 React Image Gallery App

A simple and responsive image gallery built using **React**, **Axios**, and **Tailwind CSS**. This app fetches images from the Picsum API and displays them in a  layout with Next/Previous navigation.

---

## 🚀 Features

* 📷 Fetch images from API dynamically
* 🔄 Next / Previous buttons
* ⚡ Fast rendering using React hooks
* 🎨 Styled with Tailwind CSS
* ⏳ Loading state handling

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* Axios (API calls)
* Tailwind CSS (Styling)

---

## 📂 Project Structure

```
src/
│── components/
│   └── Card.jsx
│── App.jsx
│── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/jyotibagri21/gallery-project.git
```

2. Navigate to project folder:

```bash
cd gallery-project
```

3. Install dependencies:

```bash
npm install
```

4. Start development server:

```bash
npm run dev
```

---

## 🌐 API Used

* https://picsum.photos/v2/list

---

## 📖 How It Works

* The app fetches 30 images per page using Axios.
* `useEffect` runs whenever the page index changes.
* Clicking **Next** or **Prev** updates the page and triggers a new API call.
* While data is loading, a Loader... is displayed.

---

## 🎯 Future Improvements

* 🔍 Add search functionality
* ❤️ Like/Favorite images
* ⚡ Add infinite scroll

---

## 👨‍💻 Author

* Your Name

---
