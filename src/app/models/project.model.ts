import { clientType } from './client.type';
import { Collaborator } from './collaborators.model';
import { Image } from './images.model';

export class ProjectModel {
  description!: string;
  productTime!: number;
  images: Image[] = [];

  constructor(
    public name: string,
    public madeFor: clientType | undefined,
    public collaborators?: Collaborator[],
  ) {}
}
