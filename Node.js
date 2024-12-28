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
    console.log(`Server is running on http://localhost:${PORT}`);
});
fetch('https://zigic07.github.io/creat-w/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: imageData })
})
app.post('/upload', (req, res) => {
    console.log(req.body); // Xem dữ liệu gửi đến
    const { image } = req.body;
    if (!image) {
        console.error('No image data received');
        return res.status(400).send('No image data');
    }
    // Phần còn lại không thay đổi...
});
app.use(express.json({ limit: '10mb' }));
fs.writeFile('test.txt', 'Hello, World!', (err) => {
    if (err) console.error('Cannot write file', err);
    else console.log('Test file written successfully');
});
fetch('http://localhost:3000/upload', {
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
app.use(cors());
const cors = require('cors');
app.use(cors());
console.log('Sending to:', 'http://localhost:3000/upload');
console.log('Image data:', imageData);
