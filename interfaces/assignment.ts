import { ObjectId } from 'mongoose';

export interface IAssignment {
  actives: ObjectId[];
  details: string;
  dateOfStart: Date;
  dateOfEnd: Date;
  responsible: ObjectId;
  condition: AssignmentConditionType;
}

type AssignmentConditionType = 'finish' | 'in_progress';
