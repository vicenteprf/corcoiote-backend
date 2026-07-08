import { Router } from 'express';
import * as CustomerController from '../controllers/customer.controller.ts';

const router = Router();

router.get('/', CustomerController.getAllCustomers);

router.get('/:id', CustomerController.getCustomersById);

router.post('/', CustomerController.createCustomers);

router.put('/:id', CustomerController.updateCustomers);

router.delete('/:id', CustomerController.deleteCustomers);

export default router;
