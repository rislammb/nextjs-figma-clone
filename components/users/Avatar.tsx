import Image from "next/image";
import styles from "./Avatar.module.css";

export function Avatar({
  name,
  otherStyles,
}: {
  name: string;
  otherStyles: string;
}) {
  return (
    <div
      className={`${styles.avatar} ${otherStyles} h-9 w-9`}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        className={styles.avatar_picture}
        width={40}
        height={40}
        alt={name}
      />
    </div>
  );
}
