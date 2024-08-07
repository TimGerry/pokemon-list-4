import { OptionalPipe } from './optional.pipe';

describe('OptionalPipe', () => {
  let sut: OptionalPipe;

  beforeEach(() => {
    sut = new OptionalPipe();
  });

  it('create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should display value if present', () => {
    // arrange
    const expected = 'present value';
    
    // act
    const actual = sut.transform(expected);

    // assert
    expect(actual).toBe(expected);
  });

  it('should display message if no value present', () => {
    // arrange
    const expected = '/';

    // act
    const actual = sut.transform(undefined, expected);

    // assert
    expect(actual).toBe(expected);
  });

  it('should display default if no value present', () => {
    // act
    const actual = sut.transform(undefined);

    // assert
    expect(actual).toBe('-');
  });
});
