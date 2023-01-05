import express from 'express'
import empleadosRoutes from './routes/empleados.routes.js'


const app = express();

app.use(express.json());
app.use('/api', empleadosRoutes);


app.use((req, res, next) => {
  res.status(404).json({
    message: "No se encuentra endpoint"
  })
});

export default app;