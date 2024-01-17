import { RedocTryItOutConfig } from '../src/config/redoc-try-it-out-config';

test('test that redocVersion can be overridden', () => {
    const foo = new RedocTryItOutConfig("", { redocVersion: "foo" })
    expect(foo.redocVersion).toEqual("foo")
});