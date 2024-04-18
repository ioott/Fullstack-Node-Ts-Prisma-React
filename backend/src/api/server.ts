import app from './app';

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Servidor iniciado. Acesse em localhost:${port}`)
})
