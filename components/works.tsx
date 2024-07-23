import { TileBackground, TileContent, TileWrapper } from "./tile";

const Works = () => {
    return (
       <TileWrapper numOfPages={3}>
            <TileBackground></TileBackground>
            <TileContent>Foo</TileContent>
            <TileContent>bar</TileContent>
            <TileContent>baz</TileContent>
       </TileWrapper>
       
    )
}

export default Works;