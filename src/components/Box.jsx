import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  shadow,
  space,
  typography,
} from 'styled-system';

export const Box = styled('div')(
  { display: flex },
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  shadow,
  typography,
  grid
);
