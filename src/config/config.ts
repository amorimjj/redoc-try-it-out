export abstract class Config<T> {
    public readonly options:T;

    public constructor(options: T) {
        this.options = options;
        for ( const key of Object.keys(options) as Array<keyof Config<T>> ) {
            const option = (key in this ? key : `_${key}` as keyof Config<T>);
            if ( option in this ) {
                (this as any)[option] = (options as any)[key];
            }
        }
    }

    protected get cdnUrl(): string {
        return 'https://cdn.jsdelivr.net/npm';
    }
}
