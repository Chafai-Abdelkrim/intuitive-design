import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft } from "./work";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
                <WorkLeft progress={progress}>
                    <div>We Built</div>
                </WorkLeft>
              <span>{progress}</span>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>bar</TileContent>
      <TileContent>baz</TileContent>
    </TileWrapper>
  );
};

export default Works;
