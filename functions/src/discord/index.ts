/**
 * User Structure
 * https://discordapp.com/developers/docs/resources/user#user-object
 */
export interface User {
  /** the user's id */
  id: string,

  /** the user's username, not unique across the platform */
  username: string,

  /** the user's 4-digit discord-tag */
  discriminator: string,

  /** the user's avatar hash */
  avatar: string,

  /** whether the user belongs to an OAuth2 application */
  bot?: boolean,

  /** whether the user is an Official Discord System user (part of the urgent message system) */
  system?: boolean,

  /** whether the user has two factor enabled on their account */
  mfa_enabled?: boolean,

  /** the user's chosen language option */
  locale: string,

  /** whether the email on this account has been verified */
  verified: boolean,

  /** the user's email */
  email?: string,

  /** the flags on a user's account */
  flags?: number,

  /** the type of Nitro subscription on a user's account */
  premium_type?: number,

  /** default user's avatar image url  */
  defaultUserAvatarUrl: string;

  /** returns user's avatar image url. if not exists, returns null. */
  userAvatarUrl: (extenstion: "png" | "jpeg" | "webp" | "gif") => string | null;
}

export interface PartialGuild {
  /** guild id */
  id: string,

  /** guild name (2-100 characters) */
  name: string,

  /** icon hash */
  icon: string,

  /** whether or not the user is the owner of the guild */
  owner?: boolean,

  /** total permissions for the user in the guild (does not include channel overrides) */
  permissions?: number,

  /** enabled guild features */
  features: string[],

  guildIconUrl: (extension: "png" | "jpeg" | "webp") => string | null,
}

/**
 * Guild Structure
 * https://discordapp.com/developers/docs/resources/guild#guild-object
 */
export interface Guild extends PartialGuild {
  /** splash hash */
  splash: string | null;

  /** id of owner */
  owner_id: string;

  /** voice region id for the guild */
  region: string;

  /** id of afk channel */
  afk_channel_id: string | null;

  /** afk timeout in seconds */
  afk_timeout: number;

  /** whether this guild is embeddable (e.g. widget) */
  embed_enabled?: boolean;

  /** if not null, the channel id that the widget will generate an invite to */
  embed_channel_id?: string;

  /** verification level required for the guild */
  verification_level: number;

  /** default message notifications level */
  default_message_notifications: number;

  /* explicit content filter level */
  explicit_content_filter: number;

  /* roles in the guild */
  roles: Role[];

  /* custom guild emojis */
  emojis: Emoji[];

  /* required MFA level for the guild */
  mfa_level: number;

  /* application id of the guild creator if it is bot-created */
  application_id: string | null;

  /* whether or not the server widget is enabled */
  widget_enabled?: boolean;

  /* the channel id for the server widget */
  widget_channel_id?: string;

  /* the id of the channel to which system messages are sent */
  system_channel_id: string | null;

  /* when this guild was joined at */
  joined_at?: string;

  /* whether this is considered a large guild */
  large?: boolean;

  /* whether this guild is unavailable */
  unavailable?: boolean;

  /* total number of members in this guild */
  member_count?: number;

  /* (without the guild_id key) */
  voice_states?: any[];

  /* users in the guild */
  members?: any[];

  /* channels in the guild */
  channels?: any[];

  /* presences of the users in the guild */
  presences?: any[];

  /* the maximum amount of presences for the guild (the default value, currently 5000, is in effect when null is returned) */
  max_presences?: number | null;

  /* the maximum amount of members for the guild */
  max_members?: number;

  /* the vanity url code for the guild */
  vanity_url_code: string | null;

  /* the description for the guild */
  description: string | null;

  /* banner hash */
  banner: string | null;

  /* premium tier */
  premium_tier: number;

  /* the total number of users currently boosting this server */
  premium_subscription_count?: number;

  /* the preferred locale of this guild only set if guild has the ""DISCOVERABLE"" feature, defaults to en-US */
  preferred_locale: string;
}

/**
 * Webhook Structure
 * https://discordapp.com/developers/docs/resources/webhook#webhook-object
 */
export interface Webhook {
  /** the id of the webhook */
  id: string,

  /** the type of the webhook */
  type: WebhookTypes,

  /** the guild id this webhook is for */
  guild_id?: string,

  /** the channel id this webhook is for */
  channel_id: string,

  /** the user this webhook was created by (not returned when getting a webhook with its token) */
  user?: User,

  /** the default name of the webhook */
  name: string,

  /** the default avatar of the webhook */
  avatar: string,

  /** the secure token of the webhook (returned for Incoming Webhooks) */
  token?: string,
}

enum WebhookTypes {
  /** Incoming Webhooks can post messages to channels with a generated token */
  Incoming = 1,

  /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels */
  ChannelFollower = 2,
}

/**
 * Role Structure
 * https://discordapp.com/developers/docs/topics/permissions#role-object
 */
export interface Role {
  /** role id */
  id: string;

  /** role name */
  name: string;

  /** integer representation of hexadecimal color code */
  color: number;

