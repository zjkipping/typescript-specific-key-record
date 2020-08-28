
type DevConfigurationNames = 'test' | 'things' | 'foo';

type ApiUrlMapping<T extends string> = Record<T, string>;

const urls: ApiUrlMapping<DevConfigurationNames> = {
  test: '',
  things: '',
  foo: ''
}
