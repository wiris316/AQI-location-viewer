import express from 'express';
import aqiRouter from './routes/aqiRouter';

const app = express();
var PORT = 5000;
// app.use(json());
// app.use(urlencoded({ extended: true }));
app.use('/aqi', aqiRouter);
app.get('/', function (_req, res) {
    res.status(200).send('in root route');
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}...`);
});
