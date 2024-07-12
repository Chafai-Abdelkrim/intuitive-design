import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member = ({ id, name, socialId, link }: Props) => {
  return (
    <div>
      <Image
        src={`/assets/team/members_faces_${id}.png`}
        alt={name}
        width={1366}
        height={1555}
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link} target="_blank">
          {socialId}
        </Link>
      </div>
    </div>
  );
};

export default Member;
