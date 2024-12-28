const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Handle image upload
app.post('/upload', (req, res) => {
    const { image } = req.body;
    if (!image) {
        return res.status(400).send('No image data');
    }
    // Convert base64 to buffer
    const base64Data = image.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Save image
    fs.writeFile('captured_image.png', buffer, (err) => {
        if (err) {
            console.error('Failed to save image', err);
            return res.status(500).send('Failed to save image');
        }
        console.log('Image saved successfully');
        res.send('Image received and saved');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on https://github.com/zigic07/upload:${PORT}`);
});
fs.writeFile('test.txt', 'Hello, World!', (err) => {
    if (err) console.error('Cannot write file', err);
    else console.log('Test file written successfully');
});


fetch('https://github.com/zigic07/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: imageData })
})
.then(response => {
    console.log('Server response:', response);
    if (response.ok) {
        alert('Image sent successfully!');
    } else {
        return response.text().then(text => {
            console.error('Error from server:', text);
            alert(`Failed to send image: ${text}`);
        });
    }
})
.catch(err => {
    console.error('Fetch error:', err);
    alert(`Failed to send image: ${err.message}`);
});
const cors = require('cors');
app.use(cors({
    origin: 'https://zigic07.github.io/creat-w/', // Domain của frontend
    methods: ['GET', 'POST'],       // Các phương thức được phép
}));

