class AppError {
    public readonly message: string;

    public readonly status: number;

    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

export default AppError;