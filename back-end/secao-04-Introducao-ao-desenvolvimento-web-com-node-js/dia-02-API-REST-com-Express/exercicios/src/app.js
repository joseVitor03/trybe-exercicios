const { log } = require('console');
const express = require('express');

const app = express();
app.use(express.json());
const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
    const resolve = await fs.readFile(moviesPath);
    return JSON.parse(resolve);
  } catch (error) {
    return console.log('resultado não esperado');
  }
}

app.get('/movies', async (req, res) => {
  try {
    const data = await readMovies();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.get('/movies/search', async (req, res) => {
  try {
    
    const { q } = req.query;
    const data = await readMovies();
    if (q) {
      const movies = data.filter((elem) => elem.movie.toLowerCase().includes(q));
      console.log(movies);
      return res.status(200).json(movies);
    }
    return res.status(200).end();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
})

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readMovies();
    const movie = data.find((m) => m.id === Number(id));
    res.status(200).json({ movie })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const update = { ...req.body };
    const data = await readMovies();
    const newData = {
      id: data[data.length - 1].id + 1,
      movie: update.movie,
      price: update.price
    };
    const allMovies = JSON.stringify([...data, newData], null, 2)
    await fs.writeFile(moviesPath, allMovies);
    res.status(200).json(allMovies)
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const { id } = req.params;
    const data = await readMovies();
    const newData = data.findIndex((movie) => movie.id === Number(id));
    data[newData] = {
      ...data[newData],
      movie,
      price
    }
    const allMovies = JSON.stringify(data, null, 2);
    await fs.writeFile(moviesPath, allMovies);
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readMovies();
    const newMovies = data.filter((movie) => movie.id !== Number(id));
    const allMovies = JSON.stringify(newMovies, null, 2);
    await fs.writeFile(moviesPath, allMovies);
    res.status(200).json(allMovies);
} catch (error) {
  res.status(500).send({ message: error.message });
}
});

app.get('/movies/search', async (req, res) => {
  try {
    
    const { q } = req.query;
    const data = await readMovies();
    if (q) {
      const movies = data.filter((elem) => elem.movie.includes(q));
      console.log(movies);
      return res.status(200).json(data);
    }
    return res.status(200).json();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
})

module.exports = app;