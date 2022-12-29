import styles from "../../styles/Home.module.css";
("");

export default function Header() {
  return (
    <div className={styles.description}>
      <p className="font-sans text-xl font-bold">BlueRoof</p>
      <div className="flex items-center justify-center gap-4">
        <a className="font-sans text-base font-semibold">Home</a>
        <a className="font-sans text-base font-semibold">BlueRoof</a>
        <a className="font-sans text-base font-semibold">Results</a>
      </div>
    </div>
  );
}
