const type = {
  font300: 'MuseoSansRounded300',
  font500: 'MuseoSansRounded500',
  font700: 'MuseoSansRounded700',
};

const size = {
  h1: 18,
  input: 16,
  regular: 12,
  medium: 14,
  larger: 16,
  label: 16,
  baseLineHeight: 16,
};

const style = {
  h1: {
    fontFamily: type.font500,
    fontSize: size.h1,
    fontWeight: '500',
  },
  normal: {
    fontFamily: type.font300,
    fontSize: size.regular,
    lineHeight: size.baseLineHeight,
  },
  input: {
    fontFamily: type.font300,
    fontSize: size.input,
    fontWeight: '500',
  },
};

export default {
  type,
  size,
  style,
};