  /** if this role is pinned in the user listing */
  hoist: boolean;

  /** position of this role */
  position: number;

  /** permission bit set */
  permissions: number;

  /** whether this role is managed by an integration */
  managed: boolean;

  /** whether this role is mentionable */
  mentionable: boolean;
}

/**
 * Emoji Structure
 * https://discordapp.com/developers/docs/resources/emoji#emoji-object
 */
export interface Emoji {
  /* emoji id */
  id: string | null;

  /* emoji name */
  name: string | null;

  /* roles this emoji is whitelisted to */
  roles?: string[];

  /* user that created this emoji */
  user?: User;

  /* whether this emoji must be wrapped in colons */
  require_colons?: boolean;

  /* whether this emoji is managed */
  managed?: boolean;

  /* whether this emoji is animated */
  animated?: boolean;
}

/**
 * Webhook execution object Structure
 * https://discordapp.com/developers/docs/resources/webhook#execute-webhook
 */
export interface WebhookExecutionObject {
  /** the message contents (up to 2000 characters) */
  content: string;

  /** override the default username of the webhook */
  username?: string;

  /** override the default avatar of the webhook */
  avatar_url?: string;

  /** true if this is a TTS message */
  tts?: boolean;

  /** embedded rich content */
  embeds?: EmbedObject[];
}

/** Embed Structure */
export interface EmbedObject {
  /** title of embed */
  title?: string;

  /** type of embed (always "rich" for webhook embeds) */
  type?: string;

  /** description of embed */
  description?: string;

  /** url of embed */
  url?: string;

  /** timestamp of embed content */
  timestamp?: Date;

  /** color code of the embed */
  color?: number;

  /** footer information */
  footer?: EmbedFooter;

  /** image information */
  image?: EmbedImage;

  /** thumbnail information */
  thumbnail?: EmbedImage;

  /** video information */
  video?: EmbedVideo;

  /** provider information */
  provider?: EmbedProvider;

  /** author information */
  author?: EmbedAuthor;

  /** fields information */
  fields?: EmbedField[];
}

/** Embed Footer Structure */
interface EmbedFooter {
  /** footer text */
  text: string;

  /** url of footer icon (only supports http(s) and attachments) */
  icon_url?: string;

  /** a proxied url of footer icon */
  proxy_url?: string;
}

/** Embed Image Structure */
interface EmbedImage {
  /** source url of image (only supports http(s) and attachments) */
  url?: string;

  /** a proxied url of the image */
  proxy_url?: string;

  /** height of image */
  height?: number;

  /** width of image */
  width?: number;
}

/** Embed Video Structure  */
interface EmbedVideo {
  /** source url of video */
  url?: string;

  /** height of video */
  height?: number;

  /** height of video */
  width?: number;
}

/** Embed Provider Structure */
interface EmbedProvider {
  /** name of provider */
  name?: string;

  /** url of provider */
  url?: string;
}

/** Embed Author Structure */
interface EmbedAuthor {
  /** name of author */
  name?: string;

  /** url of author */
  url?: string;

  /** url of author icon (only supports http(s) and attachments) */
  icon_url?: string;

  /** a proxied url of author icon */
  proxy_icon_url?: string;
}

/** Embed Field Structure */
interface EmbedField {
  /** name of the field */
  name: string;

  /** value of the field */
  value: string;

  /** whether or not this field should display inline */
  inline?: boolean;
}

export interface AccessTokenResponse {
  access_token: string;

  expires_in: number;

  refresh_token: string;

  scope: string;

  token_type: string;

  guild?: PartialGuild;

  webhook?: Webhook;
}

/**
 * https://discordapp.com/developers/docs/topics/opcodes-and-status-codes#http
 */
export enum HttpResponseCodes {
  /** The request completed successfully */
  OK = 200,

  /** The entity was created successfully */
  CREATED = 201,

  /** The request completed successfully but returned no content */
  NO_CONTENT = 204,

  /** The entity was not modified (no action was taken) */
  NOT_MODIFIED = 304,

  /** The request was improperly formatted, or the server couldn't understand it */
  BAD_REQUEST = 400,

  /** The Authorization header was missing or invalid */
  UNAUTHORIZED = 401,

  /** The Authorization token you passed did not have permission to the resource */
  FORBIDDEN = 403,

  /** The resource at the location specified doesn't exist */
  NOT_FOUND = 404,

  /** The HTTP method used is not valid for the location specified */
  METHOD_NOT_ALLOWED = 405,

  /** You've made too many requests, see Rate Limits */
  TOO_MANY_REQUESTS = 429,

  /** There was not a gateway available to process your request. Wait a bit and retry */
  GATEWAY_UNAVAILABLE = 502,
}

import { TokenClient } from "./token";
import { UserClient } from "./users";
import { WebhookClient } from "./webhooks";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
  MethodNotAllowedError,
} from "./errors";

export {
  TokenClient,
  UserClient,
  WebhookClient,
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
  MethodNotAllowedError,
}