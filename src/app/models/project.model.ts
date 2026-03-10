import { clientType } from './client.type';
import { CollaboratorKey } from './collaborators.model';
import { Picture } from './picture.model';
import {
  frameworkType,
  IDEType,
  langageType,
  otherType,
  subjectType,
} from './technologies.type';

export interface ProjectModel {
  order: number;
  name: string;
  shortDescription?: string;
  description?: string;
  details?: string;
  productTime: string;
  pictures?: Picture[];
  madeFor?: clientType;
  collaborators?: CollaboratorKey[] | CollaboratorKey;
  langages?: langageType | langageType[];
  frameworks?: frameworkType | frameworkType[];
  IDE?: IDEType;
  other?: otherType | otherType[];
  subject?: subjectType[] | subjectType;
  link?: string | string[];
}
