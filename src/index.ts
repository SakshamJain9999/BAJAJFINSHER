import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// GET endpoint
app.get('/SAKSHAMJAIN21BDS0239', (req: Request, res: Response) => {
    res.status(200).json({ operation_code: 1 });
});

// POST endpoint
app.post('/SAKSHAMJAIN21BDS0239', (req: Request, res: Response) => {
    const userData = {
        user_id: "Sakshamjain1102",
        email: "sakshamjain9999@gmail.com",
        roll_number: "21BDS0239",
        numbers: ["1","334","4"],
        alphabets: ["M","B","Z","a"],
        highest_lowercase_alphabet:["a"]
    };

    const data: (string | number)[] = req.body.data || [];
    const numbers: string[] = [];
    const alphabets: string[] = [];
    let highestLowercaseAlphabet: string[] = [];

    data.forEach(item => {
        if (typeof item === 'string') {
            if (!isNaN(Number(item))) {
                numbers.push(item);
            } else {
                alphabets.push(item);
                if (item === item.toLowerCase()) {
                    if (!highestLowercaseAlphabet.length || item > highestLowercaseAlphabet[0]) {
                        highestLowercaseAlphabet = [item];
                    }
                }
            }
        }
    });

    const response = {
        is_success: true,
        ...userData,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
    console.log("⁠Server running on port",port);
});
