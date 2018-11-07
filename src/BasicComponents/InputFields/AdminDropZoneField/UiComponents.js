import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus';

export const DropZoneField = styled(Dropzone)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 8rem;
    border: 1px solid ${({ theme }) => theme.borders.defaultColor};
    border-radius: ${({ theme }) => theme.borders.radius};
`;

export const PlusIcon = styled(Icon).attrs({
    icon: plus,
    size: 32,
})``;

export const ThumbsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

export const Thumb = styled.div`
    display: inline-flex;
    border-radius: ${({ theme }) => theme.borders.radius};
    border: 1px solid ${({ theme }) => theme.borders.defaultColor};
    margin: 0 .5rem .5rem 0;
    width: 100px;
    height: 100px;
    padding: .25rem;
`;

export const ThmubInner = styled.div`
    display: flex;
    overflow: hidden;
`;

export const Img = styled.img`
    display: block;
    width: auto;
    height: 100%;
`;
