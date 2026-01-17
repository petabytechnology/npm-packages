# react-scroll-control

Control scroll speed in React applications using pure JavaScript — **no third-party libraries required**.

`react-scroll-control` provides a simple React hook, `useSmoothScroll()`, that allows you to slow down or speed up mouse-wheel scrolling by intercepting the browser’s native `wheel` event and applying controlled, smooth scrolling behavior.

---

## 📌 Table of Contents

- Introduction
- Features
- Installation
- Usage
- API Reference
- Examples
- Mobile Devices
- Important Notes
- How It Works
- Compatibility
- License
- Connect With Us

---

## 🧠 Introduction

Modern browsers do not allow direct control over scroll speed.  
This package solves that limitation by **replacing native wheel scrolling** with a controlled scroll behavior using JavaScript — without any external libraries.

---

## ✨ Features

- Control vertical scroll speed
- Smooth scrolling behavior
- No CSS hacks
- No third-party libraries
- Lightweight custom React hook
- Desktop-optimized scrolling
- Modern ES Module (ESM) support

---

## 📦 Installation

Using npm:

```bash
npm install react-scroll-control
```

## 🧪 Examples

```js
useSmoothScroll(0.3); // very slow scrolling
useSmoothScroll(0.5); // smooth & natural
useSmoothScroll(1); // default browser speed
useSmoothScroll(1.5); // fast scrolling
```

## 🚀 Usage

```jsx
import useSmoothScroll from "react-scroll-control";

function App() {
  useSmoothScroll(0.5);

  return (
    <div>
      <h1>Hello JSX</h1>
    </div>
  );
}
```

## ⚠️ Important Notes

- This hook replaces native mouse-wheel scrolling

- Uses { passive: false } to allow preventDefault()

- Best used at the root level of the application

- Avoid nested scroll containers

- Not suitable for touch-based scrolling

- Desktop browsers only


## 🌐 Connect With Us

**Petaby Technologies**

- 🔗 **LinkedIn**: https://www.linkedin.com/company/petabytechnologies/
- 📸 **Instagram**: https://www.instagram.com/petabytechnologies/
