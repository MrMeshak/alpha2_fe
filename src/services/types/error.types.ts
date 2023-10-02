export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class EmptyInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmptyInputError';
  }
}
