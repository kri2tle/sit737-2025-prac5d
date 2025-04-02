// //web server is created 
// const express = require("express");

// //it handles paths 
// const path = require("path");

// const logger = require("./logger"); // Import our Winston logger.js file

// //it creates express application as app and server port as 3000 
// const app = express();
// const PORT = 3040;

// // Serve static files without caching
// app.use(express.static(path.join(__dirname, "public"), { maxAge: 0 }));

// // Force cache refresh
// app.use((req, res, next) => {
//     res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
//     next();
// });

// //index.html will be available at localhost:3040 
// // app.use(express.static(path.join(__dirname, "public")));

// // Route to serve the calculator page and showrespones in index.html page 
// app.get("/", (req, res) => {
//     logger.info("Serving the calculator page.");
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // handles requests for API as calcualtions are performed 
// app.get("/calculate", (req, res) => {

//     //variables are defined as per requirenmnets 
//     const { num1, num2, operation } = req.query;
//     const n1 = parseFloat(num1);
//     const n2 = parseFloat(num2);
//     let result;

//     //basic logic is applied for calculation 

//     if (isNaN(n1) || isNaN(n2)) {
//         logger.error("Invalid numbers provided.");
//         return res.status(400).json({ error: "Invalid numbers" });
//     }

//     switch (operation) {

//         //addition  logic 
//         case "add":
//             result = n1 + n2;
//             break;

//         //subtraction logic 
//         case "subtract":
//             result = n1 - n2;
//             break;

//         //multipilcation logic 
//         case "multiply":
//             result = n1 * n2;
//             break;
//         //dovosion logic
//         case "divide":
//             if (n2 === 0) {
//                 logger.error("Division by zero is not possible please enter correct number .");
//                 return res.status(400).json({ error: "Cannot divide by zero enter new number " });
//             }
//             result = n1 / n2;
//             break;
        

//          // Exponentiation logic (n1 ^ n2)
//          case "power":
//             result = Math.pow(n1,n2);
//             break;

//         // Square Root logic (√n1)
//         case "sqrt":
//             if (n1 < 0) {
//                 logger.error("Square root of a negative number is not allowed.");
//                 return res.status(400).json({ error: "Cannot calculate the square root of a negative number." });
//             }
//             result = Math.sqrt(n1);
//             break;

//         // Modulo operation (n1 % n2)
//         case "mod":
//             if (n2 === 0) {
//                 logger.error("Modulo by zero is not possible. Please enter a valid number.");
//                 return res.status(400).json({ error: "Cannot perform modulo by zero. Enter a new number." });
//             }
//             result = n1 % n2;
//             break;

//         //if all conditions are failed then default part will excecute 
//         default:
//             logger.error("Invalid operation are performed .");
//             return res.status(400).json({ error: "Invalid operation please check !! " });
//     }

//     //Logs the calculation and returns the result as JSON to the frontend
//     logger.info(`Calculation performed: ${n1} ${operation} ${n2} = ${result}`);
//     res.json({ result });
// });

// // Start the server at port 3000
// app.listen(PORT, () => {
//     logger.info(`Server is running at http://localhost:${PORT}`);
// });


// Web server is created
const express = require("express");

// It handles paths
const path = require("path");

const logger = require("./logger"); // Import our Winston logger.js file

// It creates an express application as app and sets the server port to 3040
const app = express();
const PORT = 3040;

// Serve static files without caching
app.use(express.static(path.join(__dirname, "public"), { maxAge: 0 }));

// Force cache refresh
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    next();
});

// index.html will be available at localhost:3040
app.get("/", (req, res) => {
    logger.info("Serving the calculator page.");
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handles requests for API calculations
app.get("/calculate", (req, res) => {
    // Variables are defined as per requirements
    const { num1, num2, operation } = req.query;
    const n1 = parseFloat(num1);
    const n2 = num2 !== undefined ? parseFloat(num2) : null;
    let result;

    // Basic logic is applied for calculation
    if (isNaN(n1) || (num2 !== undefined && isNaN(n2))) {
        logger.error("Invalid numbers provided.");
        return res.status(400).json({ error: "Invalid numbers" });
    }

    switch (operation) {
        // Addition logic
        case "add":
            result = n1 + n2;
            break;

        // Subtraction logic
        case "subtract":
            result = n1 - n2;
            break;

        // Multiplication logic
        case "multiply":
            result = n1 * n2;
            break;

        // Division logic
        case "divide":
            if (n2 === 0) {
                logger.error("Division by zero is not possible. Please enter a valid number.");
                return res.status(400).json({ error: "Cannot divide by zero. Enter a new number." });
            }
            result = n1 / n2;
            break;

        // Exponentiation logic (n1 ^ n2)
        case "power":
            result = Math.pow(n1, n2);
            break;

        // Square Root logic (√n1)
        case "sqrt":
            if (n1 < 0) {
                logger.error("Square root of a negative number is not allowed.");
                return res.status(400).json({ error: "Cannot calculate the square root of a negative number." });
            }
            result = Math.sqrt(n1);
            break;

        // Modulo operation (n1 % n2)
        case "mod":
            if (n2 === 0) {
                logger.error("Modulo by zero is not possible. Please enter a valid number.");
                return res.status(400).json({ error: "Cannot perform modulo by zero. Enter a new number." });
            }
            result = n1 % n2;
            break;

        // If all conditions fail, the default part will execute
        default:
            logger.error("Invalid operation performed.");
            return res.status(400).json({ error: "Invalid operation. Please check!" });
    }

    // Logs the calculation and returns the result as JSON to the frontend
    logger.info(`Calculation performed: ${n1} ${operation} ${n2 !== null ? n2 : ""} = ${result}`);
    res.json({ result });
});

// Start the server at port 3040
app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
});
