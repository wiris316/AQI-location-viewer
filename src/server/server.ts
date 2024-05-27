import express from 'express';
import locationRouter from './routes/locationRouter';

const app = express();
var PORT = 5000;
// app.use(json());
// app.use(urlencoded({ extended: true }));
app.use('/location', locationRouter);
app.get('/', function (_req, res) {
    res.status(200).send('in server route');
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}...`);
});
