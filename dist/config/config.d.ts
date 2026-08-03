export declare abstract class Config<T> {
    readonly options: T;
    constructor(options: T);
    protected get cdnUrl(): string;
}
