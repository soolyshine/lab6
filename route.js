const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, 'data.json');

const loadData = () => {
    if (fs.existsSync(dataFile))
    {
        const rawData = fs.readFileSync(dataFile);
        return JSON.parse(rawData);
    }
    return [];
};

const saveData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

router.get('/', (req, res) => {
    const data = loadData();
    res.json({
        message: 'Data saved:',
        data: data
    });
});

router.post('/', (req, res) => {
    const newData = req.body;
    const currentData = loadData();

    currentData.push(newData);
    saveData(currentData);

    res.json({
        message: 'Data saved',
        data: newData
    });
});

module.exports = router;