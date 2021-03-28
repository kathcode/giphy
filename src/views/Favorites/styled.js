import styled from 'styled-components';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export const Container = styled.div`
  grid-template-columns: 22% 22% 22% 22%;
  grid-template-rows: auto;
  column-gap: 15px;
  row-gap: 15px;
  display: grid;
  justify-content: center;
  margin-top: 20px;
`;

export const Icon = styled(KeyboardBackspaceIcon)`
  margin-left: 10px;
`;

export const NoItemsMessage = styled.div`
  text-align: center;
`;