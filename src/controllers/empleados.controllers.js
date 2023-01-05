import { pool } from '../db.js'

export const listarEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from empleados")
    res.json(rows)
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor al consultar empleados" });
  }
};

export const listarEmpleadosById = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query("select * from empleados where id = ?", [id]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "No se encuentra empleado" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor al consultar empleados" });
  }
};

export const crearEmpleados = async (req, res) => {
  const { nombre, salario } = req.body;
  try {
    const [rows] = await pool.query('insert into empleados (nombre, salario) values (?, ?)', [nombre, salario]);
    res.send({
      id: rows.insertId,
      nombre: nombre,
      salario: salario
    });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor al registrar empleado" });
  }
};

export const actualizarEmpleados = async (req, res) => {
  const id = req.params.id;
  const { nombre, salario } = req.body;

  try {
    const [result] = await pool.query('update empleados set nombre = ifnull(?, nombre), salario = ifnull(?, salario) where id = ?', [nombre, salario, id]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "No se encuentra empleado" });
    }
    const [rows] = await pool.query("select * from empleados where id = ?", [id]);
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor al actualizar empleado" });
  }

};

export const eliminarEmpleados = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query("delete from empleados where id = ?", [id]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "No se encuentra empleado" });
    }
    res.json({ message: "Empleado eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor al eliminar empleado" });
  }
};