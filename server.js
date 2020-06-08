const express = require('express');
const data = require('./db.json');
const app = express();

app.use(express.static('dist'));

app.get('/queries', (req, res) => 
{
	res.json(data.queries);
});

app.get('/templates', (req, res) => 
{
	res.json(data.templates);
});

app.get('/responses', (req, res) => 
{
	res.json(data.responses);
});

app.get('*', (req, res) => 
{
	res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
{
	console.log(`App listening on port ${PORT}`);
});
