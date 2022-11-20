import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{username: 'Tiago'}];
    res.status(200).send(users);
});


usersRoute.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
});

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const deletedUser = req.body;

    deletedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(deletedUser);
})


export default usersRoute;