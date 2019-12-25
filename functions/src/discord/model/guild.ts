import { PartialGuild } from "..";
import { ImageBaseUrl } from "../constant";

export class PartialGuildImpl implements PartialGuild {
  id: string;
  name: string;
  icon: string;
  owner?: boolean;
  permissions?: number;
  features: string[];

  constructor(obj: PartialGuild) {
    this.id = obj.id;
    this.name = obj.name;
    this.icon = obj.icon;
    this.owner = obj.owner;
    this.permissions = obj.permissions;
    this.features = obj.features;
  }

  guildIconUrl = (extension: "png" | "jpeg" | "webp") => {
    if (!this.icon) return null;

    return `${ImageBaseUrl}/icons/${this.id}/${this.icon}.${extension}`;
  };
}
