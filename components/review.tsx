interface Props {
    children: React.ReactNode;
    by: string;
}

const Review = ({ children, by }: Props ) => (
    <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
        <div className="text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tight ">
            &ldquo;{children}&rdquo;
        </div>
        <div className="mt-6">{by}</div>
    </div>
)

export default Review;