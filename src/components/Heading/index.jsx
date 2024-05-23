import * as Styled from './styles';
import P from 'prop-types';

const Heading = ({
  children,
  fontLight = false,
  as = 'h1',
  size = 'medium',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      fontLight={fontLight}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  fontLight: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'large', 'huge']),
  uppercase: P.bool,
};

export default Heading;
