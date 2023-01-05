import { Router } from 'express'
import { listarEmpleados, listarEmpleadosById, crearEmpleados, actualizarEmpleados, eliminarEmpleados }
  from '../controllers/empleados.controllers.js'

const router = Router();

router.get("/empleados", listarEmpleados);

router.get("/empleados/:id", listarEmpleadosById);

router.post("/empleados", crearEmpleados)

router.patch("/empleados/:id", actualizarEmpleados)

router.delete("/empleados/:id", eliminarEmpleados)

export default router;