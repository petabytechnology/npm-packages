# 🌍 country-codes-flags

**country-codes-flags** is a backend utility package that provides a **complete dataset of over 200 countries** with accurate details — including:

- 🏳️ Country Name
- 🔤 ISO Short Code (Alpha-2)
- ☎️ Dial Code
- 🏁 Flag Image (Local SVG File)

This package is built for **Node.js backends**, offering an easy way to access standardized country data and SVG flag assets — without maintaining them manually.

---

## 📦 Installation

Install using **npm**:

```bash
npm install country-codes-flags
```


## ⚙️ Setup in Express

To make the flag images accessible from your server, serve the package’s static folder using Express:

### Step-1 :- Making Flags Image Files Accessible
```js
import express from "express";
const app = express();

// ✅ Serve flag images from the package
app.use("/flags", express.static("node_modules/country-codes-flags/flags"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

### Step-2 :- 🌐 Access the Flags
Once your server is running, you can access any country flag by its file name directly in your browser or API response.

For example :
```bash
http://localhost:5000/flags/in.svg
```

### 🧩 Step 3:- Create an API and Use Package Functions
You can use functions from country-codes-flags to get country data and send it via an API.
```js
import express from "express";
import country from "country-codes-flags";

const app = express();

// Serve static flags
app.use("/flags", express.static("node_modules/country-codes-flags/flags"));

// API route to get all country info
app.get("/getAllCountries", (req, res) => {
  let allcountries = country.getAllCountriesInfo();
  let apiurl = "http://localhost:8000/"; // base URL to combine with flags_icon key in frontend

  res.send({
    allcountries,
    apiurl,
  });
});

app.listen(8000, () => {
  console.log("✅ Server running on http://localhost:8000");
});

```

## 📦 API Response Example

Example output from /getAllCountries:

```output
{
  "allcountries": [
    {
      "id": 1,
      "name": "India",
      "short_name": "IN",
      "dial_code": "+91",
      "flags_icon": "in.svg"
    },
    {
      "id": 2,
      "name": "United States",
      "short_name": "US",
      "dial_code": "+1",
      "flags_icon": "us.svg"
    }
  ],
  "apiurl": "http://localhost:8000/"
}
```


### 🖼️ Step 4: Display Flags in Your Frontend
You can easily show the flag images using the apiurl and flags_icon keys returned from the backend.

### html
```html
<img src="http://localhost:8000/flags/in.svg" alt="India Flag" width="40" />
```
### jsx
```jsx
<img src={`${apiurl}flags/${country.flags_icon}`} alt={country.name} width={40} />
```
### vue
```vue
<img :src="`${apiurl}flags/${country.flags_icon}`" :alt="country.name" width="40" />
```


## ⚡ Methods & Exmaple

## 1. Get All Countries Info (Multiple Values)

`getAllCountriesInfo()` returns an array containing the **all country’s data** of all countries directly.

```js
const country = require("country-codes-flags");
//Get all countries
const allCountries = country.getAllCountriesInfo();
console.log(allCountries);

// Example Output :-
// [
//   {
//     "id": 244,
//     "name": "Zimbabwe",
//     "short_name": "ZWE",
//     "status": "Country",
//     "dial_code": "+263",
//     "max_nsn_length": 9,
//     "flags_icon": "flags/zw.svg"
//   },
//   {
//     "id": 1,
//     "name": "Afghanistan",
//     "short_name": "AFG",
//     "status": "Country",
//     "dial_code": "+93",
//     "max_nsn_length": 9,
//     "flags_icon": "flags/af.svg"
//   }
//   // ...and so on for 200+ countries
// ]
```

## 2. Get Country Info (Single Value)

`getCountryInfo()` returns an array containing the **single country’s data**  by passing the value directly **name**, **short_name**, **dial_code**, or **id**:.
```js
const country = require("country-codes-flags");

// By country name
const zimbabwe = country.getCountryInfo("Zimbabwe");
console.log(zimbabwe);

// By ISO Alpha-3 short_name
const usa = country.getCountryInfo("USA");
console.log(usa);

// By dial code
const india = country.getCountryInfo("+91");
console.log(india);

// By id
const france = country.getCountryInfo(75);
console.log(france);

// Example Output :-
// {
//   "id": 244,
//   "name": "Zimbabwe",
//   "short_name": "ZWE",
//   "dial_code": "+263",
//   "flags_icon": "flags/zw.svg"
// }
```

## 3. Get All Country Names

getCountryNames returns an array of all country names:

```js
const countryNames = country.getCountryNames();
console.log(countryNames);

// Example Output :-
// [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "...and 200+ more countries"
// ]
```

## 4. Get Single Country Name

`getCountryName()` returns the **Country name** when you pass a valid value — such as the country **name**, **short_Name**, **dial_code**, or **id**.

```js
// By name
const name1 = country.getCountryName("India");
console.log(name1); // "India"

// By short name
const name2 = country.getCountryName("USA");
console.log(name2); // "United States"

// By dial code
const name3 = country.getCountryName("+91");
console.log(name3); // "India"

// By id
const name4 = country.getCountryName(75);
console.log(name4); // "France"

// Example Output :-
// "India"
```

## 5. Get All Country Short Names

`getCountryShortNames()` returns an array containing the **short names (ISO Alpha-2/Alpha-3 codes)** of all countries.

```javascript
const country = require("country-codes-flags");

const shortNames = country.getCountryShortNames();
console.log(shortNames);

// Example Output:-
// [
//   "AFG",
//   "ALB",
//   "DZA",
//   "AND",
//   "AGO",
//   "ARG",
//   "ARM",
//   "AUS",
//   "AUT",
//   "AZE",
//   "...and 200+ more short names"
// ]
```

## 6. Get Single Country Short Name

`getCountryShortName()` returns the **short name (ISO Alpha-2/Alpha-3 code)** of a specific country when you pass a valid value — such as the country **name**, **short_Name**, **dial_code**, or **id**.

```javascript
const country = require("country-codes-flags");

// By country name
const short1 = country.getCountryShortName("India");
console.log(short1); // "IND"

// By dial code
const short2 = country.getCountryShortName("+1");
console.log(short2); // "USA"

// By id
const short3 = country.getCountryShortName(76);
console.log(short3); // "FRA"

// Example Output:-
// "IND"
```

## 7. Get All Country Dial Codes

`getCountryDialCodes()` returns an array containing the **dial codes** of all countries.

```javascript
const country = require("country-codes-flags");

const dialCodes = country.getCountryDialCodes();
console.log(dialCodes);

// Example Output:-
// [
//   "+93",
//   "+355",
//   "+213",
//   "+376",
//   "+244",
//   "+54",
//   "+374",
//   "+61",
//   "+43",
//   "+994",
//   "...and 200+ more dial codes"
// ]
```

## 8. Get Single Country Dial Codes

`getCountryDialCode()` returns the **dial codes** of a specific country when you pass a valid value — such as the country **name**, **short_Name**, **dial_code**, **id**.

```javascript
const country = require("country-codes-flags");

// By country name
const india = country.getCountryDialCode("India");
console.log(india); // "+91"

// By short name
const usa = country.getCountryDialCode("USA");
console.log(usa); // "+1"

// By dial code
const uk = country.getCountryDialCode("+44");
console.log(uk); // "+44"

// By id
const france = country.getCountryDialCode(75);
console.log(france); // "+33"

// Example Output:-
// "+91"
```
