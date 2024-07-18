import { useRef, useContext, createContext } from "react";

interface WrapperProps {
    children: React.ReactNode;
  numOfPages: number;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper = ({ children, numOfPages }: WrapperProps) => {
    return (
        <div className="relative bg-black text-white">
            Tile wrapper
        </div>
    )
}