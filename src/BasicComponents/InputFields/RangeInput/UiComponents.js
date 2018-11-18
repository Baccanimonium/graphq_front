import styled from 'styled-components';

export const InputStyles = styled.div`
    .input-range__slider {
        appearance: none;
        background: ${({ theme }) => theme.defaultColor};
        border: 2px solid ${({ theme }) => theme.mainElementsColor};
        border-radius: 100%;
        cursor: pointer;
        display: block;
        height: 1rem;
        margin-left: -0.5rem;
        margin-top: -0.6rem;
        outline: none;
        position: absolute;
        top: 50%;
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        width: 1rem;
    }
    .input-range__slider:active {
        transform: scale(1.3); 
    }
    .input-range__slider:focus {
        box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); 
    }
    .input-range--disabled .input-range__slider {
        background: #cccccc;
        border: 1px solid #cccccc;
        box-shadow: none;
        transform: none; 
    }
    
    .input-range__slider-container {
        transition: left 0.3s ease-out; 
    }
    
    .input-range__label {
        display: none;
    }
    
    .input-range__track {
        background: #e9e9e9;
        border-radius: 0.3rem;
        cursor: pointer;
        display: block;
        height: 0.125rem;
        position: relative;
        transition: left 0.3s ease-out, width 0.3s ease-out;
    }
    .input-range--disabled .input-range__track {
        background: #eeeeee;
    }
    
    .input-range__track--background {
        left: 0;
        margin-top: -0.15rem;
        position: absolute;
        right: 0;
        top: 50%;
    }
    
    .input-range__track--active {
        background: ${({ theme }) => theme.mainElementsColor};
     }
    
    .input-range {
        height: 1rem;
        position: relative;
        width: 100%;
    }
`;
