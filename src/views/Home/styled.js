import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';

export const Container = styled.div`
  grid-template-columns: 22% 22% 22% 22%;
  grid-template-rows: auto;
  column-gap: 15px;
  row-gap: 15px;
  display: grid;
  justify-content: center;
`;

export const PaginationC = styled(Pagination)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;

export const ChipsContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  div {
    margin-right: 5px;
  }
`;