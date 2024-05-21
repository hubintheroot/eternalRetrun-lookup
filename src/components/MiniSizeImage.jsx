import styled from "styled-components";
import { useSelector } from "react-redux";

const Li = styled.li`
    display: flex;
    width: 84px;
    height: 84px;
    border: .1rem solid rgba(0, 0, 0, .2);
    border-radius: .5rem;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        border: .1rem solid #e460ff;
    }
`;
export const Img = styled.img`
    object-fit: cover;
    object-position: -1px -1px;
    width: ${props => props.$preview && `${props.$preview + 2}px`};
    height: ${props => props.$preview && `${props.$preview}px`};
    box-sizing: border-box;
    background-image: url(${process.env.REACT_APP_BACKGROUND_IMAGE_PATH});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Skel = styled(Li)`
    background-color: lightgrey;
    border: none;
    &:hover {
        cursor: default;
        border: none;
    }
`

export default function MiniSizeImage({data}){
    const loading = useSelector(state => state.imageLoaded.detailLoaded);

    return ( 
        <>
            <Skel style={{display: loading ? 'block': 'none'}}></Skel>
            <Li onClick={data.handler.selectedImg} style={{display: loading ? 'none': 'block'}}>
                <Img
                    src={data.src}
                    alt={data.alt}
                    onError={data.handler.onError}
                    onLoad={data.handler.onLoad}
                    $preview={data.size}
                />
            </Li>
        </>
    )

}