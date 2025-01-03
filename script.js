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
