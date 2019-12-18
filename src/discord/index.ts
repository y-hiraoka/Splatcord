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

export { WebhookClient } from "./Webhook";

export {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
} from "./Error";