import express from "express";
import statusRoutes from "./routes/status.routes";
import usersRoute from "./routes/users.routes";
const app = express();

/* Configurações da aplicação */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configurações de rotas */
app.use(usersRoute);      /* Rotas de users (CRUD básico) */
app.use(statusRoutes);    /* Rota de status */

/* Inicialização do servidor */
app.listen(4000, () => {
  console.log("Aplicação executanto na porta 4000!");
});


