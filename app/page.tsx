import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import nova from "../public/nova.jpg";
import hd from "../public/hd.png";
import Link from "next/link";
import apple from "../public/apple.png";
import playstore from "../public/playstore.png";

export const metadata = {
  title: "Welcome | Nova Music",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.fu}>
        <section className="grid-cols-2 gap-10 lg:grid md:flex">
          <span>
            <Image className={styles.img} src={nova} alt="nova" />

            <h6 className={styles.hi}>
              Everyday <br />
              Things are{" "}
            </h6>
            <h6 className={styles.ho}>Colorful</h6>
            <h6 className={styles.po}>
              Once you realize you should enjoy the small things, life changes
              to being boring to extremely colorful.
            </h6>

            <Image className={styles.im} src={hd} alt="yo" />
            <section className="flex items-center justify-around md:justify-between">
              <button className={styles.btn}>
                <Link className={styles.btns} href="/home">
                  Join the hub
                </Link>
              </button>
              <section className="flex flex-row-reverse items-center gap-x-3">
                <div className="flex items-center justify-center py-2 border-2 border-black rounded-full w-11 h-11 shrink-0 grow-0">
                  <Image
                    height={24}
                    width={24}
                    src={playstore}
                    alt="playstore"
                  />
                </div>
                <div className="flex items-center justify-center py-2 border-2 border-black rounded-full w-11 h-11 shrink-0 grow-0">
                  <Image height={24} width={24} src={apple} alt="apple" />
                </div>
              </section>
            </section>
          </span>
          <Image
            height={440}
            width={440}
            className="items-end hidden object-cover full lg:block"
            src={hd}
            alt="yo"
          />
        </section>
      </main>
    </>
  );
}
