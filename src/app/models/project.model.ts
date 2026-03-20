import { clientType } from './client.type';
import { CollaboratorKey } from './collaborators.model';
import { Picture } from './picture.model';
import {
  databaseKey,
  FrameworkKey,
  IDEKey,
  LangageKey,
  LibrairieKey,
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
  librairie?: LibrairieKey | LibrairieKey[];
  IDE?: IDEKey | IDEKey[];
  database?: databaseKey | databaseKey[];
  software?: SoftwareKey | SoftwareKey[];
  other?: OtherKey | OtherKey[];
}
