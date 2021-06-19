const type = {
  base: 'Leftist Mono Sans Regular',
};

const size = {
  h1: 18,
  input: 16,
  regular: 12,
  medium: 14,
  larger: 16,
  label: 16,
  baseLineHeight: '16',
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
    fontWeight: '500',
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
    lineHeight: size.baseLineHeight,
  },
  input: {
    fontFamily: type.base,
    fontSize: size.input,
    fontWeight: '500',
  },
};

export default {
  type,
  size,
  style,
};
