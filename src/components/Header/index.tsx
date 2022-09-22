import Image from "next/image";
import { MouseEventHandler } from "react";
import { HiOutlineDocumentAdd, HiOutlineMenu } from "react-icons/hi";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

export type HeaderProps = {
  onToggleMenu: MouseEventHandler<HTMLButtonElement>;
};

function Header({ onToggleMenu }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.menuButtonWrapper}>
        <button className={styles.button} onClick={onToggleMenu}>
          <HiOutlineMenu size={24} />
        </button>
      </div>
      <h1 className={styles.h1}>Coretz</h1>
      <Spacer grow={1} />
      <button className={styles.button}>
        <HiOutlineDocumentAdd size={24} />
      </button>
      <Spacer width={32} />
      <a
        href="#"
        onClick={(e): void => {
          e.preventDefault();

          console.log("aaa");
        }}
      >
        <Image
          alt="Dan Abramov"
          height={32}
          src="https://bit.ly/dan-abramov"
          style={{ borderRadius: "100vmax" }}
          width={32}
        />
      </a>
    </header>
  );
}

export default Header;
