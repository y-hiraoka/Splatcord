import { AxiosError } from "axios";
import { HttpResponseCodes } from ".";

export class BadRequestError extends Error {
  constructor() {
    super("The request was improperly formatted, or the server couldn't understand it.");
    this.name = new.target.name;
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super("The Authorization header was missing or invalid.");
    this.name = new.target.name;
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("The Authorization token you passed did not have permission to the resource.");
    this.name = new.target.name;
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("The resource at the location specified doesn't exist.");
    this.name = new.target.name;
  }
}

export class MethodNotAllowedError extends Error {
  constructor() {
    super("The HTTP method used is not valid for the location specified.");
    this.name = new.target.name;
  }
}

export class TooManyRequestsError extends Error {
  constructor() {
    super("You've made too many requests, see Rate Limits.");
    this.name = new.target.name;
  }
}

export const errorHandler = (error: AxiosError): Error => {
  if (!error.response) throw error;

  switch (error.response.status) {
    case HttpResponseCodes.BAD_REQUEST:
      throw new BadRequestError();

    case HttpResponseCodes.UNAUTHORIZED:
      throw new UnauthorizedError();

    case HttpResponseCodes.FORBIDDEN:
      throw new ForbiddenError();

    case HttpResponseCodes.NOT_FOUND:
      throw new NotFoundError();

    case HttpResponseCodes.METHOD_NOT_ALLOWED:
      throw new MethodNotAllowedError();

    case HttpResponseCodes.TOO_MANY_REQUESTS:
      throw new TooManyRequestsError();

    default:
      throw error;
  }
}