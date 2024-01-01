import ModelBase from 'App/ModelBase';
import { Image } from 'Movie/Movie';

interface Performer extends ModelBase {
  foreignId: string;
  fullName: string;
  monitored: boolean;
  rootFolderPath: string;
  images: Image[];
  gender: string;
  sortTitle: string;
  tags: number[];
}

export default Performer;