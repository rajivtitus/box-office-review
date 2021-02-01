import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {

        scrollbar-color: darkgray black;
        scrollbar-width: thin;
    
    @media (min-width: 1450px){
        font-size: 115%;
    }

    @media (max-width: 1225px) {
        font-size: 85%;
    }

}

    body {

        font-family: 'Source Sans Pro', sans-serif;

        h1, h2 {
            font-family: 'Poppins', sans-serif;
        }

        h1 {
            font-size: 2.75rem;
        }

        h2 {
            font-size: 2.25rem;
        }

        h3 {
            font-size: 1.75rem;
        }

        p {
            font-size: 1.15rem;
        }

        input {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 1.15rem;
        }
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey; 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: darkgray; 
            border-radius: 10px;
            &:hover{
                background: red; 
            }
        }
    }
    
`;

export default GlobalStyle;
