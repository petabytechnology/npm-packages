## Connect with me
[Instagram](https://www.instagram.com/petabytechnologies/)&nbsp;
[Discord](https://discord.gg/eHgGPq4b)

# Hard Disk

A simple Node.js/Express utility that allows users to view server disk storage details such as free space, total space, and used space. This package uses helper functions to read disk information and convert bytes into readable units.

---

## 🚀 Features

* Fetch all disk drives available on the server
* View free, used, and total disk space
* Converts bytes to gigabytes (GB) and terabytes (TB)
* Easy-to-use Express integration

---

## 📦 Installation

```bash
npm install hard-disk
```

---

## 🛠️ Usage

Below is a sample Express server using the package to view disk information:

```javascript
const express = require("express");
const { loadDisks, BytesToGb, BytesToTb } = require("hard-disk");

let app = express();

app.get("/", async (req, res) => {
  const disks = await loadDisks();
  let finaldata = disks.map((data) => ({
    driveid: data.DeviceID,
    freespace: BytesToGb(data.FreeSpace),
    totalspace: BytesToGb(data.Size),
    usedspace: BytesToGb(data.Size - data.FreeSpace),
  }));
  res.send(finaldata);
});

app.listen(9000, () => console.log("Server running on port 9000"));
```

---

## 📂 Source Code Example

Below is the core logic this package uses to fetch and calculate disk storage:

```javascript
const express = require("express");
const { loadDisks, BytesToGb, BytesToTb } = require("./index");
let app = express();

app.get("/", async (req, res) => {
  const disks = await loadDisks();
  let finaldata = disks.map((data) => ({
    driveid: data.DeviceID,
    freespace: BytesToGb(data.FreeSpace),
    totalspace: BytesToGb(data.Size),
    usedspace: BytesToGb(data.Size - data.FreeSpace),
  }));
  res.send(finaldata);
});

app.listen("9000");
```

---

## 📄 API Reference

### `loadDisks()`

Returns an array of disk objects from the system.

### `BytesToGb(bytes)`

Converts bytes into gigabytes.

### `BytesToTb(bytes)`

Converts bytes into terabytes.

---

## 📤 Example Response

```json
[
  {
    "driveid": "C:",
    "freespace": 120.45,
    "totalspace": 256.00,
    "usedspace": 135.55
  }
]
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📜 License

ISC License

