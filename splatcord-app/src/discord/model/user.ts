import { User } from "..";
import { ImageBaseUrl } from "../constant";

export class UserImpl implements User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  locale: string;
  verified: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;

  constructor(obj: User) {
    this.id = obj.id;
    this.username = obj.username;
    this.discriminator = obj.discriminator;
    this.avatar = obj.avatar;
    this.bot = obj.bot;
    this.system = obj.system;
    this.mfa_enabled = obj.mfa_enabled;
    this.locale = obj.locale;
    this.verified = obj.verified;
    this.email = obj.email;
    this.flags = obj.flags;
    this.premium_type = obj.premium_type;
  }

  userAvatarUrl = (extenstion: "png" | "jpeg" | "webp" | "gif") => {
    if (!this.avatar) return null;

    //  In the case of endpoints that support GIFs, the hash will begin with a_ if it is available in GIF format. 
    if (extenstion === "gif" && this.avatar.startsWith("a_")) return null;

    return `${ImageBaseUrl}/avatars/${this.id}/${this.avatar}.${extenstion}`;
  };

  get defaultUserAvatarUrl() { return `${ImageBaseUrl}/embed/avatars/${Number(this.discriminator) % 5}.png` }
}