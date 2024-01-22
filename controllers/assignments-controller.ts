import { Request, Response } from 'express';
import sendApiResponse from '../utils/send-api-response';
import AssignmentsModel from '../Schemas/assignment-schema';
import { IAssignment } from '../interfaces/assignment';

// Listar
export const getAllAssignment = async (req: Request, res: Response) => {
  try {
    const assignments = await AssignmentsModel.find();

    return sendApiResponse<IAssignment[]>(res, 200, 'OK', assignments);
  } catch (error: any) {
    return sendApiResponse(res, 500, error.message);
  }
};

// Listar por ID
export const getAssignmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const assignment = await AssignmentsModel.findById(id);

    if (!assignment) {
      return sendApiResponse(res, 404, 'Not Found');
    }

    return sendApiResponse<IAssignment>(res, 200, 'OK', assignment);
  } catch (error: any) {
    return sendApiResponse(res, 500, error.message);
  }
};

// Crear
export const createAssignment = async (req: Request, res: Response) => {
  try {
    const assignmentData = req.body;
    const newAssignment = await AssignmentsModel.create(assignmentData);

    return sendApiResponse<IAssignment>(res, 201, 'Created', newAssignment);
  } catch (error: any) {
    return sendApiResponse(res, 500, error.message);
  }
};

// Editar
export const updateAssignment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const assignmentData = req.body;
    const existingAsignment = await AssignmentsModel.findById(id);

    if (!existingAsignment) {
      return sendApiResponse(res, 404, 'Not Found');
    }

    await existingAsignment.updateOne(assignmentData);

    return sendApiResponse(res, 200, 'Updated');
  } catch (error: any) {
    return sendApiResponse(res, 500, error.message);
  }
};
