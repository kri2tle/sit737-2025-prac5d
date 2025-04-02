🔢 Advanced Calculator Microservice

## 📖 Overview
The **Advanced Calculator Microservice** is a lightweight and efficient **Node.js-based application** that provides a user-friendly interface for performing both **basic and advanced arithmetic operations**. It includes a **RESTful API** powered by **Express.js**, a **frontend (`index.html`)**, and a robust **logging system (`logger.js`)** for monitoring activities using **Winston**.

---

## 📂 mycal 


---

## 🎯 Features

✅ **Basic Arithmetic Operations**: Addition, Subtraction, Multiplication, and Division  
✅ **Advanced Operations**: Exponentiation (Power), Square Root, and Modulo  
✅ **Dynamic UI**: Enables/disables input fields for specific operations  
✅ **RESTful API**: Handles calculations via HTTP requests  
✅ **Logging with Winston**: Captures all activities & errors in log files  

---

## 🏗️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime for backend |
| **Express.js** | Web framework to handle HTTP requests |
| **Winston** | Logging library for structured logging |
| **HTML, CSS, JavaScript** | Frontend for user interaction |

---

## 📜 File Descriptions

### 1️⃣ **`index.html`** - Frontend UI
A simple yet interactive calculator UI that communicates with the backend API to perform calculations.

🔹 **User Inputs**:
- Enter two numbers
- Select an operation
- Click "Calculate" to get the result  

🔹 **Dynamic UI**:
- If **Square Root (√)** is selected, it disables the second input field.

🔹 **Frontend Logic**:
- Sends HTTP GET requests to the server
- Displays results dynamically  
- Handles API errors gracefully

---

### 2️⃣ **`server.js`** - Backend API
The **Express.js server** that:
- Serves the frontend (`index.html`)
- Provides a **REST API (`/calculate`)** to perform arithmetic operations
- Implements **error handling** for invalid inputs
- Logs every calculation request

**Supported API Operations:**
- `add` ➝ Addition (`num1 + num2`)
- `subtract` ➝ Subtraction (`num1 - num2`)
- `multiply` ➝ Multiplication (`num1 * num2`)
- `divide` ➝ Division (`num1 / num2`)
- `power` ➝ Exponentiation (`num1 ^ num2`)
- `sqrt` ➝ Square Root (`√num1`)
- `mod` ➝ Modulo (`num1 % num2`)

**Example API Request:**

---


