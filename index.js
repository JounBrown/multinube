const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Hola desde la API Node en Azure __________________________(AZURE)_____________", time: new Date().toISOString() });
});


app.get('/status', (req,res)=>{
	res.json({
		service:"API Azure",
		status: "Running",
		timestamp:"2025-04-29T12:00:00Z"
	});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API escuchando en puerto ${PORT}`));
