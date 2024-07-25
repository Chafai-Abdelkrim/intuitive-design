import Image from "next/image";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

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
                <div>
                  <WorkLink href="#">Atlantic Hotel</WorkLink>
                </div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Brande, Design graphique, Logo, Catalogue
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/Atlantic-Hotel.jpg"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Atlantic Hotel"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>
                  <WorkLink href="#">Natural Beauty Rituals</WorkLink>
                </div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Brande, Design graphique, Logo, Packaging
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/NRB-creme.jpg"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="NRB creme"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>
                  <WorkLink href="#">ENSA AGADIR</WorkLink>
                </div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Catalogue, Design graphique, Communication
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/ENSA.jpg"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="ENSA"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
