const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Cấu hình CORS để cho phép domain frontend
app.use(cors({
    origin: 'https://zigic07.github.io', // Chỉ cho phép frontend này
    methods: ['GET', 'POST'],            // Các phương thức được phép
    allowedHeaders: ['Content-Type'],    // Header cho phép
}));

// Middleware để parse JSON body
app.use(express.json({ limit: '10mb' })); // Tăng giới hạn kích thước dữ liệu

// Endpoint nhận dữ liệu ảnh
app.post('/upload', (req, res) => {
    const { image } = req.body; // Lấy dữ liệu ảnh từ request
    if (!image) {
        return res.status(400).send('No image data received');
    }

    // Ghi ảnh vào file trên server
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const filePath = `uploads/image_${Date.now()}.png`;

    fs.writeFile(filePath, base64Data, { encoding: 'base64' }, (err) => {
        if (err) {
            console.error('Error saving image:', err);
            return res.status(500).send('Error saving image');
        }
        console.log(`Image saved to ${filePath}`);
        res.status(200).send('Image uploaded successfully');
    });
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
