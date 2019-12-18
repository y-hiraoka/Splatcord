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

export class TooManyRequestsError extends Error {
  constructor() {
    super("You've made too many requests, see Rate Limits.");
    this.name = new.target.name;
  }
}