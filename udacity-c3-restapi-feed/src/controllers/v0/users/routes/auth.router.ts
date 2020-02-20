import { Router, Request, Response } from 'express';

import * as c from '../../../../config/config';

import * as jwt from 'jsonwebtoken';
import { NextFunction } from 'connect';

const router: Router = Router();



export const AuthRouter: Router = router;
