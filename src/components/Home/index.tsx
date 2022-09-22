import Image from "next/image";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

function Home(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {Array(24)
          .fill(undefined)
          .map((_, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  src="/001bj/001bj-001.png"
                />
              </div>
              <h2>ブラックジャックによろしく</h2>
              <span>佐藤秀峰</span>
            </li>
          ))}
        {Array(10)
          .fill(undefined)
          .map((_, index) => (
            <li className={styles.item} key={index}>
              <Spacer grow={1} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
