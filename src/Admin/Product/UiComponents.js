import styled from 'styled-components';
import { Form } from 'formik';


export const FieldContainer = styled(Form)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 800px;
    grid-gap: .5rem;
`;

export const FullWidthWrapper = styled.div`
    grid-column: 1 / 3;
`;
