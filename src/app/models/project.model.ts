import { clientType } from './client.type';
import { CollaboratorKey } from './collaborators.model';
import { Picture } from './picture.model';
import {
  FrameworkKey,
  IDEKey,
  LangageKey,
  OtherKey,
  SoftwareKey,
  SubjectKey,
} from './technologies.model';

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
  subject?: SubjectKey | SubjectKey[];
  link?: string | string[];
  langage?: LangageKey | LangageKey[];
  framework?: FrameworkKey | FrameworkKey[];
  IDE?: IDEKey | IDEKey[];
  software?: SoftwareKey | SoftwareKey[];
  other?: OtherKey | OtherKey[];
}
