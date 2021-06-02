import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUserCase } from "./AuthenticateUserUserCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;
        const authenticateUserUserCase = container.resolve(
            AuthenticateUserUserCase
        );

        const authenticateInfo = await authenticateUserUserCase.execute({
            password,
            email,
        });

        return response.json(authenticateInfo);
    }
}

export { AuthenticateUserController };
