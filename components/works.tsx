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
                <div>We Built</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="#">Pink panda</WorkLink>&apos;s app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/panda.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt=""
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
                <div>We made</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="#">stackwallet</WorkLink>&nbsp;faster
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/stackswallet.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt=""
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
                <div>We help</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="#">showtime</WorkLink> ship faster.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/showtime.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt=""
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
