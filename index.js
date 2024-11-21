//crear la instancia de express
import express from 'express';

//importar el cors
import cors from 'cors';

//importar las rutas de presupuesto
import presupuestoRouter from './routes/presupuestos/presupuestosRoutes.js';
import IngresoRouter from './routes/ingresos/ingresosRoutes.js';
import GastoRouter from './routes/gastos/gastosRoutes.js';
import DepositoRouter from './routes/depositos/depositosRoutes.js';
import UsuarioRouter from './routes/usuarios/usuariosRoutes.js';
import PlanRouter from './routes/planes/planesRoutes.js';

//crear la instancia de express
const app = express ();

//@TODO agregar las rutas 
app.use('/presupuestos' , presupuestoRouter);
app.use('/ingresos' , IngresoRouter);
app.use('/gastos' , GastoRouter);
app.use('/depositos' , DepositoRouter);
app.use('/usuarios' , UsuarioRouter);
app.use('/planes' , PlanRouter);

//habilitar la captura de datos por el json de los formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//habilitar cors 
app.use(cors());

//definir el puerto
const PORT = process.env.PORT || 4000;

//escuchar la app
app.listen(PORT, () =>{
    console.log(`el servidor esta corriendo en el puerto ${PORT}`);
     
});
