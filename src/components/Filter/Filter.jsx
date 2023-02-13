import { Label, Input, Container } from '../Filter/Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import { selectFilter } from 'components/redux/selector';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

  const onFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
      <Container>
        <Label > Find contacts by name:
            <Input type="text" value={filter} onChange={onFilterChange} />
      </Label>
      </Container>
    )
}