import styled from "styled-components";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: "Changa", sans-serif;
    color: #444649;
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 9rem;
    background: #444649;
  }
`;

export const StyledSlide = styled.div`
    img {
        height: 28rem;
    }

    h3{
        font-size: 1.1rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
    }

    dt {
        color: #e31b6d;
    }
`